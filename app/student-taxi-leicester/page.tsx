import {
  Calendar,
  Check,
  Clock,
  Luggage,
  MapPin,
  Phone,
  PoundSterling,
  Shield,
  Train,
  Users,
} from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"
import FAQSchema from "@/components/seo/FAQSchema"

const CANONICAL = "https://aylestone-taxis.co.uk/student-taxi-leicester"
const STUDENT_PHONE = "0116 233 8888"

export const metadata: Metadata = {
  title: "Student Taxi Leicester — House Moves, Airport Transfers | Book 24/7",
  description:
    "Student taxi services in Leicester for University of Leicester and DMU students. House moves, airport transfers and group bookings. Fixed prices. Call 0116 233 8888.",
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "Student Taxi Leicester — House Moves, Airport Transfers | Book 24/7",
    description:
      "Student taxi services in Leicester for University of Leicester and DMU students. House moves, airport transfers and group bookings. Fixed prices. Call 0116 233 8888.",
    url: CANONICAL,
  },
}

const faqs = [
  {
    question: "Do you offer student discounts on taxi fares?",
    answer:
      "We keep student taxi Leicester fares affordable with fixed pricing rather than surge charges — so you always know the cost before you travel. While we do not run a separate discount code scheme, our fixed fares for airport runs, train station trips, and local journeys are competitive for students on a budget. Book online or call 0116 233 8888 for a quote.",
  },
  {
    question: "Can you help with a house move at the end of term in Leicester?",
    answer:
      "Yes. End-of-term house moves are one of our most popular student bookings. We send estate cars or MPVs with generous luggage space for boxes, suitcases, and bedding. Tell us your pickup and drop-off addresses, how much you are moving, and we will quote a fixed price for the journey — no meter running while you load up.",
  },
  {
    question: "Do you offer group bookings for students sharing a house?",
    answer:
      "Yes. If you live in a shared house in Clarendon Park, Knighton, Highfields, or elsewhere in Leicester, you can book one vehicle for the whole group. Group bookings work well for house moves, nights out, and airport runs when several housemates are travelling together. One fixed fare per vehicle, not per person.",
  },
]

export default function StudentTaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Student Taxi Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Student Taxi Leicester
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Reliable <strong>student taxi Leicester</strong> services for{" "}
                <strong>University of Leicester</strong> and{" "}
                <strong>De Montfort University (DMU)</strong> students. Whether you need an{" "}
                <strong>end-of-term house move</strong> with luggage space, an{" "}
                <strong>airport or train station transfer</strong> home for the holidays, or a{" "}
                <strong>group booking</strong> for your shared house, Aylestone Taxis offers{" "}
                <strong>affordable fixed pricing</strong> with no surprise charges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={contactInfo.booking.online}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-[transform,opacity] duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Calendar className="h-6 w-6" />
                    Book Online
                  </button>
                </a>
                <a
                  href={`tel:${STUDENT_PHONE.replace(/\s/g, "")}`}
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-[transform,opacity] duration-200 text-lg flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6" />
                    Call {STUDENT_PHONE}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Student Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Taxi Services Built for Leicester Students
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                From moving out of your student house to catching a train home, our{" "}
                <strong>student taxi Leicester</strong> service covers the journeys students
                actually need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Luggage className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  End-of-Term House Moves
                </h3>
                <p className="text-[#2E3C44]">
                  Moving out at the end of term? We provide <strong>estate and MPV options</strong>{" "}
                  with generous <strong>luggage space</strong> for boxes, suitcases, kitchen gear,
                  and bedding. One fixed fare for the whole move — load at your old address, unload
                  at your new one, and split the cost with housemates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Train className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Airport &amp; Train Station Transfers
                </h3>
                <p className="text-[#2E3C44]">
                  Heading home for the holidays? Book a fixed-price run to{" "}
                  <strong>Leicester train station</strong> or{" "}
                  <strong>East Midlands Airport</strong>. We also cover Birmingham, Heathrow, and
                  other UK airports — see our{" "}
                  <Link
                    href="/airport-transfers-leicester"
                    className="text-[#06A0A6] hover:underline font-medium"
                  >
                    airport transfers Leicester
                  </Link>{" "}
                  page for full details.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Group Bookings for Shared Houses
                </h3>
                <p className="text-[#2E3C44]">
                  Live with housemates in{" "}
                  <Link href="/taxis-in/clarendon-park" className="text-[#06A0A6] hover:underline font-medium">
                    Clarendon Park
                  </Link>
                  ,{" "}
                  <Link href="/taxis-in/knighton" className="text-[#06A0A6] hover:underline font-medium">
                    Knighton
                  </Link>
                  , or{" "}
                  <Link href="/taxis-in/highfields" className="text-[#06A0A6] hover:underline font-medium">
                    Highfields
                  </Link>
                  ? Book one vehicle for the whole house — nights out, airport runs, or end-of-term
                  moves. <strong>Affordable fixed pricing</strong> per car keeps costs predictable
                  when you split the fare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Student Areas */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Student Areas We Cover
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                We know Leicester&apos;s student neighbourhoods and pick up daily from the areas
                closest to campus.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 text-[#2E3C44] text-lg leading-relaxed">
              <p>
                <Link href="/taxis-in/clarendon-park" className="text-[#06A0A6] hover:underline font-medium">
                  Clarendon Park
                </Link>{" "}
                sits between the University of Leicester campus and Victoria Park — one of the most
                popular student areas in the city. We run regular pickups from Clarendon Park roads
                for lectures, nights out, and end-of-term moves when students are heading home or
                relocating to a new house share.
              </p>
              <p>
                <Link href="/taxis-in/knighton" className="text-[#06A0A6] hover:underline font-medium">
                  Knighton
                </Link>{" "}
                is another well-established student area south of the university, with good links
                to both the University of Leicester and DMU. Whether you need a quick run into town
                or a larger vehicle for a house move, we cover Knighton with the same fixed-price
                service available across Leicester.
              </p>
              <p>
                <Link href="/taxis-in/highfields" className="text-[#06A0A6] hover:underline font-medium">
                  Highfields
                </Link>{" "}
                is popular with DMU students and those studying at Leicester College. Close to
                London Road and the city centre, Highfields is a convenient pickup point for train
                station transfers and airport runs at the start and end of term. Book ahead during
                busy move-out weekends to secure an estate or MPV with enough room for everything.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Examples */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Student Taxi Leicester — Example Prices
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Indicative <strong>fixed fares</strong> for common student journeys. Your exact
                quote is confirmed when you book.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      City Centre to Leicester Train Station — from £6
                    </h3>
                    <p className="text-[#2E3C44]">
                      A quick, affordable run from the <strong>city centre</strong> to{" "}
                      <strong>Leicester train station</strong> from <strong>£6</strong> — ideal
                      when you are catching a train home with a suitcase and want to avoid the
                      walk with heavy bags.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      City Centre to East Midlands Airport — from £28
                    </h3>
                    <p className="text-[#2E3C44]">
                      Flying home for the holidays? A fixed-price run from the{" "}
                      <strong>city centre to East Midlands Airport</strong> starts from{" "}
                      <strong>£28</strong>. No surge pricing at the end of term — the fare is
                      agreed before you travel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Luggage className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      House Move Within Leicester — from £20
                    </h3>
                    <p className="text-[#2E3C44]">
                      Moving between student houses within Leicester starts from{" "}
                      <strong>£20</strong> in an estate car, with MPV options available for larger
                      loads. Tell us what you are moving and we will recommend the right vehicle
                      and quote a single fixed price for the journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Students Choose Us */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Leicester Students Choose Aylestone Taxis
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Clock, label: "24/7 booking", detail: "Book online or by phone any time — useful for early trains and late arrivals." },
                { icon: PoundSterling, label: "Affordable fixed pricing", detail: "Know the fare upfront. No surge charges during busy end-of-term weekends." },
                { icon: Shield, label: "DBS-checked drivers", detail: "Licensed, vetted drivers you can trust for late-night and early-morning runs." },
                { icon: Luggage, label: "Estate & MPV options", detail: "Room for suitcases, boxes, and house-move belongings." },
                { icon: Users, label: "Group bookings", detail: "One car for your whole house — split the fixed fare between housemates." },
                { icon: Check, label: "University & DMU coverage", detail: "Regular pickups from Clarendon Park, Knighton, Highfields, and campus areas." },
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
              Book Your Student Taxi Leicester Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              House moves, airport transfers, and group bookings for University of Leicester and
              DMU students. Call <strong>{STUDENT_PHONE}</strong> or book online — fixed prices,
              no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] flex items-center justify-center gap-3">
                  Book Online
                  <Calendar className="h-5 w-5" />
                </button>
              </a>
              <a
                href={`tel:${STUDENT_PHONE.replace(/\s/g, "")}`}
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-[transform,opacity] duration-200 flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  Call {STUDENT_PHONE}
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
