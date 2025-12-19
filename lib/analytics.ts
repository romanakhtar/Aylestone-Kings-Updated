/**
 * Google Analytics 4 (GA4) Event Tracking Utilities
 * 
 * This file provides helper functions for tracking events with GA4.
 * Events are sent using the gtag function which should be available globally.
 */

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'set' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer?: Array<any>
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
