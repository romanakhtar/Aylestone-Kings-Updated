import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Taxi Leicester | Aylestone Taxis | Book Online 0116 2338888",
  description:
    "Taxi Leicester & Leicestershire: Aylestone Taxis (Aylestone Kings) since 1995. Leicester taxi number 0116 2338888 — instant quotes, airport transfers, local trips, flat fares 24/7.",
}

export default function Home() {
  return <HomePageClient />
}
