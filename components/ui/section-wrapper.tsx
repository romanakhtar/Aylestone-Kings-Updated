import React from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'light' | 'gradient' | 'dark'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
  id?: string
}

export function SectionWrapper({
  children,
  className,
  background = 'white',
  padding = 'lg',
  animate = true,
  id
}: SectionWrapperProps) {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-[#E4E4E4]',
    gradient: 'gradient-secondary',
    dark: 'bg-[#0F0D3E] text-white'
  }

  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'section-padding',
    xl: 'py-24'
  }

  const animationClasses = animate ? 'fade-in' : ''

  return (
    <section 
      id={id}
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        animationClasses,
        'transition-smooth',
        className
      )}
    >
      <div className="max-w-7xl mx-auto container-padding">
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
