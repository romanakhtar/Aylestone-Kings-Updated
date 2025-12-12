import Image from "next/image"
import { Check, ArrowRight, MapPin, Clock, Shield, Star, Phone, Navigation, Home } from "lucide-react"
import { contactInfo, siteData } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Local Taxi Service in Leicester | Quick & Affordable Rides",
  description: "Need a local taxi in Leicester? Aylestone Taxis provides fast, affordable local rides. Call or book online today.",
  keywords: "local taxi Leicester, taxi service Leicester, local taxi Aylestone, quick taxi Leicester, affordable taxi Leicester",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/local-taxi-leicester",
  },
  openGraph: {
    title: "Local Taxi Service in Leicester | Quick & Affordable Rides",
    description: "Need a local taxi in Leicester? Aylestone Taxis provides fast, affordable local rides.",
    url: "https://aylestone-taxis.co.uk/local-taxi-leicester",
  },
}

export default function LocalTaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Local Taxi Service Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Local Taxi Services in Leicester
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Need a <strong>local taxi in Leicester</strong>? Aylestone Taxis provides fast, affordable local rides throughout 
                Leicester and surrounding areas. Immediate pick-up, competitive prices, and professional service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Navigation className="h-6 w-6" />
                    Book Local Taxi Now
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

        {/* Why Choose Our Local Service */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Choose Our Local Taxi Service?
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Fast, affordable, and reliable local transport throughout Leicester
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Fast Pick-Up</h3>
                <p className="text-[#2E3C44]">
                  Immediate pick-up in most Leicester areas. We operate from multiple locations 
                  across the city for quick dispatch.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">All Leicester Areas</h3>
                <p className="text-[#2E3C44]">
                  We serve all areas of Leicester including city centre, Aylestone, Oadby, 
                  Wigston, Evington, and surrounding districts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Affordable Prices</h3>
                <p className="text-[#2E3C44]">
                  Competitive pricing with no hidden charges. Transparent fares for all local journeys 
                  throughout Leicester.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">24/7 Availability</h3>
                <p className="text-[#2E3C44]">
                  Available day and night, 365 days a year. Whether you need a ride at 3am or 3pm, 
                  we're here for you.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">School Runs & Appointments</h3>
                <p className="text-[#2E3C44]">
                  Reliable transport for school runs, medical appointments, shopping trips, 
                  and everyday journeys around Leicester.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Easy Booking</h3>
                <p className="text-[#2E3C44]">
                  Book online, by phone, or WhatsApp. Simple, fast, and convenient booking 
                  for all your local travel needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Local Destinations */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Popular Local Destinations
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                We serve all these popular locations and more throughout Leicester
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["Leicester City Centre", "Highcross Shopping Centre", "Fosse Park", "Leicester Royal Infirmary", "Leicester Train Station", "University of Leicester", "De Montfort University", "Leicester Market", "King Power Stadium", "Aylestone", "Oadby", "Wigston"].map((location, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl text-center shadow-md">
                  <MapPin className="h-5 w-5 text-[#06A0A6] mx-auto mb-2" />
                  <p className="text-[#0F0D3E] font-medium">{location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Book */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                How to Book Your Local Taxi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#E4E4E4] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Call or Book Online</h3>
                <p className="text-[#2E3C44] text-center">
                  Call {contactInfo.phone} or book online. Tell us your pickup location 
                  and destination.
                </p>
              </div>

              <div className="bg-[#E4E4E4] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Fast Dispatch</h3>
                <p className="text-[#2E3C44] text-center">
                  We dispatch the nearest available taxi. Most pickups happen within 
                  minutes of your booking.
                </p>
              </div>

              <div className="bg-[#E4E4E4] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Track Your Driver</h3>
                <p className="text-[#2E3C44] text-center">
                  Receive driver details and track your taxi in real-time. 
                  Know exactly when your ride will arrive.
                </p>
              </div>
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
              <Link href="/airport-transfers-leicester" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Airport Transfers</h3>
                <p className="text-[#2E3C44]">Reliable airport transfers to all major UK airports</p>
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
              Book Your Local Taxi Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Fast, affordable local taxi service in Leicester. Book online or call us now 
              for immediate pick-up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Book Local Taxi
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

