import { Check, ArrowRight, Clock, Shield, Star, Phone, Briefcase, Route } from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Long-Distance Taxi Leicester | UK-Wide | Book 0116 2338888",
  description:
    "Long-distance taxi from Leicester with guide prices: London from £180, Manchester from £150, Nottingham from £45, and more. Saloon (1–4) and MPV (5–6). Corporate accounts welcome. Book online or call 0116 2338888.",
  keywords:
    "long distance taxi Leicester, long distance taxis, taxi for long distance, corporate taxi Leicester, business taxi Leicester, intercity taxi Leicester",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/long-distance-taxi-leicester",
  },
  openGraph: {
    title: "Long-Distance Taxi Leicester | UK-Wide | Aylestone Taxis",
    description:
      "Corporate and long-distance taxi from Leicester with guide prices on popular routes. Agreed fares, 24/7. Book online or call 0116 2338888.",
    url: "https://aylestone-taxis.co.uk/long-distance-taxi-leicester",
  },
}

const LONG_DISTANCE_GUIDE_PRICES: {
  route: string
  saloon: string
  mpv: string
  notes: string
}[] = [
  { route: "Leicester to London", saloon: "From £180", mpv: "From £220", notes: "M1 route, approx 2hrs" },
  { route: "Leicester to Manchester", saloon: "From £150", mpv: "From £190", notes: "M6 route, approx 2hrs" },
  { route: "Leicester to Nottingham", saloon: "From £45", mpv: "From £65", notes: "30 mins via A453" },
  { route: "Leicester to Sheffield", saloon: "From £90", mpv: "From £120", notes: "1hr 15mins via M1" },
  { route: "Leicester to Derby", saloon: "From £55", mpv: "From £75", notes: "45 mins via A52" },
  { route: "Leicester to Coventry", saloon: "From £55", mpv: "From £75", notes: "45 mins via M69" },
  { route: "Leicester to Cambridge", saloon: "From £110", mpv: "From £140", notes: "1hr 30mins via A14" },
  { route: "Leicester to Oxford", saloon: "From £120", mpv: "From £150", notes: "1hr 40mins via M40" },
]

export default function LongDistanceTaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Long-Distance & Corporate Taxi Service
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Long-Distance & Corporate Taxi Services
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Need a <strong>long-distance taxi</strong> or <strong>corporate taxi service in Leicester</strong>? Aylestone Taxis provides 
                comfortable, professional transport for longer journeys and business travel. Corporate accounts available with dedicated support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-[transform,opacity] duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Route className="h-6 w-6" />
                    Book Long-Distance Taxi
                  </button>
                </a>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-[transform,opacity] duration-200 text-lg flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6" />
                    Call {contactInfo.phone}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Long-Distance Service */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Choose Our Long-Distance & Corporate Service?
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Comfortable, professional transport for longer journeys and business travel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Route className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Nationwide Coverage</h3>
                <p className="text-[#2E3C44]">
                  We provide long-distance taxi services across the UK. From Leicester to London, 
                  Manchester, Birmingham, and beyond.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Corporate Accounts</h3>
                <p className="text-[#2E3C44]">
                  Dedicated account management, invoicing, and reporting for businesses. 
                  Centralised booking and expense tracking.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Comfortable Vehicles</h3>
                <p className="text-[#2E3C44]">
                  Spacious saloons, estates, and executive vehicles for longer journeys. 
                  Comfortable seating and climate control.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Flexible Scheduling</h3>
                <p className="text-[#2E3C44]">
                  Pre-book long-distance journeys with flexible scheduling. 
                  We accommodate your travel needs and timing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Professional Drivers</h3>
                <p className="text-[#2E3C44]">
                  Experienced drivers familiar with long-distance routes. 
                  Professional, courteous, and reliable service.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Transparent Pricing</h3>
                <p className="text-[#2E3C44]">
                  Guide prices for popular routes are listed below; we confirm your fixed fare when you book. 
                  No hidden charges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Services */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Corporate Taxi Services
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Professional transport solutions for businesses in Leicester
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Briefcase className="h-12 w-12 text-[#06A0A6] mb-4" />
                <h3 className="text-2xl font-bold text-[#0F0D3E] mb-4">Account Management</h3>
                <ul className="space-y-3 text-[#2E3C44]">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6] mt-0.5 flex-shrink-0" />
                    <span>Dedicated account manager for your business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6] mt-0.5 flex-shrink-0" />
                    <span>Centralised booking system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6] mt-0.5 flex-shrink-0" />
                    <span>Monthly invoicing and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6] mt-0.5 flex-shrink-0" />
                    <span>Expense tracking and analytics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Route className="h-12 w-12 text-[#06A0A6] mb-4" />
                <h3 className="text-2xl font-bold text-[#0F0D3E] mb-4">Business Travel</h3>
                <ul className="space-y-3 text-[#2E3C44]">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6] mt-0.5 flex-shrink-0" />
                    <span>Airport transfers for business trips</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6] mt-0.5 flex-shrink-0" />
                    <span>Intercity business travel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6] mt-0.5 flex-shrink-0" />
                    <span>Client meetings and site visits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6] mt-0.5 flex-shrink-0" />
                    <span>Executive transport services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Long-distance guide prices */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Popular long-distance routes — guide prices
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Fixed fares from Leicester city centre. Saloon for 1–4 passengers; MPV for 5–6. We confirm your exact
                price when you book — other UK destinations quoted on request.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="overflow-x-auto rounded-2xl shadow-xl border border-[#06A0A6]/25">
                <table className="w-full min-w-[640px] text-left">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
                      <th className="px-4 sm:px-6 py-4 font-semibold">Route</th>
                      <th className="px-4 sm:px-6 py-4 font-semibold">Saloon (1–4 pax)</th>
                      <th className="px-4 sm:px-6 py-4 font-semibold">MPV (5–6 pax)</th>
                      <th className="px-4 sm:px-6 py-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {LONG_DISTANCE_GUIDE_PRICES.map((row) => (
                      <tr
                        key={row.route}
                        className="border-b border-gray-100 last:border-0 hover:bg-[#06A0A6]/5"
                      >
                        <td className="px-4 sm:px-6 py-4 font-medium text-[#0F0D3E]">
                          <span className="inline-flex items-center gap-2">
                            <Route className="h-5 w-5 text-[#06A0A6] shrink-0" aria-hidden />
                            {row.route}
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-[#06A0A6] font-semibold">{row.saloon}</td>
                        <td className="px-4 sm:px-6 py-4 text-[#06A0A6] font-semibold">{row.mpv}</td>
                        <td className="px-4 sm:px-6 py-4 text-[#2E3C44] text-sm sm:text-base">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-center text-sm text-[#2E3C44]">
                Times are typical in normal traffic; night or peak travel may vary. For Birmingham, Leeds, Bristol, and
                other routes, call {contactInfo.phone} or{" "}
                <a
                  href={contactInfo.booking.online}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#06A0A6] font-semibold underline hover:text-[#0F0D3E]"
                >
                  book online
                </a>{" "}
                for a fixed quote.
              </p>
            </div>
          </div>
        </section>

        {/* How to Book */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                How to Book Your Long-Distance Taxi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Get a Quote</h3>
                <p className="text-[#2E3C44] text-center">
                  Call {contactInfo.phone} or book online. Provide your pickup and destination 
                  details for a fixed-price quote.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Confirm Booking</h3>
                <p className="text-[#2E3C44] text-center">
                  Confirm your booking and receive confirmation details via SMS or WhatsApp. 
                  Pre-bookings welcome.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">Enjoy Your Journey</h3>
                <p className="text-[#2E3C44] text-center">
                  Your driver arrives on time in a comfortable vehicle. Relax and enjoy 
                  your long-distance journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
                Other Services You Might Need
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/airport-transfers-leicester" className="bg-[#E4E4E4] p-6 rounded-xl shadow-lg hover:shadow-xl transition-[transform,opacity]">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Airport Transfers</h3>
                <p className="text-[#2E3C44]">Reliable airport transfers to all major UK airports</p>
              </Link>
              <Link href="/local-taxi-leicester" className="bg-[#E4E4E4] p-6 rounded-xl shadow-lg hover:shadow-xl transition-[transform,opacity]">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Local Taxi Service</h3>
                <p className="text-[#2E3C44]">Quick and affordable local rides around Leicester</p>
              </Link>
              <Link href="/corporate-taxi-account-leicester" className="bg-[#E4E4E4] p-6 rounded-xl shadow-lg hover:shadow-xl transition-[transform,opacity]">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-6 w-6 text-[#06A0A6]" aria-hidden />
                  <h3 className="text-xl font-bold text-[#0F0D3E]">Corporate taxi accounts</h3>
                </div>
                <p className="text-[#2E3C44]">Business travel and staff transport with monthly invoicing in Leicester</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Book Your Long-Distance Taxi Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Comfortable, professional long-distance and corporate taxi service in Leicester. 
              Book online or call us now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] flex items-center justify-center gap-3">
                  Book Long-Distance Taxi
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-[transform,opacity] duration-200 flex items-center justify-center gap-3">
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

