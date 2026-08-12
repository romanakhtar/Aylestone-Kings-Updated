"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FAQItem = {
  question: string
  answer: string
}

type BlogFAQSectionProps = {
  faqs: FAQItem[]
}

export default function BlogFAQSection({ faqs }: BlogFAQSectionProps) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null

  return (
    <section className="py-16 bg-[#E4E4E4] border-t border-[#E4E4E4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
            FAQs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index + 1}`}
              className="bg-white border border-[#E4E4E4] rounded-lg px-6 py-2 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-[#0F0D3E] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#2E3C44] leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
