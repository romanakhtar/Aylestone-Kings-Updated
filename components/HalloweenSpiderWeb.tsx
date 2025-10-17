'use client'

import { useHalloweenTheme } from './HalloweenThemeProvider'

export default function HalloweenSpiderWeb() {
  const { isHalloweenActive } = useHalloweenTheme()

  if (!isHalloweenActive) return null

  return (
    <div className="halloween-spider-web">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Outer web ring */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        
        {/* Web spokes */}
        <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        <line x1="95" y1="50" x2="5" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        <line x1="82.5" y1="17.5" x2="17.5" y2="82.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        <line x1="17.5" y1="17.5" x2="82.5" y2="82.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        
        {/* Center dot */}
        <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.4"/>
      </svg>
    </div>
  )
}

