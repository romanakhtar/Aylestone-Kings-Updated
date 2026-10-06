import type { Metadata } from "next"
import Link from "next/link"
import FAQSchema from "@/components/seo/FAQSchema"
import { buildCanonical } from "@/lib/seo/canonical"

const CANONICAL = buildCanonical("/halloween-taxi-leicester")
const PHONE = "0116 233 8888"
const WHATSAPP_HREF =
  "https://wa.me/447535855786?text=Hi!%20I%20need%20a%20Halloween%20taxi%20in%20Leicester"
const BOOK_ONLINE = "https://aylestonekings.webbooker.icabbi.com/"

const ORANGE = "#FF7B00"
const BLACK = "#111111"

export const metadata: Metadata = {
  title: "Halloween Taxi Leicester | Fixed Fares, No Surge",
  description:
    "Halloween taxi Leicester — fixed fares and no surge pricing on 31 October. Pre-book your ride home from every city centre venue. Call 0116 233 8888.",
  keywords:
    "halloween taxi leicester, taxi halloween leicester, halloween night out leicester taxi, halloween party taxi leicester, pre book halloween taxi leicester",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Halloween Taxi Leicester | Fixed Fares, No Surge",
    description:
      "Fixed fares, no surge pricing on Halloween night in Leicester. Pre-book your taxi home from Vibe, 2Funky, Athena, Mosh and Club Republic.",
    url: CANONICAL,
    type: "website",
  },
}

const faqs = [
  {
    question: "Do your taxi fares go up on Halloween night in Leicester?",
    answer:
      "No. We quote a fixed price when you book and that is the price you pay, whether you travel at 8pm or 2am on 31 October. There is no surge multiplier, no late-night uplift and no Halloween surcharge.",
  },
  {
    question: "How early should I book a Halloween taxi in Leicester?",
    answer:
      "As soon as your plans are set — ideally a week or more ahead. Halloween 2026 falls on a Friday, so it competes with normal weekend demand. Larger vehicles for groups of five or more go first, so book those earliest.",
  },
  {
    question: "Can I book a taxi on Halloween night itself?",
    answer:
      "Yes. Message us on WhatsApp at +447535855786 when you are ready to leave, send your location and destination, and we confirm a fixed fare before the driver sets off. Pre-booking is still safer on the night, because demand across Leicester peaks between 11pm and 2am.",
  },
  {
    question: "Which Leicester Halloween venues do you collect from?",
    answer:
      "All of the main city centre venues, including Vibe, 2Funky, Club Republic, Mosh and Athena, plus the bars around the Clock Tower, The Lanes and Granby Street. Name the venue when you book and your driver will meet you at a safe, agreed collection point nearby.",
  },
  {
    question: "Are your Halloween taxis safe for travelling alone?",
    answer:
      "Every driver is licensed by the council and DBS-checked, and your booking is recorded with vehicle details. That matters on a night when a lot of people travel alone and in costume. Wait inside the venue until we confirm your driver is outside.",
  },
]


const VENUES = ["Vibe", "2Funky", "Club Republic", "Mosh", "Athena", "The Lanes", "Clock Tower", "Granby Street"]

const AREAS = [
  { name: "Oadby", href: "/taxis-in/oadby" },
  { name: "Wigston", href: "/taxis-in/wigston" },
  { name: "Clarendon Park", href: "/taxis-in/clarendon-park" },
  { name: "Knighton", href: "/taxis-in/knighton" },
  { name: "Beaumont Leys", href: "/taxis-in/beaumont-leys" },
  { name: "Evington", href: "/taxis-in/evington" },
  { name: "Highfields", href: "/taxis-in/highfields" },
  { name: "Braunstone", href: "/taxis-in/braunstone" },
  { name: "Aylestone", href: "/taxis-in/aylestone" },
  { name: "Syston", href: "/taxis-in/syston" },
  { name: "Glen Parva", href: "/taxis-in/glen-parva" },
  { name: "Thurcaston", href: "/taxis-in/thurcaston" },
]

export default function HalloweenTaxiLeicesterPage() {
  return (
    <div style={{ backgroundColor: BLACK }} className="text-white">
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20" style={{ backgroundColor: BLACK }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]"
            style={{ backgroundColor: ORANGE, color: BLACK }}
          >
            Friday 31 October 2026
          </p>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08]">
            <span style={{ color: ORANGE }}>Halloween Taxi Leicester</span>
            <span className="block text-white mt-2">Fixed Fares. No Surge. Book Early.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#E4E4E4] leading-relaxed">
            Halloween is one of the busiest taxi nights of the year in Leicester. Costumed crowds fill the city centre,
            every venue empties at once, and ride-hailing apps apply their heaviest surge pricing of the season. Our
            price does not move. Pre-book your <strong className="text-white">Halloween taxi in Leicester</strong> and
            the fare you are quoted is the fare you pay.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={BOOK_ONLINE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: ORANGE, color: BLACK }}
            >
              Book Your Halloween Taxi
            </a>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 font-bold text-white transition-colors hover:bg-white/10"
              style={{ borderColor: ORANGE }}
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Why pre-book */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: ORANGE }}>
            Why Halloween is the worst night for surge pricing
          </h2>
          <p className="text-lg text-[#E4E4E4] leading-relaxed mb-5">
            Ride-hailing apps price by live demand. When hundreds of people across Leicester open the same app at the
            same moment — usually when venues call last orders — fares multiply and waiting times stretch. Standing on
            Granby Street in a costume at 1am watching the price climb is nobody&apos;s idea of a good end to the night.
          </p>
          <p className="text-lg text-[#E4E4E4] leading-relaxed">
            We work the opposite way. Your price is agreed when you book, it is the same at 2am as it is at 2pm, and it
            does not change because the city centre emptied all at once. That is true every night of the year — see our{" "}
            <Link href="/late-night-taxi-leicester" className="underline underline-offset-4" style={{ color: ORANGE }}>
              late night taxi Leicester
            </Link>{" "}
            service — and it is true on 31 October.
          </p>
        </div>
      </section>

      {/* Fixed price promise - no figures quoted */}
      <section className="py-16 md:py-20" style={{ backgroundColor: BLACK }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: ORANGE }}>
            One price, agreed before you travel
          </h2>
          <p className="text-lg text-[#E4E4E4] leading-relaxed mb-5">
            Every Halloween booking is quoted as a fixed price when you book. No meter running while the city centre
            crawls, no multiplier because a thousand people left the clubs at the same moment, and no surprise at the
            end of the journey. What you are quoted is what you pay.
          </p>
          <p className="text-lg text-[#E4E4E4] leading-relaxed mb-8">
            Your price depends on where you are going, the size of your group and the vehicle you need — so get a quote
            in seconds online, or call and we will give you the figure on the phone before you commit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={BOOK_ONLINE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: ORANGE, color: BLACK }}
            >
              Get Your Fixed Price
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 font-bold text-white transition-colors hover:bg-white/10"
              style={{ borderColor: ORANGE }}
            >
              How Our Pricing Works
            </Link>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: ORANGE }}>
            Collecting from every Leicester Halloween venue
          </h2>
          <p className="text-lg text-[#E4E4E4] leading-relaxed mb-8">
            Leicester&apos;s biggest Halloween nights run across the city centre clubs and bars. Streets around the
            venues get congested as crowds spill out, so tell us the venue name when you book and we will agree a
            collection point that is easy to reach on foot and safe to wait at.
          </p>
          <ul className="flex flex-wrap gap-3">
            {VENUES.map((v) => (
              <li
                key={v}
                className="rounded-lg border px-4 py-2 text-sm font-semibold"
                style={{ borderColor: ORANGE, color: ORANGE }}
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 md:py-20" style={{ backgroundColor: BLACK }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: ORANGE }}>
            Getting you home across Leicester
          </h2>
          <p className="text-lg text-[#E4E4E4] leading-relaxed mb-8">
            Wherever the night ends, we cover the areas people actually go home to — across Leicester and
            Leicestershire, 24 hours a day:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
            {AREAS.map((a) => (
              <li key={a.href}>
                <Link href={a.href} className="text-[#E4E4E4] hover:text-white transition-colors underline-offset-4 hover:underline">
                  Taxis in {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Book on the night */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: ORANGE }}>
            Not sure when you&apos;ll leave? WhatsApp us
          </h2>
          <ol className="space-y-4 text-lg text-[#E4E4E4] mb-8">
            <li>
              <span className="font-bold" style={{ color: ORANGE }}>
                1.
              </span>{" "}
              Message <strong className="text-white">+44 7535 855786</strong> when you are ready to go.
            </li>
            <li>
              <span className="font-bold" style={{ color: ORANGE }}>
                2.
              </span>{" "}
              Send your location pin or the venue name, your destination and how many of you there are.
            </li>
            <li>
              <span className="font-bold" style={{ color: ORANGE }}>
                3.
              </span>{" "}
              We confirm your fixed fare and send the nearest licensed, DBS-checked driver.
            </li>
          </ol>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: ORANGE, color: BLACK }}
          >
            WhatsApp +44 7535 855786
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20" style={{ backgroundColor: BLACK }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: ORANGE }}>
            Halloween taxi questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.question} className="rounded-xl border border-white/15 p-6" style={{ backgroundColor: "#1a1a1a" }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: ORANGE }}>
                  {f.question}
                </h3>
                <p className="text-[#E4E4E4] leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[#9CA3AF]">
            Planning the whole night? Read our{" "}
            <Link
              href="/blog/halloween-taxi-leicester-2026-pre-book-before-surge-prices-hit"
              className="underline underline-offset-4"
              style={{ color: ORANGE }}
            >
              Halloween taxi Leicester 2026 guide
            </Link>{" "}
            for costs, timings and the pre-booking window.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: BLACK }}>
            Book your Halloween taxi before Leicester sells out
          </h2>
          <p className="text-lg mb-9 max-w-2xl mx-auto" style={{ color: BLACK }}>
            Fixed fares, no surge on 31 October, licensed DBS-checked drivers and 24/7 cover across Leicester and
            Leicestershire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOK_ONLINE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLACK }}
            >
              Book Online
            </a>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 font-bold transition-colors hover:bg-black/10"
              style={{ borderColor: BLACK, color: BLACK }}
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
