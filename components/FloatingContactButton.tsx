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
              onClick={handleBookNow}
              className="bg-gradient-to-br from-[#EF5B6A] via-[#FF6B7A] to-[#E04A5A] hover:from-[#E04A5A] hover:via-[#FF6B7A] hover:to-[#EF5B6A] text-white p-4 rounded-xl transition-all duration-500 shadow-lg hover:shadow-[0_12px_40px_rgba(239,91,106,0.4)] transform hover:scale-105 group relative z-10 w-full h-full"
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:bg-white/30 transition-all duration-300"></div>
                </div>
                <span className="text-sm font-semibold tracking-wide">Book Now</span>
              </div>
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Mobile Contact Modal */}
      {showMobileContact && (
        <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] flex items-end">
          <div className="bg-[#06A0A6] w-2/3 mx-auto rounded-3xl p-8 max-h-[80vh] overflow-y-auto shadow-[0_20px_60px_rgba(6,160,166,0.4)] backdrop-blur-sm border border-white/20">
            <div className="flex justify-end mb-6">
              <button 
                onClick={() => setShowMobileContact(false)}
                className="text-white/90 hover:text-white bg-white/15 hover:bg-white/25 p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 shadow-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ContactModeCards />
          </div>
        </div>
      )}
    </>
  )
}
