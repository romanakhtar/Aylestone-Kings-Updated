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
      { name: "Travel", href: "/travel" },
      { name: "Contact", href: "/contact" },
      { name: "More", href: "#", hasDropdown: true }
    ],
    dropdown: [
      { name: "Company", href: "/company" },
      { name: "Fleet", href: "/fleet" },
    ],
  },

  // Images
  images: {
    // Hero Section
    heroTaxi: "/white-modern-taxi-side.png",

    // App Store Badges
    googlePlay: "/google-play-download-black.png",
    appStore: "/apple-app-store-download-button-black.png",

    // Homepage Images
    businessmanInCar: "/black-car.jpg",
    appScreenBooking: "/app-screen-booking.png",
    appScreenTracking: "/app-screen-tracking.png",
    appScreenHistory: "/app-screen-history.png",

    // Fleet Images
    fleetHero: "/premium-car-hero.jpg",
    estateCar: "/Estate vehicle.png",
    saloonCar: "/black-car.jpg",
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
    trustedTransport: "/trusted transport.jpg",

    // About Page Images
    aboutHero: "/about-hero-image.jpg",
  },

  // Homepage Content
  homepage: {
    hero: {
      title: "Moving Aylestone Forward",
      subtitle: "Your trusted taxi companion — providing fast, reliable and affordable transport across Aylestone and beyond.",
      ctaText: "Book Your Ride Now",
      features: [
        "24/7 Service",
        "GPS Tracking", 
        "Professional Drivers"
      ]
    },

    aboutUs: {
      title: "Over 30 Years' Experience",
      subtitle: "Reliable Transport Since 1995",
      description: "Established in 1995, Aylestone Kings set out with one mission: to deliver a professional, affordable and dependable taxi service for the people of Aylestone and the surrounding area. All our drivers are fully DBS-checked for your peace of mind, ensuring a safe and secure service every time. Whether it's airport transfers, courier deliveries or local journeys, we've got you covered."
    },

    whyChooseUs: {
      title: "Why Choose Us?",
      features: [
        "24/7 availability — day and night",
        "Live GPS tracking for every journey",
        "Fully licensed and professional drivers",
        "Multiple secure payment options"
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
      title: "Book a Taxi in Under 10 Seconds",
      subtitle: "As leicester and leicestershire's leading taxi firm, we guarantee priority service for every booking.",
      description: "With our app you can:",
      features: [
        "Book in seconds",
        "Track your driver live",
        "Arrive in comfort and on time"
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
    supermarketLinks: [
      { name: "Supermarket Taxi Leicester", href: "/supermarket-taxi-leicester" },
      { name: "Taxi to Asda Fosse Park", href: "/taxis-in-fosse-park" },
      { name: "Taxi to Sainsburys Grove Triangle", href: "/taxis-in-grove-park" },
      { name: "Taxi to Tesco Narborough Road", href: "/taxis-in-narborough" },
      { name: "Taxi to Aldi Aylestone Road", href: "/taxis-in-aylestone" },
      { name: "Taxi to Lidl Beaumont Leys", href: "/taxis-in-beaumont-leys" },
      { name: "Taxi to Morrisons Freemens Common", href: "/taxis-in-leicester-city-centre" },
      { name: "Taxi to Iceland City Centre", href: "/taxis-in-leicester-city-centre" },
      { name: "Taxi to Farmfoods St Matthews", href: "/taxis-in-leicester-city-centre" },
      { name: "Taxi to M&S Foodhall City Centre", href: "/taxis-in-leicester-city-centre" },
      { name: "Taxi to Waitrose Oadby", href: "/taxis-in-oadby" }
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
      { name: "Taxis in Guru Nanak Gurdwara Leicester", href: "/taxis-in-guru-nanak-gurdwara-leicester" }
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