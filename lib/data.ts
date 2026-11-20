/*
 * Contact numbers — the ONLY place these digits should be written.
 * Everything else (pages, metadata, JSON-LD, blog HTML) uses these constants,
 * so a number can never drift into a second format again.
 */
/** Visible office number, as shown to people in copy and buttons. */
export const PHONE_DISPLAY = "0116 233 8888"
/** Office number for tel: links — use as `tel:${PHONE_TEL}`. */
export const PHONE_TEL = "01162338888"
/** Office number in international format for schema.org `telephone`. */
export const PHONE_E164 = "+441162338888"
/** Visible WhatsApp number. */
export const WHATSAPP_DISPLAY = "+44 7535 855786"
/** WhatsApp number as wa.me expects it (digits only, no +): `https://wa.me/${WHATSAPP_WA}`. */
export const WHATSAPP_WA = "447535855786"
/** WhatsApp number in international format (machine-readable). */
export const WHATSAPP_E164 = "+447535855786"

/**
 * Online booking (iCabbi web booker). The hostname is set by the booking provider and is not
 * shown as text anywhere on the site — reference this constant, never a hard-coded copy.
 */
export const BOOKING_URL = "https://aylestonekings.webbooker.icabbi.com/"

/**
 * Google Business Profile rating — update monthly from the live profile.
 * Feeds the AggregateRating schema AND every visible mention, so they always match.
 * Last updated: 13 Nov 2026 (4.7 from 195 reviews).
 */
export const GOOGLE_RATING = { value: 4.7, count: 195 } as const

/**
 * London City Airport (LCY) standard fares, confirmed by the business owner (Nov 2026).
 * Single source for /pricing/airports/London-City and the /pricing table so they cannot disagree.
 * Only these two vehicle sizes are confirmed. No journey time is confirmed, and nothing says what
 * the fare includes (airport drop-off charge, parking, waiting) — do not add any of that until supplied.
 */
export const LONDON_CITY_FARES = [
  { vehicle: "1–4 seater vehicle", capacity: "Up to 4 passengers", price: "£200" },
  { vehicle: "6/8 seater vehicle", capacity: "Up to 6 or 8 passengers", price: "£285" },
] as const

export const siteData = {
  // Company Information
  company: {
    name: "Aylestone Taxis",
    /** Registered company name (Companies House 07881172) — schema `legalName` only; the public name stays `name`. */
    legalName: "Aylestone Taxi Ltd",
    tagline: "",
    region: "Leicester and Leicestershire",
    phone: PHONE_DISPLAY,
    phoneE164: PHONE_E164,
    whatsapp: WHATSAPP_E164,
    email: "info@aylestone-taxis.co.uk",
    address: "753A Aylestone Rd, Aylestone, Leicester, LE2 8TG, UK",
    geo: { lat: 52.602358, lng: -1.155715 }, // office, 753A Aylestone Rd (LE2 8TG)
    description:
      "Aylestone Taxis has served Leicester and Leicestershire since 1995, offering fixed-fare local journeys, airport transfers and late-night rides, available 24/7 with licensed, DBS-checked drivers.",
    founded: 1995,
    /** Shown as "Years serving Leicester" — derived from `founded`. */
    yearsExperience: "30+",
    serviceAvailability: "24/7",
    licenses: [
      "Licensed by Leicester City Council and Wolverhampton City Council",
      "Drivers are DBS checked",
    ],
    services: ["Local taxis", "Airport transfers", "Courier services", "Corporate accounts"],
    sameAs: [
      "https://www.facebook.com/aylestone.taxis/",
      "https://www.instagram.com/aylestone_kings",
      // add the Google Business Profile URL
    ],
  },

  // Navigation Menu
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Airport Pricing", href: "/pricing" },
      { name: "Sign Up as Driver", href: "/drivers" },
      { name: "Contact", href: "/contact" },
      { name: "More", href: "#", hasDropdown: true },
    ],
    dropdown: [
      { name: "Services", href: "/services" },
      { name: "Travel", href: "/travel" },
      { name: "Airport Taxi Leicester", href: "/airport-taxi-leicester" },
      { name: "Blog", href: "/blog" },
      { name: "Company", href: "/company" },
      { name: "Fleet", href: "/fleet" },
    ],
  },

  // Images
  images: {
    // Hero Section
    heroTaxi: "/white-modern-taxi-side.webp",

    // App Store Badges
    googlePlay: "/google-play-download-black.png",
    appStore: "/apple-app-store-download-button-black.png",

    // Homepage Images
    businessmanInCar: "/black-car.webp",
    appScreenBooking: "/app-screen-booking.png",
    appScreenTracking: "/app-screen-tracking.png",
    appScreenHistory: "/app-screen-history.png",

    // Fleet Images
    fleetHero: "/premium-car-hero.jpg",
    estateCar: "/Estate vehicle.png",
    saloonCar: "/black-car.webp",
    executiveCar: "/Executive.jpg",
    mpvCar: "/mpv-vehicle.jpg",
    wheelchairCar: "/placeholder.jpg",
    luxuryCar: "/premium-car-hero.jpg",

    // Company Page Images
    companyTeam: "/company-team.jpg",
    driverInCar: "/driver-in-car.jpg",
    companyHistory: "/company-history.jpg",
    taxiBridgeBackground: "/taxi-bridge-background.jpg",
    communitySupport: "/community-support.jpg",
    innovationTech: "/innovation-tech.jpg",
    trustedTransport: "/trusted transport.webp",

    // About Page Images
    aboutHero: "/about-hero-image.jpg",
  },

  // Homepage Content
  homepage: {
    hero: {
      title: "Aylestone Taxis – Your Trusted Taxi Service in Leicester",
      subtitle:
        "Welcome to Aylestone Taxis, Leicester's dependable and friendly taxi service. We provide fast, professional and affordable transport across Leicester, Leicestershire, the East Midlands, and nationwide.",
      ctaText: "Book Your Ride Now",
      features: ["Available 24/7", "Immediate Pick-Up", "Professional Drivers"],
    },

    aboutUs: {
      title: "Over 30 Years' Experience",
      subtitle: "Reliable Transport Since 1995",
      description:
        "Established in 1995, Aylestone Taxis set out with one mission: to deliver the safest, most comfortable, and most reliable taxi service in Leicester at prices everyone can afford. We provide transport across Leicester, Leicestershire, the East Midlands and nationwide — from airport transfers and commutes to appointments and safe rides home. All drivers are fully licensed and DBS-checked.",
    },

    whyChooseUs: {
      title: "Why Choose Us?",
      features: [
        "Fast & reliable pick-ups across Leicester",
        "Competitive fixed fares with no hidden charges",
        "Fully licensed, DBS-checked professional drivers",
        "Clean, comfortable and well-maintained cars",
        "Safe for families, students, businesses and tourists",
        "Always open – 24/7/365 including bank holidays",
      ],
    },

    forPassengers: {
      title: "For Passengers",
      subtitle: "Getting around has never been easier. With our app, you can:",
      features: [
        "Book instantly in just a few taps",
        "Track your driver live in real time",
        "Enjoy safe, comfortable travel every journey",
        "Pay your way with flexible payment options",
      ],
    },

    businessTravel: {
      title: "Business Travel Solutions",
      subtitle:
        "Professional transport for professional needs. Our corporate accounts offer:",
      features: [
        "Centralised account management",
        "Complete booking history and reporting",
        "Customisable invoices and reports",
        "A dedicated account manager for your business",
      ],
    },

    quickBooking: {
      title: "Book Your Taxi Instantly",
      subtitle:
        "Available all year round day and night with immediate pick-up in most Leicester areas.",
      description:
        "Book licensed drivers through the Aylestone Taxis app.",
      features: [
        "SMS/WhatsApp confirmations",
        "Pre-bookings welcome",
        "Professional drivers",
        "Modern, comfortable fleet",
      ],
    },

    executiveFleet: {
      title: "Luxury Transport, Every Time",
      subtitle:
        "Travel in refined comfort with our luxury executive vehicles. Ideal for business journeys, special occasions, or discerning clients who expect nothing less than exceptional service.",
    },

    sustainability: {
      title: "Driving a Greener Future",
      subtitle:
        "Based in Leicester, we provide reliable, eco-friendly transport services designed to reduce environmental impact. Our modern, low-emission fleet and ongoing sustainability initiatives help create cleaner, greener travel solutions for the Leicester community.",
    },

    // SEO-focused extended homepage content (rendered near page bottom)
    seoContent: {
      introHeading: "Cabs and Airport Transfers Across Leicester",
      introBody:
        "Aylestone Taxis has been driving people around Leicester and the county since 1995. Whether it is a short hop across the city, a safe ride home at night, corporate travel or an airport run, you get a licensed driver and a fare agreed before you set off. Booking takes about a minute by phone, WhatsApp or our app.",

      mission:
        "We specialise in fixed-price airport transfers from Leicester to East Midlands Airport, Birmingham Airport, Heathrow and other major UK airports. With on-time pickups, comfortable vehicles, and experienced local drivers, we ensure every journey is smooth and stress-free.",

      booking: {
        heading: "Book Your Leicester Taxi Instantly",
        bullets: [
          "24/7 taxi service across Leicester",
          "Fast pick-ups in Aylestone and surrounding areas",
          "SMS and WhatsApp booking confirmations",
          "Advance bookings available",
          "Fully licensed, professional drivers",
          "Modern, clean and well-maintained fleet",
        ],
      },
      whyUs: {
        heading: "Why We Are Leicester’s Favourite Taxi Company",
        items: [
          {
            title: "Fast & Reliable Pick-Ups",
            text: "We operate from several locations across Leicester for quick dispatch — even during busy periods.",
          },
          {
            title: "Competitive, Honest Pricing",
            text: "Fixed fares, no hidden charges, and clear pricing for all journeys.",
          },
          {
            title: "Experienced, Fully Licensed Drivers",
            text: "DBS-checked, council-licensed, highly trained and customer-focused.",
          },
          {
            title: "Clean, Comfortable & Well-Maintained Cars",
            text: "Saloon, estate, executive, 6- and 8-seaters, and MPVs.",
          },
          {
            title: "Safe for Everyone",
            text: "Families, students, businesses, elderly passengers and tourists rely on us daily.",
          },
          {
            title: "Always Open – 24/7/365",
            text: "We operate all day, every day including bank holidays.",
          },
        ],
      },
      airports: {
        heading: "Airport Taxi Leicester – Fixed Price Airport Transfers",
        airportsList: [
          {
            name: "East Midlands Airport",
            href: "/leicester-to-east-midlands-airport-taxi",
          },
          { name: "Birmingham Airport", href: "/taxi-to-birmingham-airport" },
          { name: "Luton Airport", href: "/pricing/airports/Luton" },
          { name: "Heathrow Airport", href: "/pricing/airports/Heathrow" },
          { name: "Stansted Airport", href: "/pricing/airports/Stansted" },
          { name: "Gatwick Airport", href: "/pricing/airports/Gatwick" },
          { name: "Manchester Airport", href: "/pricing/airports/Manchester" },
          { name: "London City Airport", href: "/pricing/airports/London-City" },
        ],
        bullets: [
          "Fixed prices (no surge pricing)",
          "Meet & Greet service available",
          "Flight monitoring included",
          "Spacious cars for luggage",
          "Perfect for families, students & businesses",
        ],
        closing:
          "Start or end your journey the right way — with a smooth, stress-free airport transfer.",
      },
      services: {
        heading: "Our Taxi Services Across Leicester",
        items: [
          "Local Leicester Taxi Service — fast pick-ups anywhere in the city",
          "Long-Distance Taxi Travel — comfortable and affordable to any UK destination",
          "Train Station Transfers — reliable for Leicester Railway Station and beyond",
          "Corporate & Business Taxi Accounts — professional travel for staff and clients",
          "School Runs & Student Transport — safe and punctual",
          "Executive & Chauffeur Service — premium vehicles for business and VIP travel",
          "Hospital & Medical Appointments — friendly, supportive and on time",
          "6-Seater & 8-Seater Minibus Taxi — perfect for groups and airport runs",
          "Parcel Delivery / Courier Service — fast, secure same-day deliveries",
          "Wheelchair Accessible Taxis — comfortable and supportive transport",
        ],
      },
      areas: {
        heading: "Areas We Cover in Leicester & Leicestershire",
        text: "Leicester City Centre, Oadby, Wigston, Evington, Belgrave, Spinney Hills, Highfields, Clarendon Park, Knighton, Hamilton, Beaumont Leys, Fosse Park, Kirby Muxloe, Braunstone, Aylestone, Thurmaston, Syston, Birstall, Glenfield, Blaby, Narborough, Enderby, Loughborough, Hinckley, Coalville, Melton Mowbray, Market Harborough and more. If you are anywhere in Leicester or Leicestershire — we’ll get to you quickly.",
        links: [
          {
            name: "Leicester City Centre",
            href: "/taxis-in/leicester-city-centre",
          },
          { name: "Aylestone", href: "/taxis-in/aylestone" },
          { name: "Oadby", href: "/taxis-in/oadby" },
          { name: "Wigston", href: "/taxis-in/wigston" },
          { name: "Evington", href: "/taxis-in/evington" },
          { name: "Belgrave", href: "/taxis-in/belgrave" },
          { name: "Spinney Hills", href: "/taxis-in/spinney-hills" },
          { name: "Highfields", href: "/taxis-in/highfields" },
          { name: "Clarendon Park", href: "/taxis-in/clarendon-park" },
          { name: "Knighton", href: "/taxis-in/knighton" },
          { name: "Hamilton taxis", href: "/taxis-in/hamilton" },
          { name: "Beaumont Leys taxi", href: "/taxis-in/beaumont-leys" },
          { name: "Fosse Park taxi", href: "/taxis-in/fosse-park" },
          { name: "Kirby Muxloe taxi", href: "/taxis-in/kirby-muxloe" },
          { name: "Braunstone", href: "/taxis-in/braunstone" },
          { name: "Thurmaston", href: "/taxis-in/thurmaston" },
          { name: "Syston", href: "/taxis-in/syston" },
          { name: "Birstall", href: "/taxis-in/birstall" },
          { name: "Glenfield", href: "/taxis-in/glenfield" },
          { name: "Blaby", href: "/taxis-in/blaby" },
          { name: "Narborough", href: "/taxis-in/narborough" },
          { name: "Enderby", href: "/taxis-in/enderby" },
          { name: "Loughborough", href: "/taxis-in/loughborough" },
          { name: "Hinckley", href: "/taxis-in/hinckley" },
          { name: "Coalville", href: "/taxis-in/coalville" },
          { name: "Melton Mowbray", href: "/taxis-in/melton-mowbray" },
          { name: "Market Harborough taxis", href: "/taxis-in/market-harborough" },
        ],
      },
      fleet: {
        heading: "Our Taxi Fleet",
        items: [
          "Saloon Cars – perfect for everyday travel",
          "Executive Cars – premium comfort for business or occasions",
          "6-Seaters – great for families and groups",
          "8-Seater Minibuses – spacious and cost-effective",
        ],
        note: "Every vehicle is regularly cleaned, inspected and maintained.",
      },
      closingCta: {
        heading: "Book Your Taxi Today – Quick, Easy & Reliable",
        bullets: [
          "Affordable prices",
          "Professional drivers",
          "Clean vehicles",
          "Fast pick-ups",
          "24/7 service",
          "All journeys welcome",
        ],
      },
    },

    customerReviews: {
      title: "What Our Customers Say",
      reviews: [
        {
          text: "Fabulous service. We pre-booked outward journey not return. Turned up early. Would most definitely recommend this service and will save the number in case we are this way again. Thanks guys.!",
          author: "Jackie and Pette Scott",
          type: "Airport Transfer",
        },
        {
          text: "Excellent and professional service given when we used 8 seater for a trip to Derby. Would definitely use again.",
          author: "Krystyna Biddles",
          type: "Regular Customer",
        },
        {
          text: "Called for price to airport qouted fab price on the call. Very helpful and reasonably priced. Best services provided.",
          author: "Javeria Imaan",
          type: "Airport Transfer",
        },
        {
          text: "Booked taxi. Arrive within 3 mins. No messing around. Driver was cheerful despite the early start and got me there perfectly on time.",
          author: "Rosie Flora",
          type: "Regular Customer",
        },
        {
          text: "Used their wedding car service last month. Beautiful white Mercedes, immaculate driver in a suit, and they even decorated the car with ribbons. Thank you!",
          author: "Sophie & Tom Davies",
          type: "Wedding Service",
        },
        {
          text: "Booked for my mum's airport transfer to Gatwick. She was nervous about travelling alone, but the driver was so kind and reassuring. Outstanding service.",
          author: "Rachel Green",
          type: "Airport Transfer",
        },
        {
          text: "Had an emergency hospital appointment and needed transport quickly. Aylestone Taxis had a car with me within 15 minutes. Driver was so caring and made sure I got in safely. ",
          author: "Robert Mitchell",
          type: "Emergency Transport",
        },
        {
          text: "Regular customer for school runs. Drivers are always friendly with the kids, cars are always clean, and they're never late. Takes the stress out of the school run completely.",
          author: "Amanda Foster",
          type: "School Transport",
        },
      ],
    },

    safeTravel: {
      title: "Trusted Transportation Service Since 1995",
      description:
        "Founded in 1995, Aylestone Taxis started a mission to provide a reliable and affordable taxi service to the people of Aylestone and surrounding areas. Today, we operate across the region, offering diverse services 365 days a year with the same commitment to excellence.",
    },

    appBenefits: {
      title: "Passenger App Benefits",
      benefits: [
        {
          icon: "Calendar",
          title: "Easy Booking",
          description: "Book rides in seconds with our instant booking system.",
        },
        {
          icon: "MapPin",
          title: "Real-time Tracking",
          description: "Track your driver in real-time with live GPS updates.",
        },
        {
          icon: "CreditCard",
          title: "Multiple Payment Options",
          description: "Secure payment methods for your convenience.",
        },
        {
          icon: "Star",
          title: "Rate Your Journey",
          description: "Share your experience and help us improve.",
        },
        {
          icon: "Shield",
          title: "Safe & Secure",
          description: "DBS checked drivers and licensed vehicles.",
        },
        {
          icon: "Phone",
          title: "24/7 Support",
          description: "Round-the-clock customer service and support.",
        },
      ],
    },

    appShowcase: {
      title: "App Features",
      features: [
        {
          title: "Real-time Tracking",
          description: "Live driver tracking with GPS technology.",
        },
        {
          title: "Instant Booking",
          description: "Book your ride in seconds through our app.",
        },
        {
          title: "Booking History",
          description: "Access your complete travel history anytime.",
        },
      ],
    },

    serviceCategories: {
      title: "Transportation Solutions",
      subtitle:
        "Whether you're a passenger, driver, or business, we have the perfect solution for your transportation needs.",
      passengers: {
        title: "For Passengers",
        description:
          "Book rides in seconds, track your driver in real-time, and enjoy safe, comfortable journeys.",
        features: [
          "Instant booking system",
          "Live driver tracking",
          "Multiple payment options",
          "Professional drivers",
        ],
      },
      drivers: {
        title: "For Drivers",
        description:
          "Sign Up as a Self-Employed Driver and enjoy flexible schedules, competitive earnings, and modern technology.",
        features: [
          "Flexible schedules",
          "Competitive earnings",
          "Modern fleet",
          "24/7 support",
        ],
      },
    },
  },

  // Driver Page Content
  driverPage: {
    seo: {
      title: "Sign Up as a Self-Employed Driver – Aylestone Taxis Leicester",
      metaDescription:
        "Sign-up as a Self-Employed Driver with Aylestone Taxis in Leicester. Flexible hours, Weekly transfer of booking funds, steady bookings, and full local support. Apply online today.",
    },
    hero: {
      badge: "Self-Employed Driver Opportunities",
      heading: "Self-Employed Driver Opportunities",
      subheading:
        "Aylestone Taxis provides a booking and dispatch service connecting passengers with licensed independent drivers.",
      body: "Licensed self-employed private hire drivers can register their interest in accessing booking opportunities through our booking and dispatch platform. Drivers operate independently and decide when they wish to make themselves available for booking opportunities.",
      primaryCta: {
        label: "Sign Up as a Self-Employed Driver Now",
        href: "/driver-signup",
      },
    },
    sections: [
      {
        id: "benefits",
        type: "grid",
        heading: "Driver Benefits",
        columns: 3,
        items: [
          {
            icon: "pound",
            title: "Competitive Earnings",
            body: "Earn competitive rates with  Weekly transfer of booking funds direct to your bank. Our transparent commission structure means you keep more of what you earn.",
          },
          {
            icon: "clock",
            title: "Flexible Schedule",
            body: "Choose shifts that suit you ; days, nights or weekends . Perfect for balancing work around your lifestyle and family.",
          },
          {
            icon: "car",
            title: "Vehicle Options",
            body: "Use your own licensed vehicle or speak to us about rental options. We can support you with licensing and insurance requirements.",
          },
          {
            icon: "headset",
            title: "24/7 Support",
            body: "Round-the-clock driver support from our Leicester-based operations team. Help is always available when you need it.",
          },
          {
            icon: "calendar-check",
            title: "Steady Bookings",
            body: "Consistent work from our strong customer base, corporate accounts and app bookings to keep you busy every day.",
          },
          {
            icon: "graduation-cap",
            title: "Training & Development",
            body: "Professional onboarding and ongoing support to help you get set up quickly and stay up to date with best practices.",
          },
        ],
      },
      {
        id: "why-choose",
        type: "columns",
        heading: "Why Choose Aylestone Taxis?",
        columns: 2,
        items: [
          "Trusted taxi service with over 30 years of experience in Leicester",
          "Modern dispatch technology and booking systems",
          "Fair and transparent commission structure",
          "Supportive, friendly team environment",
          "Guidance with licensing and compliance",
          "Strong reputation and presence in the local community",
        ],
      },
      {
        id: "requirements",
        type: "list-block",
        heading: "What We're Looking For",
        intro:
          "We welcome applications from drivers who meet the following requirements:",
        items: [
          "Valid UK driving licence held for at least 2 years",
          "Private hire driver badge from Leicester City Council or Wolverhampton City Council",
          "Enhanced DBS certificate (Update Service preferred)",
          "Right to work in the UK",
          "Professional attitude and excellent customer service skills",
        ],
      },
      {
        id: "final-cta",
        type: "cta",
        heading: "Ready to Start Driving with Aylestone Taxis?",
        body: "Sign-up as a Self-Employed Driver with Leicester's most trusted taxi service. Get steady earnings, flexible hours and a local team that's here to support you.",
        primaryCta: {
          label: "Sign Up as a Self-Employed Driver Now",
          href: "/driver-signup",
        },
      },
    ],
  },

  // Fleet Page Content
  fleetPage: {
    hero: {
      title: "Premium Fleet",
      subtitle:
        "Our fleet sets a new standard with top-tier vehicles that blend luxury with cutting-edge features. From spacious MPVs to executive sedans, every vehicle is meticulously maintained and equipped with the latest technology for your comfort and safety.",
    },

    overview: {
      title: "Vehicle Categories",
      subtitle:
        "At Aylestone Taxis, we offer a comprehensive range of vehicles to meet all your transportation needs. Whether you're travelling solo or with a group, our fleet guarantees comfort, reliability, and style.",
    },

    vehicles: [
      {
        name: "Estate Vehicle",
        description:
          "Perfect for those who need extra space for luggage or equipment. Our estate vehicles combine practicality with comfort, making them ideal for airport transfers and shopping trips.",
        features: [
          "Spacious luggage area",
          "Comfortable seating for 5",
          "Perfect for airport runs",
        ],
        image: "estateCar",
      },
      {
        name: "Executive",
        description:
          "The ultimate in luxury and sophistication. Perfect for business meetings, corporate events, and when you want to make a lasting impression with premium travel.",
        features: [
          "Luxury interior",
          "Premium sound system",
          "Climate control",
          "Professional service",
        ],
        image: "executiveCar",
      },
      {
        name: "MPV Vehicles",
        description:
          "Perfect for group travel and family outings. Spacious interiors accommodate larger groups comfortably.",
        features: [
          "Seats up to 8 passengers",
          "Extra luggage space",
          "Comfortable seating",
          "Group friendly",
        ],
        image: "mpvCar",
      },
      {
        name: "Saloon Cars",
        description:
          "Professional and comfortable vehicles ideal for business travel and daily commutes.",
        features: [
          "Professional appearance",
          "Comfortable ride",
          "Fuel efficient",
          "Reliable service",
        ],
        image: "saloonCar",
      },
      {
        name: "Luxury Vehicles",
        description:
          "Top-of-the-line vehicles for the ultimate premium experience and VIP treatment.",
        features: [
          "Premium amenities",
          "Chauffeur service",
          "Luxury interior",
          "VIP treatment",
        ],
        image: "luxuryCar",
      },
    ],
  },

  // Company Page Content
  companyPage: {
    hero: {
      title: "About Aylestone Taxis",
    },
    about: {
      title: "About Us",
      subtitle:
        "Founded in 1995, Aylestone Taxis started a mission to provide a reliable and affordable taxi service to the people of Aylestone and surrounding areas. Today, we operate across the region, offering diverse services 365 days a year with the same commitment to excellence.",
      description:
        "With over 30 years in the industry, Aylestone Taxis has grown into a trusted business for its dedication to the Private Hire and Taxi industry. Championing safety regulations and legislative reform, Aylestone Taxis has consistently led the way in industry innovation, working closely with local authorities and representing every local authority across the Midlands. The company seamlessly blends local heritage and values with global technological innovation..",
    },
    trusted: {
      title: "Our Reputation",
      subtitle:
        `Based on Aylestone Road since 1995, licensed by Leicester City Council, and rated ${GOOGLE_RATING.value} out of 5 from ${GOOGLE_RATING.count} Google reviews.`,
      description:
        "Whether you're looking for a safe, comfortable, and efficient journey — from daily commutes to working with public sector institutions and multinational corporations — we are here to meet your needs.",
    },
  },

  // Social Media Links
  socialMedia: {
    facebook: "https://www.facebook.com/aylestone.taxis/",
    instagram:
      "https://www.instagram.com/aylestone_kings?igsh=MTJqYW1rZ3RyODd0cA==",
  },

  // Footer Content
  footer: {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Airport Pricing", href: "/pricing" },
      { name: "Travel", href: "/travel" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Company", href: "/company" },
      { name: "Fleet", href: "/fleet" },
    ],

    services: [
      { name: "Airport Transfers", href: "/airport-transfers-leicester" },
      { name: "Local Taxi Service", href: "/local-taxi-leicester" },
      {
        name: "Wheelchair Accessible Taxi Leicester",
        href: "/wheelchair-accessible-taxi-leicester",
      },
      { name: "24 Hour Taxi Leicester", href: "/24-hour-taxi-leicester" },
      { name: "Cheap Taxi Leicester", href: "/cheap-taxi-leicester" },
      {
        name: "Meet and Greet Taxi Leicester",
        href: "/meet-and-greet-taxi-leicester",
      },
      {
        name: "School Run Taxi Leicester",
        href: "/school-run-taxi-leicester",
      },
      {
        name: "Prom Taxi Leicester",
        href: "/prom-taxi-leicester",
      },
      {
        name: "Student Taxi Leicester",
        href: "/student-taxi-leicester",
      },
      {
        name: "Late Night Taxi Leicester",
        href: "/late-night-taxi-leicester",
      },
      {
        name: "City Centre Nights Out Taxi",
        href: "/leicester-city-centre-nights-out-taxi",
      },
      {
        name: "Match Day Taxi Leicester",
        href: "/match-day-taxi-leicester",
      },
      {
        name: "Long-Distance & Corporate",
        href: "/long-distance-taxi-leicester",
      },
      {
        name: "Corporate Taxi Account Leicester",
        href: "/corporate-taxi-account-leicester",
      },
      {
        name: "Gatwick North Terminal Taxi Transfers",
        href: "/gatwick-north-terminal-taxi-transfers",
      },
      {
        name: "Gatwick South Terminal Taxi Transfers",
        href: "/gatwick-south-terminal-taxi-transfers",
      },
      { name: "Shopping", href: "/taxis-in/fosse-park" },
      { name: "Students Transport", href: "/taxis-in/university-of-leicester" },
      { name: "Match-Day Travel", href: "/taxis-in/king-power-stadium" },
      { name: "Train Station", href: "/taxis-in/leicester-railway-station" },
    ],

    legal: [
      { name: "Privacy Policy", href: "/Privacy-policy.pdf" },
      { name: "Terms of Service", href: "/Privacy-policy.pdf" },
    ],
    areaGroups: [
      {
        title: "Leicester Areas",
        items: [
          { name: "Taxis in Aylestone", href: "/taxis-in/aylestone" },
          { name: "Taxis in Eyres Monsell", href: "/taxis-in/eyres-monsell" },
          { name: "Taxis in Glen Parva", href: "/taxis-in/glen-parva" },
          { name: "Taxis in South Wigston", href: "/taxis-in/south-wigston" },
          { name: "Taxis in Knighton", href: "/taxis-in/knighton" },
          { name: "Taxis in Clarendon Park", href: "/taxis-in/clarendon-park" },
          { name: "Taxis in Stoneygate", href: "/taxis-in/stoneygate" },
          { name: "Taxis in Oadby", href: "/taxis-in/oadby" },
          { name: "Taxis in Wigston", href: "/taxis-in/wigston" },
          {
            name: "Taxis in Leicester City Centre",
            href: "/taxis-in/leicester-city-centre",
          },
          { name: "Taxis in Fosse Park", href: "/taxis-in/fosse-park" },
          { name: "Taxis in Braunstone", href: "/taxis-in/braunstone" },
          {
            name: "Taxis in Braunstone Town",
            href: "/taxis-in/braunstone-town",
          },
          { name: "Taxis in Evington", href: "/taxis-in/evington" },
          { name: "Taxis in Humberstone", href: "/taxis-in/humberstone" },
          { name: "Taxis in Belgrave", href: "/taxis-in/belgrave" },
          { name: "Taxis in Highfields", href: "/taxis-in/highfields" },
          { name: "Taxis in Spinney Hills", href: "/taxis-in/spinney-hills" },
          { name: "Taxis in Westcotes", href: "/taxis-in/westcotes" },
          { name: "Taxis in Thurnby Lodge", href: "/taxis-in/thurnby-lodge" },
          { name: "Taxis in Rushey Mead", href: "/taxis-in/rushey-mead" },
          { name: "Taxis in Beaumont Leys", href: "/taxis-in/beaumont-leys" },
          { name: "Taxis in Hamilton", href: "/taxis-in/hamilton" },
          { name: "Taxis in Syston", href: "/taxis-in/syston" },
          { name: "Taxis in Wigston Fields", href: "/taxis-in/wigston-fields" },
          { name: "Taxis in Thurmaston", href: "/taxis-in/thurmaston" },
          { name: "Taxis in Birstall", href: "/taxis-in/birstall" },
          { name: "Taxis in Thurcaston", href: "/taxis-in/thurcaston" },
          { name: "Taxis in Glenfield", href: "/taxis-in/glenfield" },
        ],
      },
      {
        title: "Wider Leicester Districts",
        items: [
          { name: "Taxis in Oadby", href: "/taxis-in/oadby" },
          { name: "Taxis in Wigston", href: "/taxis-in/wigston" },
          { name: "Taxis in South Wigston", href: "/taxis-in/south-wigston" },
          {
            name: "Taxis in Braunstone Town",
            href: "/taxis-in/braunstone-town",
          },
          { name: "Taxis in Wigston Fields", href: "/taxis-in/wigston-fields" },
          { name: "Taxis in Thurmaston", href: "/taxis-in/thurmaston" },
          { name: "Taxis in Syston", href: "/taxis-in/syston" },
          { name: "Taxis in Birstall", href: "/taxis-in/birstall" },
          { name: "Taxis in Groby", href: "/taxis-in/groby" },
        ],
      },
      {
        title: "Surrounding Towns",
        items: [
          { name: "Taxis in Blaby", href: "/taxis-in/blaby" },
          { name: "Taxis in Narborough", href: "/taxis-in/narborough" },
          { name: "Taxis in Enderby", href: "/taxis-in/enderby" },
          { name: "Taxis in Whetstone", href: "/taxis-in/whetstone" },
          { name: "Taxis in Countesthorpe", href: "/taxis-in/countesthorpe" },
          {
            name: "Taxis in Broughton Astley",
            href: "/taxis-in/broughton-astley",
          },
          { name: "Taxis in Cosby", href: "/taxis-in/cosby" },
          { name: "Taxis in Kibworth", href: "/taxis-in/kibworth" },
          { name: "Taxis in Loughborough", href: "/taxis-in/loughborough" },
          {
            name: "Taxis in Market Harborough",
            href: "/taxis-in/market-harborough",
          },
          { name: "Taxis in Lutterworth", href: "/taxis-in/lutterworth" },
          { name: "Taxis in Hinckley", href: "/taxis-in/hinckley" },
          { name: "Taxis in Coalville", href: "/taxis-in/coalville" },
          { name: "Taxis in Melton Mowbray", href: "/taxis-in/melton-mowbray" },
          { name: "Taxis in Groby", href: "/taxis-in/groby" },
          {
            name: "Taxis in Ashby de la Zouch",
            href: "/taxis-in/ashby-de-la-zouch",
          },
          { name: "Taxis in Kirby Muxloe", href: "/taxis-in/kirby-muxloe" },
          { name: "Taxis in Earl Shilton", href: "/taxis-in/earl-shilton" },
          { name: "Taxis in Rothley", href: "/taxis-in/rothley" },
        ],
      },
    ],
    airportLinks: [
      { name: "Birmingham Airport", href: "/taxi-to-birmingham-airport" },
      {
        name: "East Midlands Airport",
        href: "/leicester-to-east-midlands-airport-taxi",
      },
      { name: "Heathrow Airport", href: "/pricing/airports/Heathrow" },
      {
        name: "Heathrow Terminal 2 Taxi Transfers",
        href: "/heathrow-terminal-2-taxi-transfers",
      },
      {
        name: "Heathrow Terminal 3 Taxi Transfers",
        href: "/heathrow-terminal-3-taxi-transfers",
      },
      {
        name: "Heathrow Terminal 4 Taxi Transfers",
        href: "/heathrow-terminal-4-taxi-transfers",
      },
      {
        name: "Heathrow Terminal 5 Taxi Transfers",
        href: "/heathrow-terminal-5-taxi-transfers",
      },
      { name: "Gatwick Airport", href: "/pricing/airports/Gatwick" },
      {
        name: "Gatwick North Terminal Taxi Transfers",
        href: "/gatwick-north-terminal-taxi-transfers",
      },
      {
        name: "Gatwick South Terminal Taxi Transfers",
        href: "/gatwick-south-terminal-taxi-transfers",
      },
      { name: "Luton Airport", href: "/pricing/airports/Luton" },
      { name: "Stansted Airport", href: "/pricing/airports/Stansted" },
      { name: "Manchester Airport", href: "/pricing/airports/Manchester" },
      { name: "London City Airport", href: "/pricing/airports/London-City" },
      {
        name: "Seaport & cruise transfers (UK)",
        href: "/seaport-transfers-uk",
      },
    ],
    destinationLinks: [
      {
        name: "Taxis in Leicester Royal Infirmary",
        href: "/taxis-in/leicester-royal-infirmary",
      },
      {
        name: "Taxis in Glenfield Hospital",
        href: "/taxis-in/glenfield-hospital",
      },
      {
        name: "Taxis in Leicester General Hospital",
        href: "/taxis-in/leicester-general-hospital",
      },
      {
        name: "Taxis in Spire Leicester Hospital",
        href: "/taxis-in/spire-leicester-hospital",
      },
      {
        name: "Taxis in Nuffield Health Leicester Hospital",
        href: "/taxis-in/nuffield-health-leicester-hospital",
      },
      {
        name: "Taxis in University of Leicester",
        href: "/taxis-in/university-of-leicester",
      },
      {
        name: "Taxis in De Montfort University",
        href: "/taxis-in/de-montfort-university",
      },
      {
        name: "Taxis in Leicester College",
        href: "/taxis-in/leicester-college",
      },
      {
        name: "Taxis in Leicester Railway Station",
        href: "/taxis-in/leicester-railway-station",
      },
      {
        name: "Taxis in South Wigston Station",
        href: "/taxis-in/south-wigston-station",
      },
      {
        name: "Taxis in Narborough Station",
        href: "/taxis-in/narborough-station",
      },
      {
        name: "Taxis in St Margaret's Bus Station",
        href: "/taxis-in/st-margarets-bus-station",
      },
      {
        name: "Taxis in King Power Stadium",
        href: "/taxis-in/king-power-stadium",
      },
      {
        name: "Taxis in Welford Road Stadium",
        href: "/taxis-in/welford-road-stadium",
      },
      {
        name: "Taxis in Morningside Arena",
        href: "/taxis-in/morningside-arena",
      },
      {
        name: "Taxis in Leicester Racecourse",
        href: "/taxis-in/leicester-racecourse",
      },
      { name: "Taxis in Leicester Market", href: "/taxis-in/leicester-market" },
      {
        name: "Taxis in Meridian Business Park",
        href: "/taxis-in/meridian-business-park",
      },
      { name: "Taxis in Grove Park", href: "/taxis-in/grove-park" },
      {
        name: "Taxis in Jame Mosque Leicester",
        href: "/taxis-in/jame-mosque-leicester",
      },
      { name: "Taxis in Masjid Umar", href: "/taxis-in/masjid-umar" },
      {
        name: "Taxis in Shree Hindu Temple Leicester",
        href: "/taxis-in/shree-hindu-temple-leicester",
      },
      {
        name: "Taxis in Guru Nanak Gurdwara Leicester",
        href: "/taxis-in/guru-nanak-gurdwara-leicester",
      },
      { name: "Taxi to Asda Fosse Park", href: "/taxis-in/asda-fosse-park" },
      {
        name: "Taxi to Sainsburys Grove Triangle",
        href: "/taxis-in/sainsburys-grove-triangle",
      },
      {
        name: "Taxi to Tesco Narborough Road",
        href: "/taxis-in/tesco-narborough-road",
      },
      {
        name: "Taxi to Aldi Aylestone Road",
        href: "/taxis-in/aldi-aylestone-road",
      },
      {
        name: "Taxi to Lidl Beaumont Leys",
        href: "/taxis-in/lidl-beaumont-leys",
      },
      {
        name: "Taxi to Morrisons Freemens Common",
        href: "/taxis-in/morrisons-freemens-common",
      },
      {
        name: "Taxi to Iceland City Centre",
        href: "/taxis-in/iceland-city-centre",
      },
      {
        name: "Taxi to Farmfoods St Matthews",
        href: "/taxis-in/farmfoods-st-matthews",
      },
      {
        name: "Taxi to M&S Foodhall City Centre",
        href: "/taxis-in/m-and-s-foodhall-city-centre",
      },
      { name: "Taxi to Waitrose Oadby", href: "/taxis-in/waitrose-oadby" },
    ],
    priorityAreas: {
      opPriority: [
        {
          name: "National Space Centre",
          href: "/taxis-in/national-space-centre",
          description: "Pre-book a taxi to the National Space Centre, ideal for family days out.",
          icon: "Rocket",
        },
        {
          name: "Highcross Leicester",
          href: "/taxis-in/highcross-leicester",
          description:
            "Shopping at Highcross? Get dropped off and booked back home with your bags.",
          icon: "ShoppingBag",
        },
        {
          name: "Curve Theatre",
          href: "/taxis-in/curve-theatre",
          description: "Arrive in time for curtain-up and get home after the show.",
          icon: "Theater",
        },
      ],
      mediumPriority: [
        {
          name: "King Richard III Visitor Centre",
          href: "/taxis-in/king-richard-iii-visitor-centre",
          description: "An easy city centre drop-off for the King Richard III Visitor Centre.",
          icon: "Crown",
        },
        {
          name: "Leicester Cathedral",
          href: "/taxis-in/leicester-cathedral",
          description: "Drop-off by the Cathedral and Richard III's tomb.",
          icon: "Church",
        },
        {
          name: "De Montfort Hall",
          href: "/taxis-in/de-montfort-hall",
          description: "Taxis to concerts and graduations, with pickups after the event.",
          icon: "Music",
        },
      ],
      optionalPriority: [
        {
          name: "Haymarket Shopping Centre",
          href: "/taxis-in/haymarket-shopping-centre",
          description: "City centre shopping trips at Haymarket, there and back.",
          icon: "ShoppingCart",
        },
        {
          name: "Jewry Wall Museum",
          href: "/taxis-in/jewry-wall-museum",
          description: "A short ride to the Roman ruins and museum at Jewry Wall.",
          icon: "Calendar",
        },
        {
          name: "New Walk Museum",
          href: "/taxis-in/new-walk-museum",
          description: "Taxis to New Walk Museum and Art Gallery for a day out.",
          icon: "Calendar",
        },
        {
          name: "Athena / City Rooms",
          href: "/taxis-in/athena-city-rooms",
          description: "Weddings, parties and conferences, with group pickups available.",
          icon: "Calendar",
        },
      ],
    },
    areaDetails: {
      oadby: {
        landmarks: [
          "University of Leicester Botanic Garden",
          "The Parade (Oadby town centre)",
        ],
      },
    },
  },

  // Blog Page Content
  blogPage: {
    title: "Aylestone Taxis Blog",
    subtitle:
      "Practical travel guides for Leicester — airport transfers, matchday taxis, prom nights, student moves, fare tips, and booking advice from your trusted local 24/7 taxi company.",
    // Posts live in lib/blogPosts.ts (server-only) — see the note there.
  },
};

/** Geographic neighbours for area page sidebars (5–6 slugs per area). */
export const nearbyAreasBySlug: Record<string, string[]> = {
  wigston: [
    "south-wigston",
    "oadby",
    "blaby",
    "glen-parva",
    "knighton",
    "aylestone",
  ],
  oadby: [
    "wigston",
    "stoneygate",
    "knighton",
    "clarendon-park",
    "south-wigston",
    "evington",
  ],
  evington: [
    "oadby",
    "stoneygate",
    "highfields",
    "spinney-hills",
    "clarendon-park",
    "knighton",
  ],
  blaby: [
    "wigston",
    "narborough",
    "south-wigston",
    "glen-parva",
    "braunstone-town",
    "enderby",
  ],
  narborough: [
    "enderby",
    "braunstone",
    "blaby",
    "whetstone",
    "countesthorpe",
    "huncote",
  ],
  syston: [
    "thurmaston",
    "birstall",
    "hamilton",
    "rushey-mead",
    "beaumont-leys",
    "belgrave",
  ],
  "beaumont-leys": [
    "birstall",
    "groby",
    "hamilton",
    "thurmaston",
    "syston",
    "glenfield",
  ],
  birstall: [
    "thurmaston",
    "syston",
    "beaumont-leys",
    "hamilton",
    "groby",
    "rothley",
  ],
  aylestone: [
    "knighton",
    "glen-parva",
    "braunstone",
    "wigston",
    "south-wigston",
    "eyres-monsell",
  ],
  glenfield: [
    "groby",
    "ratby",
    "birstall",
    "braunstone",
    "beaumont-leys",
    "kirby-muxloe",
  ],
  braunstone: [
    "braunstone-town",
    "glen-parva",
    "aylestone",
    "eyres-monsell",
    "wigston",
    "fosse-park",
  ],
  thurmaston: [
    "syston",
    "birstall",
    "rushey-mead",
    "hamilton",
    "beaumont-leys",
    "leicester-city-centre",
  ],
  enderby: [
    "narborough",
    "blaby",
    "whetstone",
    "glen-parva",
    "braunstone-town",
    "countesthorpe",
  ],
  "glen-parva": [
    "braunstone",
    "aylestone",
    "south-wigston",
    "blaby",
    "enderby",
    "wigston",
  ],
  "broughton-astley": [
    "narborough",
    "enderby",
    "countesthorpe",
    "blaby",
    "lutterworth",
    "cosby",
  ],
  coalville: [
    "ashby-de-la-zouch",
    "ibstock",
    "hugglescote",
    "whitwick",
    "ravenstone",
    "groby",
  ],
  loughborough: [
    "syston",
    "birstall",
    "coalville",
    "thurmaston",
    "shepshed",
    "quorn",
  ],
  "spinney-hills": [
    "highfields",
    "belgrave",
    "evington",
    "stoneygate",
    "leicester-city-centre",
    "knighton",
  ],
  hinckley: [
    "broughton-astley",
    "narborough",
    "enderby",
    "earl-shilton",
    "lutterworth",
    "blaby",
  ],
  "melton-mowbray": [
    "market-harborough",
    "loughborough",
    "oakham",
    "syston",
    "birstall",
    "kibworth",
  ],
  "market-harborough": [
    "kibworth",
    "lutterworth",
    "loughborough",
    "wigston",
    "oadby",
    "broughton-astley",
  ],
  // Added Nov 2026 with the rewritten area pages (geographic neighbours, indexable pages only).
  whetstone: ["blaby", "cosby", "countesthorpe", "enderby", "narborough", "glen-parva"],
  kibworth: ["market-harborough", "oadby", "wigston", "south-wigston", "evington", "stoneygate"],
  cosby: ["whetstone", "narborough", "blaby", "countesthorpe", "broughton-astley", "enderby"],
  countesthorpe: ["south-wigston", "blaby", "whetstone", "cosby", "wigston", "glen-parva"],
  "braunstone-town": ["braunstone", "fosse-park", "enderby", "kirby-muxloe", "glenfield", "westcotes"],
  "thurnby-lodge": ["evington", "humberstone", "hamilton", "spinney-hills", "oadby", "stoneygate"],
  humberstone: ["hamilton", "thurnby-lodge", "belgrave", "rushey-mead", "evington", "spinney-hills"],
  westcotes: ["braunstone", "leicester-city-centre", "de-montfort-university", "aylestone", "clarendon-park", "braunstone-town"],
  "university-of-leicester": ["clarendon-park", "stoneygate", "knighton", "highfields", "leicester-city-centre", "de-montfort-university"],
  "de-montfort-university": ["leicester-city-centre", "westcotes", "university-of-leicester", "highfields", "aylestone", "clarendon-park"],
  "leicester-college": ["leicester-city-centre", "st-margarets-bus-station", "belgrave", "aylestone", "highfields", "de-montfort-university"],
  "masjid-umar": ["evington", "highfields", "spinney-hills", "stoneygate", "humberstone", "thurnby-lodge"],
};

// Export individual sections for easier imports
export const companyInfo = siteData.company;
export const contactInfo = {
  phone: siteData.company.phone,
  /** Digits for tel: links. */
  phoneTel: PHONE_TEL,
  /** E.164 — keep for code that builds links from it; render `whatsappDisplay` to people. */
  whatsapp: siteData.company.whatsapp,
  whatsappDisplay: WHATSAPP_DISPLAY,
  /** Ready-made wa.me base link, no message. */
  whatsappLink: `https://wa.me/${WHATSAPP_WA}`,
  email: siteData.company.email,
  address: {
    street: "753A, Aylestone Rd, Aylestone",
    city: "Leicester",
    postcode: "LE2 8TG",
    country: "United Kingdom",
  },
  booking: {
    online: BOOKING_URL,
    phone: siteData.company.phone,
  },
};
export const socialLinks = {
  facebook: siteData.socialMedia.facebook,
  instagram: siteData.socialMedia.instagram,
};
export const navigationItems = siteData.navigation;
export const footerData = siteData.footer;
export const colorScheme = {
  primary: "#06A0A6",
  secondary: "#0F0D3E",
  accent: "#EF5B6A",
  text: {
    primary: "#0F0D3E",
    secondary: "#E4E4E4",
    muted: "#6B7280",
  },
  background: {
    primary: "#FFFFFF",
    secondary: "#F8FAFC",
    dark: "#0F0D3E",
  },
};
export const copyrightInfo = {
  year: 2026,
  text: "© 2026 Aylestone Taxis. All rights reserved.",
};


/* ------------------------------------------------------------------------ */
/* Leicester city centre nights out — venue data                            */
/* ------------------------------------------------------------------------ */

/** Cluster page a venue is grouped under. `null` = listed on the hub only. */
export type CityCentreClusterSlug =
  | "taxi-leicester-nightclubs"
  | "taxi-leicester-the-lanes-market-place"
  | "taxi-leicester-king-street-granby-street"
  | "taxi-leicester-high-street-pubs"

export type CityCentreVenueType = "Nightclub" | "Late & cocktail bar" | "Pub & bar"

export type CityCentreVenue = {
  name: string
  type: CityCentreVenueType
  /** Street address without the postcode. */
  address: string
  postcode: string
  clusterSlug: CityCentreClusterSlug | null
  /**
   * One line of pickup/drop-off context shown under the address.
   * Street-level only — no opening hours, closing times or named pick-up
   * spots, none of which are verified anywhere in this codebase.
   */
  note: string
}

/** ISO date the venue list was last reviewed. Shown on the nights-out pages. */
export const CITY_CENTRE_VENUES_LAST_CHECKED = "2026-10-07"

/** Human-readable form of CITY_CENTRE_VENUES_LAST_CHECKED. */
export const CITY_CENTRE_VENUES_LAST_CHECKED_LABEL = "7 October 2026"

export const cityCentreVenues: CityCentreVenue[] = [
  // --- Nightclubs -------------------------------------------------------
  {
    name: "Mosh Nightclub",
    type: "Nightclub",
    address: "37 St Nicholas Place",
    postcode: "LE1 4LD",
    clusterSlug: "taxi-leicester-nightclubs",
    note: "Quote St Nicholas Place when you book and we will confirm the drop-off with you.",
  },
  {
    name: "The Basement Nightclub",
    type: "Nightclub",
    address: "1 Wellington Street",
    postcode: "LE1 6HH",
    clusterSlug: "taxi-leicester-nightclubs",
    note: "Wellington Street is a straightforward address to give a driver heading into the centre.",
  },
  {
    name: "Quarter 25 Nightclub",
    type: "Nightclub",
    address: "25 Yeoman Street",
    postcode: "LE1 1UT",
    clusterSlug: "taxi-leicester-nightclubs",
    note: "Book with the Yeoman Street address and your driver will head straight there.",
  },
  {
    name: "Club Republic Nightclub",
    type: "Nightclub",
    address: "Gravel Street",
    postcode: "LE1 3AG",
    clusterSlug: "taxi-leicester-nightclubs",
    note: "A regular pickup for groups travelling home together — tell us your numbers and we will send the right vehicle.",
  },
  {
    name: "The Fan Club Nightclub",
    type: "Nightclub",
    address: "40 Abbey Street",
    postcode: "LE1 3TD",
    clusterSlug: "taxi-leicester-nightclubs",
    note: "Abbey Street sits near the Belgrave Gate side of the centre, handy if your night moves between venues.",
  },
  {
    name: "Motto Nightclub",
    type: "Nightclub",
    address: "94-96 Belgrave Gate",
    postcode: "LE1 3GR",
    clusterSlug: "taxi-leicester-nightclubs",
    note: "Belgrave Gate is one of the busier city centre roads, so a pre-booked return is worth arranging.",
  },
  {
    name: "Sophy Cocktail Bar & Club",
    type: "Nightclub",
    address: "8-10 King Street",
    postcode: "LE1 6RJ",
    clusterSlug: "taxi-leicester-nightclubs",
    note: "Shares King Street with several other bars, so give us the venue name as well as the number.",
  },

  // --- Late & cocktail bars ---------------------------------------------
  {
    name: "Firebug",
    type: "Late & cocktail bar",
    address: "1 Millstone Lane",
    postcode: "LE1 5JN",
    clusterSlug: "taxi-leicester-the-lanes-market-place",
    note: "One of three Millstone Lane venues we collect from — the house number keeps it unambiguous.",
  },
  {
    name: "Little Sister",
    type: "Late & cocktail bar",
    address: "1 St Martins Square",
    postcode: "LE1 5DF",
    clusterSlug: "taxi-leicester-the-lanes-market-place",
    note: "St Martins Square sits inside The Lanes, so agree the meeting street with your driver.",
  },
  {
    name: "The Gadabout",
    type: "Late & cocktail bar",
    address: "10 Guildhall Lane",
    postcode: "LE1 5FQ",
    clusterSlug: "taxi-leicester-the-lanes-market-place",
    note: "Guildhall Lane runs through the older quarter near the Cathedral.",
  },
  {
    name: "BAR TROPICIA",
    type: "Late & cocktail bar",
    address: "5 St Martins Walk",
    postcode: "LE1 5DG",
    clusterSlug: "taxi-leicester-the-lanes-market-place",
    note: "St Martins Walk is pedestrianised, so we will agree the nearest road with you when you book.",
  },
  {
    name: "33 Cank Street",
    type: "Late & cocktail bar",
    address: "33 Cank Street",
    postcode: "LE1 5GX",
    clusterSlug: "taxi-leicester-the-lanes-market-place",
    note: "Cank Street links the Market Place end of The Lanes, close to several other bars on this list.",
  },
  {
    name: "Watson's Bar Leicester",
    type: "Late & cocktail bar",
    address: "94 Granby Street",
    postcode: "LE1 1DJ",
    clusterSlug: "taxi-leicester-king-street-granby-street",
    note: "Granby Street is a main route through the centre and an easy address for a driver to find.",
  },
  {
    name: "Inside No 9",
    type: "Late & cocktail bar",
    address: "Market Place",
    postcode: "LE1 5GG",
    clusterSlug: "taxi-leicester-the-lanes-market-place",
    note: "Market Place addresses are best booked with the venue name so there is no mix-up.",
  },
  {
    name: "Grand Union",
    type: "Late & cocktail bar",
    address: "24 King Street",
    postcode: "LE1 6RL",
    clusterSlug: "taxi-leicester-king-street-granby-street",
    note: "King Street is short and narrow, so pre-booking the return keeps things simple.",
  },

  // --- Pubs & bars -------------------------------------------------------
  {
    name: "Queen of Bradgate",
    type: "Pub & bar",
    address: "93 High Street",
    postcode: "LE1 4JB",
    clusterSlug: "taxi-leicester-high-street-pubs",
    note: "One of three venues on this stretch of High Street, so give us the number or the name.",
  },
  {
    name: "Tree Leicester",
    type: "Pub & bar",
    address: "99 High Street",
    postcode: "LE1 4JB",
    clusterSlug: "taxi-leicester-high-street-pubs",
    note: "A few doors along High Street from the Queen of Bradgate — same postcode, different number.",
  },
  {
    name: "The High Cross",
    type: "Pub & bar",
    address: "103-105 High Street",
    postcode: "LE1 4JB",
    clusterSlug: "taxi-leicester-high-street-pubs",
    note: "Sits near the Highcross end of High Street, within easy reach of the shopping centre.",
  },
  {
    name: "O'Neill's Leicester",
    type: "Pub & bar",
    address: "16-20 Loseby Lane",
    postcode: "LE1 5DR",
    clusterSlug: "taxi-leicester-the-lanes-market-place",
    note: "Loseby Lane is one of the narrow Lanes streets, so we will arrange a workable pickup road with you.",
  },
  {
    name: "The Globe",
    type: "Pub & bar",
    address: "43 Silver Street",
    postcode: "LE1 5EU",
    clusterSlug: "taxi-leicester-the-lanes-market-place",
    note: "Silver Street runs through the heart of The Lanes and is well known to our drivers.",
  },
  {
    name: "The Corn Exchange",
    type: "Pub & bar",
    address: "1 Corn Exchange, Market Place",
    postcode: "LE1 5GG",
    clusterSlug: "taxi-leicester-the-lanes-market-place",
    note: "Right on the Market Place, a common meeting point for groups travelling home together.",
  },
  {
    name: "The Blue Boar",
    type: "Pub & bar",
    address: "16 Millstone Lane",
    postcode: "LE1 5JN",
    clusterSlug: "taxi-leicester-the-lanes-market-place",
    note: "Shares Millstone Lane with Firebug and the Rutland & Derby Arms, so quote the venue name.",
  },
  {
    name: "The Rutland & Derby Arms",
    type: "Pub & bar",
    address: "21 Millstone Lane",
    postcode: "LE1 5JN",
    clusterSlug: "taxi-leicester-the-lanes-market-place",
    note: "The third Millstone Lane venue we are asked for — the house number tells them apart.",
  },
  {
    name: "The King's Head",
    type: "Pub & bar",
    address: "36 King Street",
    postcode: "LE1 6RL",
    clusterSlug: "taxi-leicester-king-street-granby-street",
    note: "A few doors from Grand Union on King Street, so the name matters more than the number.",
  },
  {
    name: "The Royal Standard",
    type: "Pub & bar",
    address: "87 Charles Street",
    postcode: "LE1 1FA",
    clusterSlug: "taxi-leicester-king-street-granby-street",
    note: "Charles Street is a wide main road, which makes it straightforward for drop-offs.",
  },
  {
    name: "The Salmon",
    type: "Pub & bar",
    address: "19 Butt Close Lane",
    postcode: "LE1 4QA",
    clusterSlug: null,
    note: "Butt Close Lane sits on the Highcross side of the city centre.",
  },
  {
    name: "Knight & Garter",
    type: "Pub & bar",
    address: "14 Hotel Street",
    postcode: "LE1 5AW",
    clusterSlug: null,
    note: "Hotel Street is just off the New Market Square side of the centre.",
  },
  {
    name: "The Castle",
    type: "Pub & bar",
    address: "8-9 Castle View",
    postcode: "LE1 5WH",
    clusterSlug: null,
    note: "Castle View is on the quieter Castle Gardens side, away from the busiest streets.",
  },
  {
    name: "The Bowling Green",
    type: "Pub & bar",
    address: "44 Oxford Street",
    postcode: "LE1 5XW",
    clusterSlug: null,
    note: "Oxford Street is on the southern edge of the centre, towards the De Montfort University side.",
  },
]

/** Venues grouped under one cluster page, in listing order. */
export function venuesForCluster(clusterSlug: CityCentreClusterSlug): CityCentreVenue[] {
  return cityCentreVenues.filter((venue) => venue.clusterSlug === clusterSlug)
}

/** Venues of one type, for the hub's grouped listing. */
export function venuesByType(type: CityCentreVenueType): CityCentreVenue[] {
  return cityCentreVenues.filter((venue) => venue.type === type)
}

export default siteData;
