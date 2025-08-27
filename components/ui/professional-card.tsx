import React from 'react'
import { cn } from '@/lib/utils'

interface ProfessionalCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient'
  hover?: boolean
  animate?: boolean
  onClick?: () => void
}

export function ProfessionalCard({
  children,
  className,
  variant = 'default',
  hover = true,
  animate = true,
  onClick
}: ProfessionalCardProps) {
  const baseClasses = 'rounded-2xl transition-smooth'
  
  const variantClasses = {
    default: 'bg-white shadow-professional',
    elevated: 'bg-white shadow-professional-lg hover:shadow-professional-xl',
    outlined: 'bg-white border-2 border-[#E4E4E4] hover:border-[#06A0A6]',
    gradient: 'bg-gradient-to-br from-white to-[#E4E4E4]/30 shadow-professional'
  }

  const hoverClasses = hover ? 'hover-lift cursor-pointer' : ''
  const animationClasses = animate ? 'scale-in' : ''

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        animationClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default ProfessionalCard
