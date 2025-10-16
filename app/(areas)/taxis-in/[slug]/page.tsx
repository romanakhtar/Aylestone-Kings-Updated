import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Plane, Clock, Shield, Car } from "lucide-react"
import Script from "next/script"
import { footerData, companyInfo, contactInfo } from "@/lib/data"

type AreaItem = { name: string; href: string }

function getAllAreas(): AreaItem[] {
  const groups = footerData.areaGroups ?? []
  const areas = groups.flatMap((g: { items: AreaItem[] }) => g.items)
  const destinations = (footerData as any).destinationLinks ?? []
  return [...areas, ...destinations]
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = getAreaBySlug(slug)
  const areaName = area?.name.replace(/^Taxis in\s+/i, "") ?? "Area"
  const title = `${companyInfo.name} — Taxis in ${areaName}`
  const description = `Book reliable taxis in ${areaName} with ${companyInfo.name}. 24/7 service, professional drivers, airport transfers and local journeys.`
  return {
    title,
    description,
    alternates: {
      canonical: `/taxis-in/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/taxis-in/${slug}`,
      type: 'article',
      siteName: companyInfo.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = getAreaBySlug(slug)
  if (!area) return notFound()

  const areaPlain = area.name.replace(/^Taxis in\s+/i, "")
  const isDestination = (footerData as any).destinationLinks?.some((d: any) => slugFromHref(d.href) === slug)
  const details = (footerData as any).areaDetails?.[slug] as { landmarks?: string[] } | undefined
  const landmarks = details?.landmarks ?? []
  const relatedAreas = getAllAreas()
    .filter((a) => slugFromHref(a.href) !== slug)
    .slice(0, 6)

  return (
    <main>
      {/* Hero */}
      <section className="relative text-white bg-gradient-to-br from-[#0F0D3E] via-[#0F1B5A] to-[#0A7F84] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-white/80">{companyInfo.name}</p>
              <h1 className="mt-2 text-3xl text-white sm:text-4xl md:text-5xl font-extrabold leading-tight">
                {isDestination ? `Taxi to ${areaPlain}` : `Taxi Service in ${areaPlain}`} – Aylestone Taxis
              </h1>
              <p className="mt-3 max-w-2xl text-white/85">
                {isDestination 
                  ? `Need a taxi to ${areaPlain}? We offer reliable, on-time journeys with professional drivers and fixed fares. Perfect for appointments, events, shopping and travel connections.`
                  : `Reliable 24/7 taxis across ${areaPlain}, Leicester & Leicestershire. Fixed fares, licensed drivers, and fast pick-ups.`
                }
                {isDestination 
                  ? ` Book online in seconds — or contact us for help with luggage and special requests.`
                  : ` Looking for a reliable taxi in ${areaPlain}? Our trusted local taxi service is available 24/7, whether you need a short trip, an airport transfer, business travel, or a long-distance journey. With courteous drivers, comfortable modern vehicles, and fair, competitive pricing, we make travelling around ${areaPlain} simple, safe, and stress-free.`
                }
              </p>
              <p className="mt-3 max-w-2xl text-white/85">
                {isDestination 
                  ? `Our drivers know the best routes to ${areaPlain} and can help with luggage, accessibility needs, and special requests.`
                  : `Whether you're heading to the airport, commuting for work, or exploring the local area, our taxis in ${areaPlain} are always ready to get you there on time. We take pride in offering reliable, comfortable, and budget-friendly travel solutions tailored to your needs.`
                }
              </p>
              <p className="mt-3 max-w-2xl text-white/85">
                Book your taxi today and get where you need to be – on time, every time.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={contactInfo.booking.online}>
                <Button className="bg-[#06A0A6] hover:bg-[#06939a] text-white rounded-lg shadow-professional hover:shadow-professional-lg transition-smooth">
                  Book Now
                </Button>
              </Link>             
              <Link href="/contact">             
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
          {/* On this page */}
          <nav aria-label="On this page" className="mb-8">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li><a href="#popular-journeys" className="text-[#06A0A6] hover:underline underline-offset-2">Popular journeys</a></li>
              <li><a href="#airport-transfers" className="text-[#06A0A6] hover:underline underline-offset-2">Airport transfers</a></li>
              <li><a href="#why-choose-us" className="text-[#06A0A6] hover:underline underline-offset-2">Why choose us</a></li>
              <li><a href="#how-it-works" className="text-[#06A0A6] hover:underline underline-offset-2">How it works</a></li>
              <li><a href="#faqs" className="text-[#06A0A6] hover:underline underline-offset-2">FAQs</a></li>
            </ul>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {isDestination ? `Book a Taxi to ${areaPlain}` : `Your Local Taxi in ${areaPlain}`}
                </h2>
                <p className="text-gray-700">
                  {isDestination 
                    ? `Heading to ${areaPlain}? Our drivers know the best drop-off points and quickest routes. Fixed fares, card payments, and 24/7 availability.`
                    : `Looking for a taxi in ${areaPlain}? We've served Leicester since 1995 with safe, affordable journeys for school runs, nights out, shopping trips and airport transfers.`
                  }
                </p>
              </div>

              {landmarks.length > 0 && (
                <div className="rounded-lg border border-gray-200 p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 flex items-center gap-2"><MapPin className="h-5 w-5 text-[#06A0A6]"/> Local knowledge</h3>
                  <p className="text-gray-700">Popular spots in {areaPlain}: {landmarks.join(", ")}</p>
                </div>
              )}

              <div id="popular-journeys" className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2"><Car className="h-5 w-5 text-[#06A0A6]"/> 
                  {isDestination ? `Popular journeys` : `Popular Journeys from ${areaPlain}`}
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {isDestination ? (
                    <>
                      <li>Aylestone → {areaPlain}</li>
                      <li>Leicester City Centre → {areaPlain}</li>
                      <li>DMU/University area → {areaPlain}</li>
                      <li>Fosse Park → {areaPlain}</li>
                    </>
                  ) : (
                    <>
                      <li>{areaPlain} → Leicester City Centre</li>
                      <li>{areaPlain} → Birmingham Airport (BHX)</li>
                      <li>{areaPlain} → East Midlands Airport (EMA)</li>
                      <li>{areaPlain} → London Heathrow (LHR)</li>
                      <li>{areaPlain} → Fosse Park / Train Station / Hospitals</li>
                    </>
                  )}
                </ul>
              </div>

              <div id="airport-transfers" className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2"><Plane className="h-5 w-5 text-[#06A0A6]"/> 
                  {isDestination ? `Airport Transfers` : `Airport Transfers from ${areaPlain}`}
                </h3>
                <p className="text-gray-700 mb-3">
                  {isDestination 
                    ? `Seamless airport connections with meet & greet on request.`
                    : `Fixed-rate, 24/7 transfers with flight tracking and meet & greet on request.`
                  }
                </p>
                <div className="flex flex-wrap gap-2">
                  {footerData.airportLinks?.map((ap) => {
                    const base = ap.name.replace(/ Airport$/,'')
                    const codeMap: Record<string,string> = {
                      Birmingham: 'BHX',
                      'East Midlands': 'EMA',
                      Heathrow: 'LHR',
                      Gatwick: 'LGW',
                      Luton: 'LTN',
                      Stansted: 'STN',
                      Manchester: 'MAN',
                    }
                    const code = codeMap[base] ?? ''
                    return (
                      <Link key={ap.name} href={ap.href} className="text-[#06A0A6] hover:underline underline-offset-2 inline-flex items-center gap-1">
                        <ArrowRight className="h-3 w-3"/>{base}{code ? ` (${code})` : ''}
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div id="why-choose-us" className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2"><Shield className="h-5 w-5 text-[#06A0A6]"/> Why Choose Us in {areaPlain}</h3>
                <ul className="text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Licensed &amp; insured • DBS-checked drivers</li>
                  <li>Fixed prices • No surge pricing</li>
                  <li>Modern fleet: saloon, estate, MPV &amp; minibuses</li>
                  <li>24/7 service • Priority airport runs</li>
                </ul>
              </div>

              <div id="how-it-works" className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2"><Clock className="h-5 w-5 text-[#06A0A6]"/> How It Works</h3>
                <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                  <li>Booking: Book online or call/WhatsApp. We recommend pre-booking for airport runs.</li>
                  <li>Pickup: Your driver arrives slightly early, with live updates.</li>
                  <li>Travel: Comfortable vehicles, fixed fares, and help with luggage.</li>
                </ol>
              </div>

              <div className="pt-2">
                <Link href={contactInfo.booking.online} className="inline-flex items-center bg-[#06A0A6] hover:bg-[#06939a] text-white px-5 py-2.5 rounded-lg shadow-professional hover:shadow-professional-lg transition-smooth gap-2">
                  {isDestination ? `Book Taxi to ${areaPlain}` : `Book Your Taxi in ${areaPlain}`}
                  <ArrowRight className="h-4 w-4"/>
                </Link>
              </div>

              {/* SEO Content: About our service in Area */}
              <div className="rounded-lg border border-gray-200 p-5">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Taxi Service in {areaPlain} — What to Expect</h2>
                <p className="text-gray-700 mb-3">We provide reliable taxis in {areaPlain} and across Leicester & Leicestershire. Whether it is a quick trip to the shops, school runs, hospital appointments or a late-night pickup, our licensed drivers and modern fleet make every journey simple. Fixed prices mean no surge pricing, and our dispatch technology provides accurate ETAs and live driver tracking.</p>
                <p className="text-gray-700 mb-3">From {areaPlain}, popular destinations include Leicester City Centre, Fosse Park, De Montfort University, University of Leicester and both Leicester and South Wigston train stations. We also cover nearby neighbourhoods, ensuring seamless connections for work, study and leisure.</p>
                <p className="text-gray-700">Need an airport transfer from {areaPlain}? We operate 24/7 to Birmingham (BHX), East Midlands (EMA), Heathrow (LHR), Gatwick (LGW), Luton (LTN), Stansted (STN) and Manchester (MAN) with flight tracking and meet &amp; greet on request.</p>
              </div>

              {/* Additional SEO blocks: Local destinations and estimated times */}
              <div className="rounded-lg border border-gray-200 p-5">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Local destinations around {areaPlain}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  <li>Leicester City Centre • De Montfort University</li>
                  <li>University of Leicester • Leicester Royal Infirmary</li>
                  <li>Fosse Park • Highcross Shopping Centre</li>
                  <li>Leicester and South Wigston Train Stations</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">Times and distances vary with traffic. For exact ETAs, use our online booking.</p>
              </div>

              {/* FAQs */}
              <div id="faqs" className="rounded-lg border border-gray-200 p-5">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQs about taxis in {areaPlain}</h2>
                <div className="space-y-4">
                  <details className="group border border-gray-100 rounded-md p-4">
                    <summary className="cursor-pointer text-gray-900 font-medium">How much is a taxi from {areaPlain} to Leicester City Centre?</summary>
                    <p className="mt-2 text-gray-700">Fares vary with traffic and pickup point, but we offer fixed, competitive pricing. Get an instant quote and book online.</p>
                  </details>
                  <details className="group border border-gray-100 rounded-md p-4">
                    <summary className="cursor-pointer text-gray-900 font-medium">Do you offer 24/7 pickups in {areaPlain}?</summary>
                    <p className="mt-2 text-gray-700">Yes. Our service operates day and night, including weekends and bank holidays.</p>
                  </details>
                  <details className="group border border-gray-100 rounded-md p-4">
                    <summary className="cursor-pointer text-gray-900 font-medium">Can I book a return from the airport?</summary>
                    <p className="mt-2 text-gray-700">Absolutely. We monitor your flight and can arrange meet &amp; greet at arrivals. Add your return during booking or contact us.</p>
                  </details>
                  <details className="group border border-gray-100 rounded-md p-4">
                    <summary className="cursor-pointer text-gray-900 font-medium">What vehicle types are available?</summary>
                    <p className="mt-2 text-gray-700">Choose from saloons, estates, MPVs and minibuses for larger groups. All vehicles are clean, comfortable and licensed.</p>
                  </details>
                  <details className="group border border-gray-100 rounded-md p-4">
                    <summary className="cursor-pointer text-gray-900 font-medium">Do you provide child seats on request?</summary>
                    <p className="mt-2 text-gray-700">Yes. Add a note during booking and we’ll provide appropriate child seating where available.</p>
                  </details>
                  <details className="group border border-gray-100 rounded-md p-4">
                    <summary className="cursor-pointer text-gray-900 font-medium">Can I pay by card?</summary>
                    <p className="mt-2 text-gray-700">We accept multiple secure payment methods including card and contactless, subject to vehicle availability.</p>
                  </details>
                </div>
              </div>

            </div>
            <aside className="space-y-2 lg:sticky lg:top-28 h-fit lg:max-h-[calc(100vh-7rem)]">
              <div className="rounded-lg border border-gray-200 p-4 bg-gradient-to-r from-[#06A0A6]/10 to-transparent">
                <h3 className="font-semibold text-gray-900 mb-1">Quick contacts</h3>
                <p className="text-sm text-gray-700">Phone: <Link href={`tel:${contactInfo.phone}`} className="hover:underline underline-offset-2">{contactInfo.phone}</Link></p>
                <p className="text-sm text-gray-700">Email: <Link href={`mailto:${contactInfo.email}`} className="hover:underline underline-offset-2">{contactInfo.email}</Link></p>
                <p className="text-sm text-gray-700">Address: {contactInfo.address.street}, {contactInfo.address.city} {contactInfo.address.postcode}</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 bg-gradient-to-r from-[#06A0A6]/10 to-transparent">
                <h3 className="font-semibold text-gray-900 mb-1">Popular links</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  {footerData.airportLinks?.slice(0,6).map((ap) => (
                    <li key={ap.name}>
                      <Link href={ap.href} className="text-gray-700 hover:underline underline-offset-2">
                        {ap.name} Transfers
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 bg-gradient-to-r from-[#06A0A6]/10 to-transparent">      
                <h3 className="font-semibold text-gray-900 mb-1">Nearby areas we cover</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {relatedAreas.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="text-[#06A0A6] hover:underline underline-offset-2 inline-flex items-center gap-1">
                        <ArrowRight className="h-3 w-3"/> {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 bg-gradient-to-r from-[#06A0A6]/10 to-transparent">
                <h3 className="font-semibold text-gray-900 mb-1">Ready to book?</h3>
                <p className="text-sm text-gray-700 mb-2">Get an instant quote and confirm your ride in seconds.</p>
                <Link href={contactInfo.booking.online} className="inline-flex items-center bg-[#06A0A6] hover:bg-[#06939a] text-white px-4 py-2 rounded-md transition-smooth gap-2">
                  Book Online <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {/* Schema Markup for SEO */}
      <Script id="area-schema" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TaxiService',
          name: `${companyInfo.name} — Taxis in ${areaPlain}`,
          areaServed: areaPlain,
          serviceType: 'Local taxi and airport transfer',
          telephone: contactInfo.phone,
          url: `https://aylestone-taxis.co.uk/taxis-in/${slug}`,
          availableChannel: { '@type': 'ServiceChannel', serviceUrl: contactInfo.booking.online },
          provider: { '@type': 'LocalBusiness', name: companyInfo.name, address: `${contactInfo.address.street}, ${contactInfo.address.city} ${contactInfo.address.postcode}` }
        }) }}
      />
      <Script id="area-breadcrumbs" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aylestone-taxis.co.uk/' },
            { '@type': 'ListItem', position: 2, name: 'Areas', item: 'https://aylestone-taxis.co.uk/areas' },
            { '@type': 'ListItem', position: 3, name: `Taxis in ${areaPlain}`, item: `https://aylestone-taxis.co.uk/taxis-in/${slug}` }
          ]
        }) }}
      />
    </main>
  )
}