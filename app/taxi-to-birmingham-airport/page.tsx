import type { Metadata } from "next"
import BirminghamAirportContent from "../pricing/airports/Birmingham/BirminghamAirportContent"
import { birminghamPricingFaqs } from "@/lib/seo/airportLeicesterFacts"
import JsonLd from "@/components/seo/JsonLd"
import { getTaxiServiceJsonLd } from "@/lib/seo/siteJsonLd"

const CANONICAL_URL = "https://aylestone-taxis.co.uk/taxi-to-birmingham-airport"

export const metadata: Metadata = {
  title: "Birmingham Airport Taxi Leicester | Fixed £60 | 24/7",
  description:
    "Fixed-price taxi Leicester to Birmingham Airport from £60. Licensed drivers, flight tracking, no surge pricing. Book online or call 0116 233 8888.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Birmingham Airport Taxi Leicester | Fixed £60 | 24/7",
    description:
      "Fixed-price taxi Leicester to Birmingham Airport from £60. Licensed drivers, flight tracking, no surge pricing. Book online or call 0116 233 8888.",
    url: CANONICAL_URL,
    siteName: "Aylestone Taxis",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birmingham Airport Taxi Leicester | Fixed £60 | 24/7",
    description:
      "Fixed-price taxi Leicester to Birmingham Airport from £60. Licensed drivers, flight tracking, no surge pricing. Book online or call 0116 233 8888.",
  },
}

export default function TaxiToBirminghamAirportPage() {
  const serviceJsonLd = getTaxiServiceJsonLd({
    name: "Taxi to Birmingham Airport (BHX) from Leicester",
    description:
      "Fixed-price private hire taxi transfers from Leicester and Leicestershire to Birmingham Airport (BHX). " +
      "Approximately 38–42 miles via M69, M6, and M42; terminal forecourt drop-off; saloon and MPV options.",
    url: CANONICAL_URL,
    serviceType: "Airport taxi transfer",
    offers: [
      {
        price: "60",
        name: "Standard saloon (1–4 passengers)",
        description: "Leicester city centre to Birmingham Airport (BHX) — from £60",
        url: CANONICAL_URL,
      },
      {
        price: "80",
        name: "MPV / larger vehicle (6–8 passengers)",
        description: "Leicester city centre to Birmingham Airport (BHX) — from £80",
        url: CANONICAL_URL,
      },
    ],
  })

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <BirminghamAirportContent faqs={birminghamPricingFaqs} />
    </>
  )
}
