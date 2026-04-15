import type { Metadata } from "next"
import BirminghamAirportContent from "./BirminghamAirportContent"

export const metadata: Metadata = {
  title: "Birmingham Airport Taxi from Leicester | Fixed Prices, 24/7 Service | Book Instantly | Aylestone Taxis",
  description: "Professional Leicester taxi service to Birmingham Airport (BHX). Fixed rates from £60. 24/7 transfers, licensed drivers, and reliable service. Book your Leicester to Birmingham airport taxi today.",
}

export default function BirminghamPage() {
  return <BirminghamAirportContent />
}
