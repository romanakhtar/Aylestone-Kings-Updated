"use client"
import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight, Star, MapPin, Clock, Shield, Users, ChevronLeft, ChevronRight, Car, Plane } from "lucide-react"
import { siteData, contactInfo } from "@/lib/data"
import dynamic from "next/dynamic"
import AnimatedHero from "@/components/AnimatedHero"
import { useState, useEffect } from "react"
import { useHalloweenTheme } from "@/components/HalloweenThemeProvider"

// Dynamically import non-critical component
const AppDownloadButtons = dynamic(() => import("@/components/AppDownloadButtons"), {
  ssr: true,
})

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { isHalloweenActive } = useHalloweenTheme();

  const reviews = siteData.homepage.customerReviews.reviews;
  const totalSlides = reviews.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    // Check if mobile and use longer interval for better performance
    const isMobile = window.innerWidth <= 768;
    const intervalTime = isMobile ? 8000 : 5000; // 8s on mobile, 5s on desktop
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <AnimatedHero />

      {/* About Us Section */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                {siteData.homepage.aboutUs.title}
              </h2>
              <p className="text-lg text-[#2E3C44] mb-4 leading-relaxed">
                {siteData.homepage.aboutUs.subtitle}
              </p>
              <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">
                {siteData.homepage.aboutUs.description}
              </p>
              <a href="/about" className="inline-block">
                <button className={`${isHalloweenActive ? 'halloween-cta-glow' : 'bg-[#06A0A6] hover:bg-[#0F0D3E]'} text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-3`}>
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06A0A6]/10 to-[#2E3C44]/10 rounded-2xl"></div>
              <Image
                src={siteData.images.trustedTransport}
                alt="Professional taxi drivers and vehicles representing Aylestone Kings trusted transport service in Leicester and Midlands"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 bg-gradient-to-r from-[#06A0A6]/10 to-transparent border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trust & Security
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your safety and trust are our top priorities. We maintain the highest standards of licensing, security and your safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Leicester City Council */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Leicester Licensed</h3>
              <p className="text-gray-600 text-sm">Fully licensed by Leicester City Council</p>
            </div>

            {/* Wolverhampton City Council */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wolverhampton Licensed</h3>
              <p className="text-gray-600 text-sm">Licensed by Wolverhampton City Council</p>
            </div>

            {/* DBS Checked */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DBS Checked</h3>
              <p className="text-gray-600 text-sm">All drivers are DBS checked for your safety</p>
            </div>

            {/* 24/7 Service */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Service</h3>
              <p className="text-gray-600 text-sm">Round-the-clock availability for your convenience</p>
            </div>
          </div>
        </div>
      </section>
      {/* For Passengers Section */}
      <section className="section-padding bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                {siteData.homepage.forPassengers.title}
              </h2>
              <p className="text-xl text-[#2E3C44] mb-8 leading-relaxed">
                {siteData.homepage.forPassengers.subtitle}
              </p>
              <div className="space-y-4 mb-8">
                {siteData.homepage.forPassengers.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6]" />
                    <span className="text-[#2E3C44]">{feature}</span>
                  </div>
                ))}
              </div>
              <a href="#app-download" className="inline-block">
                <button className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-3">
                  Download Our App
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06A0A6]/10 to-[#2E3C44]/10 rounded-2xl"></div>
              <Image
                src="/Professional-in-car.jpg"
                alt="Passengers enjoying comfortable and professional taxi service with Aylestone Kings in Leicester"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                style={{ width: "auto", height: "auto" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Drivers Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Career Opportunities
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Join Our Team as a Driver
              </h2>
              <p className="text-xl text-[#2E3C44] mb-4 leading-relaxed max-w-3xl mx-auto">
                Become part of Leicester&apos;s most trusted taxi service. We&apos;re looking for professional, licensed drivers to join our established team.
              </p>
              <p className="text-lg text-[#2E3C44] leading-relaxed max-w-3xl mx-auto">
                With over 30 years of experience serving the Leicester community, Aylestone Kings offers a supportive, professional environment where drivers can thrive. Whether you&apos;re looking for full-time work or part-time flexibility, we have opportunities that fit your lifestyle.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-[#E4E4E4] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                  <h3 className="text-lg font-semibold text-[#0F0D3E]">Competitive Earnings</h3>
                </div>
                <p className="text-[#2E3C44]">
                  Earn competitive rates with flexible payment options. Transparent commission structure with weekly payments directly to your bank account. Keep more of what you earn with our fair pricing model.
                </p>
              </div>

              <div className="bg-[#E4E4E4] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                  <h3 className="text-lg font-semibold text-[#0F0D3E]">Flexible Schedule</h3>
                </div>
                <p className="text-[#2E3C44]">
                  Choose your own hours with full-time or part-time options. Work day shifts, night shifts, or both - the choice is yours. Perfect for balancing work with personal commitments.
                </p>
              </div>

              <div className="bg-[#E4E4E4] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                  <h3 className="text-lg font-semibold text-[#0F0D3E]">Vehicle Options</h3>
                </div>
                <p className="text-[#2E3C44]">
                  Use your own licensed vehicle or inquire about company vehicle options. We support both arrangements and provide guidance on licensing and insurance requirements.
                </p>
              </div>

              <div className="bg-[#E4E4E4] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                  <h3 className="text-lg font-semibold text-[#0F0D3E]">24/7 Support</h3>
                </div>
                <p className="text-[#2E3C44]">
                  Round-the-clock support from our dedicated operations team. Help is always available when you need it, day or night. We&apos;re here to support your success.
                </p>
              </div>

              <div className="bg-[#E4E4E4] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                  <h3 className="text-lg font-semibold text-[#0F0D3E]">Steady Bookings</h3>
                </div>
                <p className="text-[#2E3C44]">
                  Benefit from our established customer base and online booking platform. Regular work with a steady stream of bookings through our app, phone bookings, and corporate accounts.
                </p>
              </div>

              <div className="bg-[#E4E4E4] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                  <h3 className="text-lg font-semibold text-[#0F0D3E]">Training & Development</h3>
                </div>
                <p className="text-[#2E3C44]">
                  Comprehensive onboarding and ongoing training opportunities. Learn best practices, customer service skills, and stay updated with the latest industry standards.
                </p>
              </div>
            </div>

            {/* Additional Benefits List */}
            <div className="bg-gradient-to-r from-[#06A0A6]/10 to-[#2E3C44]/10 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-[#0F0D3E] mb-6 text-center">Why Choose Aylestone Kings?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6] mt-0.5" />
                  <span className="text-[#2E3C44]">Established reputation since 1995</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6] mt-0.5" />
                  <span className="text-[#2E3C44]">Supportive and friendly team environment</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6] mt-0.5" />
                  <span className="text-[#2E3C44]">Modern technology and booking systems</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6] mt-0.5" />
                  <span className="text-[#2E3C44]">Fair and transparent commission structure</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6] mt-0.5" />
                  <span className="text-[#2E3C44]">Guidance on licensing and compliance</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6] mt-0.5" />
                  <span className="text-[#2E3C44]">Work in your local community</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6] mt-0.5" />
                  <span className="text-[#2E3C44]">Opportunities for career growth</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6] mt-0.5" />
                  <span className="text-[#2E3C44]">Professional development support</span>
                </div>
              </div>
            </div>

            {/* Requirements Preview */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#0F0D3E] mb-6 text-center">What We&apos;re Looking For</h3>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-[#2E3C44] mb-4 leading-relaxed">
                  We welcome drivers who meet our requirements:
                </p>
                <ul className="space-y-3 text-[#2E3C44]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#06A0A6] font-bold mt-0.5">•</span>
                    <span>Valid UK driving licence held for at least 2 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#06A0A6] font-bold mt-0.5">•</span>
                    <span>Private hire driver&apos;s badge from Leicester City Council or Wolverhampton City Council</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#06A0A6] font-bold mt-0.5">•</span>
                    <span>Enhanced DBS certificate (preferably on the Update Service)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#06A0A6] font-bold mt-0.5">•</span>
                    <span>Valid right to work in the UK</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#06A0A6] font-bold mt-0.5">•</span>
                    <span>Professional attitude and excellent customer service skills</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-lg text-[#2E3C44] mb-6">
                Ready to start your journey with Aylestone Kings? Apply today and join Leicester&apos;s most trusted taxi service.
              </p>
              <a href="/drivers" className="inline-block">
                <button className={`${isHalloweenActive ? 'halloween-cta-glow' : 'bg-[#06A0A6] hover:bg-[#0F0D3E]'} text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-3 mx-auto`}>
                  Join as a driver now
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Travel Solutions Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06A0A6]/10 to-[#2E3C44]/10 rounded-2xl"></div>
              <Image
                src="/business-leisure.webp"
                alt="Professional business travel solutions and corporate taxi services by Aylestone Kings for Leicester businesses"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                style={{ width: "auto", height: "auto" }}
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                {siteData.homepage.businessTravel.title}
              </h2>
              <p className="text-xl text-[#2E3C44] mb-8 leading-relaxed">
                {siteData.homepage.businessTravel.subtitle}
              </p>
              <div className="space-y-4 mb-8">
                {siteData.homepage.businessTravel.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6]" />
                    <span className="text-[#2E3C44]">{feature}</span>
                  </div>
                ))}
              </div>
              <a href="/contact" className="inline-block">
                <button className="bg-[#2E3C44] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-3">
                  Business Solutions
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section id="app-download" className="py-20 bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - App Screenshots */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl"></div>
              <Image
                src="/app-screen-tracking.jpg"
                alt="Aylestone Kings mobile app screenshot showing real-time taxi tracking and booking features for Leicester customers"
                width={500}
                height={1000}
                sizes="(max-width: 768px) 100vw, 500px"
                className="relative z-10 rounded-2xl shadow-2xl"
                style={{ width: "auto", height: "auto" }}
                loading="lazy"
              />
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Quick Booking
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2E3C44] mb-6 leading-tight">
                {siteData.homepage.quickBooking.title}
              </h2>
              <p className="text-xl text-[#2E3C44] mb-6 leading-relaxed">
                {siteData.homepage.quickBooking.subtitle}
              </p>
              <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">
                {siteData.homepage.quickBooking.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {siteData.homepage.quickBooking.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6]" />
                    <span className="text-[#2E3C44] font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <AppDownloadButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Executive Fleet Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/black-car.webp')",
            backgroundPosition: "right center",
          }}
          aria-label="Luxury black executive taxi vehicle from Aylestone Kings premium fleet"
        />
        {/* Gradient Mask - Fades from transparent on right to solid on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06A0A6] via-[#06A0A6]/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                {siteData.homepage.executiveFleet.title}
              </h2>
              <p className="text-xl text-white mb-8 leading-relaxed">
                {siteData.homepage.executiveFleet.subtitle}
              </p>
              <a href="/fleet" className="inline-block">
                <button className="bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-3 hover:bg-[#06A0A6] hover:text-white shadow-lg">
                  View Executive Fleet
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
              Sustainability
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
              {siteData.homepage.sustainability.title}
            </h2>
            <p className="text-xl text-[#2E3C44] mb-8">
              {siteData.homepage.sustainability.subtitle}
            </p>
            
            {/* Green Car Image */}
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl blur-xl"></div>
              <Image
                src="/eco-friendly-taxi-side.webp"
                alt="Eco-friendly and sustainable taxi vehicle from Aylestone Kings green fleet in Leicester"
                width={600}
                height={300}
                sizes="(max-width: 768px) 100vw, 600px"
                className="rounded-2xl"
                style={{ width: "auto", height: "auto" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
              Our Taxi Services in Leicester
            </h2>
            <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
              Professional taxi services for all your transportation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/airport-transfers-leicester" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#06A0A6]/30 transition-colors">
                <Plane className="h-8 w-8 text-[#06A0A6]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F0D3E] mb-4 group-hover:text-[#06A0A6] transition-colors">
                24/7 Airport Transfers in Leicester
              </h3>
              <p className="text-[#2E3C44] mb-6">
                Reliable airport transfers to all major UK airports. Fixed prices, flight monitoring, and professional service.
              </p>
              <div className="flex items-center text-[#06A0A6] font-semibold group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/local-taxi-leicester" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#06A0A6]/30 transition-colors">
                <MapPin className="h-8 w-8 text-[#06A0A6]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F0D3E] mb-4 group-hover:text-[#06A0A6] transition-colors">
                Local Taxi Services Around Aylestone
              </h3>
              <p className="text-[#2E3C44] mb-6">
                Fast, affordable local rides throughout Leicester. Immediate pick-up, competitive prices, and reliable service.
              </p>
              <div className="flex items-center text-[#06A0A6] font-semibold group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/long-distance-taxi-leicester" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#06A0A6]/30 transition-colors">
                <Car className="h-8 w-8 text-[#06A0A6]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F0D3E] mb-4 group-hover:text-[#06A0A6] transition-colors">
                Long-Distance & Corporate Taxi Service
              </h3>
              <p className="text-[#2E3C44] mb-6">
                Comfortable long-distance travel and corporate accounts. Professional transport for business and longer journeys.
              </p>
              <div className="flex items-center text-[#06A0A6] font-semibold group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
              {siteData.homepage.seoContent.introHeading}
            </h2>
            <p className="text-lg text-[#2E3C44] leading-relaxed">
              {siteData.homepage.seoContent.introBody}
            </p>
            <p className="text-lg text-[#2E3C44] leading-relaxed mt-4">
              {siteData.homepage.seoContent.mission}
            </p>
          </div>

          {/* Booking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-4">
                {siteData.homepage.seoContent.booking.heading}
              </div>
              <ul className="space-y-2">
                {siteData.homepage.seoContent.booking.bullets.map((item: string, idx: number) => (
                  <li key={idx} className="text-[#2E3C44]">{item}</li>
                ))}
              </ul>
              <div className="mt-4 text-[#2E3C44] text-sm">
                <div>Call: {siteData.company.phone}</div>
                <div>WhatsApp: {siteData.company.whatsapp}</div>
                <div>
                  Book online: <a href={contactInfo.booking.online} className="underline text-[#06A0A6]">Online Booking</a>
                </div>
              </div>
            </div>

            {/* Why Us */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#0F0D3E] mb-4">
                {siteData.homepage.seoContent.whyUs.heading}
              </h3>
              <div className="space-y-3">
                {siteData.homepage.seoContent.whyUs.items.map((w: {title: string, text: string}, idx: number) => (
                  <div key={idx}>
                    <div className="font-semibold text-[#0F0D3E]">{w.title}</div>
                    <div className="text-[#2E3C44]">{w.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Airports */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#0F0D3E] mb-4">
              {siteData.homepage.seoContent.airports.heading}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="font-semibold text-[#0F0D3E] mb-2">Airports Covered</div>
                <ul className="list-disc ml-5 text-[#2E3C44] space-y-1">
                  {siteData.homepage.seoContent.airports.airportsList.map((a: {name: string, href: string}, idx: number) => (
                    <li key={idx}>
                      <a href={a.href} className="text-[#06A0A6] underline hover:no-underline">
                        {a.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 md:col-span-2">
                <div className="font-semibold text-[#0F0D3E] mb-2">Why choose our airport service?</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {siteData.homepage.seoContent.airports.bullets.map((b: string, idx: number) => (
                    <li key={idx} className="text-[#2E3C44]">{b}</li>
                  ))}
                </ul>
                <p className="text-[#2E3C44] mt-4">{siteData.homepage.seoContent.airports.closing}</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#0F0D3E] mb-4">
              {siteData.homepage.seoContent.services.heading}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {siteData.homepage.seoContent.services.items.map((s: string, idx: number) => (
                <li key={idx} className="text-[#2E3C44]">{s}</li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#0F0D3E] mb-4">
              {siteData.homepage.seoContent.areas.heading}
            </h3>
            <p className="text-[#2E3C44]">{siteData.homepage.seoContent.areas.text}</p>
            {siteData.homepage.seoContent.areas.links && (
              <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
                {siteData.homepage.seoContent.areas.links.map((loc: {name: string, href: string}, idx: number) => (
                  <li key={idx}>
                    <a href={loc.href} className="text-[#06A0A6] hover:text-[#0F0D3E] transition-colors flex items-center gap-1.5">
                      <ArrowRight className="h-3 w-3 flex-shrink-0" />
                      <span>{loc.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Fleet */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#0F0D3E] mb-4">
              {siteData.homepage.seoContent.fleet.heading}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {siteData.homepage.seoContent.fleet.items.map((f: string, idx: number) => (
                <li key={idx} className="text-[#2E3C44]">{f}</li>
              ))}
            </ul>
            <p className="text-[#2E3C44] mt-3">{siteData.homepage.seoContent.fleet.note}</p>
          </div>

          {/* Closing CTA Points */}
          <div className="bg-[#E4E4E4] rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-[#0F0D3E] mb-4">
              {siteData.homepage.seoContent.closingCta.heading}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {siteData.homepage.seoContent.closingCta.bullets.map((c: string, idx: number) => (
                <li key={idx} className="text-[#2E3C44]">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
              {siteData.homepage.customerReviews.title}
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Carousel Track */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` } as React.CSSProperties}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-2xl mx-auto">
                      <div className="bg-cyan-500/20 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-cyan-500/30 transform transition-all duration-300 hover:scale-105">
                        {/* Quote Icon */}
                        <div className="flex justify-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                            </svg>
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-[#06A0A6] text-[#06A0A6]" />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-[#0F0D3E] text-base md:text-lg mb-6 leading-relaxed italic text-center font-medium">
                          "{review.text}"
                        </p>

                        {/* Author Info */}
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#06A0A6]/20 to-[#0F0D3E]/20 rounded-full flex items-center justify-center mb-3">
                            <span className="text-[#06A0A6] font-bold text-lg">
                              {review.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <h4 className="font-bold text-[#0F0D3E] text-base">{review.author}</h4>
                          <p className="text-xs text-[#0F0D3E] bg-[#06A0A6]/20 px-3 py-1 rounded-full">
                            {review.type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6 text-[#0F0D3E]" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6 text-[#0F0D3E]" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-[#06A0A6] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isAutoPlaying 
                    ? 'bg-[#06A0A6] text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`py-20 ${isHalloweenActive ? 'bg-gradient-to-r from-[#FF7B00] to-[#111111]' : 'bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E]'} text-white`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
            {isHalloweenActive ? "🎃Ready for a Spook-tacular Ride?🎃" : "Ready to experience the difference?"}
          </h2>
          <p className="text-xl text-[#E4E4E4] mb-8 max-w-2xl mx-auto">
            {isHalloweenActive ? "No tricks, just treats! Book your safe and reliable ride today." : "Let's start with a conversation about how we can help you with your transportation needs."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="inline-block">
              <button className={`${isHalloweenActive ? 'bg-white text-[#FF7B00] hover:bg-[#E4E4E4]' : 'bg-white text-[#06A0A6] hover:bg-[#E4E4E4]'} px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl`}>
                {isHalloweenActive ? "Book Your Ride 🎃" : "Get in touch"}
                <ArrowRight className="h-5 w-5" />
              </button>
            </a>
            <a href="#app-download" className="inline-block">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-all duration-200 shadow-lg hover:shadow-xl">
                Download our app
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
