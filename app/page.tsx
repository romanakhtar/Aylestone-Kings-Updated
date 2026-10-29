import type { Metadata } from "next"
import { buildCanonical } from "@/lib/seo/canonical"
import HomePageClient from "./HomePageClient"

const canonical = buildCanonical("/")

export const metadata: Metadata = {
  title: "Aylestone Taxis | Leicester Cabs & Airport Transfers",
  description:
    "Aylestone Taxis has served Leicester since 1995 — local cabs, fixed-fare airport transfers and 24/7 booking by phone, app or WhatsApp. Call 0116 233 8888.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Aylestone Taxis | Leicester Cabs & Airport Transfers",
    description:
      "Aylestone Taxis has served Leicester since 1995 — local cabs, fixed-fare airport transfers and 24/7 booking by phone, app or WhatsApp.",
    url: canonical,
    images: [
      {
        url: "https://aylestone-taxis.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aylestone Taxis — Leicester taxis and airport transfers, fixed fares, 24/7",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#hero-heading", "#trust-bar"],
            },
          }),
        }}
      />
      <HomePageClient />
    </>
  )
}
