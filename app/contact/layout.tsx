import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Aylestone Taxis on Aylestone Road Leicester | 0116 2338888",
  description:
    "Contact Aylestone Kings on Aylestone Road, Leicester (LE2): phone, WhatsApp, email & web booking. Airport & local taxis 24/7 — call 0116 2338888.",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/contact",
  },
  openGraph: {
    title: "Contact Aylestone Taxis | Aylestone Road Leicester",
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

