"use client"

import dynamic from "next/dynamic"

const Footer = dynamic(() => import("@/components/footer"), { ssr: false })
const FloatingContactButton = dynamic(() => import("@/components/FloatingContactButton"), { ssr: false })
const AnalyticsTracker = dynamic(() => import("@/components/AnalyticsTracker"), { ssr: false })
const HalloweenTopBanner = dynamic(() => import("@/components/HalloweenTopBanner"), { ssr: false })
const HalloweenSpiderWeb = dynamic(() => import("@/components/HalloweenSpiderWeb"), { ssr: false })

const HalloweenFloatingElements = dynamic(() => import("@/components/HalloweenFloatingElements"), { ssr: false })

export function DeferredHalloweenFloating() {
  return <HalloweenFloatingElements />
}

export function DeferredLayoutChrome() {
  return (
    <>
      <HalloweenTopBanner />
      <HalloweenSpiderWeb />
      <Footer />
      <FloatingContactButton />
      <AnalyticsTracker />
    </>
  )
}
