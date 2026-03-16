import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import "../styles/halloween.css"
import "../styles/christmas.css"
import "../styles/valentine.css"
import dynamic from "next/dynamic"
import ContactInfoBar from "@/components/contact-info-bar"
import { Navigation } from "@/components/navigation"
import { HalloweenThemeProvider } from "@/components/HalloweenThemeProvider"
import { ChristmasThemeProvider } from "@/components/ChristmasThemeProvider"
import { ValentineThemeProvider } from "@/components/ValentineThemeProvider"
import Script from "next/script"

// Dynamically import non-critical components
const Footer = dynamic(() => import("@/components/footer"))

const FloatingContactButton = dynamic(() => import("@/components/FloatingContactButton"))

const AnalyticsTracker = dynamic(() => import("@/components/AnalyticsTracker"))

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
  title: "Aylestone Taxis | 24/7 Leicester Airport & Local Taxi Service",
  description: "Reliable 24/7 taxi service in Leicester. Airport transfers, school runs & local trips. Book online or call now for fast pickup.",
  keywords: "Taxi Leicester, Taxi Near Me Leicester, Leicester Airport Taxi, Leicester to East Midlands Airport Taxi, Leicester Taxi Company, Cheap Taxi Leicester, 24 Hour Taxi Leicester, taxi in Leicester, Leicester taxi service, airport taxi Leicester, taxi company Leicester, Aylestone Taxis",
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
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: [
    { "@type": "City", name: "Leicester" },
    { "@type": "AdministrativeArea", name: "Leicestershire" },
    { "@type": "AdministrativeArea", name: "East Midlands" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Taxi Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport Transfers Leicester" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Taxi Leicester" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Long Distance Taxi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Taxi Accounts" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Minibus Hire Leicester" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wheelchair Accessible Taxi" } },
    ],
  },
  sameAs: [
    "https://www.facebook.com/aylestone.taxis/",
    "https://play.google.com/store/apps/details?id=co.uk.aylestone.taxis",
    "https://apps.apple.com/gb/app/aylestone-kings/id1061012064",
  ],
  priceRange: "££",
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
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
        
        {/* Preload LCP hero image for faster initial render */}
        <link
          rel="preload"
          as="image"
          href="/white-modern-taxi-side.webp"
          fetchPriority="high"
        />
        
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
        
        {/* Google Analytics 4 (GA4) - Load with lower priority to not block rendering */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EN43EPXGHR"
          strategy="lazyOnload"
        />
        <Script id="google-analytics-tag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EN43EPXGHR');
          `}
        </Script>
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NB673LK3');
          `}
        </Script>
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
              <HalloweenTopBanner />
              <ContactInfoBar />
              <Navigation />
              <HalloweenSpiderWeb />
              <main className="relative">
                <HalloweenFloatingElements />
                {children}
              </main>
              <Footer />
              <FloatingContactButton />
              <AnalyticsTracker />
            </ValentineThemeProvider>
          </ChristmasThemeProvider>
        </HalloweenThemeProvider>
      </body>
    </html>
  )
}
