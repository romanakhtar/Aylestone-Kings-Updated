import React from 'react'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'white'
  className?: string
}

export function LoadingSpinner({
  size = 'md',
  color = 'primary',
  className
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  const colorClasses = {
    primary: 'text-[#06A0A6]',
    secondary: 'text-[#0F0D3E]',
    white: 'text-white'
  }

  return (
    <div className={cn('inline-block', className)}>
      <div
        className={cn(
          sizeClasses[size],
          colorClasses[color],
          'animate-spin rounded-full border-2 border-current border-t-transparent'
        )}
      />
    </div>
  )
}

export default LoadingSpinner
