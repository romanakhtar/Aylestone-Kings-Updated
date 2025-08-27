import Footer from "@/components/footer"
import Image from "next/image"
import { Check, ArrowRight, Star, MapPin, Clock, Shield, Users } from "lucide-react"
import { siteData, contactInfo } from "@/lib/data"
import AppDownloadButtons from "@/components/AppDownloadButtons"
import AnimatedHero from "@/components/AnimatedHero"

export default function Home() {
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
                <button className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-3">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06A0A6]/10 to-[#2E3C44]/10 rounded-2xl"></div>
              <Image
                src={siteData.images.trustedTransport}
                alt="Trusted Transport Service"
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
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
              {siteData.homepage.whyChooseUs.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.homepage.whyChooseUs.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#06A0A6]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#06A0A6]" />
                </div>
                <p className="text-[#2E3C44] font-medium">{feature}</p>
              </div>
            ))}
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
                alt="Passengers enjoying taxi service"
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
                alt="Business Travel Solutions"
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
              <a href="/company" className="inline-block">
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
            <div className="relative ml-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06A0A6]/20 to-[#2E3C44]/20 rounded-2xl blur-xl"></div>
              <Image
                src="/app-screen-tracking.jpg"
                alt="App Screenshot"
                width={400}
                height={800}
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
                <button className="bg-[#06A0A6] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-3 hover:bg-[#0F0D3E] shadow-lg">
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
                alt="Eco-Friendly Car"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.homepage.customerReviews.reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-[#E4E4E4]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#06A0A6] text-[#06A0A6]" />
                  ))}
                </div>
                <p className="text-[#2E3C44] mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#06A0A6] font-semibold text-lg">
                      {review.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F0D3E]">{review.author}</h4>
                    <p className="text-sm text-[#2E3C44]">{review.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
            Ready to experience the difference?
          </h2>
          <p className="text-xl text-[#E4E4E4] mb-8 max-w-2xl mx-auto">
            Let's start with a conversation about how we can help you with your transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="inline-block">
              <button className="bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl">
                Get in touch
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

      <Footer />
    </div>
  )
}
