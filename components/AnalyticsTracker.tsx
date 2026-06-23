'use client'

import { useEffect } from 'react'
import {
  trackBookNowClick,
  trackPhoneClick,
  trackWhatsAppClick,
  trackAppDownloadClick,
} from '@/lib/analytics'

const BOOK_NOW_TEXT = /book\s+(taxi\s+)?online/i
const ICABBI_HOST = 'webbooker.icabbi.com'

function isBookNowElement(el: HTMLElement): boolean {
  const text = (el.textContent || '').trim()
  if (BOOK_NOW_TEXT.test(text)) return true
  const href = el.getAttribute('href') || ''
  return href.includes(ICABBI_HOST)
}

/**
 * Delegates GA4 conversion events for server-rendered links and buttons
 * that do not have explicit onClick handlers in client components.
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target) return

      const anchor = target.closest('a')
      if (anchor instanceof HTMLElement && !anchor.getAttribute('data-gtm-tracked')) {
        const href = anchor.getAttribute('href') || ''

        if (href.includes('apps.apple.com')) {
          anchor.setAttribute('data-gtm-tracked', 'true')
          trackAppDownloadClick('ios')
          return
        }

        if (href.includes('play.google.com')) {
          anchor.setAttribute('data-gtm-tracked', 'true')
          trackAppDownloadClick('android')
          return
        }

        if (href.startsWith('tel:')) {
          anchor.setAttribute('data-gtm-tracked', 'true')
          trackPhoneClick()
          return
        }

        if (href.includes('wa.me') || href.includes('whatsapp.com')) {
          anchor.setAttribute('data-gtm-tracked', 'true')
          trackWhatsAppClick()
          return
        }

        if (isBookNowElement(anchor)) {
          anchor.setAttribute('data-gtm-tracked', 'true')
          trackBookNowClick()
        }
      }
    }

    document.addEventListener('click', handleClick, false)
    return () => document.removeEventListener('click', handleClick, false)
  }, [])

  return null
}
