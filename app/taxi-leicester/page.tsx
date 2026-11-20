import { ArrowRight, MapPin, Phone, Calendar, MessageCircle, Smartphone, Check } from "lucide-react"
import { contactInfo, siteData, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_DISPLAY, WHATSAPP_WA } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"
import FAQSchema from "@/components/seo/FAQSchema"
import { buildCanonical } from "@/lib/seo/canonical"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import { finalizeMetadata } from "@/lib/seo/pageMetadata"
import RelatedGuides from "@/components/RelatedGuides"

const canonical = buildCanonical("/taxi-leicester")

/*
 * Positioning: this page answers "what's the number / how do I book a taxi in
 * Leicester" (queries like "leicester taxi numbers", "how to book a taxi in
 * Leicester"). The homepage owns the head term "taxi leicester"; this page must
 * not compete with it, so the copy leads with contact routes, not the head term.
 * Canonical and og:url are self-referencing (finalizeMetadata derives og:url).
 */
export const metadata: Metadata = finalizeMetadata({
  title: `Leicester Taxi Number: ${PHONE_DISPLAY} | How to Book`,
  description: `Need a Leicester taxi number? Call ${PHONE_DISPLAY}, WhatsApp ${WHATSAPP_DISPLAY} or book online or in our app. Fixed fare before you travel, 24/7.`,
  alternates: {
    canonical,
  },
})

const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_WA}?text=${encodeURIComponent("Hi, I'd like to book a taxi in Leicester.")}`
const APP_STORE = "https://apps.apple.com/gb/app/aylestone-kings/id1061012064"
const PLAY_STORE = "https://play.google.com/store/apps/details?id=co.uk.aylestone.taxis"

const faqs = [
  {
    question: "What is the Aylestone Taxis phone number?",
    answer: `Call ${PHONE_DISPLAY}. The line is answered 24 hours a day, 7 days a week, including bank holidays. You can also WhatsApp us on ${WHATSAPP_DISPLAY}.`,
  },
  {
    question: "Can I book a taxi in Leicester on WhatsApp?",
    answer: `Yes. Message ${WHATSAPP_DISPLAY} with your pickup address, destination, time and number of passengers. We reply with your fixed fare and confirm the booking in the chat.`,
  },
  {
    question: "How do I book a taxi online or in the app?",
    answer:
      "Use the online booking page or download our app from the App Store or Google Play. Enter your pickup and drop-off, choose a vehicle, and you will see the fare before you confirm.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For a local journey you can book for straight away. For airport transfers, early-morning starts and Friday or Saturday nights, pre-book so a car is reserved for your time.",
  },
  {
    question: "Will the fare change after I book?",
    answer:
      "No. The fare is agreed before you travel and does not go up because of traffic or a busy night. There is no surge pricing.",
  },
]

const bookingRoutes = [
  {
    icon: Phone,
    title: "Call us",
    detail: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    cta: "Call now",
    body: "Best for booking straight away or when you need to talk through a journey — a group, extra luggage, a wheelchair, or a return trip.",
    external: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: WHATSAPP_DISPLAY,
    href: WHATSAPP_HREF,
    cta: "Message us",
    body: "Send your pickup, destination and time. Handy on a night out or when you would rather not make a call.",
    external: true,
  },
  {
    icon: Calendar,
    title: "Book online",
    detail: "Instant quote",
    href: contactInfo.booking.online,
    cta: "Book online",
    body: "Enter your journey, pick a vehicle and see the fare before you confirm. Good for pre-booking airport runs.",
    external: true,
  },
]

export default function TaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[{ name: "Home", href: "/" }, { name: "Taxi Number & Booking" }]}
        pageUrl={canonical}
      />
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        {/* Hero: number first */}
        <section className="py-20 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
              Answered 24 hours a day
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
              Leicester Taxi Number &amp; How to Book
            </h1>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-3 text-4xl md:text-5xl font-bold text-[#06A0A6] hover:text-[#0F0D3E] transition-colors mb-6"
            >
              <Phone className="h-9 w-9" aria-hidden />
              {PHONE_DISPLAY}
            </a>
            <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto mb-10 leading-relaxed">
              Call, WhatsApp or book online with Aylestone Taxis, a Leicester firm based on Aylestone Road since 1995.
              Your fare is agreed before you travel and every driver is licensed and DBS-checked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-3 text-lg transition-colors"
              >
                <Phone className="h-6 w-6" aria-hidden />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-3 text-lg transition-colors"
              >
                <MessageCircle className="h-6 w-6" aria-hidden />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] hover:bg-[#06A0A6] hover:text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 text-lg transition-colors"
              >
                <Calendar className="h-6 w-6" aria-hidden />
                Book online
              </a>
            </div>
          </div>
        </section>

        {/* Three ways to book */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F0D3E] mb-4">Three ways to book a taxi in Leicester</h2>
              <p className="text-lg text-[#2E3C44] max-w-3xl mx-auto">
                Every route reaches the same dispatch team, so the fare and the car are the same whichever you choose.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bookingRoutes.map((route) => (
                <div key={route.title} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                  <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                    <route.icon className="h-6 w-6 text-[#06A0A6]" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F0D3E]">{route.title}</h3>
                  <p className="text-[#06A0A6] font-semibold mb-3">{route.detail}</p>
                  <p className="text-[#2E3C44] mb-6 flex-1">{route.body}</p>
                  <a
                    href={route.href}
                    {...(route.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-2 font-semibold text-[#06A0A6] hover:text-[#0F0D3E]"
                  >
                    {route.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              ))}
            </div>

            {/* App */}
            <div className="mt-10 bg-[#E4E4E4] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
              <Smartphone className="h-10 w-10 text-[#06A0A6] flex-shrink-0" aria-hidden />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-1">Prefer an app?</h3>
                <p className="text-[#2E3C44]">
                  Book, see your fare and track your car from your phone. Available on iPhone and Android.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href={APP_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0F0D3E] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] transition-colors"
                >
                  App Store
                </a>
                <a
                  href={PLAY_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0F0D3E] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] transition-colors"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What to have ready */}
        <section className="py-20 bg-[#F9FAFB]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-6">What to have ready when you book</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#2E3C44]">
              {[
                "Your pickup address or a landmark (a house number, venue entrance or station exit)",
                "Where you are going",
                "The time you want to be collected, or the time you need to arrive",
                "How many passengers, and any large luggage, child seats or a wheelchair",
                "For airport pickups, your flight number so we can allow for delays",
                "A mobile number, so the driver can reach you on arrival",
              ].map((item) => (
                <li key={item} className="flex gap-3 bg-white p-4 rounded-xl border border-gray-100">
                  <Check className="h-5 w-5 text-[#06A0A6] flex-shrink-0 mt-0.5" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[#2E3C44]">
              You will get a confirmation by SMS or WhatsApp. For regular business travel, a{" "}
              <Link href="/corporate-taxi-account-leicester" className="text-[#06A0A6] underline hover:no-underline">
                corporate taxi account
              </Link>{" "}
              lets authorised staff book without paying on the day.
            </p>
          </div>
        </section>

        {/* Areas */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">Where we pick up</h2>
              <p className="text-lg text-[#2E3C44] max-w-3xl mx-auto">
                The same number covers the whole city and county. Some of the areas we serve:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {siteData.homepage.seoContent.areas.links.slice(0, 12).map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:bg-[#06A0A6]/5 transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#06A0A6]" aria-hidden />
                    <span className="text-[#0F0D3E] font-medium">{area.name}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/#areas" className="text-[#06A0A6] underline hover:no-underline font-semibold">
                View all areas we cover →
              </Link>
            </div>
          </div>
        </section>

        {/* Journey times + FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">Typical journey times</h2>
                <p className="text-lg text-[#2E3C44] mb-6">
                  Useful when you are deciding what time to book. Allow extra at rush hour and on match or event days.
                </p>
                <ul className="space-y-3 text-[#2E3C44]">
                  <li>Leicester city centre → Aylestone: around 10–15 minutes</li>
                  <li>Leicester → Oadby or Wigston: around 15–20 minutes</li>
                  <li>
                    Leicester →{" "}
                    <Link href="/leicester-to-east-midlands-airport-taxi" className="text-[#06A0A6] underline hover:no-underline">
                      East Midlands Airport
                    </Link>
                    : around 35–45 minutes from the city centre
                  </li>
                  <li>
                    Leicester →{" "}
                    <Link href="/taxi-to-birmingham-airport" className="text-[#06A0A6] underline hover:no-underline">
                      Birmingham Airport
                    </Link>
                    : around 45–60 minutes
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">Booking questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <details key={faq.question} className="group border border-gray-200 rounded-lg p-4 bg-white">
                      <summary className="cursor-pointer text-[#0F0D3E] font-semibold">{faq.question}</summary>
                      <p className="mt-2 text-[#2E3C44]">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 bg-[#E4E4E4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0F0D3E] mb-6 text-center">Related services</h2>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              {[
                { href: "/local-taxi-leicester", label: "Local taxi journeys" },
                { href: "/airport-taxi-leicester", label: "Airport taxis" },
                { href: "/late-night-taxi-leicester", label: "Late-night taxis" },
                { href: "/taxi-near-me-leicester", label: "Taxi near me" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center justify-center bg-white text-[#0F0D3E] px-6 py-3 rounded-xl font-semibold shadow-md hover:text-[#06A0A6] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Ready to book?</h2>
            <p className="text-xl text-[#E4E4E4] mb-8">Call, WhatsApp or book online — day or night.</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] flex items-center justify-center gap-3"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] flex items-center justify-center gap-3"
              >
                Book online
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </section>
        <RelatedGuides slugs={["how-to-book-taxi-leicester-quickly","local-taxi-service-vs-ride-sharing-apps-leicester"]} />
      </main>
    </div>
  )
}
