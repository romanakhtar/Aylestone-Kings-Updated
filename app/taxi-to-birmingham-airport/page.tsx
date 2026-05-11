import type { Metadata } from "next"
import BirminghamAirportContent from "../pricing/airports/Birmingham/BirminghamAirportContent"

const CANONICAL_URL = "https://aylestone-taxis.co.uk/taxi-to-birmingham-airport"

export const metadata: Metadata = {
  title: "Taxi to Birmingham Airport (BHX) from Leicester | From £60",
  description:
    "Taxi to Birmingham Airport from Leicester — how much? Fixed fares from £60 (saloon, confirmed at booking). Leicester to Birmingham airport taxi 24/7. Book online or call 0116 2338888.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Taxi to Birmingham Airport from Leicester | Aylestone Taxis",
    description: "Fixed fares to BHX from Leicester. Book online or call 0116 2338888 — 24/7.",
    url: CANONICAL_URL,
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
      <BirminghamAirportContent />
    </>
  )
}

