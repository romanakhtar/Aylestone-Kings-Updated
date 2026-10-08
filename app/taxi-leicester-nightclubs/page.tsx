import type { Metadata } from "next"
import ClusterPage from "@/components/nights-out/ClusterPage"
import { buildClusterMetadata } from "@/lib/cityCentreNightsOut"

const SLUG = "taxi-leicester-nightclubs" as const

export const metadata: Metadata = buildClusterMetadata(SLUG)

export default function TaxiLeicesterNightclubsPage() {
  return <ClusterPage slug={SLUG} />
}
