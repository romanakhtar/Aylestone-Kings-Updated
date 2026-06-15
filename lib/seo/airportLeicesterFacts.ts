/** Structured copy for Leicester-origin airport transfer pages (SEO). */

export type LeicesterAirportGuideFacts = {
  airportName: string
  airportCode: string
  intro: string[]
  distanceMiles: string
  journeyFromCityCentre: string
  routeDetail: string
  terminalsDropOff: string
  parkingVsTaxi: string
  airlinesLeicester: string
  earlyLateAvailability: string
  returnJourneys: string
}

export type AirportFaqItem = { question: string; answer: string }

export const eastMidlandsLeicesterFacts: LeicesterAirportGuideFacts = {
  airportName: "East Midlands",
  airportCode: "EMA",
  intro: [
    "East Midlands Airport is the closest major airport to Leicester, which is why so many Leicestershire passengers use it for short breaks, TUI holidays, and winter ski charters. A pre-booked car means you avoid the Express Drop Off clock and the walk from mid-stay car parks in bad weather.",
    "We plan pickup time around your airline’s check-in deadline and live traffic on the A46 and M1 corridor, not an optimistic sat-nav estimate.",
  ],
  distanceMiles: "Roughly 22–24 miles from Leicester city centre (LE1) to the terminal, depending on your start postcode and whether we route via the A46/M1 or local roads at the Leicester end.",
  journeyFromCityCentre:
    "Approximately 35–45 minutes from Leicester city centre in normal traffic; allow up to 55 minutes at peak times or when the M1 is congested.",
  routeDetail:
    "Most drivers use the A46 north-west from Leicester, joining the M1 near Copt Oak (junction 21A/22 area), then the A453 into Castle Donington. From Oadby or south Leicester we often pick up the A563 ring before the A46 to avoid city-centre queues.",
  terminalsDropOff:
    "EMA operates from a single passenger terminal. We set down at the signed departures forecourt / Express Drop Off lanes in front of the terminal (follow your airline’s zone signage). For very heavy luggage we can coordinate the closest practical kerb point within airport rules.",
  parkingVsTaxi:
    "EMA’s own Express Drop Off charges a few pounds for a very short stop window (fees change seasonally — check eastmidlandsairport.com). Mid-stay and long-stay parking is often £50–£90+ for a typical week away once you include the shuttle or walk. A fixed taxi from Leicester for a family can work out cheaper than two cars’ parking plus fuel, and you are dropped at the door on both legs.",
  airlinesLeicester:
    "Carriers Leicester passengers use most at EMA include Ryanair, Jet2, easyJet, and TUI — covering Alicante, Faro, Dublin, Edinburgh, and ski destinations in winter. We track flight numbers for returns on these airlines whenever you provide them.",
  earlyLateAvailability:
    "We take bookings for departures before dawn (for example 03:30–04:30 pickups from Leicester for 06:00 flights) and late inbound landings after midnight. Tell us your flight number and we agree a pickup window that allows for bag reclaim.",
  returnJourneys:
    "Inbound, we usually meet you in the main Pick Up area after you exit baggage reclaim — either the multi-storey car park pickup lobby or the agreed express pickup point, depending on what the airport is operating that week. We confirm the exact meeting pin by text when you land.",
}

export const eastMidlandsPricingFaqs: AirportFaqItem[] = [
  {
    question: "How long does a taxi from Leicester city centre to East Midlands Airport take?",
    answer:
      "In typical traffic, about 35–45 minutes via the A46 and M1 towards Castle Donington. From Oadby or Wigston it is often a few minutes shorter to join the A46; from north Leicester or Glenfield similar. Bank holidays and Friday afternoons may need extra buffer.",
  },
  {
    question: "Which terminal does East Midlands Airport have?",
    answer:
      "EMA has one main passenger terminal. Your driver drops you at the departures forecourt for your airline’s check-in zone. Returns are coordinated from the signed arrivals pickup area after you have luggage.",
  },
  {
    question: "Is a taxi cheaper than parking at EMA for a week?",
    answer:
      "Not always, but for many families it is competitive once you add two cars, fuel, and mid/long-stay parking. Official on-site parking is priced by duration and product — compare the live total on the airport website with our fixed return quote for your group.",
  },
  {
    question: "Do you run taxis to EMA for early Ryanair or Jet2 flights?",
    answer:
      "Yes. We regularly cover 04:00–05:00 Leicester pickups for first-wave departures. Pre-book so we can assign a driver and confirm your fixed fare before travel day.",
  },
  {
    question: "Can you pick us up from East Midlands Airport when we fly back?",
    answer:
      "Yes. Share your flight number and mobile. We monitor arrival time and meet you in the agreed pickup zone with a name board if you want meet-and-greet. If baggage is slow, message us and we adjust.",
  },
]

export const heathrowLeicesterFacts: LeicesterAirportGuideFacts = {
  airportName: "Heathrow",
  airportCode: "LHR",
  intro: [
    "Heathrow is the UK’s busiest hub for long-haul and premium short-haul. From Leicester it is a serious motorway day out, so we build realistic time on the M1, M25, and terminal approach roads — especially for T4/T5 peaks and holiday wave departures.",
    "Fixed pricing matters here: you know the full door-to-terminal cost before you set off, with no surge pricing on app taxis at peak holiday times.",
  ],
  distanceMiles: "Approximately 105–115 miles from Leicester city centre to terminal forecourts, depending on whether we use the M1→M25 clockwise western section or alternate routing if the M25 is blocked.",
  journeyFromCityCentre:
    "Typically around 1 hour 45 minutes to 2 hours 30 minutes in good conditions; allow up to 3 hours or more on a bad M25 day. We recommend an earlier pickup than sat-nav suggests for long-haul check-in.",
  routeDetail:
    "Common routing is M1 south to the M25 (often joining west of London), then M4 spur for Terminals 2 & 3, or the M25 to the Heathrow spur for Terminals 4 and 5. Your driver chooses live traffic options (A414/M10) if the M25 is stationary.",
  terminalsDropOff:
    "Heathrow has four active terminals: Terminal 2, Terminal 3, Terminal 4, and Terminal 5 (Terminal 1 is closed). Each has its own departures forecourt — we drop at the kerb for the terminal printed on your boarding pass, following Heathrow’s short-stay drop-off rules.",
  parkingVsTaxi:
    "Short-stay forecourt parking is priced in short blocks and adds up fast if you are not straight in and out. Long-stay parking plus fuel from Leicester for a family often exceeds a fixed return taxi once you value time and luggage. Compare Heathrow’s live parking calculator with our quote for the same dates.",
  airlinesLeicester:
    "From Heathrow, Leicester travellers commonly use British Airways (worldwide and European), Virgin Atlantic (USA/Caribbean), American Airlines, United, Emirates, Qatar Airways, and Air Canada for North American connections. European short-haul also runs strongly on BA from T5.",
  earlyLateAvailability:
    "We schedule Leicester pickups from approximately 02:30 for 06:00 departures where needed, and we collect arrivals on late transatlantic banks (after 22:00) into the early hours. Night surcharges may apply on some quotes — we confirm when you book.",
  returnJourneys:
    "Arrivals: we meet in the terminal’s official pickup area or short-stay car park meeting point for your landing terminal (T2/T3/T4/T5 each differ slightly). Send your flight number; we adjust for baggage and immigration delays when possible.",
}

export const heathrowPricingFaqs: AirportFaqItem[] = [
  {
    question: "How long is the drive from Leicester to Heathrow Airport?",
    answer:
      "Plan for roughly 1 hour 45 minutes to 2 hours 30 minutes via the M1 and M25 in normal traffic, and longer if the western M25 is congested. We set your pickup time around your airline’s check-in cut-off, not a best-case sat-nav time.",
  },
  {
    question: "Which Heathrow terminal will my taxi drop me at?",
    answer:
      "We drop at the departures forecourt for Terminal 2, 3, 4, or 5 — whichever matches your flight. Tell us the terminal when booking so we route to the correct spur road and forecourt.",
  },
  {
    question: "Is a Leicester–Heathrow taxi cheaper than driving and parking?",
    answer:
      "For a week away, official long-stay parking plus motorway fuel for two cars can exceed a fixed saloon or MPV transfer. Short-stay ‘kiss and fly’ is fine for minutes, not for sorting luggage. Compare Heathrow’s published parking total with our return quote.",
  },
  {
    question: "Can you pick me up from Heathrow after an overnight flight?",
    answer:
      "Yes. We serve late arrivals and early-morning departures. Share flight details; we coordinate pickup in the correct terminal pickup zone and adjust if you are held in immigration or baggage.",
  },
  {
    question: "Do you cover all Leicester postcodes for Heathrow transfers?",
    answer:
      "Yes — city centre, Oadby, Wigston, Glenfield, Braunstone, and wider Leicestershire. Your fare is quoted from your exact pickup postcode and vehicle size.",
  },
]

export const gatwickLeicesterFacts: LeicesterAirportGuideFacts = {
  airportName: "Gatwick",
  airportCode: "LGW",
  intro: [
    "Gatwick is a long southbound run from Leicester — usually the longest of the London airports we serve regularly. It is popular for TUI, easyJet, and BA leisure routes, so luggage space and realistic timing matter.",
    "We avoid generic ‘about two hours’ promises: your pickup slot is built around flight time, day of week, and M25/M23 behaviour.",
  ],
  distanceMiles: "Roughly 150–160 miles from Leicester city centre to Gatwick’s terminal loop, depending on exact start point and M25 routing.",
  journeyFromCityCentre:
    "Typically about 2 hours 45 minutes to 3 hours 30 minutes in reasonable traffic; allow up to 4 hours in summer peaks or when the M25 is slow.",
  routeDetail:
    "Usually M1 south to the M25, then either the M23 straight into Gatwick from the east or alternative M25 segments depending on live delays. Your driver may switch to the A23 approach if traffic data supports it.",
  terminalsDropOff:
    "Gatwick has two terminals: North and South. We drop on the departures forecourt for the terminal your airline uses — signs are colour-coded (North vs South). Confirm your terminal at booking; some airlines move seasonally.",
  parkingVsTaxi:
    "Gatwick’s short-stay forecourt is priced for quick drop-offs; long-stay and summer peak parking can be expensive for a week-plus trip. Add two tanks of fuel and M25 stress — many Leicester families prefer one fixed return price for door-to-door service.",
  airlinesLeicester:
    "Leisure-heavy carriers include easyJet, British Airways, TUI, Vueling, and Wizz Air on European routes; long-haul includes Norse Atlantic and some BA services depending on season. Always check your booking for North vs South terminal.",
  earlyLateAvailability:
    "We book Leicester pickups from around 02:00–03:00 for dawn easyJet waves where required, and we collect late inbound flights until the small hours. Confirm your desired pickup window when you reserve.",
  returnJourneys:
    "On arrival, we coordinate pickup at the authorised passenger pickup zones for North or South terminal (multi-storey or forecourt meeting points per current airport rules). Flight number and mobile contact help us flex if you are delayed in baggage reclaim.",
}

export const gatwickPricingFaqs: AirportFaqItem[] = [
  {
    question: "How far is Gatwick Airport from Leicester in miles?",
    answer:
      "By road it is roughly 150–160 miles from Leicester city centre to Gatwick, depending on your start postcode and whether the M25 routing goes east or west of London.",
  },
  {
    question: "How long does a taxi from Leicester to Gatwick take?",
    answer:
      "Typically 2 hours 45 minutes to 3 hours 30 minutes in normal traffic via the M1, M25, and M23. In heavy traffic or bank holidays it can approach 4 hours — we add buffer when you tell us your check-in time.",
  },
  {
    question: "Does Gatwick have one terminal or two?",
    answer:
      "Gatwick has two terminals: North and South. We drop you at the correct departures forecourt for your airline. If you are unsure, send your flight number and we confirm.",
  },
  {
    question: "Why book a taxi instead of driving to Gatwick from Leicester?",
    answer:
      "You avoid long-stay parking charges, two long motorway drives when tired, and the M25 variable. A fixed-price return with a professional driver often compares well for groups once parking and fuel are totalled.",
  },
  {
    question: "Can I book a return taxi from Gatwick to Leicester?",
    answer:
      "Yes. Many customers book outbound and return together. For inbound, we use your flight to time pickup after you clear baggage reclaim.",
  },
]

export const stanstedLeicesterFacts: LeicesterAirportGuideFacts = {
  airportName: "Stansted",
  airportCode: "STN",
  intro: [
    "Stansted is Essex’s low-cost hub — heavy on Ryanair and Jet2 early waves. From Leicester it is mostly an M1/M11 day out, with journey time swinging on M25 links if we need to detour.",
    "We specialise in uncomfortable o’clock departures: many Leicestershire passengers book us because rail connections do not line up with first flights.",
  ],
  distanceMiles: "About 115–125 miles from Leicester city centre to Stansted’s terminal forecourt, depending on whether we stay on the M1/A14 corridor or use M25 links.",
  journeyFromCityCentre:
    "Typically 2 hours to 2 hours 45 minutes in good traffic; allow up to 3 hours 15 minutes on a poor day for M11/M25 approaches.",
  routeDetail:
    "Common route: M1 south, then A14 or M25/M11 depending on traffic. The final miles use the A120 into Stansted Airport. We monitor queues at the terminal drop-off zone during peak holiday mornings.",
  terminalsDropOff:
    "Stansted has one main passenger terminal (check-in and arrivals under one roof). We drop at the departures forecourt express zone for your airline’s check-in row.",
  parkingVsTaxi:
    "Express set-down at Stansted is charged per minute band (see stanstedairport.com for current tariffs). Official mid/long-stay parking for a week’s holiday can be a significant line on your budget next to fuel from Leicestershire. Compare the airport’s total with our fixed return quote.",
  airlinesLeicester:
    "Ryanair and Jet2 dominate Stansted routes useful from Leicester — Alicante, Malaga, Faro, Krakow, and city breaks across Europe. easyJet also operates selected routes. Early morning bank holidays are especially busy.",
  earlyLateAvailability:
    "We regularly run 03:00–04:30 Leicester pickups for 06:00–07:00 departures, and we collect inbound flights after midnight. Tell us your flight number for return timing.",
  returnJourneys:
    "Arrivals: meet in the terminal’s coach and taxi pickup area after baggage reclaim, or a short walk to the agreed pickup pin — we text details on the day. Flight monitoring helps if you land early or late.",
}

export const stanstedPricingFaqs: AirportFaqItem[] = [
  {
    question: "How long from Leicester city centre to Stansted Airport by taxi?",
    answer:
      "Usually about 2 hours to 2 hours 45 minutes via the M1 and A14/M11 corridor in normal traffic. Allow up to 3 hours 15 minutes if motorways are slow.",
  },
  {
    question: "Which airlines fly from Stansted that Leicester passengers use?",
    answer:
      "Mostly Ryanair and Jet2 for Spain, Portugal, and Eastern Europe, plus some easyJet services. Stansted is ideal if your flight is timed from that airport rather than Luton or East Midlands.",
  },
  {
    question: "Can I get a taxi for a 04:00 pickup in Leicester for Stansted?",
    answer:
      "Yes. We operate 24/7 and often cover very early Stansted departures. Pre-book so we can assign a driver and confirm your fixed fare.",
  },
  {
    question: "Is Stansted closer than Heathrow from Leicester?",
    answer:
      "Stansted is broadly similar mileage to Heathrow from Leicester, but routing differs (more easterly). Gatwick is further. We quote each route on its own distance and time profile.",
  },
  {
    question: "Do you offer return transfers from Stansted to Leicester?",
    answer:
      "Yes. Share your inbound flight and we coordinate pickup after baggage reclaim, with adjustments for delays when we have flight details.",
  },
]

export const manchesterLeicesterFacts: LeicesterAirportGuideFacts = {
  airportName: "Manchester",
  airportCode: "MAN",
  intro: [
    "Manchester Airport is the global hub for much of northern England — strong on USA routes, Middle East carriers, and EU business destinations. From Leicester it is a north-west motorway transfer, not a London run.",
    "Families and students often choose MAN for Emirates, Qatar Airways, and Virgin Atlantic connections. Fixed taxi pricing keeps long trips predictable.",
  ],
  distanceMiles: "Roughly 90–100 miles from Leicester city centre to Manchester Airport’s terminal ring, depending on whether we use the M69/M6 route or M1/M6 links.",
  journeyFromCityCentre:
    "Typically about 2 hours to 2 hours 45 minutes in normal traffic; allow up to 3 hours at peak times or on bank holidays.",
  routeDetail:
    "Most common routing is M69 from Leicester towards Coventry, then M6 north past Birmingham and onto the M56 for Manchester Airport. Alternative M1/M6 routing is used if closures or traffic dictate.",
  terminalsDropOff:
    "Manchester has three passenger terminals: Terminal 1, Terminal 2, and Terminal 3. We drop at the departures forecourt for the terminal your airline uses (signage is clear per terminal). If you only know the airline, tell us and we confirm the terminal.",
  parkingVsTaxi:
    "Manchester’s multi-storey and JetParks products vary by season; a week’s parking plus fuel from Leicester for two adults can approach or exceed a fixed MPV transfer when you add convenience. Check manchesterairport.co.uk live pricing against our quote.",
  airlinesLeicester:
    "Useful carriers for Leicestershire travellers include Emirates, Qatar Airways, Virgin Atlantic, United, American Airlines, Aer Lingus, easyJet, Jet2, Ryanair, and TUI — covering Orlando, Dubai, New York, Dublin, and European cities.",
  earlyLateAvailability:
    "We cover Leicester pickups from approximately 03:00 for early transatlantic departures and late inbound arrivals after 23:00. Long-distance night jobs are pre-booked with confirmed pricing.",
  returnJourneys:
    "Inbound, we meet at the terminal’s official pickup zone (each terminal has a signed taxi/private hire rank or multi-storey meeting point). Send flight details and WhatsApp/SMS if your gate changes.",
}

export const manchesterPricingFaqs: AirportFaqItem[] = [
  {
    question: "How long does a taxi from Leicester to Manchester Airport take?",
    answer:
      "Usually about 2 hours to 2 hours 45 minutes via the M69 and M6 in normal traffic. Allow up to 3 hours at busy times.",
  },
  {
    question: "Which Manchester Airport terminal do I need?",
    answer:
      "MAN has Terminals 1, 2, and 3. Airlines are assigned by terminal — tell us your flight number or airline when booking and we drop at the correct departures door.",
  },
  {
    question: "Is Manchester Airport a good alternative to Heathrow from Leicester?",
    answer:
      "Sometimes — especially for USA routes, Emirates/Qatar connections, or when fares are cheaper ex-MAN. It is a longer drive than East Midlands or Birmingham but can still beat London positioning for certain destinations.",
  },
  {
    question: "Can you pick up a student group going to Manchester Airport?",
    answer:
      "Yes. Quote the number of passengers, suitcases, and any ski or outsize bags so we send an MPV or minibus with enough boot space.",
  },
  {
    question: "Do you do return taxis from Manchester Airport to Leicester?",
    answer:
      "Yes. Flight-tracked arrivals are popular — we adjust if you land early or late, subject to airport pickup rules at the time.",
  },
]

export const lutonLeicesterFacts: LeicesterAirportGuideFacts = {
  airportName: "Luton",
  airportCode: "LTN",
  intro: [
    "Luton is Leicester’s most-used ‘London’ low-cost airport after the regional hubs — especially for Wizz Air, easyJet, and Ryanair sun routes. The run is almost entirely M1 motorway, but London orbital traffic can still bite.",
    "We quote fixed fares so you compare apples to apples with LTN parking, DART tickets, and fuel.",
  ],
  distanceMiles: "Approximately 85–95 miles from Leicester city centre to Luton Airport terminal approaches, depending on Leicester start point and M1 entry.",
  journeyFromCityCentre:
    "Typically 1 hour 15 minutes to 1 hour 45 minutes via the M1 in good traffic; allow 2 hours on a bad M1 day or Friday evening getaway peaks.",
  routeDetail:
    "Straightforward M1 south from Leicester, then local approaches to Luton via airport signage. We may use alternative junctions if there are M1 roadworks around Northampton or Milton Keynes.",
  terminalsDropOff:
    "Luton operates a single terminal building for check-in and security; airlines gate from one campus. We drop at the departures forecourt express zone. The Luton DART links the terminal to Luton Airport Parkway station if you ever combine modes.",
  parkingVsTaxi:
    "Short-stay drop-off at LTN is charged in time bands (see lutonairport.com). Week-long mid-stay or long-stay parking plus M1 fuel for two can rival a fixed taxi for a family. Compare the airport’s total parking quote with our door-to-door return price.",
  airlinesLeicester:
    "Wizz Air, easyJet, and Ryanair carry most Leicestershire leisure traffic from Luton — Budapest, Warsaw, Malaga, and similar. TUI and SunExpress appear seasonally. Business travellers also use BA CityFlyer selected routes.",
  earlyLateAvailability:
    "We book pickups from about 03:00 for first-wave Wizz and easyJet departures, and we collect inbound flights after midnight. Night jobs are always pre-confirmed with a fixed price.",
  returnJourneys:
    "Arrivals: we coordinate pickup at the authorised taxi/private hire meeting point after baggage reclaim — LTN occasionally moves pickup pins, so we confirm by text on the day with your driver’s mobile.",
}

export const lutonPricingExtraFaqs: AirportFaqItem[] = [
  {
    question: "How many miles is Luton Airport from Leicester?",
    answer:
      "By road, roughly 85–95 miles from Leicester city centre depending on your postcode and M1 junction. Typical journey time is about 1 hour 15 minutes to 1 hour 45 minutes in normal traffic.",
  },
  {
    question: "Which low-cost airlines fly from Luton for Leicester passengers?",
    answer:
      "Most common are Wizz Air, easyJet, and Ryanair for European city and beach routes. Always check your booking for terminal and bag rules — we drop at the main LTN departures forecourt.",
  },
  {
    question: "Is Luton faster to reach than Gatwick from Leicester?",
    answer:
      "Yes — Luton is significantly closer (M1 south) than Gatwick (M1/M25/M23). If your flight exists from both, compare total door-to-door time and our fixed quotes for each.",
  },
]

export const birminghamLeicesterFacts: LeicesterAirportGuideFacts = {
  airportName: "Birmingham",
  airportCode: "BHX",
  intro: [
    "Birmingham Airport is the sweet spot for many Leicester travellers — close enough for a predictable motorway run, large enough for Emirates, KLM, and major holiday airlines. Business and VFR traffic to Ireland and Amsterdam is especially common.",
    "We drop at the correct forecourt zone for your airline without you hunting multi-storey lifts with heavy bags.",
  ],
  distanceMiles: "Roughly 38–42 miles from Leicester city centre to BHX terminal forecourts, depending on whether we use the M69/M6/M42 corridor or M1/M6/M42 at certain times.",
  journeyFromCityCentre:
    "Typically about 55 minutes to 1 hour 15 minutes in normal traffic; allow up to 1 hour 30 minutes in rush hour around Birmingham’s motorway box.",
  routeDetail:
    "Most drivers take the M69 from Leicester towards the M6, then M42 to the NEC and BHX spur. If the M6 is blocked near Coventry, we may reroute via the M1 link depending on live conditions.",
  terminalsDropOff:
    "Birmingham Airport uses one linked terminal building with check-in zones often referred to as Terminal 1 and Terminal 2 on signage — both are within the same complex. We set down at the departures level forecourt for your airline’s zone (follow purple/orange signage on approach).",
  parkingVsTaxi:
    "Drop-off zones at BHX carry short-stay tariffs (see birminghamairport.co.uk). Long-stay parking for a week plus fuel can exceed a fixed saloon return for two passengers — compare the airport’s live parking total with our quote.",
  airlinesLeicester:
    "Popular from Leicester: Emirates (Dubai), KLM (Amsterdam), Lufthansa, Air France, Jet2, TUI, Ryanair, and easyJet — covering Ireland, Spain, city breaks, and long-haul via the Middle East.",
  earlyLateAvailability:
    "We schedule Leicester pickups from around 04:00 for early European banks and collect arrivals after 23:00. Pre-booked night transfers are confirmed at a fixed price.",
  returnJourneys:
    "Arrivals: meet in the ground-floor arrivals pickup hall or the express pickup forecourt as signed that month — BHX sometimes adjusts private-hire meeting pins. We text your driver’s location and plate when you land.",
}

export const birminghamPricingFaqs: AirportFaqItem[] = [
  {
    question: "How long is a taxi from Leicester to Birmingham Airport?",
    answer:
      "Usually about 55 minutes to 1 hour 15 minutes via the M69, M6, and M42 in normal traffic. Rush hour around Birmingham can push toward 1 hour 30 minutes.",
  },
  {
    question: "Does Birmingham Airport have Terminal 1 and Terminal 2?",
    answer:
      "BHX is effectively one terminal building with airline zones signed as T1 and T2 areas. Your driver drops at the departures forecourt level that matches your carrier — tell us your airline when booking.",
  },
  {
    question: "Is a taxi cheaper than parking at Birmingham Airport for a week?",
    answer:
      "Sometimes. Official car parks are priced by duration and proximity. Add fuel and time — many couples and families find a fixed return taxi competitive once everything is totalled.",
  },
  {
    question: "Can you pick me up from Birmingham Airport after a late flight?",
    answer:
      "Yes. We operate 24/7 with pre-booked inbound collections. Share your flight number so we can adjust for delays.",
  },
  {
    question: "Do Emirates and KLM fly from Birmingham for Leicester passengers?",
    answer:
      "Yes — both are major carriers at BHX for long-haul (Emirates to Dubai) and European connections (KLM to Amsterdam Schiphol). We regularly transfer passengers for those check-in desks.",
  },
  {
    question: "What is the cheapest taxi from Leicester to Birmingham Airport?",
    answer:
      "For most passengers, a fixed-price standard saloon from Leicester city centre starts from £60 — often the cheapest option when you factor in no meter surges or peak-time app multipliers on the M69/M6 route. Estate and MPV prices are confirmed at booking if you need extra luggage space or seats.",
  },
  {
    question: "How much do Birmingham Airport taxis cost from Leicester?",
    answer:
      "Birmingham Airport taxis prices from Leicester typically start from £60 for a saloon, £70 for an estate, and £80 for an MPV/minibus, all as fixed fares agreed before travel. Pickups outside the city centre may vary slightly; call 0116 233 8888 or book online for an exact quote.",
  },
]
