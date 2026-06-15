import { Check, ArrowRight, MapPin, Clock, Users, Car, Shield, Calendar } from "lucide-react"
import { contactInfo } from "@/lib/data"
import FAQSchema from "@/components/seo/FAQSchema"
import AirportRelatedLinks from "@/components/AirportRelatedLinks"
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget"
import AirportPricingBreadcrumbs from "@/components/seo/AirportPricingBreadcrumbs"
import { AirportLeicesterGuide, AirportPricingFaqSection } from "@/components/seo/AirportLeicesterGuide"
import { birminghamLeicesterFacts, type AirportFaqItem } from "@/lib/seo/airportLeicesterFacts"

export default function BirminghamAirportContent({ faqs }: { faqs: AirportFaqItem[] }) {
  return (
    <div className="min-h-screen bg-white">
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        <AirportPricingBreadcrumbs pageName="Birmingham Airport" path="/pricing/airports/Birmingham" />
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                Birmingham Airport (BHX)
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Taxi to Birmingham Airport from Leicester — T1 & T2 zones, one terminal
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                About 38–42 miles and typically 55 minutes to 1 hour 15 minutes from Leicester city centre via the M69,
                M6, and M42. We drop at the departures forecourt for your airline&apos;s check-in zone (BHX uses one linked
                building with signed Terminal 1 and Terminal 2 areas). Fixed fares from £60 for a standard saloon.
              </p>

              {/* Book Now Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-[transform,opacity] duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Calendar className="h-6 w-6" />
                    Book Now
                  </button>
                </a>
                <a href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-[transform,opacity] duration-200 text-lg">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <AirportLeicesterGuide facts={birminghamLeicesterFacts} />
        <AirportPricingFaqSection airportName="Birmingham" airportCode="BHX" faqs={faqs} />

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transparent Airport Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fixed rates from Leicester and surrounding areas to Birmingham Airport. No hidden fees, no surprises.
              </p>
            </div>

            {/* Pricing Table */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border border-cyan-200 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
                      <th className="px-6 py-4 text-left font-semibold text-lg">Vehicle Type</th>
                      <th className="px-6 py-4 text-center font-semibold text-lg">Capacity</th>
                      <th className="px-6 py-4 text-right font-semibold text-lg">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-cyan-100 hover:bg-cyan-50">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center space-x-3">
                          <Car className="h-6 w-6 text-cyan-600" />
                          <span>Standard Saloon</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">1-4 passengers</td>
                      <td className="px-6 py-4 text-right text-cyan-700 font-semibold text-lg">from £60</td>
                    </tr>
                    <tr className="border-b border-cyan-100 hover:bg-cyan-50">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center space-x-3">
                          <Users className="h-6 w-6 text-cyan-600" />
                          <span>MPV / Minibus</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">6-8 passengers</td>
                      <td className="px-6 py-4 text-right text-cyan-700 font-semibold text-lg">from £80</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pricing Notes */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 italic">
                  Prices shown are starting rates from Leicester city centre. Additional pickup locations may affect final price.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cheapest taxi SEO section */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cheapest Taxi to Birmingham Airport from Leicester
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>
                Searching for the <strong>cheapest taxi to Birmingham Airport</strong> from Leicester does not mean
                choosing whoever quotes the lowest headline figure on a comparison site. Metered taxis charge by time and
                distance as you travel, so a delay on the M69, M6, or M42 can push your final bill higher than the
                estimate you were given. Aylestone Kings quotes a <strong>fixed price before you set off</strong> — the
                fare is agreed at booking and does not climb because of traffic queues or waiting time on the motorway.
              </p>
              <p>
                When you compare <strong>Birmingham Airport taxis prices</strong> from Leicester, look at what is
                included: licensed drivers, luggage space, flight monitoring on returns, and whether peak-time surges
                apply. Many metered operators and ride-hailing apps add busy-period multipliers on Friday evenings,
                bank holidays, and early-morning airport runs — exactly when most BHX passengers travel. Our fixed
                Leicester-to-BHX rates stay transparent, so you can budget accurately whether you are catching a
                6am Emirates departure or a late-evening KLM connection.
              </p>
              <p>
                For families and business travellers, knowing the full cost upfront often makes a fixed-fare private
                hire cheaper than rivals once parking charges, fuel, and unpredictable meter totals are taken into
                account. The table below shows typical starting prices from Leicester city centre; your exact quote is
                confirmed when you book based on pickup postcode and vehicle choice.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Leicester to Birmingham Airport — fixed prices by vehicle
            </h3>
            <div className="bg-white rounded-2xl shadow-lg border border-cyan-200 overflow-hidden mb-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Vehicle</th>
                    <th className="px-6 py-4 text-center font-semibold">Passengers</th>
                    <th className="px-6 py-4 text-right font-semibold">Fixed price from</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-cyan-100">
                    <td className="px-6 py-4 font-medium text-gray-900">Standard saloon</td>
                    <td className="px-6 py-4 text-center text-gray-700">1–4 + luggage</td>
                    <td className="px-6 py-4 text-right text-cyan-700 font-semibold">£60</td>
                  </tr>
                  <tr className="border-b border-cyan-100">
                    <td className="px-6 py-4 font-medium text-gray-900">Estate</td>
                    <td className="px-6 py-4 text-center text-gray-700">1–4 + extra bags</td>
                    <td className="px-6 py-4 text-right text-cyan-700 font-semibold">£70</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">MPV / minibus</td>
                    <td className="px-6 py-4 text-center text-gray-700">5–8 + luggage</td>
                    <td className="px-6 py-4 text-right text-cyan-700 font-semibold">£80</td>
                  </tr>
                </tbody>
              </table>
              <p className="px-6 py-3 text-sm text-gray-600 italic border-t border-cyan-100">
                Prices from Leicester city centre. Pickups in Oadby, Wigston, Loughborough, or wider Leicestershire may
                vary slightly — your quote is confirmed before travel.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Off-peak vs peak — what affects the price?</h3>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 sm:px-6 py-3 text-left font-semibold text-gray-900">Period</th>
                    <th className="px-4 sm:px-6 py-3 text-left font-semibold text-gray-900">Typical traffic</th>
                    <th className="px-4 sm:px-6 py-3 text-right font-semibold text-gray-900">Aylestone fixed saloon</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="px-4 sm:px-6 py-3 font-medium">Off-peak (mid-morning, early afternoon)</td>
                    <td className="px-4 sm:px-6 py-3">M69/M6 often clear — ~55–65 min</td>
                    <td className="px-4 sm:px-6 py-3 text-right font-semibold text-cyan-700">from £60</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 sm:px-6 py-3 font-medium">Peak (weekday rush, Friday PM)</td>
                    <td className="px-4 sm:px-6 py-3">Birmingham approaches slower — up to ~75 min</td>
                    <td className="px-4 sm:px-6 py-3 text-right font-semibold text-cyan-700">from £60 (no meter surge)</td>
                  </tr>
                  <tr>
                    <td className="px-4 sm:px-6 py-3 font-medium">Early flight (4am–6am pickup)</td>
                    <td className="px-4 sm:px-6 py-3">Quieter roads, pre-book recommended</td>
                    <td className="px-4 sm:px-6 py-3 text-right font-semibold text-cyan-700">from £60 (same fixed rate)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>
                <strong>Why fixed pricing is often cheaper than rivals on this route:</strong> metered and app-based
                taxis can look inexpensive at first glance, but the Leicester–Birmingham corridor is prone to variable
                journey times. A meter keeps running in congestion, and surge pricing on apps routinely adds 20–50% during
                peak airport hours. Rivals quoting hourly waits or parking charges at BHX can also inflate the true cost.
                With Aylestone Kings, one confirmed fare covers the transfer — no ticking meter, no surprise add-ons for
                normal motorway delays, and no surge multiplier because it is a busy Friday night.
              </p>
              <p>
                Pre-booking also helps you secure the <strong>cheapest taxi to Birmingham Airport</strong> for your
                dates: you lock in the price, receive driver details in advance, and avoid last-minute availability
                premiums. For returns, share your flight number and we adjust collection for delays at no extra worry
                about meter clocks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-[transform,opacity] duration-200 shadow-lg flex items-center justify-center gap-3">
                  Book Online
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
              <a href="tel:01162338888" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-[transform,opacity] duration-200">
                  0116 233 8888
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-20 bg-gray-50 bg-gradient-to-r from-[#06A0A6]/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Birmingham Service?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional, reliable, and comfortable transfers to Birmingham Airport
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Service</h3>
                <p className="text-gray-600">Available round the clock for early morning flights and late night arrivals</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed drivers with comprehensive insurance for your peace of mind</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Door-to-Door</h3>
                <p className="text-gray-600">Pickup from your exact location and drop-off at the terminal entrance</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Fleet</h3>
                <p className="text-gray-600">Clean, well-maintained vehicles with air conditioning and comfortable seating</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fixed Rates</h3>
                <p className="text-gray-600">No meter running, no surprise charges - you know the price upfront</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Group Travel</h3>
                <p className="text-gray-600">Perfect for families and groups with spacious MPVs and minibuses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Journey Information</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about your journey to Birmingham Airport
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-[transform,opacity] duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Booking</h3>
                <p className="text-gray-600 text-center">
                  Book online or call us to reserve your transfer. We recommend booking at least 24 hours in advance for airport
                  transfers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-[transform,opacity] duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Pickup</h3>
                <p className="text-gray-600 text-center">
                  Your driver will arrive before your scheduled pickup time. We&apos;ll send you driver details and vehicle information.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-[transform,opacity] duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Journey</h3>
                <p className="text-gray-600 text-center">
                  Relax in comfort as we take you directly to Birmingham Airport. We monitor traffic and adjust routes for optimal
                  timing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-[transform,opacity] duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-orange-600 font-bold text-lg">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Arrival</h3>
                <p className="text-gray-600 text-center">
                  Drop-off at the departures forecourt for your airline zone with plenty of time for check-in. Your driver will assist
                  with luggage if needed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-[transform,opacity] duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-red-600 font-bold text-lg">5</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Return Journey</h3>
                <p className="text-gray-600 text-center">
                  For return journeys, your driver will meet you at the agreed BHX pickup point. Flight tracking helps time collection
                  after baggage reclaim.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-[transform,opacity] duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-indigo-600 font-bold text-lg">6</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Customer Support</h3>
                <p className="text-gray-600 text-center">
                  24/7 customer support available throughout your journey. Contact us anytime for assistance or changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AirportRelatedLinks airportName="Birmingham Airport" />

        <GoogleReviewsWidget />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Ready to book your Birmingham transfer?</h2>
            <p className="text-xl text-[#E4E4E4] mb-8">Secure your ride today with our reliable and affordable service.</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-4 py-2 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                  Book Now
                  <ArrowRight className="h-3 w-3 sm:h-5 sm:w-5" />
                </button>
              </a>
              <a href="/pricing" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-white text-white px-4 py-2 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-[transform,opacity] duration-200 text-sm sm:text-base">
                  View All Airport Pricing
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
