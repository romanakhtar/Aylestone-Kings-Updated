import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Phone, MessageCircle, Plane, MapPin, Clock, Check } from "lucide-react"
import { contactInfo, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_DISPLAY, WHATSAPP_WA, LONDON_CITY_FARES } from "@/lib/data"
import FAQSchema from "@/components/seo/FAQSchema"
import AirportRelatedLinks from "@/components/AirportRelatedLinks"
import AirportPricingBreadcrumbs from "@/components/seo/AirportPricingBreadcrumbs"
import { buildCanonical } from "@/lib/seo/canonical"
import { finalizeMetadata } from "@/lib/seo/pageMetadata"

/*
 * London City Airport (LCY) — service and standard fares confirmed by the business owner (Nov 2026):
 *   see LONDON_CITY_FARES in lib/data.ts (also used by the /pricing table).
 * No other vehicle sizes, journey time, or what the fare includes (drop-off charge, parking, waiting)
 * has been confirmed — do NOT add any of those until the business supplies them.
 * Airport facts (address; forecourt drop-off charge since 6 Jan 2026) come from public sources.
 */
const PATH = "/pricing/airports/London-City"
const canonical = buildCanonical(PATH)

const [SMALL, LARGE] = LONDON_CITY_FARES // confirmed fares live in lib/data.ts (shared with /pricing)

export const metadata: Metadata = finalizeMetadata({
  title: "Leicester to London City Airport Taxi | Fixed Fares 24/7",
  description: `Leicester to London City Airport taxi: ${SMALL.price} for a 1–4 seater, ${LARGE.price} for a 6/8 seater. Fare confirmed when you book, flight monitoring. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical },
})

const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_WA}?text=${encodeURIComponent(
  "Hi, I'd like to book a taxi between Leicester and London City Airport."
)}`

const faqs = [
  {
    question: "How much is a taxi from Leicester to London City Airport?",
    answer: `Our standard fares are ${SMALL.price} for a 1–4 seater vehicle and ${LARGE.price} for a 6/8 seater vehicle. Your fare is confirmed when you book. Ask us whether the airport drop-off charge, parking or waiting time are included. Call ${PHONE_DISPLAY}, WhatsApp ${WHATSAPP_DISPLAY} or book online.`,
  },
  {
    question: "Can you collect me from London City Airport?",
    answer:
      "Yes. Give us your flight number when you book and we monitor your arrival, so a delayed flight does not leave you waiting. We confirm the exact meeting point with you before the day.",
  },
  {
    question: "Is the London City Airport drop-off charge included?",
    answer:
      "London City Airport charges vehicles for using its terminal drop-off area. Ask us when you book and we will tell you whether it is included in your fare.",
  },
  {
    question: "What time should I be picked up for my flight?",
    answer:
      "Tell us your flight time when you book. The journey crosses London, so we agree a pickup time with you that allows for traffic rather than quoting a best-case drive.",
  },
]

export default function LondonCityAirportPage() {
  return (
    <div className="min-h-screen bg-white">
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        <AirportPricingBreadcrumbs pageName="London City Airport" path={PATH} />

        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              London City Airport (LCY)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Leicester to London City Airport taxi transfers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Aylestone Taxis runs door-to-door transfers between Leicester and London City Airport, in both
              directions. Standard fares are {SMALL.price} for a 1–4 seater and {LARGE.price} for a 6/8 seater vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-3 text-lg"
              >
                <Calendar className="h-6 w-6" aria-hidden />
                Book online
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 text-lg"
              >
                <Phone className="h-6 w-6" aria-hidden />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle className="h-6 w-6" aria-hidden />
                WhatsApp us
              </a>
            </div>
          </div>
        </section>

        {/* Fares (confirmed by the business; see lib/data.ts) */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">London City Airport fares</h2>
            <div className="overflow-x-auto rounded-2xl border border-cyan-100 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-cyan-600 text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Vehicle</th>
                    <th className="px-5 py-3 font-semibold">Capacity</th>
                    <th className="px-5 py-3 font-semibold">Standard fare (GBP)</th>
                  </tr>
                </thead>
                <tbody>
                  {LONDON_CITY_FARES.map((row) => (
                    <tr key={row.vehicle} className="border-t border-cyan-100">
                      <td className="px-5 py-4 font-medium text-gray-900">{row.vehicle}</td>
                      <td className="px-5 py-4 text-gray-700">{row.capacity}</td>
                      <td className="px-5 py-4 text-cyan-700 font-bold text-lg">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600">
              Fares are for the whole vehicle, not per passenger. Ask us when you book whether the airport drop-off
              charge, parking or waiting time are included.
            </p>
          </div>
        </section>

        {/* Booking details */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to book</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Book online, call {PHONE_DISPLAY} or message us on WhatsApp ({WHATSAPP_DISPLAY}). To arrange your
              transfer, tell us:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              {[
                "Your pickup address in Leicester or Leicestershire",
                "Your flight date, time and flight number",
                "How many passengers are travelling",
                "How many suitcases, and any child seats or a wheelchair",
                "Whether you need the return journey too",
                "A mobile number for the driver",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              We confirm a fixed fare before you travel. It does not rise with traffic on the way, and there is no
              surge pricing.
            </p>
          </div>
        </section>

        {/* Journey planning */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Clock className="h-8 w-8 text-cyan-600" aria-hidden />
              Planning your journey
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              London City Airport is in the Royal Docks in east London (Hartmann Road, E16 2PX), so the journey from
              Leicester runs south on the M1 and then across London. Traffic in and around London varies a great
              deal by time of day, which is why we plan your pickup around your flight rather than quoting a
              best-case drive time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tell us your departure time when you book and we will agree a pickup time with you. We operate 24/7,
              so early-morning flights are no problem.
            </p>
          </div>
        </section>

        {/* Drop-off and pick-up */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Plane className="h-7 w-7 text-cyan-600" aria-hidden />
                Drop-off
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We drop you at the terminal for departures. London City Airport charges vehicles for using its
                terminal drop-off area, so ask us when you book whether that charge is included in your fare.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <MapPin className="h-7 w-7 text-cyan-600" aria-hidden />
                Pick-up
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Give us your flight number when you book. We monitor your arrival and confirm the meeting point with
                you before the day. If you would like the driver to meet you inside the terminal, ask about our{" "}
                <Link href="/meet-and-greet-taxi-leicester" className="text-cyan-700 underline underline-offset-2">
                  meet and greet service
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">London City Airport taxi questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-700">
              Flying from another London airport? See our{" "}
              <Link href="/pricing/airports/Heathrow" className="text-cyan-700 underline underline-offset-2">Heathrow</Link>,{" "}
              <Link href="/pricing/airports/Gatwick" className="text-cyan-700 underline underline-offset-2">Gatwick</Link>,{" "}
              <Link href="/pricing/airports/Stansted" className="text-cyan-700 underline underline-offset-2">Stansted</Link> and{" "}
              <Link href="/pricing/airports/Luton" className="text-cyan-700 underline underline-offset-2">Luton</Link> pages, or every route on our{" "}
              <Link href="/airport-transfers-leicester" className="text-cyan-700 underline underline-offset-2">airport transfers</Link> page.
            </p>
          </div>
        </section>

        <AirportRelatedLinks airportName="London City Airport" />
      </main>
    </div>
  )
}
