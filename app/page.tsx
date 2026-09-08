import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"
import JsonLd from "@/components/seo/JsonLd"
import { getLocalBusinessJsonLd } from "@/lib/seo/siteJsonLd"

export const metadata: Metadata = {
  title: "Aylestone Taxis Leicester — Fixed Fares, Book 24/7 | 0116 233 8888",
  description:
    "Leicester taxis & airport transfers since 1995. Fixed fares, no surge, licensed drivers, 24/7. Book online or call 0116 233 8888.",
  openGraph: {
    title: "Aylestone Taxis Leicester — Fixed Fares, Book 24/7 | 0116 233 8888",
    description:
      "Leicester taxis & airport transfers since 1995. Fixed fares, no surge, licensed drivers, 24/7. Book online or call 0116 233 8888.",
    url: "https://aylestone-taxis.co.uk",
  },
}

export default function Home() {
  return (
    <>
      <JsonLd data={getLocalBusinessJsonLd()} />
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
