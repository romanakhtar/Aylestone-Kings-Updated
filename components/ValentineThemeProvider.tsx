'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface ValentineThemeContextType {
  isValentineActive: boolean
}

const ValentineThemeContext = createContext<ValentineThemeContextType | undefined>(undefined)

export function useValentineTheme() {
  const context = useContext(ValentineThemeContext)
  if (context === undefined) {
    return { isValentineActive: false }
  }
  return context
}

interface ValentineThemeProviderProps {
  children: ReactNode
}

/** Valentine theme is active from 31 Jan to 14 Feb inclusive. Removed after 14 Feb. */
export function ValentineThemeProvider({ children }: ValentineThemeProviderProps) {
  const [isValentineActive, setIsValentineActive] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const now = new Date()
    const month = now.getMonth() + 1
    const day = now.getDate()

    const isValentineSeason = (month === 1 && day === 31) || (month === 2 && day >= 1 && day <= 14)
    setIsValentineActive(isValentineSeason)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const isHomepage = window.location.pathname === '/'
    if (isValentineActive && isHomepage) {
      document.body.classList.add('valentine-theme')
    } else {
      document.body.classList.remove('valentine-theme')
    }

    const handleRouteChange = () => {
      const currentPath = window.location.pathname
      if (currentPath === '/' && isValentineActive) {
        document.body.classList.add('valentine-theme')
      } else {
        document.body.classList.remove('valentine-theme')
      }
    }

    window.addEventListener('popstate', handleRouteChange)
    const intervalId = setInterval(() => {
      const currentPath = window.location.pathname
      const hasTheme = document.body.classList.contains('valentine-theme')
      if (currentPath === '/' && isValentineActive && !hasTheme) {
        document.body.classList.add('valentine-theme')
      } else if (currentPath !== '/' && hasTheme) {
        document.body.classList.remove('valentine-theme')
      }
    }, 1000)

    return () => {
      if (typeof document !== 'undefined') {
        document.body.classList.remove('valentine-theme')
        window.removeEventListener('popstate', handleRouteChange)
        clearInterval(intervalId)
      }
    }
  }, [isValentineActive])

  return (
    <ValentineThemeContext.Provider value={{ isValentineActive }}>
      {children}
    </ValentineThemeContext.Provider>
  )
}
