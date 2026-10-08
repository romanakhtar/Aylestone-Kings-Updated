'use client'

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, MapPin, Clock, Shield } from "lucide-react"
import { siteData, contactInfo } from "@/lib/data"
import { trackBookNowClick, onPhoneClick } from "@/lib/analytics"
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
  // Halloween keeps the default hero copy - only the background changes
  const isSeasonalCopy = isChristmasActive || isValentineActive
  // Picks out a few words in Halloween orange. Wording is unchanged either
  // way, so the indexed hero copy stays exactly the same.
  const hw = (text: string) =>
    isHalloweenActive ? <span className="text-[#FF8A3D]">{text}</span> : <>{text}</>
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
    trackBookNowClick()
    window.open(contactInfo.booking.online, "_blank")
  }

  return (
    <section aria-labelledby="hero-heading" className={`relative min-h-[70vh] ${isChristmasActive ? 'bg-gradient-to-br from-[#0F0D3E] via-[#0F0D3E] to-[#2E3C44]' : 'bg-white'}`}>
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

      {/* Halloween hero background: art-directed photo + brand colour overlay */}
      {isHalloweenActive && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
          {/* Portrait crop on phones, landscape on tablet/desktop - the browser downloads only one */}
          <picture>
            <source media="(min-width: 1024px)" srcSet="/Halloween-Theme-bg-IMG.webp" />
            <source media="(max-width: 1023px)" srcSet="/Halloween-Theme-bg-Mobile.webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Halloween-Theme-bg-IMG.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>

          {/* Phones: copy runs the full width, so the scrim has to carry all the
              way across or the text sits on the lit clock tower. Stays light
              enough on the right for the photo to read through. */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(to right, rgba(15,13,62,0.95) 0%, rgba(15,13,62,0.90) 40%, rgba(15,13,62,0.80) 75%, rgba(15,13,62,0.72) 100%)",
            }}
          />
          {/* Desktop: solid behind the left copy, gone by 70%, right 30% is the photo. */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, rgba(15,13,62,0.94) 0%, rgba(15,13,62,0.86) 28%, rgba(15,13,62,0.42) 48%, rgba(15,13,62,0.12) 62%, rgba(15,13,62,0) 70%)",
            }}
          />
          {/* Soft navy lift at the base of the copy - full width on phones, inside the left 70% on desktop */}
          <div
            className="absolute bottom-0 left-0 h-36 w-full lg:w-[70%]"
            style={{
              background:
                "linear-gradient(to top, rgba(15,13,62,0.88) 0%, rgba(15,13,62,0.35) 50%, rgba(15,13,62,0) 100%)",
            }}
          />
          {/* Night-sky silhouettes - decorative, drift gently, hidden on small screens */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/halloween/bats-276128.svg"
            alt=""
            className="halloween-silhouette halloween-silhouette-light halloween-drift absolute top-[14%] left-[50%] hidden w-[95px] sm:block lg:w-[115px]"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/halloween/ghost-with-bag-black-and-white-1225.svg"
            alt=""
            className="halloween-silhouette halloween-silhouette-light halloween-sway absolute top-[54%] left-[2.5%] hidden w-[44px] lg:block"
            style={{ animationDelay: "1.2s", opacity: 0.55 }}
          />
        </div>
      )}

      {/* Halloween haze layers disabled - the background photo carries the atmosphere */}
      
      
      {/* Christmas Background Pattern Overlay */}
      {isChristmasActive && (
        <div 
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(217, 179, 90, 0.1) 35px, rgba(217, 179, 90, 0.1) 70px)",
          }}
          aria-label="Christmas themed background pattern overlay for Aylestone Taxis taxi service"
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
              loading="lazy"
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
              loading="lazy"
            />
          ))}
        </div>
      )}
      
      {/* Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex items-start ${
          isValentineActive ? "pt-8 sm:pt-10" : "pt-4 sm:pt-6 lg:pt-8"
        }`}
      >
        <div className={`grid grid-cols-1 ${isChristmasActive ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-8 lg:gap-16 items-start w-full`}>
          {/* Left Content - Main Content with Enhanced Visuals */}
          <div className={`${isChristmasActive ? 'order-1 lg:order-1' : 'order-1'} w-full lg:w-auto max-w-xl`}>
            
            {/* Main Heading */}
            <h1
              id="hero-heading"
              className={`text-2xl md:text-3xl font-bold mb-2 leading-tight ${
                isChristmasActive || isHalloweenActive
                  ? 'text-white [text-shadow:0_2px_14px_rgba(5,8,30,0.55)]'
                  : 'text-[#0F0D3E]'
              }`}
            >
              {isValentineActive
                ? "Reliable, Safe Taxi for Your Valentine's Evening"
                : isChristmasActive
                ? "Leicester Taxi Service This Christmas"
                : isHalloweenActive
                ? (
                  <>
                    Leicester Taxi Service &amp; Airport Transfers{" "}
                    <span className="text-[#FF8A3D]">Fixed Fares 24/7</span>
                  </>
                )
                : "Leicester Taxi Service & Airport Transfers Fixed Fares 24/7"}
            </h1>

            {/* Description */}
            <div
  className={`text-lg mb-1 leading-relaxed ${
    isChristmasActive || isHalloweenActive ? 'text-[#E4E4E4]' : 'text-[#2E3C44]'
  }`}
>
  {isValentineActive ? (
    "Pre-book with confidence. Licensed, safe, and on time, every time."
  ) : isSeasonalCopy ? (
    siteData.homepage.hero.subtitle
  ) : (
    <>
      <p className={isChristmasActive || isHalloweenActive ? "mb-0 text-[#E4E4E4]" : "mb-0"}>
        <strong>Book a taxi Leicester locals have used since 1995.</strong> Aylestone Taxis runs Leicester taxis and Leicester cabs with licensed drivers, {hw("fixed fares")}, and {hw("no surge pricing")}. Available {hw("24/7")}, we provide:
      </p>
      <ul className="list-disc pl-6 space-y-0">
        <li><strong>Local journeys</strong> right across Leicester and Leicestershire</li>     
        <li>Transfers to EMA, BHX, LHR and all <strong>UK airports</strong></li>
        <li><strong>Weekend travel solutions</strong> for nights out, events, and shopping trips</li>
      </ul>
    </>
  )}
</div>
            {/* Enhanced Features with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {(isValentineActive
                ? ["Reliable", "Safe", "Pre-book"]
                : isSeasonalCopy
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
                          : isHalloweenActive
                          ? 'bg-white/10 border-white/30 backdrop-blur-sm shadow-lg shadow-black/20'
                          : 'bg-cyan-500/20 border-cyan-500/30'
                      }`}
                    >
                      <IconComponent
                        className={`h-4 w-4 ${
                          isValentineActive ? 'text-[#EF5B6A]' : isChristmasActive ? 'text-[#D9B35A]' : isHalloweenActive ? 'text-[#FF8A3D]' : 'text-[#06A0A6]'
                        }`}
                      />
                      <span
                        className={`font-medium text-sm ${
                          isChristmasActive || isHalloweenActive ? 'text-white' : 'text-[#2E3C44]'
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
              {isValentineActive
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
                onClick={onPhoneClick}
                className={`w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-semibold shadow-md hover:shadow-lg transition-[transform,opacity] whitespace-nowrap ${
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
                    alt="Modern white taxi Leicester from Aylestone Taxis — professional fleet serving Leicester and the Midlands since 1995"
                    width={560}
                    height={224}
                    sizes="(max-width: 768px) 80px, 280px"
                    className="relative z-10 w-auto max-w-[80px] lg:max-w-[280px] drop-shadow-2xl"
                    style={{ width: "auto", height: "auto" }}
                    priority
                  />
                </div>
              </div>
            )}

          </div>
          
          {/* Right Content - Contact Mode Cards (Desktop Only) */}
          <div className="hidden lg:flex max-w-md order-2 justify-center lg:justify-end mb-8 lg:mb-0 lg:self-stretch lg:items-center">
            <ContactModeCards transparentBackground={isHalloweenActive} />
          </div>
        </div>
      </div>
    </section>
  )
}
