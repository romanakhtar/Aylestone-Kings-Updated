import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import FloatingContactButton from "@/components/FloatingContactButton"

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <FloatingContactButton />
      </body>
    </html>
  )
}
