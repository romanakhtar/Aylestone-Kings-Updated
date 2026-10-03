import type { Metadata } from "next"
import { buildCanonical } from "@/lib/seo/canonical"

type AirportSeoConfig = {
  airportName: string
  airportCode: string
  slug: string
  fromPrice: string
  /** Full title override (keep under ~60 characters for Google display where possible). */
  title?: string
  /** Meta description override (aim for a clear benefit + CTA, ~150–160 characters). */
  description?: string
  /** Override canonical when two route URLs share the same intent. */
  canonicalPath?: string
  keywords?: string[]
}

export function buildAirportMetadata({
  airportName,
  airportCode,
  slug,
  fromPrice,
  title: titleOverride,
  description: descriptionOverride,
  canonicalPath,
  keywords: keywordOverride,
}: AirportSeoConfig): Metadata {
  const route = `/pricing/airports/${slug}`
  const canonical = buildCanonical(canonicalPath ?? route)
  const title =
    titleOverride ??
    `Leicester to ${airportName} Airport Taxi | From ${fromPrice} | Book 24/7`
  const description =
    descriptionOverride ??
    `Book a Leicester to ${airportName} Airport taxi (${airportCode}) from ${fromPrice}. Fixed fares, licensed drivers, flight tracking, door-to-door across Leicestershire. See your price online or call 0116 2338888 — 24/7.`

  return {
    title,
    description,
    keywords: keywordOverride ?? [
      `Leicester to ${airportName} Airport taxi`,
      `${airportName} airport transfer from Leicester`,
      `taxi from Leicester to ${airportName} Airport`,
      `${airportCode} taxi from Leicester`,
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Aylestone Taxis",
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export function buildAirportFaqs({ airportName, fromPrice }: Pick<AirportSeoConfig, "airportName" | "fromPrice">) {
  return [
    {
      question: `How much is a taxi from Leicester to ${airportName} Airport?`,
      answer: `Fixed fares start from ${fromPrice} from Leicester city centre for a standard saloon. Final quotes depend on pickup postcode, time, and vehicle size.`,
    },
    {
      question: `Do you provide 24/7 transfers to ${airportName} Airport?`,
      answer:
        "Yes. We run day and night airport transfers, including early departures and late arrivals, with pre-booked fixed pricing.",
    },
    {
      question: `Can you track my flight for airport pickups?`,
      answer:
        "Yes. Share your flight details when booking and we can adjust pickup timing for delays to make arrivals smoother.",
    },
    {
      question: `Can I book return transfers between Leicester and the airport?`,
      answer:
        "Yes. We can book both outbound and return journeys in one booking, with the right vehicle for your passengers and luggage.",
    },
  ]
}
