// Site-wide configuration and data
export const siteData = {
  // Company Information
  company: {
    name: "Aylestone Kings",
    tagline: "Premium Taxi Service",
    description: "Leading taxi service in North East England since 1995. We provide reliable, professional transportation solutions for individuals and businesses.",
    founded: 1995,
    logo: {
      icon: {
        primaryColor: "#06A0A6",
        secondaryColor: "#0F0D3E",
        accentColor: "#EF5B6A"
      }
    }
  },

  // Contact Information
  contact: {
    phone: "0116 2338888",
    email: "info@aylestone-taxis.co.uk",
    address: {
      street: "753A, Aylestone",
      city: "Leicester",
      postcode: "LE2 8TG",
      country: "United Kingdom"
    },
    booking: {
      online: "https://aylestonekings.webbooker.icabbi.com/",
      phone: "0116 2338888"
    }
  },

  // Social Media Links
  social: {
    facebook: "#",
    instagram: "#",
  },

  // Navigation Menu Items
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Fleet", href: "/fleet" },
      { name: "More", href: "#", hasDropdown: true }
    ],
    dropdown: [
      { name: "Contact", href: "/contact" },
      { name: "News", href: "/news" }
    ]
  },

  // Footer Quick Links
  footer: {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Fleet", href: "/fleet" },
      { name: "Drivers", href: "/drive" },
      { name: "Contact", href: "/contact" },
      { name: "News", href: "/news" }
    ],
    services: [
      { name: "Executive Fleet", href: "/fleet" },
      { name: "Passenger App", href: "/ride" },
      { name: "Driver App", href: "/drive" },
      { name: "Airport Transfers", href: "#" },
      { name: "Corporate Travel", href: "#" }
    ],
    legal: [
      { name: "Terms & Conditions", href: "/Aylestone_Taxis_Terms_Privacy.pdf" },
      { name: "Privacy Policy", href: "/Privacy-policy.pdf" },
      { name: "Cookie Policy", href: "/Aylestone_Taxis_Cookie_Policy.pdf" }
    ]
  },

  // Color Scheme
  colors: {
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
  },

  // Copyright Information
  copyright: {
    year: 2025,
    text: "© 2025 Aylestone Kings. All rights reserved."
  }
}

// Export individual sections for easier imports
export const companyInfo = siteData.company
export const contactInfo = siteData.contact
export const socialLinks = siteData.social
export const navigationItems = siteData.navigation
export const footerData = siteData.footer
export const colorScheme = siteData.colors
export const copyrightInfo = siteData.copyright
