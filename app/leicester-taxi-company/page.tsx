import { ArrowRight, Clock, MapPin, Phone, Plane, Shield, GraduationCap, Building2, Route } from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"
import FAQSchema from "@/components/seo/FAQSchema"

const PAGE_PHONE = "0116 233 8888"
const CANONICAL = "https://aylestone-taxis.co.uk/leicester-taxi-company"

export const metadata: Metadata = {
  title: "Leicester Taxi Company | Aylestone Kings | Book 24/7",
  description:
    "Aylestone Kings — Leicester's trusted taxi company since 1995. Fixed prices, DBS-checked drivers, available 24/7. Airport transfers, school runs & corporate accounts. Call 0116 233 8888.",
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "Leicester Taxi Company | Aylestone Kings | Book 24/7",
    description:
      "Aylestone Kings — Leicester's trusted taxi company since 1995. Fixed prices, DBS-checked drivers, available 24/7.",
    url: CANONICAL,
  },
}

const SERVICES = [
  {
    title: "Airport transfers",
    description:
      "Fixed-price runs to East Midlands, Birmingham, Heathrow, and other UK airports with flight monitoring available.",
    icon: Plane,
  },
  {
    title: "School runs",
    description:
      "Safe, repeatable morning and afternoon collections with DBS-checked drivers parents can rely on.",
    icon: GraduationCap,
  },
  {
    title: "Corporate accounts",
    description:
      "Centralised billing and account references for staff travel, client visits, and regular airport work.",
    icon: Building2,
  },
  {
    title: "Long-distance travel",
    description:
      "UK-wide journeys priced upfront — ideal for business trips, family visits, and port transfers.",
    icon: Route,
  },
  {
    title: "Local Leicester journeys",
    description:
      "City centre, suburbs, hospitals, stations, and late-night pickups across Leicester and Leicestershire.",
    icon: MapPin,
  },
  {
    title: "24/7 availability",
    description:
      "Day shifts, night flights, bank holidays, and early-morning hospital appointments — we are always on duty.",
    icon: Clock,
  },
] as const

export default function LeicesterTaxiCompanyPage() {
  const faqs = [
    {
      question: "What areas do you cover in Leicester?",
      answer:
        "We cover Leicester city centre and suburbs including Aylestone, Oadby, Wigston, Beaumont Leys, Belgrave, Knighton, and surrounding Leicestershire. For a specific pickup point, call " +
        PAGE_PHONE +
        " or book online.",
    },
    {
      question: "Do you offer fixed price fares?",
      answer:
        "Yes. We quote fixed price fares for agreed routes — especially airport transfers and long-distance journeys — so you know the cost before you travel. Local trips can also be priced upfront when you book online or by phone.",
    },
    {
      question: "Are your drivers licensed and DBS checked?",
      answer:
        "Yes. Every driver is licensed by Leicester City Council and DBS checked. Vehicles are inspected to council standards and carry the proper insurance for passenger hire.",
    },
    {
      question: "How do I book a Leicester taxi?",
      answer:
        "Book online through our secure booking form, call " +
        PAGE_PHONE +
        ", or message us on WhatsApp. You will see your fare before you confirm and can schedule immediate or advance pickups.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Locally owned · Leicester since 1995
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight max-w-5xl mx-auto">
                Leicester Taxi Company — Aylestone Kings
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto leading-relaxed">
                Aylestone Kings is a locally owned Leicester taxi company built on fixed fares, licensed drivers,
                and round-the-clock cover for the journeys Leicester relies on every day.
              </p>
            </div>
          </div>
        </section>

        {/* Brand story */}
        <section className="py-20 bg-white" aria-labelledby="our-story-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="our-story-heading" className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-8 text-center">
              Our story in Leicester
            </h2>
            <div className="space-y-6 text-[#2E3C44] text-lg leading-relaxed">
              <p>
                When Aylestone Kings started in 1995, Leicester already had plenty of ways to get from A to B. What the
                city needed was a Leicester taxi company that combined local accountability with the kind of reliability
                families, shift workers, and businesses could depend on year after year. We set out to build exactly that
                — not a distant franchise, but a locally owned and operated service rooted in Aylestone and serving the
                whole city.
              </p>
              <p>
                Three decades on, that founding idea has not changed. The business is still run by people who live and
                work here. Dispatchers know the suburbs by name — from Clarendon Park and Knighton to Beaumont Leys and
                Braunstone — and drivers understand that a missed school run or a late airport pickup has real
                consequences for the passengers waiting at the kerb. That local presence is what separates a genuine
                Leicester taxi company from a national app that treats your postcode as just another pin on a map.
              </p>
              <p>
                Every driver on our fleet is licensed by Leicester City Council and DBS checked before carrying a single
                passenger. Licensing means annual vehicle inspections, proper insurance, and identification you can
                verify. DBS checking gives parents, carers, and travel managers confidence that the person behind the
                wheel has been vetted to a professional standard. We do not cut corners on compliance because our
                reputation in Leicester depends on doing things properly.
              </p>
              <p>
                Pricing follows the same straight-talking approach. We offer fixed price fares on agreed routes —
                especially airport transfers and long-distance journeys where uncertainty is the last thing you need
                before a flight. You can{" "}
                <Link href="/#fare-estimator" className="text-[#06A0A6] font-semibold hover:underline">
                  get an instant fare estimate
                </Link>{" "}
                before you confirm, and the price you are quoted is the price you pay. No surge pricing on a rainy Friday
                night, no meter ticking up in unexpected traffic once a job is booked.
              </p>
              <p>
                We operate twenty-four hours a day, seven days a week, including bank holidays and the small hours when
                other options disappear. Early flights from East Midlands, Birmingham, or Heathrow; a hospital visit at
                dawn; a shift change at midnight — our controllers and drivers are on duty when Leicester needs them.
              </p>
              <p>
                Our services reflect how the city actually moves. Airport transfers are a mainstay, with flight monitoring
                and meet-and-greet available on request. School runs are booked weeks in advance by parents who want the
                same trusted driver each morning. Businesses across Leicestershire hold a{" "}
                <Link
                  href="/corporate-taxi-account-leicester"
                  className="text-[#06A0A6] font-semibold hover:underline"
                >
                  corporate taxi account
                </Link>{" "}
                with us for staff travel, client visits, and consolidated monthly invoicing. Long-distance work —
                Manchester, London, coastal ports — is priced upfront so finance teams can approve travel without
                guesswork.
              </p>
              <p>
                Throughout, we remain what we set out to be in 1995: a Leicester taxi company that treats every journey
                as a promise, not a transaction. Whether you need a five-minute hop to Leicester Royal Infirmary or a
                cross-country run for a site audit, you get the same licensed car, the same fair price, and the same
                people answering the phone when you call.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#E4E4E4]" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
                What our Leicester taxi company offers
              </h2>
              <p className="text-lg text-[#2E3C44] max-w-2xl mx-auto">
                From daily local trips to planned airport and business travel — one team, one standard of service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map(({ title, description, icon: Icon }) => (
                <div key={title} className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="w-11 h-11 bg-[#06A0A6]/15 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-[#06A0A6]" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">{title}</h3>
                  <p className="text-[#2E3C44]">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#2E3C44]">
              <span className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#06A0A6]" aria-hidden />
                Licensed by Leicester City Council
              </span>
              <span className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#06A0A6]" aria-hidden />
                DBS-checked drivers
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#06A0A6]" aria-hidden />
                Available 24/7
              </span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4 text-center">
              Frequently asked questions
            </h2>
            <p className="text-center text-[#2E3C44] mb-8 max-w-2xl mx-auto">
              Common questions about booking, fares, and coverage with our Leicester taxi company.
            </p>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group border border-gray-200 rounded-lg p-4 bg-white">
                  <summary className="cursor-pointer text-[#0F0D3E] font-semibold">{faq.question}</summary>
                  <p className="mt-2 text-[#2E3C44]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Ready to book your Leicester taxi?
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Call us any time or book online — fixed fares, licensed drivers, and 24/7 availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <span className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-3 rounded-lg bg-white px-8 py-4 font-semibold text-[#06A0A6] hover:bg-[#E4E4E4]">
                  Book Online
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </span>
              </a>
              <a href={`tel:${PAGE_PHONE.replace(/\s/g, "")}`} className="w-full sm:w-auto">
                <span className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-[transform,opacity] duration-200 hover:bg-white hover:text-[#06A0A6]">
                  <Phone className="h-5 w-5" aria-hidden />
                  {PAGE_PHONE}
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
