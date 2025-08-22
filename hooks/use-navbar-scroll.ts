import { useState, useEffect } from 'react'

interface UseNavbarScrollOptions {
  threshold?: number // Minimum scroll amount before hiding
  hideOnScrollDown?: boolean // Whether to hide when scrolling down
  showOnScrollUp?: boolean // Whether to show when scrolling up
}

export function useNavbarScroll(options: UseNavbarScrollOptions = {}) {
  const {
    threshold = 10,
    hideOnScrollDown = true,
    showOnScrollUp = true
  } = options

  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = Math.abs(currentScrollY - lastScrollY)

      // Only trigger if scroll difference is above threshold
      if (scrollDifference > threshold) {
        if (hideOnScrollDown && currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and not at the very top
          setIsVisible(false)
        } else if (showOnScrollUp && currentScrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(true)
        }
        
        setLastScrollY(currentScrollY)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, threshold, hideOnScrollDown, showOnScrollUp])

  return { isVisible }
}
