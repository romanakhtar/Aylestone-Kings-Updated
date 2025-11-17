import Image from "next/image"
import { Check, ArrowRight, MapPin, Clock, Shield, Star, Phone, Calendar, PoundSterling } from "lucide-react"
import { contactInfo, siteData } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cheap Taxi Leicester | Affordable Taxi Service | Best Prices | Aylestone Kings",
  description: "Cheap Taxi Leicester - Affordable taxi service in Leicester with competitive prices. No hidden fees, transparent pricing, professional service. Book your Cheap Taxi Leicester now - call 0116 2338888.",
  keywords: "Cheap Taxi Leicester, cheap taxi in Leicester, affordable taxi Leicester, budget taxi Leicester, low cost taxi Leicester, cheap taxi service Leicester",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/cheap-taxi-leicester",
  },
  openGraph: {
    title: "Cheap Taxi Leicester | Affordable Taxi Service | Best Prices | Aylestone Kings",
    description: "Cheap Taxi Leicester - Affordable taxi service in Leicester with competitive prices. No hidden fees, transparent pricing.",
    url: "https://aylestone-taxis.co.uk/cheap-taxi-leicester",
  },
}

export default function CheapTaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Cheap Taxi Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Cheap Taxi Leicester - Affordable & Reliable
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Looking for a <strong>Cheap Taxi Leicester</strong>? Aylestone Kings offers affordable taxi services 
                throughout Leicester with competitive prices, no hidden fees, and professional service. 
                Quality <strong>Cheap Taxi Leicester</strong> service that doesn't compromise on safety or reliability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <PoundSterling className="h-6 w-6" />
                    Book Cheap Taxi Leicester
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

        {/* Why Our Cheap Taxi Leicester is Great Value */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Our Cheap Taxi Leicester Offers Great Value
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Our <strong>Cheap Taxi Leicester</strong> service provides affordable prices without compromising on quality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <PoundSterling className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Competitive Prices</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Cheap Taxi Leicester</strong> service offers competitive rates that won't break the bank. 
                  Fair pricing for quality service.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">No Hidden Fees</h3>
                <p className="text-[#2E3C44]">
                  With our <strong>Cheap Taxi Leicester</strong> service, what you see is what you pay. 
                  Transparent pricing with no surprise charges.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Quality Service</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Cheap Taxi Leicester</strong> service doesn't mean cheap quality. 
                  Licensed drivers, safe vehicles, professional service.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Fast Pick-Ups</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Cheap Taxi Leicester</strong> service offers immediate pick-up in most areas. 
                  Fast service at affordable prices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">30+ Years Experience</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Cheap Taxi Leicester</strong> service is backed by over 30 years of experience. 
                  Trusted by thousands of Leicester residents.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">All Leicester Areas</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Cheap Taxi Leicester</strong> service covers all areas of Leicester and Leicestershire. 
                  Affordable transport wherever you are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Information */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Cheap Taxi Leicester - Transparent Pricing
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Our <strong>Cheap Taxi Leicester</strong> service offers fair, transparent pricing
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <PoundSterling className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Local Journeys</h3>
                    <p className="text-[#2E3C44]">
                      Our <strong>Cheap Taxi Leicester</strong> service offers competitive rates for local journeys 
                      throughout Leicester. Prices vary by distance and are quoted upfront.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PoundSterling className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Airport Transfers</h3>
                    <p className="text-[#2E3C44]">
                      Fixed-price airport transfers from our <strong>Cheap Taxi Leicester</strong> service. 
                      From £40 to East Midlands Airport, competitive rates to all major UK airports.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">No Surge Pricing</h3>
                    <p className="text-[#2E3C44]">
                      Unlike some services, our <strong>Cheap Taxi Leicester</strong> service doesn't use surge pricing. 
                      Fair rates at all times, including peak hours and bank holidays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Group Discounts</h3>
                    <p className="text-[#2E3C44]">
                      Our <strong>Cheap Taxi Leicester</strong> service offers great value for groups. 
                      MPV and minibus options provide cost-effective transport for larger parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Cheap Taxi Leicester */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Choose Our Cheap Taxi Leicester Service?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#E4E4E4] p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">Affordable Without Compromise</h3>
                    <p className="text-[#2E3C44]">
                      Our <strong>Cheap Taxi Leicester</strong> service offers affordable prices while maintaining 
                      professional standards, licensed drivers, and safe vehicles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E4E4E4] p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">Transparent Pricing</h3>
                    <p className="text-[#2E3C44]">
                      With our <strong>Cheap Taxi Leicester</strong> service, you'll always know the price upfront. 
                      No hidden fees, no surprises.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E4E4E4] p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">24/7 Availability</h3>
                    <p className="text-[#2E3C44]">
                      Our <strong>Cheap Taxi Leicester</strong> service is available 24/7, including bank holidays. 
                      Affordable transport whenever you need it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E4E4E4] p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">Trusted Service</h3>
                    <p className="text-[#2E3C44]">
                      Our <strong>Cheap Taxi Leicester</strong> service is backed by 30+ years of experience and 
                      thousands of satisfied customers.
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
              Book Your Cheap Taxi Leicester Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Affordable, reliable <strong>Cheap Taxi Leicester</strong> service. 
              Competitive prices, professional service, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Book Cheap Taxi Now
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

