import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

export type PickupAreaLink = { label: string; href: string }

export const AIRPORT_PICKUP_AREAS: PickupAreaLink[] = [
  { label: "Oadby", href: "/taxis-in/oadby" },
  { label: "Wigston", href: "/taxis-in/wigston" },
  { label: "Aylestone", href: "/taxis-in/aylestone" },
  { label: "Leicester City Centre", href: "/taxis-in/leicester-city-centre" },
  { label: "Beaumont Leys", href: "/taxis-in/beaumont-leys" },
]

/** North Leicester / Leicestershire pickups — better aligned with M1 routes to MAN */
export const MANCHESTER_PICKUP_AREAS: PickupAreaLink[] = [
  { label: "Loughborough", href: "/taxis-in/loughborough" },
  { label: "Syston", href: "/taxis-in/syston" },
  { label: "Aylestone", href: "/taxis-in/aylestone" },
  { label: "Leicester City Centre", href: "/taxis-in/leicester-city-centre" },
  { label: "Beaumont Leys", href: "/taxis-in/beaumont-leys" },
]

function getPickupAreas(airportName: string): PickupAreaLink[] {
  if (airportName === "Manchester Airport") return MANCHESTER_PICKUP_AREAS
  return AIRPORT_PICKUP_AREAS
}

type AirportRelatedLinksProps = {
  /** e.g. "Heathrow Airport", "East Midlands Airport", "Heathrow Terminal 5" */
  airportName: string
  className?: string
}

export default function AirportRelatedLinks({
  airportName,
  className = "",
}: AirportRelatedLinksProps) {
  const pickupAreas = getPickupAreas(airportName)

  return (
    <section
      className={`py-16 bg-[#F4F5F7] border-t border-gray-200 ${className}`.trim()}
      aria-labelledby="airport-related-links-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="airport-related-links-heading"
          className="text-2xl md:text-3xl font-bold text-[#0F0D3E] mb-2 text-center"
        >
          Related pages
        </h2>
        <p className="text-[#2E3C44] text-center max-w-2xl mx-auto mb-10">
          Explore airport transfer guides, pricing, our homepage, and local pickup areas for{" "}
          {airportName} journeys from Leicester.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Link
            href="/airport-transfers-leicester"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-[#0F0D3E] text-sm font-medium hover:border-[#06A0A6] hover:text-[#06A0A6] shadow-sm"
          >
            Leicester airport transfer guide
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-[#0F0D3E] text-sm font-medium hover:border-[#06A0A6] hover:text-[#06A0A6] shadow-sm"
          >
            All airport taxi prices
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-[#0F0D3E] text-sm font-medium hover:border-[#06A0A6] hover:text-[#06A0A6] shadow-sm"
          >
            Aylestone Taxis homepage
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-[#0F0D3E] mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[#06A0A6]" aria-hidden />
            Pickup areas for {airportName}
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {pickupAreas.map((area) => (
              <li key={area.href}>
                <Link
                  href={area.href}
                  className="flex items-center gap-2 text-[#06A0A6] hover:text-[#0F0D3E] font-medium text-sm sm:text-base hover:underline underline-offset-2"
                >
                  <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  Taxi from {area.label} to {airportName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
