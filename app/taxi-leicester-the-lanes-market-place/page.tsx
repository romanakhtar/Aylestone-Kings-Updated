import type { Metadata } from "next"
import ClusterPage from "@/components/nights-out/ClusterPage"
import { buildClusterMetadata } from "@/lib/cityCentreNightsOut"
import { finalizeMetadata } from "@/lib/seo/pageMetadata"

const SLUG = "taxi-leicester-the-lanes-market-place" as const

export const metadata: Metadata = finalizeMetadata(buildClusterMetadata(SLUG))

export default function TaxiLeicesterTheLanesMarketPlacePage() {
  return <ClusterPage slug={SLUG} />
}
