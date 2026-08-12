import {
  Calendar,
  Check,
  Clock,
  MapPin,
  Phone,
  PoundSterling,
  Shield,
  Sparkles,
  Users,
} from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"
import FAQSchema from "@/components/seo/FAQSchema"

const CANONICAL = "https://aylestone-taxis.co.uk/prom-taxi-leicester"
const PROM_PHONE = "0116 233 8888"

export const metadata: Metadata = {
  title: "Prom Taxi Leicester | Fixed Prices, DBS Drivers",
  description:
    "Fixed-price prom taxis in Leicester — group bookings, photo-stop flexibility, DBS-checked drivers. From £15. Book early, call 0116 233 8888.",
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "Prom Taxi Leicester | Fixed Prices, DBS Drivers",
    description:
      "Fixed-price prom taxis in Leicester — group bookings, photo-stop flexibility, DBS-checked drivers. From £15. Book early, call 0116 233 8888.",
    url: CANONICAL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Prom Taxi Leicester | Fixed Prices, DBS Drivers",
    description:
      "Fixed-price prom taxis in Leicester — group bookings, photo-stop flexibility, DBS-checked drivers. From £15. Book early, call 0116 233 8888.",
  },
}

const faqs = [
  {
    question: "Can we book a taxi for a group of friends going to prom?",
    answer:
      "Yes. We take group bookings for prom parties sharing one vehicle — ideal when several friends want to travel together. You pay a fixed price per car, not per person, and we can accommodate up to eight passengers in our larger MPVs. Book early in prom season so we can reserve the right vehicle for your group.",
  },
  {
    question: "Do you offer fixed prices for prom night in Leicester?",
    answer:
      "Yes. Every prom taxi Leicester booking is quoted at a fixed price before you travel, so parents and students know the full fare in advance. There are no meter surprises, surge charges, or hidden extras on the night. Your quote is confirmed when you book by phone or online.",
  },
  {
    question: "Can the driver wait while we have photos taken?",
    answer:
      "Yes. Our drivers are happy to wait at your home, hotel, or venue while you take prom photos. Let us know when you book and we will build a sensible waiting time into your journey plan, so you are not rushed before arriving at De Montfort Hall, Athena Leicester, or your chosen venue.",
  },
]

export default function PromTaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Prom Taxi Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Prom Taxi Leicester
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Make prom night memorable with a <strong>prom taxi Leicester</strong> from
                Aylestone Taxis. We offer <strong>decorated and smart vehicle options</strong> on
                request, <strong>group bookings</strong> for friends sharing one car at a{" "}
                <strong>fixed price per vehicle — not per person</strong>, and{" "}
                <strong>fixed pricing</strong> so parents can budget in advance with no surprise
                charges. Our drivers are happy to <strong>wait while you have photos taken</strong>{" "}
                at home or outside your venue before the evening begins.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={contactInfo.booking.online}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-[transform,opacity] duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Calendar className="h-6 w-6" />
                    Book Online
                  </button>
                </a>
                <a
                  href={`tel:${PROM_PHONE.replace(/\s/g, "")}`}
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-[transform,opacity] duration-200 text-lg flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6" />
                    Call {PROM_PHONE}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Options & Group Bookings */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Smart Vehicles &amp; Group Prom Bookings
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Arrive in style with a <strong>prom taxi Leicester</strong> service built around
                how students and parents actually plan prom night.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Decorated &amp; Smart Vehicles
                </h3>
                <p className="text-[#2E3C44]">
                  <strong>Decorated and smart vehicle options</strong> are available on request.
                  Tell us your preferences when you book and we will match you with a clean,
                  well-presented saloon or MPV suited to prom night — polished, comfortable, and
                  ready for photographs before you step inside.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Group Bookings — One Car, One Price
                </h3>
                <p className="text-[#2E3C44]">
                  Travelling with friends? Book a <strong>group prom taxi</strong> and share the
                  cost. We quote a <strong>fixed price per vehicle, not per person</strong>, so
                  everyone knows the fare upfront. MPVs accommodate up to{" "}
                  <strong>eight passengers</strong> — ideal for prom parties from the same school
                  or neighbourhood.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <PoundSterling className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Fixed Pricing for Parents
                </h3>
                <p className="text-[#2E3C44]">
                  Prom night should not come with fare anxiety. Our{" "}
                  <strong>fixed pricing</strong> means parents can <strong>budget in advance</strong>{" "}
                  with <strong>no surprise charges</strong> on the evening. The price you are quoted
                  when you book is the price you pay — whether you are picked up from the city
                  centre, Oadby, Wigston, or anywhere across Leicester.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Examples */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Prom Taxi Leicester — Example Journey Prices
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Indicative <strong>fixed fares</strong> for popular prom pickup areas. Your exact
                quote is confirmed at booking.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      Leicester City Centre — from £15
                    </h3>
                    <p className="text-[#2E3C44]">
                      Pickups from the <strong>city centre</strong> to popular prom venues start
                      from <strong>£15</strong>. Ideal for students staying in central Leicester
                      hotels or meeting friends before heading to De Montfort Hall or Athena
                      Leicester.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      Oadby or Wigston — from £20
                    </h3>
                    <p className="text-[#2E3C44]">
                      Prom taxis from <strong>Oadby</strong> or <strong>Wigston</strong> to Leicester
                      venues start from <strong>£20</strong>. A straightforward fixed fare for
                      families in south Leicester who want a reliable, pre-agreed price for the
                      evening.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      No Hidden Extras on Prom Night
                    </h3>
                    <p className="text-[#2E3C44]">
                      Unlike app-based services that can surge on busy evenings, our{" "}
                      <strong>prom taxi Leicester</strong> fares are agreed before you travel.
                      Waiting time for photos can be discussed and included when you book, so there
                      are no awkward surprises when the meter would otherwise keep running.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Pickup Timing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Pickup Timing for Leicester Prom Venues
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Prom season gets busy. Book early and allow extra time — our team can advise on
                realistic pickup windows for the most popular venues.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 text-[#2E3C44] text-lg leading-relaxed">
              <p>
                <strong>De Montfort Hall</strong> is one of Leicester&apos;s busiest prom venues.
                We recommend booking your <strong>prom taxi Leicester</strong> pickup at least
                45–60 minutes before your scheduled arrival, especially if you want time for photos
                at home first. Traffic around Victoria Park and London Road can build on prom
                evenings, so an earlier pickup keeps the night relaxed rather than rushed.
              </p>
              <p>
                <strong>Athena Leicester</strong> on Queen Street attracts large numbers of schools
                on the same dates. Allow a generous window for group pickups — if several friends
                are sharing one MPV, agree a single meeting point and pickup time in advance. Our
                drivers know the area and can suggest the smoothest route depending on where you
                are travelling from.
              </p>
              <p>
                Many families book prom transport from <strong>local hotels</strong> across
                Leicester — including properties near the city centre and in areas such as{" "}
                <Link href="/taxis-in/knighton" className="text-[#06A0A6] hover:underline font-medium">
                  Knighton
                </Link>
                , Oadby, and Clarendon Park. Hotel lobby pickups work well for group bookings: one
                vehicle, one fixed fare, and a driver who will wait while your party gathers for
                photographs before departing together.
              </p>
              <p>
                Wherever your prom is held, tell us your venue and desired arrival time when you
                book. We will work backwards to suggest a pickup time that accounts for photos,
                traffic, and any last-minute outfit checks — so you arrive looking your best, not
                flustered.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                What&apos;s Included with Your Prom Taxi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Clock, label: "24/7 booking", detail: "Book by phone or online at any time — prom season slots fill fast, so reserve early." },
                { icon: PoundSterling, label: "Fixed prices", detail: "Agreed fare confirmed at booking. No surge pricing on prom night." },
                { icon: Shield, label: "DBS-checked drivers", detail: "Licensed, vetted drivers who understand the importance of the occasion." },
                { icon: Sparkles, label: "Smart vehicles", detail: "Clean, well-presented saloons and MPVs. Decorated options on request." },
                { icon: Users, label: "Group bookings up to 8", detail: "Share one vehicle with friends at a fixed price per car, not per passenger." },
                { icon: Check, label: "Photo waiting time", detail: "Drivers happy to wait at home, hotel, or venue while you take prom photos." },
              ].map(({ icon: Icon, label, detail }) => (
                <div key={label} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start gap-3">
                    <Icon className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">{label}</h3>
                      <p className="text-[#2E3C44]">{detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
              More Transport from Aylestone Taxis
            </h2>
            <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto mb-10">
              Planning travel beyond prom night? We also provide airport runs and local taxis across
              Leicester.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/airport-transfers-leicester"
                className="inline-flex items-center justify-center gap-2 bg-[#06A0A6]/10 text-[#0F0D3E] px-6 py-3 rounded-xl font-semibold hover:bg-[#06A0A6]/20 transition-colors"
              >
                Airport Transfers Leicester
              </Link>
              <Link
                href="/taxis-in/knighton"
                className="inline-flex items-center justify-center gap-2 bg-[#06A0A6]/10 text-[#0F0D3E] px-6 py-3 rounded-xl font-semibold hover:bg-[#06A0A6]/20 transition-colors"
              >
                Taxis in Knighton
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6 text-left">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">{faq.question}</h3>
                  <p className="text-[#2E3C44] text-lg">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Book Your Prom Taxi Leicester Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Smart vehicles, fixed prices, and patient drivers for prom night. Call{" "}
              <strong>{PROM_PHONE}</strong> or book online — prom season slots go quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] flex items-center justify-center gap-3">
                  Book Online
                  <Calendar className="h-5 w-5" />
                </button>
              </a>
              <a
                href={`tel:${PROM_PHONE.replace(/\s/g, "")}`}
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-[transform,opacity] duration-200 flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  Call {PROM_PHONE}
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
