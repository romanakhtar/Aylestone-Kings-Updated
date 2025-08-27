import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { LoadingSpinner } from './loading-spinner'

interface ProfessionalImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  containerClassName?: string
  priority?: boolean
  loading?: 'lazy' | 'eager'
  hover?: boolean
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export function ProfessionalImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  containerClassName,
  priority = false,
  loading = 'lazy',
  hover = true,
  rounded = 'lg',
  shadow = 'md'
}: ProfessionalImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const roundedClasses = {
    none: '',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  }

  const shadowClasses = {
    none: '',
    sm: 'shadow-professional',
    md: 'shadow-professional-lg',
    lg: 'shadow-professional-xl',
    xl: 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]'
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  if (hasError) {
    return (
      <div className={cn(
        'flex items-center justify-center bg-gray-100 text-gray-500',
        roundedClasses[rounded],
        shadowClasses[shadow],
        containerClassName
      )}>
        <div className="text-center p-4">
          <div className="text-sm">Image not available</div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn(
      'relative overflow-hidden',
      roundedClasses[rounded],
      shadowClasses[shadow],
      hover && 'transition-smooth hover:shadow-professional-xl',
      containerClassName
    )}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <LoadingSpinner size="lg" color="primary" />
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        loading={loading}
        className={cn(
          'transition-smooth',
          hover && 'hover:scale-105',
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}

export default ProfessionalImage
