import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Plane, Clock, Shield, Car } from "lucide-react"
import { footerData, companyInfo, contactInfo, nearbyAreasBySlug } from "@/lib/data"
import type { Metadata } from "next"
import { JSX } from "react"
import PageBreadcrumbs from "@/components/PageBreadcrumbs"
import AreaPageStructuredData from "@/components/areas/AreaPageStructuredData"
import AreaPageDeferredFAQ from "@/components/areas/AreaPageDeferredFAQ"
import { areaPageBreadcrumbs } from "@/lib/seo/breadcrumbs"
import { collectAreaPageFaqs } from "@/lib/seo/areaPageFaqs"

type AreaItem = { name: string; href: string }
const siteUrl = "https://aylestone-taxis.co.uk"

const POPULAR_JOURNEY_AIRPORTS = [
  { label: "East Midlands Airport", href: "/pricing/airports/East-Midlands", code: "EMA" },
  { label: "Birmingham Airport", href: "/pricing/airports/Birmingham", code: "BHX" },
  { label: "Heathrow Airport", href: "/pricing/airports/Heathrow", code: "LHR" },
  { label: "Gatwick Airport", href: "/pricing/airports/Gatwick", code: "LGW" },
  { label: "Stansted Airport", href: "/pricing/airports/Stansted", code: "STN" },
  { label: "Luton Airport", href: "/pricing/airports/Luton", code: "LTN" },
  { label: "Manchester Airport", href: "/pricing/airports/Manchester", code: "MAN" },
] as const

const areaMeta: Record<string, { title: string; description: string }> = {
  // 1. Aylestone
  aylestone: {
    title: "Taxis in Aylestone Leicester | Book Online | Aylestone Kings",
    description:
      "Need a taxi in Aylestone? Aylestone Kings has served the area since 1995. Fixed airport fares, 24/7 local rides, DBS-checked drivers. Call 0116 2338888.",
  },
  // 2. Leicester City Centre
  "leicester-city-centre": {
    title: "Leicester City Centre Taxi | 24/7 | Aylestone Kings",
    description:
      "Fast taxi service in Leicester city centre. Highcross, railway station, restaurants, hotels — instant pickups day and night. Book online or call 0116 2338888.",
  },
  // 3. Oadby
  oadby: {
    title: "Oadby Taxi Leicester | Fixed Fares 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Oadby, Leicester. Fixed airport fares, local rides, and 24/7 availability. Licensed drivers. Call 0116 2338888 or book online.",
  },
  // 4. Wigston
  wigston: {
    title: "Wigston Taxis & Taxis Wigston | South Wigston | Aylestone",
    description:
      "Wigston taxis across Wigston, South Wigston & Long Street: airport transfers, station pickups, 24/7. Book taxis Wigston online or call 0116 2338888.",
  },
  // 5. Evington
  evington: {
    title: "Taxis in Evington Leicester | Fixed Fares 24/7",
    description:
      "Need a taxi in Evington, Leicester? Aylestone Kings provides fixed price taxis from Evington 24/7. Hospital runs, airport transfers and local journeys. Call 0116 233 8888.",
  },
  // 6. Belgrave
  belgrave: {
    title: "Belgrave Taxi Leicester | 24/7 Fixed Fares | Aylestone",
    description:
      "Fast, reliable taxis in Belgrave, Leicester. Airport transfers, local rides, and 24/7 service from Aylestone Kings. Licensed drivers. Call 0116 2338888.",
  },
  // 7. Spinney Hills
  "spinney-hills": {
    title: "Spinney Hills Taxi Leicester | 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Spinney Hills, Leicester. Local journeys, airport transfers, school runs. Licensed drivers available 24/7. Call 0116 2338888.",
  },
  // 8. Highfields
  highfields: {
    title: "Taxis in Highfields Leicester | Hospital & Airports",
    description:
      "Need a taxi in Highfields, Leicester? Aylestone Kings offers fixed price taxis from Highfields 24/7. Hospital runs, airport transfers and local journeys. Call 0116 233 8888.",
  },
  // 9. Clarendon Park
  "clarendon-park": {
    title: "Taxis in Clarendon Park Leicester | Fixed Fares 24/7",
    description:
      "Need a taxi in Clarendon Park, Leicester? Aylestone Kings provides fixed price taxis 24/7 from Clarendon Park. Airport transfers and late night rides. Call 0116 233 8888.",
  },
  // 10. Knighton
  knighton: {
    title: "Taxis in Knighton Leicester | Fixed Fares 24/7",
    description:
      "Looking for a taxi in Knighton, Leicester? Aylestone Kings offers fixed price taxis from Knighton 24/7. Airport transfers, school runs and local journeys. Call 0116 233 8888.",
  },
  // 11. Hamilton
  hamilton: {
    title: "Taxis in Hamilton Leicester | Fixed Fares 24/7",
    description:
      "Taxis in Hamilton Leicester: fixed fares from £8 to the city centre, EMA from £28, 24/7 school runs, shopping trips and airport transfers. DBS-checked drivers — call 0116 233 8888 or book online.",
  },
  // 12. Beaumont Leys
  "beaumont-leys": {
    title: "Beaumont Leys Taxi | 24/7 Book Online | Aylestone Kings",
    description:
      "Beaumont Leys taxi: fast pickups, school runs, airport transfers. Beaumont taxi service across LE4 — call 0116 2338888 or book online 24/7.",
  },
  // 13. Braunstone
  braunstone: {
    title: "Taxis in Braunstone Leicester | Fixed Fares 24/7",
    description:
      "Need a taxi in Braunstone, Leicester? Aylestone Kings provides fixed price taxis from Braunstone 24/7. Airport transfers, school runs and local journeys. Call 0116 233 8888.",
  },
  // 14. Thurmaston
  thurmaston: {
    title: "Thurmaston Taxi Leicester | 24/7 Fixed Fares",
    description:
      "Reliable taxi service in Thurmaston, Leicestershire. Airport transfers, local rides, 24/7 availability. Licensed drivers. Call 0116 2338888.",
  },
  // 15. Syston
  syston: {
    title: "Syston Taxis | Call 0116 2338888 | Book Online 24/7",
    description:
      "Syston taxis from Aylestone Kings — syston taxis phone number 0116 2338888. Local & airport fares, licensed drivers. Book Syston taxis online 24/7.",
  },
  // 16. Birstall
  birstall: {
    title: "Birstall Taxis Leicester | Local & Airport | Aylestone Kings",
    description:
      "Birstall taxis Leicester: reliable Birstall taxis for local trips and airports, 24/7. Book Birstall taxis online or call 0116 2338888.",
  },
  // 17. Glenfield
  glenfield: {
    title: "Taxis in Glenfield Leicester | Fixed Fares 24/7",
    description:
      "Need a taxi in Glenfield, Leicester? Aylestone Kings offers fixed price taxis from Glenfield 24/7. Glenfield Hospital runs, airport transfers and local journeys. Call 0116 233 8888.",
  },
  // 18. Blaby
  blaby: {
    title: "Taxis in Blaby Leicester | Fixed Fares 24/7",
    description:
      "Need a taxi in Blaby, Leicester? Fixed fares from £7 to the city centre, EMA from £25, 24/7 school runs and retail park trips. DBS-checked drivers — call 0116 233 8888.",
  },
  // 19. Narborough
  narborough: {
    title: "Taxis in Narborough Leicester | Fixed Fares 24/7",
    description:
      "Need a taxi in Narborough, Leicester? Fixed fares from £8 to the city centre, EMA from £22, train station pickups and school runs 24/7. DBS-checked drivers — call 0116 233 8888.",
  },
  // 20. Enderby
  enderby: {
    title: "Taxis in Enderby Leicester | Fixed Fares 24/7",
    description:
      "Need a taxi in Enderby or Meridian Business Park? Fixed fares from £8 to Leicester, EMA from £22, corporate accounts and 24/7 business park runs. Call 0116 233 8888.",
  },
  // 21. Loughborough
  loughborough: {
    title: "Taxis in Loughborough | Fixed Fares & Airports",
    description:
      "Need a taxi in Loughborough? Aylestone Kings provides fixed price taxis from Loughborough 24/7. East Midlands Airport transfers, Leicester runs and train station pickups. Call 0116 233 8888.",
  },
  // 22. Hinckley
  hinckley: {
    title: "Hinckley Taxi | Fixed Fares 24/7 | Aylestone Kings",
    description:
      "Need a taxi in Hinckley? Aylestone Kings offers fixed-price journeys, airport transfers, and 24/7 service. Licensed drivers. Call 0116 2338888.",
  },
  // 23. Coalville
  coalville: {
    title: "Taxi Coalville | Airport & Local 24/7 | Aylestone",
    description:
      "Taxi Coalville & Coalville taxis: local rides and airport transfers. Getting around Coalville — book online or call 0116 2338888, 24/7.",
  },
  // 24. Melton Mowbray
  "melton-mowbray": {
    title: "Melton Taxis & Melton Mowbray Taxi | Airport | Aylestone",
    description:
      "Melton taxis and Melton Mowbray taxi: call 0116 2338888 for airport & local trips. Melton taxi numbers for Aylestone Kings — book online 24/7.",
  },
  // 25. Market Harborough
  "market-harborough": {
    title: "Market Harborough Taxi | Airport & Local 24/7",
    description:
      "Market Harborough airport taxi to EMA, Birmingham, Heathrow & UK airports. Fixed-fare airport taxis from Market Harborough — call 0116 2338888 or book online.",
  },
  // 26. Rushey Mead
  "rushey-mead": {
    title: "Rushey Mead Taxi Leicester | 24/7 Pickups",
    description:
      "Reliable taxi service in Rushey Mead, Leicester. Local rides, airport transfers, school runs. 24/7 availability. Call 0116 2338888.",
  },
  // 27. Stoneygate
  stoneygate: {
    title: "Stoneygate Taxi Leicester | 24/7 Service",
    description:
      "Premium taxi service in Stoneygate, Leicester. Airport transfers, local rides, 24/7 availability. Licensed drivers. Call 0116 2338888.",
  },
  // 28. South Wigston
  "south-wigston": {
    title: "South Wigston Taxi Leicester | 24/7 Fixed Fares",
    description:
      "Taxi service in South Wigston, Leicestershire. Airport transfers, local rides, station pickups. 24/7 from Aylestone Kings. Call 0116 2338888.",
  },
  // 29. Humberstone
  humberstone: {
    title: "Humberstone Taxi Leicester | 24/7 Service",
    description:
      "Reliable taxi service in Humberstone, Leicester. Local rides, airport transfers, 24/7 availability. Call Aylestone Kings on 0116 2338888.",
  },
  // 30. Thurnby Lodge
  "thurnby-lodge": {
    title: "Thurnby Lodge Taxi Leicester | 24/7",
    description:
      "Fast taxi service in Thurnby Lodge, Leicester. Local rides, airport transfers, 24/7 availability from Aylestone Kings. Call 0116 2338888.",
  },
  // 31. Westcotes
  westcotes: {
    title: "Westcotes Taxi Leicester | 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Westcotes, Leicester. Local rides, airport transfers, 24/7 service from Aylestone Kings. Call 0116 2338888.",
  },
  // 32. Eyres Monsell
  "eyres-monsell": {
    title: "Eyres Monsell Taxi Leicester | 24/7",
    description:
      "Fast, affordable taxi service in Eyres Monsell, Leicester. Local rides, airport transfers, 24/7 availability. Call 0116 2338888.",
  },
  // 33. Glen Parva
  "glen-parva": {
    title: "Glen Parva Taxi Leicester | Fixed Fares 24/7",
    description:
      "Reliable taxi service in Glen Parva, Leicestershire. Airport transfers, local rides, 24/7 from Aylestone Kings. Call 0116 2338888.",
  },
  // 34. Fosse Park
  "fosse-park": {
    title: "Fosse Park Leicester Taxi | Shopping Pickups | Aylestone",
    description:
      "Fosse Park Leicester taxi: drop-offs & pickups at Fosse Park retail park. Fosse taxi Leicester — skip parking queues, call 0116 2338888 or book online.",
  },
  // 35. Braunstone Town
  "braunstone-town": {
    title: "Braunstone Town Taxi | 24/7 | Aylestone Kings",
    description:
      "Taxi service in Braunstone Town, Leicestershire. Local rides, airport transfers, 24/7 availability. Call Aylestone Kings on 0116 2338888.",
  },
  // 36. Groby
  groby: {
    title: "Groby Taxi Leicestershire | Airport 24/7",
    description:
      "Reliable taxi service in Groby, Leicestershire. Airport transfers to EMA and BHX, local rides, 24/7 availability. Call 0116 2338888.",
  },
  // 37. Wigston Fields
  "wigston-fields": {
    title: "Wigston Fields Taxi Leicester | 24/7 Fixed",
    description:
      "Fast taxi service in Wigston Fields, Leicestershire. Airport transfers, local rides, 24/7 availability. Call Aylestone Kings on 0116 2338888.",
  },
  // 38. Broughton Astley
  "broughton-astley": {
    title: "Broughton Astley Taxi | 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Broughton Astley. Airport transfers, local rides, 24/7 availability from Aylestone Kings. Call 0116 2338888.",
  },
  // 39. Cosby
  cosby: {
    title: "Cosby Taxi Leicestershire | Fixed Fares 24/7",
    description:
      "Reliable 24/7 taxi service in Cosby, Leicestershire. Airport transfers, local rides, licensed drivers. Call Aylestone Kings on 0116 2338888.",
  },
  // 40. Countesthorpe
  countesthorpe: {
    title: "Countesthorpe Taxi | 24/7 Service | Aylestone",
    description:
      "Fast taxi service in Countesthorpe, Leicestershire. Airport transfers, local rides, 24/7. Licensed drivers. Call 0116 2338888.",
  },
  // 41. Kibworth
  kibworth: {
    title: "Kibworth Taxi Leicestershire | Airport 24/7",
    description:
      "Reliable taxi service in Kibworth, Leicestershire. Fixed airport fares, local rides, 24/7 availability. Call Aylestone Kings on 0116 2338888.",
  },
  // 42. Lutterworth
  lutterworth: {
    title: "Lutterworth Taxi | Fixed Fares 24/7 | Aylestone",
    description:
      "Professional taxi service in Lutterworth, Leicestershire. Airport transfers to BHX & EMA, local rides, 24/7. Call 0116 2338888.",
  },
  // 43. Whetstone
  whetstone: {
    title: "Whetstone Taxi Leicestershire | 24/7 Fixed",
    description:
      "Fast, reliable taxi service in Whetstone, Leicestershire. Airport transfers, local rides, 24/7 availability. Call Aylestone Kings on 0116 2338888.",
  },
  // 44. University & College Areas – De Montfort University & University of Leicester
  "de-montfort-university": {
    title: "Taxi to De Montfort University Leicester | 24/7",
    description:
      "Need a taxi to De Montfort University? Aylestone Kings provides fast, affordable rides to DMU 24/7. Airport transfers, city rides, student-friendly. Call 0116 2338888.",
  },
  "university-of-leicester": {
    title: "Taxi to University of Leicester | 24/7 Rides",
    description:
      "Need a taxi to the University of Leicester? Aylestone Kings provides reliable 24/7 student-friendly rides, airport transfers, and local journeys. Call 0116 2338888.",
  },
}

type AreaContent = {
  body: JSX.Element
  faqs: { question: string; answer: string }[]
}

type PriorityAreaSeoContent = {
  bodyParagraphs: string[]
  faqs: { question: string; answer: string }[]
}

/** Optional per-area H1 override (default: Taxi Service in {area} – Aylestone Taxis). */
const AREA_CUSTOM_H1: Record<string, string> = {
  knighton: "Taxis in Knighton, Leicester",
  "clarendon-park": "Taxis in Clarendon Park, Leicester",
  highfields: "Taxis in Highfields, Leicester",
  braunstone: "Taxis in Braunstone, Leicester",
  evington: "Taxis in Evington, Leicester",
  glenfield: "Taxis in Glenfield, Leicester",
  loughborough: "Taxis in Loughborough, Leicestershire",
  blaby: "Taxis in Blaby, Leicestershire",
  narborough: "Taxis in Narborough, Leicestershire",
  enderby: "Taxis in Enderby, Leicestershire",
}

/** Optional contextual link from a taxis-in area page to a relevant blog post (SEO discovery). */
const AREA_BLOG_CALLOUTS: Record<
  string,
  { href: string; title: string; teaser: string }
> = {
  oadby: {
    href: "/blog/leicester-to-birmingham-airport-taxi-complete-guide-cost-time-tips",
    title: "Leicester to Birmingham Airport: Cost, Time & Tips",
    teaser:
      "Planning a Birmingham Airport transfer from Oadby? See typical drive times, fixed fares, and booking tips in",
  },
  wigston: {
    href: "/blog/leicester-to-birmingham-airport-taxi-complete-guide-cost-time-tips",
    title: "Leicester to Birmingham Airport: Cost, Time & Tips",
    teaser:
      "Many Wigston passengers use Birmingham Airport — compare journey time, luggage tips, and fixed pricing before you travel in",
  },
  blaby: {
    href: "/blog/leicester-to-birmingham-airport-taxi-complete-guide-cost-time-tips",
    title: "Leicester to Birmingham Airport: Cost, Time & Tips",
    teaser:
      "Blaby is well placed for BHX via the M69/M42 corridor. For cost, timing, and drop-off advice, read",
  },
  "leicester-city-centre": {
    href: "/blog/how-much-does-taxi-cost-leicester-2026-fare-guide",
    title: "How much does a taxi cost in Leicester? (2026 price guide)",
    teaser:
      "City-centre pickups vary by time and distance. For example fares, fixed quotes, and what changes the price, see",
  },
  aylestone: {
    href: "/blog/how-much-does-taxi-cost-leicester-2026-fare-guide",
    title: "How much does a taxi cost in Leicester? (2026 price guide)",
    teaser:
      "Budgeting for local runs or airports from Aylestone? Our plain-English overview of Leicester taxi pricing is in",
  },
  "clarendon-park": {
    href: "/blog/how-much-does-taxi-cost-leicester-2026-fare-guide",
    title: "How much does a taxi cost in Leicester? (2026 price guide)",
    teaser:
      "Wondering what a fair fare looks like for students and residents? Compare typical journeys and booking options in",
  },
  knighton: {
    href: "/blog/best-taxi-leicester-what-to-look-for",
    title: "Best taxi in Leicester: what to look for",
    teaser:
      "Late nights and airport runs need a provider you can trust. Use our checklist for licensing, pricing, and service in",
  },
  stoneygate: {
    href: "/blog/best-taxi-leicester-what-to-look-for",
    title: "Best taxi in Leicester: what to look for",
    teaser:
      "Need a consistent standard for work and evenings out? See what separates reliable operators from the rest in",
  },
  highfields: {
    href: "/blog/best-taxi-leicester-what-to-look-for",
    title: "Best taxi in Leicester: what to look for",
    teaser:
      "Hospital visits and nights out demand safety and clarity. Read",
  },
  evington: {
    href: "/blog/leicester-to-heathrow-taxi-everything-you-need-to-know",
    title: "Leicester to Heathrow taxi: everything you need to know",
    teaser:
      "Long-distance airport days need realistic timing and a confirmed price. Start with",
  },
  belgrave: {
    href: "/blog/leicester-to-heathrow-taxi-everything-you-need-to-know",
    title: "Leicester to Heathrow taxi: everything you need to know",
    teaser:
      "Heathrow is a major hub for international trips from Leicester. Route options, buffer times, and return pickups are covered in",
  },
  narborough: {
    href: "/blog/leicester-to-heathrow-taxi-everything-you-need-to-know",
    title: "Leicester to Heathrow taxi: everything you need to know",
    teaser:
      "Many families pre-book a fixed-fare Leicester to Heathrow taxi from south Leicestershire. Plan M1/M25 timing and luggage space in",
  },
}

const priorityAreaSeoContent: Record<string, PriorityAreaSeoContent> = {
  knighton: {
    bodyParagraphs: [
      "Knighton is one of south Leicester's most established residential neighbourhoods — a mix of Victorian terraces, Edwardian villas, and family homes between Clarendon Park and the Welford Road corridor. Walk a few minutes in any direction and you are never far from green space: Knighton Park borders the western edge of the ward, Victoria Park stretches east towards the city, and De Montfort University sits on the London Road boundary, drawing thousands of students and staff through Knighton every term. Aylestone Kings has served this area since 1995, and our Knighton passengers tend to fall into two groups — university commuters who need reliable early-morning and late-night runs, and professionals heading into the city centre, hospitals, or business parks on a fixed daily schedule.",
      "For students, Knighton is a practical base. Shared houses on Knighton Fields Road, Church Road, and the streets around DMU generate steady demand for campus runs, library sessions, city-centre evenings, and Leicester Railway Station at the start and end of term. We operate 24/7, so a late society event or an early exam does not leave you stranded — a licensed, DBS-checked driver from our Leicester fleet can be with you quickly. Many students pre-book airport transfers for half-term and summer travel, with fixed fares confirmed before pickup so there are no meter surprises on the way to East Midlands or Birmingham.",
      "Professional commuters book us just as regularly. Knighton's position south of the city centre gives quick access to the inner ring road and the A563, which makes morning runs into Leicester offices, Leicester Royal Infirmary, and business parks predictable when you set a standing pickup time. Parents in Knighton's school catchments arrange regular school runs with a consistent driver where possible, giving children a familiar face each morning. Every driver is licensed by Leicester City Council and DBS checked as standard.",
      "We quote fixed prices on agreed routes, so you know the fare before the car arrives — whether that is a five-minute hop or a pre-booked airport day. Core services from Knighton include 24/7 local taxis, airport transfers to all major UK airports, school-run contracts, hospital appointments, and longer-distance business travel. Vehicles range from standard saloons for solo commuters to estates and MPVs for families and luggage-heavy airport trips.",
      "Typical journey times reflect Knighton's favourable position: Leicester city centre is around 10–12 minutes in normal traffic via London Road or Clarence Road, East Midlands Airport is roughly 25 minutes via the A563 and M1, and Birmingham Airport is around 50 minutes on a clear run. Example fares include Knighton to Leicester city centre from £6 and Knighton to East Midlands Airport from £28 — final pricing is confirmed at booking based on your exact pickup point, vehicle size, and time of travel.",
      "Knighton sits alongside neighbouring Oadby and Clarendon Park, and we cover the whole south Leicester area without boundary surcharges. For full airport route guidance including terminal drop-offs and flight-timing advice, see our airport transfers service. Whether you are a DMU student catching an early lecture, a parent on the school run, or a professional commuting into the city, Aylestone Kings gives Knighton a taxi service built around fixed fares, licensed drivers, and round-the-clock availability.",
    ],
    faqs: [
      {
        question: "Can I book a regular school run from Knighton?",
        answer:
          "Yes. We set up regular school runs from Knighton with consistent pickup times and, where possible, the same DBS-checked driver each morning. Contact us by phone or online to arrange a standing booking.",
      },
      {
        question: "Can I get a taxi from Knighton late at night?",
        answer:
          "Yes. We operate 24/7 in Knighton, including late-night pickups after city-centre events, DMU society evenings, and early-morning airport runs. Call 0116 233 8888 or book online at any hour.",
      },
      {
        question: "What is the fare from Knighton to Leicester city centre?",
        answer:
          "A taxi from Knighton to Leicester city centre typically starts from £6 depending on your exact pickup and drop-off points. Journey time is around 10–12 minutes in normal traffic. You will receive a fixed quote before you confirm.",
      },
    ],
  },
  "clarendon-park": {
    bodyParagraphs: [
      "Clarendon Park is one of Leicester's most distinctive south-city neighbourhoods — a leafy Victorian suburb where independent cafes along Queens Road meet quiet residential streets and a strong sense of community. Clarendon Park Road runs through the heart of the area, Victoria Park opens directly to the east, the University of Leicester campus sits a short ride north, and London Road provides the main artery connecting Clarendon Park to the city centre and beyond. Aylestone Kings has served this ward since 1995, and most of our Clarendon Park bookings come from two groups: university students who need dependable transport between campus, halls, and nights out, and young professionals commuting into the city or catching early airport flights.",
      "Students make up a large share of Clarendon Park's daily taxi demand. Shared houses on Clarendon Park Road, Knighton Road, and the streets between Victoria Park and the university generate regular bookings for lecture runs, library sessions, supermarket trips, and Leicester Railway Station at the start and end of term. Because we operate 24/7, a late-night pickup after a city-centre event or a society evening on campus is never a problem — call us and a licensed, DBS-checked driver will be dispatched from our Leicester fleet. Many students pre-book airport transfers for reading week and summer travel, with the fare confirmed upfront so there are no meter surprises.",
      "Young professionals living in Clarendon Park value the same reliability. The area's position — close enough to walk to Victoria Park on a lunch break, but well connected to the inner ring road — makes it a popular base for people working in Leicester's offices, hospitals, and creative industries. Standing morning pickups to the city centre, regular school-run contracts for families in the catchment, and evening returns after restaurants on London Road are all common requests. Every driver is licensed by Leicester City Council and DBS checked before they carry passengers.",
      "We quote fixed prices on agreed routes, so you always know the fare before the car arrives. Services from Clarendon Park include 24/7 local taxis, late-night rides home from the city centre or campus, airport transfers to all major UK airports, school-run standing bookings, and hospital appointments. Vehicles range from standard saloons for a solo commuter to estates and MPVs when you are travelling with luggage or a group.",
      "Journey times from Clarendon Park reflect how close the area sits to Leicester's core: the city centre is around 8–10 minutes in normal traffic via London Road or Welford Road, East Midlands Airport is roughly 25 minutes via the A563 and M1, and Birmingham Airport is around 50 minutes on a clear run. Example fares include Clarendon Park to Leicester city centre from £5 and Clarendon Park to East Midlands Airport from £28 — your exact quote is confirmed at booking based on pickup point, vehicle size, and time of travel.",
      "Clarendon Park borders Knighton and sits between the University of Leicester and De Montfort University's London Road campus, and we cover the whole south Leicester triangle without boundary surcharges. For detailed airport route guidance — terminal drop-offs, flight-timing advice, and fixed-fare booking — see our airport transfers service. Whether you are a student heading to a 9am lecture, a professional commuting to the office, or a resident catching a late-night ride home, Aylestone Kings gives Clarendon Park a taxi service built on fixed fares, licensed drivers, and round-the-clock availability.",
    ],
    faqs: [
      {
        question: "Do you cover late night pickups in Clarendon Park?",
        answer:
          "Yes. We operate 24/7 in Clarendon Park, including late-night pickups after city-centre events, university society evenings, and restaurant trips along London Road. Call 0116 233 8888 or book online at any hour — no late-night surcharge.",
      },
      {
        question: "Can I get a fixed price taxi from Clarendon Park to the airport?",
        answer:
          "Yes. We quote fixed fares for airport transfers from Clarendon Park to East Midlands, Birmingham, Heathrow, and all major UK airports. Your price is confirmed before you travel — typically from £28 to East Midlands Airport depending on vehicle size and pickup point.",
      },
      {
        question: "How long does a taxi from Clarendon Park to Leicester city centre take?",
        answer:
          "Most journeys from Clarendon Park to Leicester city centre take around 8–10 minutes in normal traffic via London Road or Welford Road. Rush-hour traffic can add a few minutes, so allow extra time during peak periods.",
      },
    ],
  },
  highfields: {
    bodyParagraphs: [
      "Highfields sits at the heart of inner Leicester — a diverse, busy neighbourhood where residential streets meet major routes and some of the city's most important destinations. Highfields Park stretches along the southern edge of the ward, Spinney Hill Park lies to the north-east, Evington Road runs through the centre connecting the area to the wider city, and Leicester Royal Infirmary is just minutes away on Infirmary Square. Aylestone Kings has served Highfields since 1995, and our bookings here reflect the area's character: families needing school runs and shopping trips, NHS workers travelling to and from LRI on every shift pattern, and commuters heading into Leicester city centre for work.",
      "Families in Highfields rely on taxis for the journeys that buses and walking cannot always cover comfortably — the school run on a rainy morning, a Saturday trip to Fosse Park, or a hospital visit with children in tow. We arrange standing school-run bookings with consistent pickup times and, where possible, the same DBS-checked driver each day so parents and children know who to expect. All drivers are licensed by Leicester City Council, and vehicles are clean, comfortable, and suitable for family travel.",
      "NHS workers make up a significant share of our Highfields demand. Leicester Royal Infirmary is one of the region's busiest hospitals, and staff on early starts, late finishes, and rotating night shifts need a taxi service that is genuinely available around the clock — not one that stops answering after midnight. We run hospital transfers to LRI from anywhere in Highfields throughout the day and night, with drivers who know the main entrances, A&E drop-off points, and staff car park collection areas. A typical run from Highfields to LRI takes around five minutes, and fares start from £4.",
      "Commuters heading into Leicester city centre from Highfields benefit from the area's central position. Evington Road and London Road both provide quick routes into town, and a standing morning pickup means you are not relying on bus timetables or searching for parking. We quote fixed prices on agreed routes, so your daily commute cost is predictable week to week. The same applies to airport days — pre-book a fixed-fare transfer to East Midlands or Birmingham and travel with luggage without the stress of surge pricing.",
      "Typical journey times from Highfields: Leicester city centre around 8–10 minutes in normal traffic, Leicester Royal Infirmary around five minutes, East Midlands Airport roughly 25 minutes via the A563 and M1, and Birmingham Airport around 50 minutes on a clear run. Example fares include Highfields to Leicester city centre from £5, Highfields to East Midlands Airport from £28, and Highfields to LRI from £4 — your exact quote is confirmed at booking based on pickup point, vehicle size, and time of travel.",
      "Highfields borders Spinney Hills and sits close to Evington, Clarendon Park, and the city centre, and we cover the whole inner Leicester area without boundary surcharges. Core services include 24/7 local taxis, hospital runs, airport transfers to all major UK airports, school-run standing bookings, and shift-change pickups for NHS and other night workers. For detailed airport route guidance — terminal drop-offs, flight-timing advice, and fixed-fare booking — see our airport transfers service. Whether you are a nurse finishing a night shift, a parent on the school run, or a commuter heading to the office, Aylestone Kings gives Highfields a taxi service built on fixed fares, licensed drivers, and genuine round-the-clock availability.",
    ],
    faqs: [
      {
        question: "Do you cover hospital runs from Highfields to Leicester Royal Infirmary?",
        answer:
          "Yes. We provide hospital runs from Highfields to Leicester Royal Infirmary (LRI) 24/7, including early-morning appointments, visiting hours, and staff shift changes. Journey time is around five minutes and fares start from £4. Mention the entrance or department when you book.",
      },
      {
        question: "Can I book a regular taxi from Highfields for night shifts?",
        answer:
          "Yes. Many NHS workers and shift workers in Highfields set up regular standing bookings for night-shift pickups and drop-offs. Call 0116 233 8888 to arrange a recurring booking with consistent times and, where possible, the same driver.",
      },
      {
        question: "What is the fare from Highfields to Leicester city centre?",
        answer:
          "A taxi from Highfields to Leicester city centre typically starts from £5 depending on your exact pickup and drop-off points. Journey time is around 8–10 minutes in normal traffic. You will receive a fixed quote before you confirm.",
      },
    ],
  },
  braunstone: {
    bodyParagraphs: [
      "Braunstone is a west Leicester neighbourhood with a strong community identity and practical road links that make getting around straightforward. Braunstone Park sits at the heart of the ward, Braunstone Town extends the residential catchment just beyond the city boundary, Fosse Shopping Park is a few minutes away for retail and leisure trips, and Braunstone Gate provides a direct route into the city centre. Aylestone Kings has served Braunstone since 1995, and most of our bookings here come from two groups: families who need dependable school runs, shopping trips, and weekend outings, and working commuters who rely on a fixed-price taxi to get to shifts, warehouses, and city-centre jobs without the cost or hassle of parking.",
      "Families in Braunstone use taxis for the everyday journeys that matter — the school run on a wet morning, a Saturday trip to Fosse Shopping Park with bags of shopping, or a lift to a relative's house across Leicester. We arrange standing school-run bookings with consistent pickup times and, where possible, the same DBS-checked driver each day so children and parents know who to expect. All drivers are licensed by Leicester City Council, and our vehicles are clean and comfortable for family travel. Pre-booking a return pickup from Fosse Park after a long shop means you are not wrestling with bags on a bus.",
      "Working commuters in Braunstone value straightforward pricing above everything else. Many residents travel into Leicester city centre for retail, hospitality, and warehouse shifts, or head south-west towards Narborough and the M69 corridor for logistics and manufacturing work. A standing morning pickup to the city centre or a regular night-shift collection means you are not gambling on bus timetables or paying for city-centre parking. We quote fixed prices on agreed routes, so your weekly commute cost is predictable — no surge pricing, no meter ticking up in traffic once the job is booked.",
      "Braunstone's west-side position also makes it one of Leicester's better-connected areas for airport travel. East Midlands Airport is typically around 20 minutes via the M1, and Birmingham Airport is around 45 minutes on a clear run — shorter than many other Leicester suburbs because of quick ring-road and motorway access. Pre-book a fixed-fare airport transfer and travel with family and luggage without worrying about the final bill. We cover all major UK airports from Braunstone with flight monitoring available on request.",
      "Typical journey times from Braunstone: Leicester city centre around 10–12 minutes in normal traffic via Narborough Road or the ring road, East Midlands Airport roughly 20 minutes, and Birmingham Airport around 45 minutes. Example fares include Braunstone to Leicester city centre from £6 and Braunstone to East Midlands Airport from £25 — your exact quote is confirmed at booking based on pickup point, vehicle size, and time of travel.",
      "Braunstone sits close to Narborough, Glen Parva, and Aylestone, and we cover the whole west Leicester area without boundary surcharges. Core services include 24/7 local taxis, school-run standing bookings, shopping trips to Fosse Shopping Park and other retail destinations, airport transfers to all major UK airports, and hospital appointments. For detailed airport route guidance — terminal drop-offs, flight-timing advice, and fixed-fare booking — see our airport transfers service. Whether you are a parent on the school run, a commuter heading to a shift, or a family catching an early flight, Aylestone Kings gives Braunstone a taxi service built on fixed fares, licensed drivers, and genuine round-the-clock availability.",
    ],
    faqs: [
      {
        question: "How much is a taxi from Braunstone to Leicester city centre?",
        answer:
          "A taxi from Braunstone to Leicester city centre typically starts from £6 depending on your exact pickup and drop-off points. Journey time is around 10–12 minutes in normal traffic via Narborough Road or the ring road. You will receive a fixed quote before you confirm.",
      },
      {
        question: "Do you offer airport transfers from Braunstone?",
        answer:
          "Yes. We provide fixed-price airport transfers from Braunstone to East Midlands, Birmingham, Heathrow, and all major UK airports. East Midlands Airport is around 20 minutes and fares start from £25. Pre-book for the best availability, especially for early-morning flights.",
      },
      {
        question: "Can I book a school run taxi from Braunstone?",
        answer:
          "Yes. We set up regular school runs from Braunstone with consistent pickup times and, where possible, the same DBS-checked driver each morning. Call 0116 233 8888 or book online to arrange a standing school-run booking.",
      },
    ],
  },
  blaby: {
    bodyParagraphs: [
      "Blaby is a thriving market town on Leicester's southern fringe — a place where village character meets practical everyday travel. Blaby Road runs through the heart of the area connecting residential streets to the A426 corridor, Grove Farm Triangle draws shoppers and families to its retail cluster, Blaby Retail Park hosts major high-street names and click-and-collect collections, and neighbouring Whetstone is just minutes away for passengers who straddle both communities. Aylestone Kings has served south Leicestershire since 1995, and our Blaby passengers typically fall into three groups: families needing school runs and weekend outings, commuters heading into Leicester city centre for work, and shoppers who want a straightforward ride to the retail park without hunting for parking.",
      "Families in Blaby book us for the journeys that matter on a school day — the wet-morning run when the bus is not appealing, a lift to after-school clubs in Leicester, or a Saturday trip into town with children and bags. We arrange standing school-run bookings with consistent pickup times and, where possible, the same DBS-checked driver each morning so parents and children know who to expect. All drivers are licensed by Leicester City Council, and vehicles are clean and comfortable for family travel. Pre-booking a return pickup from Blaby Retail Park after a big shop means you are not wrestling with trolley loads onto a bus.",
      "Commuters treat Blaby as a practical base south of the city. Morning runs into Leicester offices, Leicester Railway Station, and business parks along the A426 are among our most frequent bookings. Blaby's position close to the M69 junction also makes it one of south Leicestershire's better-connected areas for airport days — but the everyday commute is where fixed pricing matters most. We quote agreed fares before the car arrives, so your weekly travel cost is predictable with no surge multipliers on rainy Tuesdays or match-day evenings.",
      "Shoppers use our Blaby taxi service for Grove Farm Triangle, Blaby Retail Park, and trips onward to Fosse Park or Leicester city centre. Retail park forecourts can be busy on weekends, so tell us your preferred pickup point — store entrance, car park aisle, or a nearby side road — and we will note it on the job. Whether you are collecting a large click-and-collect order, visiting the weekly market in Blaby town centre, or meeting friends for lunch before an afternoon in the city, a pre-booked taxi keeps the day simple.",
      "Typical journey times from Blaby reflect the town's favourable road position: Leicester city centre is around 12–15 minutes in normal traffic via Blaby Road and the A426, East Midlands Airport is roughly 15 minutes via the M1 corridor, and Birmingham Airport is around 50 minutes on a clear run via the M69 and M42. Example fares include Blaby to Leicester city centre from £7 and Blaby to East Midlands Airport from £25 — your exact quote is confirmed at booking based on pickup point, vehicle size, and time of travel.",
      "Core services from Blaby include 24/7 availability with no night surcharge, fixed prices confirmed before you travel, DBS-checked licensed drivers, airport transfers to all major UK airports, school-run standing bookings, and retail park trips to Blaby Retail Park and Grove Farm Triangle. Blaby sits close to Narborough, Wigston, and Glen Parva, and we cover the whole south Leicestershire area without boundary surcharges. For detailed airport route guidance — terminal drop-offs, flight-timing advice, and fixed-fare booking — see our airport transfers service. Whether you are a parent on the school run, a commuter heading to the city, or a family catching an early EMA flight, Aylestone Kings gives Blaby a taxi service built on fixed fares, licensed drivers, and genuine round-the-clock availability.",
    ],
    faqs: [
      {
        question: "How much is a taxi from Blaby to Leicester city centre?",
        answer:
          "A taxi from Blaby to Leicester city centre typically starts from £7 depending on your exact pickup and drop-off points. Journey time is around 12–15 minutes in normal traffic via Blaby Road and the A426. You will receive a fixed quote before you confirm.",
      },
      {
        question: "Do you offer fixed price airport transfers from Blaby?",
        answer:
          "Yes. We provide fixed-price airport transfers from Blaby to East Midlands Airport, Birmingham, Heathrow, and all major UK airports. East Midlands Airport is around 15 minutes and fares start from £25. Your price is confirmed before you travel, with flight monitoring available on request.",
      },
      {
        question: "Can I book a school run taxi from Blaby?",
        answer:
          "Yes. We set up regular school runs from Blaby with consistent pickup times and, where possible, the same DBS-checked driver each morning. Call 0116 233 8888 or book online to arrange a standing school-run booking.",
      },
    ],
  },
  narborough: {
    bodyParagraphs: [
      "Narborough is one of south-west Leicestershire's busiest commuter villages — a growing community where new housing, village character, and strong transport links meet everyday travel needs. Narborough Road runs through the heart of the area connecting residential streets to Leicester and the M69 corridor, Narborough Train Station provides direct rail services to Leicester and Nuneaton, Narborough Park offers green space for families and dog walkers, and Leicester Forest East sits just minutes away for passengers who live or work across the wider south-west fringe. Aylestone Kings has served this corridor since 1995, and our Narborough passengers are typically commuters who need reliable station connections and families who want dependable school runs and airport days without surge pricing.",
      "Commuters book us for the journeys that train timetables cannot always cover. Early-morning starts before the first service, late finishes when connections are thin, and door-to-door runs with luggage to Leicester city centre or Leicester Railway Station are all common requests from Narborough. Pre-book with your train arrival time and we will meet you at Narborough Train Station, or call when you step off the platform and we will dispatch the nearest available driver. We quote fixed prices on agreed routes, so your weekly commute cost stays predictable — no app surge on rainy evenings or match days.",
      "Families in Narborough rely on taxis for school runs, weekend outings, and the practical trips that buses make awkward — the wet-morning dash to school, a lift to after-school clubs in Leicester, or a Saturday visit to Narborough Park followed by shopping in town. We arrange standing school-run bookings with consistent pickup times and, where possible, the same DBS-checked driver each morning so parents and children know who to expect. All drivers are licensed by Leicester City Council, and vehicles are clean and comfortable for family travel.",
      "Narborough's position close to the M1 and M69 junctions makes it one of the quickest Leicester-area starting points for airport travel. East Midlands Airport is especially convenient — many Narborough passengers reach the terminal in around ten minutes on a clear run, making a pre-booked fixed-fare transfer far simpler than long-stay parking or multiple bus connections. Birmingham Airport is also popular from Narborough, with a typical drive of around 45 minutes via the M69 and M42 when traffic is light.",
      "Typical journey times from Narborough: Leicester city centre around 15 minutes in normal traffic via Narborough Road and the A5460, East Midlands Airport roughly 10 minutes via the M1 corridor, and Birmingham Airport around 45 minutes on a clear run. Example fares include Narborough to Leicester city centre from £8 and Narborough to East Midlands Airport from £22 — your exact quote is confirmed at booking based on pickup point, vehicle size, and time of travel.",
      "Core services from Narborough include 24/7 availability with no night surcharge, fixed prices confirmed before you travel, DBS-checked licensed drivers, airport transfers to all major UK airports, train station pickups at Narborough Train Station, and school-run standing bookings. Narborough sits close to Blaby, Enderby, and Braunstone, and we cover the whole south Leicestershire area without boundary surcharges. For detailed airport route guidance — terminal drop-offs, flight-timing advice, and fixed-fare booking — see our airport transfers service. Whether you are a commuter catching the first train, a parent on the school run, or a family heading to an early EMA flight, Aylestone Kings gives Narborough a taxi service built on fixed fares, licensed drivers, and genuine round-the-clock availability.",
    ],
    faqs: [
      {
        question: "How much is a taxi from Narborough to East Midlands Airport?",
        answer:
          "A taxi from Narborough to East Midlands Airport (EMA) typically starts from £22 depending on your exact pickup point and vehicle type. Journey time is around 10 minutes in normal traffic — one of the shortest airport runs from the Leicester area. You will receive a fixed quote before you confirm, with flight monitoring available on request.",
      },
      {
        question: "Do you pick up from Narborough train station?",
        answer:
          "Yes. We provide pickups and drop-offs at Narborough Train Station throughout the day and night — especially for early-morning services, late-night arrivals, and connections that do not fit the timetable. Pre-book with your train time or call when you arrive and we will dispatch the nearest available driver.",
      },
      {
        question: "Can I book a regular school run from Narborough?",
        answer:
          "Yes. We set up regular school runs from Narborough with consistent pickup times and, where possible, the same DBS-checked driver each morning. Call 0116 233 8888 or book online to arrange a standing school-run booking.",
      },
    ],
  },
  enderby: {
    bodyParagraphs: [
      "Enderby sits at the crossroads of south-west Leicestershire's busiest commercial corridor — a village where residential streets meet one of the East Midlands' largest employment hubs. Meridian Business Park dominates the local economy with major employers across logistics, manufacturing, and professional services, Enderby Leisure Centre draws residents and visitors for sport and events, Mill Lane connects village homes to the A5460 corridor, and Foxhunter Roundabout is the junction most commuters know by heart when heading toward Leicester or the motorway network. Aylestone Kings has served this area since 1995, and our Enderby passengers are overwhelmingly corporate commuters and business park employees who need reliable, fixed-price transport at hours that buses and trains do not always cover.",
      "Meridian Business Park runs are among our most frequent bookings. Early-morning shift starts, late-evening finishes, and client meetings in Leicester city centre all generate steady demand from staff who want a door-to-door service without hunting for parking at the business park or waiting on infrequent public transport. We know the main Meridian entrances, staff car parks, and collection points along the A5460, so your driver can meet you at the right gate rather than circling the estate. Corporate accounts are available for businesses with regular travel requirements — invoicing, reference fields, and standing weekday bookings keep finance teams and office managers in control.",
      "Corporate commuters value fixed pricing above almost everything else. A standing 7am pickup from Mill Lane to Leicester offices, or a regular evening return after a late shift, should cost the same every week — not surge on a rainy Tuesday because every app in Leicestershire is busy. We quote agreed fares before the car arrives, and recurring commuters can set up standing bookings so dispatch already knows your route, vehicle preference, and pickup point. Every driver is licensed by Leicester City Council and DBS checked as standard.",
      "Enderby's position close to junction 21 of the M1 makes it one of the quickest Leicester-area starting points for airport travel. East Midlands Airport is typically around ten minutes on a clear run — ideal for early-morning departures when you need certainty rather than a meter ticking in traffic. Birmingham Airport is around 45 minutes via the M69 and M42, and we provide fixed-fare transfers to all major UK airports with flight monitoring available on request. Business travellers heading to client sites, conferences, or international flights benefit from the same upfront quoting whether the journey is local or cross-country.",
      "Typical journey times from Enderby: Leicester city centre around 15 minutes in normal traffic via the A5460 and Narborough Road corridor, East Midlands Airport roughly 10 minutes via the M1, and Birmingham Airport around 45 minutes on a clear run. Example fares include Enderby to Leicester city centre from £8 and Enderby to East Midlands Airport from £22 — your exact quote is confirmed at booking based on pickup point, vehicle size, and time of travel.",
      "Core services from Enderby include 24/7 availability with no night surcharge, fixed prices confirmed before you travel, DBS-checked licensed drivers, airport transfers to all major UK airports, corporate accounts for Meridian Business Park employers, and regular Meridian Business Park runs for shift workers and office staff. Enderby sits close to Narborough, Blaby, and the M1/M69 motorway junctions, and we cover the whole south-west Leicestershire corridor without boundary surcharges. For detailed airport route guidance — terminal drop-offs, flight-timing advice, and fixed-fare booking — see our airport transfers service. Whether you are a shift worker starting at 5am, a manager heading to a city-centre meeting, or a team organising corporate travel accounts, Aylestone Kings gives Enderby a taxi service built on fixed fares, licensed drivers, and genuine round-the-clock availability.",
    ],
    faqs: [
      {
        question: "Do you offer corporate taxi accounts for Meridian Business Park?",
        answer:
          "Yes. We provide corporate taxi accounts for businesses at Meridian Business Park and across Enderby, including invoicing, reference fields on bookings, and standing weekday pickups for staff. Contact us on 0116 233 8888 or visit our corporate taxi account page to set up an account.",
      },
      {
        question: "How much is a taxi from Enderby to East Midlands Airport?",
        answer:
          "A taxi from Enderby to East Midlands Airport (EMA) typically starts from £22 depending on your exact pickup point and vehicle type. Journey time is around 10 minutes in normal traffic — one of the shortest airport runs from the Leicester area. You will receive a fixed quote before you confirm, with flight monitoring available on request.",
      },
      {
        question: "Can I book a regular taxi for commuting from Enderby?",
        answer:
          "Yes. Many Enderby and Meridian Business Park commuters set up regular standing bookings for weekday travel to Leicester city centre, stations, and other workplaces. Call 0116 233 8888 to arrange a recurring pickup with consistent times and, where possible, the same DBS-checked driver.",
      },
    ],
  },
  evington: {
    bodyParagraphs: [
      "Evington is a quiet, established suburb on Leicester's eastern edge — a neighbourhood where village character meets practical city access. Evington Village sits at the historic heart of the ward, Evington Park provides green space for families and dog walkers, Evington Road runs north connecting the area to the wider city, and Leicester General Hospital lies just minutes away in nearby Evington parish. Aylestone Kings has served Evington since 1995, and our bookings here reflect the area's residents: families needing school runs and shopping trips, elderly passengers who value patient, assisted travel, and NHS workers travelling to and from Leicester General on every shift pattern.",
      "Families in Evington rely on taxis for the journeys that buses and walking cannot always cover comfortably — the school run on a rainy morning, a Saturday outing, or a trip to visit relatives across Leicester. We arrange standing school-run bookings with consistent pickup times and, where possible, the same DBS-checked driver each day so parents and children know who to expect. All drivers are licensed by Leicester City Council, and vehicles are clean and comfortable for family travel.",
      "Elderly residents in Evington are a significant part of our daily work. Many passengers need a little extra time getting in and out of the vehicle, help with shopping bags, or a driver who will wait at the door rather than driving off the moment you step outside. We offer assisted taxi rides with patient, DBS-checked drivers who are used to supporting older passengers on hospital visits, GP appointments, and social outings. Mention any mobility or assistance needs when you book and we will note them on your job.",
      "NHS workers at Leicester General Hospital book us for shift changes at all hours — early-morning starts, late finishes, and rotating night patterns that do not align with bus timetables. A typical run from Evington to Leicester General Hospital takes around five minutes, and we know the main entrances, outpatient clinics, and staff collection points. The same drivers who cover hospital staff also serve patients and visitors attending appointments, so you are travelling with people who understand the layout and timing pressures of a busy NHS site.",
      "Typical journey times from Evington: Leicester city centre around 10–12 minutes in normal traffic via Evington Road or the A47, Leicester General Hospital around five minutes, East Midlands Airport roughly 25 minutes, and Birmingham Airport around 50 minutes on a clear run. Example fares include Evington to Leicester city centre from £6 and Evington to East Midlands Airport from £28 — your exact quote is confirmed at booking based on pickup point, vehicle size, and time of travel.",
      "Evington sits close to Oadby, Highfields, and Spinney Hills, and we cover the whole east Leicester area without boundary surcharges. Core services include 24/7 local taxis, hospital runs to Leicester General and other medical sites, elderly assistance, school-run standing bookings, and airport transfers to all major UK airports. For detailed airport route guidance — terminal drop-offs, flight-timing advice, and fixed-fare booking — see our airport transfers service. Whether you are an elderly resident heading to a GP appointment, an NHS worker finishing a night shift, or a family on the school run, Aylestone Kings gives Evington a taxi service built on fixed fares, licensed drivers, and genuine round-the-clock availability.",
    ],
    faqs: [
      {
        question: "Do you offer assisted taxi rides for elderly passengers in Evington?",
        answer:
          "Yes. Our drivers are patient and experienced with elderly passengers, including help with bags, extra time boarding, and door-to-door assistance. Mention any mobility needs when you book and we will note them on your job. All drivers are DBS checked and licensed by Leicester City Council.",
      },
      {
        question: "Can I book a taxi from Evington to Leicester General Hospital?",
        answer:
          "Yes. We provide hospital runs from Evington to Leicester General Hospital 24/7 for appointments, visiting, staff shift changes, and discharge pickups. Journey time is around five minutes. Mention the entrance or department when you book.",
      },
      {
        question: "How much is a taxi from Evington to Leicester city centre?",
        answer:
          "A taxi from Evington to Leicester city centre typically starts from £6 depending on your exact pickup and drop-off points. Journey time is around 10–12 minutes in normal traffic via Evington Road. You will receive a fixed quote before you confirm.",
      },
    ],
  },
  glenfield: {
    bodyParagraphs: [
      "Glenfield is a residential village on Leicester's western edge — a neighbourhood where Glenfield Village preserves a quiet suburban character while Glenfield Hospital, one of the UK's leading specialist NHS centres, draws patients, visitors, and staff from across the Midlands every day. Dominion Road and Groby Road form the main arteries through the area, connecting local streets to the A50 corridor and onward routes into the city. Aylestone Kings has served Glenfield since 1995, and our bookings here reflect what the village actually needs: dependable hospital transport at all hours, fixed-price airport runs for families leaving early, and everyday local taxis for residents along Groby Road and the village lanes.",
      "NHS workers make up a substantial share of our Glenfield bookings. Glenfield Hospital operates around the clock as a major cardiac centre and specialist unit, and staff on early starts, late finishes, and rotating night shifts need a taxi service that does not stop answering after midnight. Patients travelling to outpatient appointments, families visiting relatives on the wards, and visitors unsure of parking all book us for direct, stress-free journeys. Our drivers are DBS checked, licensed by Leicester City Council, and experienced with hospital pickups — they know the main entrances, outpatient clinics, and staff collection points so you are not left searching for the right drop-off on arrival.",
      "Hospital journeys often carry extra pressure — an early appointment slot, a discharge after a long stay, or a family member travelling with you who needs a little more time boarding. We build that into how we handle Glenfield Hospital runs. Mention the department or entrance when you book and we will note it on the job. A typical taxi from anywhere in Glenfield to Glenfield Hospital takes around five minutes, making us a practical choice for residents on Dominion Road or along Groby Road who want a reliable door-to-hospital service rather than relying on infrequent bus connections.",
      "Beyond hospital runs, Glenfield sits in one of Leicester's best-connected positions for airport travel. The village is close to junction 21A of the M1, which makes East Midlands Airport one of the quickest airport runs from west Leicester. Typical journey times from Glenfield are: Leicester city centre around 12–15 minutes via the A50 or B5380, East Midlands Airport roughly 25 minutes, and Birmingham Airport around 50 minutes on a clear run. Example fares include Glenfield to Leicester city centre from £7 and Glenfield to East Midlands Airport from £28 — your exact quote is confirmed at booking based on pickup point, vehicle size, and time of travel.",
      "Core services from Glenfield include 24/7 availability with no night surcharge, fixed prices confirmed before the car arrives, DBS-checked licensed drivers, hospital runs to Glenfield Hospital and other medical sites, early morning rides for flight departures, and airport transfers to all major UK airports. Whether you need a 4am pickup for an EMA flight, a lunchtime run into Leicester city centre, or a standing booking for recurring shift work at the hospital, the process is the same — quote upfront, arrive on time, travel comfortably.",
      "Glenfield borders Beaumont Leys to the east and sits close to Kirby Muxloe, Ratby, and Braunstone, and we cover the whole west Leicester area without boundary surcharges. For detailed airport route guidance — terminal drop-offs, flight-timing advice, and fixed-fare booking — see our airport transfers service. Neighbouring Beaumont Leys residents often use the same hospital and airport routes, and we serve both areas with the same fixed-fare standard. Whether you are an NHS worker finishing a night shift, a patient heading to a cardiac appointment, or a family catching an early flight, Aylestone Kings gives Glenfield a taxi service built on fixed fares, licensed drivers, and genuine round-the-clock availability.",
    ],
    faqs: [
      {
        question: "Do you cover taxi rides to Glenfield Hospital?",
        answer:
          "Yes. We provide taxi rides to and from Glenfield Hospital 24/7 for patients, visitors, NHS staff, and discharge pickups. Our drivers know the main entrances, outpatient clinics, and staff collection points. Journey time from anywhere in Glenfield is around five minutes. Mention the department or entrance when you book.",
      },
      {
        question: "Can I book an early morning taxi from Glenfield for a flight?",
        answer:
          "Yes. We regularly run early morning taxis from Glenfield for East Midlands Airport and Birmingham Airport departures — including 3am, 4am, and 5am pickups. Pre-book the night before and we will confirm your driver and fixed fare. Glenfield to EMA is around 25 minutes and fares start from £28.",
      },
      {
        question: "How much is a taxi from Glenfield to Leicester city centre?",
        answer:
          "A taxi from Glenfield to Leicester city centre typically starts from £7 depending on your exact pickup and drop-off points. Journey time is around 12–15 minutes in normal traffic via the A50 or B5380. You will receive a fixed quote before you confirm.",
      },
    ],
  },
  loughborough: {
    bodyParagraphs: [
      "Loughborough is one of the East Midlands' most active towns — a Charnwood Borough centre where Loughborough University draws students from around the world, Loughborough Town Centre provides everyday shopping and dining, and Loughborough Train Station connects commuters to Leicester, Nottingham, and London. The A6 and M1 corridor run through the area, making Loughborough a natural hub for people who need reliable transport beyond what buses and trains alone can offer. Aylestone Kings has served Loughborough since 1995, and our bookings here reflect three main groups: university students heading to campus, the airport, or nights out; commuters travelling to Leicester or Nottingham for work; and families needing school runs, station connections, and weekend trips across Leicestershire.",
      "University students make up a large share of our Loughborough work. Term starts, reading weeks, and end-of-term travel generate steady demand for airport runs to East Midlands Airport — one of the shortest airport journeys from anywhere in the region — as well as longer transfers to Birmingham, Heathrow, and other UK hubs. We also cover late-night pickups from the town centre, campus-area collections, and group minibus bookings when housemates share the cost of a fixed-fare airport transfer. All drivers are DBS checked and licensed, and we confirm the price before the car arrives so there are no meter surprises on the way to your flight.",
      "Commuters rely on us for the journeys that need to run to a schedule. Loughborough Train Station is a busy interchange, and many passengers book a taxi to meet a specific train departure or collect them on arrival when public transport does not align with their shift. The A6 link to Leicester city centre is one of our most frequent routes, and we also run regularly to Nottingham for work, appointments, and evenings out. Standing weekday bookings are available for passengers who want the same pickup time each morning without rebooking every day.",
      "Families in Loughborough use taxis for the practical trips that matter — the school run on a wet morning, a Saturday outing from the town centre, or a lift to relatives across Charnwood Borough and beyond. We arrange standing school-run bookings with consistent pickup times and, where possible, the same DBS-checked driver each day. Long-distance journeys are also common from Loughborough: whether you are visiting family in another county, heading to a hospital appointment outside the area, or travelling to an event, we quote fixed fares upfront so the cost is clear before you confirm.",
      "Typical journey times from Loughborough reflect the town's strong road position: Leicester city centre around 20–25 minutes via the A6, East Midlands Airport roughly 15 minutes, Birmingham Airport around 60 minutes on a clear run, and Nottingham around 30 minutes. Example fares include Loughborough to Leicester city centre from £18 and Loughborough to East Midlands Airport from £20 — your exact quote is confirmed at booking based on pickup point, vehicle size, and time of travel.",
      "Core services from Loughborough include 24/7 availability with no night surcharge, fixed prices confirmed before the car arrives, DBS-checked licensed drivers, airport transfers to all major UK airports, university student runs, train station pickups at Loughborough Train Station, and long-distance journeys across the Midlands and beyond. Loughborough sits close to Syston, Shepshed, and Coalville, and we cover the whole Charnwood area without boundary surcharges. For detailed airport route guidance — terminal drop-offs, flight-timing advice, and fixed-fare booking — see our airport transfers service. Whether you are a student catching an early EMA flight, a commuter heading to Leicester for work, or a family planning a long-distance trip, Aylestone Kings gives Loughborough a taxi service built on fixed fares, licensed drivers, and genuine round-the-clock availability.",
    ],
    faqs: [
      {
        question: "Do you offer taxis from Loughborough to East Midlands Airport?",
        answer:
          "Yes. We provide fixed-price taxis from Loughborough to East Midlands Airport (EMA) 24/7. Journey time is around 15 minutes — one of the shortest airport runs in the region. Fares start from £20 and your price is confirmed before you travel. Pre-book for early-morning flights for the best availability.",
      },
      {
        question: "Can I get a taxi from Loughborough to Leicester city centre?",
        answer:
          "Yes. We run taxis from Loughborough to Leicester city centre throughout the day and night. Journey time is around 20–25 minutes via the A6 in normal traffic. Fares start from £18 depending on your exact pickup and drop-off points. You will receive a fixed quote before you confirm.",
      },
      {
        question: "Do you pick up from Loughborough train station?",
        answer:
          "Yes. We provide pickups and drop-offs at Loughborough Train Station for onward connections to Leicester, Nottingham, and London services. Pre-book with your train arrival time and we will meet you at the station, or call when you arrive and we will dispatch the nearest available driver.",
      },
    ],
  },
  "melton-mowbray": {
    bodyParagraphs: [
      "Melton Mowbray is famous for pork pies, Stilton links, and its long-running market-town character, but day-to-day travel here is more about practical connections than tourism. Residents move between villages, the town centre, schools, and rail services, often on tight timing windows. That creates demand for a taxi company that understands both central Melton roads and the outlying lanes where sat-nav-only routing can lose time. Aylestone Kings is regularly booked for school-day routines, evening hospitality pickups, and early starts when public transport options are limited.",
      "A typical taxi from Melton Mowbray to Leicester city centre takes around 40 minutes via the A607, with morning traffic sometimes pushing this closer to 45 minutes. For airport travel, East Midlands Airport is usually the nearest major option, at roughly 38 to 45 minutes depending on pickup point and M1 conditions. Most Melton to EMA fares land around GBP 58 to GBP 70 for a standard car, with the final figure confirmed at booking so customers are not guessing on the day.",
      "Two of the most requested landmarks are Melton Country Park and Melton Carnegie Museum, especially during weekend family plans and local events. We also complete frequent station runs to Melton Mowbray railway station for onward travel to Leicester, Nottingham, and London connections. During busier periods near Sherrard Street and the market area, drivers can arrange a clear side-road collection point to speed up boarding and avoid delays caused by short-stay frontage traffic.",
      "Business and contractor travel is another strong pattern in Melton Mowbray. Many clients need recurring weekday journeys to Leicester offices, hospitals, and logistics sites, and they prefer a reliable process over constant re-booking. We support this with pre-scheduled pickups, precise driver notes, and consistent communication if traffic patterns change. Families also use our service for healthcare appointments, shopping runs, and evening returns from local venues where dependable timing matters more than finding the absolute shortest route.",
      "Aylestone Kings serves Melton Mowbray well because we combine local route awareness with city-scale dispatch coverage. Our team can handle both short-notice local bookings and planned longer runs without changing service quality. Customers regularly mention the value of clear confirmations, polite licensed drivers, and straightforward pricing language rather than vague estimates. That is especially important for airport and rail journeys where missed timing has a real cost.",
      "If your journey includes a terminal transfer, visit /airport-transfers-leicester for route-by-route airport guidance before you travel. You can also review expected fare bands on /pricing to plan with confidence before confirming the booking. That transparent approach keeps Melton Mowbray travel practical, predictable, and easier to manage for both residents and visitors.",
    ],
    faqs: [
      {
        question: "How long does a taxi from Melton Mowbray to Leicester City Centre take?",
        answer: "Most journeys are around 35 to 45 minutes via the A607, depending on time of day and city-centre traffic levels.",
      },
      {
        question: "Do you provide early-morning airport taxis from Melton Mowbray?",
        answer: "Yes, we pre-book early collections for EMA and BHX with confirmed pickup times and route planning in advance.",
      },
      {
        question: "Can I book a station pickup at Melton Mowbray railway station?",
        answer: "Yes, station pickups are available and we can schedule around your train arrival for a smoother connection.",
      },
    ],
  },
  "market-harborough": {
    bodyParagraphs: [
      "Market Harborough is known for its independent town centre, strong commuter rail links, and nearby attractions like Foxton Locks, so taxi demand here is highly mixed. One hour you may need a station connection for a business train, and the next you need a family pickup from a leisure destination. That variety is exactly why local route understanding matters. Aylestone Kings covers central streets, housing estates, and surrounding villages with practical dispatch planning built around real journey patterns.",
      "Most journeys from Market Harborough to Leicester city centre are around 30 minutes via the A6, although peak inbound traffic can push this to 35 minutes. For airport travel, East Midlands Airport is typically the nearest major terminal from Market Harborough at around 50 to 60 minutes using A6 and M1 links. A standard fare is usually in the GBP 72 to GBP 88 range depending on pickup location and time slot, with pricing confirmed before travel.",
      "We regularly serve Market Harborough railway station and The Square, both of which have frequent pickup activity throughout the week. Foxton Locks is another common booking destination, especially in spring and summer when visitor traffic rises and parking pressure increases. For busy periods in the town centre, we can agree exact meeting points near side roads so collections are smooth and customers avoid waiting on congested frontages.",
      "Families in Market Harborough often rely on taxis for school logistics, healthcare appointments, and evening returns when bus timetables are less convenient. Professional users typically want a dependable repeat service for rail and office travel, so we support recurring bookings with consistent booking notes and reliable timing. Instead of treating every request as a one-off, we build journeys around known routines and communicate clearly if traffic conditions require route adjustments.",
      "Aylestone Kings is a strong fit for Market Harborough because we already run high-frequency journeys between Harborough, Leicester, and major transport hubs. Our team is used to blending station timing precision with flexible local pickups, which is crucial in an area that combines commuter traffic and village demand. Customers benefit from licensed drivers, responsive booking support, and service standards built around punctuality rather than guesswork.",
      "For detailed flight options, review /airport-transfers-leicester before you book. To check expected costs in advance, use /pricing so your plan is clear before the journey day. This helps Market Harborough passengers make informed decisions and avoid last-minute uncertainty on both timing and fare.",
    ],
    faqs: [
      {
        question: "Do you offer station transfers from Market Harborough?",
        answer: "Yes, we provide taxi pickups and drop-offs to Market Harborough railway station with pre-booked timing.",
      },
      {
        question: "What is the usual route to Leicester from Market Harborough?",
        answer: "Most Leicester trips follow the A6 and usually take around 25 to 35 minutes depending on traffic.",
      },
      {
        question: "Can I pre-book a return journey from Foxton Locks?",
        answer: "Yes, return bookings can be scheduled in advance so your driver arrives at an agreed meeting point.",
      },
      {
        question: "What is the best taxi number for Market Harborough?",
        answer:
          "For reliable bookings across Market Harborough, call Aylestone Kings on 0116 233 8888. Our line is open 24/7 for local trips, station pickups, and airport transfers, with fixed fares confirmed before you travel.",
      },
      {
        question: "Are there 24 hour taxi firms in Market Harborough?",
        answer:
          "Yes. Aylestone Kings operates as a 24-hour taxi firm serving Market Harborough and surrounding villages. You can call 0116 233 8888 at any time or book online for immediate or pre-scheduled journeys.",
      },
    ],
  },
  coalville: {
    bodyParagraphs: [
      "Coalville sits at the centre of North West Leicestershire commuting, with strong links to industrial estates, retail zones, and residential neighbourhoods that rely on dependable road travel. People book taxis here for shift changes, school schedules, late returns, and airport departures that cannot slip. Aylestone Kings serves Coalville with this practical reality in mind: clear pickup windows, sensible routing, and service that works as well at 5am as it does during evening demand peaks.",
      "From Coalville to Leicester city centre, a typical taxi journey is around 35 minutes via the A511 and city approach roads, with rush-hour traffic occasionally extending the run. East Midlands Airport is the nearest major airport for most Coalville passengers, usually around 25 minutes depending on the A511 and M1 flow. Typical fares to EMA are approximately GBP 38 to GBP 50 for standard vehicles, and we confirm the expected fare before dispatch.",
      "Frequent local destinations include Snibston Colliery Park and the Clock Tower area, both regular points for shopping and social journeys. We also complete many pickups around Hermitage Leisure Centre and nearby business locations where shift-based timings are critical. When a main-road pickup is busy, drivers can coordinate a safer side-street meeting point so boarding is quicker and the onward route starts without unnecessary waiting.",
      "Coalville customers often need a blend of short local runs and planned long-distance travel. Families use us for school and healthcare schedules, while workers rely on punctual collections for industrial and logistics sites where lateness creates immediate problems. Our booking flow supports one-off requests and recurring rides, so regular users can keep travel predictable without entering the same details every day.",
      "Aylestone Kings performs strongly in Coalville because we already understand the local demand profile: early starts, practical journeys, and airport transfers where accurate timing matters. Our dispatch team gives realistic ETAs, our licensed drivers communicate clearly, and our service standards stay consistent across local and longer routes. That combination is why many Coalville passengers use us repeatedly instead of relying on ad-hoc ride options.",
      "If you want airport route detail before booking, visit /airport-transfers-leicester. For upfront fare planning, check /pricing so your cost expectations are clear in advance. This keeps Coalville travel transparent and dependable from first enquiry to final drop-off.",
    ],
    faqs: [
      {
        question: "How long is a taxi from Coalville to East Midlands Airport?",
        answer: "Most journeys to EMA are around 20 to 30 minutes, depending on traffic and your exact pickup point.",
      },
      {
        question: "Do you cover late-night pickups in Coalville?",
        answer: "Yes, our service is available 24/7 for both local and long-distance journeys, including late evenings.",
      },
      {
        question: "Can I arrange regular work transport from Coalville?",
        answer: "Yes, repeat bookings can be set up for shift patterns and regular weekday travel.",
      },
    ],
  },
  "beaumont-leys": {
    bodyParagraphs: [
      "Beaumont Leys is a busy north Leicester suburb where local journeys happen all day between estates, schools, shopping areas, and healthcare appointments. It is known for Beaumont Shopping Centre and large residential catchments, so taxi demand is frequent and practical rather than occasional. Aylestone Kings provides fast-response coverage in this area with booking processes designed for everyday travel - school runs, errands, family visits, and evening pickups when bus links become less convenient.",
      "A normal journey from Beaumont Leys to Leicester city centre takes around 18 minutes via the A563 and inner-city routes, with longer times during rush-hour inflow. East Midlands Airport is the closest major airport from this area, usually around 35 to 40 minutes via ring-road links and the M1 corridor. Typical fares from Beaumont Leys to EMA are about GBP 46 to GBP 58, and we confirm expected costs before travel so passengers can budget clearly.",
      "Two of the most common pickup landmarks are Beaumont Shopping Centre and Beaumont Park, both generating regular weekday and weekend demand. We also run many journeys to Leicester Royal Infirmary and Leicester Railway Station for onward travel. Where frontage roads are crowded, we provide clear alternative meeting points nearby to keep boarding safe for families, older passengers, and customers travelling with shopping or luggage.",
      "Because Beaumont Leys journeys are often short but time-sensitive, consistency matters more than novelty. We focus on arriving when promised, keeping communication straightforward, and adjusting route choices around known traffic pinch points. Customers can book one-off rides quickly, but we also support repeat schedules for work shifts, school transport, and appointment routines where missing a pickup can disrupt the whole day.",
      "Aylestone Kings serves Beaumont Leys especially well thanks to our city-wide dispatch footprint and experience with high-frequency local requests. Our drivers know the ring-road approach options, understand peak retail patterns, and can switch routes intelligently when congestion builds. That local practicality, combined with licensed professional service, gives Beaumont Leys passengers a dependable taxi option they can use again and again.",
      "Planning a flight? See /airport-transfers-leicester for transfer guidance by airport and route. To check likely costs first, review /pricing before confirming. This simple planning step helps Beaumont Leys customers travel with confidence and avoid last-minute surprises.",
    ],
    faqs: [
      {
        question: "Do you pick up from Beaumont Shopping Centre?",
        answer: "Yes, we provide pickups and drop-offs around Beaumont Shopping Centre and nearby residential streets.",
      },
      {
        question: "How long does Beaumont Leys to Leicester City Centre usually take?",
        answer: "Most trips take about 15 to 25 minutes, depending on ring-road and city-centre traffic.",
      },
      {
        question: "Can I pre-book an airport transfer from Beaumont Leys?",
        answer: "Yes, we recommend pre-booking for EMA and BHX so timing and route preferences are confirmed in advance.",
      },
    ],
  },
  syston: {
    bodyParagraphs: [
      "Syston offers a village-town mix with strong commuting links into Leicester, and local taxi demand reflects that rhythm. Residents often need reliable transport for rail connections, school runs, and shopping trips around a compact but busy road network. Aylestone Kings serves Syston with routes built around actual movement patterns, including quieter residential pickups and timed collections where missing a connection can quickly turn into a long delay.",
      "Most Syston to Leicester city centre journeys take about 25 minutes via the A607, though peak-hour flow can increase that by several minutes. For airport travel, East Midlands Airport is generally the nearest major terminal from Syston at around 38 to 45 minutes depending on traffic through ring-road connectors and M1 links. A typical EMA fare from Syston is roughly GBP 52 to GBP 64 for a standard car, confirmed at booking.",
      "Frequent pickup points include Syston railway station and Central Park, along with local retail stretches where evening return travel is common. We also complete regular journeys to Leicester hospitals and the city stations for onward travel. During busier periods near station approaches or school times, we can suggest an easier collection location nearby so boarding remains quick and safe.",
      "Syston passengers often value repeatability: same pickup process, clear ETA updates, and dependable timing week after week. We support recurring bookings for commuters and families, while keeping one-off bookings straightforward for visitors or occasional users. Our drivers take a practical approach to route planning rather than relying on one fixed path, which helps maintain punctuality when road conditions change unexpectedly.",
      "Aylestone Kings is well suited to Syston because we combine local-area awareness with full Leicester coverage, making it easy to handle both short local runs and longer intercity or airport journeys. Customers benefit from polite licensed drivers, responsive support, and honest timing advice before the car is dispatched. That consistency is what keeps repeat bookings strong in Syston.",
      "If you want airport transfer details before confirming, visit /airport-transfers-leicester. For clear fare guidance in advance, check /pricing so your budget and journey plan are aligned from the start. This keeps Syston travel practical and transparent.",
    ],
    faqs: [
      {
        question: "How long is the taxi journey from Syston to Leicester?",
        answer: "Most Syston to Leicester City Centre trips are around 20 to 30 minutes via the A607.",
      },
      {
        question: "Do you cover airport transfers from Syston at night?",
        answer: "Yes, we offer 24/7 airport transfer bookings from Syston, including early-morning departures.",
      },
      {
        question: "Can I arrange repeat weekday bookings from Syston?",
        answer: "Yes, regular recurring bookings can be set up for commuting, school, or appointment travel.",
      },
    ],
  },
  birstall: {
    bodyParagraphs: [
      "Birstall is one of the strongest commuter suburbs north of Leicester, known for Watermead, shopping access, and convenient routes onto the A6 corridor. Taxi demand here is constant across local family trips, city commuting, and outbound airport travel. Aylestone Kings serves Birstall with practical coverage that prioritises reliable pickup times and clear communication, especially during school traffic and peak shopping periods when short delays can quickly multiply.",
      "A taxi from Birstall to Leicester city centre normally takes about 20 minutes via the A6, with traffic around key junctions occasionally extending this. East Midlands Airport is usually the nearest major airport from Birstall, at around 35 to 40 minutes using A6 and M1 links. Typical fares from Birstall to EMA are approximately GBP 48 to GBP 60, and we confirm pricing before dispatch so there is no confusion at the end of the trip.",
      "Common destination landmarks include Watermead Country Park and Birstall Park and Ride, both of which generate regular daytime and evening bookings. We also handle frequent pickups around local retail parks and onward journeys to Leicester stations and hospital sites. If a pickup point is busy or unclear, we agree a precise meeting location in advance to keep boarding efficient and reduce waiting time.",
      "Many Birstall customers combine quick local rides with occasional long-distance journeys, so flexibility is essential. We handle one-way and return bookings, multi-stop family trips, and scheduled weekly runs for work or education. Rather than a generic one-size process, we tailor route and timing guidance to the purpose of your journey, whether that is a routine commute or a time-critical airport departure.",
      "Aylestone Kings works well in Birstall because our drivers and dispatch team already manage high volumes on north Leicester approaches. We know where delays tend to build, where pickups are easiest, and how to keep service consistent when traffic conditions shift. Passengers benefit from licensed professionals, straightforward booking support, and a service standard focused on reliability over marketing noise.",
      "For airport-specific planning, use /airport-transfers-leicester to compare routes and options. To review fare expectations before booking, visit /pricing. This gives Birstall travellers clearer cost and timing visibility before they travel.",
    ],
    faqs: [
      {
        question: "How quickly can I get from Birstall to Leicester City Centre by taxi?",
        answer: "Most journeys are around 15 to 25 minutes, depending on A6 traffic and final drop-off location.",
      },
      {
        question: "Do you pick up near Watermead Country Park?",
        answer: "Yes, we cover pickups around Watermead and surrounding roads throughout the week.",
      },
      {
        question: "Can I book a fixed-time transfer from Birstall to BHX?",
        answer: "Yes, pre-booked timed transfers are available for Birmingham Airport and other major terminals.",
      },
    ],
  },
  lutterworth: {
    bodyParagraphs: [
      "Lutterworth is known for its logistics activity and strategic motorway access, so local taxi demand is built around precision and reliability. Residents and workers frequently travel on strict schedules, whether for warehouse shifts, meetings, or onward transport links. Aylestone Kings supports Lutterworth with dependable timed pickups and practical route planning, helping passengers avoid avoidable delays on days when a late arrival has immediate knock-on effects.",
      "A standard taxi journey from Lutterworth to Leicester city centre is around 35 minutes via the A426, with peak traffic sometimes extending that to 40 minutes. For airport travel, Birmingham Airport is often the nearest major option from Lutterworth at roughly 35 to 45 minutes via M6 and M42 links. Typical fares to BHX are around GBP 60 to GBP 75 depending on pickup point and time, and we confirm expected pricing in advance.",
      "Two regular local landmarks in bookings are Lutterworth town centre and Stanford Hall, with additional demand around Magna Park-related routes and evening hospitality travel. We also run frequent trips to rail stations and healthcare destinations where passengers prefer direct travel over complex public transport changes. For busy pickup zones, we provide clear meeting instructions so journeys start without confusion.",
      "Lutterworth clients often need a blend of recurring and one-off bookings. We support weekly work transport, same-day returns, and pre-booked airport runs with clear confirmation messages and realistic timing guidance. Families use us for school and appointment logistics, while business users rely on consistent service standards that keep planning simple across repeated journeys.",
      "Aylestone Kings serves Lutterworth well because we understand motorway-sensitive route planning and the importance of accurate ETA communication. Our licensed drivers and dispatch support focus on punctuality first, not generic estimates. That practical approach is why local passengers trust us for both short local travel and longer regional journeys that require stronger planning discipline.",
      "If you are comparing airport transfer options, review /airport-transfers-leicester before you confirm. To check likely fare bands, see /pricing and plan your journey with confidence. This keeps Lutterworth bookings transparent from first enquiry to drop-off.",
    ],
    faqs: [
      {
        question: "What is the typical taxi route from Lutterworth to Leicester?",
        answer: "Most Leicester journeys run via the A426 and usually take around 30 to 40 minutes.",
      },
      {
        question: "Do you provide airport taxis from Lutterworth to BHX?",
        answer: "Yes, we regularly serve Birmingham Airport from Lutterworth with pre-booked timed pickups.",
      },
      {
        question: "Can I schedule weekly work trips from Lutterworth?",
        answer: "Yes, we can arrange repeat bookings for regular weekday travel and shift schedules.",
      },
    ],
  },
  "south-wigston": {
    bodyParagraphs: [
      "South Wigston is a high-movement area with rail users, high-street activity, and dense residential travel all happening within a compact footprint. That means taxi service needs to be responsive and well-coordinated, not generic. Aylestone Kings regularly handles station links, school-time runs, shopping trips, and healthcare journeys here, with reliable timing and practical pickup instructions that reduce waiting around busy corridors like Blaby Road.",
      "A typical South Wigston to Leicester city centre taxi takes around 20 minutes via A5199 and city approaches, though peak periods can increase this slightly. East Midlands Airport is usually the nearest airport from South Wigston at around 33 to 40 minutes via A563 and M1 links. Typical fares to EMA are about GBP 45 to GBP 56, with confirmation given in advance so passengers can plan costs without uncertainty.",
      "Frequent local pickup points include South Wigston railway station and Blaby Road shopping areas, plus onward journeys to Leicester Royal Infirmary and city-centre workplaces. We also serve regular evening returns from retail and hospitality destinations when public transport options are less convenient. If station or frontage traffic is heavy, we provide a nearby alternative meeting point to keep pickups smooth and safe.",
      "South Wigston customers often combine quick local rides with occasional longer bookings, so flexibility is a major priority. We support one-off travel, return bookings, and recurring journeys for commuters and families. Our process stays simple: clear confirmation, realistic ETA updates, and drivers who understand local road behaviour rather than relying on a single fixed route through congestion.",
      "Aylestone Kings serves South Wigston particularly well because we are already active across the wider south Leicester travel network. That local coverage helps us reach pickups quickly and keep journey planning realistic across different times of day. Passengers benefit from licensed drivers, consistent standards, and service that is built around reliability rather than last-minute improvisation.",
      "For airport route details and transfer options, visit /airport-transfers-leicester. To check expected journey costs before booking, use /pricing. This gives South Wigston passengers better visibility on both timing and fares before they travel.",
    ],
    faqs: [
      {
        question: "Do you provide pickups at South Wigston railway station?",
        answer: "Yes, station pickups and drop-offs are available with pre-booked or scheduled collections.",
      },
      {
        question: "How long is South Wigston to Leicester City Centre by taxi?",
        answer: "Most journeys take around 15 to 25 minutes depending on traffic and exact destination.",
      },
      {
        question: "Can I pre-book an early airport transfer from South Wigston?",
        answer: "Yes, we offer 24/7 pre-booked airport transfers including early-morning departures.",
      },
    ],
  },
  hinckley: {
    bodyParagraphs: [
      "Hinckley is a major Leicestershire town with a strong commuter base, busy local retail, and regular cross-county travel toward Leicester, Nuneaton, and Birmingham links. Taxi demand here ranges from short high-street trips to time-critical airport transfers, so service quality depends on route judgment and consistent communication. Aylestone Kings serves Hinckley with practical booking support and dependable pickup timing suited to both local routines and longer-distance travel days.",
      "Most Hinckley to Leicester city centre journeys are around 35 minutes via A47 and connecting city routes. For airports, Birmingham Airport is usually the nearest major terminal from Hinckley, often around 30 to 40 minutes via A5 and M42 links depending on traffic flow. Typical fares to BHX generally sit between GBP 58 and GBP 72 for a standard vehicle, with expected cost confirmed in advance at the time of booking.",
      "Regular landmarks in demand include Hinckley town centre and Hollycroft Park, and we also complete frequent runs to The Crescent retail and leisure area. Many customers request station or hospital connections where missed timing can disrupt onward plans. To reduce uncertainty, we provide exact pickup instructions and can suggest alternative collection points when frontage traffic or temporary restrictions make direct access slower.",
      "Travel patterns in Hinckley are diverse: weekday work runs, school logistics, weekend social plans, and late-evening returns. We support this with one-off rides and recurring schedules, so repeat customers do not need to recreate the same journey details every time. Our approach is simple and consistent - punctual arrivals, straightforward updates, and route decisions based on current road conditions rather than assumptions.",
      "Aylestone Kings is a strong option for Hinckley because we already operate across the wider Leicester corridor and understand how motorway incidents or city traffic changes can affect planned ETAs. That wider network awareness helps us provide realistic timing advice before dispatch, not after a delay has happened. Customers get licensed drivers, reliable service standards, and booking support focused on practical outcomes.",
      "If you are planning a terminal journey, compare options at /airport-transfers-leicester. Before confirming, use /pricing to review likely fare ranges and budget confidently. This keeps Hinckley travel planning clear on both cost and timing.",
    ],
    faqs: [
      {
        question: "Is Birmingham Airport quicker than East Midlands from Hinckley?",
        answer: "Often BHX is the quicker option from Hinckley, but traffic can shift this; we advise at booking time.",
      },
      {
        question: "How long does Hinckley to Leicester City Centre usually take?",
        answer: "Most journeys are around 30 to 40 minutes depending on route conditions and destination point.",
      },
      {
        question: "Can I book a same-day return trip from Hinckley?",
        answer: "Yes, same-day return journeys can be scheduled in advance for shopping, meetings, or appointments.",
      },
    ],
  },
  wigston: {
    bodyParagraphs: [
      "Wigston is one of south Leicester's busiest suburban centres, known for everyday high-street activity, residential travel, and regular commuting into the city. Taxi demand here is constant and highly practical - school runs, appointments, station links, and evening returns. Aylestone Kings serves Wigston with reliable local coverage built around real traffic patterns and clear pickup coordination, helping passengers avoid unnecessary stress on journeys that are often time-sensitive.",
      "A normal taxi from Wigston to Leicester city centre is around 20 minutes via A5199 or A6 approaches, with peak-time congestion occasionally increasing journey time. East Midlands Airport is generally the nearest major airport for Wigston passengers, typically around 32 to 40 minutes via A563 and M1 links. Standard fares to EMA are usually in the GBP 45 to GBP 57 range, and we confirm expected pricing before travel.",
      "Frequent local destinations include Wigston town centre and Wigston Pool and Fitness Centre, with additional demand around Leicester Road shopping areas and nearby station connections. We also complete many direct trips to Leicester Royal Infirmary and university zones for customers who prefer one reliable vehicle over multiple bus changes. If traffic is heavy at the requested pickup point, we provide an alternative location close by.",
      "Wigston residents often need both flexible short-notice rides and planned longer bookings. We support one-way and return journeys, recurring weekday transport, and airport runs that need precise departure timing. Our focus stays on practical service fundamentals: punctual arrival, easy communication, and route choices adapted to live road conditions rather than fixed assumptions that can fail during busy periods.",
      "Aylestone Kings is especially well positioned for Wigston because our operating base and south Leicester coverage allow quick response across this corridor. Drivers know the local approach roads, common bottlenecks, and the best alternatives at different times of day. This combination of local insight and professional standards gives Wigston customers a service they can trust repeatedly.",
      "For airport route breakdowns and transfer options, visit /airport-transfers-leicester before you book. To see likely costs in advance, check /pricing and plan with full fare visibility. That keeps Wigston journeys clear, predictable, and easier to organise.",
    ],
    faqs: [
      {
        question: "Do you cover all areas of Wigston for local pickups?",
        answer: "Yes, we provide local coverage across Wigston for shopping, appointments, stations, and airport journeys.",
      },
      {
        question: "How long is a taxi from Wigston to Leicester City Centre?",
        answer: "Most city-centre trips are around 15 to 25 minutes depending on route and traffic conditions.",
      },
      {
        question: "Can I pre-book a family airport transfer from Wigston?",
        answer: "Yes, family airport transfers can be pre-booked with timings and pickup notes confirmed in advance.",
      },
    ],
  },
  "wigston-fields": {
    bodyParagraphs: [
      "Wigston Fields is a residential area where most taxi journeys are about daily practicality - schools, shopping, healthcare, and reliable city links. It is not a place for occasional travel only; many residents need repeat transport that works around routine commitments. Aylestone Kings serves Wigston Fields with consistent local coverage and clear booking communication, making short regular trips as dependable as longer airport and out-of-town journeys.",
      "A typical ride from Wigston Fields to Leicester city centre takes around 20 minutes via A5199 routes. For airport transfers, East Midlands Airport is usually the nearest major terminal, commonly around 33 to 40 minutes through A563 and M1 connections. Standard fares to EMA are generally between GBP 46 and GBP 58, and we provide an upfront fare expectation during booking so there are no surprise costs.",
      "Popular local landmarks in this area include Wigston Fields Recreation Ground and nearby South Wigston station approaches, with frequent onward journeys to Fosse Park and Leicester hospitals. We also cover regular pickups from local retail stretches where short-stay parking can be difficult. When needed, our drivers suggest practical collection points a short walk away so departures are faster and safer.",
      "Travel needs in Wigston Fields are often mixed - a quick daytime local run one day, then an early-morning airport journey the next. We support both with flexible booking options, return-trip scheduling, and recurring weekly journeys for work and family routines. The service model stays simple: arrive on time, communicate clearly, and adapt routes to real-time traffic rather than rigid assumptions.",
      "Aylestone Kings is a good fit for Wigston Fields because we regularly operate across south Leicester neighbourhoods and understand the local flow at school, shopping, and commuter peaks. That local familiarity reduces missed pickups and improves journey reliability. Customers also benefit from licensed drivers and a professional approach that keeps every booking straightforward from start to finish.",
      "To compare airport transfer routes and options, see /airport-transfers-leicester. For current fare guidance before confirming, review /pricing. This helps Wigston Fields residents plan costs and timings confidently before they travel.",
    ],
    faqs: [
      {
        question: "Is Wigston Fields covered for early morning taxi bookings?",
        answer: "Yes, early morning and late-night bookings are available across Wigston Fields seven days a week.",
      },
      {
        question: "What route is usually used from Wigston Fields to Leicester?",
        answer: "Most trips use A5199 connections and typically take around 15 to 25 minutes.",
      },
      {
        question: "Can I check airport fares before booking from Wigston Fields?",
        answer: "Yes, you can review indicative fare guidance on our pricing page before confirming your journey.",
      },
    ],
  },
  "leicester-royal-infirmary": {
    bodyParagraphs: [
      "Leicester Royal Infirmary is one of the region's busiest medical sites, and transport needs here are very different from a standard local taxi booking. Patients, carers, and hospital staff often need precise timing, considerate assistance, and clear pickup instructions around complex access roads. Aylestone Kings provides dedicated support for LRI journeys with a calm, practical approach suited to appointments, ward discharges, and shift-change collections where reliability is essential.",
      "From Leicester Royal Infirmary to Leicester city centre, most journeys are around 8 to 12 minutes depending on exact drop-off. For airport travel, East Midlands Airport is usually the nearest major terminal from LRI, generally around 35 minutes via A50 and M1 links when traffic is normal. Typical fares to EMA are about GBP 42 to GBP 54 for a standard car, and we confirm expected cost before dispatch to reduce stress for families planning onward travel.",
      "The most common landmarks around this page are Leicester Royal Infirmary itself and the nearby Windsor Building and multi-storey parking areas, where meeting-point clarity is critical. We also handle frequent onward trips to Leicester Railway Station and De Montfort Hall. If the main entrance is crowded or restricted at pickup time, we can coordinate collections from quieter side roads to make boarding easier and safer.",
      "Hospital travel often involves uncertainty around appointment overrun, discharge timing, or waiting for prescriptions. Our booking team and drivers are used to this pattern and provide flexible updates without overcomplicating the process. We support one-way and return journeys, plus pre-arranged collections for relatives visiting different wards. The priority is always a smooth pickup experience during what can already be a demanding day.",
      "Aylestone Kings serves LRI especially well because we run high-frequency journeys across central Leicester and understand hospital access realities, including traffic, parking pressure, and short-notice changes. That local operational experience allows us to provide realistic ETAs and dependable communication. Customers receive licensed drivers who are patient, professional, and focused on reducing avoidable stress at each stage of the trip.",
      "For patients or families arranging longer onward journeys, /airport-transfers-leicester provides transfer details by terminal. To review likely fares first, check /pricing before confirming. This creates clearer planning around both time and budget for Leicester Royal Infirmary travel.",
    ],
    faqs: [
      {
        question: "Can you collect from specific LRI entrances or ward-side pickup points?",
        answer: "Yes. We can arrange collection near the Balmoral Building, Windsor Building, or agreed ward-side access points where vehicle pickup is permitted.",
      },
      {
        question: "What if LRI parking is full and my relative needs collecting?",
        answer: "If parking areas such as Windsor or NCP zones are busy, we coordinate a nearby meeting point and keep in touch so collection is still straightforward.",
      },
      {
        question: "How long is a taxi from Leicester Royal Infirmary to East Midlands Airport?",
        answer: "Most journeys are around 35 minutes via A50 and M1 links, with extra time recommended during peak traffic periods.",
      },
    ],
  },
  "fosse-park": {
    bodyParagraphs: [
      "Fosse Shopping Park is one of the East Midlands' busiest retail destinations — a sprawling out-of-town centre on Leicester's western edge where major brands, dining, and leisure draw thousands of visitors every week. Fosse Park Avenue provides the main access route into the site, Braunstone Lane connects the area to surrounding residential neighbourhoods, and Meridian Business Park sits close by with offices and corporate tenants that generate steady weekday taxi demand. Aylestone Kings has served the Fosse Park corridor since 1995, and our bookings here fall into three clear groups: shoppers who want a comfortable ride with their bags, retail workers needing reliable transport at shift start and finish, and business park employees travelling to meetings, the city centre, or the airport.",
      "Shoppers use us for the journeys that make a retail trip easier — a Saturday run to Fosse Shopping Park without hunting for a parking space, a return pickup when you are loaded with bags, or a lift from Oadby, Wigston, or Narborough with a fixed fare confirmed upfront. Our drivers know the retail park layout, the main entrance and exit points along Fosse Park Avenue, and where collections work best when car parks and frontages are busy. We agree a clear meeting point when you book so you are not standing in a congested lane wondering where the car is.",
      "Retail workers make up a significant share of our Fosse Park work. Stores across the shopping park operate extended hours, and staff finishing late shifts — often after 9pm or 10pm when bus frequency drops — need a taxi service that is genuinely available around the clock. We run early morning pickups for staff opening stores before public transport starts, late-night collections after closing, and pre-booked standing bookings for employees who want the same driver at the same time each week. All drivers are DBS checked and licensed, and fixed prices are confirmed before the car arrives.",
      "Corporate runs to Meridian Business Park are another regular booking type. Professionals heading to client meetings, commuting between the business park and Leicester city centre, or connecting to East Midlands Airport for business travel rely on us for punctual, fixed-fare journeys. The A563 ring road and M1 junction 21 give Fosse Park one of Leicester's strongest positions for airport access — East Midlands Airport is one of the quickest runs from anywhere in the city. We also cover multi-stop corporate bookings when a team needs collecting from different addresses before heading to a shared destination.",
      "Typical journey times from Fosse Park reflect the area's favourable west-side position: Leicester city centre around 10–12 minutes via the A563 and inner-city approaches, East Midlands Airport roughly 20 minutes via the M1, and Birmingham Airport around 45 minutes on a clear run. Example fares include Fosse Park to Leicester city centre from £6 and Fosse Park to East Midlands Airport from £25 — your exact quote is confirmed at booking based on pickup point, vehicle size, and time of travel.",
      "Core services from Fosse Park include 24/7 availability with no night surcharge, fixed prices confirmed before the car arrives, DBS-checked licensed drivers, airport transfers to all major UK airports, early morning and late-night rides for retail workers, and corporate runs to Meridian Business Park and other business sites. Fosse Park sits alongside Braunstone and Glen Parva, and we cover the whole west Leicester area without boundary surcharges. For detailed airport route guidance — terminal drop-offs, flight-timing advice, and fixed-fare booking — see our airport transfers service. Whether you are a shopper heading home with bags, a retail worker finishing a late shift, or a business traveller catching an early flight, Aylestone Kings gives Fosse Park a taxi service built on fixed fares, licensed drivers, and genuine round-the-clock availability.",
    ],
    faqs: [
      {
        question: "Can I get a taxi from Fosse Park to Leicester city centre?",
        answer:
          "Yes. We run taxis from Fosse Park to Leicester city centre throughout the day and night. Journey time is around 10–12 minutes in normal traffic via the A563. Fares start from £6 depending on your exact pickup and drop-off points. You will receive a fixed quote before you confirm.",
      },
      {
        question: "Do you cover early morning and late night rides for retail workers at Fosse Park?",
        answer:
          "Yes. We provide early morning and late-night taxi rides for retail workers at Fosse Park — including shift-start pickups before buses run and collections after stores close. Pre-book standing bookings for consistent weekly times, or call 0116 233 8888 when you finish your shift.",
      },
      {
        question: "How much is a taxi from Fosse Park to East Midlands Airport?",
        answer:
          "A taxi from Fosse Park to East Midlands Airport (EMA) typically starts from £25 depending on your exact pickup point and vehicle size. Journey time is around 20 minutes — one of the shortest airport runs from Leicester. Your fixed fare is confirmed before you travel.",
      },
    ],
  },
  hamilton: {
    bodyParagraphs: [
      "Hamilton is one of Leicester's largest residential areas in the north-east of the city, and local taxi demand is driven by everyday needs rather than occasional tourism. Families rely on school-run collections, commuters need dependable routes into the city centre and business parks, and shoppers want straightforward trips home after a heavy day at the shops. Aylestone Kings provides 24/7 Hamilton coverage built around those real patterns — punctual pickups, fixed fares agreed before travel, and drivers who know the estate roads rather than relying on generic sat-nav routes alone.",
      "Typical journey times from Hamilton reflect how well connected the area is to wider Leicestershire: Leicester city centre is around 15 minutes via the A563 and inner-city approaches in normal traffic, East Midlands Airport (EMA) is roughly 25 minutes using ring-road and M1 links, and Birmingham Airport (BHX) is around 50 minutes on a clear run via the M69 and M6 corridor. Example fixed fares start from £8 for city-centre journeys and from £28 to EMA — your exact price is confirmed at booking based on pickup point, vehicle size, and time of travel.",
      "We collect and drop off across Hamilton every day, including Hamilton Shopping Centre, Hamilton Park, Thurmaston Lane, and the Hamilton Park and Ride site where commuters often start or finish a journey. School-time traffic around estate entrances and busy periods near the shopping centre can slow buses, which is why many residents prefer a pre-booked taxi with a confirmed ETA. Whether you need a morning commute, an afternoon trip with children, or an evening return after shopping, we agree a practical pickup point so boarding stays quick and safe.",
      "Among taxi companies in Hamilton, Aylestone Kings is known for transparent fixed pricing — no meter surprises and no surge multipliers on early airport mornings. Our core services include 24/7 availability, fixed prices confirmed at booking, DBS-checked licensed drivers, airport transfers to all major UK airports, standing school-run contracts, and shopping trips with room for bags. We also handle hospital appointments, station connections, and late-night returns when public transport options are limited.",
      "Hamilton sits close to neighbouring Thurmaston and Syston, and we cover that wider north Leicester corridor without boundary surcharges. Our dispatch team manages high volumes on the A563 and A6 approaches, so ETAs stay realistic when ring-road traffic builds at peak times. Passengers benefit from professional communication, comfortable saloons and MPVs when needed, and a service standard focused on repeat reliability for households that book week after week.",
      "For detailed airport route guidance — terminal drop-offs, flight-timing advice, and fixed-fare booking — visit /airport-transfers-leicester. Neighbouring Syston passengers use the same fleet and pricing standards; if you are comparing north Leicester coverage, see /taxis-in/syston for that area too. To review fare bands before you confirm, check /pricing so your Hamilton journey plan is clear from the first enquiry.",
    ],
    faqs: [
      {
        question: "What taxi companies in Hamilton offer fixed prices?",
        answer:
          "Aylestone Kings offers fixed prices on agreed Hamilton routes — you receive your fare before the car arrives, with no meter running on airport or city-centre journeys. Call 0116 233 8888 or book online for an upfront quote.",
      },
      {
        question: "How much is a taxi from Hamilton to Leicester city centre?",
        answer:
          "A taxi from Hamilton to Leicester city centre starts from £8 and typically takes around 15 minutes in normal traffic. Rush-hour ring-road delays can add a few minutes; your fixed fare is confirmed at booking.",
      },
      {
        question: "Do you offer airport transfers from Hamilton Leicester?",
        answer:
          "Yes — we provide airport transfers from Hamilton Leicester to East Midlands, Birmingham, Heathrow, and all major UK airports, 24/7. Pre-booking is recommended for early-morning flights; see our airport transfers guide for route and terminal details.",
      },
    ],
  },
  "glen-parva": {
    bodyParagraphs: [
      "Glen Parva combines village-edge character with direct links into Leicester's southern corridor, and travel needs here are often practical and repeat-based. Residents frequently book taxis for work, education, healthcare, and family logistics where consistent timing is more important than occasional convenience. Aylestone Kings serves Glen Parva with reliable local coverage and straightforward booking support, including journeys that start early, finish late, or require clear return scheduling.",
      "A typical taxi from Glen Parva to Leicester city centre takes around 20 minutes via the A426 and city approaches. For airport travel, East Midlands Airport is usually the nearest major terminal, commonly around 30 to 35 minutes through A563 and M1 links. Standard fares from Glen Parva to EMA are generally in the GBP 40 to GBP 52 range, and we provide a clear fare expectation before you confirm the booking.",
      "Two landmarks that regularly appear in bookings are Glen Parva Manor and HMP Leicester visitors' routes via the Glen Parva area, alongside frequent trips toward South Leicestershire College and local community facilities. We also complete regular transfers to Fosse Park and Leicester hospitals. If access is restricted at the requested pickup location, drivers can suggest a practical nearby collection point to keep the trip efficient.",
      "Many Glen Parva journeys are repeat patterns, such as weekday appointments, school schedules, or recurring work travel. We support those patterns with pre-booked slots and clear confirmation messages that reduce uncertainty. For one-off requests, the process remains simple and responsive, with realistic ETA guidance and route planning based on live road conditions rather than assumptions.",
      "Aylestone Kings is particularly effective in Glen Parva because we are already active throughout south Leicester and understand the local access roads, traffic rhythms, and common destination patterns. That local knowledge helps maintain punctuality across both short local runs and longer airport trips. Customers benefit from licensed drivers, professional communication, and dependable service standards every day of the week.",
      "If you are planning flight travel, review /airport-transfers-leicester for transfer details first. For transparent fare guidance, check /pricing before finalising your booking. This keeps Glen Parva passengers informed on both time and cost before they travel.",
    ],
    faqs: [
      {
        question: "How long is a taxi from Glen Parva to Leicester City Centre?",
        answer: "Most journeys are around 15 to 25 minutes, usually via the A426 and nearby connecting roads.",
      },
      {
        question: "Do you cover airport transfers from Glen Parva at all hours?",
        answer: "Yes, airport bookings from Glen Parva are available 24/7 including very early departures.",
      },
      {
        question: "Can I arrange regular weekly bookings in Glen Parva?",
        answer: "Yes, recurring bookings are available for work trips, appointments, and school-related travel.",
      },
    ],
  },
}

const areaContent: Record<string, AreaContent> = {
  // 1. Aylestone
  aylestone: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Aylestone is the heart of our operation. Aylestone Kings has been based on Aylestone Road since 1995, which
          means licensed drivers available through Aylestone Taxis know every street, every shortcut, and every regular
          pickup point in the area. From Grace Road to the Aylestone Meadows, from Saffron Lane to the canal walk — we
          cover it all.
        </p>
        <p className="text-gray-700">
          The area sits just two miles south-west of Leicester city centre, making it one of the quickest parts of
          Leicester for us to reach. Most Aylestone pickups happen within 5–10 minutes of calling. Whether you need a
          ride into town, a school run to a local academy, or a lift to the train station, we&apos;re always close by.
        </p>
        <p className="text-gray-700">
          Airport transfers from Aylestone are among our most popular journeys. East Midlands Airport is roughly 25
          minutes away, and our fixed fares mean you know exactly what you&apos;ll pay before you get in the car. We
          also run regular transfers to Birmingham Airport, Heathrow, Gatwick, Luton, Stansted, and Manchester — all
          with flight monitoring included.
        </p>
        <p className="text-gray-700">
          Aylestone is also well known for its proximity to the King Power Stadium, and on matchdays we provide
          drop-offs and pickups for Leicester City fans heading to and from the ground. Pre-booking is strongly
          recommended on matchdays.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888, WhatsApp +447888873795, or book online — we operate 24 hours a day.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How quickly can I get a taxi in Aylestone?",
        answer:
          "Because we're based on Aylestone Road, most pickups in the Aylestone area are within 5–10 minutes. During very busy periods, pre-booking guarantees your car.",
      },
      {
        question: "How much is a taxi from Aylestone to Leicester City Centre?",
        answer:
          "A taxi from Aylestone to Leicester city centre typically costs £5–£9 depending on your exact pickup point and drop-off location. The journey takes around 10 minutes.",
      },
      {
        question: "Do you cover Aylestone Meadows and the canal area?",
        answer:
          "Yes — we cover all parts of Aylestone including roads close to the Meadows, Saffron Lane, and the Aylestone Road corridor.",
      },
    ],
  },
  // 32. Eyres Monsell
  "eyres-monsell": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Eyres Monsell is a residential estate in south Leicester, sitting between Aylestone and Glen Parva. It&apos;s
          a close-knit community and Aylestone Kings — based just a short distance away on Aylestone Road — has been
          the go-to taxi service for Eyres Monsell residents for many years. We&apos;re one of the closest taxi
          companies to the estate and can typically be there within 5–10 minutes.
        </p>
        <p className="text-gray-700">
          We cover all parts of Eyres Monsell including Stonesby Avenue, Deacon Street, and the surrounding residential
          streets. Local journeys to Leicester city centre, Fosse Park, and the nearby Aylestone Leisure Centre are
          common, as are school runs and hospital appointments.
        </p>
        <p className="text-gray-700">
          Airport transfers from Eyres Monsell are quick and competitively priced. East Midlands Airport is
          approximately 20–25 minutes away, and our fixed fares mean no nasty surprises when you arrive at the
          terminal. We cover all major UK airports.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 anytime — Eyres Monsell is one of our most active local areas.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How quickly can you reach Eyres Monsell?",
        answer:
          "Because we're based on Aylestone Road, we can usually reach Eyres Monsell in 5–10 minutes. One of our fastest response areas.",
      },
    ],
  },
  // 33. Glen Parva
  "glen-parva": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Glen Parva is a quiet residential village on the southern edge of Leicester, bordering Wigston and Blaby.
          Popular with families for its green spaces and community feel, Glen Parva is an area Aylestone Kings has
          served for decades, providing reliable taxi service for local journeys and longer trips alike.
        </p>
        <p className="text-gray-700">
          We cover all of Glen Parva including Leicester Road, Gerard Road, and the residential streets around the
          village. The area is well placed for both Leicester city centre (approximately 5 miles north) and the M1 and
          M69 junctions to the south and west — giving excellent access to both the city and the motorway network for
          airport runs.
        </p>
        <p className="text-gray-700">
          East Midlands Airport is approximately 20–25 minutes from Glen Parva via the M1, making it one of the more
          convenient areas of South Leicester for airport transfers. Birmingham Airport is around 35–40 minutes via the
          M69. All fares fixed, all confirmed at booking.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 or book online 24 hours a day.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Glen Parva from Leicester city centre?",
        answer:
          "Glen Parva is approximately 5 miles south of Leicester city centre — usually a 15–20 minute taxi journey via the A426 or Saffron Lane.",
      },
    ],
  },
  // 35. Braunstone Town
  "braunstone-town": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Braunstone Town is a civil parish in Blaby district, just west of the city of Leicester, covering a larger
          area than the Braunstone ward within Leicester itself. Aylestone Kings covers both Braunstone and Braunstone
          Town with full 24/7 taxi service — from Braunstone Lane East and Kingsway to the residential streets
          spreading towards Enderby and Narborough.
        </p>
        <p className="text-gray-700">
          The area has excellent motorway access via junction 21A of the M1 — making it one of the best-positioned
          parts of west Leicestershire for airport transfers. East Midlands Airport is typically 20–25 minutes from
          Braunstone Town, and Birmingham Airport is around 35 minutes via the M69. All fixed fares, all confirmed in
          advance.
        </p>
        <p className="text-gray-700">
          We serve a mix of family households, workers commuting to Leicester&apos;s business parks, and passengers
          connecting to and from East Midlands Airport. Our drivers cover this area every day and can reach most
          addresses quickly.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 or book online — available 24 hours a day, every day.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "What is the difference between Braunstone and Braunstone Town?",
        answer:
          "Braunstone is a suburb within Leicester city. Braunstone Town is a separate civil parish in Blaby district, just outside the city boundary. We cover both areas.",
      },
    ],
  },
  // 36. Groby
  groby: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Groby is a pleasant village in Hinckley and Bosworth district, sitting north-west of Leicester on the edge of
          Charnwood Forest. With its village feel, good schools, and rural setting, Groby attracts families who want
          space without being too far from the city. Aylestone Kings provides professional 24/7 taxi service throughout
          Groby and the surrounding area.
        </p>
        <p className="text-gray-700">
          We cover Groby village centre, Ratby Road, and the residential streets extending towards Ratby and Markfield.
          The village is approximately 5 miles from Leicester city centre, and our drivers make regular runs along the
          A50 and B5380 routes into the city.
        </p>
        <p className="text-gray-700">
          For airport transfers, Groby&apos;s position north of the M1 gives good access to East Midlands Airport
          (approximately 25–30 minutes) and excellent access to the A50 westbound for Derby and beyond. Birmingham
          Airport is around 45 minutes via the M69. All airport fares are fixed at booking.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 or WhatsApp +447888873795 to book anytime.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Groby from Leicester city centre?",
        answer:
          "Groby is approximately 5 miles north-west of Leicester city centre — usually a 15–20 minute taxi journey via the A50 or B5380.",
      },
    ],
  },
  // 37. Wigston Fields
  "wigston-fields": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Wigston Fields is a leafy residential area on the eastern side of Wigston, known for its mature housing stock
          and quiet streets. It borders Oadby to the east and Wigston Magna to the west, and sits in a pleasant part of
          south Leicestershire that&apos;s popular with families and retirees. Aylestone Kings covers Wigston Fields
          with reliable, professional 24/7 taxi service.
        </p>
        <p className="text-gray-700">
          The area is well positioned for journeys into Leicester city centre (approximately 5–6 miles north) and for
          airport transfers via the A563 ring road. East Midlands Airport is typically 25–30 minutes from Wigston
          Fields — a quick, comfortable run for early-morning departures.
        </p>
        <p className="text-gray-700">
          We cover the full range of local journeys from Wigston Fields — trips to Oadby town centre, connections to
          Wigston station in South Wigston, visits to family in the city, and medical appointments. Our drivers know
          the residential roads here well and can navigate to any address without difficulty.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888, WhatsApp, or book online. Available 24 hours a day.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Wigston Fields from Oadby?",
        answer:
          "Wigston Fields borders Oadby — many addresses are just a 2–5 minute drive away. We regularly serve both areas and the streets between them.",
      },
    ],
  },
  // 38. Broughton Astley
  "broughton-astley": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Broughton Astley is one of south Leicestershire&apos;s largest villages — a rapidly growing community with a
          strong local identity, good schools, and excellent road links via the B4114 and A426. Aylestone Kings covers
          Broughton Astley with professional, 24/7 taxi service for all journey types.
        </p>
        <p className="text-gray-700">
          The village sits approximately 9 miles south of Leicester city centre, making a taxi a practical option for
          commuters, families heading to the city for appointments or leisure, and evening outings where driving isn&apos;t
          an option. Our drivers cover the route between Broughton Astley and Leicester regularly and know the best
          roads at every time of day.
        </p>
        <p className="text-gray-700">
          For airport transfers, the M1 junction 20 is nearby — giving good access to East Midlands Airport
          (approximately 30 minutes) and to Birmingham Airport via the M6 and M69. All our airport fares are fixed and
          confirmed at booking, with flight monitoring included for return trips.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 or book online anytime — we&apos;re available 24 hours a day, every day of the year.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Broughton Astley from Leicester?",
        answer:
          "Broughton Astley is approximately 9 miles south of Leicester city centre — typically a 20–30 minute taxi journey depending on route and traffic.",
      },
    ],
  },
  // 39. Cosby
  cosby: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Cosby is a traditional Leicestershire village south of Leicester, sitting between Blaby and Broughton Astley
          along the B4114. It&apos;s a peaceful, well-regarded community and Aylestone Kings covers Cosby and the
          surrounding area with professional 24/7 taxi service for both local journeys and longer trips.
        </p>
        <p className="text-gray-700">
          Village residents often need reliable transport for journeys into Leicester — shopping, appointments, evenings
          out — where driving or finding a bus isn&apos;t always practical. Our drivers cover the routes from Cosby into
          the city regularly and can typically be with you within 15–20 minutes.
        </p>
        <p className="text-gray-700">
          For airport transfers, Cosby&apos;s position south of Leicester gives reasonable access to both East Midlands
          Airport (approximately 25–30 minutes via the M1) and Birmingham Airport (approximately 35 minutes via the
          M69). Fixed fares only — we don&apos;t use meters on pre-booked journeys.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 or WhatsApp +447888873795 anytime.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Cosby from Leicester city centre?",
        answer:
          "Cosby is approximately 7 miles south of Leicester city centre — usually a 20–25 minute taxi journey via the B4114 and A426.",
      },
    ],
  },
  // 40. Countesthorpe
  countesthorpe: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Countesthorpe is a busy village in south Leicestershire, one of the larger villages in the Blaby district and
          growing steadily with new housing. With a secondary school, local shops, and a good community infrastructure,
          it&apos;s a popular place to live — and Aylestone Kings provides reliable 24/7 taxi coverage for
          Countesthorpe residents.
        </p>
        <p className="text-gray-700">
          The village sits approximately 6 miles south of Leicester city centre, connected via the B4114 and A426. Our
          drivers cover this route regularly and can be with you within 15–20 minutes of calling. Local journeys into
          Leicester, Blaby, Narborough, and surrounding areas are all covered.
        </p>
        <p className="text-gray-700">
          For airport transfers, Countesthorpe&apos;s south Leicestershire position gives good access to the M1 for
          East Midlands Airport (approximately 25–30 minutes) and the M69 for Birmingham Airport (approximately 35–40
          minutes). All airport fares are fixed and confirmed at booking — no meters.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 anytime or book online. Available every hour, every day.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Countesthorpe from Leicester?",
        answer:
          "Countesthorpe is approximately 6 miles south of Leicester — around 18–25 minutes by taxi via the A426 or B4114.",
      },
    ],
  },
  // 41. Kibworth
  kibworth: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Kibworth is a charming pair of villages — Kibworth Beauchamp and Kibworth Harcourt — sitting on the A6 about
          10 miles south of Leicester. Known for their period architecture, independent shops, and strong community
          spirit, the Kibworths are popular with families and those who want a more rural setting without sacrificing
          convenient access to Leicester. Aylestone Kings provides professional 24/7 taxi coverage throughout both
          villages and the surrounding area.
        </p>
        <p className="text-gray-700">
          The A6 gives our drivers a direct, well-known route between Kibworth and Leicester city centre — typically a
          25–30 minute journey. We cover everything from daily commutes and shopping trips to special occasion outings
          and medical appointments.
        </p>
        <p className="text-gray-700">
          Airport transfers from Kibworth are straightforward: East Midlands Airport is approximately 30–35 minutes via
          the A6 and M1, and for London airports Kibworth&apos;s southerly position provides excellent access via the
          M1. Fixed prices confirmed at booking, flight monitoring included.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 or book online 24/7. Pre-booking is recommended for early morning airport runs from
          Kibworth.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How long is a taxi from Kibworth to Leicester?",
        answer:
          "A taxi from Kibworth to Leicester city centre takes approximately 25–35 minutes via the A6. Traffic is usually light outside of rush hours.",
      },
    ],
  },
  // 42. Lutterworth
  lutterworth: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Lutterworth is a small market town in south Leicestershire, historically significant as the home of John
          Wycliffe and today a thriving community close to the M1 and M6. It&apos;s a popular base for logistics and
          distribution businesses, and Aylestone Kings covers Lutterworth and the surrounding area with professional
          24/7 taxi service.
        </p>
        <p className="text-gray-700">
          The town sits close to junction 20 of the M1 and the M6 interchange — one of the best motorway positions in
          the East Midlands. This makes Lutterworth an excellent starting point for airport transfers. Birmingham
          Airport is approximately 30–35 minutes via the M6, and East Midlands Airport is around 30 minutes via the M1.
          Both at fixed, pre-agreed fares with flight monitoring included.
        </p>
        <p className="text-gray-700">
          For residents, we provide local journeys into Leicester (approximately 12 miles north), Hinckley, Rugby, and
          surrounding towns. Corporate accounts are available for Lutterworth businesses — the logistics sector in the
          area means we have a number of regular business clients with ongoing travel requirements.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 or book online at any hour.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Lutterworth from Birmingham Airport?",
        answer:
          "Lutterworth is extremely well positioned for Birmingham Airport — approximately 30–35 minutes via the M6. One of the quickest BHX runs from anywhere in Leicestershire.",
      },
      {
        question: "Do you provide corporate taxis in Lutterworth?",
        answer:
          "Yes — we have several corporate clients in the Lutterworth logistics area. Monthly invoicing and a dedicated account manager are available. Contact info@aylestone-taxis.co.uk.",
      },
    ],
  },
  // 43. Whetstone
  whetstone: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Whetstone is a village in Blaby district, south of Leicester, sitting between Blaby and Countesthorpe along
          the B4114. It&apos;s a quiet residential community and Aylestone Kings covers Whetstone with reliable 24/7
          taxi service for all journey types — from quick local rides to long-distance airport transfers.
        </p>
        <p className="text-gray-700">
          The village is approximately 6 miles south of Leicester, and our drivers travel the route between Whetstone
          and the city regularly. Local journeys — shopping, hospital appointments, evening outings — are all common
          bookings, and we can typically be with you within 15–20 minutes of calling.
        </p>
        <p className="text-gray-700">
          For airport transfers from Whetstone, the M1 junction 21 and M69 are both accessible from this part of south
          Leicestershire. East Midlands Airport is approximately 25–30 minutes and Birmingham Airport around 35–40
          minutes via the M69. All fares fixed, flight monitoring included on all airport bookings.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 or book online 24/7.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Whetstone from Leicester city centre?",
        answer:
          "Whetstone is approximately 6 miles south of Leicester city centre — around 18–25 minutes by taxi via the B4114 and A426.",
      },
    ],
  },
  // 44. De Montfort University
  "de-montfort-university": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          De Montfort University sits right in the heart of Leicester, and Aylestone Kings is one of the most popular
          taxi services for DMU students and staff. Whether you&apos;re moving into halls at the start of term,
          catching an early flight home at the end of the semester, heading to a night out in the city, or making a
          late-night journey back to your accommodation, we&apos;re here 24 hours a day.
        </p>
        <p className="text-gray-700">
          We cover DMU&apos;s main campus on The Gateway, the surrounding student streets around Newarke, Oxford
          Street, and Bonners Lane, and the broader Highfields and Clarendon Park areas where many students live. Our
          drivers are well used to the busy student schedule and the one-way systems around campus.
        </p>
        <p className="text-gray-700">
          Airport transfers are one of our most popular student bookings. At the end of term, we handle many East
          Midlands, Birmingham, Heathrow, and Manchester airport runs — and our 6 and 8-seater minibuses are ideal for
          groups of students sharing the cost.
        </p>
        <p className="text-gray-700">
          Book online, call 0116 2338888, or WhatsApp +447888873795 for your DMU taxi.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Do you offer student-friendly taxis for DMU?",
        answer:
          "Yes — we regularly transport DMU students to and from campus, city nights out, and the major airports. Group bookings in our larger vehicles help keep costs down.",
      },
    ],
  },
  // 45. University of Leicester
  "university-of-leicester": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          The University of Leicester campus on University Road is one of Aylestone Kings&apos; busiest pickup
          locations. Students, academic staff, and visitors use us regularly for everything from late-night pickups
          after library sessions to airport transfers at the start and end of term.
        </p>
        <p className="text-gray-700">
          We&apos;re a short ride from the university halls of residence in Oadby — a very popular route, especially on
          evenings and weekends. Our drivers know the campus roads, the student accommodation sites, and the local
          areas where University of Leicester students live well.
        </p>
        <p className="text-gray-700">
          For airport transfers, many UOL students rely on us for East Midlands Airport runs, especially with luggage at
          the end of term when the train isn&apos;t practical. Our minibuses take groups with all their bags
          comfortably. Fixed fares, no surprises.
        </p>
        <p className="text-gray-700">
          Call or WhatsApp anytime for University of Leicester taxis.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Do you provide airport taxis for University of Leicester students?",
        answer:
          "Yes — we regularly take UOL students to East Midlands, Birmingham, Heathrow, Gatwick, Luton and Manchester airports, with fixed fares and enough space for luggage.",
      },
    ],
  },
  // 27. Stoneygate
  stoneygate: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Stoneygate is one of Leicester&apos;s most affluent and attractive suburbs — a Victorian conservation area of
          wide tree-lined avenues, large detached houses, and independent shops and restaurants along Francis Road and
          London Road. Aylestone Kings covers Stoneygate with professional, discreet taxi service 24 hours a day.
        </p>
        <p className="text-gray-700">
          The area is popular with Leicester&apos;s medical community — many consultants and senior staff at Leicester
          Royal Infirmary and other hospitals live in Stoneygate — as well as professionals, families, and those who
          simply appreciate a quality residential area close to the city. Our executive vehicles are particularly
          popular in Stoneygate for business travel and airport runs.
        </p>
        <p className="text-gray-700">
          Airport transfers from Stoneygate are efficient due to the area&apos;s easy access to the A6 and M1. East
          Midlands Airport is approximately 30 minutes, and Birmingham Airport around 55 minutes — all with fixed,
          pre-agreed fares and flight monitoring included.
        </p>
        <p className="text-gray-700">
          For corporate travel, special occasions, or whenever you simply want a higher-spec vehicle and driver, our
          executive taxi service is available on request. Call 0116 2338888 or book online.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Do you offer executive taxis in Stoneygate?",
        answer:
          "Yes — our executive vehicle service is available in Stoneygate for airport runs, business travel, and special occasions. Please request when booking.",
      },
      {
        question: "How far is Stoneygate from Leicester city centre?",
        answer:
          "Stoneygate is about 2 miles south of Leicester city centre — typically a 7–12 minute taxi journey via London Road.",
      },
    ],
  },
  // 28. South Wigston
  "south-wigston": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          South Wigston is a working-class residential community immediately south of Wigston, with its own railway
          station providing regular services into Leicester and onwards to Nuneaton. Aylestone Kings covers South
          Wigston with fast, affordable 24/7 taxi service — including pickups from the railway station at any hour.
        </p>
        <p className="text-gray-700">
          The area sits approximately 5 miles south of Leicester city centre, and our drivers are in and around South
          Wigston regularly. Whether it&apos;s a commute, a trip to the supermarket, a school run, or a late-night
          pickup, we&apos;re typically a few minutes away.
        </p>
        <p className="text-gray-700">
          Airport transfers from South Wigston are popular — the station connections give flexibility, but for early
          morning flights or families with luggage, a direct taxi is far more convenient. East Midlands Airport is
          approximately 20–25 minutes from South Wigston via the A563 and M1.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 anytime, WhatsApp, or book online. We&apos;re available 24/7 with no surcharges for early
          morning or late-night journeys.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Do you pick up from South Wigston railway station?",
        answer:
          "Yes — we regularly collect from South Wigston station. Great for late night arrivals or early-morning departures when other options aren't running.",
      },
      {
        question: "How much is a taxi from South Wigston to Leicester?",
        answer:
          "A taxi from South Wigston to Leicester city centre typically costs £9–£13. Journey time is around 15–20 minutes depending on traffic.",
      },
    ],
  },
  // 29. Humberstone
  humberstone: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Humberstone is an east Leicester suburb sitting between the city and the Hamilton estate, along the A47
          corridor. Aylestone Kings covers Humberstone and the surrounding area — including Humberstone Road,
          Humberstone Gate, and the residential streets around Netherhall — with fast, professional taxi service around
          the clock.
        </p>
        <p className="text-gray-700">
          The area has excellent road connections to the city centre via the A47, making journeys into Leicester quick
          and straightforward. Humberstone&apos;s proximity to the Hamilton estate and Thurmaston also means our
          drivers cover a wide swathe of north-east Leicester from this part of the city.
        </p>
        <p className="text-gray-700">
          For airport transfers, the A47 gives quick access eastbound towards the M1 and East Midlands Airport —
          typically around 30 minutes. We cover all UK airports from Humberstone with fixed fares confirmed at booking.
        </p>
        <p className="text-gray-700">
          Whether it&apos;s a daily commute, a hospital appointment at the Leicester General, or an airport transfer,
          we&apos;re here whenever you need us. Call 0116 2338888 or book online 24/7.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Humberstone from Leicester city centre?",
        answer:
          "Humberstone is approximately 3 miles east of Leicester city centre — usually a 10–15 minute taxi journey via Humberstone Road or the A47.",
      },
    ],
  },
  // 30. Thurnby Lodge
  "thurnby-lodge": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Thurnby Lodge is a residential estate on the eastern edge of Leicester, bordering the villages of Thurnby and
          Scraptoft. It&apos;s a quiet, community-focused area and Aylestone Kings covers Thurnby Lodge and the nearby
          villages with reliable 24/7 taxi service for all journey types.
        </p>
        <p className="text-gray-700">
          The estate has a predominantly residential character, and our service is particularly valued for journeys into
          Leicester city centre (around 4–5 miles), hospital trips to the Leicester General Hospital, and school runs.
          Our drivers know the local streets well and can reach most addresses in the area within 10–15 minutes.
        </p>
        <p className="text-gray-700">
          For airport transfers from Thurnby Lodge, the A47 gives easy access to the M1 northbound for East Midlands
          Airport (approximately 30–35 minutes). All airport fares are fixed, pre-agreed, and include flight monitoring.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 or WhatsApp anytime — we operate 24/7 with no late-night or early-morning surcharges.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Do you cover the Thurnby and Scraptoft villages near Thurnby Lodge?",
        answer:
          "Yes — we cover Thurnby Lodge, Thurnby village, Scraptoft, and the surrounding rural postcodes east of Leicester.",
      },
    ],
  },
  // 31. Westcotes
  westcotes: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Westcotes is an inner-city residential area in west Leicester, just a short distance from the city centre and
          the vibrant Narborough Road — one of the most diverse and foodie-friendly streets in the East Midlands.
          Aylestone Kings covers Westcotes and the Narborough Road corridor with fast, 24/7 taxi service.
        </p>
        <p className="text-gray-700">
          The area is well connected to the city centre, with Narborough Road providing a direct route in and out. Our
          drivers are in this part of Leicester constantly and can usually reach any Westcotes address within minutes.
          Local journeys — to the city centre, DMU, the hospitals, and back — are everyday bookings for us.
        </p>
        <p className="text-gray-700">
          For airport transfers, Westcotes&apos; position west of Leicester gives good access to the M1 and M69 for
          both East Midlands Airport and Birmingham Airport. All fares fixed, all airports covered.
        </p>
        <p className="text-gray-700">
          Late-night pickups on the Narborough Road after a meal out are also a staple of our service here. Call or
          WhatsApp anytime.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Do you cover Narborough Road pickups in Westcotes?",
        answer:
          "Yes — we regularly pick up along Narborough Road in Westcotes, including late-night pickups after restaurants and bars close.",
      },
    ],
  },
  // 23. Coalville
  coalville: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Coalville is a large town in north-west Leicestershire, the main commercial centre for the National Forest
          area. Situated around 13 miles from Leicester city centre, Coalville has strong transport links via the A511
          and A50, and Aylestone Kings provides professional 24/7 taxi service throughout the town and surrounding
          villages.
        </p>
        <p className="text-gray-700">
          We cover Coalville town centre, Hugglescote, Whitwick, Ravenstone, and the expanding residential areas
          around the town. With no direct rail link into Leicester, taxis play an important role for Coalville
          residents — particularly for early-morning and late-night journeys when bus services are limited.
        </p>
        <p className="text-gray-700">
          Airport transfers are a strong part of our Coalville service. East Midlands Airport is approximately 20–25
          minutes from Coalville via the M1 — one of the closest airports for this part of Leicestershire — and we
          offer fixed fares with no meter running. For Birmingham Airport (around 45 minutes via the M42), we&apos;re
          equally competitive.
        </p>
        <p className="text-gray-700">
          Corporate accounts are available for Coalville businesses with regular travel requirements. Call 0116
          2338888 or book online 24 hours a day.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Coalville from East Midlands Airport?",
        answer:
          "Coalville is very well located for East Midlands Airport — approximately 20–25 minutes via the A511 and M1 junction 23. One of the quickest areas for an EMA run.",
      },
      {
        question: "Is there a 24-hour taxi service in Coalville?",
        answer:
          "Yes — Aylestone Kings operates 24/7 in Coalville. Pre-booking is recommended for very early or late-night journeys.",
      },
    ],
  },
  // 24. Melton Mowbray
  "melton-mowbray": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Melton Mowbray is a historic market town in north-east Leicestershire — famous for its pork pies and Stilton
          cheese, its thriving Tuesday market, and its strong rural community. Aylestone Kings covers Melton Mowbray
          and the surrounding villages with professional taxi service 24 hours a day, 365 days a year.
        </p>
        <p className="text-gray-700">
          Melton is approximately 16 miles north-east of Leicester, accessible via the A607, and our drivers make
          regular journeys along this route for commuters, shoppers, and families. For those without a car — or simply
          wanting a comfortable, stress-free journey — we&apos;re a trusted option across the town.
        </p>
        <p className="text-gray-700">
          Airport transfers from Melton Mowbray are one of our most valued services in the area. East Midlands Airport
          is approximately 30–35 minutes away via the A46 and M1, and all fares are fixed at the time of booking — no
          meters, no guesswork. For Heathrow or Gatwick, our larger vehicles and fixed-price long-distance fares make
          us a competitive choice over rail.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888, WhatsApp, or book online. We pre-book and confirm every journey in advance.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How much is a taxi from Melton Mowbray to East Midlands Airport?",
        answer:
          "Fixed-price taxis from Melton Mowbray to East Midlands Airport start from approximately £32–£42. Journey time is around 30–35 minutes via the A46 and M1.",
      },
      {
        question: "Do you serve villages around Melton Mowbray?",
        answer:
          "Yes — we cover surrounding villages including Asfordby, Frisby on the Wreake, Gaddesby, and other rural postcodes in the Melton area.",
      },
    ],
  },
  // 25. Market Harborough
  "market-harborough": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Market Harborough is a prosperous market town in south Leicestershire, popular with families and
          professionals drawn to its excellent schools, beautiful town centre, and strong rail connections to London St
          Pancras and Leicester. Aylestone Kings provides professional 24/7 taxi coverage across Market Harborough and
          the surrounding villages.
        </p>
        <p className="text-gray-700">
          The town has its own railway station with fast services into Leicester (around 20 minutes) and direct trains
          to London in under an hour. We regularly supplement these connections — collecting from the station for
          onward journeys, or providing door-to-door service for passengers who need more flexibility than the
          timetable allows.
        </p>
        <p className="text-gray-700">
          Airport transfers are a popular booking from Market Harborough. East Midlands Airport is approximately 30–35
          minutes via the A6 and M1, and our fixed pricing means the cost is confirmed before you travel. For London
          airports — Heathrow, Gatwick, or Luton — our comfortable long-distance vehicles make the journey easy, with
          fixed fares agreed in advance.
        </p>
        <p className="text-gray-700">
          Corporate accounts are available for Market Harborough businesses. Call 0116 2338888 or book online anytime.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How long is a taxi from Market Harborough to Leicester city centre?",
        answer:
          "A taxi from Market Harborough to Leicester city centre takes approximately 30–40 minutes via the A6. Pre-booking is recommended to guarantee availability.",
      },
      {
        question: "How much is a taxi from Market Harborough to Heathrow Airport?",
        answer:
          "Fixed-price taxis from Market Harborough to London Heathrow start from approximately £160–£180. Price is confirmed at booking — no meters on long-distance journeys.",
      },
    ],
  },
  // 26. Rushey Mead
  "rushey-mead": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Rushey Mead is a diverse residential area in north Leicester, known for its strong community life and its
          position along the A607 Melton Road corridor. Aylestone Kings covers all of Rushey Mead — from Melton Road
          and Red Hill Circle to the residential streets around Rushey Mead Academy and beyond — with professional 24/7
          taxi service.
        </p>
        <p className="text-gray-700">
          The area sits approximately 3 miles north of Leicester city centre, and our drivers travel this part of the
          city daily. Whether you need a ride to the city centre, a connection to Leicester Railway Station, or a
          late-night pickup after an evening out, we&apos;re typically just a few minutes away.
        </p>
        <p className="text-gray-700">
          School runs are a big part of our service in Rushey Mead — the area has several schools including Rushey Mead
          Academy, and we provide reliable, punctual service for families who need a consistent, safe option.
          Pre-booking for school runs is simple and we&apos;ll confirm your regular driver and time.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888, WhatsApp, or book online anytime — 24 hours a day, seven days a week.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Rushey Mead from Leicester city centre?",
        answer:
          "Rushey Mead is approximately 3 miles north of Leicester city centre — usually a 10–15 minute journey via the A607 Melton Road.",
      },
      {
        question: "Do you cover school runs in the Rushey Mead area?",
        answer:
          "Yes — we provide regular school run services in Rushey Mead. Pre-book for a reliable daily pickup and drop-off at a consistent time.",
      },
    ],
  },
  // 20. Enderby
  // 22. Hinckley
  hinckley: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Hinckley is a busy market town in south-west Leicestershire, around 13 miles from Leicester city centre.
          It&apos;s a hub for manufacturing, logistics, and retail — and Aylestone Kings provides a dependable taxi
          service for Hinckley residents and businesses who need professional, reliable transport at any hour.
        </p>
        <p className="text-gray-700">
          We cover all parts of Hinckley — the town centre, Barwell, Earl Shilton, Burbage, and the surrounding
          business parks — with 24/7 service. Our drivers are experienced on the A47, A5, and other key routes that
          link Hinckley to Leicester and the wider Midlands.
        </p>
        <p className="text-gray-700">
          Hinckley&apos;s position close to the M69 makes it an excellent starting point for airport transfers.
          Birmingham Airport (BHX) is typically 35–40 minutes by car, making it the most popular airport choice for
          Hinckley passengers — and our fixed fares mean you know exactly what you&apos;ll pay. East Midlands Airport
          is also accessible via the M1 (around 50 minutes). We cover all major UK airports.
        </p>
        <p className="text-gray-700">
          For businesses in Hinckley, corporate taxi accounts are available with monthly invoicing and a dedicated
          account manager. Contact us at info@aylestone-taxis.co.uk.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How long does a taxi from Hinckley to Leicester city centre take?",
        answer:
          "A taxi from Hinckley to Leicester city centre takes approximately 25–35 minutes via the A47 or A5. During peak times allow up to 45 minutes.",
      },
      {
        question: "How much is a taxi from Hinckley to Birmingham Airport?",
        answer:
          "Fixed-price taxis from Hinckley to Birmingham Airport (BHX) start from approximately £40–£50 via the M69. Flight monitoring is included.",
      },
    ],
  },
  // 14. Thurmaston
  thurmaston: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Thurmaston is a busy village on the north-eastern edge of Leicester, sandwiched between the city and the
          Syston area. It&apos;s well known for Thurmaston Shopping Centre — one of the larger retail parks in the
          area — and has a growing residential population along the A6 corridor. Aylestone Kings covers all of
          Thurmaston with professional taxi service 24 hours a day.
        </p>
        <p className="text-gray-700">
          We pick up regularly from Thurmaston&apos;s residential streets, the shopping centre, and local businesses
          along the A607. Connections into Leicester city centre (around 4 miles south) are quick via the A6 or A563
          ring road, and our drivers know both routes well.
        </p>
        <p className="text-gray-700">
          Thurmaston sits close to the A46 and M1 junctions, making it a great starting point for airport transfers.
          East Midlands Airport is typically 25 minutes from Thurmaston — a direct, easy run up the M1. All airport
          fares are fixed and include flight monitoring.
        </p>
        <p className="text-gray-700">
          We also serve the business parks around Thurmaston, and corporate taxi accounts are available for companies
          with regular travel requirements.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How long is a taxi from Thurmaston to Leicester city centre?",
        answer:
          "Approximately 15–20 minutes from Thurmaston to Leicester city centre via the A6 or A563. Rush hour can add 5–10 minutes.",
      },
      {
        question: "Do you cover Thurmaston Shopping Centre?",
        answer:
          "Yes — we regularly pick up and drop off at Thurmaston Shopping Centre and the retail park. Handy when you've got bags to carry.",
      },
    ],
  },
  // 15. Syston
  syston: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Syston is a growing market town north of Leicester with a strong local identity and excellent transport links.
          With its own railway station offering direct services to Leicester and Nottingham, Syston is well connected —
          but for airport runs, hospital trips, and late-night journeys, Aylestone Kings provides the comfortable,
          on-demand service that rail simply can&apos;t match.
        </p>
        <p className="text-gray-700">
          We cover all of Syston — High Street, Melton Road, Barkby Road, and the residential streets across the village
          — with 24/7 taxi service. Our drivers travel to and from Syston regularly and can typically reach any address
          in the area within 10–15 minutes.
        </p>
        <p className="text-gray-700">
          For airport transfers, Syston&apos;s position north of Leicester gives quick access to the M1 northbound —
          ideal for East Midlands Airport, which is approximately 20–25 minutes away. All airport transfers include
          flight monitoring and a fixed, pre-agreed fare. We also run to Birmingham, Heathrow, Gatwick, Luton,
          Stansted, and Manchester.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 anytime, or pre-book your journey online.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Is there a taxi service from Syston railway station?",
        answer:
          "Yes — we collect from Syston railway station. Useful if you miss the last train or arrive on an early service before buses are running.",
      },
      {
        question: "How much is a taxi from Syston to East Midlands Airport?",
        answer:
          "Fixed-price taxis from Syston to East Midlands Airport start from approximately £25–£32. Quick journey via the M1.",
      },
    ],
  },
  // 16. Birstall
  birstall: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Birstall is a thriving village north of Leicester, anchored by major retail parks and strong local amenities.
          Aylestone Kings covers all of Birstall with fast, professional taxi service every hour of the day.
        </p>
        <p className="text-gray-700">
          We pick up from Birstall&apos;s residential streets, local shops, and routes towards the A6. For shoppers with
          heavy bags or families returning from trips into Leicester, a taxi is far more comfortable than the bus — and
          we&apos;re often just minutes away.
        </p>
        <p className="text-gray-700">
          Birstall sits close to major routes into Leicester and the M1, making it well-positioned for airport
          transfers. East Midlands Airport is approximately 20–25 minutes from Birstall — a quick, clean run.
          Birmingham Airport is around 45–50 minutes. All airport fares are fixed, with no meters or surprises.
        </p>
        <p className="text-gray-700">
          Our 6 and 8-seater minibuses are popular for groups heading to the airport together from Birstall — splitting
          the cost makes it extremely competitive. Pre-booking is advised for group travel.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How much is a taxi from Birstall to Leicester city centre?",
        answer:
          "A taxi from Birstall to Leicester city centre typically costs £8–£12. The journey takes around 15–20 minutes depending on traffic on the A6.",
      },
      {
        question: "Do you do early morning pickups from Birstall?",
        answer:
          "Yes — we regularly do 3am, 4am, and 5am airport runs from Birstall. Pre-book the night before and we'll confirm your driver that evening.",
      },
    ],
  },
  // 11. Hamilton
  hamilton: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Hamilton is a large modern housing estate in north-east Leicester — one of the city&apos;s biggest
          residential developments, built around the A6 corridor and growing steadily with new homes and facilities.
          Aylestone Kings covers all of Hamilton, including the newer streets around Netherhall and Thurncourt, with
          24/7 taxi service for residents at all hours.
        </p>
        <p className="text-gray-700">
          The area sits approximately 4 miles from Leicester city centre, and the lack of a direct bus route into town
          at certain hours makes taxis a practical option for many Hamilton residents — particularly early in the
          morning and late at night. Our drivers know the Hamilton estate roads well and can navigate to any address
          without difficulty.
        </p>
        <p className="text-gray-700">
          We cover the full range of journeys from Hamilton — commutes to the city centre and business parks, airport
          transfers, trips to Leicester&apos;s hospitals, and late-night pickups after events. East Midlands Airport
          from Hamilton is typically 30–35 minutes on a clear road.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 anytime or book online. Pre-booking is recommended for airport runs.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Is there a taxi service available in Hamilton, Leicester at night?",
        answer:
          "Yes — we operate 24/7 in Hamilton. Many residents use us for late evening pickups when public transport options are limited.",
      },
      {
        question: "How far is Hamilton from Leicester city centre?",
        answer:
          "Hamilton is approximately 4 miles north-east of Leicester city centre — usually a 15–20 minute taxi journey depending on traffic on the A6 or A563.",
      },
    ],
  },
  // 12. Beaumont Leys
  "beaumont-leys": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Beaumont Leys is one of Leicester&apos;s largest housing areas, sitting north-west of the city with its own
          shopping centre, schools, and community facilities. Aylestone Kings provides full taxi coverage across
          Beaumont Leys — from the shopping centre to Mossdale Meadows, Strasbourg Drive, and the surrounding
          residential streets — 24 hours a day.
        </p>
        <p className="text-gray-700">
          The area is popular with families, and we handle a significant number of school runs across Beaumont Leys, as
          well as hospital appointments at Glenfield Hospital nearby. The proximity to Glenfield makes us a regular
          choice for patients and visitors who need reliable, on-time transport.
        </p>
        <p className="text-gray-700">
          Beaumont Leys sits close to the M1 junction 21A, giving excellent access for airport transfers. East Midlands
          Airport is around 20–25 minutes from here — one of the quickest parts of Leicester for an airport run. We
          offer fixed fares for all airports, and our 6 and 8-seater vehicles are ideal for family groups travelling
          together.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888, WhatsApp, or book online. We&apos;re available every hour of every day.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How close is Beaumont Leys to Glenfield Hospital?",
        answer:
          "Beaumont Leys is very close to Glenfield Hospital — just a few minutes by taxi. We regularly cover hospital appointments and visitor pickups in the area.",
      },
      {
        question: "How much is a taxi from Beaumont Leys to East Midlands Airport?",
        answer:
          "Fixed-price taxis from Beaumont Leys to East Midlands Airport start from approximately £25–£32. One of the shorter airport runs from Leicester due to quick M1 access.",
      },
    ],
  },
  // 2. Leicester City Centre
  "leicester-city-centre": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Leicester city centre is our busiest area — and for good reason. From the Highcross shopping centre to
          Leicester Market, from the Curve Theatre to the Golden Mile, the city centre generates thousands of taxi
          journeys every week, and Aylestone Kings is there for all of them.
        </p>
        <p className="text-gray-700">
          We cover every corner of the city centre: Granby Street, Gallowtree Gate, Charles Street, New Walk, Waterloo
          Way, Welford Road, and everywhere in between. Our drivers are based across the city and can reach most
          central postcodes within 5–10 minutes.
        </p>
        <p className="text-gray-700">
          The city centre is also our primary hub for connecting passengers to Leicester Railway Station — one of our
          most frequent pickups. Whether you&apos;re catching a train to London St Pancras, Birmingham, or Nottingham,
          we&apos;ll have you there on time. We also cover the St Margaret&apos;s Bus Station area for connecting
          services.
        </p>
        <p className="text-gray-700">
          For nights out in Leicester&apos;s vibrant restaurant and bar scene — from Highfields&apos; curry mile to the
          Lanes — we offer safe, comfortable rides home at any hour. Our late-night service is exactly the same price
          as daytime, with no surcharges.
        </p>
        <p className="text-gray-700">
          Book online, call 0116 2338888, or WhatsApp us anytime for your Leicester city centre taxi.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How do I get a taxi from Leicester city centre late at night?",
        answer:
          "Call 0116 2338888 or WhatsApp +447888873795 — we operate 24/7. For busy weekend nights, we recommend pre-booking a return journey when you set out.",
      },
      {
        question: "Do you pick up from Leicester Railway Station?",
        answer:
          "Yes. Leicester Railway Station is one of our most common pickup points. We can collect from the main taxi rank outside or from the station drop-off zone.",
      },
      {
        question: "Can I book a taxi to the Highcross shopping centre?",
        answer:
          "Yes — we drop off and collect from Highcross, the Haymarket, and all city centre shopping areas. Ideal when you have bags to carry.",
      },
    ],
  },
  // 3. Oadby
  oadby: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Oadby is one of Leicester&apos;s most desirable residential areas, sitting just four miles south-east of the
          city centre along the A6 corridor. Aylestone Kings has been serving Oadby passengers since 1995 — whether you
          need a ride into town, a school run, or an early-morning airport transfer, our drivers know every road in the
          area.
        </p>
        <p className="text-gray-700">
          The town is home to the University of Leicester&apos;s Oadby student village, Oadby Racecourse, and popular
          retail along the high street and London Road. We pick up from residential streets, the university campus, and
          business addresses across the area every day.
        </p>
        <p className="text-gray-700">
          For airport transfers, Oadby sits in an ideal spot. East Midlands Airport is typically 25–30 minutes from
          Oadby via the A6 and M1, and we offer fixed fares with no surprises. Birmingham, Heathrow, Gatwick, Luton,
          Stansted, and Manchester are all covered too. We track your flight and adjust pickup times if there are
          delays.
        </p>
        <p className="text-gray-700">
          Pre-booking is always available and we send WhatsApp and SMS confirmation for every journey. Call 0116
          2338888 or book online anytime.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How long is a taxi from Oadby to Leicester city centre?",
        answer:
          "Typically 10–15 minutes from Oadby to Leicester city centre. During rush hours (8–9am, 4–6pm weekdays) allow up to 20 minutes.",
      },
      {
        question: "How much is a taxi from Oadby to East Midlands Airport?",
        answer:
          "A fixed-price taxi from Oadby to East Midlands Airport starts from approximately £28–£35. Price is confirmed at booking — no meters, no surprises.",
      },
      {
        question: "Do you cover late-night pickups in Oadby?",
        answer:
          "Yes. We operate 24/7 with no late-night surcharge. Call 0116 2338888 at any hour for immediate dispatch or pre-book in advance.",
      },
    ],
  },
  // 4. Wigston
  wigston: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Wigston is a thriving market town five miles south of Leicester, and one of our busiest service areas. We
          cover all parts of Wigston — Long Street, the Bull Head Street town centre, Wigston Fields, and South Wigston
          — with fast pickups around the clock.
        </p>
        <p className="text-gray-700">
          South Wigston has its own railway station with regular services into Leicester, and we do a steady trade
          collecting passengers who&apos;ve missed the last train or need an early-morning connection. The A5199 and
          A426 give our drivers quick access in and out of the area at all times of day.
        </p>
        <p className="text-gray-700">
          Airport transfers from Wigston are popular with families and commuters alike. East Midlands Airport is
          approximately 20–25 minutes away, and all our airport fares are fixed price — confirmed when you book, not
          calculated on arrival. We cover all major UK airports, and our drivers monitor flights for delays so your
          pickup time adjusts automatically.
        </p>
        <p className="text-gray-700">
          For businesses in Wigston, we offer corporate taxi accounts with monthly invoicing and a dedicated account
          manager for regular travel needs.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Wigston from Leicester city centre by taxi?",
        answer:
          "Wigston is approximately 5 miles from Leicester city centre — usually a 12–18 minute journey via the A5199 or A426.",
      },
      {
        question: "Do you cover South Wigston and Wigston Fields?",
        answer:
          "Yes — we cover all parts of Wigston including South Wigston, Wigston Fields, Wigston Magna, and the surrounding streets.",
      },
      {
        question: "Can I book a taxi from Wigston to Birmingham Airport?",
        answer:
          "Yes. Fixed-price taxis from Wigston to Birmingham Airport start from approximately £48–£58. Flight monitoring is included at no extra cost.",
      },
    ],
  },
  // 6. Belgrave
  belgrave: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Belgrave is one of Leicester&apos;s most vibrant northern suburbs, famous for its Golden Mile — the stretch of
          Belgrave Road packed with jewellery shops, sari stores, and some of Leicester&apos;s best South Asian
          restaurants. It&apos;s a busy, lively area and Aylestone Kings has been serving Belgrave residents and
          visitors for over 30 years.
        </p>
        <p className="text-gray-700">
          We cover all of Belgrave including the Golden Mile corridor, Checketts Road, Red Hill Circle, and the
          streets running towards Birstall to the north. Whether you&apos;re heading from Belgrave to the city centre
          for work, visiting family, or catching a late-night bite on the Golden Mile, our drivers are on hand around
          the clock.
        </p>
        <p className="text-gray-700">
          For airport transfers from Belgrave, we take the quickest route via the A6 or M1 depending on time of day.
          East Midlands Airport is typically 30–35 minutes, and Birmingham Airport around 50–55 minutes — all at fixed,
          pre-agreed fares.
        </p>
        <p className="text-gray-700">
          The area is also well served for school runs, with several primary and secondary schools in and around
          Belgrave that we cover regularly. Call 0116 2338888 or WhatsApp us anytime.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Do you cover the Golden Mile in Belgrave?",
        answer:
          "Yes — we regularly pick up and drop off along the Belgrave Road Golden Mile and surrounding streets. Great for restaurant visits and late-night pickups.",
      },
      {
        question: "How long is a taxi from Belgrave to Leicester city centre?",
        answer:
          "Belgrave is approximately 1.5 miles from Leicester city centre — usually a 5–10 minute journey. Very quick access to the city.",
      },
    ],
  },
  // 7. Spinney Hills
  "spinney-hills": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Spinney Hills is a densely populated, diverse residential area in east Leicester, sitting between the city
          centre and the Evington and Highfields districts. Aylestone Kings provides a fast, dependable taxi service
          throughout Spinney Hills — from East Park Road and Gwendolen Road through to Melbourne Road and the
          surrounding streets.
        </p>
        <p className="text-gray-700">
          The area has a strong community feel and a high demand for local taxi services — school runs, shopping trips,
          hospital appointments at Leicester Royal Infirmary, and connections to Leicester city centre and beyond. Our
          drivers operate in this part of Leicester every day and know the area well.
        </p>
        <p className="text-gray-700">
          We&apos;re particularly popular for airport runs from Spinney Hills, with passengers heading to East Midlands
          Airport (roughly 30 minutes) and Birmingham Airport (around 55 minutes) on a regular basis. All airport fares
          are fixed and include flight monitoring — ideal if your return flight is delayed.
        </p>
        <p className="text-gray-700">
          Book with us via call, WhatsApp, or online — available 24 hours a day, every day.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How close is Spinney Hills to Leicester city centre?",
        answer:
          "Spinney Hills is approximately 2 miles east of Leicester city centre — a 7–12 minute taxi ride depending on traffic on Evington Road or Melbourne Road.",
      },
      {
        question: "Do you cover school runs in Spinney Hills?",
        answer:
          "Yes — we provide regular school run services in the Spinney Hills area. Pre-book for a consistent daily service and our driver will be there every morning.",
      },
    ],
  },
}

function getAllAreas(): AreaItem[] {
  const groups = footerData.areaGroups ?? []
  const areas = groups.flatMap((g: { items: AreaItem[] }) => g.items)
  const destinations = (footerData as any).destinationLinks ?? []
  const priorityAreas = (footerData as any).priorityAreas ?? {}
  const featuredDestinations = [
    ...(priorityAreas.opPriority ?? []),
    ...(priorityAreas.mediumPriority ?? []),
    ...(priorityAreas.optionalPriority ?? [])
  ]
  return [...areas, ...destinations, ...featuredDestinations]
}
function slugFromHref(href: string): string {
  // Support both formats: /taxis-in-aylestone and /taxis-in/aylestone
  if (href.includes("/taxis-in-")) {
    return href.split("/taxis-in-")[1] ?? ""
  }
  if (href.includes("/taxis-in/")) {
    return href.split("/taxis-in/")[1] ?? ""
  }
  return ""
}

function getAreaBySlug(slug: string): AreaItem | undefined {
  return getAllAreas().find((a) => slugFromHref(a.href) === slug)
}

/** Neighbour slugs not in areaGroups are omitted (no broken sidebar links). */
function resolveNearbyAreaLinks(slugs: string[]): AreaItem[] {
  return slugs.flatMap((nearbySlug) => {
    const item = getAreaBySlug(nearbySlug)
    return item?.href && item?.name ? [item] : []
  })
}

export function generateStaticParams() {
  return getAllAreas().map((a) => ({ slug: slugFromHref(a.href) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = getAreaBySlug(slug)
  const areaName = area?.name.replace(/^Taxis in\s+/i, "").replace(/^Taxi to\s+/i, "") ?? "Area"
  const isDestination = (footerData as any).destinationLinks?.some((d: any) => slugFromHref(d.href) === slug) ||
    (footerData as any).priorityAreas?.opPriority?.some((d: any) => slugFromHref(d.href) === slug) ||
    (footerData as any).priorityAreas?.mediumPriority?.some((d: any) => slugFromHref(d.href) === slug) ||
    (footerData as any).priorityAreas?.optionalPriority?.some((d: any) => slugFromHref(d.href) === slug)

  const customMeta = areaMeta[slug]
  const title = customMeta
    ? customMeta.title
    : isDestination
      ? `Taxi to ${areaName}, Leicester | Book 24/7 | 0116 2338888`
      : `Taxi in ${areaName}, Leicester | Fixed Fares | Aylestone Taxis`
  const description = customMeta
    ? customMeta.description
    : isDestination
      ? `Book a taxi to ${areaName} from anywhere in Leicester. Fixed fares, licensed drivers, instant online booking. Serving ${areaName} 24/7 — call 0116 2338888.`
      : `Need a taxi in ${areaName}? Aylestone Taxis: fast local pickups, airport transfers, school runs. Book online in seconds or call 0116 2338888 — 24/7.`
  
  const canonicalUrl = `${siteUrl}/taxis-in/${slug}`
  
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      siteName: companyInfo.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = getAreaBySlug(slug)
  if (!area) return notFound()

  const areaPlain = area.name.replace(/^Taxis in\s+/i, "").replace(/^Taxi to\s+/i, "")
  const isWigston = areaPlain.toLowerCase() === "wigston"
  const isOadby = areaPlain.toLowerCase() === "oadby"
  const isBeaumontLeys = slug === "beaumont-leys"
  const isKnighton = slug === "knighton"
  const isClarendonPark = slug === "clarendon-park"
  const isHighfields = slug === "highfields"
  const isBraunstone = slug === "braunstone"
  const isEvington = slug === "evington"
  const isGlenfield = slug === "glenfield"
  const isBlaby = slug === "blaby"
  const isNarborough = slug === "narborough"
  const isEnderby = slug === "enderby"
  const isLoughborough = slug === "loughborough"
  const isFossePark = slug === "fosse-park"
  const isHamilton = slug === "hamilton"
  const isMarketHarborough = slug === "market-harborough"
  const supermarketDestinationSlugs = new Set<string>([
    "asda-fosse-park",
    "sainsburys-grove-triangle",
    "tesco-narborough-road",
    "aldi-aylestone-road",
    "lidl-beaumont-leys",
    "morrisons-freemens-common",
    "iceland-city-centre",
    "farmfoods-st-matthews",
    "m-and-s-foodhall-city-centre",
    "waitrose-oadby",
  ])
  const hospitalSlugs = new Set<string>([
    "leicester-royal-infirmary",
    "glenfield-hospital",
    "leicester-general-hospital",
    "spire-leicester-hospital",
    "nuffield-health-leicester-hospital",
  ])
  const universitySlugs = new Set<string>([
    "university-of-leicester",
    "de-montfort-university",
    "leicester-college",
  ])
  const stationSlugs = new Set<string>([
    "leicester-railway-station",
    "south-wigston-station",
    "narborough-station",
    "st-margarets-bus-station",
  ])
  const stadiumSlugs = new Set<string>([
    "king-power-stadium",
    "welford-road-stadium",
    "leicester-racecourse",
    "morningside-arena",
  ])
  const businessParkSlugs = new Set<string>([
    "meridian-business-park",
    "grove-park",
  ])
  const faithPlaceSlugs = new Set<string>([
    "jame-mosque-leicester",
    "masjid-umar",
    "shree-hindu-temple-leicester",
    "guru-nanak-gurdwara-leicester",
  ])

  const isDestination = (footerData as any).destinationLinks?.some((d: any) => slugFromHref(d.href) === slug) ||
    (footerData as any).priorityAreas?.opPriority?.some((d: any) => slugFromHref(d.href) === slug) ||
    (footerData as any).priorityAreas?.mediumPriority?.some((d: any) => slugFromHref(d.href) === slug) ||
    (footerData as any).priorityAreas?.optionalPriority?.some((d: any) => slugFromHref(d.href) === slug)
  const details = (footerData as any).areaDetails?.[slug] as { landmarks?: string[] } | undefined
  const landmarks = details?.landmarks ?? []
  const nearbySlugs = nearbyAreasBySlug[slug]
  const relatedAreas = nearbySlugs
    ? resolveNearbyAreaLinks(nearbySlugs)
    : getAllAreas()
        .filter((a) => slugFromHref(a.href) !== slug)
        .slice(0, 6)

  const isSupermarketDestination = supermarketDestinationSlugs.has(slug)
  const isHospitalArea = hospitalSlugs.has(slug)
  const isUniversityArea = universitySlugs.has(slug)
  const isStationArea = stationSlugs.has(slug)
  const isStadiumArea = stadiumSlugs.has(slug)
  const isBusinessParkArea = businessParkSlugs.has(slug)
  const isFaithPlaceArea = faithPlaceSlugs.has(slug)
  const selectedAreaContent = areaContent[slug]
  const selectedPriorityContent = priorityAreaSeoContent[slug]
  const isPrioritySeoArea = Boolean(selectedPriorityContent)
  const resolvedContent: AreaContent = selectedPriorityContent
    ? {
        body: (
          <div className="space-y-4">
            {selectedPriorityContent.bodyParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-gray-700">
                {paragraph}
              </p>
            ))}
            <p className="text-gray-700">
              Need a detailed airport route breakdown? Visit{" "}
              <Link href="/airport-transfers-leicester" className="text-[#06A0A6] hover:underline underline-offset-2">
                our Leicester airport transfer guide
              </Link>{" "}
              for terminal-specific advice. If you want to compare likely journey costs first, check{" "}
              <Link href="/pricing" className="text-[#06A0A6] hover:underline underline-offset-2">
                taxi pricing information
              </Link>{" "}
              before you book.
            </p>
          </div>
        ),
        faqs: selectedPriorityContent.faqs,
      }
    : selectedAreaContent

  const breadcrumbLabel = isDestination
    ? `Taxi to ${areaPlain}`
    : `Taxis in ${areaPlain}`
  const { items: breadcrumbItems, pageUrl: breadcrumbPageUrl } = areaPageBreadcrumbs(
    breadcrumbLabel,
    slug
  )

  const areaFaqs = collectAreaPageFaqs({
    resolvedFaqs: resolvedContent?.faqs,
    areaPlain,
    isWigston,
    isOadby,
    isBeaumontLeys,
    isPrioritySeoArea,
  })

  return (
    <main>
      <AreaPageStructuredData
        breadcrumbItems={breadcrumbItems}
        breadcrumbPageUrl={breadcrumbPageUrl}
        faqs={areaFaqs}
      />
      <div className="pt-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <PageBreadcrumbs items={breadcrumbItems} pageUrl={breadcrumbPageUrl} includeJsonLd={false} />
        </div>
      </div>
      {/* Hero */}
      <section className="relative text-white bg-gradient-to-br from-[#0F0D3E] via-[#0F1B5A] to-[#0A7F84] pt-14 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-white/80">{companyInfo.name}</p>
              <h1 className="mt-2 text-3xl text-white sm:text-4xl md:text-5xl font-extrabold leading-tight">
                {AREA_CUSTOM_H1[slug] ??
                  (isDestination ? `Taxi to ${areaPlain}` : `Taxi Service in ${areaPlain} – Aylestone Taxis`)}
              </h1>
              <p className="mt-3 max-w-2xl text-white/85">
                {isDestination 
                  ? `Need a taxi to ${areaPlain}? We offer reliable, on-time journeys with professional drivers and fixed fares. Perfect for appointments, events, shopping and travel connections.`
                  : `Reliable 24/7 taxis across ${areaPlain}, Leicester & Leicestershire. Fixed fares, licensed drivers, and fast pick-ups.`
                }
                {isDestination 
                  ? ` Book online in seconds — or contact us for help with luggage and special requests.`
                  : ` Looking for a reliable taxi in ${areaPlain}? Our trusted local taxi service is available 24/7, whether you need a short trip, an airport transfer, business travel, or a long-distance journey. With courteous drivers, comfortable modern vehicles, and fair, competitive pricing, we make travelling around ${areaPlain} simple, safe, and stress-free.`
                }
              </p>
              <p className="mt-3 max-w-2xl text-white/85">
                {isDestination 
                  ? `Our drivers know the best routes to ${areaPlain} and can help with luggage, accessibility needs, and special requests.`
                  : `Whether you're heading to the airport, commuting for work, or exploring the local area, Licensed drivers available through Aylestone Taxis ${areaPlain} are always ready to get you there on time. We take pride in offering reliable, comfortable, and budget-friendly travel solutions tailored to your needs.`
                }
              </p>
              <p className="mt-3 max-w-2xl text-white/85">
                Book your taxi today and get where you need to be – on time, every time.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={contactInfo.booking.online}>
                <Button className="bg-[#06A0A6] hover:bg-[#06939a] text-white rounded-lg shadow-professional hover:shadow-professional-lg transition-smooth">
                  Book Now
                </Button>
              </Link>             
              <Link href="/contact">             
                <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Content */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* On this page */}
          <nav aria-label="On this page" className="mb-8">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li><a href="#popular-journeys" className="text-[#06A0A6] hover:underline underline-offset-2">Popular journeys</a></li>
              <li><a href="#airport-transfers" className="text-[#06A0A6] hover:underline underline-offset-2">Airport transfers</a></li>
              <li><a href="#why-choose-us" className="text-[#06A0A6] hover:underline underline-offset-2">Why choose us</a></li>
              <li><a href="#how-it-works" className="text-[#06A0A6] hover:underline underline-offset-2">How it works</a></li>
              <li><a href="#faqs" className="text-[#06A0A6] hover:underline underline-offset-2">FAQs</a></li>
            </ul>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">
            <div className="space-y-8">
              {/* Area-specific body content if provided, otherwise generic content */}
              {resolvedContent ? (
                <>
                  <div>{resolvedContent.body}</div>

                  {AREA_BLOG_CALLOUTS[slug] && (
                    <div className="rounded-lg border border-gray-200 bg-gradient-to-r from-[#06A0A6]/8 to-transparent p-4">
                      <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                        <span className="font-semibold text-[#0F0D3E]">{AREA_BLOG_CALLOUTS[slug].teaser} </span>
                        <Link
                          href={AREA_BLOG_CALLOUTS[slug].href}
                          className="text-[#06A0A6] font-semibold hover:underline underline-offset-2"
                        >
                          {AREA_BLOG_CALLOUTS[slug].title}
                        </Link>
                        .
                      </p>
                    </div>
                  )}

                  <div className="pt-2">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center bg-[#06A0A6] hover:bg-[#06939a] text-white px-5 py-2.5 rounded-lg shadow-professional hover:shadow-professional-lg transition-smooth gap-2"
                    >
                      {isDestination ? `Book Taxi to ${areaPlain}` : `Book Your Taxi in ${areaPlain}`}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {isMarketHarborough && (
                    <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                        Taxi Numbers in Market Harborough
                      </h2>
                      <p className="text-gray-700 mb-4">
                        If you are searching for taxi numbers in Market Harborough, Aylestone Kings provides reliable
                        coverage across the town centre, surrounding villages, and popular routes to Leicester and East
                        Midlands Airport. Our booking line is open around the clock — call{" "}
                        <Link
                          href="tel:01162338888"
                          className="text-[#06A0A6] font-bold text-lg hover:underline underline-offset-2"
                        >
                          0116 233 8888
                        </Link>{" "}
                        to arrange a local pickup, station transfer, or airport journey at any time of day or night.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Among Market Harborough taxi companies, Aylestone Kings is known for fixed, upfront pricing,
                        licensed drivers, and regular service to key local points including the railway station, The
                        Square, and routes to Foxton Locks. Whether you need a same-day taxi or want to pre-book for a
                        morning train, our team responds quickly with clear fare confirmation before your journey
                        begins.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Many passengers compare taxi firms in Market Harborough before choosing who to call, and we are
                        proud to be a trusted option for both one-off bookings and repeat travel. From school runs and
                        healthcare appointments to corporate commutes and late-evening returns, our drivers know the
                        local roads and typical journey times, which helps keep your collection prompt and your fare
                        predictable.
                      </p>
                      <p className="text-gray-700 mb-4">
                        As an established Leicester operator with decades of experience serving south Leicestershire, we
                        bring reliable dispatch, DBS-checked drivers, and comfortable vehicles to every booking —
                        whether it is a short town-centre trip or a long-distance airport transfer.
                      </p>
                      <p className="text-gray-800 font-medium mb-4">
                        Save our number for whenever you need a ride:{" "}
                        <Link
                          href="tel:01162338888"
                          className="text-[#06A0A6] font-bold text-xl hover:underline underline-offset-2"
                        >
                          0116 233 8888
                        </Link>
                        . Available 24 hours a day, seven days a week, including bank holidays.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={contactInfo.booking.online}
                          className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                        >
                          Book Online
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </Link>
                        <Link
                          href="tel:01162338888"
                          className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                        >
                          0116 233 8888
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {isDestination ? `Book a Taxi to ${areaPlain}` : `Your Local Taxi in ${areaPlain}`}
                    </h2>
                    <p className="text-gray-700">
                      {isDestination
                        ? `Heading to ${areaPlain}? Our drivers know the best drop-off points and quickest routes. Fixed fares, card payments, and 24/7 availability.`
                        : `Looking for a taxi in ${areaPlain}? We've served Leicester since 1995 with safe, affordable journeys for school runs, nights out, shopping trips and airport transfers.`}
                    </p>
                  </div>

                  {landmarks.length > 0 && (
                    <div className="rounded-lg border border-gray-200 p-5">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-[#06A0A6]" /> Local knowledge
                      </h3>
                      <p className="text-gray-700">Popular spots in {areaPlain}: {landmarks.join(", ")}</p>
                    </div>
                  )}

                  <div id="popular-journeys" className="rounded-lg border border-gray-200 p-5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Car className="h-5 w-5 text-[#06A0A6]" />
                      {isDestination ? `Popular journeys` : `Popular Journeys from ${areaPlain}`}
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {isDestination ? (
                        <>
                          <li>Aylestone → {areaPlain}</li>
                          <li>Leicester City Centre → {areaPlain}</li>
                          <li>DMU/University area → {areaPlain}</li>
                          <li>Fosse Park → {areaPlain}</li>
                        </>
                      ) : (
                        <>
                          <li>{areaPlain} → Leicester City Centre</li>
                          {POPULAR_JOURNEY_AIRPORTS.map((airport) => (
                            <li key={airport.href}>
                              {areaPlain} →{" "}
                              <Link
                                href={airport.href}
                                className="text-[#06A0A6] hover:underline underline-offset-2"
                              >
                                {airport.label} ({airport.code})
                              </Link>
                            </li>
                          ))}
                          <li>{areaPlain} → Fosse Park / Train Station / Hospitals</li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div id="airport-transfers" className="rounded-lg border border-gray-200 p-5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Plane className="h-5 w-5 text-[#06A0A6]" />
                      {isDestination ? `Airport Transfers` : `Airport Transfers from ${areaPlain}`}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {isDestination
                        ? `Seamless airport connections with meet & greet on request.`
                        : `Fixed-rate, 24/7 transfers with flight tracking and meet & greet on request.`}
                    </p>
                    <div className="mb-3">
                      <Link
                        href="/airport-transfers-leicester"
                        className="inline-flex items-center gap-2 text-[#06A0A6] hover:underline underline-offset-2 font-medium"
                      >
                        <ArrowRight className="h-4 w-4" />
                        Airport transfers from Leicester (hub page)
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {footerData.airportLinks?.map((ap) => {
                        const base = ap.name.replace(/ Airport$/, "")
                        const codeMap: Record<string, string> = {
                          Birmingham: "BHX",
                          "East Midlands": "EMA",
                          Heathrow: "LHR",
                          Gatwick: "LGW",
                          Luton: "LTN",
                          Stansted: "STN",
                          Manchester: "MAN",
                        }
                        const code = codeMap[base] ?? ""
                        return (
                          <Link
                            key={ap.name}
                            href={ap.href}
                            className="text-[#06A0A6] hover:underline underline-offset-2 inline-flex items-center gap-1"
                          >
                            <ArrowRight className="h-3 w-3" />
                            {base}
                            {code ? ` (${code})` : ""}
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  <div id="why-choose-us" className="rounded-lg border border-gray-200 p-5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-[#06A0A6]" /> Why Choose Us in {areaPlain}
                    </h3>
                    <ul className="text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <li>Licensed &amp; insured • DBS-checked drivers</li>
                      <li>Fixed prices • No surge pricing</li>
                      <li>Modern fleet: saloon, estate, MPV &amp; minibuses</li>
                      <li>24/7 service • Priority airport runs</li>
                    </ul>
                  </div>

                  <div id="how-it-works" className="rounded-lg border border-gray-200 p-5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#06A0A6]" /> How It Works
                    </h3>
                    <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                      <li>Booking: Book online or call/WhatsApp. We recommend pre-booking for airport runs.</li>
                      <li>Pickup: Your driver arrives slightly early, with live updates.</li>
                      <li>Travel: Comfortable vehicles, fixed fares, and help with luggage.</li>
                    </ol>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center bg-[#06A0A6] hover:bg-[#06939a] text-white px-5 py-2.5 rounded-lg shadow-professional hover:shadow-professional-lg transition-smooth gap-2"
                    >
                      {isDestination ? `Book Taxi to ${areaPlain}` : `Book Your Taxi in ${areaPlain}`}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* SEO Content: About our service in Area */}
                  <div className="rounded-lg border border-gray-200 p-5">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                      Taxi Service in {areaPlain} — What to Expect
                    </h2>
                    <p className="text-gray-700 mb-3">
                      {isSupermarketDestination
                        ? `We provide reliable taxis to ${areaPlain} and other supermarkets across Leicester, ideal for weekly shops, click‑and‑collect orders or late‑night top‑ups. Drivers help with bags where possible and know the best pick‑up points for each store.`
                        : isHospitalArea
                        ? `We provide sensitive, reliable taxi journeys to and from ${areaPlain} for appointments, visitors and staff. Drivers understand hospital layouts, main entrances and drop‑off zones so you can focus on your health rather than parking or bus timetables.`
                        : isUniversityArea
                        ? `We help students, staff and visitors travel to and from ${areaPlain} quickly and safely. Whether it is term‑time moves, lectures, nights out or open days, our licensed taxis offer a dependable alternative to buses or driving.`
                        : isStadiumArea
                        ? `Match days and big events around ${areaPlain} can be busy. Our taxis help you avoid parking stress and road closures, with drivers who understand typical traffic patterns before and after games or shows.`
                        : isStationArea
                        ? `For train and coach connections at ${areaPlain}, we offer door‑to‑door transfers so you do not miss your connection. We monitor typical delays and advise realistic pick‑up times, especially at peak hours.`
                        : isBusinessParkArea
                        ? `Commuters and business visitors rely on us for dependable transfers to ${areaPlain}. We support regular staff travel, client meetings and early or late shifts when public transport options are limited.`
                        : isFaithPlaceArea
                        ? `For prayers, services and community events at ${areaPlain}, our taxis provide a respectful, punctual service. We understand peak times such as Friday prayers, festivals and evening gatherings.`
                        : `We provide reliable taxis in ${areaPlain} and across Leicester & Leicestershire. Whether it is a quick trip to the shops, school runs, hospital appointments or a late-night pickup, our licensed drivers and modern fleet make every journey simple.`}
                    </p>
                    <p className="text-gray-700 mb-3">
                      {isSupermarketDestination
                        ? `Popular journeys include home addresses across Leicester to ${areaPlain}, short hops from nearby estates, and return trips after larger weekly shops. Many customers also book from workplaces, schools and bus stops straight to the store.`
                        : isHospitalArea
                        ? `Common trips include home to ${areaPlain} for outpatient clinics, ward visits and tests, as well as transfers between Leicester hospitals or from train and bus stations direct to the right entrance.`
                        : isUniversityArea
                        ? `Popular journeys include halls of residence to ${areaPlain}, late‑night pickups from the city centre, station runs at the start and end of term, and trips to supermarkets or sports venues around campus.`
                        : isStadiumArea
                        ? `Typical journeys cover home to ${areaPlain} before kick‑off, pub to stadium, and post‑match pickups back to Leicester neighbourhoods, stations and park‑and‑ride sites.`
                        : isStationArea
                        ? `Many passengers book taxis from home or campus to ${areaPlain} with luggage, or request a pick‑up from the station straight to hotels, universities, hospitals and business parks.`
                        : isBusinessParkArea
                        ? `From ${areaPlain}, we regularly take passengers to Leicester city centre, railway stations, hotels and nearby towns, supporting business meetings, shift work and corporate travel.`
                        : isFaithPlaceArea
                        ? `Popular journeys include family groups travelling together to ${areaPlain}, late‑evening pickups after services, and transfers from train and coach stations for visitors attending major events.`
                        : `From ${areaPlain}, popular destinations include Leicester City Centre, Fosse Park, De Montfort University, University of Leicester and both Leicester and South Wigston train stations. We also cover nearby neighbourhoods, ensuring seamless connections for work, study and leisure.`}
                    </p>
                    <p className="text-gray-700">
                      Need an airport transfer from {areaPlain}? We operate 24/7 to Birmingham (BHX), East Midlands (EMA),
                      Heathrow (LHR), Gatwick (LGW), Luton (LTN), Stansted (STN) and Manchester (MAN) with flight tracking
                      and meet &amp; greet on request.
                    </p>
                  </div>
                </>
              )}

              {isHamilton && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Taxis in Hamilton — journey times, fares &amp; services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Hamilton Shopping Centre, Hamilton Park, Thurmaston Lane, and Hamilton Park and Ride are all within
                    easy reach — making Hamilton popular with families, commuters, and shoppers. We also cover
                    neighbouring{" "}
                    <Link href="/taxis-in/syston" className="text-[#06A0A6] hover:underline underline-offset-2">
                      Syston
                    </Link>{" "}
                    and the wider north-east Leicester area.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Hamilton</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Hamilton → Leicester city centre: around 15 minutes in normal traffic</li>
                    <li>Hamilton → East Midlands Airport (EMA): around 25 minutes</li>
                    <li>Hamilton → Birmingham Airport (BHX): around 50 minutes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example fares from Hamilton</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Hamilton → Leicester city centre: from £8</li>
                    <li>Hamilton → East Midlands Airport: from £28</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Times and fares are approximate and depend on traffic, pickup point, and vehicle type. You will
                    receive a fixed quote before you confirm.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services from Hamilton</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>24/7 availability — including early-morning airport runs and evening shopping-centre pickups</li>
                    <li>Fixed prices confirmed at booking</li>
                    <li>DBS-checked, Leicester City Council licensed drivers</li>
                    <li>
                      <Link
                        href="/airport-transfers-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Airport transfers
                      </Link>{" "}
                      to EMA, Birmingham, Heathrow, and all major UK airports
                    </li>
                    <li>Regular school runs with standing bookings</li>
                    <li>Shopping trips to Hamilton Shopping Centre and Park and Ride connections</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="tel:01162338888"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                    >
                      0116 233 8888
                    </Link>
                  </div>
                </div>
              )}

              {isWigston && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Taxis in Wigston — Town Centre, Bell Street &amp; South Wigston Station</h2>
                  <p className="text-gray-700 mb-3">
                    Licensed drivers available through Aylestone Taxis provide journeys to and from Wigston – from Wigston town centre and Bell Street shopping area to residential streets and South Wigston station.
                    Whether you are heading home after shopping, catching a train or need a late-night pickup, you can book fast, reliable, local journeys.
                  </p>
                  <p className="text-gray-700 mb-3">
                    We know the key Wigston spots, including Bell Street, the town centre car parks and South Wigston station pick-up points, so your driver can meet you exactly where you need.
                    You can pre-book or request a taxi on demand, with options for card payment in many vehicles.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Wigston</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Wigston town centre → Leicester City Centre: around 15–20 minutes in normal traffic</li>
                    <li>Bell Street, Wigston → South Wigston Station: around 5–10 minutes</li>
                    <li>Wigston → Fosse Park: around 15–20 minutes</li>
                    <li>Wigston → Leicester Royal Infirmary: around 15–20 minutes</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">
                    Times are approximate and depend on traffic and time of day. For live journey estimates and pricing, get an instant quote through our online booking.
                  </p>
                  <p className="mt-4 text-gray-800 font-medium">
                    Need a taxi in Wigston right now? Book online in seconds or call {contactInfo.phone} for fast pickup from Wigston town centre, Bell Street or South Wigston station.
                  </p>
                </div>
              )}

              {isOadby && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Taxis in Oadby — Racecourse, Stoughton Road &amp; Beyond</h2>
                  <p className="text-gray-700 mb-3">
                    Licensed drivers available through Aylestone Taxis provide journeys to and from Oadby – from Stoughton Road and residential streets to Leicester Racecourse and the University of Leicester campus.
                    Whether you are heading to the races, commuting into Leicester or need a late-night pickup, you can book fast, reliable local journeys.
                  </p>
                  <p className="text-gray-700 mb-3">
                    We know Oadby well, including Leicester Racecourse drop-off points and Stoughton Road, so your driver can meet you exactly where you need.
                    Pre-book for race days and busy events, or call when you need an immediate pickup.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Oadby</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Oadby (Stoughton Road) → Leicester City Centre: around 10–15 minutes in normal traffic</li>
                    <li>Oadby → Leicester Racecourse: around 5–10 minutes</li>
                    <li>Oadby → Fosse Park: around 15–20 minutes</li>
                    <li>Oadby → Leicester Royal Infirmary: around 10–15 minutes</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">
                    Times are approximate and depend on traffic and time of day. For live journey estimates and pricing, get an instant quote through our online booking.
                  </p>
                  <p className="mt-4 text-gray-800 font-medium">
                    Need a taxi in Oadby right now? Book online in seconds or call {contactInfo.phone} for fast pickup from Stoughton Road, the Racecourse or anywhere in Oadby.
                  </p>
                </div>
              )}

              {isFossePark && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Taxis in Fosse Park — journey times, fares &amp; services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Fosse Shopping Park, Fosse Park Avenue, Meridian Business Park, and Braunstone Lane are all within
                    easy reach — making Fosse Park popular with shoppers, retail workers, and business park employees.
                    We also cover neighbouring{" "}
                    <Link href="/taxis-in/braunstone" className="text-[#06A0A6] hover:underline underline-offset-2">
                      Braunstone
                    </Link>{" "}
                    and the wider west Leicester area.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Fosse Park</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Fosse Park → Leicester city centre: around 10–12 minutes in normal traffic</li>
                    <li>Fosse Park → East Midlands Airport (EMA): around 20 minutes</li>
                    <li>Fosse Park → Birmingham Airport (BHX): around 45 minutes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example fares from Fosse Park</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Fosse Park → Leicester city centre: from £6</li>
                    <li>Fosse Park → East Midlands Airport: from £25</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Times and fares are approximate and depend on traffic, pickup point, and vehicle type. You will
                    receive a fixed quote before you confirm.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services from Fosse Park</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>24/7 availability — including early-morning shift starts and late-night retail finishes</li>
                    <li>Fixed prices confirmed at booking</li>
                    <li>DBS-checked, Leicester City Council licensed drivers</li>
                    <li>
                      <Link
                        href="/airport-transfers-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Airport transfers
                      </Link>{" "}
                      to EMA, Birmingham, Heathrow, and all major UK airports
                    </li>
                    <li>Early morning and late-night rides for retail workers at Fosse Shopping Park</li>
                    <li>Corporate runs to Meridian Business Park and other business sites</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="tel:01162338888"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                    >
                      0116 233 8888
                    </Link>
                  </div>
                </div>
              )}

              {isLoughborough && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Taxis in Loughborough — journey times, fares &amp; services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Loughborough University, Loughborough Town Centre, Charnwood Borough, and Loughborough Train
                    Station are all within easy reach — making Loughborough popular with students, commuters, and
                    families. We also cover neighbouring{" "}
                    <Link href="/taxis-in/syston" className="text-[#06A0A6] hover:underline underline-offset-2">
                      Syston
                    </Link>{" "}
                    and the wider north Leicestershire area.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Loughborough</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Loughborough → Leicester city centre: around 20–25 minutes in normal traffic</li>
                    <li>Loughborough → East Midlands Airport (EMA): around 15 minutes</li>
                    <li>Loughborough → Birmingham Airport (BHX): around 60 minutes</li>
                    <li>Loughborough → Nottingham: around 30 minutes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example fares from Loughborough</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Loughborough → Leicester city centre: from £18</li>
                    <li>Loughborough → East Midlands Airport: from £20</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Times and fares are approximate and depend on traffic, pickup point, and vehicle type. You will
                    receive a fixed quote before you confirm.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services from Loughborough</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>24/7 availability — including early-morning airport runs and late-night student pickups</li>
                    <li>Fixed prices confirmed at booking</li>
                    <li>DBS-checked, Leicester City Council licensed drivers</li>
                    <li>
                      <Link
                        href="/airport-transfers-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Airport transfers
                      </Link>{" "}
                      to EMA, Birmingham, Heathrow, and all major UK airports
                    </li>
                    <li>University student runs — campus, town centre, and end-of-term travel</li>
                    <li>Train station pickups at Loughborough Train Station</li>
                    <li>Long-distance journeys across the Midlands and beyond</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="tel:01162338888"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                    >
                      0116 233 8888
                    </Link>
                  </div>
                </div>
              )}

              {isGlenfield && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Taxis in Glenfield — journey times, fares &amp; services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Glenfield Hospital, Glenfield Village, Dominion Road, and Groby Road are all within easy reach —
                    making Glenfield a key area for NHS workers, patients, and families visiting the hospital. We also
                    cover neighbouring{" "}
                    <Link
                      href="/taxis-in/beaumont-leys"
                      className="text-[#06A0A6] hover:underline underline-offset-2"
                    >
                      Beaumont Leys
                    </Link>{" "}
                    and the wider west Leicester area.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Glenfield</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Glenfield → Leicester city centre: around 12–15 minutes in normal traffic</li>
                    <li>Glenfield → Glenfield Hospital: around 5 minutes</li>
                    <li>Glenfield → East Midlands Airport (EMA): around 25 minutes</li>
                    <li>Glenfield → Birmingham Airport (BHX): around 50 minutes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example fares from Glenfield</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Glenfield → Leicester city centre: from £7</li>
                    <li>Glenfield → East Midlands Airport: from £28</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Times and fares are approximate and depend on traffic, pickup point, and vehicle type. You will
                    receive a fixed quote before you confirm.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services from Glenfield</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>24/7 availability — including night shifts and early-morning hospital runs</li>
                    <li>Fixed prices confirmed at booking</li>
                    <li>DBS-checked, Leicester City Council licensed drivers</li>
                    <li>Hospital runs to Glenfield Hospital and other medical sites</li>
                    <li>Early morning rides for flight departures</li>
                    <li>
                      <Link
                        href="/airport-transfers-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Airport transfers
                      </Link>{" "}
                      to EMA, Birmingham, Heathrow, and all major UK airports
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="tel:01162338888"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                    >
                      0116 233 8888
                    </Link>
                  </div>
                </div>
              )}

              {isEvington && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Taxis in Evington — journey times, fares &amp; services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Evington Village, Evington Park, Evington Road, and Leicester General Hospital are all within easy
                    reach — making Evington popular with families, elderly residents, and NHS workers. We also cover
                    neighbouring{" "}
                    <Link href="/taxis-in/oadby" className="text-[#06A0A6] hover:underline underline-offset-2">
                      Oadby
                    </Link>{" "}
                    and the wider east Leicester area.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Evington</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Evington → Leicester city centre: around 10–12 minutes in normal traffic</li>
                    <li>Evington → Leicester General Hospital: around 5 minutes</li>
                    <li>Evington → East Midlands Airport (EMA): around 25 minutes</li>
                    <li>Evington → Birmingham Airport (BHX): around 50 minutes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example fares from Evington</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Evington → Leicester city centre: from £6</li>
                    <li>Evington → East Midlands Airport: from £28</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Times and fares are approximate and depend on traffic, pickup point, and vehicle type. You will
                    receive a fixed quote before you confirm.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services from Evington</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>24/7 availability — including night shifts and early-morning hospital runs</li>
                    <li>Fixed prices confirmed at booking</li>
                    <li>DBS-checked, Leicester City Council licensed drivers</li>
                    <li>Hospital runs to Leicester General Hospital and other medical sites</li>
                    <li>Elderly assistance with patient, door-to-door support</li>
                    <li>
                      <Link
                        href="/airport-transfers-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Airport transfers
                      </Link>{" "}
                      to EMA, Birmingham, Heathrow, and all major UK airports
                    </li>
                    <li>Regular school runs with standing bookings</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="tel:01162338888"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                    >
                      0116 233 8888
                    </Link>
                  </div>
                </div>
              )}

              {isBraunstone && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Taxis in Braunstone — journey times, fares &amp; services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Braunstone Park, Braunstone Town, Fosse Shopping Park, and Braunstone Gate are all within easy
                    reach — making Braunstone popular with families and working commuters. We also cover neighbouring{" "}
                    <Link href="/taxis-in/narborough" className="text-[#06A0A6] hover:underline underline-offset-2">
                      Narborough
                    </Link>{" "}
                    and the wider west Leicester area.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Braunstone</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Braunstone → Leicester city centre: around 10–12 minutes in normal traffic</li>
                    <li>Braunstone → East Midlands Airport (EMA): around 20 minutes</li>
                    <li>Braunstone → Birmingham Airport (BHX): around 45 minutes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example fares from Braunstone</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Braunstone → Leicester city centre: from £6</li>
                    <li>Braunstone → East Midlands Airport: from £25</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Times and fares are approximate and depend on traffic, pickup point, and vehicle type. You will
                    receive a fixed quote before you confirm.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services from Braunstone</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>24/7 availability — including early shifts and late-night pickups</li>
                    <li>Fixed prices confirmed at booking</li>
                    <li>DBS-checked, Leicester City Council licensed drivers</li>
                    <li>
                      <Link
                        href="/airport-transfers-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Airport transfers
                      </Link>{" "}
                      to EMA, Birmingham, Heathrow, and all major UK airports
                    </li>
                    <li>Regular school runs with standing bookings</li>
                    <li>Shopping trips to Fosse Shopping Park and other retail destinations</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="tel:01162338888"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                    >
                      0116 233 8888
                    </Link>
                  </div>
                </div>
              )}

              {isHighfields && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Taxis in Highfields — journey times, fares &amp; services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Highfields Park, Spinney Hill Park, Evington Road, and Leicester Royal Infirmary are all within
                    easy reach — making Highfields popular with families, NHS workers, and commuters. We also cover
                    neighbouring{" "}
                    <Link href="/taxis-in/spinney-hills" className="text-[#06A0A6] hover:underline underline-offset-2">
                      Spinney Hills
                    </Link>{" "}
                    and the wider inner Leicester area.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Highfields</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Highfields → Leicester city centre: around 8–10 minutes in normal traffic</li>
                    <li>Highfields → Leicester Royal Infirmary (LRI): around 5 minutes</li>
                    <li>Highfields → East Midlands Airport (EMA): around 25 minutes</li>
                    <li>Highfields → Birmingham Airport (BHX): around 50 minutes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example fares from Highfields</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Highfields → Leicester city centre: from £5</li>
                    <li>Highfields → Leicester Royal Infirmary: from £4</li>
                    <li>Highfields → East Midlands Airport: from £28</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Times and fares are approximate and depend on traffic, pickup point, and vehicle type. You will
                    receive a fixed quote before you confirm.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services from Highfields</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>24/7 availability — including night shifts and early-morning hospital runs</li>
                    <li>Fixed prices confirmed at booking</li>
                    <li>DBS-checked, Leicester City Council licensed drivers</li>
                    <li>Hospital runs to LRI and other Leicester medical sites</li>
                    <li>
                      <Link
                        href="/airport-transfers-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Airport transfers
                      </Link>{" "}
                      to EMA, Birmingham, Heathrow, and all major UK airports
                    </li>
                    <li>Regular school runs with standing bookings</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="tel:01162338888"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                    >
                      0116 233 8888
                    </Link>
                  </div>
                </div>
              )}

              {isClarendonPark && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Taxis in Clarendon Park — journey times, fares &amp; services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Clarendon Park Road, Victoria Park, the University of Leicester, and London Road are all on your
                    doorstep — making Clarendon Park a favourite with students and young professionals. We also cover
                    neighbouring{" "}
                    <Link href="/taxis-in/knighton" className="text-[#06A0A6] hover:underline underline-offset-2">
                      Knighton
                    </Link>{" "}
                    and the wider south Leicester area.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Clarendon Park</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Clarendon Park → Leicester city centre: around 8–10 minutes in normal traffic</li>
                    <li>Clarendon Park → East Midlands Airport (EMA): around 25 minutes</li>
                    <li>Clarendon Park → Birmingham Airport (BHX): around 50 minutes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example fares from Clarendon Park</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Clarendon Park → Leicester city centre: from £5</li>
                    <li>Clarendon Park → East Midlands Airport: from £28</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Times and fares are approximate and depend on traffic, pickup point, and vehicle type. You will
                    receive a fixed quote before you confirm.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services from Clarendon Park</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>24/7 availability — including late nights and early mornings</li>
                    <li>Fixed prices confirmed at booking</li>
                    <li>DBS-checked, Leicester City Council licensed drivers</li>
                    <li>
                      <Link
                        href="/airport-transfers-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Airport transfers
                      </Link>{" "}
                      to EMA, Birmingham, Heathrow, and all major UK airports
                    </li>
                    <li>Regular school runs with standing bookings</li>
                    <li>Late-night rides home from the city centre and campus</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="tel:01162338888"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                    >
                      0116 233 8888
                    </Link>
                  </div>
                </div>
              )}

              {isEnderby && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Taxis in Enderby — journey times, fares &amp; services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Meridian Business Park, Enderby Leisure Centre, Mill Lane, and Foxhunter Roundabout are all within
                    easy reach — making Enderby a hub for corporate commuters and business park employees. We also
                    support{" "}
                    <Link
                      href="/corporate-taxi-account-leicester"
                      className="text-[#06A0A6] hover:underline underline-offset-2"
                    >
                      corporate taxi accounts
                    </Link>{" "}
                    for regular business travel across Leicestershire.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Enderby</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Enderby → Leicester city centre: around 15 minutes in normal traffic</li>
                    <li>Enderby → East Midlands Airport (EMA): around 10 minutes</li>
                    <li>Enderby → Birmingham Airport (BHX): around 45 minutes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example fares from Enderby</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Enderby → Leicester city centre: from £8</li>
                    <li>Enderby → East Midlands Airport: from £22</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Times and fares are approximate and depend on traffic, pickup point, and vehicle type. You will
                    receive a fixed quote before you confirm.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services from Enderby</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>24/7 availability — including early-morning shift starts and late-evening business park pickups</li>
                    <li>Fixed prices confirmed at booking</li>
                    <li>DBS-checked, Leicester City Council licensed drivers</li>
                    <li>
                      <Link
                        href="/airport-transfers-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Airport transfers
                      </Link>{" "}
                      to EMA, Birmingham, Heathrow, and all major UK airports
                    </li>
                    <li>
                      <Link
                        href="/corporate-taxi-account-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Corporate accounts
                      </Link>{" "}
                      for Meridian Business Park employers
                    </li>
                    <li>Regular Meridian Business Park runs for shift workers and office staff</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="tel:01162338888"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                    >
                      0116 233 8888
                    </Link>
                  </div>
                </div>
              )}

              {isNarborough && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Taxis in Narborough — journey times, fares &amp; services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Narborough Road, Narborough Train Station, Narborough Park, and neighbouring Leicester Forest East
                    are all within easy reach — making Narborough popular with commuters and families. We also cover{" "}
                    <Link href="/taxis-in/blaby" className="text-[#06A0A6] hover:underline underline-offset-2">
                      Blaby
                    </Link>{" "}
                    and the wider south-west Leicestershire area.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Narborough</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Narborough → Leicester city centre: around 15 minutes in normal traffic</li>
                    <li>Narborough → East Midlands Airport (EMA): around 10 minutes</li>
                    <li>Narborough → Birmingham Airport (BHX): around 45 minutes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example fares from Narborough</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Narborough → Leicester city centre: from £8</li>
                    <li>Narborough → East Midlands Airport: from £22</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Times and fares are approximate and depend on traffic, pickup point, and vehicle type. You will
                    receive a fixed quote before you confirm.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services from Narborough</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>24/7 availability — including early-morning station pickups and airport runs</li>
                    <li>Fixed prices confirmed at booking</li>
                    <li>DBS-checked, Leicester City Council licensed drivers</li>
                    <li>
                      <Link
                        href="/airport-transfers-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Airport transfers
                      </Link>{" "}
                      to EMA, Birmingham, Heathrow, and all major UK airports
                    </li>
                    <li>Train station pickups at Narborough Train Station</li>
                    <li>Regular school runs with standing bookings</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="tel:01162338888"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                    >
                      0116 233 8888
                    </Link>
                  </div>
                </div>
              )}

              {isBlaby && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Taxis in Blaby — journey times, fares &amp; services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Blaby Road, Grove Farm Triangle, Blaby Retail Park, and neighbouring Whetstone are all within easy
                    reach — making Blaby popular with families, commuters, and shoppers. We also cover{" "}
                    <Link href="/taxis-in/narborough" className="text-[#06A0A6] hover:underline underline-offset-2">
                      Narborough
                    </Link>{" "}
                    and the wider south Leicestershire area.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Blaby</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Blaby → Leicester city centre: around 12–15 minutes in normal traffic</li>
                    <li>Blaby → East Midlands Airport (EMA): around 15 minutes</li>
                    <li>Blaby → Birmingham Airport (BHX): around 50 minutes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example fares from Blaby</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Blaby → Leicester city centre: from £7</li>
                    <li>Blaby → East Midlands Airport: from £25</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Times and fares are approximate and depend on traffic, pickup point, and vehicle type. You will
                    receive a fixed quote before you confirm.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services from Blaby</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>24/7 availability — including early-morning airport runs and evening retail park pickups</li>
                    <li>Fixed prices confirmed at booking</li>
                    <li>DBS-checked, Leicester City Council licensed drivers</li>
                    <li>
                      <Link
                        href="/airport-transfers-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Airport transfers
                      </Link>{" "}
                      to EMA, Birmingham, Heathrow, and all major UK airports
                    </li>
                    <li>Regular school runs with standing bookings</li>
                    <li>Retail park trips to Blaby Retail Park and Grove Farm Triangle</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="tel:01162338888"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                    >
                      0116 233 8888
                    </Link>
                  </div>
                </div>
              )}

              {isKnighton && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Taxis in Knighton — journey times, fares &amp; services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Knighton Park, Victoria Park, and De Montfort University are all within easy reach — making
                    Knighton popular with students and professional commuters alike. We also cover neighbouring{" "}
                    <Link href="/taxis-in/oadby" className="text-[#06A0A6] hover:underline underline-offset-2">
                      Oadby
                    </Link>{" "}
                    and the wider south Leicester area.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Knighton</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Knighton → Leicester city centre: around 10–12 minutes in normal traffic</li>
                    <li>Knighton → East Midlands Airport (EMA): around 25 minutes</li>
                    <li>Knighton → Birmingham Airport (BHX): around 50 minutes</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example fares from Knighton</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>Knighton → Leicester city centre: from £6</li>
                    <li>Knighton → East Midlands Airport: from £28</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-4">
                    Times and fares are approximate and depend on traffic, pickup point, and vehicle type. You will
                    receive a fixed quote before you confirm.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Services from Knighton</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                    <li>24/7 availability — including late nights and early mornings</li>
                    <li>Fixed prices confirmed at booking</li>
                    <li>DBS-checked, Leicester City Council licensed drivers</li>
                    <li>
                      <Link
                        href="/airport-transfers-leicester"
                        className="text-[#06A0A6] hover:underline underline-offset-2"
                      >
                        Airport transfers
                      </Link>{" "}
                      to EMA, Birmingham, Heathrow, and all major UK airports
                    </li>
                    <li>Regular school runs with standing bookings</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] hover:bg-[#06939a] text-white px-6 py-3 rounded-lg font-semibold transition-smooth"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href="tel:01162338888"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#06A0A6] hover:text-white transition-smooth"
                    >
                      0116 233 8888
                    </Link>
                  </div>
                </div>
              )}

              {isBeaumontLeys && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 bg-[#F9FAFB]">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Taxis in Beaumont Leys — Shopping Centre, City &amp; EMA</h2>
                  <p className="text-gray-700 mb-3">
                    Beaumont Leys is a key area we serve every day. Whether you need a taxi from <strong>Beaumont Leys Shopping Centre</strong>, the surrounding estates or a ride into Leicester or the airport, Aylestone Kings provides reliable, fixed-fare taxis across Beaumont Leys – so you have a trusted local option alongside any other taxi service in the area.
                  </p>
                  <p className="text-gray-700 mb-3">
                    We pick up and drop off at the shopping centre, residential streets and local landmarks. Pre-book for airport runs or busy times, or call when you need an immediate taxi in Beaumont Leys.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example journey times from Beaumont Leys</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Beaumont Leys → Leicester City Centre: around 15–20 minutes in normal traffic</li>
                    <li>Beaumont Leys Shopping Centre → East Midlands Airport (EMA): around 25–35 minutes</li>
                    <li>Beaumont Leys → Fosse Park: around 15–20 minutes</li>
                    <li>Beaumont Leys → Leicester Royal Infirmary: around 15–20 minutes</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">
                    Times are approximate and depend on traffic. For live estimates and fixed prices, book online or call us.
                  </p>
                  <p className="mt-4 text-gray-800 font-medium">
                    Need a taxi in Beaumont Leys? Book online in seconds or call {contactInfo.phone} for fast pickup from the shopping centre or anywhere in Beaumont Leys – we’re here to get you there.
                  </p>
                </div>
              )}

              {/* Additional SEO blocks are hidden on priority pages to reduce cross-page duplication */}
              {!isPrioritySeoArea && (
                <div className="rounded-lg border border-gray-200 p-5">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Local destinations around {areaPlain}</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                    <li>Leicester City Centre • De Montfort University</li>
                    <li>University of Leicester • Leicester Royal Infirmary</li>
                    <li>Fosse Park • Highcross Shopping Centre</li>
                    <li>Leicester and South Wigston Train Stations</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">Times and distances vary with traffic. For exact ETAs, use our online booking.</p>
                </div>
              )}

              <AreaPageDeferredFAQ areaPlain={areaPlain} faqs={areaFaqs} />

            </div>
            <aside className="space-y-2 lg:sticky lg:top-28 h-fit lg:max-h-[calc(100vh-7rem)]">
              <div className="rounded-lg border border-gray-200 p-4 bg-gradient-to-r from-[#06A0A6]/10 to-transparent">
                <h3 className="font-semibold text-gray-900 mb-1">Quick contacts</h3>
                <p className="text-sm text-gray-700">Phone: <Link href={`tel:${contactInfo.phone}`} className="hover:underline underline-offset-2">{contactInfo.phone}</Link></p>
                <p className="text-sm text-gray-700">Email: <Link href={`mailto:${contactInfo.email}`} className="hover:underline underline-offset-2">{contactInfo.email}</Link></p>
                <p className="text-sm text-gray-700">Address: {contactInfo.address.street}, {contactInfo.address.city} {contactInfo.address.postcode}</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 bg-gradient-to-r from-[#06A0A6]/10 to-transparent">
                <h3 className="font-semibold text-gray-900 mb-1">Popular links</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  {footerData.airportLinks?.slice(0,6).map((ap) => (
                    <li key={ap.name}>
                      <Link href={ap.href} className="text-gray-700 hover:underline underline-offset-2">
                        {ap.name} Transfers
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 bg-gradient-to-r from-[#06A0A6]/10 to-transparent">      
                <h3 className="font-semibold text-gray-900 mb-1">Nearby areas we cover</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {relatedAreas.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="text-[#06A0A6] hover:underline underline-offset-2 inline-flex items-center gap-1">
                        <ArrowRight className="h-3 w-3"/> {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 bg-gradient-to-r from-[#06A0A6]/10 to-transparent">
                <h3 className="font-semibold text-gray-900 mb-1">Ready to book?</h3>
                <p className="text-sm text-gray-700 mb-2">Get an instant quote and confirm your ride in seconds.</p>
                <Link href={contactInfo.booking.online} className="inline-flex items-center bg-[#06A0A6] hover:bg-[#06939a] text-white px-4 py-2 rounded-md transition-smooth gap-2">
                  Book Online <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}