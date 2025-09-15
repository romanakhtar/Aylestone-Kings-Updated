import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import FloatingContactButton from "@/components/FloatingContactButton"
import ContactInfoBar from "@/components/contact-info-bar"
import { Navigation } from "@/components/navigation"
import Script from "next/script";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Aylestone Kings - Moving the Midlands Forward",
  description: "Professional taxi service in the Midlands. Book your ride online or download our app.",
  generator: "Roman Akhtar",
  other: {
    "preconnect": "https://aylestonekings.webbooker.icabbi.com",
  },
}
const schemaData = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Aylestone Taxis",
  url: "https://aylestone-taxis.co.uk",
  telephone: "+44-116-233-8888",
  address: {
    "@type": "PostalAddress",
    streetAddress: "753A Aylestone Road",
    addressLocality: "Leicester",
    postalCode: "LE2 8TG",
    addressCountry: "GB"
  },
  openingHours: "Mo-Su 00:00-23:59"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} antialiased scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://aylestonekings.webbooker.icabbi.com" />
        <link rel="dns-prefetch" href="https://aylestonekings.webbooker.icabbi.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="font-sans pt-5 bg-white">
        <ContactInfoBar />
        <Navigation />
        <main className="transition-smooth">
          {children}
        </main>
        <FloatingContactButton />
        <Script
          id="schema-markup"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
      </body>
    </html>
  )
}
