import { getAggregateRatingJsonLd } from "@/lib/seo/siteJsonLd"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "@id": "https://aylestone-taxis.co.uk/#localbusiness",
  name: "Aylestone Taxis Leicester",
  url: "https://aylestone-taxis.co.uk",
  aggregateRating: getAggregateRatingJsonLd(),
}

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
