import { PHONE_DISPLAY } from "@/lib/data"
/**
 * Unique page copy for destination slugs that previously fell through to the
 * shared category templates in the taxis-in route.
 *
 * Before this file, 18 pages rendered byte-identical body copy in six groups
 * (supermarkets, places of worship, museums/theatre, outlying towns, hospitals
 * and city-centre landmarks), which is a duplicate-content risk across what is
 * meant to be 91 distinct local pages.
 *
 * The original entries deliberately contain no opening hours, fares, travel times or street
 * addresses — none of those are verified anywhere in this codebase. Geography
 * is kept to the district level, which matches the area pages we link to.
 * Entries added Nov 2026 include an address/postcode only where checked against an
 * official source (noted above those entries).
 */

export type DestinationAreaContent = {
  bodyParagraphs: string[]
  faqs: { question: string; answer: string }[]
}

export const destinationAreaContent: Record<string, DestinationAreaContent> = {
  /* ------------------------------------------------------------------ */
  /* Supermarkets                                                        */
  /* ------------------------------------------------------------------ */
  "tesco-narborough-road": {
    bodyParagraphs: [
      "Narborough Road runs west out of Leicester and is one of the busiest shopping streets in the city, which makes the Tesco along it a regular pickup for us in both directions. A big weekly shop is the classic reason people book rather than drive: you can take a car in easily enough, but getting out again with a full boot at the wrong time of day is a different matter, and parking turns over slowly when the road is busy.",
      "Most of this work is round trips. We drop you at the entrance, you shop, and a driver comes back for the time you asked for. If you would rather not fix a time, message us when you reach the checkout and we will send the next available car — that suits people who are not sure how long a big shop will take.",
      "Tell us roughly how many bags you expect when you book. A standard saloon is fine for a normal weekly shop, but if you are stocking up for a household, or buying anything bulky, we will send an estate or an MPV so nothing ends up on a passenger's lap. Our drivers will help you load and unload at both ends.",
      `This stretch of Narborough Road sits close to several of the areas we cover most, so the run home is usually short. We pick up and drop off regularly in Braunstone, Westcotes and the streets around Fosse Park, as well as running into the city centre. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp, and the fare is agreed before you travel.`,
    ],
    faqs: [
      {
        question: "Can you wait while I do my shopping at Tesco Narborough Road?",
        answer:
          "We would normally book your return separately rather than have a driver wait, which keeps the cost down. Give us a return time when you book, or message us on WhatsApp when you are at the checkout and we will send the next available car.",
      },
      {
        question: "Will a taxi take a full weekly shop?",
        answer:
          "Yes. Tell us how many bags you are expecting when you book and we will send a vehicle with the boot space for it — an estate or an MPV if a saloon would be tight. Drivers help with loading and unloading.",
      },
      {
        question: "Do you pick up from the supermarket entrance?",
        answer:
          "We will get you as close to the doors as the traffic and the car park layout allow on the day. If it is busy, your driver will call or message to agree exactly where to meet so you are not carrying bags any further than you need to.",
      },
    ],
  },

  "morrisons-freemens-common": {
    bodyParagraphs: [
      "Freemens Common sits on the south side of the city near the De Montfort University side of town, and the Morrisons there serves a mix of students, families and people working locally. A large share of our bookings here come from households without a car — a supermarket run is one of the few trips where a taxi each way is simply easier than any alternative.",
      "Student terms shape the pattern. The start of each term brings bulk shops as halls and shared houses stock up, often with three or four people splitting one vehicle and one fare. If that is you, book one larger car rather than two small ones: it is cheaper per head and there is somewhere for everything to go.",
      "For everyone else it tends to be a steady weekly or fortnightly rhythm, and those are easy to set up as a standing booking. Tell us the day and the time and we will hold the slot instead of making you book from scratch each week. If your return time moves, message us and we will adjust it.",
      `The run from Freemens Common reaches most of the south of the city quickly, and we work constantly in Aylestone, Clarendon Park and the streets around both universities. Book online, call ${PHONE_DISPLAY}, or send a WhatsApp message — the price is fixed before the driver sets off, whatever the time of day.`,
    ],
    faqs: [
      {
        question: "Can a group of students share one taxi for a big shop?",
        answer:
          "Yes, and it usually works out better. Tell us how many of you are travelling and we will send a vehicle that fits the group and the shopping. One larger car costs less per person than two saloons.",
      },
      {
        question: "Can I set up a regular weekly supermarket run?",
        answer:
          "Yes. Give us the day and time you want and we will hold it as a standing booking, so you are not rebooking the same journey every week. Let us know if you need to change or skip a week.",
      },
      {
        question: "Do you cover Freemens Common late in the evening?",
        answer:
          "Yes. We operate 24 hours a day, seven days a week, so an evening shop is covered exactly like a daytime one, with the same fixed fare and no surge pricing.",
      },
    ],
  },

  "sainsburys-grove-triangle": {
    bodyParagraphs: [
      "The Sainsbury's at Grove Triangle sits on the south-western edge of Leicester, out where the city meets the county. That location is the reason people book a taxi to it: it is laid out for drivers, so getting there without a car means either an awkward connection or a cab, and a cab wins once you are carrying anything.",
      "Out-of-town stores produce bigger shops than high-street ones, and the bookings reflect it. This is one of the places where we most often send an estate or an MPV rather than a saloon, particularly for households doing a monthly stock-up. Mention the size of the shop when you book and the right vehicle will turn up.",
      "Because it sits on the edge of the city, the journey home can go in several directions, and the route matters more than it does for a central store. Tell us your destination when you book and the fare is calculated and fixed then — nothing changes if the ring road is slow on the day.",
      `We cover this side of Leicester constantly, including Braunstone, Glen Parva and the villages out towards the county boundary. To arrange a trip to or from Grove Triangle, book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Is a taxi worth it for an out-of-town supermarket?",
        answer:
          "For a large shop it often is, especially without a car of your own. You get dropped at the doors and collected from them, and the fare is agreed in advance so you know the cost before you decide.",
      },
      {
        question: "What size vehicle will I need?",
        answer:
          "A saloon handles a normal weekly shop. For a monthly stock-up, or if you are buying anything bulky, ask for an estate or an MPV when you book and we will allocate one.",
      },
      {
        question: "Can you take me on somewhere else afterwards?",
        answer:
          "Yes. Tell us the full journey when you book — including any second stop — and we will quote the whole thing as one fixed fare rather than treating it as separate trips.",
      },
    ],
  },

  "lidl-beaumont-leys": {
    bodyParagraphs: [
      "Beaumont Leys is one of the largest residential districts in the north-west of Leicester, and the Lidl there is a short local hop for thousands of households. Most of the journeys we run to it are genuinely short — which is exactly why people book them. It is far enough to be a nuisance with shopping bags and close enough that the fare is modest.",
      "Short local runs are also the ones where waiting around is most frustrating, so we put real effort into turning up when we say we will. Book the outbound trip and the return at the same time if you know roughly how long you will be, or message us on WhatsApp when you are done and we will send the next car.",
      "We see a lot of repeat bookings in this part of the city: the same trip, the same day each week, often for older residents or people managing a shop without a car. Those are easy to set up as a standing arrangement so you are not starting from scratch every time.",
      `From Beaumont Leys we run regularly across the north of the city, including Rushey Mead, Birstall and the Mowmacre and Stocking Farm sides, as well as into the centre. Book online, call ${PHONE_DISPLAY} or send us a WhatsApp message, and the price is confirmed before you travel.`,
    ],
    faqs: [
      {
        question: "Do you do short local trips in Beaumont Leys?",
        answer:
          "Yes — short runs are a large part of what we do here. A trip of a mile or two with shopping is a perfectly normal booking and is quoted the same way as any other, with the fare agreed before you travel.",
      },
      {
        question: "How quickly can you get to me?",
        answer:
          "It depends on demand at the time. If you need a car at a particular moment, pre-booking is the way to be certain; otherwise call or message us and we will tell you honestly how long the next available vehicle will be.",
      },
      {
        question: "Can an older relative book a regular trip?",
        answer:
          "Yes. We can set up a standing booking for the same day and time each week, and drivers will help with bags to the door. Mention any help that would be useful when you set it up.",
      },
    ],
  },

  "farmfoods-st-matthews": {
    bodyParagraphs: [
      "St Matthews sits just outside Leicester city centre, and the Farmfoods there draws a steady stream of bookings for one simple reason: frozen and bulk shopping is heavy. Carrying it any distance is unpleasant, and it does not wait around — which makes a taxi straight to the door the sensible option rather than a luxury.",
      "Because this is a bulk-buy shop, the vehicle matters more than usual. Tell us what you expect to be carrying when you book and we will send something with the boot space to match. Drivers help loading at the store and unloading at the other end, which is the part that matters when you are getting several heavy bags up to a flat.",
      "The estate sits close enough to the city centre that journeys are short, but the streets are busy and parking is tight, so your driver may call to agree the best spot to meet. Giving us a mobile number when you book makes that straightforward.",
      `We cover St Matthews and the neighbouring areas throughout the day and night, including Belgrave, Humberstone and the city centre itself. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp — the fare is fixed before you set off.`,
    ],
    faqs: [
      {
        question: "Will the driver help with heavy frozen shopping?",
        answer:
          "Yes. Drivers help load at the store and unload at your destination. If you are getting bags up to a flat, say so when you book so the driver knows to allow for it.",
      },
      {
        question: "Can you pick up from the store entrance?",
        answer:
          "We get as close as the traffic and parking allow. The streets around St Matthews are busy, so your driver may call to agree exactly where to meet — leave us a mobile number when you book.",
      },
      {
        question: "Do you cover St Matthews at night?",
        answer:
          "Yes, 24 hours a day, every day. The fare is the same at night as during the day; we do not apply surge pricing at any hour.",
      },
    ],
  },

  "waitrose-oadby": {
    bodyParagraphs: [
      "Oadby is a settled suburb south-east of Leicester, and the Waitrose there serves it along with the villages nearby. The bookings we take to it skew towards two groups: residents who would rather not drive and park for a shop, and older customers for whom a car to the door and back is simply the easiest way to manage the trip.",
      "That second group shapes how we handle these journeys. Drivers help with bags to the door as a matter of course, and we are happy to set up a repeating booking for the same day and time each week so there is nothing to arrange. If you need a little longer getting in and out of the car, say so when you book and we will allow for it.",
      "Return trips are worth fixing in advance here. Tell us when you expect to be finished and we will have a car there, or message us on WhatsApp at the checkout if you would rather not commit to a time. Either way the fare is agreed before you travel.",
      `From Oadby we run constantly into Leicester city centre, across to Knighton and Stoneygate, and out to Wigston and the surrounding villages. Book online, call ${PHONE_DISPLAY} or send a WhatsApp message to arrange a trip to or from Waitrose Oadby.`,
    ],
    faqs: [
      {
        question: "Will the driver help with my shopping bags?",
        answer:
          "Yes. Drivers help load at the store and carry bags to your door at the other end. If you would like extra time or assistance getting in and out of the car, mention it when you book.",
      },
      {
        question: "Can I book the same supermarket trip every week?",
        answer:
          "Yes. We can hold a standing booking for the same day and time so you do not have to arrange it each week. Let us know in advance if you want to change or skip one.",
      },
      {
        question: "Can you collect me from other shops in Oadby too?",
        answer:
          "Yes, we cover the whole of Oadby. If you want to combine a couple of stops in one journey, tell us when you book and we will quote the trip as a whole.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Places of worship                                                   */
  /* ------------------------------------------------------------------ */
  "jame-mosque-leicester": {
    bodyParagraphs: [
      "The Jame Mosque is one of the main places of worship on the Highfields side of Leicester, and our bookings to it follow the rhythm of the week rather than the working day. Friday is consistently the busiest, with a concentration of arrivals and then a large number of people leaving within a short window — which is precisely when pre-booking the return makes the difference.",
      "Ramadan changes the pattern again. Journeys shift to late evening and the small hours, with taraweeh prayers and pre-dawn travel adding trips at times when little else is running. We operate 24 hours a day, every day of the year, so those bookings are handled exactly like any other, at the same fixed fare.",
      "Eid is the single busiest day of the year here, and the one where leaving it late causes problems. Families often travel together and need larger vehicles, and demand across the area peaks within a narrow window. Book as far ahead as you can and tell us your group size so we allocate the right car rather than sending two.",
      `The streets around the mosque are residential and can be congested at peak times, so your driver may call to agree a sensible place to meet. We cover Highfields, Spinney Hills, Evington and the city centre throughout. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Can I book a taxi for Friday prayers in advance?",
        answer:
          "Yes, and it is worth doing. A lot of people are travelling within the same short window, so a pre-booked journey both ways is far more reliable than trying to arrange one as you leave.",
      },
      {
        question: "Do you run during Ramadan late at night?",
        answer:
          "Yes. We operate 24 hours a day throughout the year, including late evening and pre-dawn journeys during Ramadan, at the same fixed fares as any other time.",
      },
      {
        question: "Can you take a whole family in one vehicle?",
        answer:
          "Yes. Tell us how many of you are travelling when you book and we will send a vehicle with the right number of seats, or arrange more than one car if the group is large.",
      },
    ],
  },

  "shree-hindu-temple-leicester": {
    bodyParagraphs: [
      "The Shree Hindu Temple sits in the Belgrave area, the part of Leicester with the strongest concentration of Hindu community life in the city. Journeys here are rarely routine commuting — they are family trips, often with several people travelling together, and they cluster heavily around the festival calendar.",
      "Diwali is the clearest example. Belgrave draws very large crowds, roads in the area get extremely busy, and a great many people want to travel at the same time in the evening. Pre-booking both legs is the only reliable way to manage that, and we would always rather you booked early and moved the time than left it to the night itself.",
      "Navratri brings a different pattern — repeated evening journeys across several consecutive nights, frequently with groups. If you are attending more than one night, book the whole run at once and we will hold the slots. Tell us your numbers and we will allocate larger vehicles rather than splitting the party.",
      `Outside festivals this is steady, year-round work: regular visits, family occasions and trips for older relatives who would rather be driven to the door. We cover Belgrave, Rushey Mead and the north of the city throughout. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Should I book early for Diwali?",
        answer:
          "Yes. Belgrave is exceptionally busy at Diwali and a large number of people want to travel in the same evening window. Book as far ahead as you can — you can always message us to move the time if your plans shift.",
      },
      {
        question: "Can you take a large family group?",
        answer:
          "Yes. Give us your numbers when you book and we will send a vehicle that fits everyone, or arrange a second car. Booking both together keeps the group arriving at the same time.",
      },
      {
        question: "Do you pick up from the temple after evening events?",
        answer:
          "Yes, we run 24 hours a day. For an evening event, booking the return when you book the outbound trip is the most reliable approach, since a lot of people leave at once.",
      },
    ],
  },

  "guru-nanak-gurdwara-leicester": {
    bodyParagraphs: [
      "The Guru Nanak Gurdwara sits close to Leicester city centre, which makes it one of the more straightforward places of worship for us to reach — but also one where parking is genuinely difficult, and that is the main reason people book a taxi rather than drive.",
      "Vaisakhi and Gurpurab are the busiest points in the year, and both bring large numbers of people arriving and leaving in concentrated windows. Where there is a procession or a larger gathering, the surrounding roads can be affected, so booking ahead and giving us a mobile number lets your driver sort out a workable meeting point rather than circling.",
      "Week to week the pattern is calmer: regular attendance, families travelling together, and a steady number of older passengers who want a car to the door at both ends. Drivers will help you in and out of the vehicle — just mention when you book if that would be useful.",
      `Being near the centre, the gurdwara is within a short run of most of the inner city. We cover the city centre, Highfields and the surrounding areas throughout the day and night. Book online, call ${PHONE_DISPLAY} or send us a WhatsApp message and the fare is confirmed before you travel.`,
    ],
    faqs: [
      {
        question: "Is parking difficult at the gurdwara?",
        answer:
          "It is close to the city centre, where parking is limited generally and harder still at busy times. That is why many people book a taxi both ways — you are dropped at the door and collected from an agreed point.",
      },
      {
        question: "Can you collect a group after a service?",
        answer:
          "Yes. Tell us your numbers and roughly when you expect to leave and we will allocate the right vehicle. For larger gatherings, booking the return in advance is much more reliable.",
      },
      {
        question: "Do you help passengers who need a hand getting in and out?",
        answer:
          "Yes. Mention it when you book and your driver will allow extra time and help you to and from the door. Wheelchair accessible vehicles are available on request.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Museums and theatre                                                 */
  /* ------------------------------------------------------------------ */
  "curve-theatre": {
    bodyParagraphs: [
      "Curve sits in Leicester's Cultural Quarter, and the bookings we take for it are shaped almost entirely by the fact that a theatre empties all at once. Several hundred people step outside within a few minutes of the final curtain, all wanting to get home at the same moment — which is why the journey back is the one worth arranging in advance.",
      "The practical approach is to book both legs together. You know when the performance starts, so the outbound trip is easy; for the return, give us your best estimate of the finish time and message us if it runs over. Moving a booked time is quick. Starting a booking from scratch in the middle of a theatre turning out is not.",
      "Matinees are a different proposition — a calmer, more spread-out finish, and a lot of our daytime Curve work is older passengers who want a car to the door at both ends. Say so when you book and your driver will allow the time.",
      `The Cultural Quarter streets are narrow in places, so your driver may suggest a nearby road for the pickup. We cover the city centre throughout the night, and if your evening carries on after the show, our guide to Leicester city centre pubs, bars and clubs covers the venues nearby. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Should I book my taxi home before the show?",
        answer:
          "Yes. A theatre empties within a few minutes and a lot of people want a car at once. Book the return when you book the outbound trip, and message us if the performance runs longer than expected — we will move the time.",
      },
      {
        question: "Where will the driver meet me after a performance?",
        answer:
          "Some Cultural Quarter streets are narrow, so your driver may suggest a nearby road rather than the theatre entrance. You will be told where before you come out, so you are not searching for the car.",
      },
      {
        question: "Can you take a group to the theatre together?",
        answer:
          "Yes. Tell us your group size when you book and we will send a vehicle that fits everyone, or two cars arriving together if the party is larger.",
      },
    ],
  },

  "jewry-wall-museum": {
    bodyParagraphs: [
      "Jewry Wall is on the western edge of Leicester city centre and is one of the city's most significant Roman sites. Unlike most of our city-centre work, bookings here are daytime rather than evening — visitors, families and school groups arriving in the morning and leaving in the afternoon.",
      "That makes the journeys easier to plan but busier in a different way. Weekday daytime traffic through the centre is heavier than late-night traffic, so if you are arriving for a particular time, book with a sensible margin rather than cutting it fine. The fare is fixed when you book, so a slow run does not cost you more.",
      "Group bookings are common here, and the thing that catches people out is numbers. A party of five or six needs a larger vehicle, and that is far easier to arrange in advance than at the kerb. Tell us how many of you there are and whether anyone needs step-free access when you book.",
      `The site sits within easy reach of the rest of the centre, so visitors often combine it with Highcross or the Lanes. We cover the city centre and all the surrounding areas throughout the day. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Can you take a group or a school party?",
        answer:
          "Yes. Tell us the numbers when you book and we will allocate larger vehicles, or several cars travelling together. For school or organised groups, booking well in advance is best.",
      },
      {
        question: "Can you combine a visit with other stops in the city?",
        answer:
          "Yes. Give us the full journey including any extra stops when you book and we will quote it as one fixed fare rather than separate trips.",
      },
      {
        question: "Do you offer wheelchair accessible vehicles?",
        answer:
          "Yes, on request. Mention it when you book so the right vehicle is allocated, and allow a little extra notice where you can.",
      },
    ],
  },

  "new-walk-museum": {
    bodyParagraphs: [
      "New Walk Museum stands on New Walk itself, and that single fact governs every booking we take for it: New Walk is a pedestrian promenade, not a road. No taxi can pull up outside the entrance, so the drop-off and the pickup both happen on the surrounding streets — and knowing that in advance saves a lot of confusion.",
      "In practice it is straightforward. Tell us you are going to the museum and your driver will take you to the nearest point a car can stop, leaving a short walk along the promenade. Coming back out, the same applies in reverse: we will tell you which road to come out to rather than leaving you to guess.",
      "This matters most if anyone in your party has limited mobility. Say so when you book and we will choose the closest workable stopping point and allow extra time, rather than dropping you at whichever end happens to be convenient for traffic.",
      `The museum sits between the city centre and the Clarendon Park side of town, both of which we cover constantly. Book online, call ${PHONE_DISPLAY} or send us a WhatsApp message, and the fare is agreed before you travel.`,
    ],
    faqs: [
      {
        question: "Can a taxi drop me at the museum entrance?",
        answer:
          "Not at the door — New Walk is a pedestrian promenade, so no vehicle can pull up outside. We take you to the nearest point a car can stop, which leaves a short walk along the walkway.",
      },
      {
        question: "What if someone in my group cannot walk far?",
        answer:
          "Tell us when you book. We will pick the closest workable stopping point rather than the most convenient one for traffic, and allow extra time. Wheelchair accessible vehicles are available on request.",
      },
      {
        question: "Where will you collect me afterwards?",
        answer:
          "Your driver will tell you which surrounding road to come out to before you leave, so you are not trying to find the car on a pedestrian walkway.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Outlying towns and villages                                         */
  /* ------------------------------------------------------------------ */
  "ashby-de-la-zouch": {
    bodyParagraphs: [
      "Ashby de la Zouch sits out in north-west Leicestershire, well beyond the Leicester suburbs, and that distance shapes the work. These are longer journeys than our city runs, which makes a fixed price agreed before you travel considerably more valuable — on a trip of this length, a meter running in traffic is a real risk and a quoted fare is not.",
      "Airport transfers are the single biggest reason people in Ashby book with us. The town sits in the part of the county closest to East Midlands Airport, and early departures mean pickups long before public transport is an option. We run 24 hours a day, so a 3am start is an ordinary booking, and we will confirm the collection time against your flight when you book.",
      "The rest divides between journeys into Leicester itself — hospital appointments, meetings, nights out — and longer trips to Birmingham, Nottingham and further afield. For anything beyond the county we will quote the whole route up front, including the return if you want it booked at the same time.",
      `Because Ashby is further out, give us as much notice as you can, particularly for early mornings. We also cover Coalville and the surrounding north-west Leicestershire villages. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Do you cover Ashby de la Zouch for airport transfers?",
        answer:
          "Yes, including very early departures. Give us your flight time when you book and we will agree a collection time that allows for the journey and check-in, at a fixed price confirmed in advance.",
      },
      {
        question: "How much notice do you need for Ashby?",
        answer:
          "As much as you can give, especially for early-morning starts. Ashby is further out than our city work, so pre-booking is more important here than for a short local run.",
      },
      {
        question: "Can you take me from Ashby to Leicester city centre?",
        answer:
          "Yes, and it is a regular booking — appointments, meetings and evenings out. The fare is fixed before you travel, so a slow stretch of road does not change what you pay.",
      },
    ],
  },

  rothley: {
    bodyParagraphs: [
      "Rothley is a village north of Leicester, close enough for a daily commute but far enough out that evening and late-night transport options thin out quickly. That gap is where most of our Rothley bookings sit: the journey home when nothing else is running.",
      "Commuting is the other half. We run regularly between Rothley and Leicester railway station for people catching trains to London and the north, and those are easy to set up as a standing booking — the same train, the same time, the same days each week, without rebooking.",
      "Village roads are narrow in places and some properties are set back, so a mobile number is worth leaving when you book. Your driver will call if there is any doubt about the exact pickup point, which is quicker than circling a lane in the dark.",
      `From Rothley we cover the whole northern side of Leicester, including Birstall, Thurcaston and Syston, as well as running into the city and out to the airports. Book online, call ${PHONE_DISPLAY} or send us a WhatsApp message — the fare is agreed before the driver sets off.`,
    ],
    faqs: [
      {
        question: "Do you cover Rothley late at night?",
        answer:
          "Yes, 24 hours a day. Late journeys home are one of the most common reasons people in Rothley book with us, since options into the village thin out in the evening. The fare does not change at night.",
      },
      {
        question: "Can I book a regular trip to the station?",
        answer:
          "Yes. Tell us the days and times and we will hold them as a standing booking for Leicester railway station, so you are not arranging the same journey every week.",
      },
      {
        question: "Will the driver find my house in the village?",
        answer:
          "Leave a mobile number when you book. If a property is set back or the lane is hard to identify, your driver will call to confirm rather than circling.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Hospitals                                                           */
  /* ------------------------------------------------------------------ */
  "spire-leicester-hospital": {
    bodyParagraphs: [
      "Spire Leicester is a private hospital on the Oadby side of the city, and the journeys we run to it are almost all planned rather than urgent — scheduled admissions, consultations and day procedures, booked days or weeks ahead. That makes them easy to get right, provided the details are set up properly at the booking stage.",
      "Discharge is the part worth thinking about. After a procedure you may not be able to drive, and you may not know the exact hour you will be released. Book an approximate time and message us when you are ready — moving a booking is quick, and it is far better than standing outside a hospital trying to arrange a car.",
      "Tell us at the booking stage if you will need a wheelchair accessible vehicle, extra time getting in and out, or room for a companion travelling with you. All of that is straightforward to arrange in advance and awkward to sort out when the driver arrives.",
      `We cover Oadby, Stoneygate, Evington and the surrounding areas constantly, as well as running to the city's other hospitals. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp, and the fare is confirmed before you travel.`,
    ],
    faqs: [
      {
        question: "What if I do not know exactly when I will be discharged?",
        answer:
          "Book an approximate time and message us on WhatsApp when you are ready to leave. We will move the booking — that is much quicker than arranging a new journey from the hospital entrance.",
      },
      {
        question: "Can someone travel with me?",
        answer:
          "Yes. Tell us when you book that a companion is travelling and we will allocate a vehicle with room for both of you and anything you are carrying.",
      },
      {
        question: "Do you have wheelchair accessible vehicles?",
        answer:
          "Yes, on request. Mention it when you book so the right vehicle is allocated, and give us as much notice as you can.",
      },
    ],
  },

  "leicester-general-hospital": {
    bodyParagraphs: [
      "Leicester General sits on the Evington side of the city and handles a large volume of outpatient appointments, which is reflected in the kind of work we do there. A great deal of it is repeat travel: the same patient, the same department, often the same day each week or fortnight.",
      "Those repeating journeys are much easier as a standing booking. Give us the schedule once and we will hold the slots rather than making you arrange each trip from scratch — and where we can, we will try to keep the same driver, which matters to a lot of patients attending regularly.",
      "Appointment times are fixed but finishing times are not, which is the usual complication. Book the outbound trip to arrive with a margin, and for the return either give us an estimate or message us when you are done and we will send the next available car.",
      `Say at the booking stage if you need a wheelchair accessible vehicle, help to and from the department entrance, or space for a companion. We cover Evington, Humberstone, Spinney Hills and the surrounding areas throughout. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Can I set up regular transport to appointments?",
        answer:
          "Yes. Tell us the days and times and we will hold them as a standing booking. Where we can manage it we will send the same driver, which many regular patients prefer.",
      },
      {
        question: "What if my appointment overruns?",
        answer:
          "Message us when you are ready and we will send the next available car, or move a booked return to a later time. There is no penalty for an appointment running long.",
      },
      {
        question: "Will the driver help me to the entrance?",
        answer:
          "Yes, if you ask when you book. Drivers will help you to and from the department entrance and allow extra time. Wheelchair accessible vehicles are available on request.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* City-centre landmarks                                               */
  /* ------------------------------------------------------------------ */
  "leicester-market": {
    bodyParagraphs: [
      "Leicester Market sits at the heart of the city centre, and the single thing that defines taxi journeys to it is what you are carrying on the way back. People arrive empty-handed and leave with bags — which is why the return trip is booked far more often than the outbound one.",
      "The market sits inside the pedestrianised part of the centre, so a car cannot pull up at the stalls. We take you to the nearest point vehicles can stop and your driver will tell you where to come back out to, rather than leaving you to work it out while holding a week's fruit and veg.",
      "If you are planning a big shop, mention it when you book. A saloon is fine for a couple of bags; beyond that an estate is more comfortable, and your driver can help you load at the agreed meeting point.",
      `Market trips combine easily with the rest of the centre, and plenty of our passengers pair one with Highcross or the Lanes. Tell us about any extra stop when you book and we will quote the journey as a whole. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Can a taxi collect me at the market stalls?",
        answer:
          "Not at the stalls themselves — that part of the centre is pedestrianised. We collect from the nearest point a vehicle can stop, and your driver will tell you exactly where to come out to.",
      },
      {
        question: "Can you take a large market shop?",
        answer:
          "Yes. Tell us roughly what you will be carrying when you book and we will send a vehicle with the boot space for it. Your driver will help you load.",
      },
      {
        question: "Can I add another stop in the city centre?",
        answer:
          "Yes. Give us the full journey when you book, including any extra stop, and we will quote it as one fixed fare rather than as separate trips.",
      },
    ],
  },

  "leicester-cathedral": {
    bodyParagraphs: [
      "Leicester Cathedral sits in the oldest part of the city centre, surrounded by narrow streets that were never built for traffic. That is the practical constraint on every journey we run there, and it is worth knowing before you book rather than discovering it on arrival.",
      "The occasions matter more than the volume here. A great deal of our cathedral work is weddings, funerals, memorials and services — journeys where arriving on time is not negotiable and where there is often a group travelling together. Book early for those, tell us your numbers, and we will allocate the right vehicles rather than improvising on the day.",
      "For funerals and memorials in particular, let us know if anyone travelling needs help getting in and out of the car or a wheelchair accessible vehicle. We would far rather have that arranged quietly in advance than handled at the kerb.",
      `Because of the narrow streets, your driver will agree a workable meeting point with you rather than attempting the closest lane. The cathedral sits a short walk from the Lanes and the rest of the centre, all of which we cover throughout the day and night. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Can you take a group to a service at the cathedral?",
        answer:
          "Yes. Tell us how many are travelling when you book and we will allocate vehicles to match, arriving together. For weddings and funerals, booking well in advance is strongly advised.",
      },
      {
        question: "Where will the taxi drop me off?",
        answer:
          "The streets immediately around the cathedral are narrow, so your driver will agree a nearby point where the car can stop safely, leaving a short walk. You will know where before you set off.",
      },
      {
        question: "Can you arrange accessible transport for a service?",
        answer:
          "Yes. Wheelchair accessible vehicles are available on request, and drivers will allow extra time and help passengers to and from the car. Mention it when you book.",
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Added Nov 2026 — facts below were checked against official sources: */
  /* UHL/AccessAble (Glenfield), East Midlands Railway & CrossCountry    */
  /* station pages (Leicester station), NHS.uk (Nuffield), and the       */
  /* National Space Centre's own "how to find us" page.                  */
  /* ------------------------------------------------------------------ */
  "glenfield-hospital": {
    bodyParagraphs: [
      "Glenfield Hospital is on Groby Road (LE3 9QP), on the north-west edge of the city. It is part of University Hospitals of Leicester and is where the region's heart and lung services are based, including cardiac, thoracic and congenital heart surgery, so many of the journeys we run there are for planned appointments, admissions and follow-up clinics rather than emergencies.",
      "For most visits we drop off at the bays beside the main entrance, which is also where the bus stop is. If you are going to a particular outpatient clinic or ward, tell us when you book: the site is large, and knowing where you are heading helps the driver choose the closest sensible stop.",
      "Discharge and long appointments rarely run to time. Book an approximate return and message us on WhatsApp when you are ready to leave, and we will move the pickup rather than make you start a new booking at the entrance. If you need a wheelchair accessible vehicle, or help getting in and out of the car, mention it when you book.",
      `Glenfield sits close to Glenfield village, Beaumont Leys and Braunstone, which we cover every day, and we run between Glenfield and the city's other hospitals too. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp, and the fare is agreed before you travel.`,
    ],
    faqs: [
      {
        question: "Where will the taxi drop me at Glenfield Hospital?",
        answer:
          "Usually at the drop-off bays by the main entrance on the Groby Road site. If you are attending a specific clinic or ward, tell us when you book and the driver will aim for the most convenient point.",
      },
      {
        question: "What if my appointment overruns or I do not know my discharge time?",
        answer:
          "Book an approximate return time and message us on WhatsApp when you are ready. We will move the booking — quicker than arranging a new car from the entrance.",
      },
      {
        question: "Can you take a wheelchair user to Glenfield Hospital?",
        answer:
          "Yes. Wheelchair accessible vehicles are available on request — mention it when you book so the right vehicle is allocated.",
      },
    ],
  },

  "leicester-railway-station": {
    bodyParagraphs: [
      "Leicester railway station is on London Road (LE2 0QB), at the south-east edge of the city centre. It is served by East Midlands Railway on the Midland Main Line and by CrossCountry, so the journeys we run to and from it range from daily commutes to people arriving in Leicester for the first time with luggage.",
      "The taxi rank is at the station front on London Road, and there is a short-stay pick-up and drop-off area in the car park with step-free access to the concourse. If you have booked us for a collection, tell us which of those you will be waiting at, and give us your train time — if it is running late, message us and we will adjust.",
      "Pre-booking makes most sense for early-morning departures, late-evening arrivals and anyone travelling with heavy cases, children or a wheelchair. You know the fare before you travel, and you are not relying on the rank having a car at the moment your train gets in.",
      `From the station we run across the city and county — home to Aylestone, Oadby, Wigston and Clarendon Park, out to the business parks, or straight on to the airports. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Where do I meet a pre-booked taxi at Leicester station?",
        answer:
          "Tell us when you book whether you will be at the front of the station on London Road or the short-stay pick-up area in the car park, which has step-free access. The driver will meet you at the point you choose.",
      },
      {
        question: "My train is delayed — what happens to my booking?",
        answer:
          "Give us your train details when you book and message us if it is running late. We will move the pickup to your new arrival time.",
      },
      {
        question: "Can you take me from Leicester station to the airport?",
        answer:
          "Yes. We run from the station to East Midlands, Birmingham and the London airports, with the fare agreed before you travel.",
      },
    ],
  },

  "nuffield-health-leicester-hospital": {
    bodyParagraphs: [
      "Nuffield Health Leicester Hospital is a private hospital on Scraptoft Lane (LE5 1HY), on the eastern side of the city. Almost every journey we run there is planned in advance: consultations, scans, day surgery and scheduled admissions.",
      "Getting home is the part to plan. After a procedure you may be told not to drive, and you may not know the exact time you will be released. Book an approximate return and message us on WhatsApp when you are ready to go, and we will move the pickup.",
      "Let us know when you book if you need extra time getting in and out of the car, a wheelchair accessible vehicle, or room for someone travelling with you. Those are easy to arrange beforehand and awkward to sort out when the driver arrives.",
      `The hospital is close to Evington, Hamilton and Thurnby Lodge, which we cover throughout the day. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp, and the fare is confirmed before you travel.`,
    ],
    faqs: [
      {
        question: "Can I book my return from Nuffield Health Leicester Hospital without a fixed time?",
        answer:
          "Yes. Book an approximate time, then message us on WhatsApp when you are ready to leave and we will move the pickup.",
      },
      {
        question: "Can a friend or relative travel with me?",
        answer:
          "Yes. Tell us when you book so we allocate a vehicle with room for both of you and anything you are carrying.",
      },
    ],
  },

  "national-space-centre": {
    bodyParagraphs: [
      "The National Space Centre is on Exploration Drive (LE4 5NS), about two miles north of Leicester city centre just off the A6, between the inner and outer ring roads. It is one of the city's biggest family attractions, so the journeys we run there are mostly day trips: families, school groups and visitors arriving in Leicester by train.",
      "Drop-off is at the front of the building, by the main car park off Exploration Drive. For a family, a taxi saves finding a space on a busy day — and if you are coming in by train, it is a short, direct run from Leicester station.",
      "Most visits last several hours, so the easiest approach is to book the return at the same time and message us if you leave earlier or later. For groups, tell us how many are travelling and whether you have pushchairs, and we will send an MPV or more than one car.",
      `We pick up across the city and county for Space Centre trips, including Belgrave, Birstall and Rushey Mead nearby. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp, and the fare is agreed before you travel.`,
    ],
    faqs: [
      {
        question: "Can you take a family or school group to the National Space Centre?",
        answer:
          "Yes. Tell us how many are travelling and whether you have pushchairs or wheelchairs, and we will send an MPV or arrange more than one vehicle.",
      },
      {
        question: "Can I get a taxi from Leicester station to the National Space Centre?",
        answer:
          "Yes. It is a short, direct run from the station, about two miles north of the city centre. Pre-book with your train time and we will meet you.",
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Added Nov 2026 (GSC: highest-demand weak pages). Facts checked:     */
  /* St Margaret's — National Express station page & AccessAble guide;   */
  /* Groby — Hinckley & Bosworth conservation appraisal, Groby Pool      */
  /* history; Earl Shilton — Hinckley & Bosworth / county council refs.  */
  /* ------------------------------------------------------------------ */
  "st-margarets-bus-station": {
    bodyParagraphs: [
      "St Margaret's Bus and Coach Station is on Gravel Street (LE1 3AG), just off Leicester's inner ring road and a short walk from the city centre. It is the city's main coach station: National Express long-distance coaches have run from the current building since it opened in 2022, alongside local and regional bus services.",
      "Coaches often arrive early in the morning or late at night, when buses are thin and a walk across the city with luggage is the last thing anyone wants. Tell us your coach's arrival time and where it is coming from, and we will be there when you get in. If it is running late, message us on WhatsApp and we will move the pickup.",
      "We run from St Margaret's to every part of Leicester and the county — Belgrave and Rushey Mead to the north, Highfields and Evington to the east, and out to Oadby, Wigston and beyond. It is also a common start point for onward trips to Leicester railway station, the hospitals and the airports.",
      `Fares are agreed before you travel, and every driver is licensed and DBS-checked. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp, and tell us how many of you are travelling and how much luggage you have.`,
    ],
    faqs: [
      {
        question: "Can you pick me up from St Margaret's coach station when my coach arrives?",
        answer:
          "Yes. Give us your coach's arrival time and where it is coming from when you book, and message us on WhatsApp if it is delayed so we can move the pickup.",
      },
      {
        question: "Where is St Margaret's Bus Station?",
        answer:
          "On Gravel Street, Leicester LE1 3AG, just off the inner ring road and a short walk from the city centre.",
      },
      {
        question: "Can you take me from St Margaret's to the railway station or the airport?",
        answer:
          "Yes. We run onward trips to Leicester railway station, East Midlands, Birmingham and the London airports, with the fare agreed before you travel.",
      },
    ],
  },

  groby: {
    bodyParagraphs: [
      "Groby is a village north-west of Leicester, in Hinckley and Bosworth, sitting just north of where the A50 meets the city's outer ring road. It is about five miles from Leicester city centre along the A50, which is the route most of our Groby journeys take into town.",
      "The village's best-known landmark is Groby Pool, reputedly the largest natural expanse of open water in Leicestershire, on the road towards Newtown Linford. We drop off and collect walkers there regularly — tell us which side of the pool you will be at, as the car park is on the Groby side.",
      "Glenfield, Ratby, Field Head and Markfield are all close by, and Glenfield Hospital is a short run from most of the village, which makes Groby a regular pickup for appointments and hospital visits. Give us the department or entrance when you book.",
      `Standing bookings work well here for commuting into Leicester or the school run, and we cover airport runs to East Midlands and Birmingham 24/7. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp — the fare is agreed before you travel.`,
    ],
    faqs: [
      {
        question: "How far is Groby from Leicester city centre?",
        answer:
          "About five miles, usually along the A50. Tell us when you need to arrive and we will set a pickup time that allows for traffic.",
      },
      {
        question: "Can you take me from Groby to Glenfield Hospital?",
        answer:
          "Yes. Glenfield Hospital is a short run from Groby. Give us the department or entrance when you book so the driver goes to the right place.",
      },
      {
        question: "Can I get a taxi to or from Groby Pool?",
        answer:
          "Yes. The car park is on the Groby side of the pool — tell us where you will be waiting and we will meet you there.",
      },
    ],
  },

  "earl-shilton": {
    bodyParagraphs: [
      "Earl Shilton is a small market town in Hinckley and Bosworth, west of Leicester and next to Barwell, with Hinckley a few miles further on. It is about ten miles from Leicester by road, and most journeys into the city run along the A47.",
      "Because it sits between Leicester and Hinckley, Earl Shilton journeys go both ways: into Leicester for work, shopping and hospital appointments, and out to Hinckley, including Hinckley railway station for trains. Tell us where you are heading and when you need to be there.",
      "Airport runs are common from this side of Leicestershire, to East Midlands, Birmingham and further afield. Book these in advance — we operate 24/7, so early departures are no problem, and the fare is agreed before you travel.",
      `We also cover Barwell, Hinckley and the surrounding villages on the same dispatch. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "How far is Earl Shilton from Leicester?",
        answer:
          "About ten miles by road, usually along the A47. Tell us when you need to arrive and we will plan the pickup around traffic.",
      },
      {
        question: "Do you cover Barwell and Hinckley as well as Earl Shilton?",
        answer:
          "Yes. Barwell, Hinckley and the nearby villages are covered on the same service, including runs to Hinckley railway station.",
      },
      {
        question: "Can you take me from Earl Shilton to the airport?",
        answer:
          "Yes. We run to East Midlands, Birmingham and the London airports 24/7, with the fare agreed before you travel.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Added Nov 2026 — the 13 weakest indexable area pages (most template */
  /* text, least unique copy). Facts checked against: Harborough DC      */
  /* settlement profiles (Broughton Astley, the Kibworths); Whetstone &  */
  /* Countesthorpe parish councils; Leicestershire CC Cosby flood report;*/
  /* Leicester City Council (Old Humberstone appraisal, Westcotes        */
  /* Library); University of Leicester, DMU and Leicester College campus */
  /* pages; Charity Commission (Masjid Umar); Braunstone Town Council.   */
  /* No fares or journey times — distances only where a source gives one.*/
  /* ------------------------------------------------------------------ */
  "broughton-astley": {
    bodyParagraphs: [
      "Broughton Astley is one of the largest villages in Harborough district, sitting west of the M1 on the border with Blaby district. Leicester city centre is about nine miles to the north and Hinckley about six miles to the west, so journeys from here run in every direction rather than only into the city.",
      "With more than 9,000 people in the parish and no railway station of its own, getting to a train is one of the most common reasons to book a taxi here. Narborough is the nearest station, and Leicester station is the one most people use for London and the north — tell us your train time and we will set a pickup that leaves room to spare.",
      "Airport runs are the other big one. East Midlands, Birmingham and the London airports are all regular bookings from the village, and because we run 24/7 an early departure is an ordinary booking. Give us your flight details when you book and the fare is agreed before you travel.",
      `We also cover Sutton in the Elms, Primethorpe and the villages around them, and standing bookings work well for commutes and the school run. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "How far is Broughton Astley from Leicester?",
        answer:
          "About nine miles from Leicester city centre. Tell us when you need to arrive and we will set a pickup time that allows for traffic.",
      },
      {
        question: "Can you take me from Broughton Astley to a railway station?",
        answer:
          "Yes. Narborough is the nearest station and we run to Leicester station for longer journeys. Give us your train time when you book.",
      },
      {
        question: "Do you cover Primethorpe and Sutton in the Elms?",
        answer:
          "Yes. Both are covered on the same service as Broughton Astley, including early-morning airport runs.",
      },
    ],
  },

  whetstone: {
    bodyParagraphs: [
      "Whetstone is a village in Blaby district about five miles south of Leicester, and for many of the people who live there it is a commuter village — work, college and appointments are mostly in the city.",
      "It sits in a tight cluster of south Leicestershire villages: Blaby, Cosby, Countesthorpe and Enderby are all close by, so a lot of Whetstone journeys are short hops between them as well as trips into Leicester. Narborough and South Wigston are the nearest stations.",
      "For longer trips we run from Whetstone to East Midlands, Birmingham and the London airports 24/7. Book these in advance, give us your flight time, and we will confirm the pickup and the fare before you travel.",
      `Regular journeys — the commute, the school run, a weekly hospital appointment — can be set up as a standing booking so you are not rebooking every time. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "How far is Whetstone from Leicester city centre?",
        answer:
          "About five miles south of the city. Tell us when you need to arrive and we will plan the pickup around traffic.",
      },
      {
        question: "Do you do short journeys between Whetstone and nearby villages?",
        answer:
          "Yes. Trips to Blaby, Cosby, Countesthorpe, Enderby and Narborough are regular bookings, not just runs into Leicester.",
      },
      {
        question: "Can I set up a regular taxi from Whetstone?",
        answer:
          "Yes. Give us the days and times and we will hold them as a standing booking. Let us know if a week changes.",
      },
    ],
  },

  kibworth: {
    bodyParagraphs: [
      "Kibworth is really two villages, Kibworth Harcourt to the north and Kibworth Beauchamp to the south, with the A6 running between them. It lies about nine miles south-east of Leicester city centre and about seven miles from Market Harborough, and the A6 is the road most of our Kibworth journeys use.",
      "The village has had no passenger station since 1968, so trains mean a drive to Market Harborough or Leicester. Both are regular runs for us — give us your train time when you book and we will build in a sensible margin.",
      "Kibworth is also known as the village at the centre of Michael Wood's BBC series Story of England, which traced its history from Roman times to the present. Neighbouring Smeeton Westerby is covered on the same service.",
      `For airport runs, hospital appointments in Leicester and nights out in the city with a booked ride home, call ${PHONE_DISPLAY}, book online or message us on WhatsApp. The fare is agreed before you travel, and we run 24/7.`,
    ],
    faqs: [
      {
        question: "How far is Kibworth from Leicester?",
        answer:
          "About nine miles south-east of Leicester city centre along the A6. Tell us your arrival time and we will set the pickup to suit.",
      },
      {
        question: "Can you take me from Kibworth to Market Harborough station?",
        answer:
          "Yes. Market Harborough is about seven miles away and is a regular run from Kibworth, as is Leicester station.",
      },
      {
        question: "Do you cover both Kibworth Beauchamp and Kibworth Harcourt?",
        answer: "Yes, both villages and Smeeton Westerby are covered, 24 hours a day.",
      },
    ],
  },

  cosby: {
    bodyParagraphs: [
      "Cosby is a village about seven miles south-west of Leicester city centre, in Blaby district, with Cosby Brook running through the middle of it on its way to the River Soar. Whetstone, Blaby and Narborough are its nearest neighbours.",
      "Narborough station is the closest railway station, only a short run from Cosby — tell us the train you are catching and we will be there in good time. For London and longer routes, we take people to Leicester station.",
      "Typical Cosby journeys include getting into Leicester for work or hospital appointments, airport runs to East Midlands, Birmingham or London, and a booked lift home after an evening in the city.",
      `We run 24/7 and the fare is agreed before you travel. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp, and ask about a standing booking if you make the same journey every week.`,
    ],
    faqs: [
      {
        question: "How far is Cosby from Leicester?",
        answer: "About seven miles south-west of Leicester city centre. Tell us when you need to arrive and we will plan the pickup.",
      },
      {
        question: "Which railway station is nearest to Cosby?",
        answer:
          "Narborough. We run between Cosby and Narborough station regularly, and to Leicester station for longer journeys.",
      },
      {
        question: "Can I book a taxi home to Cosby after a night out in Leicester?",
        answer:
          "Yes. Book your return when you book the outward trip, or message us on WhatsApp when you are ready to leave.",
      },
    ],
  },

  countesthorpe: {
    bodyParagraphs: [
      "Countesthorpe is a large village of around 7,000 people in Blaby district, about six miles south of Leicester and only a couple of miles beyond South Wigston. It has grown from a small settlement that once depended on neighbouring Blaby into one of the bigger villages south of the city.",
      "South Wigston is the nearest station, and we also take a lot of Countesthorpe passengers to Leicester station for London trains. Tell us the train time when you book and we will set the pickup to leave a comfortable margin.",
      "Typical Countesthorpe journeys are the commute into Leicester, hospital appointments, school and college runs, and shopping trips to Fosse Park and the city centre. Whetstone, Cosby, Blaby and Wigston are all close by and covered on the same service.",
      `For airport runs we cover East Midlands, Birmingham and the London airports 24/7. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp — the fare is agreed before you travel.`,
    ],
    faqs: [
      {
        question: "How far is Countesthorpe from Leicester city centre?",
        answer: "About six miles south of the city centre. Tell us your arrival time and we will plan the pickup around traffic.",
      },
      {
        question: "Can you take me from Countesthorpe to a railway station?",
        answer:
          "Yes. South Wigston is the nearest station, and we run to Leicester station for London and longer journeys.",
      },
      {
        question: "Do you cover Countesthorpe for early airport departures?",
        answer: "Yes. We run 24/7, so early pickups for East Midlands, Birmingham and the London airports are routine bookings.",
      },
    ],
  },

  "braunstone-town": {
    bodyParagraphs: [
      "Braunstone Town is a town and civil parish in Blaby district on the western edge of Leicester. It is a separate place from the Braunstone estate inside the city, which causes confusion when booking — if you are in Braunstone Town, Thorpe Astley or the streets around them, say so and we will send the driver to the right side of the boundary.",
      "The Thorpe Astley development, built from the mid-1990s, is part of the parish, and the area sits right next to junction 21 of the M1, the Meridian Business and Leisure Parks, Fosse Shopping Park and the Grove Triangle retail park. All of them are regular pickup and drop-off points.",
      "Being beside the M1 makes Braunstone Town a convenient starting point for airport runs to East Midlands and Birmingham and for longer trips south. We run 24/7, so early departures and late arrivals are ordinary bookings.",
      `For trips into Leicester, hospital appointments, or a lift home from Fosse Park with the shopping, book online, call ${PHONE_DISPLAY} or message us on WhatsApp. The fare is agreed before you travel.`,
    ],
    faqs: [
      {
        question: "Is Braunstone Town the same as Braunstone?",
        answer:
          "No. Braunstone Town is a separate town in Blaby district, including Thorpe Astley; Braunstone is an estate inside Leicester. Tell us which when you book so the driver goes to the right place.",
      },
      {
        question: "Do you pick up from Fosse Park and Meridian Business Park?",
        answer: "Yes. Both are next to Braunstone Town and are regular pickups. Tell us which entrance or unit you will be at.",
      },
      {
        question: "Do you cover Thorpe Astley?",
        answer: "Yes. Thorpe Astley is part of Braunstone Town and is covered 24/7.",
      },
    ],
  },

  "thurnby-lodge": {
    bodyParagraphs: [
      "Thurnby Lodge is an estate on the eastern edge of Leicester, inside the city boundary. It was built from the early 1950s and is roughly bounded by Uppingham Road to the south, the A563 outer ring road to the west and Scraptoft Lane to the north.",
      "Despite the name it is not part of Thurnby village, which lies to the south-east, with Scraptoft to the east. When you book, give us the street rather than just the area name so the driver comes straight to you.",
      "Uppingham Road is the main route into the city centre from here, and the outer ring road gives quick access to the rest of east Leicester, including Leicester General Hospital. Hospital appointments, the commute and shopping trips make up most of our weekday bookings.",
      `We cover Thurnby Lodge, Thurnby, Scraptoft and Bushby 24/7, including airport runs. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp — the fare is agreed before you travel.`,
    ],
    faqs: [
      {
        question: "Is Thurnby Lodge the same as Thurnby?",
        answer:
          "No. Thurnby Lodge is an estate inside the Leicester city boundary; Thurnby village lies to the south-east. We cover both — just give us the street when you book.",
      },
      {
        question: "Can you take me from Thurnby Lodge to Leicester General Hospital?",
        answer: "Yes. Tell us the department or entrance when you book so the driver drops you at the right door.",
      },
      {
        question: "Do you cover Scraptoft as well?",
        answer: "Yes. Scraptoft, Thurnby and Bushby are all covered on the same service.",
      },
    ],
  },

  humberstone: {
    bodyParagraphs: [
      "Humberstone is one of Leicester's old village suburbs on the east side of the city. The village appears in the Domesday Book of 1086, and the last of the parish was absorbed into Leicester in 1935 — the Old Humberstone conservation area still keeps much of the village character.",
      "Today Humberstone runs into Hamilton to the north-east, and the area is covered by the Humberstone and Hamilton ward. Humberstone Park is a local landmark and a handy meeting point if you are not sure exactly where to be picked up.",
      "Typical Humberstone journeys are trips into the city centre, hospital appointments, school runs and airport runs. The station, the hospitals and the city centre are all regular destinations, and we take people home again after evenings out.",
      `We run 24/7 with the fare agreed before you travel. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp, and ask about a standing booking for regular journeys.`,
    ],
    faqs: [
      {
        question: "Do you cover Old Humberstone and Hamilton?",
        answer: "Yes. Old Humberstone, the wider Humberstone area and Hamilton are all covered 24/7.",
      },
      {
        question: "Can you pick me up near Humberstone Park?",
        answer: "Yes. Tell us which side of the park you will be on, or give us the nearest street, and the driver will meet you there.",
      },
      {
        question: "Can I book a regular taxi from Humberstone?",
        answer: "Yes. Give us the days and times and we will hold them as a standing booking.",
      },
    ],
  },

  westcotes: {
    bodyParagraphs: [
      "Westcotes is an inner-city area and ward on the west side of Leicester, built around Narborough Road, Hinckley Road and Braunstone Gate. It is close enough to the city centre that many people walk in, but not with luggage, shopping or at the end of a long night out.",
      "Narborough Road is one of the city's busiest shopping streets and runs right through the area — Westcotes Library is on it, at 38–40 Narborough Road, and makes a clear landmark if you are not sure where to wait.",
      "Braunstone Gate leads straight towards the river and the De Montfort University side of the city centre, so it is a handy area for DMU students and staff. We also run regularly to Leicester station, the hospitals and the airports.",
      `We operate 24/7, the fare is agreed before you travel, and every driver is licensed and DBS-checked. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Do you pick up on Narborough Road and Hinckley Road?",
        answer: "Yes. Both are covered, along with Braunstone Gate and the streets in between. Give us a door number or landmark when you book.",
      },
      {
        question: "Can you take me from Westcotes to Leicester station with luggage?",
        answer: "Yes. Tell us how many bags you have and we will send a car with enough room.",
      },
      {
        question: "Do you cover Westcotes late at night?",
        answer: "Yes. We run 24 hours a day, seven days a week, with the same fixed-fare approach at night as during the day.",
      },
    ],
  },

  "university-of-leicester": {
    bodyParagraphs: [
      "The University of Leicester's main campus is on University Road (LE1 7RH), south of the city centre and right next to Victoria Park. Give us the building name when you book — the campus is large and the right drop-off point saves a walk.",
      "Student accommodation is split between two main sites. Freemen's Common, on Welford Road, is about 500 metres from the main campus. The Oadby Student Village is around three miles away in Oadby, with its reception on Manor Road — a regular run for us at the start and end of term.",
      "Move-in and move-out weekends are busy times to travel. If you are moving in or out with a car full of bags, book an estate or an MPV rather than a saloon, and tell us how many of you are travelling. We also take students to Leicester station and the airports for trips home.",
      `For late nights, graduation days and visiting family, we run 24/7 with the fare agreed before you travel. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Can you take me from Oadby Student Village to the main campus?",
        answer: "Yes. The village is around three miles from the main campus. Give us the building you need when you book.",
      },
      {
        question: "Can you help with moving in or out of University of Leicester halls?",
        answer: "Yes. Tell us how much you are bringing and we will send an estate or an MPV so everything fits.",
      },
      {
        question: "Where on campus can you drop me off?",
        answer:
          "Anywhere the campus roads allow. Give us the building name or the nearest entrance on University Road when you book.",
      },
    ],
  },

  "de-montfort-university": {
    bodyParagraphs: [
      "De Montfort University's campus is in the heart of Leicester, around The Gateway (LE1 9BH), close to the River Soar and the historic Leicester Castle area. The Vijay Patel Building on Mill Lane, home to art and design, and the Castle Business School are among the buildings we drop off at most.",
      "Because the campus sits right by the city centre, many DMU journeys are short ones — to Leicester station, St Margaret's coach station, the hospitals, or student houses in the west and south of the city. Tell us the building name when you book and we will get you to the nearest door the roads allow.",
      "Term start and end bring a rush of moves between halls and shared houses. Book an estate or an MPV if you are moving with luggage, and tell us how many people are travelling so one car does the job.",
      `We run 24/7 with the fare agreed before you travel, so late finishes and early trains are covered. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
    ],
    faqs: [
      {
        question: "Can you drop me at a specific DMU building?",
        answer: "Yes. Give us the building name — for example the Vijay Patel Building on Mill Lane — and we will get as close as the roads allow.",
      },
      {
        question: "Do you do moves between DMU halls and student houses?",
        answer: "Yes. Tell us how much you are moving and we will send a vehicle with the space for it.",
      },
      {
        question: "Can you take me from DMU to Leicester station?",
        answer: "Yes, at any time of day or night. Tell us your train time when you book.",
      },
    ],
  },

  "leicester-college": {
    bodyParagraphs: [
      "Leicester College teaches across three main campuses in the city, so the most useful thing you can tell us when booking is which one you need: Abbey Park Campus on Painter Street (LE1 3WA), Freemen's Park Campus on Welford Road (LE2 7LW), or St Margaret's Campus on St John Street (LE1 3WL).",
      "Abbey Park and St Margaret's are on the north side of the city centre, a few minutes' walk from St Margaret's bus station. Freemen's Park is south of the centre, on the same side of town as our base on Aylestone Road, so it is usually a quick pickup for us.",
      "Regular college runs are easy to set up as a standing booking — the same pickup on the same days each week, with the return booked too. Parents often arrange these for younger students, and we can do the same for evening classes that finish late.",
      `We also take students and staff to Leicester station and the airports. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp — every driver is licensed and DBS-checked, and the fare is agreed before you travel.`,
    ],
    faqs: [
      {
        question: "Which Leicester College campus do you go to?",
        answer:
          "All of them — Abbey Park (Painter Street), Freemen's Park (Welford Road) and St Margaret's (St John Street). Tell us which one when you book.",
      },
      {
        question: "Can I set up a regular taxi to Leicester College?",
        answer: "Yes. Give us the days, times and campus and we will hold it as a standing booking, including the return.",
      },
      {
        question: "Do you pick up after evening classes?",
        answer: "Yes. We run 24/7, so a late class finish is no problem. Book the return when you book the outward trip.",
      },
    ],
  },

  "masjid-umar": {
    bodyParagraphs: [
      "Masjid Umar is on Evington Drive (LE5 5PF), in the Evington area of east Leicester, and is run by the Evington Muslim Education Trust. We take worshippers there throughout the week, including for Friday prayers and Eid.",
      "At busy prayer times a taxi each way saves looking for somewhere to park. Tell us the prayer you are attending and when you need to arrive, and book the return at the same time if you know when you will be leaving.",
      "During Ramadan we can take you to and from taraweeh, or to iftar with family. We run 24/7, so a late finish is no problem, and we can send an MPV if several of you are travelling together.",
      `We cover Evington, Highfields, Spinney Hills and the rest of east Leicester, as well as airport runs. Book online, call ${PHONE_DISPLAY} or message us on WhatsApp — the fare is agreed before you travel.`,
    ],
    faqs: [
      {
        question: "Where is Masjid Umar?",
        answer: "On Evington Drive, Leicester LE5 5PF, in the Evington area of east Leicester.",
      },
      {
        question: "Can I book a return taxi after Friday prayers?",
        answer: "Yes. Book the return when you book the outward trip, or message us on WhatsApp when you are ready to leave.",
      },
      {
        question: "Can a family travel together to the mosque?",
        answer: "Yes. Tell us how many of you are travelling and we will send an MPV if a saloon would be too small.",
      },
    ],
  },
}
