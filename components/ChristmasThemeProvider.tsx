'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface ChristmasThemeContextType {
  isChristmasActive: boolean
}

const ChristmasThemeContext = createContext<ChristmasThemeContextType | undefined>(undefined)

export function useChristmasTheme() {
  const context = useContext(ChristmasThemeContext)
  if (context === undefined) {
    // Return default value instead of throwing to prevent errors
    return { isChristmasActive: false }
  }
  return context
}

interface ChristmasThemeProviderProps {
  children: ReactNode
}

export function ChristmasThemeProvider({ children }: ChristmasThemeProviderProps) {
  // Initialize with false to match server-side rendering and prevent hydration mismatch
  const [isChristmasActive, setIsChristmasActive] = useState(false)

  useEffect(() => {
    // Check if we're in Christmas season (December 1-27)
    // Pathname check will be done in individual components
    // This runs only on client after hydration to prevent mismatch
    if (typeof window === 'undefined') return
    
    const now = new Date()
    const currentMonth = now.getMonth() + 1 // getMonth() returns 0-11
    const currentDay = now.getDate()
    
    // Activate Christmas theme from December 1st to December 27th
    const isChristmasSeason = currentMonth === 12 && currentDay >= 1 && currentDay <= 27
    
    setIsChristmasActive(isChristmasSeason)
  }, [])

  useEffect(() => {
    // Only run on client side to prevent hydration issues
    if (typeof window === 'undefined') return

    // Check if we're on the homepage
    const isHomepage = window.location.pathname === '/'
    
    // Only apply Christmas theme class on homepage during Christmas season
    if (isChristmasActive && isHomepage) {
      document.body.classList.add('christmas-theme')
    } else {
      document.body.classList.remove('christmas-theme')
    }

    // Listen for route changes (Next.js App Router)
    const handleRouteChange = () => {
      const currentPath = window.location.pathname
      if (currentPath === '/' && isChristmasActive) {
        document.body.classList.add('christmas-theme')
      } else {
        document.body.classList.remove('christmas-theme')
      }
    }
    
    // Listen to popstate for browser back/forward
    window.addEventListener('popstate', handleRouteChange)
    
    // Poll for route changes (Next.js App Router doesn't have a built-in event)
    // Increased interval to reduce performance impact on mobile
    const intervalId = setInterval(() => {
      const currentPath = window.location.pathname
      const hasTheme = document.body.classList.contains('christmas-theme')
      
      if (currentPath === '/' && isChristmasActive && !hasTheme) {
        document.body.classList.add('christmas-theme')
      } else if (currentPath !== '/' && hasTheme) {
        document.body.classList.remove('christmas-theme')
      }
    }, 1000) // Increased from 100ms to 1000ms for better mobile performance

    // Cleanup on unmount
    return () => {
      if (typeof document !== 'undefined') {
        document.body.classList.remove('christmas-theme')
        window.removeEventListener('popstate', handleRouteChange)
        clearInterval(intervalId)
      }
    }
  }, [isChristmasActive])

  const value = {
    isChristmasActive
  }

  return (
    <ChristmasThemeContext.Provider value={value}>
      {children}
    </ChristmasThemeContext.Provider>
  )
}

