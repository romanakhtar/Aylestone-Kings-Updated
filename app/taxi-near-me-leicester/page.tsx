import Image from "next/image"
import { Check, ArrowRight, MapPin, Clock, Shield, Star, Phone, Calendar, Navigation } from "lucide-react"
import { contactInfo, siteData } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Taxi Near Me Leicester | Find Taxi Near You | Aylestone Kings",
  description: "Taxi Near Me Leicester - Find the nearest taxi service in Leicester. Fast pick-ups, 24/7 service, serving all Leicester areas. Book your Taxi Near Me Leicester now - call 0116 2338888.",
  keywords: "Taxi Near Me Leicester, taxi near me, Leicester taxi near me, find taxi Leicester, nearest taxi Leicester",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/taxi-near-me-leicester",
  },
  openGraph: {
    title: "Taxi Near Me Leicester | Find Taxi Near You | Aylestone Kings",
    description: "Taxi Near Me Leicester - Find the nearest taxi service in Leicester. Fast pick-ups, 24/7 service.",
    url: "https://aylestone-taxis.co.uk/taxi-near-me-leicester",
  },
}

export default function TaxiNearMeLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Taxi Near Me Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Taxi Near Me Leicester - Fast Local Pick-Ups
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Looking for a <strong>Taxi Near Me Leicester</strong>? Aylestone Kings provides fast, reliable taxi service 
                throughout Leicester with immediate pick-up in most areas. Find your nearest <strong>Taxi Near Me Leicester</strong> service now.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Navigation className="h-6 w-6" />
                    Find Taxi Near Me Now
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

        {/* Why Our Taxi Near Me Leicester Service */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Choose Our Taxi Near Me Leicester Service?
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                When you search for <strong>Taxi Near Me Leicester</strong>, choose the service with the fastest response times
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Navigation className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Immediate Pick-Up</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Taxi Near Me Leicester</strong> service offers immediate pick-up in most Leicester areas. 
                  No long waits - we're nearby and ready to serve you.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">All Leicester Locations</h3>
                <p className="text-[#2E3C44]">
                  Whether you're in the city centre, Aylestone, Oadby, or anywhere in Leicester, 
                  our <strong>Taxi Near Me Leicester</strong> service is nearby.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">24/7 Availability</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Taxi Near Me Leicester</strong> service operates 24/7. 
                  Day or night, we're always nearby when you need us.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Licensed & Safe</h3>
                <p className="text-[#2E3C44]">
                  All our <strong>Taxi Near Me Leicester</strong> drivers are fully licensed and DBS checked. 
                  Your safety is guaranteed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">30+ Years Experience</h3>
                <p className="text-[#2E3C44]">
                  Leicester's most trusted <strong>Taxi Near Me Leicester</strong> service since 1995. 
                  Over 10,000 satisfied customers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Easy Booking</h3>
                <p className="text-[#2E3C44]">
                  Book your <strong>Taxi Near Me Leicester</strong> service online, by phone, or WhatsApp. 
                  Simple, fast, and convenient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Find Taxi Near Me */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                How to Find Your Taxi Near Me Leicester
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Call or Book Online</h3>
                <p className="text-[#2E3C44] text-center">
                  Call us at {contactInfo.phone} or book online. Tell us your location and we'll dispatch the nearest <strong>Taxi Near Me Leicester</strong>.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Fast Dispatch</h3>
                <p className="text-[#2E3C44] text-center">
                  We operate from multiple locations across Leicester, ensuring your <strong>Taxi Near Me Leicester</strong> 
                  arrives quickly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Track Your Driver</h3>
                <p className="text-[#2E3C44] text-center">
                  Receive driver details and track your <strong>Taxi Near Me Leicester</strong> in real-time. 
                  Know exactly when your taxi will arrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Taxi Near Me Leicester - Popular Areas
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Our <strong>Taxi Near Me Leicester</strong> service covers all these popular areas and more
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["Leicester City Centre", "Aylestone", "Oadby", "Wigston", "Evington", "Belgrave", "Highfields", "Braunstone", "Beaumont Leys", "Hamilton", "Knighton", "Clarendon Park"].map((area, idx) => (
                <div key={idx} className="bg-[#E4E4E4] p-4 rounded-xl text-center">
                  <MapPin className="h-5 w-5 text-[#06A0A6] mx-auto mb-2" />
                  <p className="text-[#0F0D3E] font-medium">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Find Your Taxi Near Me Leicester Now
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Fast, reliable <strong>Taxi Near Me Leicester</strong> service. 
              Book online, call, or WhatsApp us - we're nearby and ready to serve you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Book Taxi Near Me
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

