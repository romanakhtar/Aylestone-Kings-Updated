type FAQItem = {
  question: string
  answer: string
}

export default function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />
  )
}

