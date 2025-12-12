'use client'

import { useEffect } from 'react'
import { trackButtonClick, trackFormSubmission, getCurrentPagePath } from '@/lib/analytics'

/**
 * AnalyticsTracker Component
 * 
 * Sets up event delegation to automatically track:
 * - All button clicks (including "Book Now", "Get Quote", "Call Now", "WhatsApp", etc.)
 * - All form submissions (booking forms, contact forms, lead forms)
 * 
 * Uses event delegation so no individual handlers need to be added to buttons or forms.
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    // Wait for gtag to be available
    const checkGtag = setInterval(() => {
      if (typeof window !== 'undefined' && window.gtag) {
        clearInterval(checkGtag)
        setupEventTracking()
      }
    }, 100)

    // Cleanup interval after 10 seconds if gtag never loads
    const timeout = setTimeout(() => {
      clearInterval(checkGtag)
    }, 10000)

    return () => {
      clearInterval(checkGtag)
      clearTimeout(timeout)
    }
  }, [])

  const setupEventTracking = () => {
    // Ensure we're on the client side
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return
    }

    // Track button clicks using event delegation
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      
      // Find the closest button or anchor element (handles nested elements like icons inside buttons)
      let button: HTMLElement | null = null
      
      // Check for button elements
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        button = target.closest('button') || (target.tagName === 'BUTTON' ? target : null)
      }
      // Check for anchor tags that act as buttons (call links, WhatsApp links, etc.)
      else if (target.tagName === 'A' || target.closest('a')) {
        const anchor = target.closest('a') || (target.tagName === 'A' ? target : null)
        if (anchor) {
          const href = anchor.getAttribute('href') || ''
          // Track anchor tags that are buttons or have common button-like hrefs
          if (
            anchor.getAttribute('role') === 'button' ||
            href.startsWith('tel:') ||
            href.startsWith('mailto:') ||
            href.includes('wa.me') ||
            href.includes('whatsapp.com') ||
            anchor.classList.contains('button') ||
            anchor.classList.contains('btn')
          ) {
            button = anchor
          }
        }
      }

      if (button) {
        // Get button text - prioritize aria-label, then text content
        const buttonText = 
          button.getAttribute('aria-label') ||
          button.getAttribute('title') ||
          button.textContent?.trim() ||
          button.getAttribute('data-button-text') ||
          'Unknown Button'

        // Track the button click
        trackButtonClick(buttonText, getCurrentPagePath())
      }
    }, true) // Use capture phase to catch events early

    // Track form submissions using event delegation
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement

      if (form && form.tagName === 'FORM') {
        // Get form ID - prioritize id, then name, then a generated identifier
        const formId = 
          form.id ||
          form.getAttribute('name') ||
          form.getAttribute('data-form-id') ||
          form.getAttribute('aria-label') ||
          form.className?.split(' ')[0] || // Use first class name as fallback
          'unknown_form'

        // Track the form submission
        trackFormSubmission(formId, getCurrentPagePath())
      }
    }, true) // Use capture phase to catch events early
  }

  // This component doesn't render anything
  return null
}
