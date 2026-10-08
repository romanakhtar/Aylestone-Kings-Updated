'use client'

import Link from 'next/link'
import { useHalloweenTheme } from './HalloweenThemeProvider'

/**
 * Orange footer link to the Halloween landing page. Only rendered while the
 * Halloween theme is active (same window as the rest of the theme), so the
 * footer goes back to normal automatically on 1 November.
 *
 * The page itself stays live year-round so it keeps its search rankings.
 */
export default function HalloweenFooterLink() {
  const { isHalloweenActive } = useHalloweenTheme()

  if (!isHalloweenActive) return null

  return (
    <li>
      <Link
        href="/halloween-taxi-leicester"
        className="text-sm font-semibold text-[#FF7B00] hover:text-[#e06c00] transition-colors"
      >
         Halloween Taxi Leicester
      </Link>
    </li>
  )
}
