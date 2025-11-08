import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Taxi in Aylestone Leicester | Aylestone Taxis",
  description: "Contact Aylestone Kings taxi service in Leicester. Call, email, or book online. 24/7 service available. Get in touch for airport transfers, local journeys, and taxi bookings in Aylestone and Leicester.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

