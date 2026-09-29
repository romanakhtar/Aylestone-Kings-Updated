import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Taxi Leicester | Leicester Cabs & Taxis | Aylestone",
  description:
    "Book Leicester taxis, Leicester cabs and Leicestershire taxis 24/7. Fixed fares, no surge, licensed drivers. Call 0116 233 8888 or book online.",
  keywords:
    "Taxi Leicester, Leicester taxi, Leicester taxis, Leicester cabs, Leicester cab, Leicestershire taxis, Leicestershire taxi, Aylestone Taxis",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/",
  },
  openGraph: {
    title: "Taxi Leicester | Leicester Cabs & Taxis | Aylestone",
    description:
      "Book Leicester taxis, Leicester cabs and Leicestershire taxis 24/7. Fixed fares, no surge, licensed drivers. Call 0116 233 8888 or book online.",
    url: "https://aylestone-taxis.co.uk/",
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
