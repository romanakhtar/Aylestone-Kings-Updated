import BirminghamAirportContent from "./BirminghamAirportContent"
import { birminghamPricingFaqs } from "@/lib/seo/airportLeicesterFacts"
import { buildAirportMetadata } from "@/lib/seo/airportSeo"

export const metadata = buildAirportMetadata({
  airportName: "Birmingham",
  airportCode: "BHX",
  slug: "Birmingham",
  fromPrice: "£60",
  title: "Birmingham Airport taxi Leicester | From £60 | BHX terminals",
  description:
    "Leicester to Birmingham Airport (BHX): ~38 mi, ~55–75 min via M69/M6. One terminal, T1/T2 forecourt zones. Fixed from £60. Emirates, KLM, Jet2 — book or call 0116 2338888 24/7.",
})

export default function BirminghamPage() {
  return <BirminghamAirportContent faqs={birminghamPricingFaqs} />
}
