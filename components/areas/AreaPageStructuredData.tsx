import JsonLd from "@/components/seo/JsonLd"
import FAQSchema from "@/components/seo/FAQSchema"
import { buildBreadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo/breadcrumbs"
import type { AreaFaq } from "@/lib/seo/areaPageFaqs"

type AreaPageStructuredDataProps = {
  breadcrumbItems: BreadcrumbItem[]
  breadcrumbPageUrl: string
  faqs: AreaFaq[]
  localBusiness?: Record<string, unknown>
}

/** Server-rendered FAQ + BreadcrumbList JSON-LD (present in raw HTML without JavaScript). */
export default function AreaPageStructuredData({
  breadcrumbItems,
  breadcrumbPageUrl,
  faqs,
  localBusiness,
}: AreaPageStructuredDataProps) {
  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd(breadcrumbItems, breadcrumbPageUrl)} />
      {localBusiness ? <JsonLd data={localBusiness} /> : null}
      <FAQSchema faqs={faqs} />
    </>
  )
}
