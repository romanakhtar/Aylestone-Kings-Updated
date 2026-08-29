import {
  Calendar,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  PoundSterling,
  Shield,
} from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"
import FAQSchema from "@/components/seo/FAQSchema"
import JsonLd from "@/components/seo/JsonLd"

const CANONICAL = "https://aylestone-taxis.co.uk/late-night-taxi-leicester"
const LATE_NIGHT_PHONE = "0116 233 8888"
const WHATSAPP_HREF = "https://wa.me/447888873795?text=Hi!%20I%20need%20a%20late%20night%20taxi%20in%20Leicester"

export const metadata: Metadata = {
  title: "Late Night Taxi Leicester — Fixed Fares, No Surge | Book 24/7",
  description:
    "Late night taxi in Leicester with fixed prices and no surge charging. Pre-book or WhatsApp on the night. Covering all city centre venues and all areas. Call 0116 233 8888.",
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "Late Night Taxi Leicester — Fixed Fares, No Surge | Book 24/7",
    description:
      "Late night taxi in Leicester with fixed prices and no surge charging. Pre-book or WhatsApp on the night. Covering all city centre venues and all areas. Call 0116 233 8888.",
    url: CANONICAL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Late Night Taxi Leicester — Fixed Fares, No Surge | Book 24/7",
    description:
      "Late night taxi in Leicester with fixed prices and no surge charging. Pre-book or WhatsApp on the night. Covering all city centre venues and all areas. Call 0116 233 8888.",
  },
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Late Night Taxi Leicester",
  url: CANONICAL,
  provider: {
    "@type": "LocalBusiness",
    name: "Aylestone Taxis",
  },
  areaServed: {
    "@type": "City",
    name: "Leicester",
  },
}

const faqs = [
  {
    question: "Do you do late night pickups in Leicester?",
    answer:
      "Yes. Our late night taxi Leicester service runs 24 hours a day, seven days a week — including Friday and Saturday nights when the city centre is busiest. We pick up from clubs, bars, restaurants, theatres, and the Clock Tower area whenever you need to get home. Book in advance or message us on WhatsApp when you are ready to leave.",
  },
  {
    question: "Is it cheaper than Uber on a Friday night?",
    answer:
      "Often yes. Ride-hailing apps frequently apply surge pricing on Friday and Saturday nights when demand spikes across Leicester city centre. Our fixed fares are agreed before you travel, so your Friday night taxi Leicester journey home costs what we quoted — not two or three times the normal rate because everyone is leaving at once.",
  },
  {
    question: "Can I pre-book a taxi for a night out in Leicester?",
    answer:
      "Yes. Pre-booking is ideal when you know your plans — a show at Curve Theatre, drinks in The Lanes, or a club night ending at a set time. Reserve your return pickup online or by phone and we will dispatch a driver at the agreed time. You can also WhatsApp us on the night if plans change and you need a taxi home sooner or later than expected.",
  },
  {
    question: "Do you pick up from the Clock Tower area?",
    answer:
      "Yes. The Clock Tower is one of Leicester's main meeting points after a night out, and we regularly collect passengers from the surrounding streets and nearby venues including Highcross Shopping Centre. Tell us your exact location when you book or WhatsApp us with a pin so your driver can find you quickly in the busy city centre.",
  },
]

const journeyHomeAreas = [
  { name: "Oadby", href: "/taxis-in/oadby" },
  { name: "Wigston", href: "/taxis-in/wigston" },
  { name: "Clarendon Park", href: "/taxis-in/clarendon-park" },
  { name: "Knighton", href: "/taxis-in/knighton" },
  { name: "Beaumont Leys", href: "/taxis-in/beaumont-leys" },
  { name: "Evington", href: "/taxis-in/evington" },
  { name: "Highfields", href: "/taxis-in/highfields" },
  { name: "Braunstone", href: "/taxis-in/braunstone" },
] as const

export default function LateNightTaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={serviceJsonLd} />
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        {/* Hero — WhatsApp & phone above the fold */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Late Night Taxi Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-8 leading-tight">
                Late Night Taxi Leicester
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-semibold transition-[transform,opacity] duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <MessageCircle className="h-6 w-6" />
                    WhatsApp +447888873795
                  </button>
                </a>
                <a
                  href={`tel:${LATE_NIGHT_PHONE.replace(/\s/g, "")}`}
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-[transform,opacity] duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Phone className="h-6 w-6" />
                    Call {LATE_NIGHT_PHONE}
                  </button>
                </a>
              </div>

              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto leading-relaxed">
                Need a reliable <strong>late night taxi Leicester</strong> after a night out? Aylestone
                Taxis offers <strong>fixed fares with no surge pricing</strong> — unlike Uber when the
                bars close. Whether you want a <strong>Friday night taxi Leicester</strong> home from
                the city centre or a <strong>taxi Leicester night out</strong> at any hour, we cover
                every venue and every suburb with a <strong>taxi home Leicester night</strong> service
                you can trust.
              </p>
            </div>
          </div>
        </section>

        {/* Fixed Fares */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Fixed Fares Home From Leicester City Centre
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                When clubs and bars empty out, ride-hailing apps surge. Our{" "}
                <strong>late night taxi Leicester</strong> fares stay fixed — quoted before you travel,
                with no meter climbing and no surprise multipliers on busy nights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <PoundSterling className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">No Surge vs Uber</h3>
                <p className="text-[#2E3C44]">
                  On a busy <strong>Friday night taxi Leicester</strong> run, Uber and similar apps
                  often charge surge multiples when everyone leaves at once. We agree your fare upfront
                  — the price when you book is the price you pay, whether it is midnight on a Saturday
                  or 2am after last orders.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Fixed Price Confirmed</h3>
                <p className="text-[#2E3C44]">
                  Every <strong>taxi home Leicester night</strong> journey is quoted at a fixed price
                  before your driver sets off. No hidden extras, no waiting-time surprises at the rank,
                  and no awkward fare disputes at your front door. Budget your night out knowing exactly
                  what the ride home costs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Licensed &amp; DBS-Checked</h3>
                <p className="text-[#2E3C44]">
                  All our drivers are licensed by Leicester City Council and DBS-checked — important
                  when you are travelling alone late at night. You get a professional, vetted driver
                  in a fully insured vehicle, not an unregulated lift from someone you met in a queue.
                </p>
              </div>
            </div>

            <p className="text-lg text-[#2E3C44] max-w-4xl mx-auto mt-12 text-center leading-relaxed">
              Looking for affordable fixed fares beyond nightlife? See our{" "}
              <Link href="/cheap-taxi-leicester" className="text-[#06A0A6] hover:underline font-medium">
                cheap taxi Leicester
              </Link>{" "}
              page for transparent pricing on local journeys across the city.
            </p>
          </div>
        </section>

        {/* Nightlife Venues */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Leicester Nightlife Venues We Cover
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                From theatre nights to club closing time, our <strong>taxi Leicester night out</strong>{" "}
                service knows where Leicester goes after dark.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-[#2E3C44] text-lg leading-relaxed">
              <p>
                Meet friends at the <strong>Clock Tower</strong> before heading into{" "}
                <strong>The Lanes</strong> for cocktails, or start your evening with dinner near{" "}
                <strong>Highcross Shopping Centre</strong>. We collect from every central meeting point
                — whether you have been watching a show at <strong>Curve Theatre</strong> or{" "}
                <strong>De Montfort Hall</strong>, or dancing until close at{" "}
                <strong>Athena</strong>, <strong>2Funky</strong>, <strong>Club Republic</strong>,{" "}
                <strong>Mosh</strong>, <strong>R/Bar</strong>, or <strong>Quarter 25</strong>.
              </p>
              <p>
                Leicester&apos;s nightlife spreads across the city centre, and our drivers know the
                best pickup spots for each venue. When the music stops and the lights come on, message
                us on WhatsApp or call — we dispatch a <strong>late night taxi Leicester</strong> to
                your location without the surge pricing you would face on a ride-hailing app.
              </p>
              <p>
                Flying home after a late arrival? Our{" "}
                <Link
                  href="/airport-transfers-leicester"
                  className="text-[#06A0A6] hover:underline font-medium"
                >
                  airport transfers Leicester
                </Link>{" "}
                service also covers early-morning and late-night airport runs — useful when your night
                out turns into an early flight the next day.
              </p>
            </div>
          </div>
        </section>

        {/* Areas for Journey Home */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Areas We Cover for Your Journey Home
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Wherever you live in Leicester, we get you home safely after a night out — fixed fare,
                no surge, door to door.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {journeyHomeAreas.map(({ name, href }) => (
                <div
                  key={href}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <MapPin className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      <Link href={href} className="text-[#06A0A6] hover:underline">
                        {name}
                      </Link>
                    </h3>
                    <p className="text-[#2E3C44]">
                      Fixed-price <strong>taxi home Leicester night</strong> runs from the city centre
                      to {name}. No surge on Friday or Saturday nights — your fare is confirmed when
                      you book or WhatsApp us from the venue.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-Book or WhatsApp */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Pre-Book or WhatsApp On the Night
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Two simple ways to secure your <strong>late night taxi Leicester</strong> — plan ahead
                or book when you are ready to leave.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F0D3E] mb-4">Pre-Book Your Return</h3>
                <p className="text-[#2E3C44] text-lg leading-relaxed mb-4">
                  Know when your night ends? Pre-book your return taxi online or by calling{" "}
                  <strong>{LATE_NIGHT_PHONE}</strong>. Tell us your venue, pickup time, and destination
                  — we confirm a fixed fare and dispatch a driver at the agreed time. Ideal for theatre
                  shows, planned nights out, and occasions when you want certainty before you even leave
                  the house.
                </p>
                <a
                  href={contactInfo.booking.online}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#06A0A6] font-semibold hover:underline"
                >
                  Book online now
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F0D3E] mb-4">WhatsApp On the Night</h3>
                <p className="text-[#2E3C44] text-lg leading-relaxed mb-4">
                  Plans changed or you did not know when you would leave? Message us on WhatsApp at{" "}
                  <strong>+447888873795</strong> when you are ready. Send your location pin, destination,
                  and how many passengers — we confirm your fixed fare and dispatch the nearest available
                  driver. Perfect for spontaneous <strong>Friday night taxi Leicester</strong> journeys
                  when you decide it is time to head home.
                </p>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] font-semibold hover:underline"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
              {[
                {
                  icon: Clock,
                  label: "24/7 availability",
                  detail: "Late night, early morning, and everything in between — we operate around the clock.",
                },
                {
                  icon: PoundSterling,
                  label: "Fixed fares always",
                  detail: "No surge pricing on busy nights. Your quote is your fare.",
                },
                {
                  icon: Check,
                  label: "Instant confirmation",
                  detail: "Receive booking confirmation by phone, SMS, or WhatsApp.",
                },
              ].map(({ icon: Icon, label, detail }) => (
                <div key={label} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start gap-3">
                    <Icon className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">{label}</h3>
                      <p className="text-[#2E3C44]">{detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6 text-left">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">{faq.question}</h3>
                  <p className="text-[#2E3C44] text-lg">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Book Your Late Night Taxi Leicester
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Fixed fares, no surge pricing, and drivers who know Leicester&apos;s nightlife. Call{" "}
              <strong>{LATE_NIGHT_PHONE}</strong> or WhatsApp us when you are ready to go home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp +447888873795
                </button>
              </a>
              <a href={`tel:${LATE_NIGHT_PHONE.replace(/\s/g, "")}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-[transform,opacity] duration-200 flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  Call {LATE_NIGHT_PHONE}
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
