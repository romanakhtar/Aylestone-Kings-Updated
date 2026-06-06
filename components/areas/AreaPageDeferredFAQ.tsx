"use client"

import dynamic from "next/dynamic"
import type { AreaFaq } from "@/lib/seo/areaPageFaqs"

const AreaPageFAQAccordion = dynamic(() => import("@/components/areas/AreaPageFAQAccordion"), { ssr: false })

type AreaPageDeferredFAQProps = {
  areaPlain: string
  faqs: AreaFaq[]
}

export default function AreaPageDeferredFAQ({ areaPlain, faqs }: AreaPageDeferredFAQProps) {
  return <AreaPageFAQAccordion areaPlain={areaPlain} faqs={faqs} />
}
