import {
  ArrowRight,
  Calendar,
  Phone,
  Shield,
  Stethoscope,
  Users,
  Accessibility,
  ClipboardList,
} from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"
import FAQSchema from "@/components/seo/FAQSchema"

const PAGE_PHONE = "0116 233 8888"
const CANONICAL = "https://aylestone-taxis.co.uk/wheelchair-accessible-taxi-leicester"

export const metadata: Metadata = {
  title: "Wheelchair Accessible Taxi Leicester | Aylestone Kings",
  description:
    "Need a wheelchair accessible taxi in Leicester? Aylestone Kings provides safe, comfortable wheelchair accessible vehicles across Leicester. Pre-book online or call 0116 233 8888",
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "Wheelchair Accessible Taxi Leicester | Aylestone Kings",
    description:
      "Safe, comfortable wheelchair accessible taxis across Leicester. Pre-book online or call 0116 233 8888.",
    url: CANONICAL,
  },
}

const BOOKING_STEPS = [
  {
    step: "1",
    title: "Call or book online",
    body: "Contact us by phone or through our online booking form. Mention that you need a wheelchair accessible vehicle when you enquire.",
    icon: Phone,
  },
  {
    step: "2",
    title: "Tell us your requirements",
    body: "Let us know your wheelchair type (manual or powered), whether you will transfer to a seat or remain in your chair, and how many companions are travelling.",
    icon: ClipboardList,
  },
  {
    step: "3",
    title: "Confirm your pickup",
    body: "We allocate a suitable accessible vehicle and confirm your pickup time, address, and any hospital entrance or drop-off instructions.",
    icon: Calendar,
  },
] as const

export default function WheelchairAccessibleTaxiLeicesterPage() {
  const faqs = [
    {
      question: "Do you have wheelchair accessible taxis in Leicester?",
      answer:
        "Yes. Aylestone Kings operates wheelchair accessible vehicles across Leicester and Leicestershire. Because availability is limited compared with standard saloons, we ask passengers to pre-book so we can assign the right vehicle for your journey.",
    },
    {
      question: "How do I book a wheelchair accessible taxi?",
      answer:
        "Call " +
        PAGE_PHONE +
        " or book online and state that you need a wheelchair accessible vehicle. Tell us your pickup address, destination, wheelchair type, and preferred time. For hospital appointments, mention the entrance or department so your driver knows where to meet you.",
    },
    {
      question: "Do you cover hospital appointments?",
      answer:
        "Yes. We regularly take passengers to Leicester Royal Infirmary (LRI), Leicester General Hospital, and Glenfield Hospital for outpatient appointments, treatment sessions, and discharge pickups. Pre-booking is strongly recommended so an accessible vehicle is reserved for your appointment time.",
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
                Accessible transport · Leicester &amp; Leicestershire
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight max-w-5xl mx-auto">
                Wheelchair Accessible Taxi Leicester
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto leading-relaxed">
                Aylestone Kings provides safe, comfortable wheelchair accessible taxis for hospital visits, local
                appointments, and longer journeys across Leicester — with licensed drivers and advance booking to
                guarantee the right vehicle.
              </p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20 bg-white" aria-labelledby="accessible-taxi-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="accessible-taxi-heading" className="sr-only">
              About our wheelchair accessible taxi service
            </h2>
            <div className="space-y-6 text-[#2E3C44] text-lg leading-relaxed">
              <p>
                Getting around Leicester when you use a wheelchair should not mean compromising on comfort, dignity, or
                punctuality. Aylestone Kings has provided taxi services across the city since 1995, and our wheelchair
                accessible vehicles are part of that long-standing commitment to passengers who need a little extra
                space and the right equipment on board.
              </p>
              <p>
                Our accessible fleet includes purpose-adapted vehicles with ramp or lift access, secure wheelchair
                restraints, and room for a companion or carer to travel alongside. Each vehicle typically accommodates
                one wheelchair user plus up to two additional passengers, depending on wheelchair size and seating
                layout. Manual and most powered wheelchairs can be carried when you remain seated in your chair for the
                journey; if you prefer to transfer into a standard seat, let us know when booking so we can allow extra
                time at pickup.
              </p>
              <p>
                Because wheelchair accessible taxis are a specialist resource,{" "}
                <strong>pre-booking is required</strong> — we cannot always guarantee same-day availability from a
                standard dispatch without notice. Booking at least 24 hours ahead is ideal for hospital appointments and
                airport runs; for discharge pickups or urgent medical visits, call us as early as possible and we will do
                our best to help.
              </p>
              <p>
                Hospital transport is one of the most common reasons passengers request an accessible taxi in Leicester.
                We regularly serve{" "}
                <strong>Leicester Royal Infirmary (LRI)</strong> in the city centre,{" "}
                <strong>Leicester General Hospital</strong> in Evington, and{" "}
                <strong>Glenfield Hospital</strong> to the west of the city. Our drivers are used to the access roads,
                drop-off bays, and varying pickup points at each site — whether you are attending an outpatient clinic,
                visiting a ward, or being collected after treatment. Mention the entrance or department when you book
                so your driver knows exactly where to meet you.
              </p>
              <p>
                Beyond hospitals, our wheelchair accessible taxis cover everyday Leicester journeys too — shopping trips,
                family visits, station transfers, and appointments at GP surgeries or clinics. For longer routes, we
                also support accessible travel on agreed{" "}
                <Link href="/airport-transfers-leicester" className="text-[#06A0A6] font-semibold hover:underline">
                  airport transfers
                </Link>{" "}
                and cross-city trips booked through our{" "}
                <Link href="/local-taxi-leicester" className="text-[#06A0A6] font-semibold hover:underline">
                  local taxi Leicester
                </Link>{" "}
                service. Fares are quoted upfront for agreed routes so you know the cost before you travel.
              </p>
              <p>
                Every driver is licensed by Leicester City Council and DBS checked. Vehicles are maintained to council
                inspection standards, and our team will talk you through the boarding process before your journey begins
                so you feel comfortable with how the ramp, restraints, and seating work. If you have specific needs —
                oxygen equipment, a folding walker, or a preferred side for boarding — tell us at the time of booking
                and we will note it on your job.
              </p>
            </div>
          </div>
        </section>

        {/* Vehicles & capacity */}
        <section className="py-20 bg-[#E4E4E4]" aria-labelledby="vehicles-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 id="vehicles-heading" className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
                Available vehicles &amp; capacity
              </h2>
              <p className="text-lg text-[#2E3C44] max-w-2xl mx-auto">
                Purpose-adapted taxis designed for safe, dignified wheelchair travel.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="w-11 h-11 bg-[#06A0A6]/15 rounded-xl flex items-center justify-center mb-4">
                  <Accessibility className="h-5 w-5 text-[#06A0A6]" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">Ramp &amp; lift access</h3>
                <p className="text-[#2E3C44]">
                  Vehicles fitted with a ramp or lift for straightforward boarding without leaving your wheelchair.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="w-11 h-11 bg-[#06A0A6]/15 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-5 w-5 text-[#06A0A6]" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">Passenger capacity</h3>
                <p className="text-[#2E3C44]">
                  Typically one wheelchair user plus up to two companions or a carer, subject to wheelchair dimensions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="w-11 h-11 bg-[#06A0A6]/15 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-5 w-5 text-[#06A0A6]" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">Secure restraints</h3>
                <p className="text-[#2E3C44]">
                  Wheelchair tie-downs and occupant belts fitted so your chair is held safely for the full journey.
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#2E3C44]">
              <span className="inline-flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-[#06A0A6]" aria-hidden />
                LRI · Leicester General · Glenfield Hospital
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#06A0A6]" aria-hidden />
                Pre-booking required
              </span>
            </div>
          </div>
        </section>

        {/* How to request */}
        <section className="py-20 bg-white" aria-labelledby="how-to-book-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 id="how-to-book-heading" className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
                How to request a wheelchair accessible vehicle
              </h2>
              <p className="text-lg text-[#2E3C44] max-w-2xl mx-auto">
                Three simple steps to reserve the right vehicle for your journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {BOOKING_STEPS.map(({ step, title, body, icon: Icon }) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 bg-[#06A0A6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step}</span>
                  </div>
                  <div className="w-10 h-10 bg-[#06A0A6]/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-5 w-5 text-[#06A0A6]" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">{title}</h3>
                  <p className="text-[#2E3C44]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#E4E4E4]" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-8 text-center">
              Frequently asked questions
            </h2>
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
              Book your wheelchair accessible taxi
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Pre-book online or call us to reserve an accessible vehicle for your next journey.
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
