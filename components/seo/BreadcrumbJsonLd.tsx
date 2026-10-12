import JsonLd from "@/components/seo/JsonLd"
import { buildBreadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo/breadcrumbs"

/**
 * BreadcrumbList structured data with no visible markup.
 *
 * Area pages use `PageBreadcrumbs`, which renders a visible trail as well.
 * Static service pages were not built with a breadcrumb row in the design, so
 * this adds the schema alone — enough for Google to show a breadcrumb trail in
 * place of the bare URL, without changing any page layout.
 */
export default function BreadcrumbJsonLd({
  items,
  pageUrl,
}: {
  items: BreadcrumbItem[]
  pageUrl: string
}) {
  return <JsonLd data={buildBreadcrumbJsonLd(items, pageUrl)} />
}
