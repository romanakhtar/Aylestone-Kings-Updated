import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Plane, Clock, Shield, Car } from "lucide-react"
import { footerData, companyInfo, contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import { JSX } from "react"

type AreaItem = { name: string; href: string }

const areaMeta: Record<string, { title: string; description: string }> = {
  // 1. Aylestone
  aylestone: {
    title: "Taxis in Aylestone Leicester | Book Online | Aylestone Kings",
    description:
      "Need a taxi in Aylestone? Aylestone Kings has served the area since 1995. Fixed airport fares, 24/7 local rides, DBS-checked drivers. Call 0116 2338888.",
  },
  // 2. Leicester City Centre
  "leicester-city-centre": {
    title: "Taxi Leicester City Centre | Instant Pickup 24/7 | Aylestone Kings",
    description:
      "Fast taxi service in Leicester city centre. Highcross, railway station, restaurants, hotels — instant pickups day and night. Book online or call 0116 2338888.",
  },
  // 3. Oadby
  oadby: {
    title: "Taxi in Oadby | Fixed Fares, 24/7 Service | Aylestone Kings",
    description:
      "Reliable taxi service in Oadby, Leicester. Fixed airport fares, local rides, and 24/7 availability. Licensed drivers. Call 0116 2338888 or book online.",
  },
  // 4. Wigston
  wigston: {
    title: "Taxi in Wigston | 24/7 Airport Transfers & Local Rides | Aylestone Kings",
    description:
      "Need a taxi in Wigston? Aylestone Kings provides fast 24/7 service, fixed airport fares, and licensed drivers across Wigston and South Wigston. Call 0116 2338888.",
  },
  // 5. Evington
  evington: {
    title: "Taxi in Evington Leicester | Fast 24/7 Service | Aylestone Kings",
    description:
      "Professional taxi service in Evington, Leicester. Local rides, airport transfers, and 24/7 availability. Licensed, DBS-checked drivers. Call 0116 2338888.",
  },
  // 6. Belgrave
  belgrave: {
    title: "Taxi in Belgrave Leicester | 24/7 Local & Airport Taxi | Aylestone Kings",
    description:
      "Fast, reliable taxis in Belgrave, Leicester. Airport transfers, local rides, and 24/7 service from Aylestone Kings. Licensed drivers. Call 0116 2338888.",
  },
  // 7. Spinney Hills
  "spinney-hills": {
    title: "Taxi in Spinney Hills Leicester | Fast, Licensed & 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Spinney Hills, Leicester. Local journeys, airport transfers, school runs. Licensed drivers available 24/7. Call 0116 2338888.",
  },
  // 8. Highfields
  highfields: {
    title: "Taxi in Highfields Leicester | 24/7 Fast Pickups | Aylestone Kings",
    description:
      "Taxi service in Highfields, Leicester. Fast local pickups, airport transfers, and 24/7 availability from Aylestone Kings. Call 0116 2338888 or book online.",
  },
  // 9. Clarendon Park
  "clarendon-park": {
    title: "Taxi in Clarendon Park Leicester | 24/7 Service | Aylestone Kings",
    description:
      "Need a taxi in Clarendon Park? Aylestone Kings offers fast pickups, airport transfers, and 24/7 service. Licensed drivers. Call 0116 2338888.",
  },
  // 10. Knighton
  knighton: {
    title: "Taxi in Knighton Leicester | Fixed Fares, 24/7 | Aylestone Kings",
    description:
      "Taxi service in Knighton, Leicester. Airport transfers, local rides, school runs — 24/7. Licensed DBS-checked drivers. Call 0116 2338888.",
  },
  // 11. Hamilton
  hamilton: {
    title: "Taxi in Hamilton Leicester | 24/7 Fixed Fares | Aylestone Kings",
    description:
      "Reliable 24/7 taxi service in Hamilton, Leicester. Local rides, airport transfers, and school runs from Aylestone Kings. Call 0116 2338888.",
  },
  // 12. Beaumont Leys
  "beaumont-leys": {
    title: "Taxi in Beaumont Leys Leicester | 24/7 Service | Aylestone Kings",
    description:
      "Fast taxi service in Beaumont Leys, Leicester. Airport transfers, local rides, school runs 24/7. Licensed drivers. Call 0116 2338888 or book online.",
  },
  // 13. Braunstone
  braunstone: {
    title: "Taxi in Braunstone Leicester | Fast & Affordable | Aylestone Kings",
    description:
      "Dependable taxi service in Braunstone, Leicester. Local rides, airport transfers, 24/7 availability. Call Aylestone Kings on 0116 2338888.",
  },
  // 14. Thurmaston
  thurmaston: {
    title: "Taxi in Thurmaston Leicester | 24/7 Fixed Fares | Aylestone Kings",
    description:
      "Reliable taxi service in Thurmaston, Leicestershire. Airport transfers, local rides, 24/7 availability. Licensed drivers. Call 0116 2338888.",
  },
  // 15. Syston
  syston: {
    title: "Taxi in Syston Leicestershire | Airport Transfers & 24/7 | Aylestone Kings",
    description:
      "Fast taxi service in Syston, Leicestershire. Fixed airport fares, local rides, licensed drivers. Available 24/7. Call 0116 2338888 or book online.",
  },
  // 16. Birstall
  birstall: {
    title: "Taxi in Birstall Leicester | Airport Transfers & 24/7 | Aylestone Kings",
    description:
      "Reliable 24/7 taxis in Birstall, Leicestershire. Fixed airport fares, local rides, licensed drivers. Call Aylestone Kings on 0116 2338888.",
  },
  // 17. Glenfield
  glenfield: {
    title: "Taxi in Glenfield Leicester | Glenfield Hospital & 24/7 | Aylestone Kings",
    description:
      "Taxi service in Glenfield, Leicestershire. Hospital transport, airport transfers, local rides. 24/7 availability. Call 0116 2338888.",
  },
  // 18. Blaby
  blaby: {
    title: "Taxi in Blaby Leicestershire | Fixed Fares & 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Blaby, Leicestershire. Local rides, airport transfers, 24/7 availability. Call Aylestone Kings on 0116 2338888.",
  },
  // 19. Narborough
  narborough: {
    title: "Taxi in Narborough Leicestershire | Airport Transfers & 24/7 | Aylestone Kings",
    description:
      "Fast taxi service in Narborough, Leicestershire. Fixed airport fares, local rides, 24/7 service from Aylestone Kings. Call 0116 2338888.",
  },
  // 20. Enderby
  enderby: {
    title: "Taxi in Enderby Leicestershire | 24/7 Fixed Fares | Aylestone Kings",
    description:
      "Reliable 24/7 taxi service in Enderby, Leicestershire. Airport transfers, local rides, licensed drivers. Call Aylestone Kings on 0116 2338888.",
  },
  // 21. Loughborough
  loughborough: {
    title: "Taxi in Loughborough | Airport Transfers & 24/7 | Aylestone Kings",
    description:
      "Professional taxi service in Loughborough. Airport transfers to EMA, BHX & Heathrow, student travel, local rides. Fixed fares. Call 0116 2338888.",
  },
  // 22. Hinckley
  hinckley: {
    title: "Taxi in Hinckley | Fixed Prices, Airport Transfers | Aylestone Kings",
    description:
      "Need a taxi in Hinckley? Aylestone Kings offers fixed-price journeys, airport transfers, and 24/7 service. Licensed drivers. Call 0116 2338888.",
  },
  // 23. Coalville
  coalville: {
    title: "Taxi in Coalville Leicestershire | Fixed Fares & 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Coalville, Leicestershire. Airport transfers to EMA & BHX, local rides, 24/7 availability. Call 0116 2338888.",
  },
  // 24. Melton Mowbray
  "melton-mowbray": {
    title: "Taxi in Melton Mowbray | Airport Transfers & 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Melton Mowbray. Airport transfers to EMA, BHX & Heathrow, local rides, 24/7. Call Aylestone Kings on 0116 2338888.",
  },
  // 25. Market Harborough
  "market-harborough": {
    title: "Taxi in Market Harborough | Airport Transfers & 24/7 | Aylestone Kings",
    description:
      "Professional taxi service in Market Harborough. Fixed airport fares, local rides, licensed drivers, 24/7 availability. Call 0116 2338888.",
  },
  // 26. Rushey Mead
  "rushey-mead": {
    title: "Taxi in Rushey Mead Leicester | 24/7 Fast Pickups | Aylestone Kings",
    description:
      "Reliable taxi service in Rushey Mead, Leicester. Local rides, airport transfers, school runs. 24/7 availability. Call 0116 2338888.",
  },
  // 27. Stoneygate
  stoneygate: {
    title: "Taxi in Stoneygate Leicester | Professional 24/7 Service | Aylestone Kings",
    description:
      "Premium taxi service in Stoneygate, Leicester. Airport transfers, local rides, 24/7 availability. Licensed drivers. Call 0116 2338888.",
  },
  // 28. South Wigston
  "south-wigston": {
    title: "Taxi in South Wigston Leicester | 24/7 & Fixed Fares | Aylestone Kings",
    description:
      "Taxi service in South Wigston, Leicestershire. Airport transfers, local rides, station pickups. 24/7 from Aylestone Kings. Call 0116 2338888.",
  },
  // 29. Humberstone
  humberstone: {
    title: "Taxi in Humberstone Leicester | Fast 24/7 Service | Aylestone Kings",
    description:
      "Reliable taxi service in Humberstone, Leicester. Local rides, airport transfers, 24/7 availability. Call Aylestone Kings on 0116 2338888.",
  },
  // 30. Thurnby Lodge
  "thurnby-lodge": {
    title: "Taxi in Thurnby Lodge Leicester | 24/7 Service | Aylestone Kings",
    description:
      "Fast taxi service in Thurnby Lodge, Leicester. Local rides, airport transfers, 24/7 availability from Aylestone Kings. Call 0116 2338888.",
  },
  // 31. Westcotes
  westcotes: {
    title: "Taxi in Westcotes Leicester | Fast & 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Westcotes, Leicester. Local rides, airport transfers, 24/7 service from Aylestone Kings. Call 0116 2338888.",
  },
  // 32. Eyres Monsell
  "eyres-monsell": {
    title: "Taxi in Eyres Monsell Leicester | 24/7 Service | Aylestone Kings",
    description:
      "Fast, affordable taxi service in Eyres Monsell, Leicester. Local rides, airport transfers, 24/7 availability. Call 0116 2338888.",
  },
  // 33. Glen Parva
  "glen-parva": {
    title: "Taxi in Glen Parva Leicester | Fixed Fares & 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Glen Parva, Leicestershire. Airport transfers, local rides, 24/7 from Aylestone Kings. Call 0116 2338888.",
  },
  // 34. Fosse Park
  "fosse-park": {
    title: "Taxi to Fosse Park Leicester | Shopping & 24/7 | Aylestone Kings",
    description:
      "Need a taxi to Fosse Park, Leicester? Aylestone Kings provides fast pickups and drop-offs at the retail park. Call 0116 2338888 or book online.",
  },
  // 35. Braunstone Town
  "braunstone-town": {
    title: "Taxi in Braunstone Town Leicestershire | 24/7 | Aylestone Kings",
    description:
      "Taxi service in Braunstone Town, Leicestershire. Local rides, airport transfers, 24/7 availability. Call Aylestone Kings on 0116 2338888.",
  },
  // 36. Groby
  groby: {
    title: "Taxi in Groby Leicestershire | Airport Transfers & 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Groby, Leicestershire. Airport transfers to EMA and BHX, local rides, 24/7 availability. Call 0116 2338888.",
  },
  // 37. Wigston Fields
  "wigston-fields": {
    title: "Taxi in Wigston Fields Leicester | 24/7 Fixed Fares | Aylestone Kings",
    description:
      "Fast taxi service in Wigston Fields, Leicestershire. Airport transfers, local rides, 24/7 availability. Call Aylestone Kings on 0116 2338888.",
  },
  // 38. Broughton Astley
  "broughton-astley": {
    title: "Taxi in Broughton Astley Leicestershire | 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Broughton Astley. Airport transfers, local rides, 24/7 availability from Aylestone Kings. Call 0116 2338888.",
  },
  // 39. Cosby
  cosby: {
    title: "Taxi in Cosby Leicestershire | Fixed Fares & 24/7 | Aylestone Kings",
    description:
      "Reliable 24/7 taxi service in Cosby, Leicestershire. Airport transfers, local rides, licensed drivers. Call Aylestone Kings on 0116 2338888.",
  },
  // 40. Countesthorpe
  countesthorpe: {
    title: "Taxi in Countesthorpe Leicestershire | 24/7 Service | Aylestone Kings",
    description:
      "Fast taxi service in Countesthorpe, Leicestershire. Airport transfers, local rides, 24/7. Licensed drivers. Call 0116 2338888.",
  },
  // 41. Kibworth
  kibworth: {
    title: "Taxi in Kibworth Leicestershire | Airport Transfers & 24/7 | Aylestone Kings",
    description:
      "Reliable taxi service in Kibworth, Leicestershire. Fixed airport fares, local rides, 24/7 availability. Call Aylestone Kings on 0116 2338888.",
  },
  // 42. Lutterworth
  lutterworth: {
    title: "Taxi in Lutterworth Leicestershire | Fixed Fares & 24/7 | Aylestone Kings",
    description:
      "Professional taxi service in Lutterworth, Leicestershire. Airport transfers to BHX & EMA, local rides, 24/7. Call 0116 2338888.",
  },
  // 43. Whetstone
  whetstone: {
    title: "Taxi in Whetstone Leicestershire | 24/7 Fixed Fares | Aylestone Kings",
    description:
      "Fast, reliable taxi service in Whetstone, Leicestershire. Airport transfers, local rides, 24/7 availability. Call Aylestone Kings on 0116 2338888.",
  },
  // 44. University & College Areas – De Montfort University & University of Leicester
  "de-montfort-university": {
    title: "Taxi to De Montfort University Leicester | Fast Student Service | Aylestone Kings",
    description:
      "Need a taxi to De Montfort University? Aylestone Kings provides fast, affordable rides to DMU 24/7. Airport transfers, city rides, student-friendly. Call 0116 2338888.",
  },
  "university-of-leicester": {
    title: "Taxi to University of Leicester | 24/7 Student Rides | Aylestone Kings",
    description:
      "Need a taxi to the University of Leicester? Aylestone Kings provides reliable 24/7 student-friendly rides, airport transfers, and local journeys. Call 0116 2338888.",
  },
}

type AreaContent = {
  body: JSX.Element
  faqs: { question: string; answer: string }[]
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
  // 34. Fosse Park
  "fosse-park": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Fosse Park is one of the East Midlands&apos; busiest out-of-town retail parks, home to dozens of major stores
          including Next, M&S, Boots, Currys, and many more. It&apos;s located on the western side of Leicester, just
          off the A563 ring road, and Aylestone Kings provides regular taxi pickups and drop-offs at Fosse Park from
          all areas of Leicester and Leicestershire.
        </p>
        <p className="text-gray-700">
          Whether you&apos;re heading out for a big shopping trip and want a comfortable ride there and back with your
          bags, or you&apos;ve finished a shift working at one of the stores and need a lift home, we&apos;re just a
          call away. Our drivers are familiar with the retail park layout and all the entrance and exit points.
        </p>
        <p className="text-gray-700">
          For visitors from further afield — Oadby, Wigston, Narborough, Hinckley, and beyond — we offer fixed-price
          fares to and from Fosse Park. No meter running, no estimate — just a straightforward price when you book.
        </p>
        <p className="text-gray-700">
          Group bookings are available too. Our 6 and 8-seater vehicles are great for friends heading to Fosse Park
          together. Call 0116 2338888 or book online anytime.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How much is a taxi from Leicester city centre to Fosse Park?",
        answer:
          "A taxi from Leicester city centre to Fosse Park typically costs £8–£12. The journey takes approximately 15 minutes via the A563.",
      },
      {
        question: "Do you pick up from inside Fosse Park?",
        answer:
          "Yes — we collect from Fosse Park at a specified meeting point. Call when you're ready and your driver will be there within minutes.",
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
  // 18. Blaby
  blaby: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Blaby is a market town in south Leicestershire, approximately 5 miles south of Leicester city centre. Known
          for its weekly market, good local amenities, and family-friendly atmosphere, Blaby has a steady demand for
          taxi services — and Aylestone Kings covers the whole area with 24/7 professional transport.
        </p>
        <p className="text-gray-700">
          We serve all of Blaby including Lutterworth Road, the town centre, Countesthorpe Road, and the residential
          streets spreading south towards Glen Parva. Whether it&apos;s a trip into Leicester for shopping or work, a
          late-night pickup after an evening out, or a hospital appointment, our drivers are on hand whenever you need
          us.
        </p>
        <p className="text-gray-700">
          Blaby&apos;s position close to the M69 junction gives excellent access for airport transfers — particularly
          Birmingham Airport (around 35–40 minutes) and East Midlands Airport (approximately 25–30 minutes). All our
          airport fares are fixed, agreed before you travel, and include flight monitoring for arrivals.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 or WhatsApp +447888873795 to book anytime.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How much is a taxi from Blaby to Leicester city centre?",
        answer:
          "A taxi from Blaby to Leicester city centre typically costs £10–£14. The journey takes around 15–20 minutes via Narborough Road or the A426.",
      },
      {
        question: "Do you cover the Blaby Retail Park area?",
        answer:
          "Yes — we cover the Blaby area including retail parks and business addresses. Call or book online for a quick pickup.",
      },
    ],
  },
  // 19. Narborough
  narborough: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Narborough is a popular commuter village south-west of Leicester, with its own railway station providing
          direct services to Leicester and Nuneaton. The village has grown significantly in recent years with new
          housing developments attracting families who want a quieter setting while still being close to the city.
          Aylestone Kings provides full taxi coverage across Narborough and the surrounding area around the clock.
        </p>
        <p className="text-gray-700">
          We cover Narborough Village, the new housing developments off Coventry Road, and the areas around Narborough
          station. For passengers arriving on early trains or needing a connection that doesn&apos;t fit the timetable,
          we&apos;re the ideal solution.
        </p>
        <p className="text-gray-700">
          Airport transfers are one of our most common bookings from Narborough. The village sits close to the M69,
          giving excellent access to Birmingham Airport (around 35–40 minutes) — and East Midlands Airport via the M1
          is typically 25–30 minutes. Fixed fares, no meters, and flight monitoring included on all airport bookings.
        </p>
        <p className="text-gray-700">
          Book via call, WhatsApp, or online. We run 24 hours a day every day of the year.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Do you collect from Narborough railway station?",
        answer:
          "Yes — we collect from Narborough station regularly, especially for early morning or late-night services when other transport options are limited.",
      },
      {
        question: "How much is a taxi from Narborough to Birmingham Airport?",
        answer:
          "Fixed-price taxis from Narborough to Birmingham Airport (BHX) start from approximately £40–£50 via the M69. Price is confirmed at booking.",
      },
    ],
  },
  // 20. Enderby
  enderby: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Enderby is a village in south-west Leicestershire, sitting between Narborough and the Meridian Business Park
          — one of the East Midlands&apos; largest commercial areas. Aylestone Kings covers Enderby and the Meridian
          Business Park corridor with professional taxi service 24 hours a day, serving both residents and the many
          businesses and employees based in the area.
        </p>
        <p className="text-gray-700">
          The Meridian Business Park is a major employer in the region and we regularly transport staff to and from the
          business park — early morning and late evening runs are particularly common. Corporate accounts are available
          for businesses in the area with regular travel requirements.
        </p>
        <p className="text-gray-700">
          For residents, Enderby&apos;s location close to junction 21 of the M1 makes it an excellent starting point
          for airport transfers. East Midlands Airport is approximately 20 minutes from Enderby, and Birmingham Airport
          is around 30–35 minutes via the M69. All airport fares are fixed, all flights monitored.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 or book online anytime.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Do you cover the Meridian Business Park in Enderby?",
        answer:
          "Yes — we cover the Meridian Business Park and surrounding business addresses in Enderby. Corporate accounts available for regular bookings.",
      },
      {
        question: "How far is Enderby from East Midlands Airport?",
        answer:
          "Enderby is one of the closest Leicester area towns to East Midlands Airport — approximately 15–20 minutes via the M1 junction 24.",
      },
    ],
  },
  // 21. Loughborough
  loughborough: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Loughborough is one of the East Midlands&apos; most dynamic towns — home to Loughborough University
          (consistently ranked among the UK&apos;s top ten), a thriving town centre, and excellent road links via the
          A6 and M1. Aylestone Kings covers Loughborough and surrounding villages with professional taxi services 24
          hours a day.
        </p>
        <p className="text-gray-700">
          We serve a wide range of Loughborough passengers: university students and staff, professionals commuting to
          Leicester or Nottingham, families visiting the town&apos;s parks and leisure facilities, and business
          travellers heading to and from East Midlands Airport. Our drivers travel the A6 corridor regularly and know
          the best routes in and out at every time of day.
        </p>
        <p className="text-gray-700">
          Loughborough&apos;s proximity to East Midlands Airport — just 8 miles away — makes us a popular choice for
          airport transfers. We offer fixed fares with no surprises, flight tracking, and meet-and-greet for arriving
          passengers. For students flying home at the end of term, our 6 and 8-seater minibuses are ideal for groups
          sharing the cost.
        </p>
        <p className="text-gray-700">
          We also run to Birmingham, Heathrow, Gatwick, Luton, Stansted, and Manchester airports — all fully fixed, all
          fully reliable. Call 0116 2338888 or book online anytime.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How much is a taxi from Loughborough to East Midlands Airport?",
        answer:
          "Fixed-price taxis from Loughborough to East Midlands Airport start from approximately £18–£25 — one of the shortest airport runs in the region at around 15 minutes.",
      },
      {
        question: "Do you provide student taxi services in Loughborough?",
        answer:
          "Yes — we're popular with Loughborough University students for airport runs, city connections, and end-of-term travel. Group minibus bookings are available.",
      },
    ],
  },
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
  // 17. Glenfield
  glenfield: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Glenfield is a residential village on the western edge of Leicester, best known for Glenfield Hospital — one
          of the region&apos;s most important cardiac centres and one of the UK&apos;s leading specialist hospitals.
          Aylestone Kings covers Glenfield and the surrounding area with professional, 24/7 taxi service, and we
          regularly transport patients and visitors to and from the hospital at all hours.
        </p>
        <p className="text-gray-700">
          We understand that hospital journeys are often stressful, so our drivers are trained to be patient, helpful,
          and supportive. Whether you&apos;re visiting a relative, attending an outpatient appointment, or being
          discharged after a stay, we&apos;ll make the journey as comfortable as possible.
        </p>
        <p className="text-gray-700">
          Beyond hospital transport, Glenfield is a well-established residential area with strong demand for airport
          transfers. The village sits close to junction 21A of the M1, making East Midlands Airport one of the quickest
          runs from anywhere in west Leicester — typically 20–25 minutes. All fares fixed, all airports covered.
        </p>
        <p className="text-gray-700">
          Call 0116 2338888 anytime — we&apos;re here 24 hours a day, seven days a week.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "Do you provide taxis to Glenfield Hospital?",
        answer:
          "Yes — we transport patients, visitors, and staff to and from Glenfield Hospital around the clock. Our drivers are patient and experienced with medical transport.",
      },
      {
        question: "How far is Glenfield from Leicester city centre?",
        answer:
          "Glenfield is approximately 4 miles west of Leicester city centre — usually a 12–18 minute taxi journey via the A50 or B5380.",
      },
    ],
  },
  // 10. Knighton
  knighton: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Knighton is a desirable south Leicester suburb known for its large Victorian and Edwardian houses, tree-lined
          roads, and excellent school catchments. Aylestone Kings has served Knighton passengers for over 30 years,
          covering Knighton Park Road, Welford Road, Knighton Lane, and the quieter residential streets that run
          between Oadby and Clarendon Park.
        </p>
        <p className="text-gray-700">
          The area has a steady demand for professional taxi services — hospital appointments at Leicester Royal
          Infirmary, commutes into the city centre, school runs to local academies, and university connections for
          staff and students. Our drivers are in this part of Leicester constantly and can typically be with you within
          5–10 minutes.
        </p>
        <p className="text-gray-700">
          Airport transfers are a particular strength for Knighton passengers. The area&apos;s position gives quick
          access to the M1 via the A563, making for efficient runs to East Midlands Airport (roughly 25–30 minutes),
          Birmingham Airport (50 minutes), and beyond. All fares are fixed — no meters, no surprises.
        </p>
        <p className="text-gray-700">Book anytime via phone, WhatsApp, or our online booking system.</p>
      </div>
    ),
    faqs: [
      {
        question: "How much is a taxi from Knighton to Leicester Royal Infirmary?",
        answer:
          "A taxi from Knighton to Leicester Royal Infirmary is typically £6–£10 depending on exact pickup and drop-off points. The journey takes around 10–15 minutes.",
      },
      {
        question: "Do you offer regular taxi bookings from Knighton?",
        answer:
          "Yes — we can set up regular bookings for commutes, school runs, or medical appointments. Contact us to arrange a standing order.",
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
  // 13. Braunstone
  braunstone: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Braunstone is a west Leicester neighbourhood with a strong community spirit and close proximity to the city&apos;s
          retail parks and business areas. Aylestone Kings covers all of Braunstone — Braunstone Lane, Kingsway,
          Linkway, and the surrounding residential areas — with fast, reliable taxi service round the clock.
        </p>
        <p className="text-gray-700">
          The area has good road connections to the city centre via Narborough Road and the ring road, and our drivers
          know the quickest routes at every time of day. For residents without a car, we&apos;re a practical and
          affordable option for shopping runs, medical appointments, and commutes into the city.
        </p>
        <p className="text-gray-700">
          Braunstone&apos;s position west of Leicester also makes it a strong location for airport transfers. East
          Midlands Airport is typically 25–30 minutes away and our fixed fares mean no meter anxiety when you&apos;re
          travelling with family and luggage. We cover all major UK airports from Braunstone.
        </p>
        <p className="text-gray-700">
          For group travel, our 6 and 8-seater vehicles are popular among families and friends heading to the airport
          together. Pre-book to guarantee availability.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Braunstone from Leicester city centre?",
        answer:
          "Braunstone is approximately 3 miles west of Leicester city centre — usually a 10–15 minute taxi journey via Narborough Road or the ring road.",
      },
      {
        question: "Do you cover the Braunstone Lane area?",
        answer:
          "Yes — we cover all of Braunstone including Braunstone Lane, Linkway, Kingsway, and the surrounding streets.",
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
  // 5. Evington
  evington: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Evington is a quiet, established residential suburb on the eastern edge of Leicester, popular with families
          and professionals who want green space without losing easy access to the city. Aylestone Kings covers
          Evington and the surrounding area — including Evington Lane, Stoughton Road, and the Evington Valley — with
          reliable pickups 24 hours a day.
        </p>
        <p className="text-gray-700">
          The area is well positioned for journeys into Leicester city centre (typically 10–15 minutes), and our
          drivers are familiar with the back roads that avoid traffic on the main A6 and Evington Road routes. We pick
          up regularly from Evington&apos;s residential streets, local schools, and the GP surgery area.
        </p>
        <p className="text-gray-700">
          For airport runs, Evington is conveniently placed for East Midlands Airport via the A47 eastbound — one of
          the cleaner routes out of Leicester. All our airport fares are fixed, and we track your flight so there are
          never any timing issues on return trips.
        </p>
        <p className="text-gray-700">
          Whether it&apos;s a hospital appointment at Leicester General, a night out in the city, or a 4am airport
          transfer, we&apos;re here whenever you need us. Call 0116 2338888 or book online.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Evington from Leicester city centre?",
        answer:
          "Evington is approximately 3 miles east of Leicester city centre — usually around 10–15 minutes by taxi depending on traffic on Evington Road.",
      },
      {
        question: "Do you cover the Stoughton Road area in Evington?",
        answer:
          "Yes — we cover all of Evington including Stoughton Road, Evington Lane, Evington Valley Road, and the surrounding residential streets.",
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
  // 8. Highfields
  highfields: {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Highfields is one of Leicester&apos;s most culturally diverse and vibrant inner-city neighbourhoods, located
          just a mile from the city centre. Known for its fantastic range of restaurants along Narborough Road and
          London Road, its busy community life, and its proximity to both De Montfort University and the University of
          Leicester, Highfields generates a constant demand for taxi services — and Aylestone Kings is always here to
          meet it.
        </p>
        <p className="text-gray-700">
          We cover all of Highfields including Mere Road, St Peter&apos;s Road, Tichborne Street, and the London Road
          corridor. Our drivers navigate this part of Leicester daily and know the quickest routes in and out at any
          time of day.
        </p>
        <p className="text-gray-700">
          Highfields is a popular area for students, and we offer competitive regular rides to and from DMU, the
          University of Leicester, and Leicester College. Early-morning airport runs from Highfields to East Midlands
          Airport are another regular booking — approximately 30 minutes with a fixed fare agreed upfront.
        </p>
        <p className="text-gray-700">
          For late nights out in Highfields or the adjacent city centre, our 24/7 service means there&apos;s always a
          safe, professional ride home when you need it.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Highfields from De Montfort University?",
        answer:
          "Highfields borders the DMU campus — it's often a 5-minute walk, but for luggage, late nights, or bad weather, a taxi is 2–3 minutes and a few pounds.",
      },
      {
        question: "Do you pick up from Highfields at night?",
        answer:
          "Yes — 24/7, every night of the week including weekends and bank holidays. No surcharge for late-night journeys from Highfields.",
      },
    ],
  },
  // 9. Clarendon Park
  "clarendon-park": {
    body: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Clarendon Park is one of Leicester&apos;s most sought-after residential neighbourhoods — a leafy Victorian
          suburb popular with university staff, young professionals, and families drawn to its independent cafes,
          boutique shops, and community atmosphere along Queens Road. Aylestone Kings covers Clarendon Park and the
          surrounding streets with fast, professional taxi service 24 hours a day.
        </p>
        <p className="text-gray-700">
          We regularly pick up from Queens Road, Clarendon Park Road, Welford Road, and the residential streets around
          Victoria Park. Our drivers are familiar with this part of south Leicester and typically reach Clarendon Park
          within 5–10 minutes of booking.
        </p>
        <p className="text-gray-700">
          For university connections, Clarendon Park sits between the University of Leicester campus and the city
          centre — both a short ride away. Airport transfers are popular in the area too, particularly early-morning
          runs to East Midlands and Birmingham airports with fixed fares and flight tracking included.
        </p>
        <p className="text-gray-700">
          We also cover Victoria Park events — concerts, Leicester Marathon, and community events — when the area gets
          busy. Pre-booking is advised on event days. Call 0116 2338888 or book online anytime.
        </p>
      </div>
    ),
    faqs: [
      {
        question: "How far is Clarendon Park from Leicester city centre?",
        answer:
          "Clarendon Park is about 1.5 miles south of the city centre — usually a 5–10 minute taxi ride via Welford Road or London Road.",
      },
      {
        question: "Do you cover Victoria Park events from Clarendon Park?",
        answer:
          "Yes — we cover Victoria Park pickups and drop-offs for events, marathons, and markets. Pre-book for busy event days.",
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
    ? `Taxi to ${areaName} | Fixed Prices, 24/7 Service | Book Instantly | Aylestone Taxis`
    : `Taxi in ${areaName} | Fixed Prices, 24/7 Service | Book Instantly | Aylestone Taxis`
  const description = customMeta
    ? customMeta.description
    : isDestination
    ? `Book taxi to ${areaName} - local taxi service with fixed fares. Fast booking, 24/7 availability, licensed drivers. Book your taxi to ${areaName} online now or call 0116 2338888.`
    : `Taxi in ${areaName} - local taxi service available 24/7. Book online now for fast pickups, fixed fares, and professional drivers. Affordable taxi in ${areaName} with airport transfers. Call 0116 2338888 or book instantly.`
  
  const baseUrl = 'https://aylestone-taxis.co.uk'
  const canonicalUrl = `${baseUrl}/taxis-in/${slug}`
  
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
  const relatedAreas = getAllAreas()
    .filter((a) => slugFromHref(a.href) !== slug)
    .slice(0, 6)

  const isSupermarketDestination = supermarketDestinationSlugs.has(slug)
  const isHospitalArea = hospitalSlugs.has(slug)
  const isUniversityArea = universitySlugs.has(slug)
  const isStationArea = stationSlugs.has(slug)
  const isStadiumArea = stadiumSlugs.has(slug)
  const isBusinessParkArea = businessParkSlugs.has(slug)
  const isFaithPlaceArea = faithPlaceSlugs.has(slug)

  const faqSeen = new Set<string>()
  const renderFaq = (question: string, answer: string) => {
    if (faqSeen.has(question)) return null
    faqSeen.add(question)
    return (
      <details key={question} className="group border border-gray-100 rounded-md p-4">
        <summary className="cursor-pointer text-gray-900 font-medium">{question}</summary>
        <p className="mt-2 text-gray-700">{answer}</p>
      </details>
    )
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative text-white bg-gradient-to-br from-[#0F0D3E] via-[#0F1B5A] to-[#0A7F84] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-white/80">{companyInfo.name}</p>
              <h1 className="mt-2 text-3xl text-white sm:text-4xl md:text-5xl font-extrabold leading-tight">
                {isDestination ? `Taxi to ${areaPlain}` : `Taxi Service in ${areaPlain}`} – Aylestone Taxis
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
              {areaContent[slug] ? (
                <>
                  <div>{areaContent[slug].body}</div>

                  <div className="pt-2">
                    <Link
                      href={contactInfo.booking.online}
                      className="inline-flex items-center bg-[#06A0A6] hover:bg-[#06939a] text-white px-5 py-2.5 rounded-lg shadow-professional hover:shadow-professional-lg transition-smooth gap-2"
                    >
                      {isDestination ? `Book Taxi to ${areaPlain}` : `Book Your Taxi in ${areaPlain}`}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
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
                          <li>{areaPlain} → Birmingham Airport (BHX)</li>
                          <li>{areaPlain} → East Midlands Airport (EMA)</li>
                          <li>{areaPlain} → London Heathrow (LHR)</li>
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

              {/* Additional SEO blocks: Local destinations and estimated times */}
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

              {/* FAQs - combined: custom plus generic, with no duplicates */}
              <div id="faqs" className="rounded-lg border border-gray-200 p-5">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQs about taxi in {areaPlain}</h2>
                <div className="space-y-4">
                  {/* Custom FAQs for this area (if any) */}
                  {areaContent[slug]?.faqs.map((faq) => renderFaq(faq.question, faq.answer))}

                  {/* Area-specific extras for Wigston, Oadby, Beaumont Leys */}
                  {isWigston &&
                    [
                      {
                        question: "Do you provide taxis from Wigston town centre and Bell Street?",
                        answer:
                          "Yes. Our Wigston taxi service covers the town centre, Bell Street and nearby residential areas. You can book quick local trips, nights out, shopping journeys and more with fixed, competitive prices.",
                      },
                      {
                        question: "Can I get a taxi from South Wigston station?",
                        answer:
                          "Absolutely. We regularly pick up from South Wigston station. Pre-book your taxi with your train time, or call when you arrive and we will send the nearest available driver.",
                      },
                      {
                        question: "How long does a taxi from Wigston to Leicester city centre usually take?",
                        answer:
                          "Typical journey times from Wigston to Leicester city centre are around 15–20 minutes in normal traffic. During rush hour it may take a little longer, so we recommend allowing extra time.",
                      },
                    ].map((f) => renderFaq(f.question, f.answer))}

                  {isOadby &&
                    [
                      {
                        question: "Do you provide taxis to Leicester Racecourse from Oadby?",
                        answer:
                          "Yes. Our Oadby taxi service takes you to Leicester Racecourse for race days and events. Pre-book ahead of popular fixtures to ensure your ride.",
                      },
                      {
                        question: "Can I get a taxi from Stoughton Road in Oadby?",
                        answer:
                          "Absolutely. We cover Stoughton Road and the wider Oadby area. Book online or call for pickups to Leicester, the Racecourse, hospitals and airports.",
                      },
                      {
                        question: "How long does a taxi from Oadby to Leicester city centre usually take?",
                        answer:
                          "Typical journey times from Oadby to Leicester city centre are around 10–15 minutes in normal traffic. Rush hour or race days may add a few minutes.",
                      },
                    ].map((f) => renderFaq(f.question, f.answer))}

                  {isBeaumontLeys &&
                    [
                      {
                        question: "Do you provide taxis from Beaumont Leys Shopping Centre?",
                        answer:
                          "Yes. We pick up and drop off at Beaumont Leys Shopping Centre and the surrounding area. Book for shopping trips, work or evenings out – we cover Beaumont Leys 24/7.",
                      },
                      {
                        question: "How long does a taxi from Beaumont Leys to Leicester city centre take?",
                        answer:
                          "Typical journey times from Beaumont Leys to Leicester city centre are around 15–20 minutes in normal traffic. Rush hour can add a few minutes.",
                      },
                      {
                        question: "Can I book an East Midlands Airport taxi from Beaumont Leys?",
                        answer:
                          "Yes. We offer fixed-fare East Midlands Airport (EMA) transfers from Beaumont Leys with flight tracking and optional meet & greet. Pre-book for the best price.",
                      },
                    ].map((f) => renderFaq(f.question, f.answer))}

                  {/* Generic FAQs for all areas */}
                  {[
                    {
                      question: `Where can I find an affordable taxi in ${areaPlain}?`,
                      answer:
                        `Aylestone Kings provides an affordable taxi in ${areaPlain} with fixed fares and no hidden charges. Book online, by phone, or WhatsApp for competitive rates.`,
                    },
                    {
                      question: `Do you offer airport taxi services from ${areaPlain}?`,
                      answer:
                        `Yes. Our airport taxi service covers all major UK airports from ${areaPlain}, including Birmingham, East Midlands, Heathrow, and Gatwick with fixed pricing.`,
                    },
                    {
                      question: `How much does an affordable taxi in ${areaPlain} cost?`,
                      answer:
                        `Our affordable taxi in ${areaPlain} offers competitive rates with upfront quotes. Local journeys start from competitive prices, and airport transfers have fixed fares.`,
                    },
                    {
                      question: `Is your taxi in ${areaPlain} available 24/7?`,
                      answer:
                        `Yes. Our taxi in ${areaPlain} operates 24/7, including weekends and bank holidays. Fast pickups available throughout Leicester.`,
                    },
                    {
                      question: `Can I pre-book an airport taxi from ${areaPlain}?`,
                      answer:
                        `Absolutely. Pre-book your airport taxi from ${areaPlain} for peace of mind. We monitor flights and provide meet & greet service on request.`,
                    },
                    {
                      question: `How much is a taxi from ${areaPlain} to Leicester City Centre?`,
                      answer:
                        "Fares vary with traffic and pickup point, but we offer fixed, competitive pricing. Get an instant quote and book online.",
                    },
                    {
                      question: "What vehicle types are available?",
                      answer:
                        "Choose from saloons, estates, MPVs and minibuses for larger groups. All vehicles are clean, comfortable and licensed.",
                    },
                    {
                      question: "Do you provide child seats on request?",
                      answer:
                        "Yes. Add a note during booking and we'll provide appropriate child seating where available.",
                    },
                    {
                      question: "Can I pay by card?",
                      answer:
                        "We accept multiple secure payment methods including card and contactless, subject to vehicle availability.",
                    },
                  ].map((f) => renderFaq(f.question, f.answer))}
                </div>
              </div>

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