import Image from 'next/image'
import { siteData } from '@/lib/data'

interface AppDownloadButtonsProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function AppDownloadButtons({ className = '', size = 'md' }: AppDownloadButtonsProps) {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto', 
    lg: 'h-12 w-auto'
  }

  return (
    <div className={`flex flex-row gap-3 lg:gap-4 ${className}`}>
      <a 
        href="https://apps.apple.com/gb/app/aylestone-kings/id1061012064" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transform hover:scale-105 transition-transform duration-200"
        aria-label="Download on the App Store"
      >
        <Image
          src={siteData.images.appStore}
          alt="Download on the App Store"
          width={150}
          height={50}
          className={sizeClasses[size]}
        />
      </a>
      <a 
        href="https://play.google.com/store/apps/details?id=co.uk.aylestone.taxis&hl=en&pli=1" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transform hover:scale-105 transition-transform duration-200"
        aria-label="Get it on Google Play"
      >
        <Image
          src={siteData.images.googlePlay}
          alt="Get it on Google Play"
          width={180}
          height={60}
          className={sizeClasses[size]}
        />
      </a>
    </div>
  )
}
