import { ArrowRight, Briefcase, Calendar, Clock, MapPin, Phone, Plane, Shield, Users } from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gatwick North Terminal Taxi Transfers | Reliable Gatwick North Taxi",
  description:
    "Book a trusted Gatwick North taxi with fixed fares, flight monitoring, meet & greet, and punctual drivers. 24/7 taxi to Gatwick North terminal across London and surrounding areas.",
  keywords:
    "Gatwick North taxi, taxi to Gatwick North terminal, Gatwick airport transfer, Gatwick North terminal transfer, Gatwick pickup service",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/gatwick-north-terminal-taxi-transfers",
  },
  openGraph: {
    title: "Gatwick North Terminal Taxi Transfers | Reliable Gatwick North Taxi",
    description:
      "Professional taxi to Gatwick North terminal with fixed pricing, flight monitoring and meet & greet support for departures and arrivals.",
    url: "https://aylestone-taxis.co.uk/gatwick-north-terminal-taxi-transfers",
  },
}

export default function GatwickNorthTerminalTaxiTransfersPage() {
  const faqs = [
    {
      q: "How far in advance should I book a Gatwick North taxi?",
      a: "Advance booking is recommended, especially during weekends, school holidays and bank holiday travel periods. We can often support same-day requests, subject to availability.",
    },
    {
      q: "Do you monitor flights for Gatwick North arrivals?",
      a: "Yes. Flight monitoring is included for airport pickups. If your flight lands early or is delayed, we adjust the collection time so your transfer stays aligned.",
    },
    {
      q: "Can I request meet & greet at Gatwick North Terminal?",
      a: "Yes. Meet & greet is available on request. Your driver meets you in arrivals with a name board and assists with luggage to the vehicle.",
    },
    {
      q: "Are fares fixed for taxi to Gatwick North terminal?",
      a: "Yes. Your fare is agreed before travel, with no hidden fees. This helps you budget with confidence and avoid unexpected price changes.",
    },
    {
      q: "Do you provide larger vehicles for families and groups?",
      a: "Absolutely. We offer saloons, estates and MPVs based on passenger numbers and luggage requirements. Let us know your needs during booking.",
    },
    {
      q: "Is your Gatwick airport transfer service available 24/7?",
      a: "Yes. Our transfer service runs day and night, including early-morning departures and late-night arrivals.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Gatwick North Terminal Taxi Transfers
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Gatwick North Terminal Taxi Transfers
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Need a trusted <strong>Gatwick North taxi</strong> for a smooth airport journey? We provide reliable,
                pre-booked transfers with fixed fares, professional drivers and practical support for both departures
                and arrivals at Gatwick North Terminal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={contactInfo.booking.online}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Calendar className="h-6 w-6" />
                    Book Gatwick North Taxi
                  </button>
                </a>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-all duration-200 text-lg flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6" />
                    Call {contactInfo.phone}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-8 text-center">Introduction</h2>
            <div className="space-y-6 text-[#2E3C44] text-lg leading-relaxed">
              <p>
                Gatwick North Terminal is one of the UK&apos;s busiest airport terminals, handling year-round traffic
                for both short-haul and long-haul routes. From early check-ins to late-night landings, airport
                transfers at Gatwick demand careful timing and clear communication. Our service is designed for
                travellers who value certainty, comfort and professional support from pickup to drop-off.
              </p>
              <p>
                If you are looking for a dependable <strong>taxi to Gatwick North terminal</strong>, we provide
                private transfers tailored to your schedule. Unlike public transport connections that can involve
                changes and delays, a pre-booked taxi gives you direct travel, flexible pickup times and luggage
                support throughout the journey.
              </p>
              <p>
                We work with business travellers, families, students, tourists and returning residents across London
                and surrounding areas. Every booking is managed with practical route planning and experienced drivers
                who understand the road network, airport procedures, and the importance of arriving on time.
              </p>
              <p>
                Whether you need an outbound journey or a return <strong>Gatwick airport transfer</strong> after
                landing, our team provides a reliable 24/7 service with fixed pricing, flight monitoring, and optional
                meet &amp; greet at the terminal.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-12 text-center">Service Details</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="h-6 w-6 text-[#06A0A6]" />
                  <h3 className="text-2xl font-bold text-[#0F0D3E]">Departures to Gatwick North Terminal</h3>
                </div>
                <p className="text-[#2E3C44] text-lg leading-relaxed mb-4">
                  We collect you from your home, office, hotel or temporary address and take you directly to the
                  North Terminal departures zone. Pickup timing is planned around your flight time, route conditions
                  and the time needed for check-in, security and baggage drop.
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2E3C44] text-lg">
                  <li>Fixed price confirmed before travel</li>
                  <li>Door-to-door direct transfer with no route confusion</li>
                  <li>Punctual drivers and route-aware dispatching</li>
                  <li>Comfortable vehicles suitable for airport luggage</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                  <h3 className="text-2xl font-bold text-[#0F0D3E]">Arrivals from Gatwick North</h3>
                </div>
                <p className="text-[#2E3C44] text-lg leading-relaxed mb-4">
                  For returning passengers and incoming guests, we provide scheduled airport collections with
                  <strong> flight monitoring</strong> included. If your flight arrives earlier or later than expected,
                  we adjust driver timing so your pickup remains coordinated and efficient.
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2E3C44] text-lg">
                  <li>Real-time flight monitoring for arrivals</li>
                  <li>Optional meet &amp; greet in arrivals hall</li>
                  <li>Driver support with bags and onward travel</li>
                  <li>Fast transfer from terminal to final destination</li>
                </ul>
              </div>
            </div>
            <div className="max-w-5xl mx-auto mt-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0F0D3E] mb-4">Vehicle Options and Journey Types</h3>
              <p className="text-[#2E3C44] text-lg leading-relaxed mb-3">
                Every traveller has different requirements. We provide a range of vehicle types, from standard saloon
                cars for solo and couple journeys to larger MPVs for family travel and group bookings.
              </p>
              <p className="text-[#2E3C44] text-lg leading-relaxed">
                If you are travelling with multiple suitcases, sports equipment, child seats or business luggage, let
                us know in advance and we will assign the most suitable vehicle for your transfer.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-12 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Punctual Drivers</h3>
                <p className="text-[#2E3C44]">
                  Our drivers are chosen for reliability and timekeeping, helping reduce stress on airport days where
                  schedules are tight.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Flight Monitoring Included</h3>
                <p className="text-[#2E3C44]">
                  Arrivals are monitored in real time so your collection is adjusted for delays and early landings
                  without extra hassle.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Meet &amp; Greet Available</h3>
                <p className="text-[#2E3C44]">
                  Meet &amp; greet is ideal for first-time visitors, families and business guests who need an easy
                  handover in arrivals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Safe and Professional Travel</h3>
                <p className="text-[#2E3C44]">
                  Licensed, experienced drivers and clean vehicles provide a dependable service standard on every
                  journey.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Business-Ready Transfers</h3>
                <p className="text-[#2E3C44]">
                  Ideal for corporate journeys, executive airport runs and client collections where punctuality and
                  presentation matter.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Family and Group Friendly</h3>
                <p className="text-[#2E3C44]">
                  We provide practical vehicle choices for families and groups travelling with extra luggage or special
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-12 text-center">Booking Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Step 1: Request Your Quote</h3>
                <p className="text-[#2E3C44]">
                  Share pickup address, date, time, number of passengers and luggage details. Add your flight number
                  for arrivals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Step 2: Confirm Fixed Fare</h3>
                <p className="text-[#2E3C44]">
                  We confirm your fixed fare before booking so you know exactly what you will pay.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Step 3: Receive Booking Details</h3>
                <p className="text-[#2E3C44]">
                  Once confirmed, your transfer details are prepared and scheduled by dispatch for timely pickup.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Step 4: Travel with Confidence</h3>
                <p className="text-[#2E3C44]">
                  Your driver arrives on time, assists with luggage and ensures a comfortable journey to or from
                  Gatwick North.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-8 text-center">Why Choose Us</h2>
            <div className="bg-[#E4E4E4] p-8 rounded-2xl space-y-5 text-[#2E3C44] text-lg leading-relaxed">
              <p>
                We understand that airport transfers are not routine local trips. They are time-sensitive journeys
                where reliability and communication are essential. Our service model is built around punctual dispatch,
                experienced drivers and clear, practical support from booking through to drop-off.
              </p>
              <p>
                Travellers choose us for consistency: fixed fares, dependable arrival times, monitored flights and an
                optional meet &amp; greet service that makes collections easier for visitors and guests. We focus on
                getting the basics right every time, so your transfer feels straightforward and stress-free.
              </p>
              <p>
                If you need a dependable <strong>Gatwick North taxi</strong>, our team is ready to provide a
                professional service that keeps your travel plans on track.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="border bg-white rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer text-lg">{faq.q}</summary>
                  <p className="mt-2 text-[#2E3C44] text-lg">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Book Your Gatwick North Taxi Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Need a reliable <strong>taxi to Gatwick North terminal</strong>? Reserve now for fixed fares,
              professional drivers, flight monitoring and optional meet &amp; greet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Get Fare &amp; Book Online
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="w-full sm:w-auto">
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
