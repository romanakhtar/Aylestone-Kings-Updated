import BirminghamAirportContent from "./BirminghamAirportContent"
import { birminghamPricingFaqs } from "@/lib/seo/airportLeicesterFacts"
import { buildAirportMetadata } from "@/lib/seo/airportSeo"
import { PHONE_DISPLAY } from "@/lib/data"
import { finalizeMetadata } from "@/lib/seo/pageMetadata"

export const metadata = finalizeMetadata(buildAirportMetadata({
  airportName: "Birmingham",
  airportCode: "BHX",
  slug: "Birmingham",
  fromPrice: "£60",
  title: "Leicester to Birmingham Airport Taxi | From £60",
  description:
    `Leicester to Birmingham Airport (BHX): ~38 mi, ~55–75 min via M69/M6. One terminal, T1/T2 forecourt. Fixed from £60. Book or call ${PHONE_DISPLAY} 24/7.`,
  canonicalPath: "/taxi-to-birmingham-airport",
}))

export default function BirminghamPage() {
  return <BirminghamAirportContent faqs={birminghamPricingFaqs} />
}
