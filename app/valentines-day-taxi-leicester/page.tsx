import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { contactInfo } from "@/lib/data"
import AppDownloadButtons from "@/components/AppDownloadButtons"
import { ArrowRight, Phone, Globe, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Valentine's Day Taxi in Leicester | Safe Evening Travel | Aylestone Taxis",
  description:
    "Looking for a Valentine's Day taxi in Leicester? Pre-book your evening travel with Aylestone Taxis for safe, reliable night journeys and fixed pricing.",
  keywords:
    "Valentine's Day taxi Leicester, Valentine taxi Leicester, evening taxi Leicester, night taxi Leicester, pre-book taxi Leicester",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/valentines-day-taxi-leicester",
  },
  openGraph: {
    title: "Valentine's Day Taxi in Leicester | Safe Evening Travel | Aylestone Taxis",
    description:
      "Looking for a Valentine's Day taxi in Leicester? Pre-book your evening travel with Aylestone Taxis for safe, reliable night journeys and fixed pricing.",
    url: "https://aylestone-taxis.co.uk/valentines-day-taxi-leicester",
  },
}

export default function ValentinesDayTaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
              Valentine&apos;s Day Taxi in Leicester
            </h1>
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-[#06A0A6]/10 shadow-lg ring-1 ring-[#EF5B6A]/20">
              <Image
                src="/Valentine-Image.webp"
                alt="Valentine's Day taxi service in Leicester - Aylestone Taxis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D3E]/30 via-transparent to-transparent" aria-hidden />
            </div>
          </header>

          <div className="prose prose-lg text-[#2E3C44] max-w-none">
            <p className="text-xl leading-relaxed mb-6">
              Valentine&apos;s Day is one of the busiest evenings of the year for travel in Leicester. Restaurants, hotels, cinemas, and late-night venues see higher demand, which is why planning your transport in advance is essential. Aylestone Taxis provides reliable Valentine&apos;s Day taxi services across Leicester, helping you travel comfortably, safely, and on time.
            </p>

            {/* Booking buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#EF5B6A] hover:bg-[#DC2626] text-white px-6 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <Globe className="h-5 w-5" />
                Book Online
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 bg-[#0F0D3E] hover:bg-[#2E3C44] text-white px-6 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                Call {contactInfo.phone}
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=Hi, I'd like to pre-book a taxi for Valentine's evening.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            <h2 className="text-2xl font-bold text-[#0F0D3E] mt-10 mb-4">
              Why Pre-Book Your Valentine&apos;s Evening Taxi
            </h2>
            <p className="leading-relaxed mb-8">
              Pre-booking your taxi helps secure your journey, avoid delays, lock your price, and travel with confidence on one of the busiest nights of the year.
            </p>

            {/* In-content image: professional break with brand accent */}
            <div className="my-12 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center rounded-2xl overflow-hidden bg-[#E4E4E4]/50 p-4 sm:p-6 ring-1 ring-[#EF5B6A]/15">
              <div className="relative w-full sm:w-[280px] shrink-0 aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/Valentine-Image.webp"
                  alt="Reliable Valentine's evening taxi - Aylestone Taxis Leicester"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 280px"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold text-[#0F0D3E] mt-0 mb-3">
                  Safe Night-Time Travel You Can Trust
                </h2>
                <p className="leading-relaxed text-[#2E3C44] mb-0">
                  Aylestone Taxis focuses on professional drivers, well-maintained vehicles, and reliable night-time pickups across Leicester.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0F0D3E] mt-10 mb-4">
              Book Through the Aylestone Taxis App
            </h2>
            <p className="leading-relaxed mb-6">
              Booking through the Aylestone Taxis app allows you to pre-book, track your taxi, and manage your journey with ease.
            </p>
            <AppDownloadButtons className="mb-10" />

            <h2 className="text-2xl font-bold text-[#0F0D3E] mt-10 mb-4">
              Fixed Prices & No Surprises
            </h2>
            <p className="leading-relaxed mb-8">
              See your fare before you travel. We offer fixed-price quotes for pre-booked Valentine&apos;s evening journeys, so you can relax and enjoy the night without worrying about metered surprises.
            </p>

            <h2 className="text-2xl font-bold text-[#0F0D3E] mt-10 mb-4">
              Licensed & Safe
            </h2>
            <p className="leading-relaxed mb-8">
              All our drivers are licensed by Leicester City Council, DBS checked, and use well-maintained vehicles. Your safety and comfort are our priority—especially on a busy evening when you want a stress-free ride home.
            </p>

            <h2 className="text-2xl font-bold text-[#0F0D3E] mt-10 mb-4">
              Where We Take You
            </h2>
            <p className="leading-relaxed mb-4">
              We cover Leicester and the surrounding area for your Valentine&apos;s evening—restaurants, hotels, cinemas, bars, and home. Pre-book a pickup and drop-off anywhere in Leicester, Leicestershire, or for longer trips to airports and other cities.
            </p>
            <p className="leading-relaxed mb-8">
              Popular spots we serve include the city centre, Aylestone, Clarendon Park, Oadby, Wigston, and beyond. Book in advance for peace of mind on the night.
            </p>

            {/* Final CTA */}
            <div className="mt-14 rounded-2xl bg-gradient-to-br from-[#EF5B6A]/10 to-[#0F0D3E]/10 p-6 sm:p-8 ring-1 ring-[#EF5B6A]/20">
              <h2 className="text-2xl font-bold text-[#0F0D3E] mb-3">
                Ready to Book Your Valentine&apos;s Ride?
              </h2>
              <p className="text-[#2E3C44] mb-6">
                Pre-book now for a reliable, safe journey. Choose the option that suits you.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
                <a
                  href={contactInfo.booking.online}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#EF5B6A] hover:bg-[#DC2626] text-white px-6 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
                >
                  <Globe className="h-5 w-5" />
                  Book Online
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#0F0D3E] hover:bg-[#2E3C44] text-white px-6 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
                >
                  <Phone className="h-5 w-5" />
                  Call {contactInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#06A0A6] text-[#06A0A6] hover:bg-[#06A0A6]/5 px-6 py-4 rounded-xl font-semibold transition-colors"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-[#2E3C44] mb-0">
                Or download our app for the easiest way to pre-book and track your taxi.
              </p>
              <AppDownloadButtons className="mt-4" />
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
