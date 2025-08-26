import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import FloatingContactButton from "@/components/FloatingContactButton"
import ContactInfoBar from "@/components/contact-info-bar"
import { Navigation } from "@/components/navigation"

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
  generator: "v0.app",
  other: {
    "preconnect": "https://aylestonekings.webbooker.icabbi.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://aylestonekings.webbooker.icabbi.com" />
        <link rel="dns-prefetch" href="https://aylestonekings.webbooker.icabbi.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans pt-5">
        <ContactInfoBar />
        <Navigation />
        {children}
        <FloatingContactButton />
      </body>
    </html>
  )
}
