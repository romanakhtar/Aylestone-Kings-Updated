import { ArrowRight, Calendar, Clock, MapPin, Phone, Plane, Shield, Star, Users } from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heathrow Terminal 5 Taxi Transfers | Reliable Taxi to Heathrow T5",
  description:
    "Book dependable Heathrow Terminal 5 taxi transfers with punctual drivers, flight tracking, and meet & greet service. 24/7 private taxi to Heathrow T5 across London and beyond.",
  keywords:
    "Heathrow Terminal 5 taxi, taxi to Heathrow T5, Heathrow airport transfer T5, Heathrow T5 transfer, Heathrow Terminal 5 airport taxi",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/heathrow-terminal-5-taxi-transfers",
  },
  openGraph: {
    title: "Heathrow Terminal 5 Taxi Transfers | Reliable Taxi to Heathrow T5",
    description:
      "Professional Heathrow Terminal 5 taxi service with flight tracking, punctual drivers and meet & greet support for arrivals and departures.",
    url: "https://aylestone-taxis.co.uk/heathrow-terminal-5-taxi-transfers",
  },
}

export default function HeathrowTerminal5TaxiTransfersPage() {
  const faqs = [
    {
      q: "How early should I book a taxi to Heathrow T5?",
      a: "We recommend booking as early as possible, especially at weekends and during holiday periods. However, same-day bookings are often available depending on driver availability.",
    },
    {
      q: "Do you track flights for Heathrow Terminal 5 pickups?",
      a: "Yes. We monitor your flight status in real time and adjust your pickup automatically for delays or early arrivals, helping avoid unnecessary waiting.",
    },
    {
      q: "Is meet & greet available at Terminal 5?",
      a: "Yes. Our meet & greet service can be requested during booking. Your driver will wait in arrivals with a name board and assist with your luggage.",
    },
    {
      q: "Are your Heathrow Terminal 5 prices fixed?",
      a: "Yes, all pre-booked fares are fixed and transparent, with no hidden extras. You receive your confirmed price before the journey.",
    },
    {
      q: "Can I book for group or family travel?",
      a: "Absolutely. We provide standard cars, estate vehicles, MPVs and larger options for passengers travelling with children, extra bags or multiple travellers.",
    },
    {
      q: "Do you operate 24/7 for Heathrow airport transfer T5?",
      a: "Yes. Our Heathrow Terminal 5 taxi service runs 24 hours a day, seven days a week, including early morning and late-night transfers.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Heathrow Terminal 5 Taxi Transfers
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Heathrow Terminal 5 Taxi Transfers
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Looking for a professional <strong>Heathrow Terminal 5 taxi</strong> service? We provide
                reliable, pre-booked transfers with fixed pricing, punctual drivers, and 24/7 coverage for
                passengers travelling to or from Heathrow Terminal 5.
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
                    Book Heathrow T5 Taxi
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
                Heathrow Terminal 5 is one of the UK&apos;s busiest terminals and a major hub for domestic and
                international travel. Reliable ground transport is essential when check-in windows are tight and road
                conditions can change quickly. If you need a dependable <strong>taxi to Heathrow T5</strong>, our
                pre-booked service provides a professional, door-to-door solution built around punctuality and comfort.
              </p>
              <p>
                We support business travellers, families with children, international visitors, students, and elderly
                passengers who may need additional assistance. Every booking is planned around your travel schedule,
                with route management informed by live traffic updates and Heathrow access guidance.
              </p>
              <p>
                For arrivals, our team offers reliable <strong>Heathrow airport transfer T5</strong> pickups with
                flight tracking and optional meet &amp; greet. For departures, we ensure on-time collection and direct
                drop-off at Terminal 5 so you can reach check-in calmly and without last-minute pressure.
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
                  <h3 className="text-2xl font-bold text-[#0F0D3E]">Taxi to Heathrow T5 Departures</h3>
                </div>
                <p className="text-[#2E3C44] text-lg leading-relaxed mb-4">
                  Your driver collects you from home, office, hotel, or any requested address and takes you directly
                  to Terminal 5. Pickup times are planned according to your flight, route conditions, and expected
                  airport processing times.
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2E3C44] text-lg">
                  <li>Fixed fare confirmed before travel</li>
                  <li>Punctual collection with smart route planning</li>
                  <li>Professional drivers experienced with Heathrow traffic flow</li>
                  <li>Comfortable, private vehicles with luggage space</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                  <h3 className="text-2xl font-bold text-[#0F0D3E]">Heathrow T5 Arrivals Pickup</h3>
                </div>
                <p className="text-[#2E3C44] text-lg leading-relaxed mb-4">
                  Our arrivals service is built for smooth terminal collection. With live flight tracking included, we
                  adjust pickup timing automatically if your flight lands early or is delayed.
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2E3C44] text-lg">
                  <li>Real-time flight tracking for accurate collection</li>
                  <li>Meet &amp; greet option in arrivals</li>
                  <li>Luggage assistance to the vehicle</li>
                  <li>Direct onward travel across London and beyond</li>
                </ul>
              </div>
            </div>
            <div className="max-w-5xl mx-auto mt-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0F0D3E] mb-4">Vehicle Choices for Every Journey</h3>
              <p className="text-[#2E3C44] text-lg leading-relaxed">
                Choose from saloons, estates, MPVs, and larger options depending on passenger numbers and luggage
                requirements. If you need child seats, executive travel, or extra boot space, we can arrange the most
                suitable vehicle during booking for a seamless Terminal 5 transfer.
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
                  Airport journeys are time-critical. Our drivers are selected for punctuality, professionalism, and
                  route knowledge to keep your schedule on track.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Flight Tracking Included</h3>
                <p className="text-[#2E3C44]">
                  Your transfer is linked to your flight details and monitored in real time, allowing automatic
                  updates to pickup timing where needed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Meet &amp; Greet Option</h3>
                <p className="text-[#2E3C44]">
                  For added convenience, your driver can meet you in arrivals with a name board and help with luggage
                  from terminal to vehicle.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Safe and Licensed Service</h3>
                <p className="text-[#2E3C44]">
                  We use licensed, experienced drivers and maintained vehicles to deliver a secure and professional
                  transfer for every booking.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Fixed Transparent Fares</h3>
                <p className="text-[#2E3C44]">
                  No hidden extras and no unexpected changes. Your Heathrow Terminal 5 taxi fare is confirmed in
                  advance for clear budgeting.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Suitable for All Travellers</h3>
                <p className="text-[#2E3C44]">
                  Corporate passengers, families, students and guests all benefit from flexible vehicle options and
                  attentive service tailored to each journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-8 text-center">Coverage Areas</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6 text-[#2E3C44] text-lg leading-relaxed">
              <p>
                Our Heathrow Terminal 5 transfer network covers all London zones and key towns across the South East
                and Midlands. Whether your journey begins in central London, a suburban postcode, or a longer-distance
                location, we can arrange a pre-booked transfer to match your timetable.
              </p>
              <h3 className="text-2xl font-bold text-[#0F0D3E]">Common pickup and drop-off locations include:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Central London: Westminster, Mayfair, Kensington, Soho</li>
                <li>West London: Hounslow, Ealing, Southall, Richmond</li>
                <li>North London: Camden, Islington, Barnet, Finchley</li>
                <li>South London: Wimbledon, Croydon, Clapham, Sutton</li>
                <li>East London: Stratford, Canary Wharf, Ilford, Barking</li>
                <li>Outside London: Slough, Reading, Windsor, Watford, St Albans, Luton, Milton Keynes</li>
              </ul>
              <p>
                If your location is outside these areas, contact us for a tailored quote. We regularly handle long-
                distance bookings for leisure and corporate travellers needing a dependable
                <strong> Heathrow airport transfer T5</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-12 text-center">Booking Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-[#E4E4E4] p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Step 1: Share Journey Details</h3>
                <p className="text-[#2E3C44]">
                  Provide pickup address, date, time, passenger numbers and luggage details. For arrivals, include
                  your flight number so tracking can begin immediately.
                </p>
              </div>
              <div className="bg-[#E4E4E4] p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Step 2: Receive Fixed Fare</h3>
                <p className="text-[#2E3C44]">
                  We provide a clear, fixed quote before confirmation so you can book confidently and plan costs.
                </p>
              </div>
              <div className="bg-[#E4E4E4] p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Step 3: Confirm Booking</h3>
                <p className="text-[#2E3C44]">
                  Confirm online or by phone and receive your journey details. We schedule dispatch in advance for
                  reliable and punctual collection.
                </p>
              </div>
              <div className="bg-[#E4E4E4] p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Step 4: Travel Stress-Free</h3>
                <p className="text-[#2E3C44]">
                  Your driver arrives on time, assists with luggage, and takes you directly to or from Terminal 5 with
                  professional support throughout.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-8 text-center">Why Choose Us</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-5 text-[#2E3C44] text-lg leading-relaxed">
              <p>
                Airport transfers are time-sensitive and require planning, communication, and consistency. Our team
                combines experienced dispatch, punctual drivers, and responsive support to deliver a smooth Heathrow
                Terminal 5 transfer from booking to drop-off.
              </p>
              <p>
                Customers choose us because we focus on what matters most: punctual drivers, transparent fares,
                reliable flight tracking, and consistent service standards. For arrivals, optional meet &amp; greet
                adds reassurance for business guests, families and first-time visitors.
              </p>
              <p>
                If you need a trusted <strong>Heathrow Terminal 5 taxi</strong>, we are ready to provide a
                professional, dependable service every step of the way.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="border rounded-lg p-4">
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
              Book Your Heathrow Terminal 5 Taxi Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Need a reliable <strong>taxi to Heathrow T5</strong>? Reserve now for fixed fares, punctual drivers,
              live flight tracking and optional meet &amp; greet service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Get Instant Quote &amp; Book
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
