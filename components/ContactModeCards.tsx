'use client'

import { MessageCircle, Phone, Globe } from 'lucide-react'
import AppDownloadButtons from '@/components/AppDownloadButtons'
import { contactInfo } from '@/lib/data'

interface ContactModeCardsProps {
  className?: string
}

export default function ContactModeCards({ className = '' }: ContactModeCardsProps) {
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
    }
  ]

  return (
    <div className={`bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 lg:p-8 ${className} animate-fade-in relative`}>
      <h3 className="text-xl lg:text-2xl font-bold text-[#0F0D3E] mb-6 lg:mb-8 text-center border-b border-gray-200/50 pb-3 relative z-10">
        Contact Us
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] rounded-full"></div>
      </h3>
      
      <div className="space-y-3 lg:space-y-4">
        {contactModes.map((mode, index) => {
          const IconComponent = mode.icon
          return (
            <a
              key={mode.name}
              href={mode.href}
              target={mode.name === 'Book Online' || mode.name === 'Email' ? '_self' : '_blank'}
              rel={mode.name === 'Book Online' || mode.name === 'Email' ? '' : 'noopener noreferrer'}
              className={`${mode.bgColor} ${mode.hoverBgColor} text-white px-4 lg:px-6 py-3 lg:py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 lg:gap-3 shadow-lg hover:shadow-2xl transform hover:scale-105 group hover:-translate-y-1 border border-white/20 relative overflow-hidden`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Subtle overlay effect */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <IconComponent className="h-4 lg:h-5 w-4 lg:w-5 group-hover:scale-110 transition-transform duration-200 relative z-10" />
              <span className="font-semibold relative z-10 text-sm lg:text-base">{mode.name}</span>
              {mode.name !== 'Book Online' && mode.name !== 'Email' && (
                <span className="text-xs opacity-80 group-hover:translate-x-1 transition-transform duration-200 relative z-10">→</span>
              )}
            </a>
          )
        })}
      </div>
      
      {/* Separator */}
      <div className="border-t border-gray-200 my-4 lg:my-6"></div>
      
      {/* App Download Buttons */}
      <div className="pt-2">
        <AppDownloadButtons size="sm" />
      </div>
    </div>
  )
}
