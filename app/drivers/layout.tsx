import type { Metadata } from 'next'
import { buildCanonical } from '@/lib/seo/canonical'
import { OG_IMAGE, OG_IMAGE_URL } from "@/lib/seo/openGraph"

const canonical = buildCanonical("/drivers")

export const metadata: Metadata = {
  title: 'Self-Employed Taxi Driver Jobs Leicester | Apply Now',
  description: 'Drive with Aylestone Taxis in Leicester: flexible hours, weekly payments, steady bookings and local support. Apply online today.',
  keywords: 'taxi driver jobs Leicester, driver application, Self-Employed Driver, taxi company, Aylestone Taxis driver, Leicester taxi driver jobs, update driver documents Leicester, renew DBS taxi driver',
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
}

export default function DriversLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}