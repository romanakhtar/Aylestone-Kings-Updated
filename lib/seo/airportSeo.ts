import type { Metadata } from "next"

type AirportSeoConfig = {
  airportName: string
  airportCode: string
  slug: string
  fromPrice: string
}

const siteUrl = "https://aylestone-taxis.co.uk"

export function buildAirportMetadata({
  airportName,
  airportCode,
  slug,
  fromPrice,
}: AirportSeoConfig): Metadata {
  const route = `/pricing/airports/${slug}`
  const title = `Leicester to ${airportName} Airport Taxi | From ${fromPrice} | Book 24/7`
  const description = `Book a Leicester to ${airportName} Airport taxi (${airportCode}) from ${fromPrice}. Fixed fares, licensed drivers, flight tracking, door-to-door across Leicestershire. See your price online or call 0116 2338888 — 24/7.`

  return {
    title,
    description,
    keywords: [
      `Leicester to ${airportName} Airport taxi`,
      `${airportName} airport transfer Leicester`,
      `${airportCode} taxi Leicester`,
      `${airportName} fixed fare taxi`,
      `${airportName} airport pickup Leicester`,
    ],
    alternates: {
      canonical: `${siteUrl}${route}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${route}`,
      siteName: "Aylestone Kings",
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
