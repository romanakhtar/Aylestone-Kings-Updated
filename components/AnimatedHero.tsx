'use client'

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, MapPin, Clock, Shield } from "lucide-react"
import { siteData, contactInfo } from "@/lib/data"
import ContactModeCards from "@/components/ContactModeCards"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useHalloweenTheme } from "@/components/HalloweenThemeProvider"
import { useChristmasTheme } from "@/components/ChristmasThemeProvider"
import { usePathname } from "next/navigation"

export default function AnimatedHero() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-50px',
    triggerOnce: true
  })

  const { isHalloweenActive } = useHalloweenTheme()
  const { isChristmasActive: isChristmasSeason } = useChristmasTheme()
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  // Only show Christmas theme on homepage during December 1-27
  const isChristmasActive = isChristmasSeason && isHomepage
  const [isMobile, setIsMobile] = useState(false)
  const parallaxRef = useRef<HTMLDivElement>(null)
  
  // Generate fixed positions for snow crystals (generated once, stays fixed)
  const [snowCrystalPositions] = useState(() => {
    const positions = []
    for (let i = 0; i < 8; i++) {
      positions.push({
        top: `${Math.random() * 80 + 10}%`, // Random between 10% and 90%
        left: `${Math.random() * 80 + 10}%`, // Random between 10% and 90%
        rotation: Math.random() * 360, // Random rotation
        size: Math.random() * 20 + 30, // Random size between 30px and 50px
        opacity: Math.random() * 0.2 + 0.1, // Random opacity between 0.1 and 0.3 (reduced)
      })
    }
    return positions
  })

  // Check if mobile and disable scroll animations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleBookNow = () => {
    window.open(contactInfo.booking.online, "_blank")
  }

  return (
    <main className={`relative min-h-screen ${isChristmasActive ? 'bg-gradient-to-br from-[#0F0D3E] via-[#0F0D3E] to-[#2E3C44]' : 'bg-white'}`}>
      {/* Halloween Background Image - Extended */}
      {isHalloweenActive && (
        <div 
          className="absolute inset-0 opacity-50 z-0 h-screen"
          style={{
            backgroundImage: "url('/Halloweenbg.png')",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
          }}
          aria-label="Halloween themed background for Aylestone Kings taxi service"
        />
      )}
      
      {/* Spider Web Background Image */}
      {isHalloweenActive && (
        <div 
          className="absolute inset-0 opacity-50 z-0"
          style={{
            backgroundImage: "url('/Spider-web2.png')",
            backgroundPosition: "right top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "25.67% auto",
          }}
          aria-label="Spider web Halloween decoration for Aylestone Kings taxi service"
        />
      )}
      
      {/* Halloween Overlay */}
      {isHalloweenActive && <div className="halloween-hero-overlay" />}
      {isHalloweenActive && <div className="halloween-mist" />}
      
      
      {/* Christmas Background Pattern Overlay */}
      {isChristmasActive && (
        <div 
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(217, 179, 90, 0.1) 35px, rgba(217, 179, 90, 0.1) 70px)",
          }}
          aria-label="Christmas themed background pattern overlay for Aylestone Kings taxi service"
        />
      )}
      
      {/* Snow Crystals at Fixed Positions - Only on Homepage - Hidden on mobile */}
      {isChristmasActive && !isMobile && (
        <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
          {snowCrystalPositions.map((position, index) => (
            <Image
              key={index}
              src="/Snow_crystal.png"
              alt=""
              width={position.size}
              height={position.size}
              className="absolute"
              style={{
                top: position.top,
                left: position.left,
                transform: `rotate(${position.rotation}deg)`,
                opacity: position.opacity,
              }}
              unoptimized={true}
            />
          ))}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 min-h-screen flex items-center">
        <div className={`grid grid-cols-1 ${isChristmasActive ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-8 lg:gap-16 items-start w-full`}>
          {/* Left Content - Main Content with Enhanced Visuals */}
          <div className={`${isChristmasActive ? 'order-1 lg:order-1' : 'order-1'} max-w-xl scale-in`}>
            
            {/* Main Heading */}
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${isChristmasActive ? 'text-white' : 'text-[#0F0D3E]'}`}>
              {isHalloweenActive ? "Driving Leicester Forward 🎃" : isChristmasActive ? "Driving Leicester Forward This Christmas" : siteData.homepage.hero.title}
            </h1>

            {/* Description */}
            <p className={`text-xl mb-8 leading-relaxed ${isChristmasActive ? 'text-[#E4E4E4]' : 'text-[#2E3C44]'}`}>
              {siteData.homepage.hero.subtitle}
            </p>

            {/* Enhanced Features with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {siteData.homepage.hero.features.map((feature, index) => {
                const icons = [Shield, Clock, MapPin]
                const IconComponent = icons[index % icons.length]
                return (
                  <div key={index} className={`flex items-center gap-3 rounded-lg px-3 py-2 border ${isChristmasActive ? 'bg-[#D9B35A]/20 border-[#D9B35A]/30' : 'bg-cyan-500/20 border-cyan-500/30'}`}>
                    <IconComponent className={`h-4 w-4 ${isChristmasActive ? 'text-[#D9B35A]' : 'text-[#06A0A6]'}`} />
                    <span className={`font-medium text-sm ${isChristmasActive ? 'text-white' : 'text-[#2E3C44]'}`}>{feature}</span>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleBookNow}
              className={`${isHalloweenActive ? 'halloween-cta-glow text-white' : isChristmasActive ? 'bg-[#D9B35A] hover:bg-[#EF5B6A] text-[#0F0D3E]' : isMobile ? 'bg-[#06A0A6] hover:bg-[#0F0D3E] text-white' : 'animate-pulse bg-[#06A0A6] hover:bg-[#0F0D3E] text-white'} px-8 py-4 rounded-lg font-semibold text-sm flex items-center gap-3 shadow-lg hover:shadow-xl mb-8`}
            >
              {isHalloweenActive ? "Book Your Spook-tacular Ride Now 🎃" : isChristmasActive ? "🎄 Book Your Festive Ride Now 🎄" : "Book Your Ride Now"}
              <span className="halloween-pumpkin"></span>
              <ArrowRight className="h-5 w-5" />
            </button>
            {/* Enhanced Car Image with Aylestone Theme - No parallax on mobile */}
            {!isChristmasActive && (
              <div className="flex justify-start">
                <div 
                  ref={parallaxRef}
                  className="relative"
                >
                  <Image
                    src={siteData.images.heroTaxi}
                    alt="Modern white taxi vehicle from Aylestone Kings professional fleet serving Leicester and Midlands since 1995"
                    width={280}
                    height={224}
                    priority
                    sizes="(max-width: 768px) 80px, 280px"
                    className="relative z-10 w-38 lg:w-[280px] h-auto drop-shadow-2xl"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            )}

          </div>
          
          {/* Right Content - Contact Mode Cards (Desktop Only) */}
          <div className="hidden lg:flex max-w-md order-2 justify-center lg:justify-end mb-8 lg:mb-0">
            <ContactModeCards />
          </div>
        </div>
      </div>
    </main>
  )
}
