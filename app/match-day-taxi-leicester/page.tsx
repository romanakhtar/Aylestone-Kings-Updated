import {
  Calendar,
  Check,
  Clock,
  MapPin,
  Phone,
  PoundSterling,
  Shield,
  Users,
} from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"
import FAQSchema from "@/components/seo/FAQSchema"

const CANONICAL = "https://aylestone-taxis.co.uk/match-day-taxi-leicester"
const MATCH_DAY_PHONE = "0116 233 8888"

export const metadata: Metadata = {
  title: "Match Day Taxi Leicester — Fixed Prices, No Surge | Book 24/7",
  description:
    "Need a match day taxi in Leicester? Aylestone Kings offers fixed price taxis to King Power Stadium and Mattioli Woods Welford Road. No surge pricing. Call 0116 233 8888.",
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "Match Day Taxi Leicester — Fixed Prices, No Surge | Book 24/7",
    description:
      "Need a match day taxi in Leicester? Aylestone Kings offers fixed price taxis to King Power Stadium and Mattioli Woods Welford Road. No surge pricing. Call 0116 233 8888.",
    url: CANONICAL,
  },
}

const faqs = [
  {
    question: "Can I book a taxi for after the match in Leicester?",
    answer:
      "Yes. Post-match collection is one of our busiest match-day services. Book your return taxi when you book your outbound journey, or call us before full-time so we can dispatch a driver to your agreed meeting point near King Power Stadium or Mattioli Woods Welford Road. Pre-booking avoids the post-match rush when ride-hailing apps surge and availability drops.",
  },
  {
    question: "Do you offer fixed prices on match days?",
    answer:
      "Yes. Every match day taxi Leicester booking is quoted at a fixed price before you travel — with no surge charges on match days, unlike ride-hailing apps that often multiply fares when thousands of supporters leave the ground at once. The fare you are quoted when you book is the fare you pay, whether you are travelling before kick-off or after the final whistle.",
  },
  {
    question: "Can we book a group taxi for a Leicester City match?",
    answer:
      "Yes. Group bookings are ideal for supporters travelling together to King Power Stadium on Filbert Way. Book one saloon or MPV for your party and pay a fixed price per vehicle. Tell us your pickup address, kick-off time, and how many passengers when you book so we can allocate the right vehicle and schedule your run.",
  },
]

export default function MatchDayTaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Match Day Taxi Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Match Day Taxi Leicester
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Fixed-price <strong>match day taxi Leicester</strong> services for{" "}
                <strong>Leicester City FC</strong> and <strong>Leicester Tigers</strong>{" "}
                supporters. Pre-book for kick-off to avoid the last-minute rush, travel as a group,
                and pay a <strong>fixed fare with no surge charges</strong> on match days — unlike
                ride-hailing apps when the ground empties.
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
                  href={`tel:${MATCH_DAY_PHONE.replace(/\s/g, "")}`}
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-[transform,opacity] duration-200 text-lg flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6" />
                    Call {MATCH_DAY_PHONE}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Match Day Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Taxis for Leicester City &amp; Leicester Tigers
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Reliable transport to and from Leicester&apos;s two biggest match-day venues — with
                fixed pricing that does not spike when the crowd heads home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  King Power Stadium — Leicester City FC
                </h3>
                <p className="text-[#2E3C44]">
                  Pickup and drop-off near <strong>King Power Stadium</strong> on{" "}
                  <strong>Filbert Way</strong> for Foxes home matches. We know the local roads and
                  traffic patterns around the ground and can advise on the best time to leave for
                  kick-off. Pre-book your outbound and return journeys so you are not queuing for a
                  taxi in the rain after the match.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Mattioli Woods Welford Road — Leicester Tigers
                </h3>
                <p className="text-[#2E3C44]">
                  Rugby supporters heading to <strong>Mattioli Woods Welford Road</strong> can book
                  the same fixed-price <strong>match day taxi Leicester</strong> service. Drop-off
                  and collection near the stadium on match days, with group bookings available when
                  your whole party wants to travel together from Oadby, Wigston, or across the
                  city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Booking & Post-Match Advice */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Pre-Booking &amp; Post-Match Collection Advice
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 text-[#2E3C44] text-lg leading-relaxed">
              <p>
                <strong>Pre-book for kick-off.</strong> Match days see a sharp spike in demand in
                the hour before kick-off. Book your taxi at least a few hours ahead — ideally the
                day before a big fixture — so we can schedule your pickup and avoid the last-minute
                rush when everyone tries to book at once. Tell us your kick-off time and we will
                suggest a departure time that accounts for traffic around Filbert Way and the city
                centre.
              </p>
              <p>
                <strong>Group bookings for supporters.</strong> Travelling with friends or family?
                Book one vehicle for your whole group. Saloons suit smaller parties; MPVs work well
                for larger groups of supporters heading to the same match. One fixed fare per
                vehicle keeps costs simple when you split the bill.
              </p>
              <p>
                <strong>Post-match collection.</strong> The busiest period is the twenty minutes
                after full-time. Pre-book your return journey when you book your outbound taxi, and
                agree a <strong>meeting point</strong> away from the immediate stadium exit crush —
                we can suggest a sensible pickup location on a nearby side street where your driver
                can wait without getting stuck in pedestrian traffic. Call us before the final
                whistle if plans change and we will adjust your collection time.
              </p>
              <p>
                <strong>Fixed pricing — no surge on match days.</strong> Unlike ride-hailing apps
                that often apply surge pricing when demand peaks after a match, Aylestone Kings
                quotes a <strong>fixed price</strong> when you book. You know the fare before you
                travel, whether it is a Saturday three o&apos;clock kick-off or a Friday night
                fixture under the lights.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Examples */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Match Day Taxi Leicester — Example Prices
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Indicative <strong>fixed fares</strong> to King Power Stadium. Your exact quote is
                confirmed when you book.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      City Centre to King Power Stadium — from £8
                    </h3>
                    <p className="text-[#2E3C44]">
                      A run from the <strong>city centre</strong> to{" "}
                      <strong>King Power Stadium</strong> on Filbert Way starts from{" "}
                      <strong>£8</strong> — a straightforward fixed fare for Foxes supporters
                      staying in central Leicester hotels or meeting friends before the match.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      Oadby or Wigston to King Power Stadium — from £15
                    </h3>
                    <p className="text-[#2E3C44]">
                      Supporters travelling from <strong>Oadby</strong> or{" "}
                      <strong>Wigston</strong> to King Power Stadium can expect fixed fares from{" "}
                      <strong>£15</strong>. Book both legs — there and back — at the same time for
                      a smooth match-day experience with no surge charges after the game.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PoundSterling className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      No Surge Pricing on Match Days
                    </h3>
                    <p className="text-[#2E3C44]">
                      The price you are quoted when you book is the price you pay — before,
                      during, and after the match. No multipliers, no surprise fares when the
                      ground empties and app-based services spike their prices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Supporters Choose Aylestone Kings
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Clock, label: "Pre-book for kick-off", detail: "Avoid the last-minute rush. Book ahead and travel on your schedule." },
                { icon: Users, label: "Group bookings", detail: "One vehicle for your whole party — fixed fare, easy to split." },
                { icon: PoundSterling, label: "Fixed prices, no surge", detail: "Match-day fares agreed upfront. No app surge after full-time." },
                { icon: MapPin, label: "Stadium pickups", detail: "King Power Stadium and Mattioli Woods Welford Road covered." },
                { icon: Shield, label: "Licensed drivers", detail: "DBS-checked, professional drivers who know Leicester on match days." },
                { icon: Check, label: "Post-match collection", detail: "Pre-book your return and agree a sensible meeting point near the ground." },
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

        {/* Related Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
              More from Aylestone Kings
            </h2>
            <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto mb-10">
              Match day is not the only time you need a reliable Leicester taxi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/airport-transfers-leicester"
                className="inline-flex items-center justify-center gap-2 bg-[#06A0A6]/10 text-[#0F0D3E] px-6 py-3 rounded-xl font-semibold hover:bg-[#06A0A6]/20 transition-colors"
              >
                Airport Transfers Leicester
              </Link>
              <Link
                href="/leicester-taxi-company"
                className="inline-flex items-center justify-center gap-2 bg-[#06A0A6]/10 text-[#0F0D3E] px-6 py-3 rounded-xl font-semibold hover:bg-[#06A0A6]/20 transition-colors"
              >
                Leicester Taxi Company
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#E4E4E4]">
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
              Book Your Match Day Taxi Leicester Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Fixed prices to King Power Stadium and Welford Road — no surge on match days. Call{" "}
              <strong>{MATCH_DAY_PHONE}</strong> or book online before kick-off.
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
                href={`tel:${MATCH_DAY_PHONE.replace(/\s/g, "")}`}
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-[transform,opacity] duration-200 flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  Call {MATCH_DAY_PHONE}
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
