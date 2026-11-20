import { PHONE_DISPLAY, WHATSAPP_DISPLAY } from "@/lib/data"

/**
 * Homepage FAQs — single source for both the visible accordion (HomeFAQSection)
 * and the FAQPage JSON-LD (HomePageClient), so the schema always matches the page.
 */
export const homeFaqs = [
  {
    question: "How do I book a taxi in Leicester?",
    answer: `Call ${PHONE_DISPLAY}, WhatsApp ${WHATSAPP_DISPLAY}, or book online or in our app. You see a fixed fare before you confirm.`,
  },
  {
    question: "Are your drivers licensed and DBS-checked?",
    answer:
      "Yes. Every driver is licensed by Leicester City Council or Wolverhampton City Council and DBS-checked, and vehicles are regularly inspected.",
  },
  {
    question: "Do you cover towns outside Leicester?",
    answer:
      "Yes. We cover the city and towns and villages across Leicestershire, including Market Harborough, Hinckley, Loughborough and Coalville, plus airport transfers.",
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
]
