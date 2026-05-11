import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Aylestone Taxis Leicester | Call 0116 2338888 | Book Online",
  description:
    "Contact Aylestone Kings for Leicester taxis: phone, WhatsApp, email, or instant web booking. Airport transfers, local journeys, accounts — 24/7. Call 0116 2338888.",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/contact",
  },
  openGraph: {
    title: "Contact Aylestone Taxis Leicester | 0116 2338888",
    description: "Book or enquire: 24/7 Leicester taxi service. Call 0116 2338888 or use our online form.",
    url: "https://aylestone-taxis.co.uk/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

