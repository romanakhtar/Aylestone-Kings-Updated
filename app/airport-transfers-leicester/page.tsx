import Image from "next/image"
import { Check, ArrowRight, MapPin, Clock, Shield, Star, Phone, Plane, Calendar } from "lucide-react"
import { contactInfo, siteData } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Leicester Airport Taxi Service | Fast & Reliable Transfers",
  description: "Book a taxi from Leicester to the airport. Reliable 24/7 airport transfers with Aylestone Taxis. Call or book online.",
  keywords: "airport taxi Leicester, Leicester airport transfers, airport taxi service Leicester, East Midlands airport taxi, Heathrow taxi Leicester, Gatwick taxi Leicester",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/airport-transfers-leicester",
  },
  openGraph: {
    title: "Leicester Airport Taxi Service | Fast & Reliable Transfers",
    description: "Book a taxi from Leicester to the airport. Reliable 24/7 airport transfers with Aylestone Taxis.",
    url: "https://aylestone-taxis.co.uk/airport-transfers-leicester",
  },
}

export default function AirportTransfersLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Airport Transfers Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Airport Taxi Service in Leicester
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Need a reliable <strong>airport taxi service in Leicester</strong>? Aylestone Taxis provides fast, professional airport transfers 
                to all major UK airports. Fixed prices, 24/7 service, and flight monitoring for peace of mind.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Plane className="h-6 w-6" />
                    Book Airport Transfer
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

        {/* Why Choose Our Airport Service */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Choose Our Airport Taxi Service?
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Professional airport transfers with fixed prices, flight monitoring, and 24/7 availability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">All Major Airports</h3>
                <p className="text-[#2E3C44]">
                  We serve all major UK airports including East Midlands, Birmingham, Heathrow, Gatwick, 
                  Stansted, Luton, and Manchester. Fixed prices for peace of mind.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Flight Monitoring</h3>
                <p className="text-[#2E3C44]">
                  We monitor your flight status and adjust pickup times automatically. 
                  No need to worry about delays or early arrivals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Fixed Prices</h3>
                <p className="text-[#2E3C44]">
                  No hidden charges or surge pricing. Know exactly what you'll pay upfront. 
                  Transparent pricing for all airport transfers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Pre-Bookings Welcome</h3>
                <p className="text-[#2E3C44]">
                  Book your airport transfer in advance for peace of mind. 
                  We'll be there on time, every time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Professional Drivers</h3>
                <p className="text-[#2E3C44]">
                  All our drivers are fully licensed, DBS checked, and experienced in airport transfers. 
                  Your safety and comfort are our priority.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Luggage Assistance</h3>
                <p className="text-[#2E3C44]">
                  Our drivers help with luggage loading and unloading. 
                  Spacious vehicles accommodate all your travel needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                How to Book Your Airport Transfer
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Book Online or Call</h3>
                <p className="text-[#2E3C44] text-center">
                  Book your airport transfer online or call {contactInfo.phone}. 
                  Provide your flight details and we'll handle the rest.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">We Monitor Your Flight</h3>
                <p className="text-[#2E3C44] text-center">
                  We track your flight status and adjust pickup times automatically. 
                  You'll receive SMS/WhatsApp confirmations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Reliable Pickup</h3>
                <p className="text-[#2E3C44] text-center">
                  Your driver arrives on time, helps with luggage, and ensures a comfortable journey 
                  to or from the airport.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Airport Destinations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Airports We Serve
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Fixed-price transfers to all major UK airports from Leicester
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "East Midlands Airport", href: "/pricing/airports/East-Midlands" },
                { name: "Birmingham Airport", href: "/pricing/airports/Birmingham" },
                { name: "Heathrow Airport", href: "/pricing/airports/Heathrow" },
                { name: "Gatwick Airport", href: "/pricing/airports/Gatwick" },
                { name: "Stansted Airport", href: "/pricing/airports/Stansted" },
                { name: "Luton Airport", href: "/pricing/airports/Luton" },
                { name: "Manchester Airport", href: "/pricing/airports/Manchester" },
              ].map((airport, idx) => (
                <Link key={idx} href={airport.href} className="bg-[#E4E4E4] p-6 rounded-xl hover:bg-[#06A0A6]/10 transition-colors">
                  <Plane className="h-8 w-8 text-[#06A0A6] mb-3" />
                  <p className="text-[#0F0D3E] font-semibold text-lg">{airport.name}</p>
                  <p className="text-[#2E3C44] text-sm mt-2">Fixed-price transfers available</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
                Other Services You Might Need
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/local-taxi-leicester" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Local Taxi Service</h3>
                <p className="text-[#2E3C44]">Quick and affordable local rides around Leicester</p>
              </Link>
              <Link href="/long-distance-taxi-leicester" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Long-Distance & Corporate</h3>
                <p className="text-[#2E3C44]">Comfortable long-distance travel and corporate accounts</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Book Your Airport Transfer Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Reliable airport taxi service in Leicester with fixed prices and flight monitoring. 
              Book online or call us now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Book Airport Transfer
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

