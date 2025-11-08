'use client'

import { useHalloweenTheme } from './HalloweenThemeProvider'

export default function HalloweenFloatingElements() {
  const { isHalloweenActive } = useHalloweenTheme()

  if (!isHalloweenActive) return null

  return (
    <> 
      {/* Floating spider-web */}
      <div 
        className="halloween-floating-bat text-4xl" 
        style={{ 
          right: '50%', 
          animationDelay: '1000s',
        } as React.CSSProperties}
      >
        🎃 
      </div>

      {/* Floating Bats */}
      <div 
        className="halloween-floating-bat text-4xl" 
        style={{ 
          bottom: '15%', 
          right: '10%', 
          animationDelay: '0s',
        } as React.CSSProperties}
      >
        🦇
      </div>
      <div 
        className="halloween-floating-bat text-4xl" 
        style={{ 
          top: '25%', 
          right: '15%', 
          animationDelay: '2s',
        } as React.CSSProperties}
      >
        👻 
      </div>
      <div 
        className="halloween-floating-bat text-5xl" 
        style={{ 
          top: '45%', 
          left: '5%', 
          animationDelay: '4s',
        } as React.CSSProperties}
      >
        🦇
      </div>
      <div 
        className="halloween-floating-bat text-[42px]" 
        style={{ 
          top: '65%', 
          right: '8%', 
          animationDelay: '1s',
        } as React.CSSProperties}
      >
        🦇
      </div>
      <div 
        className="halloween-floating-bat text-4xl" 
        style={{ 
          top: '15%', 
          right: '10%', 
          animationDelay: '0s',
        } as React.CSSProperties}
      >
        🦇
      </div>
      <div 
        className="halloween-floating-bat text-4xl" 
        style={{ 
          top: '25%', 
          left: '15%', 
          animationDelay: '2s',
        } as React.CSSProperties}
      >
        🦇
      </div>
      <div 
        className="halloween-floating-bat text-5xl" 
        style={{ 
          top: '45%', 
          right: '5%', 
          animationDelay: '4s',
        } as React.CSSProperties}
      >
        🦇
      </div>
      <div 
        className="halloween-floating-bat text-[42px]" 
        style={{ 
          top: '65%', 
          left: '8%', 
          animationDelay: '1s',
        } as React.CSSProperties}
      >
        🦇
      </div>

      {/* Floating Leaves */}
      <div 
        className="halloween-floating-leaf text-[42px]" 
        style={{ 
          top: '20%', 
          left: '20%', 
          animationDelay: '1s',
        } as React.CSSProperties}
      >
        🍂
      </div>
      <div 
        className="halloween-floating-leaf text-[42px]" 
        style={{ 
          top: '35%', 
          right: '25%', 
          animationDelay: '3s',
        } as React.CSSProperties}
      >
        🍂
      </div>
      <div 
        className="halloween-floating-leaf text-[42px]" 
        style={{ 
          top: '55%', 
          left: '15%', 
          animationDelay: '5s',
        } as React.CSSProperties}
      >
        🍂
      </div>
      <div 
        className="halloween-floating-leaf text-[42px]" 
        style={{ 
          top: '75%', 
          right: '20%', 
          animationDelay: '2s',
        } as React.CSSProperties}
      >
        🍂
      </div>
    </>
  )
}

