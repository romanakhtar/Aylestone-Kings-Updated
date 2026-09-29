"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const homeFaqs = [
  {
    question: "How do I book a taxi Leicester passengers use every day?",
    answer:
      "Book Leicester taxis and Leicester cabs online in seconds, call 0116 233 8888, or WhatsApp us. You see a fixed fare before you confirm.",
  },
  {
    question: "Are Leicester cabs and Leicester taxis the same service?",
    answer:
      "Yes. Leicester cabs, Leicester taxi and taxi Leicester searches all point to the same Aylestone Taxis service — licensed drivers, fixed fares, no surge.",
  },
  {
    question: "Do you cover Leicestershire taxis outside the city?",
    answer:
      "Yes. Leicestershire taxis with Aylestone Taxis cover towns and villages across the county, including Hamilton, Beaumont Leys, Fosse Park, Kirby Muxloe and Market Harborough, plus airport transfers.",
  },
  {
    question: "Are you available 24/7?",
    answer: "Yes, we operate 24/7 including weekends and bank holidays.",
  },
  {
    question: "Do you offer fixed prices?",
    answer: "Yes, you'll see the price before confirming your booking.",
  },
  {
    question: "Can I pre-book a taxi in advance?",
    answer: "Yes, pre-booking is available and recommended during busy times.",
  },
  {
    question: "Do you provide airport transfers?",
    answer: "Yes, we provide fixed-price airport transfers to all major UK airports.",
  },
  {
    question: "Do you have larger vehicles for groups or luggage?",
    answer: "Yes, you can choose the appropriate vehicle type during booking, subject to availability.",
  },
] as const

export default function HomeFAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about Leicester taxis, Leicester cabs and Leicestershire taxis
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {homeFaqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index + 1}`}
              className="bg-white border border-gray-200 rounded-lg px-6 py-2 shadow-sm"
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
