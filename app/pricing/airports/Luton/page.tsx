import {
  Check,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Car,
  Shield,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Leicester to Luton Airport Taxi | Fixed Price LTN Transfers 24/7 | Aylestone Kings",
  description:
    "Book a Leicester to Luton Airport taxi with fixed fares from £120. Reliable LTN transfers, flight-aware pickups, saloon & MPV options. Licensed drivers, 24/7. Compare with our Heathrow & Gatwick airport taxis.",
  keywords: [
    "Leicester to Luton airport taxi",
    "Luton airport transfer Leicester",
    "taxi to Luton from Leicester",
    "LTN taxi Leicester",
    "fixed price Luton airport taxi",
    "Luton airport pickup",
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a taxi from Leicester to Luton Airport take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most journeys take around 1 hour 15 minutes to 1 hour 45 minutes depending on your exact pickup point, time of day, and traffic on the M1 and M6 corridor. We build sensible buffer time into airport runs so you are not cutting check-in fine.",
      },
    },
    {
      "@type": "Question",
      name: "How much is a taxi from Leicester to Luton Airport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our advertised fixed prices start from £120 for a standard saloon from Leicester city centre and from £160 for larger MPV or minibus vehicles for groups. The final quote may vary slightly if your pickup is outside the central zone or you need extra stops.",
      },
    },
    {
      "@type": "Question",
      name: "Can you pick me up inside Luton Airport when I land?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For arrivals we can arrange a meet in the terminal or a clearly agreed pickup point at Luton, with your flight details used to adjust timing if you are delayed. Share your airline, flight number, and mobile number when you book.",
      },
    },
    {
      "@type": "Question",
      name: "Should I book a Leicester to Luton taxi in advance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pre-booking is strongly recommended, especially for early morning departures, school holidays, and bank holidays when roads and the airport are busiest. It guarantees vehicle choice and locks in your fixed fare.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer return transfers from Luton to Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many customers book a return at the same time as the outbound leg. For inbound flights we monitor delays where possible and coordinate a pickup time that matches baggage reclaim and immigration.",
      },
    },
    {
      "@type": "Question",
      name: "What vehicle should I choose for a Luton Airport run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard saloon suits up to four passengers with typical holiday luggage. Choose an MPV or minibus if you are travelling as a larger family or group, carrying sports equipment, or simply want more space for bags.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas near Leicester do you pick up from for Luton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We collect passengers from Leicester city centre, Aylestone, Oadby, Wigston, Glenfield, Braunstone, Beaumont Leys, and many surrounding towns across Leicestershire. Tell us your postcode when booking for an accurate quote.",
      },
    },
  ],
}

export default function LutonPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                Leicester ↔ Luton Airport (LTN)
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Leicester to Luton Airport taxi — fixed fares, trusted drivers
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                Door-to-door{" "}
                <strong>Luton airport transfers from Leicester</strong> and
                Leicestershire. Fixed pricing, 24/7 availability, and
                experienced local drivers who know the best routes to LTN when
                motorways are busy — so you reach the terminal relaxed and on
                time for check-in.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={contactInfo.booking.online}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Calendar className="h-6 w-6" />
                    Book your Luton transfer
                  </button>
                </a>
                <a href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-all duration-200 text-lg">
                    Contact us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SEO long-form content */}
        <section className="py-16 md:py-20 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed space-y-6 text-base md:text-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Route overview: Leicester to Luton Airport (LTN)
            </h2>
            <p>
              If you are searching for a dependable{" "}
              <strong>Leicester to Luton Airport taxi</strong>, you are planning
              one of the most practical air links from the East Midlands into
              London&apos;s major low-cost hub. Luton sits north of London with
              quick access for European and domestic flights, and a pre-booked
              private transfer removes the stress of rail connections, parking
              charges, and hauling cases across stations. Aylestone Kings
              specialises in{" "}
              <strong>fixed-price Luton airport transfers</strong> for
              families, business travellers, and groups who want a single,
              comfortable journey from their front door straight to the
              terminal forecourt.
            </p>
            <p>
              The road route typically runs via the M1 and connecting roads,
              depending on live traffic and your pickup location. Unlike a
              last-minute app job where surge pricing can appear without
              warning, you agree your{" "}
              <strong>taxi to Luton from Leicester</strong> in advance, know
              who is collecting you, and travel with a licensed driver who is
              used to airport timing, peak congestion, and the quirks of LTN
              drop-off and pickup zones. Whether you are flying for a weekend
              break, a work trip, or a family holiday, starting the journey
              calmly sets the tone for the whole trip.
            </p>
            <p>
              Luton Airport has grown into a major base for short-haul and
              leisure travel, which means terminals and forecourts can feel
              busy at peak times. A private transfer lets you stay in one
              vehicle from Leicester all the way to check-in, rather than
              juggling trains with engineering work, replacement buses, or
              full carriages at St Pancras. Business passengers often use the
              same service for early Monday flights and Thursday returns,
              knowing the car will be waiting regardless of how the working
              day overruns. Holidaymakers appreciate not having to remember
              which long-stay bus stop they parked on, or whether the pay
              machine accepted their card at five in the morning.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 pt-4">
              Typical journey times and when to leave
            </h3>
            <p>
              Most <strong>Leicester to Luton</strong> journeys take roughly{" "}
              <strong>1 hour 15 minutes to 1 hour 45 minutes</strong> in normal
              conditions. Rush hour on the M1, roadworks, accidents, and
              Friday afternoon getaway traffic can all add time, which is why
              we recommend discussing your flight time when you book so we can
              suggest a pickup window that respects airline check-in deadlines.
            </p>
            <p>
              Early morning departures often move quickly on the motorways but
              still deserve a buffer for fog, ice, or unexpected closures.
              Midday and late afternoon slots need extra attention during
              commuter peaks. If you are unsure, tell us your airline and
              departure time: we regularly handle{" "}
              <strong>LTN taxi</strong> runs from Leicester and can advise a
              sensible &quot;leave home&quot; time based on season and day of
              week — without making you absurdly early unless you prefer it
              that way.
            </p>
            <p>
              Bank holidays, half terms, and the Christmas getaway can all
              stretch journey times. If your flight is long-haul with a tighter
              connection or you are travelling with young children who need
              extra stops, mention it at booking: we would rather build in a
              comfort break than watch you miss a check-in deadline. The same
              applies to sporting events or concerts in Leicester that empty
              onto the motorways at once — experienced drivers factor those
              patterns in when suggesting a pickup time for your{" "}
              <strong>Luton airport transfer</strong>.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 pt-4">
              How our Luton pricing works (transparent, fixed fares)
            </h3>
            <p>
              Our <strong>Luton airport transfer Leicester</strong> prices are
              quoted as fixed fares for the vehicle type you choose, not a
              ticking meter that climbs when traffic stalls. The table below
              shows starting rates from Leicester city centre: a standard
              saloon from <strong>£120</strong> and larger{" "}
              <strong>MPV / minibus</strong> options from <strong>£160</strong>{" "}
              for bigger parties or extra luggage capacity.
            </p>
            <p>
              Pickups in outer Leicestershire, additional stops, or very late
              night / early morning requests may adjust the quote slightly — we
              will always confirm before you commit. There are no hidden
              &quot;airport fees&quot; invented at the end of the trip: what you
              agree is what you pay, subject to the route and vehicle you
              booked. That predictability matters when you are budgeting a
              family holiday or reclaiming travel on expenses.
            </p>
            <p>
              If you need a VAT-style receipt, multiple drop-offs on the way to
              the airport, or a child seat requirement, raise it when you
              quote — we will confirm whether the standard Leicester–Luton rate
              still applies or whether a small supplement is needed for the
              extra time or equipment. Transparency at the start avoids awkward
              conversations at the kerb and keeps your{" "}
              <strong>fixed price Luton taxi</strong> experience professional
              from first call to final drop-off.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 pt-4">
              Service features you can expect
            </h3>
            <p>
              Every <strong>Leicester to Luton Airport</strong> booking is
              handled with the same standards we apply across our airport work:
              clean, modern vehicles; courteous drivers; and clear
              communication. Where flight details are supplied for return legs,
              we work with you to allow for delays so you are not left
              searching for a last-minute ride in the arrivals hall. Group and
              family travellers appreciate fixed luggage space in MPVs and
              minibuses, while solo and couple travellers value the simplicity
              of a direct saloon transfer without parking hassle at LTN.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fixed fares agreed at booking for predictable costs</li>
              <li>24/7 service for early flights and late arrivals</li>
              <li>Licensed, insured drivers with local knowledge</li>
              <li>Saloon and MPV / minibus options for different party sizes</li>
              <li>Support for both outbound drop-off and inbound pickup</li>
            </ul>
            <p>
              We treat airport work as time-critical: your driver aims to
              arrive slightly ahead of schedule so you are not watching the
              clock on the doorstep. Vehicles are kept presentable inside and
              out because we know a{" "}
              <strong>Leicester to Luton Airport taxi</strong> is often someone&apos;s
              first impression of a trip abroad or their last leg home after
              hours in the air. If you have mobility needs, heavy cases, or a
              pushchair, tell us in advance so we can allocate the right car
              and allow a moment for loading without rushing you.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 pt-4">
              Areas we cover for Luton pickups and drop-offs
            </h3>
            <p>
              We are a Leicester-based operator, so{" "}
              <strong>taxis to Luton Airport from Leicester</strong> are at the
              core of this route. We also collect from surrounding areas
              including <strong>Aylestone</strong>, <strong>Oadby</strong>,{" "}
              <strong>Wigston</strong>, <strong>Glenfield</strong>,{" "}
              <strong>Braunstone</strong>, <strong>Beaumont Leys</strong>,{" "}
              <strong>Thurmaston</strong>, <strong>Syston</strong>, and many
              towns across Leicestershire. If you are slightly further out,
              mention your postcode when you enquire — we regularly price
              longer-distance airport work fairly rather than turning good
              customers away.
            </p>
            <p>
              On the return, we can drop you home, to a hotel, or to a
              workplace anywhere in our normal operating area. Students,
              hospital visitors, and corporate guests use the same service for
              a consistent experience in both directions.
            </p>
            <p>
              Rural pickups and villages beyond the main Leicester ring of
              suburbs are often still economical versus driving yourself once
              you add fuel, airport parking, and the walk from a remote car
              park in the rain. If you are coordinating multiple passengers from
              two addresses, we can sometimes sequence pickups to minimise
              backtracking — ask when you book so we can quote accurately for
              your <strong>LTN taxi Leicester</strong> run.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 pt-4">
              Luton Airport pickup and drop-off details
            </h3>
            <p>
              For <strong>departures</strong>, your driver will aim to deliver
              you to the appropriate terminal forecourt or agreed drop-off
              point at LTN with enough time for bag drop and security. Luton
              can be busy during school holidays and bank holidays; a
              pre-booked taxi avoids the scramble for rail tickets or crowded
              shuttle buses from distant parking.
            </p>
            <p>
              For <strong>arrivals</strong>, share your flight number and
              terminal if possible. We can coordinate a{" "}
              <strong>meet inside the terminal</strong> or a precise pickup
              location in the airport grounds, depending on what LTN is
              operating on the day and what suits you best. If your flight is
              delayed, let us know or rely on the details you have already
              given — we will adjust rather than abandon the booking at the
              first sign of a late landing. Having a named driver and vehicle
              for your <strong>Luton airport pickup</strong> is especially
              reassuring after a long flight or when you are travelling with
              children.
            </p>
            <p>
              First-time flyers sometimes worry about where exactly to meet
              their driver at LTN. When you book, we explain the plan in plain
              English — which door, which level, or which phone call to expect
              — so you are not decoding vague instructions with a dead phone
              battery. If airport authorities change pickup arrangements, we
              update you by text or call where possible. That level of detail
              is what turns a generic &quot;airport taxi&quot; into a service
              you would recommend to colleagues and family.
            </p>
            <p>
              Need a different London airport instead? We also run{" "}
              <Link
                href="/pricing/airports/Heathrow"
                className="text-cyan-700 font-medium underline hover:text-cyan-900"
              >
                Leicester to Heathrow taxi transfers
              </Link>{" "}
              and{" "}
              <Link
                href="/pricing/airports/Gatwick"
                className="text-cyan-700 font-medium underline hover:text-cyan-900"
              >
                Leicester to Gatwick airport taxis
              </Link>
              , each with their own fixed-price structure and journey times.
              For nationwide journeys, ferries, or cruise connections, see our{" "}
              <Link
                href="/long-distance-taxi-leicester"
                className="text-cyan-700 font-medium underline hover:text-cyan-900"
              >
                long-distance taxi from Leicester
              </Link>{" "}
              page. Our{" "}
              <Link
                href="/airport-transfers-leicester"
                className="text-cyan-700 font-medium underline hover:text-cyan-900"
              >
                airport transfers Leicester
              </Link>{" "}
              hub ties together EMA, Birmingham, Stansted, Manchester, and more.
              Wherever you fly from next, starting with a trusted local firm
              makes the whole journey easier.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transparent Luton airport pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fixed rates from Leicester and surrounding areas to Luton
                Airport. No hidden fees, no surprises.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border border-cyan-200 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
                      <th className="px-6 py-4 text-left font-semibold text-lg">
                        Vehicle type
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-lg">
                        Capacity
                      </th>
                      <th className="px-6 py-4 text-right font-semibold text-lg">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-cyan-100 hover:bg-cyan-50 transition-colors duration-200">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center space-x-3">
                          <Car className="h-6 w-6 text-cyan-600" />
                          <span>Standard saloon</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        1–4 passengers
                      </td>
                      <td className="px-6 py-4 text-right text-cyan-700 font-semibold text-lg">
                        from £120
                      </td>
                    </tr>
                    <tr className="border-b border-cyan-100 hover:bg-cyan-50 transition-colors duration-200">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center space-x-3">
                          <Users className="h-6 w-6 text-cyan-600" />
                          <span>MPV / minibus</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        6–8 passengers
                      </td>
                      <td className="px-6 py-4 text-right text-cyan-700 font-semibold text-lg">
                        from £160
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 italic">
                  Prices shown are starting rates from Leicester city centre.
                  Additional pickup locations or stops may affect the final
                  price — we confirm before you book.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-20 bg-white bg-gradient-to-r from-[#06A0A6]/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why book your Luton transfer with Aylestone Kings?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional, reliable Leicester–LTN transfers with real people
                on the end of the phone when plans change.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  24/7 service
                </h3>
                <p className="text-gray-600">
                  Early morning departures and late-night arrivals — we
                  schedule drivers around your flight, not the other way round.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Licensed & insured
                </h3>
                <p className="text-gray-600">
                  Fully licensed drivers and proper hire insurance so you are
                  covered on every mile to or from LTN.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Door-to-door
                </h3>
                <p className="text-gray-600">
                  Collection from your address in Leicester or Leicestershire
                  and drop-off at the terminal — no middle legs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Modern fleet
                </h3>
                <p className="text-gray-600">
                  Clean, well-maintained saloons and people carriers with
                  comfortable seating for longer motorway runs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fixed rates
                </h3>
                <p className="text-gray-600">
                  Agreed price upfront — ideal for families and businesses who
                  need certainty on a Leicester to Luton airport taxi.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Group travel
                </h3>
                <p className="text-gray-600">
                  MPVs and minibuses for 6–8 passengers — one vehicle, one
                  booking, everyone arrives together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Information */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                How your Luton transfer works
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Simple steps from booking to baggage reclaim and home again.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  Booking
                </h3>
                <p className="text-gray-600 text-center">
                  Book online or call with your flight times, addresses, and
                  luggage needs. We recommend at least 24 hours ahead for
                  airport work at peak times.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  Pickup
                </h3>
                <p className="text-gray-600 text-center">
                  Your driver arrives at the agreed time with vehicle details
                  shared in advance so you know who to expect.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  Journey
                </h3>
                <p className="text-gray-600 text-center">
                  Relax on the M1 route to LTN while your driver monitors
                  traffic and adjusts if a diversion saves time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-orange-600 font-bold text-lg">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  Airport arrival
                </h3>
                <p className="text-gray-600 text-center">
                  Drop-off at the terminal with time for check-in. Assistance
                  with luggage on request.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-red-600 font-bold text-lg">5</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  Return journey
                </h3>
                <p className="text-gray-600 text-center">
                  Land back at Luton? We meet you as arranged, with flight
                  details used to reduce waiting if you are delayed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-indigo-600 font-bold text-lg">6</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  Support
                </h3>
                <p className="text-gray-600 text-center">
                  Contact us if plans change — we will do our best to
                  reschedule your Leicester to Luton airport taxi fairly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal linking panel */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Related transfers from Leicester
            </h2>
            <p className="text-gray-600 text-center mb-8 leading-relaxed">
              Planning a different trip? Explore our other fixed-price
              airport pages and long-distance options. Many customers compare{" "}
              <strong>Luton</strong> with{" "}
              <strong>Heathrow</strong> or <strong>Gatwick</strong> depending on
              airline and price — we cover all of them from Leicestershire.
            </p>
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-center">
              <li>
                <Link
                  href="/pricing/airports/Heathrow"
                  className="inline-block px-5 py-3 rounded-xl border-2 border-cyan-600 text-cyan-700 font-semibold hover:bg-cyan-600 hover:text-white transition-colors"
                >
                  Heathrow airport taxi
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/airports/Gatwick"
                  className="inline-block px-5 py-3 rounded-xl border-2 border-cyan-600 text-cyan-700 font-semibold hover:bg-cyan-600 hover:text-white transition-colors"
                >
                  Gatwick airport taxi
                </Link>
              </li>
              <li>
                <Link
                  href="/long-distance-taxi-leicester"
                  className="inline-block px-5 py-3 rounded-xl border-2 border-cyan-600 text-cyan-700 font-semibold hover:bg-cyan-600 hover:text-white transition-colors"
                >
                  Long-distance & UK-wide taxis
                </Link>
              </li>
              <li>
                <Link
                  href="/leicester-airport-taxi"
                  className="inline-block px-5 py-3 rounded-xl border-2 border-cyan-600 text-cyan-700 font-semibold hover:bg-cyan-600 hover:text-white transition-colors"
                >
                  Leicester airport taxi hub
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-gray-50" aria-labelledby="luton-faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="luton-faq-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
            >
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How long does a taxi from Leicester to Luton Airport take?",
                  a: "Typically between 1 hour 15 minutes and 1 hour 45 minutes, depending on traffic and your exact pickup. We help you choose a pickup time that fits check-in, not just the fastest possible run on paper.",
                },
                {
                  q: "How much is a taxi from Leicester to Luton Airport?",
                  a: "Fixed fares start from £120 for a standard saloon and from £160 for MPV/minibus vehicles from Leicester city centre. Tell us your full pickup address for a firm quote.",
                },
                {
                  q: "Can you pick me up inside Luton Airport when I land?",
                  a: "Yes. Provide your flight number and mobile number. We can arrange a terminal meet or an agreed pickup point at LTN, and adjust for delays when we have your flight details.",
                },
                {
                  q: "Should I book a Leicester to Luton taxi in advance?",
                  a: "Yes — especially for dawn flights, half terms, and bank holidays. Pre-booking secures the vehicle size you need and locks your fixed price.",
                },
                {
                  q: "Do you offer return transfers from Luton to Leicester?",
                  a: "Absolutely. Booking both directions together keeps your travel simple. Inbound pickups use your arrival flight to coordinate timing after baggage reclaim.",
                },
                {
                  q: "What vehicle should I choose for a Luton Airport run?",
                  a: "Saloon for up to four passengers with normal luggage. MPV or minibus for larger groups, bulky bags, or when you simply want more space.",
                },
                {
                  q: "Which areas near Leicester do you pick up from for Luton?",
                  a: "Leicester city centre, Aylestone, Oadby, Wigston, Glenfield, Braunstone, Beaumont Leys, and wider Leicestershire. Ask with your postcode if you are unsure.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group bg-white rounded-xl border border-gray-200 shadow-sm open:shadow-md transition-shadow"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-gray-900 flex justify-between items-center gap-4">
                    {item.q}
                    <span className="text-cyan-600 text-xl shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-4 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Ready to book your Leicester to Luton transfer?
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Fixed fares, licensed drivers, and 24/7 availability — book in
              minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-4 py-2 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                  Book now
                  <ArrowRight className="h-3 w-3 sm:h-5 sm:w-5" />
                </button>
              </a>
              <a href="/pricing" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-white text-white px-4 py-2 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-all duration-200 text-sm sm:text-base">
                  View all airport pricing
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
