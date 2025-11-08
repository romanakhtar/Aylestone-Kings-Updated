import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import "../styles/halloween.css"
import dynamic from "next/dynamic"
import ContactInfoBar from "@/components/contact-info-bar"
import { Navigation } from "@/components/navigation"
import { HalloweenThemeProvider } from "@/components/HalloweenThemeProvider"
import Script from "next/script"

// Dynamically import non-critical components
const Footer = dynamic(() => import("@/components/footer"))

const FloatingContactButton = dynamic(() => import("@/components/FloatingContactButton"))

const HalloweenTopBanner = dynamic(() => import("@/components/HalloweenTopBanner"))

const HalloweenFloatingElements = dynamic(() => import("@/components/HalloweenFloatingElements"))

const HalloweenSpiderWeb = dynamic(() => import("@/components/HalloweenSpiderWeb"))
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  adjustFontFallback: true,
})

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: "Taxi in Leicester | Aylestone Taxis | Leicester Taxi Service",
  description: "Leicester's trusted taxi service since 1995. Reliable 24/7 service, licensed drivers, airport transfers, and local journeys throughout Leicester and Leicestershire. Book your Leicester taxi online or call now.",
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
        {/* Resource Hints */}
        <link rel="preconnect" href="https://aylestonekings.webbooker.icabbi.com" />
        <link rel="dns-prefetch" href="https://aylestonekings.webbooker.icabbi.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/Aylestone-Taxi-Logo.png" as="image" type="image/png" />
        
        {/* Google tag (gtag.js) - Load after page is interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-997662518"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-997662518', {
              page_path: window.location.pathname,
            });
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
        {/* Schema markup - inline for faster parsing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </body>
    </html>
  )
}
