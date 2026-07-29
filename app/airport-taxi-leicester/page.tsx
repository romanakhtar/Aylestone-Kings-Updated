import { ArrowRight, Clock, Phone, Plane, Shield, MapPin } from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"
import FAQSchema from "@/components/seo/FAQSchema"
import JsonLd from "@/components/seo/JsonLd"
import AreaPageDeferredFAQ from "@/components/areas/AreaPageDeferredFAQ"
import { getAreaServiceAreaLocalBusinessJsonLd } from "@/lib/seo/siteJsonLd"

const CANONICAL = "https://aylestone-taxis.co.uk/airport-taxi-leicester"

export const metadata: Metadata = {
  title: "Airport Taxi Leicester | Fixed Fares 24/7 | Aylestone Taxis",
  description:
    "Book a fixed-price airport taxi from Leicester to EMA, Birmingham, Heathrow, Gatwick & more. Licensed drivers, 24/7. Call 0116 233 8888.",
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "Airport Taxi Leicester | Fixed Fares 24/7 | Aylestone Taxis",
    description:
      "Fixed-price airport taxis from Leicester to every major UK airport. Licensed drivers, 24/7 — book online or call 0116 233 8888.",
    url: CANONICAL,
    siteName: "Aylestone Taxis",
    locale: "en_GB",
    type: "website",
  },
}

const AIRPORTS = [
  {
    name: "East Midlands Airport (EMA)",
    href: "/pricing/airports/East-Midlands",
    description: "Closest airport to Leicester — ideal for Ryanair, Jet2, and short-haul holidays.",
  },
  {
    name: "Birmingham Airport (BHX)",
    href: "/taxi-to-birmingham-airport",
    description: "Popular for Emirates, KLM, and long-haul connections via one compact terminal.",
  },
  {
    name: "Heathrow Airport (LHR)",
    href: "/pricing/airports/Heathrow",
    description: "Direct Leicester to Heathrow taxi for long-haul, USA, and global hub connections.",
  },
  {
    name: "Gatwick Airport (LGW)",
    href: "/pricing/airports/Gatwick",
    description: "North and South terminal drop-offs for leisure and business flights south of London.",
  },
  {
    name: "Stansted Airport (STN)",
    href: "/pricing/airports/Stansted",
    description: "Ryanair and Jet2 hub — one-terminal drop-off with early-morning pickup available.",
  },
  {
    name: "Luton Airport (LTN)",
    href: "/pricing/airports/Luton",
    description: "Wizz Air, easyJet, and Ryanair routes with main-terminal forecourt drop-off.",
  },
  {
    name: "Manchester Airport (MAN)",
    href: "/pricing/airports/Manchester",
    description: "Long-haul and holiday carriers from the North West — T1, T2, and T3 covered.",
  },
] as const

const JOURNEY_OVERVIEW = [
  {
    airport: "East Midlands (EMA)",
    href: "/pricing/airports/East-Midlands",
    distance: "~22–24 miles",
    time: "35–45 minutes",
    fare: "From £40",
  },
  {
    airport: "Birmingham (BHX)",
    href: "/taxi-to-birmingham-airport",
    distance: "~38–42 miles",
    time: "55–75 minutes",
    fare: "From £60",
  },
  {
    airport: "Heathrow (LHR)",
    href: "/pricing/airports/Heathrow",
    distance: "~105–115 miles",
    time: "1h 45m–2h 30m",
    fare: "From £150",
  },
  {
    airport: "Gatwick (LGW)",
    href: "/pricing/airports/Gatwick",
    distance: "~150 miles",
    time: "2h 45m–3h 30m",
    fare: "From £200",
  },
  {
    airport: "Stansted (STN)",
    href: "/pricing/airports/Stansted",
    distance: "~115 miles",
    time: "2h–2h 45m",
    fare: "From £150",
  },
  {
    airport: "Luton (LTN)",
    href: "/pricing/airports/Luton",
    distance: "~85–95 miles",
    time: "1h 15m–1h 45m",
    fare: "From £120",
  },
  {
    airport: "Manchester (MAN)",
    href: "/pricing/airports/Manchester",
    distance: "~90–100 miles",
    time: "2h–2h 45m",
    fare: "From £150",
  },
] as const

const faqs = [
  {
    question: "What is the fixed price for an airport taxi from Leicester?",
    answer:
      "Fixed fares depend on which airport you are travelling to, your exact pickup address in Leicester, and the vehicle size you need. Saloon journeys to East Midlands Airport start from £40, Birmingham from £60, and longer routes such as Heathrow and Gatwick from £150 and £200 respectively — each airport pricing page lists current guide fares. You receive a confirmed quote before you travel, with no meter running on the day.",
  },
  {
    question: "How far in advance should I book an airport taxi in Leicester?",
    answer:
      "For East Midlands and Birmingham, same-day booking is often fine, though we recommend booking at least 24 hours ahead for peace of mind. Long-haul airports — Heathrow, Gatwick, Stansted, Luton, and Manchester — are best booked several days in advance, especially for early-morning departures, bank holidays, and school-holiday peaks. You can book online or call 0116 233 8888 at any time.",
  },
  {
    question: "Do you monitor flights for delays?",
    answer:
      "Yes. When you provide your flight number, we track arrivals and adjust your pickup time for early landings or delays at no extra charge for the waiting policy agreed at booking. For full details on flight monitoring, meet-and-greet options, and return pickups, see our airport transfers Leicester guide.",
  },
  {
    question: "Is an airport taxi cheaper than the train from Leicester?",
    answer:
      "For many long-distance airports, a train ticket plus onward travel can look cheaper on paper — but an airport taxi from Leicester is door-to-door with no station changes, no luggage on platforms, and a fixed fare agreed upfront. When you factor in parking at Leicester station, taxi connections at the London end, and travelling as a group, a private airport taxi often works out better value and always saves time.",
  },
  {
    question: "Which UK airports do you cover from Leicester?",
    answer:
      "We cover all major UK airports from Leicester and Leicestershire, including East Midlands, Birmingham, Heathrow, Gatwick, Stansted, Luton, and Manchester — with fixed fares quoted per route. Use the airport links on this page for journey times and pricing, or call 0116 233 8888 if your destination is not listed and we will confirm availability.",
  },
]

export default function AirportTaxiLeicesterPage() {
  const structuredData = getAreaServiceAreaLocalBusinessJsonLd({
    pageUrl: CANONICAL,
    serviceAreaName: "Leicester",
    geo: { latitude: 52.6369, longitude: -1.1398 },
    description:
      "Fixed-price airport taxi service from Leicester to East Midlands, Birmingham, Heathrow, Gatwick, Stansted, Luton, Manchester, and all major UK airports. Licensed, DBS-checked drivers — 24/7.",
    serviceType: "Airport Taxi",
    serviceName: "Airport Taxi Leicester",
  })

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={structuredData} />
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#0F0D3E]/5 via-white to-[#06A0A6]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/15 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Fixed fares · Licensed drivers · 24/7
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Airport Taxi Leicester — Fixed Fares to Every Major UK Airport
              </h1>
              <p className="text-xl text-[#2E3C44] leading-relaxed mb-8">
                Compare routes, journey times, and guide fares — then book a{" "}
                <strong>fixed price airport taxi Leicester</strong> passengers trust for EMA, Birmingham, Heathrow, and
                beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={contactInfo.booking.online}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-[transform,opacity] shadow-lg"
                >
                  <Plane className="h-5 w-5" aria-hidden />
                  Book Airport Taxi
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-3 border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-[transform,opacity]"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro — taxi vs public transport */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F0D3E] mb-6">
              Why book an airport taxi from Leicester?
            </h2>
            <div className="space-y-4 text-[#2E3C44] text-lg leading-relaxed">
              <p>
                Searching for an <strong>airport taxi Leicester</strong> usually means you want certainty — a single
                price, a direct route, and no juggling bags on a train platform at 5am. Aylestone Taxis has served
                Leicester since 1995, and our airport work is built around fixed fares confirmed before you travel, not
                meters ticking up in traffic.
              </p>
              <p>
                Public transport can work for solo travellers with light luggage, but most airport journeys involve
                suitcases, child seats, or early departures when rail services are sparse. A private taxi collects you
                from your door in{" "}
                <Link href="/taxis-in/leicester-city-centre" className="text-[#06A0A6] font-semibold hover:underline">
                  Leicester city centre
                </Link>
                , Aylestone, Oadby, or anywhere in Leicestershire — no changes at Birmingham New Street, no DART transfer
                at Luton, and no surprise parking fees at the station. Your fare is agreed upfront, so you can compare it
                fairly against train tickets, fuel, and long-stay airport parking.
              </p>
              <p>
                We operate as a <strong>24 hour airport taxi Leicester</strong> service, so dawn Ryanair waves and
                late-night returns are covered the same as midday runs. For flight monitoring, return pickups, and
                step-by-step booking guidance,{" "}
                <Link href="/airport-transfers-leicester" className="text-[#06A0A6] font-semibold hover:underline">
                  see full details on flight monitoring and booking
                </Link>{" "}
                on our airport transfers page — this hub focuses on choosing the right airport and understanding typical
                costs. Business travellers can also arrange invoiced airport runs through our{" "}
                <Link
                  href="/corporate-taxi-account-leicester"
                  className="text-[#06A0A6] font-semibold hover:underline"
                >
                  corporate taxi account
                </Link>
                , and you can return to the{" "}
                <Link href="/" className="text-[#06A0A6] font-semibold hover:underline">
                  Aylestone Taxis homepage
                </Link>{" "}
                for local rides and wider services.
              </p>
            </div>
          </div>
        </section>

        {/* Journey overview table */}
        <section className="py-16 bg-[#F4F5F7]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F0D3E] mb-3 text-center">
              Leicester airport taxi — journey times &amp; guide fares
            </h2>
            <p className="text-[#2E3C44] text-center max-w-2xl mx-auto mb-8">
              Approximate figures from Leicester city centre in normal traffic. Your exact quote depends on pickup
              point and vehicle — click an airport for full pricing.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="min-w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#0F0D3E] text-white">
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Airport
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Approx. distance
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Approx. journey time
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Typical fixed fare
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {JOURNEY_OVERVIEW.map((row, index) => (
                    <tr
                      key={row.airport}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 font-medium text-[#0F0D3E]">
                        <Link href={row.href} className="text-[#06A0A6] hover:underline underline-offset-2">
                          {row.airport}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-[#2E3C44]">{row.distance}</td>
                      <td className="px-4 py-3 text-[#2E3C44]">{row.time}</td>
                      <td className="px-4 py-3 font-semibold text-[#06A0A6]">{row.fare}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Times and fares are guides from our airport pricing pages — confirm your fixed quote when you book.
            </p>
          </div>
        </section>

        {/* Airports served grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F0D3E] mb-3 text-center">Airports we serve from Leicester</h2>
            <p className="text-[#2E3C44] text-center max-w-2xl mx-auto mb-10">
              Select your destination for route detail, terminal drop-off notes, and current fixed fares.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {AIRPORTS.map((airport) => (
                <Link
                  key={airport.href}
                  href={airport.href}
                  className="group rounded-xl border border-gray-200 p-6 hover:border-[#06A0A6] hover:shadow-md transition-[box-shadow,border-color]"
                >
                  <Plane className="h-8 w-8 text-[#06A0A6] mb-3" aria-hidden />
                  <h3 className="text-lg font-semibold text-[#0F0D3E] group-hover:text-[#06A0A6] mb-2">
                    {airport.name}
                  </h3>
                  <p className="text-[#2E3C44] text-sm leading-relaxed">{airport.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-[#06A0A6] text-sm font-semibold">
                    View pricing
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Train vs taxi */}
        <section className="py-16 bg-[#E4E4E4]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F0D3E] mb-6">Airport taxi vs train from Leicester</h2>
            <div className="space-y-4 text-[#2E3C44] leading-relaxed">
              <p>
                The <strong>airport taxi vs train Leicester</strong> question comes down to what you value on travel
                day. East Midlands Airport is close enough that a{" "}
                <strong>taxi to East Midlands Airport</strong> is often faster door-to-door than bus connections — and
                always simpler with luggage or a family.
              </p>
              <p>
                For Birmingham, Heathrow, and Gatwick, trains can look cheaper for one person travelling light, but
                add platform changes, taxi hops at the far end, and peak-time ticket prices and the gap narrows. A{" "}
                <strong>Leicester to Birmingham Airport taxi</strong> or{" "}
                <strong>Leicester to Heathrow taxi</strong> gives you one vehicle, one fare, and pickup timed to your
                flight — not the nearest available train.
              </p>
              <p>
                Compare guide prices on each airport page above, then book a fixed fare online or call{" "}
                {contactInfo.phone}. Need help choosing between airports or planning a return? Our{" "}
                <Link href="/airport-transfers-leicester" className="text-[#06A0A6] font-semibold hover:underline">
                  airport transfers Leicester
                </Link>{" "}
                guide covers flight monitoring, luggage, and booking in more depth.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <li className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                <Shield className="h-6 w-6 text-[#06A0A6] shrink-0" aria-hidden />
                <span className="text-sm text-[#2E3C44]">DBS-checked, Leicester City Council licensed drivers</span>
              </li>
              <li className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                <Clock className="h-6 w-6 text-[#06A0A6] shrink-0" aria-hidden />
                <span className="text-sm text-[#2E3C44]">24/7 dispatch — early departures and late returns</span>
              </li>
              <li className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                <MapPin className="h-6 w-6 text-[#06A0A6] shrink-0" aria-hidden />
                <span className="text-sm text-[#2E3C44]">Door-to-door from Leicester &amp; Leicestershire</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AreaPageDeferredFAQ areaPlain="Leicester" faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book your airport taxi from Leicester</h2>
            <p className="text-lg text-white/90 mb-8">
              Fixed fares, licensed drivers, and coverage to every major UK airport. Get a quote online or speak to
              our team — available 24 hours a day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4]"
              >
                Book Online
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Call {contactInfo.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
