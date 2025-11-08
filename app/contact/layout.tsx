import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Leicester Taxi Service | Aylestone Taxis",
  description: "Contact Aylestone Kings - Leicester's trusted taxi service. Call, email, or book online. 24/7 service available. Get in touch for airport transfers, local journeys, and taxi bookings throughout Leicester.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

