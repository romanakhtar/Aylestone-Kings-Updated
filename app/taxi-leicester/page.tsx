import Image from "next/image"
import { Check, ArrowRight, MapPin, Clock, Shield, Star, Phone, Calendar } from "lucide-react"
import { contactInfo, siteData } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Taxi Leicester | Best Leicester Taxi Service | Aylestone Kings",
  description: "Taxi Leicester - Leicester's most trusted taxi service since 1995. 24/7 service, licensed drivers, fast pick-ups. Book your Taxi Leicester online or call 0116 2338888. Serving all areas of Leicester.",
  keywords: "Taxi Leicester, taxi in Leicester, Leicester taxi service, taxi company Leicester, Leicester taxis, taxi Leicester city centre",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/taxi-leicester",
  },
  openGraph: {
    title: "Taxi Leicester | Best Leicester Taxi Service | Aylestone Kings",
    description: "Taxi Leicester - Leicester's most trusted taxi service since 1995. 24/7 service, licensed drivers, fast pick-ups.",
    url: "https://aylestone-taxis.co.uk/taxi-leicester",
  },
}

export default function TaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Taxi Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Taxi Leicester - Your Trusted Local Taxi Service
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Looking for a reliable <strong>Taxi Leicester</strong>? Aylestone Kings has been Leicester's most trusted taxi service since 1995. 
                Fast pick-ups, professional drivers, and competitive prices throughout Leicester and Leicestershire.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Calendar className="h-6 w-6" />
                    Book Your Taxi Leicester Now
                  </button>
                </a>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-all duration-200 text-lg flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6" />
                    Call {contactInfo.phone}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Taxi Leicester Service */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Choose Our Taxi Leicester Service?
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                When you need a <strong>Taxi Leicester</strong>, choose the service that Leicester locals have trusted for over 30 years
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Fast Pick-Ups</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Taxi Leicester</strong> service offers immediate pick-up in most Leicester areas. 
                  No long waits, no delays - just reliable transportation when you need it.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Fully Licensed</h3>
                <p className="text-[#2E3C44]">
                  All our <strong>Taxi Leicester</strong> drivers are fully licensed by Leicester City Council and DBS checked. 
                  Your safety is our priority.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">All Leicester Areas</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Taxi Leicester</strong> service covers all areas including city centre, Aylestone, Oadby, 
                  Wigston, Evington, and throughout Leicestershire.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">30+ Years Experience</h3>
                <p className="text-[#2E3C44]">
                  Since 1995, we've been Leicester's trusted <strong>Taxi Leicester</strong> provider. 
                  Over 10,000 satisfied customers and a 99.7% satisfaction rating.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">24/7 Availability</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Taxi Leicester</strong> service operates 24 hours a day, 7 days a week, 
                  including bank holidays. Always here when you need us.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Competitive Prices</h3>
                <p className="text-[#2E3C44]">
                  Fair, transparent pricing for our <strong>Taxi Leicester</strong> service. 
                  No hidden fees, no surprises - just honest, competitive rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Cover */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Taxi Leicester - Areas We Cover
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Our <strong>Taxi Leicester</strong> service covers all areas of Leicester and Leicestershire
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {siteData.homepage.seoContent.areas.links.slice(0, 12).map((area, idx) => (
                <Link key={idx} href={area.href} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#06A0A6]/5">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#06A0A6]" />
                    <span className="text-[#0F0D3E] font-medium">{area.name}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-[#2E3C44] mb-4">
                And many more areas throughout Leicester and Leicestershire
              </p>
              <Link href="/" className="text-[#06A0A6] underline hover:no-underline font-semibold">
                View All Areas →
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Our Taxi Leicester Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteData.homepage.seoContent.services.items.map((service, idx) => (
                <div key={idx} className="bg-[#E4E4E4] p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                    <p className="text-[#2E3C44]">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Book Your Taxi Leicester Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Fast, reliable, and professional <strong>Taxi Leicester</strong> service. 
              Book online, call, or WhatsApp us now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Book Online Now
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-all duration-200 flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  Call {contactInfo.phone}
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

