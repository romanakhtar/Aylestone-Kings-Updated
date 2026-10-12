import type { Metadata } from "next"
import { buildCanonical } from "@/lib/seo/canonical"
import { OG_IMAGE, OG_IMAGE_URL } from "@/lib/seo/openGraph"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"

const canonical = buildCanonical("/contact")

export const metadata: Metadata = {
  title: "Contact Aylestone Taxis Leicester | 0116 2338888",
  description:
    "Contact Aylestone Taxis on Aylestone Road, Leicester (LE2): phone, WhatsApp, email & web booking. Airport & local taxis 24/7 — call 0116 2338888.",
  alternates: {
    canonical,
  },
  openGraph: {
    images: [OG_IMAGE],
    title: "Contact Aylestone Taxis | Aylestone Road Leicester",
    description: "Book or enquire: 24/7 Leicester taxi service. Call 0116 2338888 or use our online form.",
    url: canonical,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Home", href: "/" }, { name: "Contact" }]}
        pageUrl={buildCanonical("/contact")}
      />
      {children}
    </>
  )
}

