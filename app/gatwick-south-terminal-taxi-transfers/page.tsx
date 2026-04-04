import { ArrowRight, Briefcase, Calendar, Clock, MapPin, Phone, Plane, Shield, Users } from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gatwick South Terminal Taxi Transfers | Reliable Gatwick South Taxi",
  description:
    "Book a trusted Gatwick South taxi with fixed fares, flight monitoring, meet & greet, and punctual drivers. 24/7 taxi to Gatwick South terminal across London and surrounding areas.",
  keywords:
    "Gatwick South taxi, taxi to Gatwick South terminal, Gatwick airport transfer, Gatwick South terminal transfer, Gatwick pickup service",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/gatwick-south-terminal-taxi-transfers",
  },
  openGraph: {
    title: "Gatwick South Terminal Taxi Transfers | Reliable Gatwick South Taxi",
    description:
      "Professional taxi to Gatwick South terminal with fixed pricing, flight monitoring and meet & greet support for departures and arrivals.",
    url: "https://aylestone-taxis.co.uk/gatwick-south-terminal-taxi-transfers",
  },
}

export default function GatwickSouthTerminalTaxiTransfersPage() {
  const faqs = [
    {
      q: "How early should I book a taxi to Gatwick South terminal?",
      a: "Booking in advance is recommended, especially at weekends and during holiday periods. Same-day bookings may be available depending on driver schedules.",
    },
    {
      q: "Do you include flight monitoring for Gatwick South pickups?",
      a: "Yes. We monitor your flight in real time and adjust pickup times for early landings or delays to keep your transfer smooth.",
    },
    {
      q: "Is meet & greet available at Gatwick South Terminal?",
      a: "Yes. Meet & greet can be added at booking. Your driver meets you in arrivals with a name board and helps with luggage.",
    },
    {
      q: "Are prices fixed for Gatwick South taxi transfers?",
      a: "Yes, your fare is fixed before the journey begins, so there are no hidden charges or unexpected price increases.",
    },
    {
      q: "Can I book an MPV for extra luggage or group travel?",
      a: "Absolutely. We offer multiple vehicle sizes, including MPVs, for families, groups and passengers with additional baggage.",
    },
    {
      q: "Do you provide Gatwick airport transfer service 24/7?",
      a: "Yes. Our Gatwick transfer service operates 24 hours a day, seven days a week, including late-night and early-morning travel.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Gatwick South Terminal Taxi Transfers
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Gatwick South Terminal Taxi Transfers
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Need a dependable <strong>Gatwick South taxi</strong> for a stress-free journey? We provide
                professional, pre-booked transfers with fixed fares, punctual drivers and practical support for
                departures and arrivals at Gatwick South Terminal.
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
                    Book Gatwick South Taxi
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
                Gatwick South Terminal handles a high number of UK and international passengers every day, making
                dependable road transport a vital part of successful travel plans. Whether you are leaving for a
                business trip, a family holiday or returning home after a long flight, timing and comfort matter.
              </p>
              <p>
                Our private transfer service is built for passengers who want predictable travel and professional
                support. If you need a <strong>taxi to Gatwick South terminal</strong>, we arrange direct, pre-booked
                journeys from your chosen pickup point with route planning designed around traffic and departure times.
              </p>
              <p>
                We regularly support corporate clients, tourists, students, families with children, and elderly
                passengers who need extra assistance. With fixed fares and clear communication, your transfer stays
                straightforward from booking confirmation to final drop-off.
              </p>
              <p>
                For arrivals, we provide a dependable <strong>Gatwick airport transfer</strong> service that includes
                flight monitoring and optional meet &amp; greet to make onward travel easier after landing.
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
                  <h3 className="text-2xl font-bold text-[#0F0D3E]">Departures to South Terminal</h3>
                </div>
                <p className="text-[#2E3C44] text-lg leading-relaxed mb-4">
                  We collect you from home, office, hotel or another address and take you directly to Gatwick South
                  Terminal. Pickup times are planned based on your flight and realistic journey conditions so you can
                  arrive with enough time for check-in and security.
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2E3C44] text-lg">
                  <li>Fixed fare agreed in advance</li>
                  <li>Reliable, punctual pickup service</li>
                  <li>Route planning to avoid common delays</li>
                  <li>Private transfer with luggage support</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                  <h3 className="text-2xl font-bold text-[#0F0D3E]">Arrivals from South Terminal</h3>
                </div>
                <p className="text-[#2E3C44] text-lg leading-relaxed mb-4">
                  For airport pickups, we include <strong>flight monitoring</strong> to keep collection times aligned
                  with actual landing updates. This reduces waiting issues and helps maintain a smooth handover at the
                  terminal.
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2E3C44] text-lg">
                  <li>Live flight tracking for accurate timing</li>
                  <li>Optional meet &amp; greet in arrivals</li>
                  <li>Driver help with luggage to vehicle</li>
                  <li>Direct onward transfer to your destination</li>
                </ul>
              </div>
            </div>
            <div className="max-w-5xl mx-auto mt-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0F0D3E] mb-4">Vehicle Options for Different Needs</h3>
              <p className="text-[#2E3C44] text-lg leading-relaxed mb-3">
                We provide saloons for individual and couple travel, plus larger vehicles for groups and families. If
                you have special luggage requirements, child seats, or business equipment, we can allocate a suitable
                vehicle during booking.
              </p>
              <p className="text-[#2E3C44] text-lg leading-relaxed">
                This flexibility helps ensure your transfer is both comfortable and practical, particularly for longer
                journeys to or from Gatwick South Terminal.
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
                  We focus on reliable pickup and drop-off timing so you can travel to and from the airport without
                  unnecessary pressure.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Flight Monitoring</h3>
                <p className="text-[#2E3C44]">
                  Arrivals are monitored live, allowing us to adapt to delays or early landings and keep your transfer
                  aligned with actual flight movement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Meet &amp; Greet Option</h3>
                <p className="text-[#2E3C44]">
                  Meet &amp; greet offers a simple airport handover, ideal for guests, corporate visitors and
                  passengers unfamiliar with terminal pickup points.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Licensed and Professional Service</h3>
                <p className="text-[#2E3C44]">
                  Experienced drivers and maintained vehicles help deliver a consistent standard of comfort and safety.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Business Travel Ready</h3>
                <p className="text-[#2E3C44]">
                  Suitable for meetings, executive travel and client collections where timing and presentation matter.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Family and Group Friendly</h3>
                <p className="text-[#2E3C44]">
                  Multiple vehicle options and luggage support make this service practical for family and group travel.
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
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Step 1: Share Journey Details</h3>
                <p className="text-[#2E3C44]">
                  Send pickup address, date, time, passenger count and luggage details. Add flight number for airport
                  pickups.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Step 2: Confirm Your Fixed Fare</h3>
                <p className="text-[#2E3C44]">
                  We provide a clear fixed quote before confirmation so your transfer cost is transparent.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Step 3: Booking Confirmation</h3>
                <p className="text-[#2E3C44]">
                  Your journey is scheduled by dispatch, with practical timing and route planning prepared in advance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Step 4: Travel Smoothly</h3>
                <p className="text-[#2E3C44]">
                  Your driver arrives on time, helps with luggage, and completes your transfer to or from Gatwick
                  South Terminal.
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
                Airport journeys require more than just transport. They require proper planning, timely updates and
                dependable execution. Our approach combines these essentials to deliver a transfer service that reduces
                stress and supports your wider travel schedule.
              </p>
              <p>
                Clients choose us because we keep the process clear and professional: fixed fares, punctual drivers,
                flight monitoring and optional meet &amp; greet for arrivals. From first booking to final destination,
                we focus on making airport travel straightforward.
              </p>
              <p>
                If you need a reliable <strong>Gatwick South taxi</strong>, we are ready to provide a service built on
                consistency, communication and customer care.
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
              Book Your Gatwick South Taxi Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Need a trusted <strong>taxi to Gatwick South terminal</strong>? Reserve now for fixed fares, punctual
              pickups, flight monitoring and optional meet &amp; greet support.
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
