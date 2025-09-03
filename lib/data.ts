export const siteData = {
  // Company Information
  company: {
    name: "Aylestone Kings",
    tagline: "",
    region: "Aylestone and surrounding areas",
    phone: "0116 2338888",
    whatsapp: "+447535855786",
    email: "info@aylestone-taxis.co.uk",
    address: "753A, Aylestone, Leicester, LE2 8TG, UK",
    description:
      "Founded in 1995, Aylestone Kings started a mission to provide a reliable and affordable taxi service to the people of Aylestone and surrounding areas. Today, we operate across the region, offering diverse services 365 days a year with the same commitment to excellence.",
    founded: "1995",
    achievements: "National Lifetime Achievement Award for commitment to the Private Hire and Taxi industry",
    passengersServed: "10,000",
    satisfactionRating: "99.7%",
    yearsExperience: "25+",
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
      { name: "Airport Pricing", href: "/pricing" },
      { name: "Fleet", href: "/fleet" },
      { name: "Contact", href: "/contact" },
      { name: "More", href: "#", hasDropdown: true }
    ],
    dropdown: [
      { name: "Company", href: "/company" },
      { name: "Ride", href: "/ride" },  
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
      description: "With over 30 years in the industry, Aylestone Kings has grown into an award-winning business, recognised with honours such as the National Lifetime Achievement Award for its dedication to the Private Hire and Taxi industry. Championing safety regulations and legislative reform, Aylestone Kings has consistently led the way in industry innovation, working closely with local authorities and representing every local authority across the Midlands. The company seamlessly blends local heritage and values with global technological innovation.."
    },
    trusted: {
      title: "Our Reputation",
      subtitle: "Each year, we serve over 1,000 passengers across the region, proudly maintaining an exceptional 99.7% satisfaction rating.",
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
      { name: "Ride", href: "/ride" },   
      { name: "Fleet", href: "/fleet" },
      { name: "Airport Pricing", href: "/pricing" },
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/ride" },
    ],

    services: [
      { name: "Airport Transfers", href: "/ride" },
      { name: "Corporate Travel", href: "/ride" },
      { name: "Wedding Cars", href: "/fleet" },
      { name: "School Runs", href: "/ride" },
      { name: "Hospital Visits", href: "/ride" },
    ],

    legal: [
      { name: "Privacy Policy", href: "/Privacy-policy.pdf" },
      { name: "Terms of Service", href: "/Privacy-policy.pdf" },
    ],
  },
}

// Export individual sections for easier imports
export const companyInfo = siteData.company
export const contactInfo = {
  phone: siteData.company.phone,
  whatsapp: siteData.company.whatsapp,
  email: siteData.company.email,
  address: {
    street: "753A, Aylestone",
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
