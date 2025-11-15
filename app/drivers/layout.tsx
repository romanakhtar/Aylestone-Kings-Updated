import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join as a Driver | Aylestone Taxis | Leicester Taxi Service',
  description: 'Join Aylestone Kings as a professional taxi driver. We\'re looking for licensed, DBS-checked drivers to join Leicester\'s trusted taxi service. Apply today and start your career with us.',
  keywords: 'taxi driver jobs Leicester, driver application, join taxi company, Aylestone Kings driver, Leicester taxi driver jobs',
  openGraph: {
    title: 'Join as a Driver | Aylestone Taxis',
    description: 'Join Aylestone Kings as a professional taxi driver. Apply today and start your career with Leicester\'s trusted taxi service.',
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

