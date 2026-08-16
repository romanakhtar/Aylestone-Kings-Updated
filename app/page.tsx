import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"
import JsonLd from "@/components/seo/JsonLd"
import { getLocalBusinessJsonLd } from "@/lib/seo/siteJsonLd"

export const metadata: Metadata = {
  title: "Leicester Taxi | Fixed Fares, No Surge | Aylestone Taxis",
  description:
    "Leicester taxis & airport transfers since 1995. Fixed fares, no surge, licensed drivers, 24/7. Book online or call 0116 233 8888.",
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
