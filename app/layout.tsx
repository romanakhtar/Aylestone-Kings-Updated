import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import "../styles/halloween.css"
import "../styles/christmas.css"
import "../styles/valentine.css"
import ContactInfoBar from "@/components/contact-info-bar"
import { Navigation } from "@/components/navigation"
import { HalloweenThemeProvider } from "@/components/HalloweenThemeProvider"
import { ChristmasThemeProvider } from "@/components/ChristmasThemeProvider"
import { ValentineThemeProvider } from "@/components/ValentineThemeProvider"
import { DeferredLayoutChrome, DeferredHalloweenFloating } from "@/components/layout/DeferredLayoutChrome"
import ThirdPartyScripts from "@/components/analytics/ThirdPartyScripts"
import { getAggregateRatingJsonLd } from "@/lib/seo/siteJsonLd"
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
  metadataBase: new URL("https://aylestone-taxis.co.uk"),
  title: "Taxi Leicester | Aylestone Taxis | Book Online 0116 2338888",
  description:
    "Taxi Leicester & Leicestershire: Aylestone Taxis (Aylestone Kings) since 1995. Leicester taxis — instant quotes, airport transfers, local trips. Call 0116 2338888 or book 24/7.",
  keywords: "Taxi Leicester, Leicester taxis, Aylestone Taxis, taxi near me Leicester, Taxi Near Me Leicester, Leicester Airport Taxi, Leicester to East Midlands Airport Taxi, Leicester Taxi Company, Cheap Taxi Leicester, 24 Hour Taxi Leicester, taxi in Leicester, Leicester taxi service, airport taxi Leicester, airport transfers Leicester, taxi company Leicester",
  generator: "Aylestone Kings",
  authors: [{ name: "Aylestone Kings" }],
  openGraph: {
    title: "Taxi Leicester | Aylestone Taxis | Aylestone Kings",
    description:
      "Leicester taxis & airport transfers since 1995. Taxi Leicester, taxi near me — book online or call 0116 2338888. Licensed drivers, fixed fares.",
    url: "https://aylestone-taxis.co.uk",
    siteName: "Aylestone Kings",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://aylestone-taxis.co.uk/Aylestone-Taxi-Logo.png",
        width: 1200,
        height: 630,
        alt: "Aylestone Kings - Taxi Leicester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Leicester | Aylestone Taxis | Aylestone Kings",
    description:
      "Leicester taxis & airport transfers. Book online or call 0116 2338888 — 24/7.",
    images: ["https://aylestone-taxis.co.uk/Aylestone-Taxi-Logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "preconnect": "https://aylestonekings.webbooker.icabbi.com",
    "geo.region": "GB-LEI",
    "geo.placename": "Leicester",
    "geo.position": "52.6369;-1.1398",
    "ICBM": "52.6369, -1.1398",
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "@id": "https://aylestone-taxis.co.uk/#business",
  name: "Aylestone Kings Taxi Service",
  alternateName: "Aylestone Taxis",
  description:
    "Leicester's trusted taxi service since 1995. 24/7 airport transfers, local taxis, and long-distance travel across Leicester, Leicestershire and the East Midlands. Licensed by Leicester City Council.",
  url: "https://aylestone-taxis.co.uk",
  logo: "https://aylestone-taxis.co.uk/Aylestone-Taxi-Logo.png",
  image: "https://aylestone-taxis.co.uk/white-modern-taxi-side.webp",
  telephone: "+441162338888",
  email: "info@aylestone-taxis.co.uk",
  foundingDate: "1995",
  address: {
    "@type": "PostalAddress",
    streetAddress: "753A Aylestone Road",
    addressLocality: "Leicester",
    addressRegion: "Leicestershire",
    postalCode: "LE2 8TG",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.602358,
    longitude: -1.155715,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Leicester" },
    { "@type": "AdministrativeArea", name: "Leicestershire" },
    { "@type": "AdministrativeArea", name: "East Midlands" },
  ],
  sameAs: [
    "https://www.facebook.com/aylestone.taxis/",
    "https://play.google.com/store/apps/details?id=co.uk.aylestone.taxis",
    "https://apps.apple.com/gb/app/aylestone-kings/id1061012064",
  ],
  priceRange: "££",
  aggregateRating: getAggregateRatingJsonLd(),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} antialiased`}>
      <head>
        {/* Resource Hints */}
        <link rel="preconnect" href="https://aylestonekings.webbooker.icabbi.com" />
        <link rel="dns-prefetch" href="https://aylestonekings.webbooker.icabbi.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="2Oa-KPBkU1bFahLJg39LPCLSYeH1SxCpA_eP9s1J09M" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* LocalBusiness + TaxiService Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-sans pt-5 bg-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NB673LK3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <HalloweenThemeProvider>
          <ChristmasThemeProvider>
            <ValentineThemeProvider>
              <ContactInfoBar />
              <Navigation />
              <main className="relative">
                <DeferredHalloweenFloating />
                {children}
              </main>
              <DeferredLayoutChrome />
            </ValentineThemeProvider>
          </ChristmasThemeProvider>
        </HalloweenThemeProvider>
        <ThirdPartyScripts />
      </body>
    </html>
  )
}
