import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import "../styles/halloween.css"
import "../styles/christmas.css"
import dynamic from "next/dynamic"
import ContactInfoBar from "@/components/contact-info-bar"
import { Navigation } from "@/components/navigation"
import { HalloweenThemeProvider } from "@/components/HalloweenThemeProvider"
import { ChristmasThemeProvider } from "@/components/ChristmasThemeProvider"
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
  title: "Driving Leicester Forward | Aylestone Kings",
  description: "Leicester's #1 taxi service since 1995. Taxi Leicester, Leicester Airport Taxi, Taxi Near Me Leicester, Cheap Taxi Leicester. 24/7 service, licensed drivers, fixed-price airport transfers. Book your Leicester taxi online or call 0116 2338888.",
  keywords: "Taxi Leicester, Taxi Near Me Leicester, Leicester Airport Taxi, Leicester to East Midlands Airport Taxi, Leicester Taxi Company, Cheap Taxi Leicester, taxi in Leicester, Leicester taxi service, airport taxi Leicester, taxi company Leicester",
  generator: "Aylestone Kings",
  authors: [{ name: "Aylestone Kings" }],
  openGraph: {
    title: "Taxi Leicester | Leicester Airport Taxi | Aylestone Kings",
    description: "Leicester's trusted taxi service since 1995. Taxi Leicester, Leicester Airport Taxi, and cheap taxi services. 24/7 service, licensed drivers, fixed-price transfers.",
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
    title: "Taxi Leicester | Leicester Airport Taxi | Aylestone Kings",
    description: "Leicester's trusted taxi service since 1995. Taxi Leicester, Leicester Airport Taxi, and cheap taxi services.",
    images: ["https://aylestone-taxis.co.uk/Aylestone-Taxi-Logo.png"],
  },
  alternates: {
    canonical: "https://aylestone-taxis.co.uk",
  },
  other: {
    "preconnect": "https://aylestonekings.webbooker.icabbi.com",
    "geo.region": "GB-LEI",
    "geo.placename": "Leicester",
    "geo.position": "52.6369;-1.1398",
    "ICBM": "52.6369, -1.1398",
  },
}

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://aylestone-taxis.co.uk/#organization",
    name: "Aylestone Kings",
    alternateName: "Aylestone Taxis",
    url: "https://aylestone-taxis.co.uk",
    logo: "https://aylestone-taxis.co.uk/Aylestone-Taxi-Logo.png",
    image: "https://aylestone-taxis.co.uk/Aylestone-Taxi-Logo.png",
    telephone: "+44-116-233-8888",
    email: "info@aylestone-taxis.co.uk",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "753A Aylestone Road",
      addressLocality: "Leicester",
      addressRegion: "Leicestershire",
      postalCode: "LE2 8TG",
      addressCountry: "GB"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "52.6369",
      longitude: "-1.1398"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    areaServed: {
      "@type": "City",
      name: "Leicester"
    },
    sameAs: [
      "https://www.facebook.com/share/1EzHEEqLRK/",
      "https://www.instagram.com/aylestone_kings"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1000",
      bestRating: "5",
      worstRating: "1"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Aylestone Kings Taxi Service",
    provider: {
      "@id": "https://aylestone-taxis.co.uk/#organization"
    },
    areaServed: {
      "@type": "City",
      name: "Leicester"
    },
    serviceType: [
      "Taxi Leicester",
      "Leicester Airport Taxi",
      "Taxi Near Me Leicester",
      "Cheap Taxi Leicester",
      "Leicester Taxi Company"
    ],
    description: "Professional taxi service in Leicester offering airport transfers, local journeys, and 24/7 transportation services."
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
    "@type": "Service",
    serviceType: "Taxi Service",
    provider: {
      "@id": "https://aylestone-taxis.co.uk/#organization"
    },
    areaServed: {
      "@type": "City",
      name: "Leicester"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Taxi Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Taxi Leicester",
            description: "Professional taxi service throughout Leicester"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Leicester Airport Taxi",
            description: "Airport transfer service from Leicester to all major UK airports"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cheap Taxi Leicester",
            description: "Affordable taxi service in Leicester with competitive pricing"
          }
        }
      ]
    }
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
              page_path: typeof window !== 'undefined' ? window.location.pathname : '/',
            });
          `}
        </Script>
      </head>
      <body className="font-sans pt-5 bg-white">
        <HalloweenThemeProvider>
          <ChristmasThemeProvider>
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
          </ChristmasThemeProvider>
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
