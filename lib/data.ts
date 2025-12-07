export const siteData = {
  // Company Information
  company: {
    name: "Aylestone Kings",
    tagline: "",
    region: "Aylestone and surrounding areas",
    phone: "0116 2338888",
    whatsapp: "+447535855786",
    email: "info@aylestone-taxis.co.uk",
    address: "753A Aylestone Rd, Aylestone, Leicester, LE2 8TG, UK",
    description:
      "Founded in 1995, Aylestone Kings started a mission to provide a reliable and affordable taxi service to the people of Aylestone and surrounding areas. Today, we operate across the region, offering diverse services 365 days a year with the same commitment to excellence.",
    founded: "1995",
    passengersServed: "10,000",
    satisfactionRating: "99.7%",
    yearsExperience: "30+",
    serviceAvailability: "24/7",
    happyCustomers: "10,000+",
    drivers: "Multiple Professional Drivers",
    licenses: [
      "Licensed by Leicester City Council and Wolverhampton City Council",
      "Drivers are DBS checked, ensuring a safe and secure service",
      "Providing airport, courier services and more"
    ]
  },

  // Navigation Menu
  navigation: {
    main: [
      { name: "Home", href: "/" }, 
      { name: "About Us", href: "/about" },  
      { name: "Airport Pricing", href: "/pricing" },
      { name: "Join as a Driver", href: "/drivers" },
      { name: "Contact", href: "/contact" },
      { name: "More", href: "#", hasDropdown: true }
    ],
    dropdown: [
      { name: "Travel", href: "/travel" },
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
      title: "Driving Leicester Forward",
      subtitle: "Welcome to Aylestone Kings, Leicester's dependable and friendly taxi service. We provide fast, professional and affordable transport across Leicester, Leicestershire, the East Midlands, and nationwide.",
      ctaText: "Book Your Ride Now",
      features: [
        "Available 24/7",
        "Immediate Pick-Up",
        "Professional Drivers"
      ]
    },

    aboutUs: {
      title: "Over 30 Years' Experience",
      subtitle: "Reliable Transport Since 1995",
      description: "Established in 1995, Aylestone Kings set out with one mission: to deliver the safest, most comfortable, and most reliable taxi service in Leicester at prices everyone can afford. We provide transport across Leicester, Leicestershire, the East Midlands and nationwide — from airport transfers and commutes to appointments and safe rides home. All drivers are fully licensed and DBS-checked."
    },

    whyChooseUs: {
      title: "Why Choose Us?",
      features: [
        "Fast & reliable pick-ups across Leicester",
        "Competitive fixed fares with no hidden charges",
        "Fully licensed, DBS-checked professional drivers",
        "Clean, comfortable and well-maintained cars",
        "Safe for families, students, businesses and tourists",
        "Always open – 24/7/365 including bank holidays"
      ]
    },

    forPassengers: {
      title: "For Passengers",
      subtitle: "Getting around has never been easier. With our app, you can:",
      features: [
        "Book instantly in just a few taps",
        "Track your driver live in real time",
        "Enjoy safe, comfortable travel every journey",
        "Pay your way with flexible payment options"
      ]
    },

    businessTravel: {
      title: "Business Travel Solutions",
      subtitle: "Professional transport for professional needs. Our corporate accounts offer:",
      features: [
        "Centralised account management",
        "Complete booking history and reporting",
        "Customisable invoices and reports",
        "A dedicated account manager for your business"
      ]
    },

    quickBooking: {
      title: "Book Your Taxi Instantly",
      subtitle: "Available day and night with immediate pick-up in most Leicester areas.",
      description: "Book by phone, WhatsApp or online. Pre-bookings welcome. Instant confirmations.",
      features: [
        "SMS/WhatsApp confirmations",
        "Pre-bookings welcome",
        "Professional drivers",
        "Modern, comfortable fleet"
      ]
    },

    executiveFleet: {
      title: "Luxury Transport, Every Time",
      subtitle: "Travel in style with our premium executive vehicles. Perfect for business travel, special occasions, or clients who demand the very best."
    },

    sustainability: {
      title: "Driving a Greener Future",
      subtitle: "We're committed to reducing our environmental footprint. Our eco-friendly fleet and ongoing green initiatives help us deliver a cleaner, more sustainable future for transport in Aylestone."
    },

    // SEO-focused extended homepage content (rendered near page bottom)
    seoContent: {
      introHeading: "Taxi Leicester - Leicester's Most Trusted Taxi Service",
      introBody: "Looking for a reliable Taxi Leicester, Taxi Near Me Leicester, or Cheap Taxi Leicester? Aylestone Kings is Leicester's leading Leicester Taxi Company, providing fast, professional and affordable transport across Leicester, Leicestershire, the East Midlands, and nationwide. Whether you need a Taxi Leicester for the airport, commuting to work, travelling to an appointment, or simply need a safe ride home, we are on hand 24/7. Our Leicester Airport Taxi service offers fixed-price transfers to all major UK airports including East Midlands Airport.",
      mission: "As Leicester's trusted Leicester Taxi Company since 1995, our mission is simple: to deliver the safest, most comfortable, and most reliable Taxi Leicester service, at prices everyone can afford. Whether you're searching for a Taxi Near Me Leicester or a Cheap Taxi Leicester, we provide quality service without compromise.",
      booking: {
        heading: "Book Your Taxi Instantly",
        bullets: [
          "Available day and night",
          "Immediate pick-up in most Leicester areas",
          "SMS/WhatsApp confirmations",
          "Pre-bookings welcome",
          "Professional drivers",
          "Modern fleet"
        ]
      },
      whyUs: {
        heading: "Why We Are Leicester’s Favourite Taxi Company",
        items: [
          {
            title: "Fast & Reliable Pick-Ups",
            text: "We operate from several locations across Leicester for quick dispatch — even during busy periods."
          },
          {
            title: "Competitive, Honest Pricing",
            text: "Fixed fares, no hidden charges, and clear pricing for all journeys."
          },
          {
            title: "Experienced, Fully Licensed Drivers",
            text: "DBS-checked, council-licensed, highly trained and customer-focused."
          },
          {
            title: "Clean, Comfortable & Well-Maintained Cars",
            text: "Saloon, estate, executive, 6- and 8-seaters, and MPVs."
          },
          {
            title: "Safe for Everyone",
            text: "Families, students, businesses, elderly passengers and tourists rely on us daily."
          },
          {
            title: "Always Open – 24/7/365",
            text: "We operate all day, every day including bank holidays."
          }
        ]
      },
      airports: {
        heading: "Airport Taxi Leicester – Fixed Price Airport Transfers",
        airportsList: [
          { name: "East Midlands Airport", href: "/pricing/airports/East-Midlands" },
          { name: "Birmingham Airport", href: "/pricing/airports/Birmingham" },
          { name: "Luton Airport", href: "/pricing/airports/Luton" },
          { name: "Heathrow Airport", href: "/pricing/airports/Heathrow" },
          { name: "Stansted Airport", href: "/pricing/airports/Stansted" },
          { name: "Gatwick Airport", href: "/pricing/airports/Gatwick" },
          { name: "Manchester Airport", href: "/pricing/airports/Manchester" },
          { name: "London City Airport", href: "/pricing" }
        ],
        bullets: [
          "Fixed prices (no surge pricing)",
          "Meet & Greet service available",
          "Flight monitoring included",
          "Spacious cars for luggage",
          "Perfect for families, students & businesses"
        ],
        closing: "Start or end your journey the right way — with a smooth, stress-free airport transfer."
      },
      services: {
        heading: "Our Taxi Services Across Leicester",
        items: [
          "Local Leicester Taxi Service — fast pick-ups and safe travel anywhere in Leicester",
          "Long-Distance Taxi Travel — comfortable and affordable to any UK destination",
          "Train Station Transfers — reliable for Leicester Railway Station and beyond",
          "Corporate & Business Taxi Accounts — professional travel for staff and clients",
          "School Runs & Student Transport — safe and punctual",
          "Executive & Chauffeur Service — premium vehicles for business and VIP travel",
          "Hospital & Medical Appointments — friendly, supportive and on time",
          "6-Seater & 8-Seater Minibus Taxi — perfect for groups and airport runs",
          "Parcel Delivery / Courier Service — fast, secure same-day deliveries",
          "Wheelchair Accessible Taxis — comfortable and supportive transport"
        ]
      },
      areas: {
        heading: "Areas We Cover in Leicester & Leicestershire",
        text: "Leicester City Centre, Oadby, Wigston, Evington, Belgrave, Spinney Hills, Highfields, Clarendon Park, Knighton, Hamilton, Beaumont Leys, Braunstone, Aylestone, Thurmaston, Syston, Birstall, Glenfield, Blaby, Narborough, Enderby, Loughborough, Hinckley, Coalville, Melton Mowbray, Market Harborough and more. If you are anywhere in Leicester — we’ll get to you quickly.",
        links: [
          { name: "Leicester City Centre", href: "/taxis-in-leicester-city-centre" },
          { name: "Aylestone", href: "/taxis-in-aylestone" },
          { name: "Oadby", href: "/taxis-in-oadby" },
          { name: "Wigston", href: "/taxis-in-wigston" },
          { name: "Evington", href: "/taxis-in-evington" },
          { name: "Belgrave", href: "/taxis-in-belgrave" },
          { name: "Spinney Hills", href: "/taxis-in-spinney-hills" },
          { name: "Highfields", href: "/taxis-in-highfields" },
          { name: "Clarendon Park", href: "/taxis-in-clarendon-park" },
          { name: "Knighton", href: "/taxis-in-knighton" },
          { name: "Hamilton", href: "/taxis-in-hamilton" },
          { name: "Beaumont Leys", href: "/taxis-in-beaumont-leys" },
          { name: "Braunstone", href: "/taxis-in-braunstone" },
          { name: "Thurmaston", href: "/taxis-in-thurmaston" },
          { name: "Syston", href: "/taxis-in-syston" },
          { name: "Birstall", href: "/taxis-in-birstall" },
          { name: "Glenfield", href: "/taxis-in-glenfield" },
          { name: "Blaby", href: "/taxis-in-blaby" },
          { name: "Narborough", href: "/taxis-in-narborough" },
          { name: "Enderby", href: "/taxis-in-enderby" },
          { name: "Loughborough", href: "/taxis-in-loughborough" },
          { name: "Hinckley", href: "/taxis-in-hinckley" },
          { name: "Coalville", href: "/taxis-in-coalville" },
          { name: "Melton Mowbray", href: "/taxis-in-melton-mowbray" },
          { name: "Market Harborough", href: "/taxis-in-market-harborough" }
        ]
      },
      fleet: {
        heading: "Our Taxi Fleet",
        items: [
          "Saloon Cars – perfect for everyday travel",
          "Executive Cars – premium comfort for business or occasions",
          "6-Seaters – great for families and groups",
          "8-Seater Minibuses – spacious and cost-effective",
          ],
        note: "Every vehicle is regularly cleaned, inspected and maintained."
      },
      closingCta: {
        heading: "Book Your Taxi Today – Quick, Easy & Reliable",
        bullets: [
          "Affordable prices",
          "Professional drivers",
          "Clean vehicles",
          "Fast pick-ups",
          "24/7 service",
          "All journeys welcome"
        ]
      }
    },

    customerReviews: {
      title: "What Our Customers Say",
      reviews: [
        {
          text: "Fabulous service. We pre-booked outward journey not return. Turned up early. Would most definitely recommend this service and will save the number in case we are this way again. Thanks guys.!",
          author: "Jackie and Pette Scott",
          type: "Airport Transfer"
        },
        {
          text: "Excellent and professional service given when we used 8 seater for a trip to Derby. Would definitely use again.",
          author: "Krystyna Biddles",
          type: "Regular Customer"
        },
        {
          text: "Called for price to airport qouted fab price on the call. Very helpful and reasonably priced. Best services provided.",
          author: "Javeria Imaan",
          type: "Airport Transfer"
        },
        {
          text: "Booked taxi. Arrive within 3 mins. No messing around. Driver was cheerful despite the early start and got me there perfectly on time.",
          author: "Rosie Flora",
          type: "Regular Customer"
        },
        {
          text: "Used their wedding car service last month. Beautiful white Mercedes, immaculate driver in a suit, and they even decorated the car with ribbons. Thank you!",
          author: "Sophie & Tom Davies",
          type: "Wedding Service"
        },
        {
          text: "Booked for my mum's airport transfer to Gatwick. She was nervous about travelling alone, but the driver was so kind and reassuring. Outstanding service.",
          author: "Rachel Green",
          type: "Airport Transfer"
        },
        {
          text: "Had an emergency hospital appointment and needed transport quickly. Aylestone Kings had a car with me within 15 minutes. Driver was so caring and made sure I got in safely. ",
          author: "Robert Mitchell",
          type: "Emergency Transport"
        },
        {
          text: "Regular customer for school runs. Drivers are always friendly with the kids, cars are always clean, and they're never late. Takes the stress out of the school run completely.",
          author: "Amanda Foster",
          type: "School Transport"
        }
      ]
    },

    safeTravel: {
      title: "Trusted Transportation Service Since 1995",
      description:
        "Founded in 1995, Aylestone Kings started a mission to provide a reliable and affordable taxi service to the people of Aylestone and surrounding areas. Today, we operate across the region, offering diverse services 365 days a year with the same commitment to excellence.",
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
      subtitle: "Whether you're a passenger, driver, or business, we have the perfect solution for your transportation needs.",
      passengers: {
        title: "For Passengers",
        description: "Book rides in seconds, track your driver in real-time, and enjoy safe, comfortable journeys.",
        features: [
          "Instant booking system",
          "Live driver tracking",
          "Multiple payment options",
          "Professional drivers"
        ]
      },
      drivers: {
        title: "For Drivers",
        description: "Join our team and enjoy flexible schedules, competitive earnings, and modern technology.",
        features: [
          "Flexible schedules",
          "Competitive earnings",
          "Modern fleet",
          "24/7 support"
        ]
      }
    }
  },

  // Driver Page Content
  driverPage: {
    seo: {
      title: "Become a Driver – Aylestone Taxis Leicester",
      metaDescription:
        "Join Aylestone Taxis as a licensed driver in Leicester. Flexible hours, weekly pay, steady bookings, and full local support. Apply online today.",
    },
    hero: {
      badge: "Career Opportunities",
      heading: "Join Our Team as a Driver",
      subheading:
        "Become part of Leicester's most reliable and trusted taxi service. We're looking for licensed, professional drivers to join our established team.",
      body: "With over 30 years serving the Leicester community, Aylestone Taxis offers a stable, supportive, and rewarding environment for both full-time and part-time drivers. Whether you want flexible hours, night shifts, or weekend work, we have opportunities that fit your lifestyle.",
      primaryCta: {
        label: "Join as a Driver Now",
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
            body: "Earn competitive rates with weekly payments direct to your bank. Our transparent commission structure means you keep more of what you earn.",
          },
          {
            icon: "clock",
            title: "Flexible Schedule",
            body: "Choose shifts that suit you — days, nights, weekends or part-time. Perfect for balancing work around your lifestyle and family.",
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
          "Opportunities for career growth within the company",
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
        body:
          "Apply today and join Leicester's most trusted taxi service. Get steady earnings, flexible hours and a local team that's here to support you.",
        primaryCta: {
          label: "Join as a Driver Now",
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
      subtitle: "At Aylestone Kings, we offer a comprehensive range of vehicles to meet all your transportation needs. Whether you're travelling solo or with a group, our fleet guarantees comfort, reliability, and style."
    },

    vehicles: [
      {
        name: "Estate Vehicle",
        description: "Perfect for those who need extra space for luggage or equipment. Our estate vehicles combine practicality with comfort, making them ideal for airport transfers and shopping trips.",
        features: ["Spacious luggage area", "Comfortable seating for 5", "Perfect for airport runs"],
        image: "estateCar",
      },
      {
        name: "Executive",
        description: "The ultimate in luxury and sophistication. Perfect for business meetings, corporate events, and when you want to make a lasting impression with premium travel.",
        features: ["Luxury interior", "Premium sound system", "Climate control", "Professional service"],
        image: "executiveCar",
      },
      {
        name: "MPV Vehicles",
        description: "Perfect for group travel and family outings. Spacious interiors accommodate larger groups comfortably.",
        features: ["Seats up to 8 passengers", "Extra luggage space", "Comfortable seating", "Group friendly"],
        image: "mpvCar",
      },
      {
        name: "Saloon Cars",
        description: "Professional and comfortable vehicles ideal for business travel and daily commutes.",
        features: ["Professional appearance", "Comfortable ride", "Fuel efficient", "Reliable service"],
        image: "saloonCar",
      },
      {
        name: "Luxury Vehicles",
        description: "Top-of-the-line vehicles for the ultimate premium experience and VIP treatment.",
        features: ["Premium amenities", "Chauffeur service", "Luxury interior", "VIP treatment"],
        image: "luxuryCar",
      },
    ],
  },

  // Company Page Content
  companyPage: {
    hero: {
      title: "About Aylestone Kings",
    },
    about: {
      title: "About Us",
      subtitle: "Founded in 1995, Aylestone Kings started a mission to provide a reliable and affordable taxi service to the people of Aylestone and surrounding areas. Today, we operate across the region, offering diverse services 365 days a year with the same commitment to excellence.",
      description: "With over 30 years in the industry, Aylestone Kings has grown into a trusted business for its dedication to the Private Hire and Taxi industry. Championing safety regulations and legislative reform, Aylestone Kings has consistently led the way in industry innovation, working closely with local authorities and representing every local authority across the Midlands. The company seamlessly blends local heritage and values with global technological innovation.."
    },
    trusted: {
      title: "Our Reputation",
      subtitle: "Each year, we serve over 10,000 passengers across the region, proudly maintaining an exceptional 99.7% satisfaction rating.",
      description: "Whether you're looking for a safe, comfortable, and efficient journey — from daily commutes to working with public sector institutions and multinational corporations — we are here to meet your needs."
    }
  },

  // Social Media Links
  socialMedia: {
    facebook: "https://www.facebook.com/share/1EzHEEqLRK/",
    instagram: "https://www.instagram.com/aylestone_kings?igsh=MTJqYW1rZ3RyODd0cA==",
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
      { name: "Airport Transfers", href: "/pricing" },
      { name: "Shopping", href: "/travel" },
      { name: "Students Transport", href: "/travel" },
      { name: "Match-Day Travel", href: "/travel" },
      { name: "Train Station", href: "/travel" },
    ],

    legal: [
      { name: "Privacy Policy", href: "/Privacy-policy.pdf" },
      { name: "Terms of Service", href: "/Privacy-policy.pdf" },
    ],
    areaGroups: [
      {
        title: "Leicester Areas",
        items: [
          { name: "Taxis in Aylestone", href: "/taxis-in-aylestone" },
          { name: "Taxis in Eyres Monsell", href: "/taxis-in-eyres-monsell" },
          { name: "Taxis in Glen Parva", href: "/taxis-in-glen-parva" },
          { name: "Taxis in South Wigston", href: "/taxis-in-south-wigston" },
          { name: "Taxis in Knighton", href: "/taxis-in-knighton" },
          { name: "Taxis in Clarendon Park", href: "/taxis-in-clarendon-park" },
          { name: "Taxis in Stoneygate", href: "/taxis-in-stoneygate" },
          { name: "Taxis in Oadby", href: "/taxis-in-oadby" },
          { name: "Taxis in Wigston", href: "/taxis-in-wigston" },
          { name: "Taxis in Leicester City Centre", href: "/taxis-in-leicester-city-centre" },
          { name: "Taxis in Fosse Park", href: "/taxis-in-fosse-park" },
          { name: "Taxis in Braunstone", href: "/taxis-in-braunstone" },
          { name: "Taxis in Braunstone Town", href: "/taxis-in-braunstone-town" },
          { name: "Taxis in Evington", href: "/taxis-in-evington" },
          { name: "Taxis in Humberstone", href: "/taxis-in-humberstone" },
          { name: "Taxis in Belgrave", href: "/taxis-in-belgrave" },
          { name: "Taxis in Highfields", href: "/taxis-in-highfields" },
          { name: "Taxis in Westcotes", href: "/taxis-in-westcotes" },
          { name: "Taxis in Thurnby Lodge", href: "/taxis-in-thurnby-lodge" },
          { name: "Taxis in Rushey Mead", href: "/taxis-in-rushey-mead" },
          { name: "Taxis in Beaumont Leys", href: "/taxis-in-beaumont-leys" },
          { name: "Taxis in Hamilton", href: "/taxis-in-hamilton" },
          { name: "Taxis in Syston", href: "/taxis-in-syston" },
          { name: "Taxis in Wigston Fields", href: "/taxis-in-wigston-fields" },
          { name: "Taxis in Thurmaston", href: "/taxis-in-thurmaston" },
          { name: "Taxis in Birstall", href: "/taxis-in-birstall" }
        ]
      },
      {
        title: "Wider Leicester Districts",
        items: [
          { name: "Taxis in Oadby", href: "/taxis-in-oadby" },
          { name: "Taxis in Wigston", href: "/taxis-in-wigston" },
          { name: "Taxis in South Wigston", href: "/taxis-in-south-wigston" },
          { name: "Taxis in Braunstone Town", href: "/taxis-in-braunstone-town" },
          { name: "Taxis in Wigston Fields", href: "/taxis-in-wigston-fields" },
          { name: "Taxis in Thurmaston", href: "/taxis-in-thurmaston" },
          { name: "Taxis in Syston", href: "/taxis-in-syston" },
          { name: "Taxis in Birstall", href: "/taxis-in-birstall" },
          { name: "Taxis in Groby", href: "/taxis-in-groby" }
        ]
      },
      {
        title: "Surrounding Towns",
        items: [
          { name: "Taxis in Blaby", href: "/taxis-in-blaby" },
          { name: "Taxis in Narborough", href: "/taxis-in-narborough" },
          { name: "Taxis in Enderby", href: "/taxis-in-enderby" },
          { name: "Taxis in Whetstone", href: "/taxis-in-whetstone" },
          { name: "Taxis in Countesthorpe", href: "/taxis-in-countesthorpe" },
          { name: "Taxis in Broughton Astley", href: "/taxis-in-broughton-astley" },
          { name: "Taxis in Cosby", href: "/taxis-in-cosby" },
          { name: "Taxis in Kibworth", href: "/taxis-in-kibworth" },
          { name: "Taxis in Market Harborough", href: "/taxis-in-market-harborough" },
          { name: "Taxis in Lutterworth", href: "/taxis-in-lutterworth" },
          { name: "Taxis in Hinckley", href: "/taxis-in-hinckley" },
          { name: "Taxis in Coalville", href: "/taxis-in-coalville" },
          { name: "Taxis in Melton Mowbray", href: "/taxis-in-melton-mowbray" },
          { name: "Taxis in Groby", href: "/taxis-in-groby" }
        ]
      }
    ],
    airportLinks: [
      { name: "Birmingham Airport", href: "/pricing/airports/Birmingham" },
      { name: "East Midlands Airport", href: "/pricing/airports/East-Midlands" },
      { name: "Heathrow Airport", href: "/pricing/airports/Heathrow" },
      { name: "Gatwick Airport", href: "/pricing/airports/Gatwick" },
      { name: "Luton Airport", href: "/pricing/airports/Luton" },
      { name: "Stansted Airport", href: "/pricing/airports/Stansted" },
      { name: "Manchester Airport", href: "/pricing/airports/Manchester" }
    ],
    destinationLinks: [
      { name: "Taxis in Leicester Royal Infirmary", href: "/taxis-in-leicester-royal-infirmary" },
      { name: "Taxis in Glenfield Hospital", href: "/taxis-in-glenfield-hospital" },
      { name: "Taxis in Leicester General Hospital", href: "/taxis-in-leicester-general-hospital" },
      { name: "Taxis in Spire Leicester Hospital", href: "/taxis-in-spire-leicester-hospital" },
      { name: "Taxis in Nuffield Health Leicester Hospital", href: "/taxis-in-nuffield-health-leicester-hospital" },
      { name: "Taxis in University of Leicester", href: "/taxis-in-university-of-leicester" },
      { name: "Taxis in De Montfort University", href: "/taxis-in-de-montfort-university" },
      { name: "Taxis in Leicester College", href: "/taxis-in-leicester-college" },
      { name: "Taxis in Leicester Railway Station", href: "/taxis-in-leicester-railway-station" },
      { name: "Taxis in South Wigston Station", href: "/taxis-in-south-wigston-station" },
      { name: "Taxis in Narborough Station", href: "/taxis-in-narborough-station" },
      { name: "Taxis in St Margaret's Bus Station", href: "/taxis-in-st-margarets-bus-station" },
      { name: "Taxis in King Power Stadium", href: "/taxis-in-king-power-stadium" },
      { name: "Taxis in Welford Road Stadium", href: "/taxis-in-welford-road-stadium" },
      { name: "Taxis in Morningside Arena", href: "/taxis-in-morningside-arena" },
      { name: "Taxis in Leicester Racecourse", href: "/taxis-in-leicester-racecourse" },
      { name: "Taxis in Leicester Market", href: "/taxis-in-leicester-market" },
      { name: "Taxis in Meridian Business Park", href: "/taxis-in-meridian-business-park" },
      { name: "Taxis in Grove Park", href: "/taxis-in-grove-park" },
      { name: "Taxis in Jame Mosque Leicester", href: "/taxis-in-jame-mosque-leicester" },
      { name: "Taxis in Masjid Umar", href: "/taxis-in-masjid-umar" },
      { name: "Taxis in Shree Hindu Temple Leicester", href: "/taxis-in-shree-hindu-temple-leicester" },
      { name: "Taxis in Guru Nanak Gurdwara Leicester", href: "/taxis-in-guru-nanak-gurdwara-leicester" },
      { name: "Taxi to Asda Fosse Park", href: "/taxis-in-asda-fosse-park" },
      { name: "Taxi to Sainsburys Grove Triangle", href: "/taxis-in-sainsburys-grove-triangle" },
      { name: "Taxi to Tesco Narborough Road", href: "/taxis-in-tesco-narborough-road" },
      { name: "Taxi to Aldi Aylestone Road", href: "/taxis-in-aldi-aylestone-road" },
      { name: "Taxi to Lidl Beaumont Leys", href: "/taxis-in-lidl-beaumont-leys" },
      { name: "Taxi to Morrisons Freemens Common", href: "/taxis-in-morrisons-freemens-common" },
      { name: "Taxi to Iceland City Centre", href: "/taxis-in-iceland-city-centre" },
      { name: "Taxi to Farmfoods St Matthews", href: "/taxis-in-farmfoods-st-matthews" },
      { name: "Taxi to M&S Foodhall City Centre", href: "/taxis-in-m-and-s-foodhall-city-centre" },
      { name: "Taxi to Waitrose Oadby", href: "/taxis-in-waitrose-oadby" }
    ],
    priorityAreas: {
      opPriority: [
        { 
          name: "National Space Centre", 
          href: "/taxis-in-national-space-centre",
          description: "Leicester's #1 attraction with huge search volume",
          icon: "Rocket"
        },
        { 
          name: "Highcross Leicester", 
          href: "/taxis-in-highcross-leicester",
          description: "Major shopping centre with strong 'taxi to Highcross' demand",
          icon: "ShoppingBag"
        },
        { 
          name: "Curve Theatre", 
          href: "/taxis-in-curve-theatre",
          description: "Events & nightlife, people book taxis late evenings",
          icon: "Theater"
        }
      ],
      mediumPriority: [
        { 
          name: "King Richard III Visitor Centre", 
          href: "/taxis-in-king-richard-iii-visitor-centre",
          description: "Big tourist pull, city centre location",
          icon: "Crown"
        },
        { 
          name: "Leicester Cathedral", 
          href: "/taxis-in-leicester-cathedral",
          description: "Historic site and Richard III tomb",
          icon: "Church"
        },
        { 
          name: "De Montfort Hall", 
          href: "/taxis-in-de-montfort-hall",
          description: "Concerts, graduations, large events",
          icon: "Music"
        }
      ],
      optionalPriority: [
        { 
          name: "Haymarket Shopping Centre", 
          href: "/taxis-in-haymarket-shopping-centre",
          description: "Secondary to Highcross",
          icon: "ShoppingCart"
        },
        { 
          name: "Jewry Wall Museum", 
          href: "/taxis-in-jewry-wall-museum",
          description: "Smaller attraction searches",
          icon: "Calendar"
        },
        { 
          name: "New Walk Museum", 
          href: "/taxis-in-new-walk-museum",
          description: "Cultural attraction",
          icon: "Calendar"
        },
        { 
          name: "Athena / City Rooms", 
          href: "/taxis-in-athena-city-rooms",
          description: "Event venues, good for weddings/conferences",
          icon: "Calendar"
        }
      ]
    },
    areaDetails: {
      oadby: {
        landmarks: ["University of Leicester Botanic Garden", "The Parade (Oadby town centre)"]
      }
    }
  },

  // Blog Page Content
  blogPage: {
    title: "Aylestone Kings Blog",
    subtitle: "Discover insights, tips, and stories about transportation in Leicester",
    blogs: [
      {
        id: "christmas-travel-tips-leicester",
        title: "Christmas Travel Tips: Getting Around Leicester This Festive Season",
        excerpt: "Make your Christmas shopping and festive celebrations stress-free with Aylestone Kings. Discover our top tips for navigating Leicester during the busiest time of the year.",
        content: `
          <p>The festive season is upon us, and Leicester is buzzing with Christmas shoppers, holiday parties, and family gatherings. Whether you're heading to Highcross for last-minute gifts, attending a Christmas party, or visiting family, getting around Leicester during December can be challenging. Aylestone Kings is here to make your Christmas travel smooth and stress-free.</p>
          
          <h2>Plan Ahead for Christmas Shopping</h2>
          <p>Leicester's shopping centres, including Highcross and Fosse Park, get incredibly busy in December. Avoid the stress of finding parking and navigating crowded streets by booking a taxi in advance. Our drivers know the best routes and can drop you right at the entrance, saving you time and hassle.</p>
          
          <h2>Christmas Party Transport</h2>
          <p>Celebrating with colleagues or friends? Don't let parking or designated driver duties spoil your festive fun. Book Aylestone Kings for your Christmas party transport - both there and back. We offer reliable, safe rides so you can enjoy the celebrations without worrying about getting home safely.</p>
          
          <h2>Family Visits Made Easy</h2>
          <p>Visiting family across Leicester this Christmas? Our spacious vehicles can accommodate the whole family, plus all those presents and luggage. Whether you're heading across the city or to nearby areas, we'll get you there comfortably and on time.</p>
          
          <h2>Late-Night Festive Rides</h2>
          <p>With Christmas markets, late-night shopping, and festive events happening throughout December, you might find yourself needing transport at unusual hours. Aylestone Kings operates 24/7, so whether you need an early morning airport transfer or a late-night ride home from a Christmas party, we're here for you.</p>
          
          <h2>Airport Transfers During the Holidays</h2>
          <p>Picking up family members from the airport? Or heading away for Christmas yourself? Our reliable airport transfer service ensures you don't miss flights or keep loved ones waiting. We monitor flight schedules and adjust pickup times accordingly, so you can focus on enjoying the holidays.</p>
          
          <h2>Tips for Stress-Free Christmas Travel</h2>
          <ul>
            <li><strong>Book in advance:</strong> December is our busiest month - booking ahead ensures availability</li>
            <li><strong>Allow extra time:</strong> Traffic can be heavier during the festive season</li>
            <li><strong>Pack efficiently:</strong> Our drivers can help with shopping bags and luggage</li>
            <li><strong>Use our app:</strong> Track your taxi and receive real-time updates</li>
            <li><strong>Plan return journeys:</strong> Book your ride home when booking your outbound journey</li>
          </ul>
          
          <h2>Why Choose Aylestone Kings This Christmas?</h2>
          <p>With over 30 years of experience serving Leicester, we understand the unique challenges of festive travel. Our local knowledge means we know the best routes to avoid traffic, our reliable service means you won't be left waiting, and our friendly drivers will help make your journey pleasant.</p>
          
          <p>Don't let transport worries dampen your Christmas spirit. Book with Aylestone Kings and enjoy a stress-free festive season. From all of us at Aylestone Kings, we wish you a very Merry Christmas and a Happy New Year!</p>
        `,
        date: "2025-12-03",
        author: "Aylestone Kings Team",
        category: "Travel Tips",
        image: "/christmas-blog.jpg"
      },
      {
        id: "black-friday-driver-deal-10-percent-commission",
        title: "Black Friday Driver Deal – 10% Commission for Returning Drivers",
        excerpt: "We're launching a limited-time Black Friday offer for former Aylestone drivers who want to return and maximise their earnings during the busiest period of the year.",
        content: `
          <p>We're launching a limited-time Black Friday offer for former Aylestone drivers who want to return and maximise their earnings during the busiest period of the year.</p>
          
          <h2>Rejoin Before Black Friday</h2>
          <p>Any driver who rejoins before Black Friday will work on 10% commission until 31 December.</p>
          <p>This offer is straightforward, with no hidden conditions.</p>
          
          <h2>What You Get</h2>
          
          <h3>10% Commission</h3>
          <p>Earn more on every job through the busiest months of the year.</p>
          
          <h3>Quick Reactivation</h3>
          <p>Minimal steps needed — get back on the road fast.</p>
          
          <h3>Full Office Support</h3>
          <p>24/7 assistance, dispatch support, and WhatsApp help whenever needed.</p>
          
          <h3>Consistent Work</h3>
          <p>High demand across Leicester means strong earning potential from day one.</p>
          
          <h2>Why Now Is the Best Time to Come Back</h2>
          <p>November and December bring peak demand for:</p>
          <ul>
            <li>Christmas shopping trips</li>
            <li>Airport transfers</li>
            <li>Early morning and evening bookings</li>
            <li>Cold weather travel</li>
            <li>School runs</li>
            <li>Night-time journeys</li>
          </ul>
          <p>This makes it the most profitable period for drivers, especially with a reduced commission rate.</p>
          
          <h2>Ready to Rejoin?</h2>
          <p>Fill in the online form on this page and our team will contact you the same day to get you activated.</p>
        `,
        date: "2025-11-26",
        author: "Aylestone Kings Team",
        category: "Drivers",
        image: "/Driver-blog.webp"
      },
      {
        id: "why-leicester-locals-trust-aylestone-taxis",
        title: "Why Leicester Locals Trust Aylestone Taxis",
        excerpt: "For over 30 years, Aylestone Kings has been the trusted choice for transportation in Leicester. Discover what makes us the preferred taxi service for thousands of local residents.",
        content: `
          <p>When it comes to choosing a taxi service in Leicester, trust is everything. For over 30 years, Aylestone Kings has been serving the local community with reliable, professional, and affordable transportation. But what exactly makes Leicester locals trust us with their journeys?</p>
          
          <h2>Deep Local Knowledge</h2>
          <p>Our drivers know Leicester like the back of their hand. From navigating the busy streets of the city centre to finding the quickest routes during peak hours, our local expertise ensures you arrive at your destination on time, every time. Whether you're heading to the National Space Centre, Highcross Leicester, or any location across the city, we know the best routes.</p>
          
          <h2>Proven Track Record</h2>
          <p>Since 1995, we've built a reputation for excellence. With over 30 years of experience, thousands of satisfied customers, and a 99.7% satisfaction rating, our track record speaks for itself. Leicester locals trust us because we've consistently delivered reliable service year after year.</p>
          
          <h2>Safety First</h2>
          <p>All our drivers are fully licensed by Leicester City Council and undergo rigorous DBS checks. Our vehicles are regularly maintained and inspected to ensure your safety. We're fully insured and operate with the highest safety standards in the industry.</p>
          
          <h2>24/7 Availability</h2>
          <p>Life doesn't stop at 5pm, and neither do we. Our 24/7 service means you can count on us whenever you need us - whether it's an early morning airport transfer, a late-night journey home, or an emergency ride to the hospital.</p>
          
          <h2>Transparent Pricing</h2>
          <p>No hidden fees, no surprises. We believe in transparent, fair pricing. Leicester locals appreciate knowing exactly what they'll pay upfront, with competitive rates that won't break the bank.</p>
          
          <h2>Community Commitment</h2>
          <p>We're not just a taxi service - we're part of the Leicester community. We support local events, understand local needs, and are committed to serving our community for years to come. When you choose Aylestone Kings, you're supporting a local business that cares about Leicester.</p>
          
          <p>Join thousands of Leicester locals who trust Aylestone Kings for their transportation needs. Book your ride today and experience the difference that 30 years of excellence makes.</p>
        `,
        date: "2025-11-04",
        author: "Aylestone Kings Team",
        category: "Community",
        image: "/Locals-trust.jpg"
      },
      {
        id: "reliable-airport-transfers-from-leicester",
        title: "Reliable Airport Transfers from Leicester",
        excerpt: "Planning your next trip? Discover why Aylestone Kings is the preferred choice for stress-free airport transfers from Leicester to all major UK airports.",
        content: `
          <p>Planning a trip abroad? Whether you're heading to Birmingham, East Midlands, Heathrow, Gatwick, or any other major UK airport, reliable airport transfers are essential for a stress-free start to your journey. Aylestone Kings has been providing dependable airport transfer services from Leicester for over 30 years.</p>
          
          <h2>Why Choose Aylestone Kings for Airport Transfers?</h2>
          
          <h3>Punctuality Guaranteed</h3>
          <p>Missing a flight can be costly and stressful. That's why we guarantee punctuality for all airport transfers. We monitor flight schedules and adjust pickup times accordingly, ensuring you arrive at the airport with plenty of time to spare. Our drivers understand the importance of being on time and plan accordingly.</p>
          
          <h3>All Major Airports Covered</h3>
          <p>We provide reliable transfers from Leicester to all major UK airports:</p>
          <ul>
            <li><strong>Birmingham Airport</strong> - Approximately 45 minutes</li>
            <li><strong>East Midlands Airport</strong> - Approximately 30 minutes</li>
            <li><strong>Heathrow Airport</strong> - Approximately 2 hours</li>
            <li><strong>Gatwick Airport</strong> - Approximately 2.5 hours</li>
            <li><strong>Luton Airport</strong> - Approximately 1.5 hours</li>
            <li><strong>Stansted Airport</strong> - Approximately 2 hours</li>
            <li><strong>Manchester Airport</strong> - Approximately 1.5 hours</li>
          </ul>
          
          <h3>Comfortable Vehicles</h3>
          <p>Start your journey in comfort. Our fleet includes spacious estate vehicles perfect for luggage, executive cars for business travel, and MPVs for larger groups. All vehicles are clean, well-maintained, and equipped with modern amenities.</p>
          
          <h3>Meet and Greet Service</h3>
          <p>For added convenience, we offer meet and greet services at the airport. Your driver will meet you in the arrivals hall with a name board, help with your luggage, and ensure a smooth journey home.</p>
          
          <h3>Competitive Pricing</h3>
          <p>We offer transparent, competitive pricing for all airport transfers. No hidden fees, no surprises. Book in advance for the best rates, and we'll confirm your price upfront.</p>
          
          <h3>Easy Booking</h3>
          <p>Booking your airport transfer is simple. You can book online, call us directly, or use our mobile app. We recommend booking in advance, especially during peak travel seasons, to secure your preferred time slot.</p>
          
          <h3>Return Transfers</h3>
          <p>Need a ride home from the airport? We also provide return transfer services. Simply provide your flight details, and we'll track your flight and adjust pickup times if there are any delays.</p>
          
          <h2>Tips for a Smooth Airport Transfer</h2>
          <ul>
            <li>Book in advance, especially for early morning or late-night flights</li>
            <li>Provide your flight details so we can monitor for delays</li>
            <li>Allow extra time during peak travel periods</li>
            <li>Pack efficiently - our drivers can help with luggage</li>
            <li>Have your booking confirmation ready</li>
          </ul>
          
          <p>Don't let airport transfers stress you out. Trust Aylestone Kings for reliable, punctual, and comfortable airport transfers from Leicester. Book your transfer today and travel with confidence.</p>
        `,
        date: "2025-11-03",
        author: "Aylestone Kings Team",
        category: "Airport Transfers",
        image: "/Reliable-airport-transfers.jpg"
      },
      {
        id: "explore-leicester-with-aylestone-taxis",
        title: "Explore Leicester with Aylestone Taxis",
        excerpt: "Discover Leicester's hidden gems and popular attractions with Aylestone Kings. From historic sites to modern entertainment, we'll get you there in comfort and style.",
        content: `
          <p>Leicester is a city rich in history, culture, and entertainment. From the historic King Richard III Visitor Centre to the modern Highcross shopping centre, there's something for everyone to explore. Aylestone Kings makes it easy to discover all that Leicester has to offer with reliable, comfortable taxi services throughout the city.</p>
          
          <h2>Historic Attractions</h2>
          
          <h3>King Richard III Visitor Centre</h3>
          <p>Step back in time and discover the fascinating story of King Richard III, whose remains were discovered in Leicester in 2012. The visitor centre offers an immersive experience that brings history to life. Located in the heart of the city, it's easily accessible by taxi.</p>
          
          <h3>Leicester Cathedral</h3>
          <p>Visit the final resting place of King Richard III at Leicester Cathedral. This beautiful historic building is a must-see for history enthusiasts and offers a peaceful retreat in the city centre.</p>
          
          <h3>Jewry Wall Museum</h3>
          <p>Explore Leicester's Roman past at the Jewry Wall Museum. Discover Roman baths and artefacts that tell the story of Leicester's ancient history. Perfect for families and history lovers alike.</p>
          
          <h2>Modern Entertainment</h2>
          
          <h3>Highcross Leicester</h3>
          <p>Shop till you drop at Highcross, Leicester's premier shopping destination. With over 100 stores, restaurants, and entertainment options, Highcross offers a complete day out. We regularly provide taxi services to and from Highcross, making it easy to enjoy a shopping day without worrying about parking.</p>
          
          <h3>Curve Theatre</h3>
          <p>Catch a show at Curve, Leicester's award-winning theatre. From West End productions to local performances, Curve offers world-class entertainment. Our taxi service is perfect for theatre nights, especially for late evening performances.</p>
          
          <h3>National Space Centre</h3>
          <p>Embark on a journey through space at the National Space Centre. This interactive museum is perfect for families and space enthusiasts. With exhibits, planetarium shows, and hands-on activities, it's a day out you won't forget.</p>
          
          <h2>Sports & Events</h2>
          
          <h3>King Power Stadium</h3>
          <p>Cheer on Leicester City FC at King Power Stadium. Match days are busy, and parking can be challenging. Our taxi service is the perfect solution for getting to and from the stadium stress-free.</p>
          
          <h3>Welford Road Stadium</h3>
          <p>Support the Leicester Tigers at Welford Road Stadium. Whether it's a rugby match or a special event, we'll get you there on time and in comfort.</p>
          
          <h3>De Montfort Hall</h3>
          <p>Enjoy concerts, comedy shows, and events at De Montfort Hall. This historic venue hosts a variety of entertainment throughout the year. Our taxi service ensures you arrive relaxed and ready to enjoy the show.</p>
          
          <h2>Shopping & Dining</h2>
          
          <h3>Leicester Market</h3>
          <p>Experience the vibrant atmosphere of Leicester Market, one of the largest outdoor markets in Europe. From fresh produce to unique crafts, there's something for everyone. We provide regular taxi services to the market area.</p>
          
          <h3>Golden Mile</h3>
          <p>Explore Leicester's famous Golden Mile, known for its Indian restaurants, shops, and cultural attractions. Experience authentic cuisine and vibrant culture in this unique part of the city.</p>
          
          <h2>Why Choose Aylestone Kings for Exploring Leicester?</h2>
          
          <h3>Local Knowledge</h3>
          <p>Our drivers know Leicester inside and out. We can recommend the best routes, avoid traffic, and even suggest local attractions you might not know about.</p>
          
          <h3>Flexible Service</h3>
          <p>Whether you're planning a day of sightseeing or a night out, we're here when you need us. Our 24/7 service means you can explore Leicester at your own pace.</p>
          
          <h3>Comfortable Rides</h3>
          <p>After a long day of exploring, there's nothing better than a comfortable ride home. Our well-maintained vehicles ensure you travel in comfort throughout your Leicester adventure.</p>
          
          <h3>Group Travel</h3>
          <p>Exploring with friends or family? Our MPV vehicles can accommodate larger groups, making it easy to travel together to Leicester's attractions.</p>
          
          <h2>Planning Your Leicester Adventure</h2>
          <p>Whether you're a local resident looking to rediscover your city or a visitor exploring Leicester for the first time, Aylestone Kings is here to help you get around. Our reliable taxi service makes it easy to visit multiple attractions in one day, without worrying about parking or navigation.</p>
          
          <p>Book your taxi today and start exploring everything Leicester has to offer. From historic sites to modern entertainment, we'll get you there safely and comfortably.</p>
        `,
        date: "2025-11-05",
        author: "Aylestone Kings Team",
        category: "Local Guide",
        image: "/Explore Leicester.jpg"
      }
    ]
  },
}

// Export individual sections for easier imports
export const companyInfo = siteData.company
export const contactInfo = {
  phone: siteData.company.phone,
  whatsapp: siteData.company.whatsapp,
  email: siteData.company.email,
  address: {
    street: "753A, Aylestone Rd, Aylestone",
    city: "Leicester",
    postcode: "LE2 8TG",
    country: "United Kingdom"
  },
  booking: {
    online: "https://aylestonekings.webbooker.icabbi.com/",
    phone: siteData.company.phone
  }
}
export const socialLinks = {
  facebook: siteData.socialMedia.facebook,
  instagram: siteData.socialMedia.instagram
}
export const navigationItems = siteData.navigation
export const footerData = siteData.footer
export const colorScheme = {
  primary: "#06A0A6",
  secondary: "#0F0D3E",
  accent: "#EF5B6A",
  text: {
    primary: "#0F0D3E",
    secondary: "#E4E4E4",
    muted: "#6B7280"
  },
  background: {
    primary: "#FFFFFF",
    secondary: "#F8FAFC",
    dark: "#0F0D3E"
  }
}
export const copyrightInfo = {
  year: 2025,
  text: "© 2025 Aylestone Kings. All rights reserved."
}

export default siteData