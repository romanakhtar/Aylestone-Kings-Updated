import type { Metadata } from "next"
import type { CityCentreClusterSlug } from "@/lib/data"
import { buildCanonical } from "@/lib/seo/canonical"

/**
 * Content for the Leicester city centre nights out cluster pages.
 *
 * Each cluster has its own copy rather than a template with the names swapped.
 * Nothing here states fares, opening hours, closing times, street closures or
 * named pick-up spots — none of that is verified anywhere in this codebase, so
 * the copy stays general and the gaps are listed in the handover notes.
 */

export type ClusterAreaLink = {
  name: string
  href: string
  /** Descriptive anchor used for the internal link. */
  anchor: string
}

export type ClusterSection = {
  heading: string
  paragraphs: string[]
}

export type ClusterPageContent = {
  slug: CityCentreClusterSlug
  path: string
  /** Short label for breadcrumbs and cross-links. */
  label: string
  h1: string
  title: string
  description: string
  /** Badge above the H1. */
  eyebrow: string
  /** Lead paragraphs, shown under the H1. */
  intro: string[]
  /** Heading for the venue list on this page. */
  venuesHeading: string
  venuesIntro: string
  sections: ClusterSection[]
  areaLinksIntro: string
  areaLinks: ClusterAreaLink[]
}

export const NIGHTS_OUT_HUB_PATH = "/leicester-city-centre-nights-out-taxi"
export const NIGHTS_OUT_HUB_LABEL = "Leicester city centre nights out"

export const clusterPages: ClusterPageContent[] = [
  {
    slug: "taxi-leicester-nightclubs",
    path: "/taxi-leicester-nightclubs",
    label: "Nightclubs",
    h1: "Taxi to Leicester Nightclubs",
    title: "Taxi to Leicester Nightclubs | Book Your Ride Home",
    description:
      "Book a taxi to or from Leicester nightclubs including Mosh, Club Republic and Motto. Fixed fares agreed before you travel, 24/7. Call 0116 233 8888.",
    eyebrow: "City centre nightclubs",
    intro: [
      "Leicester's clubs are spread across the north and east of the city centre rather than clustered on one strip, which changes how you plan getting there and back. Gravel Street, Belgrave Gate, Abbey Street and St Nicholas Place all sit on different sides of the centre, so a group meeting at one venue and moving to another is covering real distance rather than walking a few doors down.",
      "That spread is the main reason club nights are worth booking rather than leaving to chance. We run 24 hours a day, every day, and the fare is agreed with you before the driver sets off — so the price does not change because a venue has just emptied and everyone wants a car at the same moment.",
    ],
    venuesHeading: "Leicester nightclubs we collect from",
    venuesIntro:
      "Addresses below are the ones to quote when you book. If a venue shares a street with others, give us the name as well and the driver will know exactly where to pull in.",
    sections: [
      {
        heading: "Arriving and leaving on a club night",
        paragraphs: [
          "Arrivals are the easy half. You know where you are going and roughly when, so booking the outbound trip in advance takes the guesswork out of a group all trying to leave from different houses. Tell us the pickup addresses and the number of passengers and we will put the right vehicle on it.",
          "The journey home is where planning pays off. Demand across the city centre rises sharply when venues start turning out, and everyone standing on the same street is after the same thing at the same time. Agreeing a return pickup time when you book the outbound leg is the single most useful thing you can do — if your plans shift, message us and we will move it.",
        ],
      },
      {
        heading: "Travelling as a group",
        paragraphs: [
          "Club nights are rarely a solo trip. Tell us your group size when you book rather than when the driver arrives, because that decides whether you need a saloon, a six-seater or a second car. Splitting a large group across two vehicles booked together is usually smoother than four people trying to flag something down while the rest wait.",
          "If part of your group is heading to a different part of the city at the end of the night, say so at the booking stage. We can arrange separate drop-offs on one job or send two cars to the same pickup point, whichever works out better for you.",
        ],
      },
      {
        heading: "Getting home safely",
        paragraphs: [
          "Only travel with a licensed driver and a booked vehicle. Every Aylestone Taxis driver is licensed and DBS-checked, and when you book you will know which car is coming for you — which is not something you can say for a car that happens to pull up and offer a lift.",
          "A few practical things make the end of the night easier. Keep enough charge on your phone to confirm the pickup, save our number before you go out rather than after, and stay with the rest of your group while you wait. If you are not sure when you will be ready, WhatsApp us on the night and we will confirm a fixed fare before the driver sets off.",
        ],
      },
    ],
    areaLinksIntro:
      "Most club journeys end in the suburbs. These are areas we are asked for most often after a night in the centre:",
    areaLinks: [
      { name: "Clarendon Park", href: "/taxis-in/clarendon-park", anchor: "taxis in Clarendon Park" },
      { name: "Highfields", href: "/taxis-in/highfields", anchor: "taxis in Highfields" },
      { name: "Knighton", href: "/taxis-in/knighton", anchor: "taxis in Knighton" },
      { name: "Oadby", href: "/taxis-in/oadby", anchor: "taxis in Oadby" },
      { name: "Wigston", href: "/taxis-in/wigston", anchor: "taxis in Wigston" },
      { name: "Beaumont Leys", href: "/taxis-in/beaumont-leys", anchor: "taxis in Beaumont Leys" },
      { name: "Braunstone", href: "/taxis-in/braunstone", anchor: "taxis in Braunstone" },
      { name: "Evington", href: "/taxis-in/evington", anchor: "taxis in Evington" },
    ],
  },
  {
    slug: "taxi-leicester-the-lanes-market-place",
    path: "/taxi-leicester-the-lanes-market-place",
    label: "The Lanes & Market Place",
    h1: "Taxi to The Lanes and Market Place, Leicester",
    title: "Taxi to The Lanes & Market Place Leicester | 24/7",
    description:
      "Book a taxi to The Lanes and Market Place in Leicester — Firebug, The Globe, Little Sister and more. Fixed fares, licensed drivers, 24/7 booking.",
    eyebrow: "The Lanes & Market Place",
    intro: [
      "The Lanes pack more bars into a small footprint than anywhere else in Leicester. Silver Street, Loseby Lane, St Martins Square, Guildhall Lane and Cank Street all sit within a couple of minutes of each other, which is what makes the area good for a night that moves between venues — and what makes the pickup worth a moment's thought.",
      "Several of these streets are pedestrianised or too narrow for a car to wait in. That is not a problem, but it does mean the drop-off and the pickup are worth agreeing when you book rather than sorting out in the moment. Tell us the venue and we will arrange a road that works for both of you.",
    ],
    venuesHeading: "Lanes and Market Place venues we collect from",
    venuesIntro:
      "Three of these share Millstone Lane and two share the Market Place postcode, so the venue name is more useful than the number when you book.",
    sections: [
      {
        heading: "Pickups and drop-offs around narrow streets",
        paragraphs: [
          "Dropping off is usually simple — we bring you to the nearest point a car can stop and the walk in is short. Coming back out is the part that catches people, because a pin dropped in the middle of a pedestrianised lane does not give a driver anywhere to pull in.",
          "The fix is to agree the collection point at the booking stage. Give us the venue name, we will tell you where to come out to, and your driver will be looking for you in the right place. If your group has moved on to somewhere else in The Lanes by the time you are ready, message us with the new venue and we will update the job.",
        ],
      },
      {
        heading: "Nights that move between venues",
        paragraphs: [
          "Because the venues sit so close together, plans in The Lanes change more than they do elsewhere. A booking made for one bar at the start of the evening often needs to become a pickup from another by the end of it, and that is fine — we would rather you told us than cancelled.",
          "If you know roughly when you want to leave but not from where, book the time and confirm the venue nearer to it. Pre-booking the return trip still holds your slot even when the exact address is settled later.",
        ],
      },
      {
        heading: "Groups and the journey home",
        paragraphs: [
          "Larger groups are better served by booking one vehicle with the right number of seats than by splitting up on the night. Tell us how many of you there are when you book so we send something that fits, and let us know if people are being dropped at different addresses on the way.",
          "Travel with a licensed driver in a car you booked. Our drivers are licensed and DBS-checked, you will know which vehicle is coming, and the fare is fixed before you set off. Save the number before you head out so it is there when you want it.",
        ],
      },
    ],
    areaLinksIntro:
      "Heading home from The Lanes? These are the areas we cover most often from this part of the centre:",
    areaLinks: [
      { name: "Clarendon Park", href: "/taxis-in/clarendon-park", anchor: "taxis in Clarendon Park" },
      { name: "Stoneygate", href: "/taxis-in/stoneygate", anchor: "taxis in Stoneygate" },
      { name: "Aylestone", href: "/taxis-in/aylestone", anchor: "taxis in Aylestone" },
      { name: "Belgrave", href: "/taxis-in/belgrave", anchor: "taxis in Belgrave" },
      { name: "Humberstone", href: "/taxis-in/humberstone", anchor: "taxis in Humberstone" },
      { name: "Highcross", href: "/taxis-in/highcross-leicester", anchor: "taxis to Highcross Leicester" },
    ],
  },
  {
    slug: "taxi-leicester-king-street-granby-street",
    path: "/taxi-leicester-king-street-granby-street",
    label: "King Street & Granby Street",
    h1: "Taxi to King Street and Granby Street, Leicester",
    title: "Taxi to King Street & Granby Street Leicester | 24/7",
    description:
      "Book a taxi to King Street, Granby Street and Charles Street in Leicester. Grand Union, Watson's Bar and more — fixed fares agreed before you travel.",
    eyebrow: "King Street & Granby Street",
    intro: [
      "This corner of the city centre has a different rhythm to The Lanes. Granby Street and Charles Street are wide main roads carrying traffic through the centre, while King Street is short and narrow by comparison — three very different streets within a few minutes of each other.",
      "For a taxi, that difference matters more than it sounds. The main roads are easy to quote and easy to find. King Street is the one worth planning, because a short street with several venues on it fills up quickly when people are waiting outside.",
    ],
    venuesHeading: "King Street and Granby Street venues we collect from",
    venuesIntro:
      "Two of these share King Street and two sit on wider main roads, so quoting the venue name alongside the address saves a phone call.",
    sections: [
      {
        heading: "What the streets are like for pickups",
        paragraphs: [
          "Charles Street and Granby Street give a driver room to stop, which makes them some of the more straightforward addresses in the centre to be collected from. If you are choosing where to meet the rest of your group before heading on somewhere, these are sensible places to do it.",
          "King Street asks for a little more coordination. Booking ahead and agreeing the time means your driver arrives when you are ready rather than circling, and it means you are not standing on a narrow street hoping something turns up.",
        ],
      },
      {
        heading: "After-work drinks and pre-booked returns",
        paragraphs: [
          "Plenty of journeys to this part of town start straight from work rather than from home, and they often end earlier than a club night would. If you already know roughly when you want to be home, book the return at the same time as the outbound trip — it costs nothing to have it in the diary and you are not left sorting it out at the end of the evening.",
          "If you are continuing somewhere else rather than going home, we can take you on. Some passengers from this area carry on to the station; our page on taxis to Leicester Railway Station covers that run.",
        ],
      },
      {
        heading: "Groups, luggage and travelling safely",
        paragraphs: [
          "Tell us your numbers when you book. A group of five or six needs a larger vehicle, and that is far easier to arrange in advance than at the kerb. If anyone is carrying bags from work or from the shops, mention it and we will account for the space.",
          "Book a licensed vehicle rather than accepting a lift from a car that pulls up. Our drivers are licensed and DBS-checked, your fare is fixed before you travel, and you will know which car to look for. Keep your phone charged enough to take the call when your driver arrives.",
        ],
      },
    ],
    areaLinksIntro:
      "These are the areas we are most often asked to run to from this side of the centre:",
    areaLinks: [
      { name: "Leicester Railway Station", href: "/taxis-in/leicester-railway-station", anchor: "taxis to Leicester Railway Station" },
      { name: "Highfields", href: "/taxis-in/highfields", anchor: "taxis in Highfields" },
      { name: "Spinney Hills", href: "/taxis-in/spinney-hills", anchor: "taxis in Spinney Hills" },
      { name: "Evington", href: "/taxis-in/evington", anchor: "taxis in Evington" },
      { name: "Oadby", href: "/taxis-in/oadby", anchor: "taxis in Oadby" },
      { name: "Knighton", href: "/taxis-in/knighton", anchor: "taxis in Knighton" },
    ],
  },
  {
    slug: "taxi-leicester-high-street-pubs",
    path: "/taxi-leicester-high-street-pubs",
    label: "High Street pubs",
    h1: "Taxi to Leicester High Street Pubs",
    title: "Taxi to Leicester High Street Pubs | Book Online 24/7",
    description:
      "Book a taxi to Leicester High Street — Queen of Bradgate, Tree Leicester and The High Cross. Fixed fares, licensed drivers, booking online or by phone 24/7.",
    eyebrow: "High Street",
    intro: [
      "High Street is the simplest part of the city centre to be picked up from. Three of the pubs we are regularly asked for sit on the same short stretch and share a postcode, and the street itself is wide enough that finding each other is rarely the problem it can be in The Lanes.",
      "Sharing a postcode does create one wrinkle: LE1 4JB on its own is not enough to tell a driver which door you are at. Give us the venue name or the house number and that is solved.",
    ],
    venuesHeading: "High Street pubs we collect from",
    venuesIntro:
      "All three sit on the same stretch of High Street with the same postcode, so the name or the number is what tells them apart.",
    sections: [
      {
        heading: "An easier street to be collected from",
        paragraphs: [
          "Because High Street runs towards the Highcross end of the centre, it works well as a meeting point for a group arriving from different directions. If some of you are coming into town by other means and others are travelling by taxi, this is a practical place to converge before the evening starts properly.",
          "Drop-offs are straightforward for the same reason. Quote the venue and the number when you book and your driver will bring you to the door rather than to the end of a lane.",
        ],
      },
      {
        heading: "Earlier evenings and planned returns",
        paragraphs: [
          "Journeys from High Street often happen earlier than club pickups, which is exactly why they are easy to pre-book. If you have an idea of when you want to head home, put the return in at the same time as the outbound trip and it is done.",
          "A booked return also helps if the evening is going to run longer than planned. Message us and we will move the time — that is a quicker conversation than starting a new booking at the point when everyone else is also looking for a car.",
        ],
      },
      {
        heading: "Groups and getting home",
        paragraphs: [
          "Let us know your group size when you book so the right vehicle turns up, and tell us if people are being dropped at more than one address on the way. Both are easier to plan at the booking stage than to improvise later.",
          "Stick to licensed vehicles you have booked. Our drivers are licensed and DBS-checked, the fare is agreed before you travel, and you will know which car is yours. Save our number before the night rather than looking it up at the end of it.",
        ],
      },
    ],
    areaLinksIntro:
      "These are the areas we run to most often from the High Street end of the centre:",
    areaLinks: [
      { name: "Highcross", href: "/taxis-in/highcross-leicester", anchor: "taxis to Highcross Leicester" },
      { name: "Belgrave", href: "/taxis-in/belgrave", anchor: "taxis in Belgrave" },
      { name: "Rushey Mead", href: "/taxis-in/rushey-mead", anchor: "taxis in Rushey Mead" },
      { name: "Beaumont Leys", href: "/taxis-in/beaumont-leys", anchor: "taxis in Beaumont Leys" },
      { name: "Birstall", href: "/taxis-in/birstall", anchor: "taxis in Birstall" },
      { name: "Humberstone", href: "/taxis-in/humberstone", anchor: "taxis in Humberstone" },
    ],
  },
]

export function getClusterPage(slug: CityCentreClusterSlug): ClusterPageContent {
  const cluster = clusterPages.find((page) => page.slug === slug)
  if (!cluster) {
    throw new Error(`Unknown nights-out cluster: ${slug}`)
  }
  return cluster
}

/** The other clusters, for cross-linking between the four pages. */
export function otherClusters(slug: CityCentreClusterSlug): ClusterPageContent[] {
  return clusterPages.filter((page) => page.slug !== slug)
}

/** Metadata for a cluster route, in the same shape the other service pages use. */
export function buildClusterMetadata(slug: CityCentreClusterSlug): Metadata {
  const cluster = getClusterPage(slug)
  const canonical = buildCanonical(cluster.path)

  return {
    title: cluster.title,
    description: cluster.description,
    alternates: { canonical },
    openGraph: {
      title: cluster.title,
      description: cluster.description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: cluster.title,
      description: cluster.description,
    },
  }
}
