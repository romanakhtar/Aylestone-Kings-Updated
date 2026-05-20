import PageBreadcrumbs from "@/components/PageBreadcrumbs"
import { airportPricingBreadcrumbs } from "@/lib/seo/breadcrumbs"

type Props = {
  pageName: string
  path: string
}

export default function AirportPricingBreadcrumbs({ pageName, path }: Props) {
  const { items, pageUrl } = airportPricingBreadcrumbs(pageName, path)
  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <PageBreadcrumbs items={items} pageUrl={pageUrl} />
      </div>
    </div>
  )
}
