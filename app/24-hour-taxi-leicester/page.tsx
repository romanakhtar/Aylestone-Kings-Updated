import {
  Check,
  ArrowRight,
  MapPin,
  Clock,
  Shield,
  Star,
  Phone,
  Moon,
  Sun,
  Calendar,
} from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "24 Hour Taxi Leicester | All Night Taxi Service | 24/7 | Aylestone Kings",
  description:
    "Need a 24 hour taxi in Leicester? Aylestone Kings provides round-the-clock taxi service. Day or night, 365 days a year. Book your 24 hour taxi Leicester now - call 0116 2338888.",
  keywords:
    "24 hour taxi Leicester, 24 hour taxi in Leicester, all night taxi Leicester, 24/7 taxi Leicester, late night taxi Leicester, taxi Leicester 24 hours, overnight taxi Leicester",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/24-hour-taxi-leicester",
  },
  openGraph: {
    title:
      "24 Hour Taxi Leicester | All Night Taxi Service | 24/7 | Aylestone Kings",
    description:
      "24 hour taxi Leicester - Round-the-clock taxi service. Day or night, bank holidays included. Book now or call 0116 2338888.",
    url: "https://aylestone-taxis.co.uk/24-hour-taxi-leicester",
  },
}

const faqSchemaTwentyFourHour = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are your taxis really available 24 hours a day in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",              
        text:
          "Yes. Aylestone Kings operates a genuine 24 hour taxi service in Leicester, 365 days a year including nights, weekends and bank holidays.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a 24 hour taxi in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "You can book a 24 hour taxi in Leicester by calling 0116 233 8888 or using our online booking system to pre-book day or night journeys.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge extra for late night or early morning taxis?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Our 24 hour taxi Leicester service uses fair, transparent pricing with no surge charges for late night or early morning journeys.",
      },
    },
  ],
}

export default function TwentyFourHourTaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                24 Hour Taxi Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                24 Hour Taxi Leicester – Always Here When You Need Us
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Searching for a <strong>24 hour taxi Leicester</strong>? Aylestone
                Kings provides round-the-clock taxi service every day of the
                year. Whether it&apos;s 2am or 2pm, a <strong>24 hour taxi in
                Leicester</strong> is just a call away – no surge pricing, no
                waiting. Reliable <strong>24 hour taxi Leicester</strong> service
                you can trust.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={contactInfo.booking.online}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Clock className="h-6 w-6" />
                    Book 24 Hour Taxi
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

        {/* Why Choose Our 24 Hour Taxi Service */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Choose Our 24 Hour Taxi Leicester Service?
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                A true <strong>24 hour taxi Leicester</strong> – we never close
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Never Closed – 365 Days
                </h3>
                <p className="text-[#2E3C44]">
                  Our <strong>24 hour taxi Leicester</strong> service operates
                  every minute of every day. Christmas, New Year, bank holidays –
                  we&apos;re always available. Need a taxi at 4am? No problem.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Moon className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Late Night & Early Morning
                </h3>
                <p className="text-[#2E3C44]">
                  Shift workers, clubbers, early flights – our{" "}
                  <strong>24 hour taxi in Leicester</strong> serves you when
                  others don&apos;t. Safe rides home at 1am or to the airport at
                  5am.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Same Quality, Day or Night
                </h3>
                <p className="text-[#2E3C44]">
                  Our <strong>24 hour taxi Leicester</strong> doesn&apos;t cut
                  corners. Licensed drivers, DBS-checked, professional service at
                  any hour. No premium pricing at night – fair rates around the
                  clock.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  All Leicester & Leicestershire
                </h3>
                <p className="text-[#2E3C44]">
                  Our <strong>24 hour taxi Leicester</strong> covers the whole
                  city and county. Aylestone, Oadby, Wigston, city centre,
                  suburbs – we dispatch 24/7 to every area.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Pre-Book or Call Now
                </h3>
                <p className="text-[#2E3C44]">
                  Book your <strong>24 hour taxi Leicester</strong> in advance for
                  early pickups, or call when you need one. Same reliable service
                  whether you plan ahead or need a taxi right now.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  30+ Years of 24/7 Service
                </h3>
                <p className="text-[#2E3C44]">
                  We&apos;ve been providing a <strong>24 hour taxi Leicester</strong>{" "}
                  since 1995. Thousands of customers trust us for late-night
                  rides, early airport runs, and emergency transport.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  School Run Taxi Leicester
                </h3>
                <p className="text-[#2E3C44]">
                  Need an early-morning or afternoon{" "}
                  <strong>school run taxi Leicester</strong>? We offer enhanced
                  DBS-checked drivers with the option for a consistent same
                  driver for regular school runs in areas like Aylestone,
                  Wigston, Knighton and Clarendon Park.{" "}
                  <Link
                    href="/school-run-taxi-leicester"
                    className="text-[#06A0A6] hover:underline font-medium"
                  >
                    Learn more about our school run taxis
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When You Need a 24 Hour Taxi */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                When You Need a 24 Hour Taxi Leicester
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Our <strong>24 hour taxi in Leicester</strong> is ready for every
                situation
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Sun className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      Early Morning Airport Transfers
                    </h3>
                    <p className="text-[#2E3C44]">
                      Flight at 6am? Our <strong>24 hour taxi Leicester</strong>{" "}
                      will get you there. Pre-book for 4am or 5am pickups – East
                      Midlands, Birmingham, Heathrow, Gatwick and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Moon className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      Late Night Safe Rides Home
                    </h3>
                    <p className="text-[#2E3C44]">
                      A night out in Leicester? Our <strong>24 hour taxi in
                      Leicester</strong> ensures you get home safely. No waiting
                      for buses – a taxi is available whatever time you finish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      Shift Workers & Night Staff
                    </h3>
                    <p className="text-[#2E3C44]">
                      Starting at 5am or finishing at midnight? Our{" "}
                      <strong>24 hour taxi Leicester</strong> serves shift
                      workers, hospital staff, and anyone who travels outside
                      normal hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      Bank Holidays & Special Days
                    </h3>
                    <p className="text-[#2E3C44]">
                      Christmas, New Year, Easter – we never close. A real{" "}
                      <strong>24 hour taxi Leicester</strong> is there when
                      public transport isn&apos;t. Fair pricing, no holiday
                      surcharges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose 24 Hour Taxi Leicester */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Book Your 24 Hour Taxi Leicester
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#E4E4E4] p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">
                      No Premium Night Charges
                    </h3>
                    <p className="text-[#2E3C44]">
                      Our <strong>24 hour taxi Leicester</strong> offers fair
                      rates at night – no surge pricing, no late-night premiums.
                      What you&apos;re quoted is what you pay.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E4E4E4] p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">
                      Licensed & Insured
                    </h3>
                    <p className="text-[#2E3C44]">
                      Every <strong>24 hour taxi in Leicester</strong> from
                      Aylestone Kings is fully licensed by Leicester City
                      Council. DBS-checked drivers, insured vehicles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E4E4E4] p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">
                      Fast Dispatch
                    </h3>
                    <p className="text-[#2E3C44]">
                      Need a <strong>24 hour taxi Leicester</strong> now? We
                      dispatch quickly across Leicester. Pre-book for early
                      pickups or call when you need one – we&apos;re ready.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E4E4E4] p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">
                      Cheap 24 Hour Taxi Leicester
                    </h3>
                    <p className="text-[#2E3C44]">
                      Our <strong>24 hour taxi Leicester</strong> is affordable
                      – competitive prices around the clock. See our{" "}
                      <Link
                        href="/cheap-taxi-leicester"
                        className="text-[#06A0A6] hover:underline font-medium"
                      >
                        cheap taxi Leicester
                      </Link>{" "}
                      page for pricing.
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
              Book Your 24 Hour Taxi Leicester Now
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Day or night, we&apos;re here. Reliable{" "}
              <strong>24 hour taxi Leicester</strong> – call {contactInfo.phone}{" "}
              or book online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Book 24 Hour Taxi
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaTwentyFourHour) }}
      />
    </div>
  )
}
