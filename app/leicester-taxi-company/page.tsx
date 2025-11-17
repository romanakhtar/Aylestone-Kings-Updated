import Image from "next/image"
import { Check, ArrowRight, MapPin, Clock, Shield, Star, Phone, Calendar, Building2 } from "lucide-react"
import { contactInfo, siteData } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Leicester Taxi Company | Professional Taxi Service Leicester | Aylestone Kings",
  description: "Leicester Taxi Company - Aylestone Kings is Leicester's trusted taxi company since 1995. Professional service, licensed drivers, 24/7 availability. Book with Leicester's leading taxi company - call 0116 2338888.",
  keywords: "Leicester Taxi Company, taxi company Leicester, Leicester taxi firm, professional taxi company Leicester, best taxi company Leicester",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/leicester-taxi-company",
  },
  openGraph: {
    title: "Leicester Taxi Company | Professional Taxi Service Leicester | Aylestone Kings",
    description: "Leicester Taxi Company - Aylestone Kings is Leicester's trusted taxi company since 1995. Professional service, licensed drivers.",
    url: "https://aylestone-taxis.co.uk/leicester-taxi-company",
  },
}

export default function LeicesterTaxiCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Leicester Taxi Company
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Leicester Taxi Company - Trusted Since 1995
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Aylestone Kings is Leicester's most trusted <strong>Leicester Taxi Company</strong>. 
                Established in 1995, we've been serving Leicester and Leicestershire for over 30 years with professional, 
                reliable taxi services. As a leading <strong>Leicester Taxi Company</strong>, we pride ourselves on excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Building2 className="h-6 w-6" />
                    Book with Leicester Taxi Company
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

        {/* About Our Company */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Aylestone Kings is Leicester's Leading Taxi Company
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                As a trusted <strong>Leicester Taxi Company</strong>, we've built our reputation on reliability, 
                professionalism, and customer satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#E4E4E4] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">30+</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Years Experience</h3>
                <p className="text-[#2E3C44] text-center">
                  As a <strong>Leicester Taxi Company</strong>, we've been serving the community since 1995. 
                  Over 30 years of excellence.
                </p>
              </div>

              <div className="bg-[#E4E4E4] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">10K+</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Happy Customers</h3>
                <p className="text-[#2E3C44] text-center">
                  Our <strong>Leicester Taxi Company</strong> has served over 10,000 satisfied customers 
                  across Leicester and Leicestershire.
                </p>
              </div>

              <div className="bg-[#E4E4E4] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">99.7%</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Satisfaction Rate</h3>
                <p className="text-[#2E3C44] text-center">
                  Our <strong>Leicester Taxi Company</strong> maintains a 99.7% customer satisfaction rating. 
                  Quality service you can trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Credentials */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Leicester Taxi Company - Our Credentials
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Fully Licensed</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Leicester Taxi Company</strong> is fully licensed by Leicester City Council 
                  and Wolverhampton City Council. All drivers are DBS checked.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Professional Fleet</h3>
                <p className="text-[#2E3C44]">
                  As a leading <strong>Leicester Taxi Company</strong>, we maintain a modern fleet of saloon cars, 
                  estate vehicles, executive cars, and MPVs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">24/7 Service</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Leicester Taxi Company</strong> operates 24 hours a day, 7 days a week, 
                  including bank holidays. Always available.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Award-Winning Service</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Leicester Taxi Company</strong> has consistently been recognized for excellence 
                  in customer service and reliability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Local Knowledge</h3>
                <p className="text-[#2E3C44]">
                  As a <strong>Leicester Taxi Company</strong>, our drivers have extensive local knowledge, 
                  ensuring the fastest and most efficient routes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Comprehensive Services</h3>
                <p className="text-[#2E3C44]">
                  Our <strong>Leicester Taxi Company</strong> offers airport transfers, local journeys, 
                  corporate accounts, and specialized transport services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Leicester Taxi Company - Our Services
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                As a comprehensive <strong>Leicester Taxi Company</strong>, we offer a full range of transportation services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteData.homepage.seoContent.services.items.map((service, idx) => (
                <div key={idx} className="bg-[#E4E4E4] p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                    <p className="text-[#2E3C44] text-lg">{service}</p>
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
              Choose Leicester's Trusted Taxi Company
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Experience the difference with Aylestone Kings, Leicester's leading <strong>Leicester Taxi Company</strong>. 
              30+ years of excellence, professional service, and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Book with Us Now
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

