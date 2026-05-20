import { SITE_ORIGIN } from "@/lib/seo/siteJsonLd"

export type BreadcrumbItem = {
  name: string
  href?: string
}

/** Hub for local area pages (lists neighbourhoods we serve) */
export const AREAS_HUB_PATH = "/taxi-leicester"

/** Ensures BreadcrumbList `item` values are always absolute URLs (required by Google). */
export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl
  }
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`
  return `${SITE_ORIGIN}${path}`
}

export function buildBreadcrumbJsonLd(
  items: BreadcrumbItem[],
  pageUrl: string
): Record<string, unknown> {
  const canonicalPageUrl = absoluteUrl(pageUrl)

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1
      const itemUrl = isLast
        ? canonicalPageUrl
        : item.href
          ? absoluteUrl(item.href)
          : canonicalPageUrl

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: itemUrl,
      }
    }),
  }
}

export function areaPageBreadcrumbs(
  currentLabel: string,
  slug: string
): { items: BreadcrumbItem[]; pageUrl: string } {
  return {
    items: [
      { name: "Home", href: "/" },
      { name: "Areas", href: AREAS_HUB_PATH },
      { name: currentLabel },
    ],
    pageUrl: absoluteUrl(`/taxis-in/${slug}`),
  }
}

export function airportPricingBreadcrumbs(
  pageName: string,
  path: string
): { items: BreadcrumbItem[]; pageUrl: string } {
  return {
    items: [
      { name: "Home", href: "/" },
      { name: "Airport Transfers", href: "/airport-transfers-leicester" },
      { name: pageName },
    ],
    pageUrl: absoluteUrl(path),
  }
}
