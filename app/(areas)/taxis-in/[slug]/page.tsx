import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Plane, Clock, Shield, Car } from "lucide-react"
import { footerData, companyInfo, contactInfo } from "@/lib/data"

type AreaItem = { name: string; href: string }

function getAllAreas(): AreaItem[] {
  const groups = footerData.areaGroups ?? []
  return groups.flatMap((g: { items: AreaItem[] }) => g.items)
}

function slugFromHref(href: string): string {
  // Support both formats: /taxis-in-aylestone and /taxis-in/aylestone
  if (href.includes("/taxis-in-")) {
    return href.split("/taxis-in-")[1] ?? ""
  }
  if (href.includes("/taxis-in/")) {
    return href.split("/taxis-in/")[1] ?? ""
  }
  return ""
}

function getAreaBySlug(slug: string): AreaItem | undefined {
  return getAllAreas().find((a) => slugFromHref(a.href) === slug)
}

export function generateStaticParams() {
  return getAllAreas().map((a) => ({ slug: slugFromHref(a.href) }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const area = getAreaBySlug(params.slug)
  const areaName = area?.name.replace(/^Taxis in\s+/i, "") ?? "Area"
  const title = `${companyInfo.name} — Taxis in ${areaName}`
  const description = `Book reliable taxis in ${areaName} with ${companyInfo.name}. 24/7 service, professional drivers, airport transfers and local journeys.`
  return {
    title,
    description,
  }
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = getAreaBySlug(params.slug)
  if (!area) return notFound()

  const areaPlain = area.name.replace(/^Taxis in\s+/i, "")
  const details = (footerData as any).areaDetails?.[params.slug] as { landmarks?: string[] } | undefined
  const landmarks = details?.landmarks ?? []

  return (
    <main>
      {/* Hero */}
      <section className="relative text-white bg-gradient-to-br from-[#0F0D3E] via-[#0F1B5A] to-[#0A7F84]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-white/80">{companyInfo.name}</p>
              <h1 className="mt-2 text-3xl text-white sm:text-4xl md:text-5xl font-extrabold leading-tight">Taxi Service in {areaPlain}</h1>
              <p className="mt-3 max-w-2xl text-white/85">
                Reliable 24/7 taxis across {areaPlain}, Leicester & Leicestershire. Fixed fares, licensed drivers, and fast pick-ups.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={contactInfo.booking.online}>
                <Button className="bg-[#06A0A6] hover:bg-[#06939a] text-white rounded-lg shadow-professional hover:shadow-professional-lg transition-smooth">
                  Book Now
                </Button>
              </Link>
              <Link href={`tel:${contactInfo.phone}`}>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900">Your Local Taxi in {areaPlain}</h2>
                <p className="text-gray-700">Looking for a taxi in {areaPlain}? We’ve served Leicester since 1995 with safe, affordable journeys for school runs, nights out, shopping trips and airport transfers.</p>
              </div>

              {landmarks.length > 0 && (
                <div className="rounded-lg border border-gray-200 p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 flex items-center gap-2"><MapPin className="h-5 w-5 text-[#06A0A6]"/> Local knowledge</h3>
                  <p className="text-gray-700">Popular spots in {areaPlain}: {landmarks.join(", ")}</p>
                </div>
              )}

              <div className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2"><Car className="h-5 w-5 text-[#06A0A6]"/> Popular Journeys from {areaPlain}</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>{areaPlain} → Leicester City Centre</li>
                  <li>{areaPlain} → Birmingham Airport (BHX)</li>
                  <li>{areaPlain} → East Midlands Airport (EMA)</li>
                  <li>{areaPlain} → London Heathrow (LHR)</li>
                  <li>{areaPlain} → Fosse Park / Train Station / Hospitals</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2"><Plane className="h-5 w-5 text-[#06A0A6]"/> Airport Transfers from {areaPlain}</h3>
                <p className="text-gray-700 mb-3">Fixed-rate, 24/7 transfers with flight tracking and meet &amp; greet on request.</p>
                <div className="flex flex-wrap gap-2">
                  {footerData.airportLinks?.map((ap) => (
                    <Link key={ap.name} href={ap.href} className="text-[#06A0A6] hover:underline underline-offset-2 inline-flex items-center gap-1">
                      <ArrowRight className="h-3 w-3"/>{ap.name.replace(/ Airport$/,'')}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2"><Shield className="h-5 w-5 text-[#06A0A6]"/> Why Choose Us in {areaPlain}</h3>
                <ul className="text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Licensed &amp; insured • DBS-checked drivers</li>
                  <li>Fixed prices • No surge pricing</li>
                  <li>Modern fleet: saloon, estate, MPV &amp; minibuses</li>
                  <li>24/7 service • Priority airport runs</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2"><Clock className="h-5 w-5 text-[#06A0A6]"/> How It Works</h3>
                <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                  <li>Booking: Book online or call/WhatsApp. We recommend pre-booking for airport runs.</li>
                  <li>Pickup: Your driver arrives slightly early, with live updates.</li>
                  <li>Travel: Comfortable vehicles, fixed fares, and help with luggage.</li>
                </ol>
              </div>

              <div className="pt-2">
                <Link href={contactInfo.booking.online} className="inline-flex items-center bg-[#06A0A6] hover:bg-[#06939a] text-white px-5 py-2.5 rounded-lg shadow-professional hover:shadow-professional-lg transition-smooth gap-2">
                  Book Your Taxi in {areaPlain}
                  <ArrowRight className="h-4 w-4"/>
                </Link>
              </div>
            </div>
            <aside className="space-y-4">
              <div className="rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Quick contacts</h3>
                <p className="text-sm text-gray-700">Phone: <Link href={`tel:${contactInfo.phone}`} className="hover:underline underline-offset-2">{contactInfo.phone}</Link></p>
                <p className="text-sm text-gray-700">Email: <Link href={`mailto:${contactInfo.email}`} className="hover:underline underline-offset-2">{contactInfo.email}</Link></p>
                <p className="text-sm text-gray-700">Address: {contactInfo.address.street}, {contactInfo.address.city} {contactInfo.address.postcode}</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Popular links</h3>
                <ul className="space-y-2 text-sm">
                  {footerData.airportLinks?.slice(0,4).map((ap) => (
                    <li key={ap.name}>
                      <Link href={ap.href} className="text-gray-700 hover:underline underline-offset-2">
                        {ap.name} Transfers
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}


