'use client'

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, MapPin, Clock, Shield } from "lucide-react"
import { siteData, contactInfo } from "@/lib/data"
import ContactModeCards from "@/components/ContactModeCards"
import { useHalloweenTheme } from "@/components/HalloweenThemeProvider"
import { useChristmasTheme } from "@/components/ChristmasThemeProvider"
import { useValentineTheme } from "@/components/ValentineThemeProvider"
import { usePathname } from "next/navigation"

export default function AnimatedHero() {
  const { isHalloweenActive } = useHalloweenTheme()
  const { isChristmasActive: isChristmasSeason } = useChristmasTheme()
  const { isValentineActive: isValentineSeason } = useValentineTheme()
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  // Only show Christmas theme on homepage during December 1-27
  const isChristmasActive = isChristmasSeason && isHomepage
  // Only show Valentine theme on homepage during Feb 1-14
  const isValentineActive = isValentineSeason && isHomepage
  const [isMobile, setIsMobile] = useState(false)
  const parallaxRef = useRef<HTMLDivElement>(null)
  
  // Core homepage search-intent messaging (used when not in seasonal modes)
  const isSeasonal = isHalloweenActive || isChristmasActive || isValentineActive
  const coreFeatures = [
    "24/7 Leicester Taxi Service",
    "Fixed & Transparent Fares",
    "Licensed & DBS-Checked Drivers",
  ]
  
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

  // Valentine hearts at fixed positions in hero (generated once, stays fixed)
  const [valentineHeartPositions] = useState(() => {
    const positions = []
    for (let i = 0; i < 6; i++) {
      positions.push({
        top: `${Math.random() * 85 + 5}%`,
        left: `${Math.random() * 85 + 5}%`,
        rotation: Math.random() * 45 - 22, // Subtle rotation -22 to 22 deg
        size: Math.random() * 24 + 28, // 28–52px
        opacity: Math.random() * 0.15 + 0.08, // Subtle 8–23%
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
    // Track booking click event
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'lead_booking_click',
        lead_type: 'booking',
        platform: 'icabbi'
      })
    }
    window.open(contactInfo.booking.online, "_blank")
  }

  return (
    <main className={`relative min-h-[70vh] ${isChristmasActive ? 'bg-gradient-to-br from-[#0F0D3E] via-[#0F0D3E] to-[#2E3C44]' : 'bg-white'}`}>
      {/* Valentine Tagline Banner - Just below fixed navbar (top-5 + h-16 = 84px), overlays hero */}
      {isValentineActive && (
        <div
          className="absolute left-0 right-0 z-[15] py-1.2 sm:py-1 text-center"
          style={{
            top: '64px', /* below fixed navbar: top-5 (20px) + h-16 (64px) */
            background: 'linear-gradient(135deg, #7F1D1D 0%, #9D174D 40%, #BE185D 75%, #EC4899 100%)',
            boxShadow: '0 4px 6px -1px rgba(131, 24, 67, 0.2)',
          }}
          aria-label="Valentine's Day taxi service tagline"
        >
          <p className="text-white text-sm sm:text-base font-medium px-4 tracking-wide">
          💕Your Valentine Deserves a Smooth Ride💕
          </p>
        </div>
      )}

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
      
      {/* Valentine Hearts at Fixed Positions - Only on Homepage - Hidden on mobile */}
      {isValentineActive && !isMobile && (
        <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
          {valentineHeartPositions.map((position, index) => (
            <Image
              key={`valentine-heart-${index}`}
              src="/Valentine-Heart.webp"
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
              aria-hidden
            />
          ))}
        </div>
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-24 lg:pt-28 pb-16 flex items-center">
        <div className={`grid grid-cols-1 ${isChristmasActive ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-8 lg:gap-16 items-start w-full`}>
          {/* Left Content - Main Content with Enhanced Visuals */}
          <div className={`${isChristmasActive ? 'order-1 lg:order-1' : 'order-1'} max-w-xl`}>
            
            {/* Main Heading */}
            <h1
              className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${
                isChristmasActive ? 'text-white' : 'text-[#0F0D3E]'
              }`}
            >
              {isHalloweenActive
                ? "Driving Leicester Forward 🎃"
                : isValentineActive
                ? "Reliable, Safe Taxi for Your Valentine's Evening"
                : isChristmasActive
                ? "Leicester Taxi Service This Christmas"
                : "Leicester Taxi Service & Airport Transfers – Available 24/7"}
            </h1>

            {/* Description */}
            <p
              className={`text-xl mb-4 leading-relaxed ${
                isChristmasActive ? 'text-[#E4E4E4]' : 'text-[#2E3C44]'
              }`}
            >
              {isValentineActive
                ? "Pre-book with confidence. Licensed, safe and on time — every time."
                : isSeasonal
                ? siteData.homepage.hero.subtitle
                : "Fixed-price Leicester taxis with licensed local drivers. Reliable transfers to East Midlands, Birmingham, Heathrow and all major UK airports."}
            </p>

            {/* Enhanced Features with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {(isValentineActive
                ? ["Reliable", "Safe", "Pre-book"]
                : isSeasonal
                ? siteData.homepage.hero.features
                : coreFeatures
              ).map((feature, index) => {
                const icons = [Shield, Clock, MapPin]
                const IconComponent = icons[index % icons.length]
                return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 border ${
                        isValentineActive
                          ? 'bg-[#EF5B6A]/20 border-[#EF5B6A]/40'
                          : isChristmasActive
                          ? 'bg-[#D9B35A]/20 border-[#D9B35A]/30'
                          : 'bg-cyan-500/20 border-cyan-500/30'
                      }`}
                    >
                      <IconComponent
                        className={`h-4 w-4 ${
                          isValentineActive ? 'text-[#EF5B6A]' : isChristmasActive ? 'text-[#D9B35A]' : 'text-[#06A0A6]'
                        }`}
                      />
                      <span
                        className={`font-medium text-sm ${
                          isChristmasActive ? 'text-white' : 'text-[#2E3C44]'
                        }`}
                      >
                        {feature}
                      </span>
                  </div>
                )
              })}
            </div>

            {/* Primary Booking CTA */}
            <button 
              onClick={handleBookNow}
              className={`${
                isHalloweenActive
                  ? 'halloween-cta-glow text-white'
                  : isValentineActive
                  ? 'bg-[#EF5B6A] hover:bg-[#DC2626] text-white'
                  : isChristmasActive
                  ? 'bg-[#D9B35A] hover:bg-[#EF5B6A] text-[#0F0D3E]'
                  : 'bg-[#06A0A6] hover:bg-[#0F0D3E] text-white'
              } w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-3 shadow-lg hover:shadow-xl mb-4`}
            >
              {isHalloweenActive
                ? "Book Your Spook-tacular Ride Now 🎃"
                : isValentineActive
                ? "Pre-book Your Ride 🧡"
                : isChristmasActive
                ? "🎄 Book Your Festive Ride Now 🎄"
                : "Book Taxi Online"}
              <span className="halloween-pumpkin"></span>
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Visible phone number */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className={`w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-semibold shadow-md hover:shadow-lg transition-all whitespace-nowrap ${
                  isValentineActive
                    ? 'bg-white text-[#0F0D3E] hover:bg-gray-100'
                    : isChristmasActive
                    ? 'bg-white text-[#0F0D3E] hover:bg-gray-100'
                    : 'bg-white text-[#0F0D3E] hover:bg-gray-100 border border-[#06A0A6]/30'
                }`}
              >
                <span className="mr-3 text-xs font-medium uppercase tracking-wide text-[#06A0A6]">
                  Call 24/7
                </span>
                <span className="text-sm font-semibold">{contactInfo.phone}</span>
              </a>
            </div>
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
