import Image from "next/image"
import { Check, ArrowRight, MapPin, Clock, Shield, Star, Phone, Calendar, Plane } from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Leicester to East Midlands Airport Taxi | Fixed Prices, 24/7 Service | Book Instantly | Aylestone Taxis",
  description: "Leicester to East Midlands Airport Taxi - Fixed price transfers from Leicester to EMA. From £40, 24/7 service, licensed drivers. Book your Leicester to East Midlands Airport Taxi now - call 0116 2338888.",
  keywords: "Leicester to East Midlands Airport Taxi, Leicester to EMA taxi, East Midlands Airport taxi from Leicester, Leicester EMA transfer",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/leicester-to-east-midlands-airport-taxi",
  },
  openGraph: {
    title: "Leicester to East Midlands Airport Taxi | Fixed Prices, 24/7 Service | Book Instantly | Aylestone Taxis",
    description: "Leicester to East Midlands Airport Taxi - Fixed price transfers from Leicester to EMA. From £40, 24/7 service.",
    url: "https://aylestone-taxis.co.uk/leicester-to-east-midlands-airport-taxi",
  },
}

export default function LeicesterToEastMidlandsAirportTaxiPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Leicester to East Midlands Airport Taxi
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Leicester to East Midlands Airport Taxi - Fixed Price Transfers
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Need a <strong>Leicester to East Midlands Airport Taxi</strong>? Aylestone Kings offers reliable, 
                fixed-price transfers from Leicester to East Midlands Airport (EMA). Professional service, competitive rates, 
                and 24/7 availability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Calendar className="h-6 w-6" />
                    Book Leicester to EMA Taxi
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

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Leicester to East Midlands Airport Taxi - Pricing
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Fixed prices for our <strong>Leicester to East Midlands Airport Taxi</strong> service. No hidden fees.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border border-[#06A0A6]/20 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
                      <th className="px-6 py-4 text-left font-semibold text-lg">Vehicle Type</th>
                      <th className="px-6 py-4 text-center font-semibold text-lg">Capacity</th>
                      <th className="px-6 py-4 text-right font-semibold text-lg">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-[#06A0A6]/5 transition-colors duration-200">
                      <td className="px-6 py-4 font-medium text-[#0F0D3E]">
                        <div className="flex items-center space-x-3">
                          <Plane className="h-6 w-6 text-[#06A0A6]" />
                          <span>Standard Saloon</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-[#2E3C44]">1-4 passengers</td>
                      <td className="px-6 py-4 text-right text-[#06A0A6] font-semibold text-lg">from £40</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-[#06A0A6]/5 transition-colors duration-200">
                      <td className="px-6 py-4 font-medium text-[#0F0D3E]">
                        <div className="flex items-center space-x-3">
                          <Plane className="h-6 w-6 text-[#06A0A6]" />
                          <span>MPV / Minibus</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-[#2E3C44]">6-8 passengers</td>
                      <td className="px-6 py-4 text-right text-[#06A0A6] font-semibold text-lg">from £60</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-[#2E3C44] italic">
                  Prices shown are starting rates from Leicester city centre. Additional pickup locations may affect final price.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Service */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Choose Our Leicester to East Midlands Airport Taxi?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Fast Journey</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Leicester to East Midlands Airport Taxi</strong> service takes approximately 30 minutes. 
                  We know the best routes to get you there on time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Fixed Prices</h3>
                <p className="text-[#2E3C44]">
                  No meter running, no surprises. Our <strong>Leicester to East Midlands Airport Taxi</strong> 
                  service offers fixed prices from £40.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Licensed Drivers</h3>
                <p className="text-[#2E3C44]">
                  All our <strong>Leicester to East Midlands Airport Taxi</strong> drivers are fully licensed 
                  and DBS checked for your safety.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Flight Monitoring</h3>
                <p className="text-[#2E3C44]">
                  We monitor your flight for delays, ensuring your <strong>Leicester to East Midlands Airport Taxi</strong> 
                  arrives at the right time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Door-to-Door</h3>
                <p className="text-[#2E3C44]">
                  Pickup from your exact location in Leicester and drop-off at East Midlands Airport terminal. 
                  Our <strong>Leicester to East Midlands Airport Taxi</strong> service is convenient and reliable.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">24/7 Service</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Leicester to East Midlands Airport Taxi</strong> service operates 24/7, 
                  perfect for early morning flights and late night arrivals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Leicester to East Midlands Airport Taxi - Journey Details
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-[#E4E4E4] p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Distance & Time</h3>
                    <p className="text-[#2E3C44]">
                      The journey from Leicester to East Midlands Airport is approximately 30-40 minutes, 
                      depending on traffic. Our <strong>Leicester to East Midlands Airport Taxi</strong> service 
                      uses the most efficient routes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">When to Book</h3>
                    <p className="text-[#2E3C44]">
                      We recommend booking your <strong>Leicester to East Midlands Airport Taxi</strong> at least 24 hours 
                      in advance, especially for early morning flights. However, we also accept same-day bookings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Plane className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Return Journeys</h3>
                    <p className="text-[#2E3C44]">
                      We also provide return <strong>Leicester to East Midlands Airport Taxi</strong> service. 
                      Simply provide your flight details and we'll track your flight and adjust pickup times if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Book Your Leicester to East Midlands Airport Taxi
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Reliable, fixed-price <strong>Leicester to East Midlands Airport Taxi</strong> service. 
              From £40, professional drivers, 24/7 availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Book Now
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
              <Link href="/pricing/airports/East-Midlands" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-all duration-200">
                  View Full Pricing
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

