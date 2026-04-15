import type { Metadata } from "next"
import BirminghamAirportContent from "../pricing/airports/Birmingham/BirminghamAirportContent"

const CANONICAL_URL = "https://aylestone-taxis.co.uk/taxi-to-birmingham-airport"

export const metadata: Metadata = {
  title: "Taxi to Birmingham Airport (BHX) from Leicester | Fixed Price from £60 | 24/7",
  description:
    "Book a taxi to Birmingham Airport (BHX) from Leicester with fixed prices from £60. 24/7 transfers, licensed drivers, flight-friendly pickup times, and no hidden charges.",
  alternates: {
    canonical: CANONICAL_URL,
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

