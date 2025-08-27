'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import ContactModeCards from './ContactModeCards'
import { contactInfo } from '@/lib/data'

export default function FloatingContactButton() {
  const [showMobileContact, setShowMobileContact] = useState(false)

  const handleBookNow = () => {
    window.open(contactInfo.booking.online, "_blank")
  }

  const toggleContactModal = () => {
    setShowMobileContact(!showMobileContact)
  }

  return (
    <>
      {/* Mobile Floating Contact Button */}
      {!showMobileContact && (
        <div className="lg:hidden fixed bottom-6 right-6 z-[9999]">
          {/* Enhanced pulse ring with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#EF5B6A]/30 via-[#FF6B7A]/20 to-[#EF5B6A]/30 rounded-2xl animate-pulse"></div>
          
          {/* Beautiful gradient container with enhanced shadows */}
          <div className="bg-gradient-to-br from-[#EF5B6A] via-[#FF6B7A] to-[#E04A5A] rounded-2xl shadow-[0_8px_32px_rgba(239,91,106,0.3)] p-1 backdrop-blur-sm relative border border-white/20">
            <button 
              onClick={toggleContactModal}
              className="bg-gradient-to-br from-[#EF5B6A] via-[#FF6B7A] to-[#E04A5A] hover:from-[#E04A5A] hover:via-[#FF6B7A] hover:to-[#EF5B6A] text-white px-4 py-2.5 rounded-xl transition-smooth shadow-professional-lg hover:shadow-professional-xl transform hover:scale-105 group relative z-10 w-full h-full focus-ring"
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-smooth" />
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:bg-white/30 transition-smooth"></div>
                </div>
                <span className="text-sm font-semibold tracking-wide">Book Now</span>
              </div>
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-smooth rounded-xl"></div>
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Mobile Contact Modal */}
      {showMobileContact && (
        <div className="lg:hidden fixed inset-0 z-[9998] flex items-center justify-center p-4">
          <div className="relative">
            <div className="flex justify-end mb-4">
              <button 
                onClick={() => setShowMobileContact(false)}
                className="text-[#0F0D3E] hover:text-[#06A0A6] bg-white/80 hover:bg-white p-2 rounded-full transition-smooth backdrop-blur-sm hover:scale-110 shadow-professional focus-ring z-10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ContactModeCards />
          </div>
        </div>
      )}
    </>
  )
}
