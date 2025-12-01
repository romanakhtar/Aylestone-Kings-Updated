'use client'

import Image from 'next/image'
import { MessageCircle, Phone, Globe, Star, Car } from 'lucide-react'
import AppDownloadButtons from '@/components/AppDownloadButtons'
import { contactInfo } from '@/lib/data'

import { useHalloweenTheme } from "@/components/HalloweenThemeProvider"
import { useChristmasTheme } from "@/components/ChristmasThemeProvider"
import { usePathname } from "next/navigation"

interface ContactModeCardsProps {
  className?: string
}

export default function ContactModeCards({ className = '' }: ContactModeCardsProps) {
  const { isChristmasActive: isChristmasSeason } = useChristmasTheme()
  const pathname = usePathname()
  const isChristmasActive = isChristmasSeason && pathname === '/'
  
  const contactModes = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: '#25D366', // WhatsApp green
      bgColor: 'bg-[#25D366]',
      hoverBgColor: 'hover:bg-[#128C7E]',
      href: `https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=Hi! I need a taxi from Aylestone Kings`
    },
    {
      name: 'Landline',
      icon: Phone,
      color: '#007AFF', // iOS blue
      bgColor: 'bg-[#007AFF]',
      hoverBgColor: 'hover:bg-[#0056CC]',
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`
    },
    {
      name: 'Book Online',
      icon: Globe,
      color: '#06A0A6', // Company primary color
      bgColor: 'bg-[#06A0A6]',
      hoverBgColor: 'hover:bg-[#0F0D3E]',
      href: contactInfo.booking.online
    },
    {
      name: 'Leave a Review',
      icon: Star,
      color: '#06A0A6', // Random color
      bgColor: 'bg-[#0056CC]',
      hoverBgColor: 'hover:bg-[#007AFF]',
      href: "https://g.page/r/CZmHFNdaup8XEBM/review"
    },
    {
      name: 'Become a Driver',
      icon: Car,
      color: '#0F0D3E', // Company dark color
      bgColor: 'bg-[#0F0D3E]',
      hoverBgColor: 'hover:bg-[#06A0A6]',
      href: "/drivers"
    }
    
  ]

  return (
    <div className={`${isChristmasActive ? 'bg-gradient-to-br from-[#0F0D3E] to-[#2E3C44] border-[#D9B35A]' : 'bg-cyan-500/20 backdrop-blur-md border-cyan-500/30'} rounded-2xl shadow-xl border-2 p-4 sm:p-5 lg:p-6 ${className} animate-fade-in relative w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[260px] xl:max-w-[280px] overflow-visible`}>
      {/* Santa Hat - Stuck on Top Right Corner */}
      {isChristmasActive && (
        <div className="absolute -top-12 -right-10 z-20 pointer-events-none">
          <Image
            src="/santa-hat.png"
            alt="Santa hat decoration"
            width={100}
            height={100}
            className="drop-shadow-lg"
            style={{
              transform: 'rotate(-10deg)',
              filter: 'drop-shadow(0 6px 8px rgba(0, 0, 0, 0.4))'
            }}
            unoptimized={true}
          />
        </div>
      )}
      
      <h3 className={`text-xl lg:text-2xl font-bold mb-6 lg:mb-8 text-center border-b ${isChristmasActive ? 'text-[#D9B35A] border-[#D9B35A]/50' : 'text-[#0F0D3E] border-gray-200/50'} pb-3 relative z-10`}>
        Contact Us
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full ${isChristmasActive ? 'bg-gradient-to-r from-[#D9B35A] to-[#EF5B6A]' : 'bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E]'}`}></div>
      </h3>
      
      <div className="space-y-3 lg:space-y-4">
        {contactModes.map((mode, index) => {
          const IconComponent = mode.icon
          return (
            <a
              key={mode.name}
              href={mode.href}
              target={mode.name === 'Book Online' || mode.name === 'Email' || mode.name === 'Become a Driver' ? '_self' : '_blank'}
              rel={mode.name === 'Book Online' || mode.name === 'Email' || mode.name === 'Become a Driver' ? '' : 'noopener noreferrer'}
              className={`${mode.bgColor} ${mode.hoverBgColor} text-white px-3 sm:px-4 lg:px-4 py-3 lg:py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 lg:gap-3 shadow-lg hover:shadow-2xl transform hover:scale-105 group hover:-translate-y-1 border border-white/20 relative overflow-hidden w-full`}
              style={{
                animationDelay: `${index * 100}ms`,
              } as React.CSSProperties}
            >
              {/* Subtle overlay effect */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <IconComponent className="h-4 lg:h-5 w-4 lg:w-5 group-hover:scale-110 transition-transform duration-200 relative z-10 flex-shrink-0" />
              <div className="flex flex-col items-start relative z-10 flex-1 min-w-0">
                <span className="font-semibold text-sm lg:text-base">{mode.name}</span>
                {mode.name === 'WhatsApp' && (
                  <span className="text-xs opacity-90 text-white/90 break-all">{contactInfo.whatsapp}</span>
                )}
                {mode.name === 'Landline' && (
                  <span className="text-xs opacity-90 text-white/90">{contactInfo.phone}</span>
                )}
              </div>
              {mode.name !== 'Book Online' && mode.name !== 'Become a Driver' && (
                <span className="text-xs opacity-80 group-hover:translate-x-1 transition-transform duration-200 relative z-10 flex-shrink-0">→</span>
              )}
            </a>
          )
        })}
      </div>
      
      {/* Separator */}
      <div className={`border-t my-2 lg:my-2 ${isChristmasActive ? 'border-[#D9B35A]/30' : 'border-blue-200'}`}></div>
      
      {/* App Download Section */}
      <div className="pt-2 flex flex-col items-center">
        <h4 className={`text-md font-semibold mb-3 text-center ${isChristmasActive ? 'text-[#D9B35A]' : 'text-[#0F0D3E]'}`}>Download our app</h4>
        <AppDownloadButtons size="sm" />
      </div>
    </div>
  )
}