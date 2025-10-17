'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface HalloweenThemeContextType {
  isHalloweenActive: boolean
  toggleHalloween: () => void
}

const HalloweenThemeContext = createContext<HalloweenThemeContextType | undefined>(undefined)

export function useHalloweenTheme() {
  const context = useContext(HalloweenThemeContext)
  if (context === undefined) {
    throw new Error('useHalloweenTheme must be used within a HalloweenThemeProvider')
  }
  return context
}

interface HalloweenThemeProviderProps {
  children: ReactNode
}

export function HalloweenThemeProvider({ children }: HalloweenThemeProviderProps) {
  const [isHalloweenActive, setIsHalloweenActive] = useState(false)

  useEffect(() => {
    // Check if we're in Halloween season (October)
    const now = new Date()
    const currentMonth = now.getMonth() + 1 // getMonth() returns 0-11
    const currentDay = now.getDate()
    
    // Activate Halloween theme during October, auto-disable after November 1st
    const shouldActivate = currentMonth === 10 || (currentMonth === 11 && currentDay === 1)
    
    setIsHalloweenActive(shouldActivate)
    
    // Auto-disable after November 1st
    if (currentMonth === 11 && currentDay > 1) {
      setIsHalloweenActive(false)
    }
  }, [])

  useEffect(() => {
    // Apply/remove Halloween theme class on body
    if (isHalloweenActive) {
      document.body.classList.add('halloween-theme')
      // Switch to Halloween favicon
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
      if (favicon) {
        favicon.href = '/favicon-halloween.svg'
      }
    } else {
      document.body.classList.remove('halloween-theme')
      // Switch back to regular favicon
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
      if (favicon) {
        favicon.href = '/favicon.png'
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('halloween-theme')
      // Restore regular favicon
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
      if (favicon) {
        favicon.href = '/favicon.png'
      }
    }
  }, [isHalloweenActive])

  const toggleHalloween = () => {
    setIsHalloweenActive(!isHalloweenActive)
  }

  const value = {
    isHalloweenActive,
    toggleHalloween
  }

  return (
    <HalloweenThemeContext.Provider value={value}>
      {children}
    </HalloweenThemeContext.Provider>
  )
}
