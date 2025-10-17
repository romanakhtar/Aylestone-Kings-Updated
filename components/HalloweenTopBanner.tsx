'use client'

import { useHalloweenTheme } from './HalloweenThemeProvider'

export default function HalloweenTopBanner() {
  const { isHalloweenActive } = useHalloweenTheme()

  if (!isHalloweenActive) return null

  return (
    <div className="halloween-top-banner" style={{ marginTop: '60px', marginBottom: '-100px' }} >
      🎃 Halloween Weekend – No Surge Prices, Book Now 🎃
    </div>
  )
}

