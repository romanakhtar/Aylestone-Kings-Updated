/**
 * /taxis-in/* pages kept live for visitors but excluded from Google's index (noindex, follow)
 * and from the sitemap.
 *
 * Why (audit, Nov 2026): each of these rendered the shared destination template with only the
 * place name swapped — 64–81% of the main text was shared with 6+ other area pages, and each was
 * 65–68% identical to its nearest sibling (e.g. glenfield-hospital ≈ nuffield-health-…,
 * king-power-stadium ≈ welford-road-stadium). Near-identical name-swapped pages are a
 * low-quality signal; each intent below is already served by a stronger indexed page:
 *
 *   stadiums / racecourse / arena  → /match-day-taxi-leicester
 *   de-montfort-hall               → /blog/taxi-to-de-montfort-hall-leicester-concerts-events-parking-guide
 *   city-centre venues & shops     → /taxis-in/leicester-city-centre
 *   asda-fosse-park                → /taxis-in/fosse-park
 *   aldi-aylestone-road            → /taxis-in/aylestone
 *   grove-park                     → /taxis-in/blaby
 *   meridian-business-park         → /taxis-in/enderby
 *   narborough / south wigston stn → /taxis-in/narborough, /taxis-in/south-wigston
 *
 * st-margarets-bus-station was REMOVED from this list (Nov 2026): GSC showed 12 clicks / ~330
 * impressions at position ~7 in 8 weeks, so it got researched copy instead.
 *
 * REVERSIBLE: before deploying, check Search Console (last 16 months) for each URL. If any earns
 * meaningful clicks, remove it from this list and give it researched copy in
 * lib/seo/destinationAreaContent.ts instead (as done for glenfield-hospital,
 * leicester-railway-station, nuffield-health-leicester-hospital and national-space-centre).
 */
export const NOINDEX_AREA_SLUGS: ReadonlySet<string> = new Set([
  "king-power-stadium",
  "welford-road-stadium",
  "leicester-racecourse",
  "morningside-arena",
  "de-montfort-hall",
  "highcross-leicester",
  "haymarket-shopping-centre",
  "king-richard-iii-visitor-centre",
  "athena-city-rooms",
  "iceland-city-centre",
  "m-and-s-foodhall-city-centre",
  "asda-fosse-park",
  "aldi-aylestone-road",
  "grove-park",
  "meridian-business-park",
  "narborough-station",
  "south-wigston-station",
])
