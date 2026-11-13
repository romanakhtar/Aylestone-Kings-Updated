"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { contactInfo } from "@/lib/data"

/**
 * Seasonal promo blocks for /late-night-taxi-leicester.
 * Date windows are evaluated client-side (same pattern as HalloweenThemeProvider /
 * ChristmasThemeProvider) so a static build still flips on/off at the right calendar date.
 *
 * Halloween: October from day 2 inclusive — hides automatically from 1 November.
 * Christmas: 1 November through 27 December inclusive.
 */
export default function SeasonalPromoSections() {
  const [showHalloween, setShowHalloween] = useState(false)
  const [showChristmas, setShowChristmas] = useState(false)

  useEffect(() => {
    const now = new Date()
    const month = now.getMonth() + 1
    const day = now.getDate()

    // Match HalloweenThemeProvider: Oct day >= 2; off from 1 November.
    // Preview: ?halloween=1 forces on, ?halloween=0 forces off.
    const override = new URLSearchParams(window.location.search).get("halloween")
    const halloweenOn =
      override === "1" || override === "true"
        ? true
        : override === "0" || override === "false"
          ? false
          : month === 10 && day >= 2

    // Late-night Christmas party season: 1 Nov – 27 Dec (inclusive).
    const christmasOn =
      month === 11 || (month === 12 && day <= 27)

    setShowHalloween(halloweenOn)
    setShowChristmas(christmasOn)
  }, [])

  if (!showHalloween && !showChristmas) return null

  return (
    <>
      {showChristmas ? (
        <section className="py-16 md:py-20 bg-[#0F0D3E] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Christmas Party Season in Leicester: Book Early
            </h2>
            <p className="text-lg text-[#E4E4E4] mb-8 leading-relaxed">
              From mid-November through December, late-night taxi demand in Leicester doubles as office
              parties and staff nights out empty venues across the city at once. Uber surge pricing is at
              its worst on December Fridays and Saturdays. Aylestone Taxis offers fixed fares with no
              surge pricing, so the quote you receive when you book is the price you pay — even when the
              city centre is at its peak. Pre-booking is the safest way to get home. For vehicle choices,
              corporate groups and venue pickup tips, read our{" "}
              <Link
                href="/blog/corporate-christmas-party-taxi-leicester"
                className="text-[#06A0A6] underline underline-offset-2 hover:text-white"
              >
                corporate Christmas party taxi Leicester guide
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={contactInfo.booking.online}
                className="inline-flex items-center justify-center rounded-lg bg-[#F26B21] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#d85b14]"
              >
                Pre-Book Your Christmas Taxi
              </Link>
              <a
                href="tel:01162338888"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call 0116 233 8888
              </a>
            </div>
          </div>
        </section>
      ) : null}

      {/*
        Halloween seasonal section — preserved for reuse next year.
        Before reuse: update the 2026 date text (e.g. "Saturday 31 October 2026") for the new year.
        Hidden automatically from 1 November (same window as HalloweenThemeProvider).
      */}
      {showHalloween ? (
        <section className="py-16 md:py-20 bg-[#0F0D3E] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Halloween in Leicester — Book Early
            </h2>
            <p className="text-lg text-[#E4E4E4] mb-5 leading-relaxed">
              Halloween falls on <strong className="text-white">Saturday 31 October 2026</strong>, and it is one of the
              busiest nights of the year for taxis in Leicester. Costumed crowds fill the Clock Tower, The Lanes and
              Granby Street, every bar and club turns out at once, and ride-hailing apps apply their heaviest surge
              pricing of the season just as everyone wants to get home.
            </p>
            <p className="text-lg text-[#E4E4E4] mb-5 leading-relaxed">
              Our fares do not change on Halloween. The price you are quoted when you book is the price you pay,
              whether you travel at 8pm or 2am. Pre-book your journey home as soon as you know your plans — Halloween
              pre-bookings fill up quickly, and the later you leave it the harder it is to guarantee a car at the time
              you want.
            </p>
            <p className="text-lg text-[#E4E4E4] mb-8 leading-relaxed">
              Not sure when you will be leaving? Message us on WhatsApp at{" "}
              <strong className="text-white">+44 7535 855786</strong> on the night and we will confirm a fixed fare
              before the driver sets off. For costs, venues and the full pre-booking window, read our{" "}
              <Link
                href="/blog/halloween-taxi-leicester-2026-pre-book-before-surge-prices-hit"
                className="text-[#06A0A6] underline underline-offset-2 hover:text-white"
              >
                Halloween taxi Leicester guide
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={contactInfo.booking.online}
                className="inline-flex items-center justify-center rounded-lg bg-[#F26B21] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#d85b14]"
              >
                Pre-Book Your Halloween Taxi
              </Link>
              <a
                href="tel:01162338888"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call 0116 233 8888
              </a>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
