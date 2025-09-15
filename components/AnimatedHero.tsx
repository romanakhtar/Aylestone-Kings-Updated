'use client'

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, MapPin, Clock, Shield } from "lucide-react"
import { siteData, contactInfo } from "@/lib/data"
import ContactModeCards from "@/components/ContactModeCards"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function AnimatedHero() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-50px',
    triggerOnce: true
  })

  const [scrollY, setScrollY] = useState(0)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBookNow = () => {
    window.open(contactInfo.booking.online, "_blank")
  }

  return (
    <main className="relative min-h-screen bg-white">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start w-full">
          {/* Left Content - Main Content with Enhanced Visuals */}
          <div className="max-w-xl order-1 scale-in">
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
              {siteData.homepage.hero.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-[#2E3C44] mb-8 leading-relaxed">
              {siteData.homepage.hero.subtitle}
            </p>

            {/* Enhanced Features with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {siteData.homepage.hero.features.map((feature, index) => {
                const icons = [Shield, Clock, MapPin]
                const IconComponent = icons[index % icons.length]
                return (
                  <div key={index} className="flex items-center gap-3 bg-cyan-500/20 rounded-lg px-3 py-2 border border-cyan-500/30">
                    <IconComponent className="h-4 w-4 text-[#06A0A6]" />
                    <span className="text-[#2E3C44] font-medium text-sm">{feature}</span>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleBookNow}
              className=" animate-pulse bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl mb-8"
            >
              {siteData.homepage.hero.ctaText}
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Enhanced Car Image with Aylestone Theme */}
            <div className="flex justify-start">
              <div 
                ref={parallaxRef}
                className={`relative transition-all duration-300 ease-out`}
                style={{
                  transform: `translateX(${Math.min(scrollY * 0.5, 190)}px)`,
                  opacity: Math.max(0.8, 1 - scrollY * 0.0003)
                }}
              >
                <Image
                  src={siteData.images.heroTaxi}
                  alt="Modern Taxi Fleet - Aylestone Kings"
                  width={80}
                  height={64}
                  className="relative z-10 w-38 lg:w-[280px] h-auto drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
          
          {/* Right Content - Contact Mode Cards */}
          <div className="hidden lg:flex max-w-md order-2 justify-center lg:justify-end mb-8 lg:mb-0 ">
            <ContactModeCards />
          </div>
        </div>
      </div>
    </main>
  )
}
