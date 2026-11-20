import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
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
import Footer from "@/components/footer"
import { getAggregateRatingJsonLd } from "@/lib/seo/siteJsonLd"
import { buildCanonical } from "@/lib/seo/canonical"
import { PHONE_DISPLAY, PHONE_E164, BOOKING_URL, siteData } from "@/lib/data"

const BOOKING_ORIGIN = new URL(BOOKING_URL).origin
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  adjustFontFallback: true,
})

// Roboto was loaded and preloaded here but never used (nothing referenced --font-roboto);
// removed to save a font download competing with LCP on every page.

export const metadata: Metadata = {
  metadataBase: new URL("https://aylestone-taxis.co.uk"),
  title: "Aylestone Taxis | Leicester Cabs & Airport Transfers",
  description:
    `Aylestone Taxis has served Leicester since 1995 — local cabs, fixed-fare airport transfers and 24/7 booking. Call ${PHONE_DISPLAY} or book online.`,
  generator: "Aylestone Taxis",
  authors: [{ name: "Aylestone Taxis" }],
  openGraph: {
    title: "Aylestone Taxis | Leicester Cabs & Airport Transfers",
    description:
    `Aylestone Taxis has served Leicester since 1995 — local cabs, fixed-fare airport transfers and 24/7 booking. Call ${PHONE_DISPLAY} or book online.`,
    url: buildCanonical("/"),
    siteName: "Aylestone Taxis",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://aylestone-taxis.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aylestone Taxis — Leicester taxis and airport transfers, fixed fares, 24/7",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aylestone Taxis | Leicester Cabs & Airport Transfers",
    description:
      "Local cabs and fixed-fare airport transfers from Leicester, 24/7, with licensed drivers and no surge pricing.",
    images: ["https://aylestone-taxis.co.uk/og-image.jpg"],
  },
  other: {
    "geo.region": "GB-LEI",
    "geo.placename": "Leicester",
    "geo.position": "52.602358;-1.155715",
    "ICBM": "52.602358, -1.155715",
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "@id": "https://aylestone-taxis.co.uk/#business",
  name: "Aylestone Taxis",
  legalName: siteData.company.legalName,
  description:
    "Leicester taxis and Leicester cabs since 1995. 24/7 airport transfers, local taxis, and long-distance travel across Leicester, Leicestershire and the East Midlands. Licensed by Leicester City Council.",
  url: "https://aylestone-taxis.co.uk",
  logo: "https://aylestone-taxis.co.uk/Aylestone-Taxi-Logo.png",
  image: "https://aylestone-taxis.co.uk/white-modern-taxi-side.webp",
  telephone: PHONE_E164,
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
  // Only profiles branded "Aylestone Taxis". The App Store / Google Play listings are titled
  // a different name, so they are not declared as the same entity (download links stay on-page).
  sameAs: ["https://www.facebook.com/aylestone.taxis/"],
  priceRange: "££",
  aggregateRating: getAggregateRatingJsonLd(),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} antialiased`}>
      <head>
        {/* Resource Hints */}
        <link rel="preconnect" href={BOOKING_ORIGIN} />
        <link rel="dns-prefetch" href={BOOKING_ORIGIN} />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* No Google Fonts preconnect: next/font self-hosts Inter, so those origins are never used. */}
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="2Oa-KPBkU1bFahLJg39LPCLSYeH1SxCpA_eP9s1J09M" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/*
          Seasonal hero preload.

          The homepage is statically prerendered and the Halloween theme is
          decided client-side (HalloweenThemeProvider, in an effect), so the
          hero background image is not in the HTML and the browser only
          discovers it after hydration — measured at 3.8s, making it the LCP
          element at 6.1s on a throttled mobile connection.

          This runs during head parsing (~150ms), does the same date check, and
          preloads the right crop so the bytes are already there when the
          element appears. Keeps the decision at request time rather than
          baking it into the static build, so it stops on 1 November by itself.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=new Date(),m=d.getMonth()+1,day=d.getDate();var q=location.search;var on=/[?&]halloween=(1|true)/.test(q)||(!/[?&]halloween=(0|false)/.test(q)&&m===10&&day>=2);if(!on)return;var l=document.createElement('link');l.rel='preload';l.as='image';l.href=(window.innerWidth<1024)?'/Halloween-Theme-bg-Mobile.webp':'/Halloween-Theme-bg-IMG.webp';l.setAttribute('fetchpriority','high');document.head.appendChild(l);}catch(e){}})();`,
          }}
        />
        
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
              <Footer />
              <DeferredLayoutChrome />
            </ValentineThemeProvider>
          </ChristmasThemeProvider>
        </HalloweenThemeProvider>
        <ThirdPartyScripts />
      </body>
    </html>
  )
}
