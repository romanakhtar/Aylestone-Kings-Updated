/**
 * Google Analytics 4 (GA4) Event Tracking Utilities
 *
 * Events are sent via window.gtag when available (loaded by ThirdPartyScripts).
 */

import type { MouseEvent } from 'react'

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'set' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: Array<unknown>
  }
}

export type GtagEventParams = Record<string, string | number | boolean | undefined>

/**
 * Full page URL for GA4 page_location.
 */
export function getPageLocation(): string {
  if (typeof window === 'undefined') {
    return ''
  }
  return window.location.href
}

/**
 * Fire a GA4 event via gtag. No-op if gtag is not loaded yet.
 */
export function trackEvent(eventName: string, params?: GtagEventParams): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return
  }

  try {
    window.gtag('event', eventName, params)
  } catch {
    // gtag unavailable or failed — ignore
  }
}

export function trackBookNowClick(): void {
  trackEvent('book_now_click', { page_location: getPageLocation() })
}

export function trackPhoneClick(): void {
  trackEvent('phone_click', { page_location: getPageLocation() })
}

export function trackWhatsAppClick(): void {
  trackEvent('whatsapp_click', { page_location: getPageLocation() })
}

export function trackAppDownloadClick(store: 'ios' | 'android'): void {
  trackEvent('app_download_click', { store, page_location: getPageLocation() })
}

export function trackFareEstimateUsed(): void {
  trackEvent('fare_estimate_used', { page_location: getPageLocation() })
}

function markTracked(element: HTMLElement): void {
  element.setAttribute('data-gtm-tracked', 'true')
}

export function onBookNowClick(e: MouseEvent<HTMLElement>): void {
  markTracked(e.currentTarget)
  trackBookNowClick()
}

export function onPhoneClick(e: MouseEvent<HTMLElement>): void {
  markTracked(e.currentTarget)
  trackPhoneClick()
}

export function onWhatsAppClick(e: MouseEvent<HTMLElement>): void {
  markTracked(e.currentTarget)
  trackWhatsAppClick()
}

export function onAppDownloadClick(store: 'ios' | 'android') {
  return (e: MouseEvent<HTMLElement>) => {
    markTracked(e.currentTarget)
    trackAppDownloadClick(store)
  }
}

/**
 * Safely initialize dataLayer and push events to GTM
 * @param eventData - The event data object to push to dataLayer
 */
export function pushToDataLayer(eventData: Record<string, any>): void {
  if (typeof window === 'undefined') {
    return
  }

  // Initialize dataLayer if it doesn't exist
  if (!window.dataLayer) {
    window.dataLayer = []
  }

  // Push event to dataLayer
  try {
    window.dataLayer.push(eventData)
  } catch (error) {
    console.error('Error pushing to dataLayer:', error)
  }
}

/**
 * Track a button click event
 * @param buttonText - The text content of the button
 * @param pagePath - The current page path
 */
export function trackButtonClick(buttonText: string, pagePath: string): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', 'button_click', {
    button_text: buttonText,
    page_path: pagePath,
  });
}

/**
 * Track a form submission event
 * @param formId - The ID or name of the form
 * @param pagePath - The current page path
 */
export function trackFormSubmission(formId: string, pagePath: string): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', 'form_submission', {
    form_id: formId,
    page_path: pagePath,
  });
}

/**
 * Get the current page path
 */
export function getCurrentPagePath(): string {
  if (typeof window === 'undefined') {
    return '/';
  }
  return window.location.pathname + window.location.search;
}
