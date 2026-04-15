import Image from "next/image"
import {
  Check,
  ArrowRight,
  MapPin,
  Clock,
  Shield,
  Star,
  Phone,
  Plane,
  Calendar,
} from "lucide-react"
import { contactInfo, footerData } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"
import FAQSchema from "@/components/seo/FAQSchema"

export const metadata: Metadata = {
  title:
    "Airport Transfers Leicester | Fixed Fares, 24/7 | Book Online | Aylestone Taxis",
  description:
    "Book fixed-fare airport transfers from Leicester with 24/7 service, flight monitoring, and licensed drivers. Fast online booking or call 0116 2338888.",
  keywords:
    "airport taxi Leicester, Leicester airport transfers, airport taxi service Leicester, East Midlands airport taxi, Heathrow taxi Leicester, Gatwick taxi Leicester",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/airport-transfers-leicester",
  },
  openGraph: {
    title:
      "Leicester Airport Taxi Service | Fixed Prices, 24/7 Service | Book Instantly | Aylestone Taxis",
    description:
      "Book a taxi from Leicester to the airport. Reliable 24/7 airport transfers with Aylestone Taxis.",
    url: "https://aylestone-taxis.co.uk/airport-transfers-leicester",
  },
}

const faqs = [
  {
    question: "How do I book a Leicester airport taxi?",
    answer:
      "You can book online through our website or call us directly on 0116 2338888. Provide your flight details and pickup location in Leicester, and we'll handle the rest.",
  },
  {
    question: "Do you monitor my flight?",
    answer:
      "Yes, we track your flight status in real time and adjust your pickup time automatically for early arrivals or delays.",
  },
  {
    question: "Are your drivers licensed and DBS-checked?",
    answer:
      "Absolutely. All our drivers are fully licensed, insured, and DBS-checked to ensure your safety and comfort.",
  },
  {
    question: "Can you help with luggage?",
    answer:
      "Yes, our drivers assist with loading and unloading your luggage, and our vehicles are spacious enough to accommodate all your travel needs.",
  },
  {
    question: "Do you offer fixed-price airport transfers?",
    answer:
      "Yes, all airport transfers from Leicester have fixed prices with no hidden charges, so you know exactly what you'll pay upfront.",
  },
  {
    question: "Can I pre-book my airport taxi?",
    answer:
      "Definitely. We recommend pre-booking to secure your Leicester airport taxi, especially during peak travel times. You'll have peace of mind knowing we'll arrive on time.",
  },
  {
    question: "Do you operate 24/7?",
    answer:
      "Yes, Aylestone Taxi operates 24 hours a day, 7 days a week, ensuring you can always get a reliable Leicester airport transfer whenever you need one.",
  },
]

export default function AirportTransfersLeicesterPage() {
  const areaLinks: { name: string; href: string }[] = (() => {
    const links: { name: string; href: string }[] = []
    const columns = (footerData as any).footerColumns ?? []
    for (const col of columns) {
      for (const l of col?.links ?? []) {
        if (typeof l?.href === "string" && l.href.startsWith("/taxis-in/")) {
          links.push({ name: String(l.name ?? l.href), href: l.href })
        }
      }
    }
    const seen = new Set<string>()
    return links.filter((l) => (seen.has(l.href) ? false : (seen.add(l.href), true)))
  })()

  return (
    <div className="min-h-screen bg-white">
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Airport Transfers Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Airport transfers from Leicester — fixed fares, 24/7.
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Book a Leicester airport taxi in seconds with fixed fares, flight monitoring and licensed, DBS‑checked drivers.
                We cover every major UK airport with reliable pickups across Leicester and Leicestershire.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={contactInfo.booking.online}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Plane className="h-6 w-6" />
                    Book Airport Transfer
                  </button>
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-all duration-200 text-lg flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6" />
                    Call {contactInfo.phone}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pickup Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">Airport pickups across Leicester & nearby areas</h2>
              <p className="text-lg text-[#2E3C44] max-w-3xl mx-auto">
                Wherever you are in Leicester, we’ll pick you up on time. Choose your area to see local pickup details and book
                your airport transfer.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {areaLinks.slice(0, 30).map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="px-3 py-2 rounded-full bg-[#E4E4E4] text-sm text-[#0F0D3E] hover:bg-[#06A0A6]/15 transition-colors"
                >
                  {String(a.name).replace(/^Taxis in\s+/i, "")}
                </Link>
              ))}
            </div>

            <div className="mt-6 text-center text-sm text-[#2E3C44]">
              <span className="font-medium">Tip:</span> if your area isn’t listed above, you can still book instantly — just enter your pickup address in the booking form.
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
              <p className="text-xl text-[#2E3C44] max-w-2xl mx-auto">
                Professional airport transfers with fixed prices, flight
                monitoring, and 24/7 availability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  All Major UK Airports Covered
                </h3>
                <p className="text-[#2E3C44]">
                  Airport journeys arranged through Aylestone Taxis with licensed drivers covering all major UK airports:
                  <li> East Midlands Airport</li>
                  <li> Birmingham Airport</li>
                  <li> Heathrow Airport</li>
                  <li> Gatwick Airport</li>
                  <li> Stansted Airport</li>
                  <li> Luton Airport</li>
                  <li> Manchester Airport</li>
                  Enjoy fixed prices for complete peace of mind when booking
                  your Leicester airport taxi.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Flight Monitoring for Stress-Free Pickups
                </h3>
                <p className="text-[#2E3C44]">
                  We monitor your flight in real time and automatically adjust
                  collection times for delays or early arrivals. Whether you're
                  travelling for business or leisure, your driver will be ready
                  when you land.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Fixed Prices – No Hidden Charges
                </h3>
                <p className="text-[#2E3C44]">
                  With Aylestone Taxi, there are no surge prices or unexpected
                  fees. You’ll know exactly what you’re paying before your
                  journey begins. Transparent pricing is guaranteed on all
                  Leicester airport transfers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Pre-Book Your Airport Taxi
                </h3>
                <p className="text-[#2E3C44]">
                  Advance bookings are welcome and recommended, especially
                  during peak travel times. Secure your Leicester airport
                  transfer early and travel with confidence knowing we’ll be
                  there on time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Licensed & Professional Drivers
                </h3>
                <p className="text-[#2E3C44]">
                  All our drivers are fully licensed, DBS-checked, and
                  experienced in long-distance and airport journeys. Your
                  safety, comfort and punctuality are always our top priorities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Luggage Assistance & Spacious Vehicles
                </h3>
                <p className="text-[#2E3C44]">
                  Travelling with suitcases or hand luggage? Our drivers assist
                  with loading and unloading, and our vehicles offer plenty of
                  space for a comfortable journey.
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
                How to Book Your Leicester Airport Taxi
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Booking your Leicester airport transfer with Aylestone Taxi is
                simple, fast and reliable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">
                  Book Online or Call Us
                </h3>
                <p className="text-[#2E3C44] text-center">
                  Book your airport taxi online in minutes or call{" "}
                  {contactInfo.phone} to speak directly with our team. Provide
                  your flight number, collection address in Leicester, and
                  travel time — we’ll take care of the rest.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">
                  We Monitor Your Flight in Real Time
                </h3>
                <p className="text-[#2E3C44] text-center">
                  We track your flight status to adjust your pickup time
                  automatically in case of delays or early arrivals. You’ll
                  receive confirmation via SMS or WhatsApp, so you always know
                  your driver details and arrival time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3 text-center">
                  On-Time, Professional Pickup
                </h3>
                <p className="text-[#2E3C44] text-center">
                  Your licensed driver will arrive promptly at your Leicester
                  pickup location or airport terminal. We assist with luggage
                  and ensure a smooth, comfortable journey to or from the
                  airport — stress-free from start to finish.
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
                Airports We Serve – Fixed-Price Airport Transfers from Leicester
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Book your Leicester airport transfer with Aylestone Taxi today
                and travel with confidence knowing we’ll be there on time.
              </p>
            </div>
            {/* Fixed-Price Airport Transfers from Leicester */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "East Midlands Airport Taxi from Leicester",
                  desc: "Fast and affordable airport transfers from Leicester to East Midlands Airport with fixed fares and 24/7 availability.",
                  href: "/pricing/airports/East-Midlands",
                },
                {
                  name: "Birmingham Airport Taxi from Leicester",
                  desc: "Reliable long-distance Leicester taxi service to Birmingham Airport with professional drivers and transparent pricing.",
                  href: "/taxi-to-birmingham-airport",
                },
                {
                  name: "Heathrow Airport Taxi from Leicester",
                  desc: "Comfortable and stress-free Leicester to Heathrow airport transfers with fixed prices and on-time pickups.",
                  href: "/pricing/airports/Heathrow",
                },
                {
                  name: "Gatwick Airport Taxi from Leicester",
                  desc: "Direct Leicester to Gatwick airport taxi service, ideal for business and leisure travellers.",
                  href: "/pricing/airports/Gatwick",
                },
                {
                  name: "Stansted Airport Taxi from Leicester",
                  desc: "Professional Leicester airport taxi service to Stansted Airport with experienced DBS-checked drivers.",
                  href: "/pricing/airports/Stansted",
                },
                {
                  name: "Luton Airport Taxi from Leicester",
                  desc: "Book a fixed-price Leicester to Luton airport transfer with reliable 24/7 service.",
                  href: "/pricing/airports/Luton",
                },
                {
                  name: "Manchester Airport Taxi from Leicester",
                  desc: "Long-distance Leicester taxi to Manchester Airport offering comfort, punctuality and competitive pricing.",
                  href: "/pricing/airports/Manchester",
                },
              ].map((airport, idx) => (
                <Link
                  key={idx}
                  href={airport.href}
                  className="bg-[#E4E4E4] p-6 rounded-xl hover:bg-[#06A0A6]/10 transition-colors"
                >
                  <Plane className="h-8 w-8 text-[#06A0A6] mb-3" />
                  <h3 className="text-[#0F0D3E] font-semibold text-lg">
                    {airport.name}
                  </h3>
                  <p className="text-[#2E3C44] text-sm mt-2">{airport.desc}</p>
                </Link>
              ))}
            </div>

            {/* Blog Guide */}
            <div className="mt-12 text-center">
              <Link
                href="/blog/leicester-to-east-midlands-airport-taxi-travel-guide-prices-booking-tips"
                className="inline-flex items-center gap-2 text-[#06A0A6] hover:text-[#0F0D3E] font-semibold text-lg transition-colors"
              >
                Leicester to East Midlands Airport Taxi – Travel Guide, Prices & Booking Tips
                <ArrowRight className="h-5 w-5" />
              </Link>
              <div className="mt-3">
                <Link
                  href="/leicester-to-east-midlands-airport-taxi"
                  className="inline-flex items-center gap-2 text-[#06A0A6] hover:text-[#0F0D3E] font-semibold transition-colors"
                >
                  Leicester → East Midlands Airport (EMA) taxi (fixed fares from £40)
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-[#2E3C44] text-sm mt-2 max-w-2xl mx-auto">
                Read our full guide to Leicester to EMA transfers, including prices, journey times and booking tips.
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
                Explore More Taxi Services in Leicester
              </h2>
              <p className="text-lg text-[#2E3C44] max-w-3xl mx-auto">
                In addition to our professional airport transfers, Aylestone
                Taxi offers reliable local and long-distance taxi services
                across Leicester and the UK.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/local-taxi-leicester"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                  Local Taxi Service in Leicester
                </h3>
                <p className="text-[#2E3C44]">
                  Fast, affordable and dependable local taxi journeys across
                  Leicester. Ideal for shopping trips, appointments, nights out
                  and daily travel.
                </p>
              </Link>

              <Link
                href="/long-distance-taxi-leicester"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                  Long-Distance & Corporate Taxi Service
                </h3>
                <p className="text-[#2E3C44]">
                  Comfortable long-distance taxi travel from Leicester to
                  destinations across the UK, including corporate accounts and
                  executive transport.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-8 text-center">
              Frequently Asked Questions – Leicester Airport Taxi
            </h2>

            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.question} className="border rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer text-lg">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-[#2E3C44]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Book Your Leicester Airport Taxi Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Need a reliable airport transfer from Leicester? Aylestone Taxi
              offers fixed prices, 24/7 availability, professional drivers and
              real-time flight monitoring. Secure your airport taxi now for a
              safe, comfortable and stress-free journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Book Leicester Airport Taxi
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>

              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="w-full sm:w-auto"
              >
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
