"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { useChristmasTheme } from "@/components/ChristmasThemeProvider"
import { useValentineTheme } from "@/components/ValentineThemeProvider"

/**
 * Seasonal footer banners. Split out of the footer so the rest of the footer
 * can stay a server component (no hydration cost for ~1,000 static elements).
 */
export default function FooterSeasonalBanners() {
  const { isChristmasActive } = useChristmasTheme()
  const { isValentineActive } = useValentineTheme()
  const pathname = usePathname()
  const isHomepage = pathname === "/"

  return (
    <>
      {/* Valentine Footer Ribbon - Only on Homepage, Feb 1–14 */}
      {isValentineActive && isHomepage && (
        <div
          className="w-full min-h-[120px] sm:min-h-[160px] bg-cover bg-no-repeat bg-center"
          role="img"
          aria-label="Valentine's Day taxi service - Aylestone Taxis Leicester"
        />
      )}
      {/* Christmas Footer Banner - Only on Homepage */}
      {isChristmasActive && isHomepage && (
        <div className="w-full relative">
          <Image
            src="/christmas-banner.jpg"
            alt="Christmas banner decoration for Aylestone Taxis taxi service"
            width={1920}
            height={200}
            className="w-full h-auto object-cover"
            style={{ display: "block", width: "100%", height: "auto" }}
            priority={false}
            loading="lazy"
          />
        </div>
      )}
    </>
  )
}
