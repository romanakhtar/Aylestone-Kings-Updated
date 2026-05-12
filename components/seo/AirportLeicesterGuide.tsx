import type { AirportFaqItem, LeicesterAirportGuideFacts } from "@/lib/seo/airportLeicesterFacts"

export function AirportLeicesterGuide({ facts }: { facts: LeicesterAirportGuideFacts }) {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed space-y-6 text-base md:text-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Leicester to {facts.airportName} ({facts.airportCode}): distance, route, and terminals
        </h2>
        {facts.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 80)}>{paragraph}</p>
        ))}
        <div className="rounded-2xl border border-cyan-100 bg-cyan-50/40 p-6 space-y-3 text-gray-800">
          <p>
            <strong>Distance from Leicester city centre:</strong> {facts.distanceMiles}
          </p>
          <p>
            <strong>Typical journey time:</strong> {facts.journeyFromCityCentre}
          </p>
          <p>
            <strong>Best route (overview):</strong> {facts.routeDetail}
          </p>
          <p>
            <strong>Where we drop you off:</strong> {facts.terminalsDropOff}
          </p>
          <p>
            <strong>Early / late runs:</strong> {facts.earlyLateAvailability}
          </p>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 pt-2">Official parking vs a pre-booked taxi</h3>
        <p>{facts.parkingVsTaxi}</p>
        <h3 className="text-2xl font-bold text-gray-900 pt-2">Airlines Leicester passengers often use at {facts.airportCode}</h3>
        <p>{facts.airlinesLeicester}</p>
        <h3 className="text-2xl font-bold text-gray-900 pt-2">Return journeys and where we meet you</h3>
        <p>{facts.returnJourneys}</p>
      </div>
    </section>
  )
}

export function AirportPricingFaqSection({
  airportName,
  airportCode,
  faqs,
}: {
  airportName: string
  airportCode: string
  faqs: AirportFaqItem[]
}) {
  if (!faqs.length) return null
  return (
    <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          {airportName} ({airportCode}) transfer FAQs
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Answers specific to this airport — not generic taxi boilerplate.
        </p>
        <div className="space-y-3">
          {faqs.map((item) => (
            <details key={item.question} className="border border-gray-200 rounded-xl bg-white p-5 shadow-sm">
              <summary className="font-semibold cursor-pointer text-lg text-gray-900">{item.question}</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
