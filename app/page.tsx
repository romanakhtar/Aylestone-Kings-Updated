import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Leicester Taxi | Fixed Fares, No Surge | Aylestone Taxis",
  description:
    "Leicester taxis & airport transfers since 1995. Fixed fares, no surge, licensed drivers, 24/7. Book online or call 0116 233 8888.",
  openGraph: {
    title: "Leicester Taxi | Fixed Fares, No Surge | Aylestone Taxis",
    description:
      "Leicester taxis & airport transfers since 1995. Fixed fares, no surge, licensed drivers, 24/7. Book online or call 0116 233 8888.",
    url: "https://aylestone-taxis.co.uk",
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
