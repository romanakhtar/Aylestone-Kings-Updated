"use client"
import Image from "next/image"
import { Check, ArrowRight, Star, MapPin, Clock, Shield, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { siteData, contactInfo } from "@/lib/data"
import AppDownloadButtons from "@/components/AppDownloadButtons"
import AnimatedHero from "@/components/AnimatedHero"
import { useState, useEffect } from "react"
import Head from 'next/head'
import { useHalloweenTheme } from "@/components/HalloweenThemeProvider"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { isHalloweenActive } = useHalloweenTheme();

  const reviews = siteData.homepage.customerReviews.reviews;
  const totalSlides = reviews.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

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
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                loading="lazy"
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
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                loading="lazy"
              />
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
                src="/business-leisure.jpg"
                alt="Professional business travel solutions and corporate taxi services by Aylestone Kings for Leicester businesses"
                width={600}
                height={400}
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
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
                className="relative z-10 rounded-2xl shadow-2xl"
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
            backgroundImage: 'url(/black-car.jpg)',
            backgroundPosition: 'right center',
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
                src="/eco-friendly-taxi-side.png"
                alt="Eco-friendly and sustainable taxi vehicle from Aylestone Kings green fleet in Leicester"
                width={600}
                height={300}
                className="rounded-2xl"
              />
            </div>
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
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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
