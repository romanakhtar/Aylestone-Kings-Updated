import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Aylestone Taxis Leicester | 24/7 Book Online | 0116 2338888",
  description:
    "Leicester's trusted taxi service since 1995. Instant online booking, airport transfers, flat fares. Available 24/7. Book your taxi in seconds — no hidden charges",
}

export default function Home() {
  return <HomePageClient />
}
