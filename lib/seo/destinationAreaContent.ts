/**
 * Unique page copy for destination slugs that previously fell through to the
 * shared category templates in the taxis-in route.
 *
 * Before this file, 18 pages rendered byte-identical body copy in six groups
 * (supermarkets, places of worship, museums/theatre, outlying towns, hospitals
 * and city-centre landmarks), which is a duplicate-content risk across what is
 * meant to be 91 distinct local pages.
 *
 * Deliberately contains no opening hours, fares, travel times or street
 * addresses — none of those are verified anywhere in this codebase. Geography
 * is kept to the district level, which matches the area pages we link to.
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
      "This stretch of Narborough Road sits close to several of the areas we cover most, so the run home is usually short. We pick up and drop off regularly in Braunstone, Westcotes and the streets around Fosse Park, as well as running into the city centre. Book online, call 0116 233 8888 or message us on WhatsApp, and the fare is agreed before you travel.",
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
      "The run from Freemens Common reaches most of the south of the city quickly, and we work constantly in Aylestone, Clarendon Park and the streets around both universities. Book online, call 0116 233 8888, or send a WhatsApp message — the price is fixed before the driver sets off, whatever the time of day.",
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
      "We cover this side of Leicester constantly, including Braunstone, Glen Parva and the villages out towards the county boundary. To arrange a trip to or from Grove Triangle, book online, call 0116 233 8888 or message us on WhatsApp.",
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
      "From Beaumont Leys we run regularly across the north of the city, including Rushey Mead, Birstall and the Mowmacre and Stocking Farm sides, as well as into the centre. Book online, call 0116 233 8888 or send us a WhatsApp message, and the price is confirmed before you travel.",
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
      "We cover St Matthews and the neighbouring areas throughout the day and night, including Belgrave, Humberstone and the city centre itself. Book online, call 0116 233 8888 or message us on WhatsApp — the fare is fixed before you set off.",
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
      "From Oadby we run constantly into Leicester city centre, across to Knighton and Stoneygate, and out to Wigston and the surrounding villages. Book online, call 0116 233 8888 or send a WhatsApp message to arrange a trip to or from Waitrose Oadby.",
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
      "The streets around the mosque are residential and can be congested at peak times, so your driver may call to agree a sensible place to meet. We cover Highfields, Spinney Hills, Evington and the city centre throughout. Book online, call 0116 233 8888 or message us on WhatsApp.",
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
      "Outside festivals this is steady, year-round work: regular visits, family occasions and trips for older relatives who would rather be driven to the door. We cover Belgrave, Rushey Mead and the north of the city throughout. Book online, call 0116 233 8888 or message us on WhatsApp.",
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
      "Being near the centre, the gurdwara is within a short run of most of the inner city. We cover the city centre, Highfields and the surrounding areas throughout the day and night. Book online, call 0116 233 8888 or send us a WhatsApp message and the fare is confirmed before you travel.",
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
      "The Cultural Quarter streets are narrow in places, so your driver may suggest a nearby road for the pickup. We cover the city centre throughout the night, and if your evening carries on after the show, our guide to Leicester city centre pubs, bars and clubs covers the venues nearby. Book online, call 0116 233 8888 or message us on WhatsApp.",
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
      "The site sits within easy reach of the rest of the centre, so visitors often combine it with Highcross or the Lanes. We cover the city centre and all the surrounding areas throughout the day. Book online, call 0116 233 8888 or message us on WhatsApp.",
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
      "The museum sits between the city centre and the Clarendon Park side of town, both of which we cover constantly. Book online, call 0116 233 8888 or send us a WhatsApp message, and the fare is agreed before you travel.",
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
      "Because Ashby is further out, give us as much notice as you can, particularly for early mornings. We also cover Coalville and the surrounding north-west Leicestershire villages. Book online, call 0116 233 8888 or message us on WhatsApp.",
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
      "From Rothley we cover the whole northern side of Leicester, including Birstall, Thurcaston and Syston, as well as running into the city and out to the airports. Book online, call 0116 233 8888 or send us a WhatsApp message — the fare is agreed before the driver sets off.",
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
      "We cover Oadby, Stoneygate, Evington and the surrounding areas constantly, as well as running to the city's other hospitals. Book online, call 0116 233 8888 or message us on WhatsApp, and the fare is confirmed before you travel.",
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
      "Say at the booking stage if you need a wheelchair accessible vehicle, help to and from the department entrance, or space for a companion. We cover Evington, Humberstone, Spinney Hills and the surrounding areas throughout. Book online, call 0116 233 8888 or message us on WhatsApp.",
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
      "Market trips combine easily with the rest of the centre, and plenty of our passengers pair one with Highcross or the Lanes. Tell us about any extra stop when you book and we will quote the journey as a whole. Book online, call 0116 233 8888 or message us on WhatsApp.",
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
      "Because of the narrow streets, your driver will agree a workable meeting point with you rather than attempting the closest lane. The cathedral sits a short walk from the Lanes and the rest of the centre, all of which we cover throughout the day and night. Book online, call 0116 233 8888 or message us on WhatsApp.",
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
}
