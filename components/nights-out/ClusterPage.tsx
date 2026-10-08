import Link from "next/link"
import PageBreadcrumbs from "@/components/PageBreadcrumbs"
import NightsOutCtas from "@/components/nights-out/NightsOutCtas"
import VenueList from "@/components/nights-out/VenueList"
import {
  CITY_CENTRE_VENUES_LAST_CHECKED_LABEL,
  venuesForCluster,
  type CityCentreClusterSlug,
} from "@/lib/data"
import {
  NIGHTS_OUT_HUB_PATH,
  getClusterPage,
  otherClusters,
} from "@/lib/cityCentreNightsOut"
import { buildCanonical } from "@/lib/seo/canonical"

/**
 * Shared layout for the four city centre nights out cluster pages. The copy
 * for each one lives in lib/cityCentreNightsOut.ts, so the pages differ in
 * content rather than only in venue names.
 */
export default function ClusterPage({ slug }: { slug: CityCentreClusterSlug }) {
  const cluster = getClusterPage(slug)
  const venues = venuesForCluster(slug)
  const others = otherClusters(slug)

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Leicester City Centre Nights Out", href: NIGHTS_OUT_HUB_PATH },
    { name: cluster.label },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageBreadcrumbs
              items={breadcrumbs}
              pageUrl={buildCanonical(cluster.path)}
              className="mb-6"
            />

            <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-5">
              {cluster.eyebrow}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
              {cluster.h1}
            </h1>

            {cluster.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-lg text-[#2E3C44] leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}

            <NightsOutCtas
              className="mt-8"
              whatsappMessage={`Hi! I need a taxi for ${cluster.label} in Leicester`}
            />
          </div>
        </section>

        {/* Venues in this cluster */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
              {cluster.venuesHeading}
            </h2>
            <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">{cluster.venuesIntro}</p>
            <VenueList venues={venues} />
            <p className="mt-6 text-sm text-gray-500">
              Venue list last checked {CITY_CENTRE_VENUES_LAST_CHECKED_LABEL}.
            </p>
          </div>
        </section>

        {/* Unique guidance sections */}
        {cluster.sections.map((section, index) => (
          <section
            key={section.heading}
            className={index % 2 === 0 ? "py-16 bg-[#E4E4E4]" : "py-16 bg-white"}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F0D3E] mb-5">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-lg text-[#2E3C44] leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
              {section.heading.toLowerCase().includes("after-work") ? (
                <p className="text-lg text-[#2E3C44] leading-relaxed">
                  See{" "}
                  <Link
                    href="/taxis-in/leicester-railway-station"
                    className="text-[#06A0A6] underline underline-offset-2 hover:text-[#0F0D3E]"
                  >
                    taxis to Leicester Railway Station
                  </Link>{" "}
                  if your evening finishes with a train.
                </p>
              ) : null}
            </div>
          </section>
        ))}

        {/* Areas we cover */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F0D3E] mb-5">
              Where we take you afterwards
            </h2>
            <p className="text-lg text-[#2E3C44] mb-6 leading-relaxed">{cluster.areaLinksIntro}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cluster.areaLinks.map((area) => (
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
          </div>
        </section>

        {/* Cross-links */}
        <section className="py-16 bg-[#E4E4E4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F0D3E] mb-5">
              Other parts of the city centre
            </h2>
            <p className="text-lg text-[#2E3C44] mb-6 leading-relaxed">
              Heading somewhere else on the same night? Start from our{" "}
              <Link
                href={NIGHTS_OUT_HUB_PATH}
                className="text-[#06A0A6] underline underline-offset-2 hover:text-[#0F0D3E]"
              >
                guide to getting around Leicester city centre venues
              </Link>
              , or go straight to one of these:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {others.map((other) => (
                <li key={other.path}>
                  <Link
                    href={other.path}
                    className="text-[#06A0A6] hover:text-[#0F0D3E] underline underline-offset-2"
                  >
                    {other.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Book your journey there and back
            </h2>
            <p className="text-lg text-[#E4E4E4] mb-8 leading-relaxed">
              Licensed, DBS-checked drivers and a fare agreed with you before the driver sets off.
              Book online, call us, or send a WhatsApp message and we will confirm the details.
            </p>
            <NightsOutCtas
              whatsappMessage={`Hi! I need a taxi for ${cluster.label} in Leicester`}
            />
          </div>
        </section>
      </main>
    </div>
  )
}
