import BirminghamAirportContent from "./BirminghamAirportContent"
import FAQSchema from "@/components/seo/FAQSchema"
import { buildAirportFaqs, buildAirportMetadata } from "@/lib/seo/airportSeo"

export const metadata = buildAirportMetadata({
  airportName: "Birmingham",
  airportCode: "BHX",
  slug: "Birmingham",
  fromPrice: "£60",
})

const faqs = buildAirportFaqs({ airportName: "Birmingham", fromPrice: "£60" })

export default function BirminghamPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BirminghamAirportContent />
    </>
  )
}
