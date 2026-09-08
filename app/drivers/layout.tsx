import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign-up as a Self-Employed Driver – Aylestone Taxis Leicester',
  description: 'Sign-up as a Self-Employed Driver with Aylestone Taxis in Leicester. Flexible hours, Weekly transfer of booking funds, steady bookings, and full local support. Existing drivers can also update expiring documents here. Apply online today.',
  keywords: 'taxi driver jobs Leicester, driver application, Self-Employed Driver, taxi company, Aylestone Taxis driver, Leicester taxi driver jobs, update driver documents Leicester, renew DBS taxi driver',
  openGraph: {
    title: 'Sign-up as a Self-Employed Driver – Aylestone Taxis Leicester',
    description: 'Sign-up as a Self-Employed Driver with Aylestone Taxis in Leicester. Flexible hours, Weekly transfer of booking funds, steady bookings, and full local support. Existing drivers can also update expiring documents here. Apply online today.',
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