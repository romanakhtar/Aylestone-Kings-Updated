import Image from "next/image"
import { Check, ArrowRight, MapPin, Clock, Shield, Star, Phone, Calendar, Plane } from "lucide-react"
import { contactInfo, siteData } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Leicester Airport Taxi | Airport Transfers from Leicester | Aylestone Kings",
  description: "Leicester Airport Taxi - Professional airport transfer service from Leicester to all major UK airports. Fixed prices, 24/7 service, licensed drivers. Book your Leicester Airport Taxi now - call 0116 2338888.",
  keywords: "Leicester Airport Taxi, airport taxi Leicester, Leicester airport transfer, airport taxi from Leicester, Leicester to airport taxi",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/leicester-airport-taxi",
  },
  openGraph: {
    title: "Leicester Airport Taxi | Airport Transfers from Leicester | Aylestone Kings",
    description: "Leicester Airport Taxi - Professional airport transfer service from Leicester to all major UK airports. Fixed prices, 24/7 service.",
    url: "https://aylestone-taxis.co.uk/leicester-airport-taxi",
  },
}

export default function LeicesterAirportTaxiPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Leicester Airport Taxi
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Leicester Airport Taxi - Professional Airport Transfers
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Looking for a reliable <strong>Leicester Airport Taxi</strong>? Aylestone Kings provides professional airport transfer 
                services from Leicester to all major UK airports. Fixed prices, flight monitoring, and 24/7 service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Plane className="h-6 w-6" />
                    Book Leicester Airport Taxi
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

        {/* Airports We Serve */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Leicester Airport Taxi - Airports We Serve
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Our <strong>Leicester Airport Taxi</strong> service covers all major UK airports
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteData.homepage.seoContent.airports.airportsList.map((airport, idx) => (
                <Link key={idx} href={airport.href} className="bg-[#E4E4E4] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#06A0A6]/5 group">
                  <div className="flex flex-col items-center text-center">
                    <Plane className="h-8 w-8 text-[#06A0A6] mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">{airport.name}</h3>
                    <p className="text-sm text-[#2E3C44]">View Pricing →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Leicester Airport Taxi */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Choose Our Leicester Airport Taxi Service?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Fixed Prices</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Leicester Airport Taxi</strong> service offers fixed prices with no surge pricing. 
                  Know your fare upfront - no surprises.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Flight Monitoring</h3>
                <p className="text-[#2E3C44]">
                  We monitor your flight for delays, ensuring your <strong>Leicester Airport Taxi</strong> 
                  arrives at the right time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Licensed & Insured</h3>
                <p className="text-[#2E3C44]">
                  All our <strong>Leicester Airport Taxi</strong> drivers are fully licensed and insured. 
                  Your safety is our priority.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Punctual Service</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Leicester Airport Taxi</strong> service guarantees punctuality. 
                  We'll get you to the airport on time, every time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Meet & Greet</h3>
                <p className="text-[#2E3C44]">
                  Available meet & greet service for your <strong>Leicester Airport Taxi</strong>. 
                  Your driver will meet you in arrivals with a name board.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Spacious Vehicles</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Leicester Airport Taxi</strong> fleet includes spacious vehicles perfect for luggage. 
                  Estate cars and MPVs available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Airport Transfer Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Leicester Airport Taxi - Service Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteData.homepage.seoContent.airports.bullets.map((feature, idx) => (
                <div key={idx} className="bg-[#E4E4E4] p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                    <p className="text-[#2E3C44] text-lg">{feature}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-[#2E3C44] text-lg">
                {siteData.homepage.seoContent.airports.closing}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Book Your Leicester Airport Taxi Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Professional, reliable <strong>Leicester Airport Taxi</strong> service. 
              Fixed prices, flight monitoring, and 24/7 availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Book Airport Taxi Now
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

