'use client'

import { useHalloweenTheme } from './HalloweenThemeProvider'

export default function HalloweenFloatingElements() {
  const { isHalloweenActive } = useHalloweenTheme()

  if (!isHalloweenActive) return null

  return (
    <>
      {/* Floating Bats */}
      <div className="halloween-floating-bat" style={{ top: '15%', left: '10%', animationDelay: '0s', fontSize: '24px' }}>
        🦇
      </div>
      <div className="halloween-floating-bat" style={{ top: '25%', right: '15%', animationDelay: '2s', fontSize: '20px' }}>
        🦇
      </div>
      <div className="halloween-floating-bat" style={{ top: '45%', left: '5%', animationDelay: '4s', fontSize: '28px' }}>
        🦇
      </div>
      <div className="halloween-floating-bat" style={{ top: '65%', right: '8%', animationDelay: '1s', fontSize: '22px' }}>
        🦇
      </div>

      {/* Floating Leaves */}
      <div className="halloween-floating-leaf" style={{ top: '20%', left: '20%', animationDelay: '1s' }}>
        🍂
      </div>
      <div className="halloween-floating-leaf" style={{ top: '35%', right: '25%', animationDelay: '3s' }}>
        🍂
      </div>
      <div className="halloween-floating-leaf" style={{ top: '55%', left: '15%', animationDelay: '5s' }}>
        🍂
      </div>
      <div className="halloween-floating-leaf" style={{ top: '75%', right: '20%', animationDelay: '2s' }}>
        🍂
      </div>
    </>
  )
}

