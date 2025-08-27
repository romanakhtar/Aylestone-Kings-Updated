import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'

interface ProfessionalButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  icon?: React.ReactNode
  loading?: boolean
  disabled?: boolean
}

export function ProfessionalButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  icon,
  loading = false,
  disabled = false
}: ProfessionalButtonProps) {
  const baseClasses = 'font-semibold transition-smooth focus-ring rounded-lg'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] hover:from-[#0F0D3E] hover:to-[#06A0A6] text-white shadow-professional hover:shadow-professional-lg',
    secondary: 'bg-[#E4E4E4] hover:bg-[#06A0A6] text-[#0F0D3E] hover:text-white shadow-professional hover:shadow-professional-lg',
    outline: 'border-2 border-[#06A0A6] text-[#06A0A6] hover:bg-[#06A0A6] hover:text-white shadow-professional hover:shadow-professional-lg',
    ghost: 'text-[#06A0A6] hover:bg-[#06A0A6]/10 shadow-professional hover:shadow-professional-lg'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const buttonContent = (
    <>
      {loading && (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          'inline-flex items-center justify-center',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    )
  }

  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        'inline-flex items-center justify-center',
        className
      )}
    >
      {buttonContent}
    </Button>
  )
}

export default ProfessionalButton
