export const siteData = {
  // Company Information
  company: {
    name: "Aylestone Kings",
    tagline: "",
    region: "Aylestone and surrounding areas",
    phone: "0116 2338888",
    whatsapp: "+447535855786",
    email: "info@aylestonekings.com",
    address: "Aylestone, Leicester, UK",
    description:
      "Founded in 2009, Aylestone Kings started a mission to provide a reliable and affordable taxi service to the people of Aylestone and surrounding areas. Today, we operate across the region, offering diverse services 365 days a year with the same commitment to excellence.",
    founded: "2009",
    achievements: "National Lifetime Achievement Award for commitment to the Private Hire and Taxi industry",
    passengersServed: "10,000",
    satisfactionRating: "99.7%",
    yearsExperience: "15+",
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
      { name: "Pricing", href: "/pricing" },
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
      subtitle:
        "Aylestone Kings is the ultimate taxi companion for seamless and reliable transportation services in area.",
      ctaText: "Book Your Ride Now",
      features: [
        "24/7 Service",
        "GPS Tracking", 
        "Professional Drivers"
      ]
    },

    safeTravel: {
      title: "Trusted Transportation Service Since 2009",
      description:
        "Founded in 2009, Aylestone Kings started a mission to provide a reliable and affordable taxi service to the people of Aylestone and surrounding areas. Today, we operate across the region, offering diverse services 365 days a year with the same commitment to excellence.",
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
          title: "Real-Time Tracking",
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
          title: "Real-Time Tracking",
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
      subtitle: "Founded in 2009, Aylestone Kings started a mission to provide a reliable and affordable taxi service to the people of Aylestone and surrounding areas. Today, we operate across the region, offering diverse services 365 days a year with the same commitment to excellence.",
      description: "Now into its third generation of family leadership, with over 15 years in the industry, Aylestone Kings has evolved into an award-winning business, recognized with accolades such as the National Lifetime Achievement Award for commitment to the Private Hire and Taxi industry. Championing safety regulations and legislative reform, Aylestone Kings has consistently been at the forefront of industry innovation, working closely with local authorities and representing every local authority in the Midlands, seamlessly blending local heritage and family values with global tech innovation."
    },
    trusted: {
      title: "Our Reputation",
      subtitle: "Each year, we serve over 10,608,000 passengers throughout the region, boasting an exceptional 99.7% satisfaction rating.",
      description: "Whether your journey is safe, comfortable, and efficient. Whether catering to daily commutes or working with public sector institutions and multinational corporations, we can deliver to your needs."
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
      { name: "Contact", href: "/contact" },
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
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
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
    street: siteData.company.address,
    city: "Leicester",
    postcode: "UK",
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
  year: 2024,
  text: "© 2024 Aylestone Kings. All rights reserved."
}

export default siteData
