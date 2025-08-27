'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SmoothScrollProps {
  children: React.ReactNode
  to: string
  className?: string
  offset?: number
  duration?: number
}

export function SmoothScroll({
  children,
  to,
  className,
  offset = 80,
  duration = 800
}: SmoothScrollProps) {
  const scrollToSection = (e: React.MouseEvent) => {
    e.preventDefault()
    
    const targetElement = document.querySelector(to)
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <a
      href={to}
      onClick={scrollToSection}
      className={cn('transition-smooth cursor-pointer', className)}
    >
      {children}
    </a>
  )
}

export default SmoothScroll
