"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { AreaFaq } from "@/lib/seo/areaPageFaqs"

type AreaPageFAQAccordionProps = {
  areaPlain: string
  faqs: AreaFaq[]
}

export default function AreaPageFAQAccordion({ areaPlain, faqs }: AreaPageFAQAccordionProps) {
  if (faqs.length === 0) return null

  return (
    <div id="faqs" className="rounded-lg border border-gray-200 p-5">
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQs about taxi in {areaPlain}</h2>
      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`area-faq-${index + 1}`}
            className="border border-gray-100 rounded-md px-4 py-1"
          >
            <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
