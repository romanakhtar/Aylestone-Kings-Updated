import type { Metadata } from "next"
import BirminghamAirportContent from "../pricing/airports/Birmingham/BirminghamAirportContent"
import { birminghamPricingFaqs } from "@/lib/seo/airportLeicesterFacts"

const CANONICAL_URL = "https://aylestone-taxis.co.uk/taxi-to-birmingham-airport"

export const metadata: Metadata = {
  title: "Taxi to Birmingham Airport from £60 | Leicester to BHX | Book",
  description:
    "Taxi to Birmingham Airport (BHX) from Leicester: fixed from £60, ~38 miles, ~1 hour via M69/M6. All airlines, T1/T2 drop-off zones, 24/7. Instant quote online — or call 0116 2338888 (no surge pricing).",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Taxi to Birmingham Airport from £60 | Leicester | Aylestone Taxis",
    description:
      "Fixed-price Leicester to BHX transfers from £60. Licensed drivers, terminal forecourt drop-off, flight-tracked returns.",
    url: CANONICAL_URL,
    siteName: "Aylestone Kings",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi to Birmingham Airport from £60 | Leicester",
    description: "Fixed fares to BHX. Book online or call 0116 2338888 — 24/7.",
  },
}

export default function TaxiToBirminghamAirportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Taxi to Birmingham Airport (BHX) from Leicester",
    areaServed: ["Leicester", "Leicestershire"],
    provider: {
      "@type": "LocalBusiness",
      name: "Aylestone Taxis",
      url: "https://aylestone-taxis.co.uk",
      telephone: "+441162338888",
    },
    offers: [
      {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: "60",
        description: "Standard Saloon — from Leicester to Birmingham Airport (BHX)",
        url: CANONICAL_URL,
        availability: "https://schema.org/InStock",
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BirminghamAirportContent faqs={birminghamPricingFaqs} />
    </>
  )
}
