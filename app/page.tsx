import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"
import JsonLd from "@/components/seo/JsonLd"
import { getLocalBusinessJsonLd } from "@/lib/seo/siteJsonLd"

export const metadata: Metadata = {
  title: "Taxi Leicester | Aylestone Taxis | Book Online 0116 2338888",
  description:
    "Taxi Leicester & Leicestershire: Aylestone Taxis (Aylestone Kings) since 1995. Leicester taxis and cabs — call 0116 2338888 for instant quotes, airport transfers, and flat fares 24/7.",
}

export default function Home() {
  return (
    <>
      <JsonLd data={getLocalBusinessJsonLd()} />
      <HomePageClient />
    </>
  )
}
