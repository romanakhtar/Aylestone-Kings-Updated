import JsonLd from "@/components/seo/JsonLd"

type FAQItem = {
  question: string
  answer: string
}

export default function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null

  const normalize = (value: string) => value.replace(/\s+/g, " ").trim().toLowerCase()
  const seen = new Set<string>()
  const uniqueFaqs = faqs.filter((f) => {
    const question = normalize(f.question ?? "")
    const answer = normalize(f.answer ?? "")
    if (!question || !answer) return false
    const key = `${question}::${answer}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  if (uniqueFaqs.length === 0) return null

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: uniqueFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  }

  return <JsonLd data={faqJsonLd} />
}

