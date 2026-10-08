import type { CityCentreVenue } from "@/lib/data"

/**
 * Venue listing used by both the hub and the cluster pages.
 *
 * Plain markup on purpose: venues are other businesses, so they are not marked
 * up as LocalBusiness or Place anywhere on these pages.
 */
export default function VenueList({ venues }: { venues: CityCentreVenue[] }) {
  if (venues.length === 0) return null

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {venues.map((venue) => (
        <li
          key={`${venue.name}-${venue.postcode}`}
          className="rounded-xl border border-gray-200 bg-white p-5 halloween-card"
        >
          <h3 className="text-lg font-semibold text-[#0F0D3E]">{venue.name}</h3>
          <p className="mt-1 text-sm font-medium text-[#06A0A6]">
            {venue.address}, {venue.postcode}
          </p>
          <p className="mt-2 text-[#2E3C44] leading-relaxed">{venue.note}</p>
        </li>
      ))}
    </ul>
  )
}
