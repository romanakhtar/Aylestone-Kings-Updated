import type { Metadata } from "next"
import Link from "next/link"
import FAQSchema from "@/components/seo/FAQSchema"
import JsonLd from "@/components/seo/JsonLd"
import PageBreadcrumbs from "@/components/PageBreadcrumbs"
import NightsOutCtas from "@/components/nights-out/NightsOutCtas"
import VenueList from "@/components/nights-out/VenueList"
import {
  CITY_CENTRE_VENUES_LAST_CHECKED_LABEL,
  cityCentreVenues,
  venuesByType,
  type CityCentreVenueType,
} from "@/lib/data"
import { clusterPages, NIGHTS_OUT_HUB_PATH } from "@/lib/cityCentreNightsOut"
import { buildCanonical } from "@/lib/seo/canonical"

const CANONICAL = buildCanonical(NIGHTS_OUT_HUB_PATH)

const TITLE = "Taxi to Leicester City Centre Pubs, Bars & Clubs | 24/7"
const DESCRIPTION =
  "Book a taxi to or from any Leicester city centre venue — pubs, bars and nightclubs. Fixed fares agreed before you travel, licensed drivers, 24/7 booking."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

/** Venue groups shown on the hub, each linking through to its cluster page. */
const VENUE_GROUPS: {
  type: CityCentreVenueType
  heading: string
  blurb: string
  clusterPath?: string
  clusterAnchor?: string
}[] = [
  {
    type: "Nightclub",
    heading: "Leicester nightclubs",
    blurb:
      "Clubs sit on several different sides of the centre rather than one strip, so a group moving between them is covering real ground. These are the ones we are asked for most.",
    clusterPath: "/taxi-leicester-nightclubs",
    clusterAnchor: "planning a club night and the journey home",
  },
  {
    type: "Late & cocktail bar",
    heading: "Late and cocktail bars",
    blurb:
      "Most of these cluster tightly around The Lanes and the Market Place, with a couple over on King Street and Granby Street.",
  },
  {
    type: "Pub & bar",
    heading: "City centre pubs",
    blurb:
      "From the High Street run near Highcross to the quieter streets by the Castle, these are the city centre pubs we run to regularly.",
  },
]

const faqs = [
  {
    question: "Can I book a taxi to a Leicester city centre venue in advance?",
    answer:
      "Yes, and for a night out it is worth doing. You can book online, call 0116 233 8888 or message us on WhatsApp. Give us the venue name and the street, your pickup address and how many of you are travelling, and we will confirm the fare before the driver sets off.",
  },
  {
    question: "Should I book my taxi home before I go out?",
    answer:
      "It is the single most useful thing you can do. When venues start to empty, a lot of people want a car at the same moment across a small area. Booking the return at the same time as the outbound trip puts you in the diary, and if your plans change you can message us and we will move the time rather than start again.",
  },
  {
    question: "What should I tell you when a venue is on a pedestrianised street?",
    answer:
      "Give us the venue name rather than only the postcode. Several city centre streets are pedestrianised or too narrow for a car to wait on, and a few venues share a street or a postcode with their neighbours. With the name we can agree a nearby road where the driver can pull in safely.",
  },
  {
    question: "Can you take a group home in one vehicle?",
    answer:
      "Usually, yes. Tell us your group size when you book rather than when the driver arrives, because that decides whether we send a saloon, a larger vehicle or a second car. We can also arrange more than one drop-off on the same journey if people live in different parts of the city.",
  },
  {
    question: "Do your fares change on busy nights?",
    answer:
      "No. The fare is agreed with you before you travel and it does not change because the city centre is busy. That applies on Friday and Saturday nights, during freshers, at Halloween and over the Christmas period.",
  },
  {
    question: "Do you run after the last buses and trains?",
    answer:
      "Yes. We operate 24 hours a day, seven days a week, so there is no point in the night when the service stops. If you are not sure when you will be ready to leave, message us on WhatsApp and we will confirm a fixed fare before the driver sets off.",
  },
]

/** ItemList of the venue clusters — not LocalBusiness/Place markup for the venues. */
const clusterItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Leicester city centre venue areas served by Aylestone Taxis",
  itemListOrder: "https://schema.org/ItemListUnordered",
  numberOfItems: clusterPages.length,
  itemListElement: clusterPages.map((cluster, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: cluster.h1,
    url: buildCanonical(cluster.path),
  })),
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Leicester City Centre Nights Out" },
]

/** Areas we are asked for most often at the end of a city centre night. */
const pickupAreas = [
  { href: "/taxis-in/leicester-city-centre", anchor: "taxis in Leicester city centre" },
  { href: "/taxis-in/clarendon-park", anchor: "taxis in Clarendon Park" },
  { href: "/taxis-in/highfields", anchor: "taxis in Highfields" },
  { href: "/taxis-in/knighton", anchor: "taxis in Knighton" },
  { href: "/taxis-in/stoneygate", anchor: "taxis in Stoneygate" },
  { href: "/taxis-in/aylestone", anchor: "taxis in Aylestone" },
  { href: "/taxis-in/belgrave", anchor: "taxis in Belgrave" },
  { href: "/taxis-in/evington", anchor: "taxis in Evington" },
  { href: "/taxis-in/oadby", anchor: "taxis in Oadby" },
  { href: "/taxis-in/wigston", anchor: "taxis in Wigston" },
  { href: "/taxis-in/beaumont-leys", anchor: "taxis in Beaumont Leys" },
  { href: "/taxis-in/braunstone", anchor: "taxis in Braunstone" },
]

export default function LeicesterCityCentreNightsOutTaxiPage() {
  const hubOnlyVenues = cityCentreVenues.filter((venue) => venue.clusterSlug === null)

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={clusterItemListJsonLd} />
      <FAQSchema faqs={faqs} />

      <main className="pt-24">
        {/* Hero — short answer and CTAs above the fold */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs items={breadcrumbs} pageUrl={CANONICAL} className="mb-6" />

            <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-5">
              Leicester city centre nights out
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
              Taxi to Leicester City Centre Pubs, Bars &amp; Nightclubs
            </h1>

            <p className="text-xl text-[#2E3C44] leading-relaxed mb-4">
              <strong>Book a taxi to or from any Leicester city centre venue.</strong> We cover the
              pubs, bars and clubs across The Lanes, the Market Place, High Street, King Street and
              Granby Street — there and back, at any hour, with the fare agreed before you travel.
            </p>
            <p className="text-lg text-[#2E3C44] leading-relaxed">
              Licensed, DBS-checked drivers, 24 hours a day. Tell us the venue and how many of you
              are travelling and we will do the rest.
            </p>

            <NightsOutCtas className="mt-8" />
          </div>
        </section>

        {/* Venue groups */}
        {VENUE_GROUPS.map((group, index) => (
          <section
            key={group.type}
            className={index % 2 === 0 ? "py-16 bg-white" : "py-16 bg-[#E4E4E4]"}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
                {group.heading}
              </h2>
              <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">{group.blurb}</p>
              <VenueList venues={venuesByType(group.type)} />

              {group.clusterPath ? (
                <p className="mt-6 text-lg text-[#2E3C44]">
                  More on{" "}
                  <Link
                    href={group.clusterPath}
                    className="text-[#06A0A6] underline underline-offset-2 hover:text-[#0F0D3E]"
                  >
                    {group.clusterAnchor}
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </section>
        ))}

        {/* Cluster navigation */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
              Guides by part of the city centre
            </h2>
            <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">
              Each part of the centre behaves differently once you are trying to get picked up.
              These guides cover what to expect and how to plan the trip back.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {clusterPages.map((cluster) => (
                <li
                  key={cluster.path}
                  className="rounded-xl border border-gray-200 bg-white p-5 halloween-card"
                >
                  <h3 className="text-lg font-semibold text-[#0F0D3E] mb-2">
                    <Link
                      href={cluster.path}
                      className="text-[#06A0A6] underline underline-offset-2 hover:text-[#0F0D3E]"
                    >
                      {cluster.h1}
                    </Link>
                  </h3>
                  <p className="text-[#2E3C44] leading-relaxed">{cluster.intro[1]}</p>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-[#0F0D3E] mt-10 mb-4">
              Also in the city centre
            </h3>
            <p className="text-lg text-[#2E3C44] mb-6 leading-relaxed">
              These sit outside the four groups above but we collect from them just as often.
            </p>
            <VenueList venues={hubOnlyVenues} />
            <p className="mt-6 text-sm text-gray-500">
              Venue list last checked {CITY_CENTRE_VENUES_LAST_CHECKED_LABEL}.
            </p>
          </div>
        </section>

        {/* Taxi home */}
        <section className="py-16 bg-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Taxi home from Leicester city centre
            </h2>
            <p className="text-lg text-[#E4E4E4] mb-5 leading-relaxed">
              Getting into town is the easy half. The journey home is the one worth planning,
              because demand across a small area climbs sharply when venues begin to empty and
              everyone on the same street wants a car at once.
            </p>
            <p className="text-lg text-[#E4E4E4] mb-5 leading-relaxed">
              Book the return pickup at the same time as the outbound trip. It holds your slot, and
              if the night runs longer or ends earlier than planned you can message us to move the
              time — a much quicker conversation than starting a booking from scratch at the busiest
              moment of the night.
            </p>
            <p className="text-lg text-[#E4E4E4] mb-5 leading-relaxed">
              Friday and Saturday nights are the obvious ones, but the same advice applies during
              freshers, when thousands of new students arrive and the city centre fills up on
              weeknights too, and at Halloween, when costumed crowds turn out across the centre at
              the same time. Our fares do not change on any of them — the price you are quoted is
              the price you pay.
            </p>
            <p className="text-lg text-[#E4E4E4] mb-8 leading-relaxed">
              For more on how the small hours work, read our{" "}
              <Link
                href="/late-night-taxi-leicester"
                className="text-[#06A0A6] underline underline-offset-2 hover:text-white"
              >
                guide to getting home after midnight
              </Link>
              . Students can find term-time travel advice on our{" "}
              <Link
                href="/student-taxi-leicester"
                className="text-[#06A0A6] underline underline-offset-2 hover:text-white"
              >
                travel pages for Leicester students
              </Link>
              .
            </p>
            <NightsOutCtas whatsappMessage="Hi! I need a taxi home from Leicester city centre" />
          </div>
        </section>

        {/* Pickup areas */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
              Areas we pick up from and drop back to
            </h2>
            <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">
              We collect from across Leicester and Leicestershire on the way in, and run back out to
              the same areas at the end of the night. These are the ones we are asked for most:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pickupAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-[#06A0A6] hover:text-[#0F0D3E] underline underline-offset-2"
                  >
                    {area.anchor}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg text-[#2E3C44] leading-relaxed">
              Not listed? We cover the whole city and county — see every{" "}
              <Link
                href="/taxi-leicester"
                className="text-[#06A0A6] underline underline-offset-2 hover:text-[#0F0D3E]"
              >
                neighbourhood we serve across the city
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-[#E4E4E4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-8">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-gray-200 bg-white p-6 halloween-card"
                >
                  <h3 className="text-lg font-semibold text-[#0F0D3E] mb-2">{faq.question}</h3>
                  <p className="text-[#2E3C44] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
