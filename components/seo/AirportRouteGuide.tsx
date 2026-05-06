import Link from "next/link"

type AirportRouteGuideProps = {
  airportName: string
  airportCode: string
  fromPrice: string
  typicalTime: string
  slug: string
}

type AirportGuideContent = {
  heading: string
  paragraphs: string[]
  bullets: string[]
}

const airportCopyBySlug: Record<string, AirportGuideContent> = {
  Heathrow: {
    heading: "Heathrow route guidance from Leicester",
    paragraphs: [
      "Heathrow is usually the longest London airport run from Leicester, so planning the pickup time properly matters more than shaving a few minutes on paper. We build enough time for motorway pressure on the M1/M25 corridor and avoid over-promising on peak-day travel.",
      "This route is common for long-haul travel, business itineraries, and family holidays with larger baggage loads. Pre-booking keeps pricing predictable and removes the stress of rail changes, long-stay parking, and early-morning terminal transfers.",
      "For arrivals, flight details help us time collection more accurately after baggage reclaim. Many customers book both outbound and return legs together so one team tracks the whole journey.",
    ],
    bullets: [
      "Useful for long-haul and time-sensitive international departures",
      "Practical timing around M1, M25, and terminal traffic peaks",
      "Fixed fares from Leicester with larger vehicle options",
      "Suitable for return airport collections with flight details",
    ],
  },
  Gatwick: {
    heading: "Gatwick transfer notes for Leicester passengers",
    paragraphs: [
      "Gatwick journeys are long-distance runs where route discipline and timing buffers are essential. We treat this as a premium distance transfer and plan for variable traffic around the southbound motorway network.",
      "This airport is popular for package holidays and European flights, so group luggage and family travel are common. Choosing the right vehicle at booking stage avoids boot-space issues on travel day.",
      "If you are comparing Heathrow vs Gatwick for price or airline, a fixed-fare quote helps you budget your full door-to-door cost, not just the flight.",
    ],
    bullets: [
      "Long-distance planning with realistic check-in timing",
      "Strong fit for family and holiday luggage requirements",
      "Clear fixed-price quoting before travel day",
      "Direct Leicester door-to-terminal service",
    ],
  },
  Stansted: {
    heading: "Stansted taxi planning from Leicester",
    paragraphs: [
      "Stansted is often chosen for low-cost and short-haul flights, especially at off-peak hours. We support early starts and late returns with pre-booked vehicles and clear pickup windows.",
      "Journey times can swing heavily on day and traffic conditions, so we plan around actual flight timing rather than optimistic map estimates. This reduces risk for first flights of the day and weekend departures.",
      "Customers use this route when they want one uninterrupted ride from home to terminal rather than managing train changes with luggage.",
    ],
    bullets: [
      "Good option for low-cost and early-hour departures",
      "Timing planned around real conditions, not best-case runs",
      "Fixed fares to avoid app surge uncertainty",
      "Straightforward return collections after landing",
    ],
  },
  Manchester: {
    heading: "Manchester airport runs from Leicester",
    paragraphs: [
      "Manchester Airport routes are frequent for leisure and northern long-haul connections. This is a substantial motorway journey where reliability and comfort matter, especially with children or multiple suitcases.",
      "We recommend pre-booking for school holidays, Friday travel, and early departures. The right lead time helps secure larger vehicles and keeps travel plans predictable.",
      "A fixed-fare transfer can often be simpler than coordinating rail timings, station changes, and onward terminal transport when travelling as a group.",
    ],
    bullets: [
      "Strong for family and group travel with larger luggage",
      "Pre-booking support during busy holiday windows",
      "Direct motorway transfer with fixed pricing",
      "Suitable for both outbound and inbound airport legs",
    ],
  },
  "East-Midlands": {
    heading: "East Midlands Airport local transfer details",
    paragraphs: [
      "East Midlands is the shortest major airport route from Leicester, which makes it ideal for quick, reliable door-to-terminal travel. Even with shorter mileage, pre-booking still matters for very early check-ins and seasonal peaks.",
      "This route is popular for business day trips, weekend breaks, and family flights where convenience is more important than parking at the airport.",
      "Because travel time is lower than London routes, customers often value punctual pickup and straightforward fixed pricing over complex planning.",
    ],
    bullets: [
      "Shortest major airport transfer route from Leicester",
      "Practical for weekend trips and business travel",
      "Fast door-to-terminal service with fixed fares",
      "Simple return pickup arrangements after arrival",
    ],
  },
  Birmingham: {
    heading: "Birmingham Airport transfer guidance",
    paragraphs: [
      "Birmingham is a high-demand airport route from Leicester and often the best balance of travel time, airline choice, and convenience. This route suits regular flyers and families who want dependable timings without London-level distance.",
      "Pre-booked transfers help avoid motorway unpredictability and airport parking queues. Fixed fares also make this route popular with business travellers and account bookings.",
      "With shorter transfer times than many alternatives, this page is built for fast quoting and dependable same-standard service on both outbound and return journeys.",
    ],
    bullets: [
      "Popular mid-distance airport option from Leicester",
      "Balanced travel time and airline access",
      "Fixed rates useful for personal and corporate trips",
      "Reliable for both departures and arrivals",
    ],
  },
}

export default function AirportRouteGuide({
  airportName,
  airportCode,
  fromPrice,
  typicalTime,
  slug,
}: AirportRouteGuideProps) {
  const content = airportCopyBySlug[slug] ?? {
    heading: `${airportName} transfer information`,
    paragraphs: [
      `This page helps you plan a Leicester to ${airportName} transfer with realistic journey timing and fixed-fare pricing.`,
      `Typical travel time is ${typicalTime}. We recommend booking in advance so your pickup time is set around check-in requirements.`,
      "Return pickups are available and can be coordinated with your flight details.",
    ],
    bullets: [
      "Fixed fares with clear pricing",
      "24/7 availability for airport runs",
      "Licensed and insured drivers",
      "Vehicle sizes to match luggage and group size",
    ],
  }

  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed space-y-5 text-base md:text-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {content.heading}
        </h2>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          Typical time on this route is <strong>{typicalTime}</strong>, with fixed fares from <strong>{fromPrice}</strong> for
          standard saloon vehicles from Leicester city centre.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          {content.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          We also provide return pickups from {airportName} ({airportCode}). Share your flight details and we can coordinate collection
          timing to reduce waiting after landing. Many customers book both directions together so the whole journey is
          planned in one go.
        </p>
        <p>
          See all airport options on our{" "}
          <Link href="/airport-transfers-leicester" className="text-cyan-700 font-medium underline hover:text-cyan-900">
            Leicester airport transfers page
          </Link>
          . If you are comparing routes, you can also view{" "}
          <Link href="/pricing/airports/Heathrow" className="text-cyan-700 font-medium underline hover:text-cyan-900">
            Heathrow
          </Link>
          ,{" "}
          <Link href="/pricing/airports/Gatwick" className="text-cyan-700 font-medium underline hover:text-cyan-900">
            Gatwick
          </Link>
          ,{" "}
          <Link href="/pricing/airports/Luton" className="text-cyan-700 font-medium underline hover:text-cyan-900">
            Luton
          </Link>
          ,{" "}
          <Link href="/pricing/airports/Stansted" className="text-cyan-700 font-medium underline hover:text-cyan-900">
            Stansted
          </Link>
          ,{" "}
          <Link href="/pricing/airports/Manchester" className="text-cyan-700 font-medium underline hover:text-cyan-900">
            Manchester
          </Link>
          , and{" "}
          <Link href="/pricing/airports/East-Midlands" className="text-cyan-700 font-medium underline hover:text-cyan-900">
            East Midlands
          </Link>
          .
        </p>
        <p className="text-sm text-gray-500">
          Page reference: <code>/pricing/airports/{slug}</code>
        </p>
      </div>
    </section>
  )
}
