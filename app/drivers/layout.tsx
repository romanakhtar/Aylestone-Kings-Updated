import type { Metadata } from 'next'
import { buildCanonical } from '@/lib/seo/canonical'
import { OG_IMAGE, OG_IMAGE_URL } from "@/lib/seo/openGraph"
import { finalizeMetadata } from "@/lib/seo/pageMetadata"

const canonical = buildCanonical("/drivers")

export const metadata: Metadata = finalizeMetadata({
  title: 'Self-Employed Taxi Driver Jobs Leicester | Apply Now',
  description: 'Drive with Aylestone Taxis in Leicester: flexible hours, weekly payments, steady bookings and local support. Apply online today.',
  alternates: {
    canonical,
  },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Self-Employed Taxi Driver Jobs Leicester | Apply Now',
    description: 'Drive with Aylestone Taxis in Leicester: flexible hours, weekly payments, steady bookings and local support. Apply online today.',
    url: canonical,
    type: 'website',
  },
})

export default function DriversLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}