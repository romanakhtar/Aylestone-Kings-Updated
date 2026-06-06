import { Check, ArrowRight, MapPin, Clock, Shield, Phone, Calendar, Plane } from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"
import FAQSchema from "@/components/seo/FAQSchema"

const CANONICAL = "https://aylestone-taxis.co.uk/leicester-to-east-midlands-airport-taxi"

export const metadata: Metadata = {
  title: "Leicester to East Midlands Airport Taxi | EMA From £40 | Return",
  description:
    "Fixed-price transfers between Leicester and East Midlands Airport (EMA). Postcode DE74 2SA, A46 via Copt Oak route, terminal drop-off & return pickup points. From £40 — book or call 0116 2338888 24/7.",
  keywords:
    "Leicester to East Midlands Airport taxi, EMA taxi Leicester, East Midlands Airport transfer, Castle Donington airport taxi, fixed fare EMA",
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "Leicester ↔ East Midlands Airport (EMA) | Aylestone Taxis",
    description: "Fixed fares from £40, route guidance for Leicester, Oadby & Wigston. Book online or call 0116 2338888.",
    url: CANONICAL,
    siteName: "Aylestone Kings",
    locale: "en_GB",
    type: "website",
  },
}

const faqs = [
  {
    question: "What is the postcode for East Midlands Airport passenger pickup?",
    answer:
      "The main airport site is Castle Donington, Derby DE74 2SA. Use this for sat-nav; your driver confirms the exact meeting pin for returns (pickup lobby or express area) on the day.",
  },
  {
    question: "How long does it take from Oadby or Wigston to EMA by taxi?",
    answer:
      "From Oadby it is often about 25 minutes off-peak; from Wigston roughly 28 minutes, because both connect quickly to the A46 north. From Leicester city centre allow closer to 35–45 minutes depending on traffic and time of day.",
  },
  {
    question: "Where does my driver drop me at East Midlands Airport?",
    answer:
      "For departures we use the signed forecourt express drop-off in front of the single EMA terminal, aligned with your airline’s check-in row. Airport staff direct short-stay traffic; we follow current airport rules for private hire set-down.",
  },
  {
    question: "Where do I meet my driver when I fly back into EMA?",
    answer:
      "Usually in the main arrivals pickup area after baggage reclaim — often the multi-storey car park pickup lobby or the signed express pickup lane, depending on what the airport is operating. We text you the driver’s mobile and vehicle registration when your flight lands.",
  },
  {
    question: "Is a return taxi cheaper than two one-way trips to East Midlands Airport?",
    answer:
      "We price each leg fairly; booking outbound and return together still saves you coordination hassle and locks both pickups in one plan. Ask when you book if a return package suits your dates.",
  },
  {
    question: "Can I get a taxi for a 04:00 pickup in Leicester for an early flight?",
    answer:
      "Yes. We operate 24/7 and regularly cover first-wave departures. Pre-book so we can assign a driver and confirm your fixed fare before travel day.",
  },
]

export default function LeicesterToEastMidlandsAirportTaxiPage() {
  return (
    <div className="min-h-screen bg-white">
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                East Midlands Airport (EMA)
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Leicester to East Midlands Airport taxi — fixed fares from £40
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                If you are booking a <strong>Leicester to East Midlands Airport taxi</strong>, Aylestone Kings offers
                pre-booked saloon and MPV transfers with a fixed price before you travel. Drivers know the A46 and M1
                approach into Castle Donington, and we coordinate simple return pickups after you land.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-[transform,opacity] duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Calendar className="h-6 w-6" />
                    Book your EMA transfer
                  </button>
                </a>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-[transform,opacity] duration-200 text-lg flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6" />
                    Call {contactInfo.phone}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-[#06A0A6]" />
                  <h2 className="text-lg font-semibold text-[#0F0D3E]">Airport postcode</h2>
                </div>
                <p className="text-[#2E3C44]">
                  Passenger terminal: <strong>DE74 2SA</strong> (Castle Donington). Use this for navigation; we fine-tune
                  the kerb or pickup lobby when you return.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-[#06A0A6]" />
                  <h2 className="text-lg font-semibold text-[#0F0D3E]">Typical times by area</h2>
                </div>
                <ul className="text-[#2E3C44] list-disc pl-5 space-y-1">
                  <li>
                    <strong>Oadby:</strong> ~25 minutes off-peak
                  </li>
                  <li>
                    <strong>Wigston:</strong> ~28 minutes off-peak
                  </li>
                  <li>
                    <strong>Leicester city centre:</strong> ~35–45 minutes (traffic dependent)
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Plane className="h-5 w-5 text-[#06A0A6]" />
                  <h2 className="text-lg font-semibold text-[#0F0D3E]">Distance</h2>
                </div>
                <p className="text-[#2E3C44]">
                  Roughly <strong>22–24 miles</strong> from central Leicester to the terminal forecourt, depending on your
                  start postcode.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#E4E4E4]/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-[#2E3C44] leading-relaxed space-y-5 text-base md:text-lg">
            <h2 className="text-3xl font-bold text-[#0F0D3E]">Best route from Leicester: A46 via Copt Oak</h2>
            <p>
              Most <strong>Leicester to East Midlands Airport taxi</strong> journeys follow the A46 north-west from the
              city, join the M1 near Copt Oak (junction 21A/22 area), then use the A453 into Castle Donington. From the
              south and east we often use the A563 ring to reach the A46 faster at peak times.
            </p>
            <p>
              That corridor is the quickest reliable link for Leicestershire passengers; we adjust if the M1 has closures
              or heavy queues.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-[#2E3C44] leading-relaxed space-y-5 text-base md:text-lg">
            <h2 className="text-3xl font-bold text-[#0F0D3E]">EMA terminal layout and where we drop you off</h2>
            <p>
              East Midlands Airport uses <strong>one main passenger terminal</strong> with a single security hall after
              check-in. Airlines share the same building; Ryanair, Jet2, easyJet, and TUI desks are all inside that hall.
            </p>
            <p>
              On departure, your driver sets down at the <strong>signed express / forecourt drop-off</strong> in front of the
              terminal, following airport marshals. We aim for the kerb closest to your carrier’s check-in zone to shorten
              the walk with heavy bags.
            </p>
            <p>
              Short-stay and multi-storey car parks sit beside the terminal; if you ever need to swap a pickup plan, call
              us and we adapt within airport rules.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#E4E4E4]/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-[#2E3C44] leading-relaxed space-y-5 text-base md:text-lg">
            <h2 className="text-3xl font-bold text-[#0F0D3E]">Return journeys from EMA — where to meet your driver</h2>
            <p>
              After you land, collect bags, and pass customs if needed, we normally meet in the <strong>main Pick Up</strong>{" "}
              area — often the <strong>multi-storey car park pickup lobby</strong> or the signed express pickup lane, depending
              on what the airport is operating that month.
            </p>
            <p>
              When you book the inbound leg, give us your <strong>flight number</strong> and UK mobile. We monitor arrival
              time, send the driver&apos;s name and registration by SMS, and adjust if baggage reclaim runs long.
            </p>
            <p>
              If you cannot find the meeting point, call the driver or our office on <strong>{contactInfo.phone}</strong> — we
              talk you to the correct door.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">Pricing</h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Every <strong>Leicester to East Midlands Airport taxi</strong> quote is built from your pickup postcode
                and vehicle choice — you see the price before you confirm online. The table below shows typical starting
                points from Leicester city centre.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border border-[#06A0A6]/20 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
                      <th className="px-6 py-4 text-left font-semibold text-lg">Vehicle Type</th>
                      <th className="px-6 py-4 text-center font-semibold text-lg">Capacity</th>
                      <th className="px-6 py-4 text-right font-semibold text-lg">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-[#06A0A6]/5">
                      <td className="px-6 py-4 font-medium text-[#0F0D3E]">
                        <div className="flex items-center space-x-3">
                          <Plane className="h-6 w-6 text-[#06A0A6]" />
                          <span>Standard Saloon</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-[#2E3C44]">1-4 passengers</td>
                      <td className="px-6 py-4 text-right text-[#06A0A6] font-semibold text-lg">from £40</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-[#06A0A6]/5">
                      <td className="px-6 py-4 font-medium text-[#0F0D3E]">
                        <div className="flex items-center space-x-3">
                          <Plane className="h-6 w-6 text-[#06A0A6]" />
                          <span>MPV / Minibus</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-[#2E3C44]">6-8 passengers</td>
                      <td className="px-6 py-4 text-right text-[#06A0A6] font-semibold text-lg">from £60</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-[#2E3C44] italic">
                  Prices shown are starting rates from Leicester city centre. Additional pickup locations may affect final
                  price.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">Why book with Aylestone Kings?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Early and late cover</h3>
                <p className="text-[#2E3C44]">
                  We schedule <strong>03:30–04:30</strong> Leicester pickups for dawn flights and collect inbound aircraft
                  after <strong>midnight</strong> when pre-booked.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Fixed prices</h3>
                <p className="text-[#2E3C44]">Agreed in advance for each leg — no meter anxiety on the day of travel.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Licensed & DBS-checked</h3>
                <p className="text-[#2E3C44]">Private-hire licensed drivers and insured vehicles for airport work.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">Questions about EMA transfers</h2>
              <p className="text-lg text-[#2E3C44]">Straight answers before you book.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.question} className="border rounded-lg p-5 border-gray-200 bg-gray-50/50">
                  <summary className="font-semibold cursor-pointer text-lg text-[#0F0D3E]">{item.question}</summary>
                  <p className="mt-2 text-[#2E3C44] leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Book your EMA transfer</h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Book your <strong>Leicester to East Midlands Airport taxi</strong> online for fixed fares from £40, local
              drivers, and flight-friendly timing — or call the office on {contactInfo.phone}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] flex items-center justify-center gap-3">
                  Book now
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
              <Link href="/pricing/airports/East-Midlands" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-[transform,opacity] duration-200">
                  View full EMA pricing page
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
