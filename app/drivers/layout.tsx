import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Driver – Aylestone Taxis Leicester',
  description: 'Join Aylestone Taxis as a licensed driver in Leicester. Flexible hours, weekly pay, steady bookings, and full local support. Apply online today.',
  keywords: 'taxi driver jobs Leicester, driver application, join taxi company, Aylestone Taxis driver, Leicester taxi driver jobs',
  openGraph: {
    title: 'Become a Driver – Aylestone Taxis Leicester',
    description: 'Join Aylestone Taxis as a licensed driver in Leicester. Flexible hours, weekly pay, steady bookings, and full local support. Apply online today.',
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

