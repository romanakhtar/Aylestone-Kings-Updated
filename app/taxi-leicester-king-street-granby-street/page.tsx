import type { Metadata } from "next"
import ClusterPage from "@/components/nights-out/ClusterPage"
import { buildClusterMetadata } from "@/lib/cityCentreNightsOut"

const SLUG = "taxi-leicester-king-street-granby-street" as const

export const metadata: Metadata = buildClusterMetadata(SLUG)

export default function TaxiLeicesterKingStreetGranbyStreetPage() {
  return <ClusterPage slug={SLUG} />
}
