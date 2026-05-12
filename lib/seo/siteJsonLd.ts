import { contactInfo, siteData } from "@/lib/data"

/** Canonical site origin (must match metadata / sitemap). */
export const SITE_ORIGIN = "https://aylestone-taxis.co.uk"

/** Stable @id for the business entity (used across Service provider references). */
export const LOCAL_BUSINESS_ID = `${SITE_ORIGIN}/#localbusiness`

/** Approximate coordinates for 753A Aylestone Rd, Leicester LE2 8TG (GeoCoordinates for LocalBusiness). */
const OFFICE_GEO = {
  latitude: 52.6018,
  longitude: -1.1516,
}

function toUkE164(phone: string): string {
  const digits = phone.replace(/\D/g, "")
  if (digits.startsWith("44")) return `+${digits}`
  if (digits.startsWith("0")) return `+44${digits.slice(1)}`
  return `+44${digits}`
}

function postalAddress(): Record<string, unknown> {
  return {
    "@type": "PostalAddress",
    streetAddress: contactInfo.address.street,
    addressLocality: contactInfo.address.city,
    postalCode: contactInfo.address.postcode,
    addressCountry: "GB",
  }
}

/**
 * LocalBusiness JSON-LD for the Leicester office (homepage, corporate, etc.).
 * Includes address, phone, email, 24/7 opening hours, and geo coordinates.
 */
export function getLocalBusinessJsonLd(): Record<string, unknown> {
  const desc = siteData.company.description.replace(/\s+/g, " ").trim()
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: siteData.company.name,
    alternateName: "Aylestone Taxis",
    description: desc.length > 500 ? `${desc.slice(0, 497)}...` : desc,
    url: SITE_ORIGIN,
    telephone: toUkE164(siteData.company.phone),
    email: siteData.company.email,
    image: `${SITE_ORIGIN}/white-modern-taxi-side.webp`,
    priceRange: "££",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: OFFICE_GEO.latitude,
      longitude: OFFICE_GEO.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "24:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Leicester" },
      { "@type": "AdministrativeArea", name: "Leicestershire" },
    ],
  }
}

type ServiceOfferInput = {
  /** Numeric string for schema.org Offer.price (e.g. "60"). */
  price: string
  priceCurrency?: string
  name: string
  description?: string
  url: string
}

/**
 * Taxi / transfer Service JSON-LD with Offer catalogue and embedded provider summary.
 */
export function getTaxiServiceJsonLd(opts: {
  name: string
  description: string
  url: string
  serviceType?: string
  offers: ServiceOfferInput[]
}): Record<string, unknown> {
  /** Full provider node so Service validates without a separate LocalBusiness @graph entry. */
  const provider = {
    "@type": "LocalBusiness",
    name: siteData.company.name,
    alternateName: "Aylestone Taxis",
    url: SITE_ORIGIN,
    telephone: toUkE164(siteData.company.phone),
    email: siteData.company.email,
    address: postalAddress(),
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description.replace(/\s+/g, " ").trim(),
    url: opts.url,
    serviceType: opts.serviceType ?? "Airport taxi transfer",
    provider,
    areaServed: [
      { "@type": "City", name: "Leicester" },
      { "@type": "AdministrativeArea", name: "Leicestershire" },
    ],
    offers: opts.offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      description: o.description,
      price: o.price,
      priceCurrency: o.priceCurrency ?? "GBP",
      url: o.url,
      availability: "https://schema.org/InStock",
    })),
  }
}

/**
 * Corporate B2B service + same LocalBusiness @id (single @graph for one script tag).
 */
export function getCorporateServiceGraphJsonLd(opts: {
  serviceUrl: string
  serviceName: string
  serviceDescription: string
}): Record<string, unknown> {
  const root = getLocalBusinessJsonLd()
  const { ["@context"]: _ctx, ...localBusinessNode } = root as Record<string, unknown> & {
    "@context": string
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessNode,
      {
        "@type": "Service",
        "@id": `${opts.serviceUrl}#corporate-service`,
        name: opts.serviceName,
        description: opts.serviceDescription.replace(/\s+/g, " ").trim(),
        url: opts.serviceUrl,
        serviceType: "Corporate taxi account",
        provider: { "@id": LOCAL_BUSINESS_ID },
        areaServed: [
          { "@type": "City", name: "Leicester" },
          { "@type": "AdministrativeArea", name: "Leicestershire" },
        ],
      },
    ],
  }
}
