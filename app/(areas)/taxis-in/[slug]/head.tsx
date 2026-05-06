const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "@id": "https://aylestone-taxis.co.uk/#localbusiness",
  name: "Aylestone Taxis Leicester",
  url: "https://aylestone-taxis.co.uk",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.7,
    reviewCount: 107,
    bestRating: 5,
    worstRating: 1,
  },
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
