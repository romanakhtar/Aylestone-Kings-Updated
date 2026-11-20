"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { homeFaqs } from "@/components/home/homeFaqs"
export default function HomeFAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about booking a taxi in Leicester and Leicestershire
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {homeFaqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index + 1}`}
              className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm halloween-card"
            >
              <AccordionTrigger className="text-left font-semibold text-[#0F0D3E] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
