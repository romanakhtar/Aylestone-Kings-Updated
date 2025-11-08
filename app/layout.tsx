import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import "../styles/halloween.css"
import FloatingContactButton from "@/components/FloatingContactButton"
import ContactInfoBar from "@/components/contact-info-bar"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import { HalloweenThemeProvider } from "@/components/HalloweenThemeProvider"
import HalloweenTopBanner from "@/components/HalloweenTopBanner"
import HalloweenFloatingElements from "@/components/HalloweenFloatingElements"
import HalloweenSpiderWeb from "@/components/HalloweenSpiderWeb"
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
  title: "Taxi in Aylestone Leicester | Aylestone Taxis | Aylestone Kings",
  description: "Reliable taxi service in Aylestone and Leicester. 24/7 service, licensed drivers, airport transfers, and local journeys. Book your taxi online or call now. Professional taxi service since 1995.",
  generator: "Aylestone Kings",
  other: {
    "preconnect": "https://aylestonekings.webbooker.icabbi.com",
  },
}

const schemaData = [
  {
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
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourpage"     
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aylestone Kings",
    url: "https://aylestone-taxis.co.uk",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aylestone-taxis.co.uk/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Home", "About", "Airport Pricing", "Contact"],
    url: [
      "https://aylestone-taxis.co.uk/",
      "https://aylestone-taxis.co.uk/about",
      "https://aylestone-taxis.co.uk/pricing",
      "https://aylestone-taxis.co.uk/contact"
    ]
  }
]

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
        
        
        {/* Google tag (gtag.js) */}
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-997662518"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-997662518');
          `}
        </Script>

        
      </head>
      <body className="font-sans pt-5 bg-white">
        <HalloweenThemeProvider>
          <HalloweenTopBanner />
          <ContactInfoBar />
          <Navigation />
          <HalloweenSpiderWeb />
          <main className="transition-smooth relative">
            <HalloweenFloatingElements />
            {children}
          </main>
          <Footer />
          <FloatingContactButton />
        </HalloweenThemeProvider>
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
