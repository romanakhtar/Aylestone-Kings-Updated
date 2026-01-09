import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { 
  Car, Plane, Calendar, Briefcase, GraduationCap, Users, ArrowRight, Phone, 
  Clock, Shield, Stethoscope, MapPin, Heart, Building2, ShoppingBag, 
  Train, Hotel, UtensilsCrossed, CircleUser, Package
} from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Taxi Services in Leicester | Aylestone Kings",
  description: "Discover Aylestone Kings' comprehensive taxi services in Leicester. Local taxis, airport transfers, pre-booked journeys, corporate accounts, school runs, group travel, wheelchair accessible, hospital transfers, and more. Professional, reliable, and affordable.",
}

const services = [
  {
    name: "Local Taxi Services",
    description: "Fast and reliable local taxi services throughout Leicester and surrounding areas. Whether you need a ride to the city centre, shopping centres, or anywhere in the region, our professional drivers will get you there safely and on time.",
    icon: Car,
    schemaType: "TaxiService",
  },
  {
    name: "Airport Transfers",
    description: "Stress-free airport transfers to all major UK airports including Birmingham, East Midlands, Heathrow, Gatwick, and more. Fixed pricing, flight monitoring, and meet & greet service available. Start your journey with confidence.",
    icon: Plane,
    schemaType: "TaxiService",
  },
  {
    name: "Pre-Booked Journeys",
    description: "Plan ahead and book your journey in advance. Perfect for appointments, events, or any scheduled travel. Pre-booking ensures availability and peace of mind, especially during busy periods.",
    icon: Calendar,
    schemaType: "TaxiService",
  },
  {
    name: "Business / Corporate Accounts",
    description: "Tailored transportation solutions for businesses of all sizes. Corporate accounts with invoicing, dedicated account management, and priority booking. Perfect for regular business travel, client meetings, and employee transport needs.",
    icon: Briefcase,
    schemaType: "TaxiService",
  },
  {
    name: "School Runs",
    description: "Reliable and safe school transport services. Regular school runs with trusted drivers who are DBS checked. We understand the importance of punctuality and safety for your children's daily commute to and from school.",
    icon: GraduationCap,
    schemaType: "TaxiService",
  },
  {
    name: "Group Travel / Larger Vehicles",
    description: "Traveling with a group or need extra space for luggage? Our fleet includes MPVs and larger vehicles perfect for groups, families, or when you have additional luggage. Comfortable, spacious, and reliable transport for everyone.",
    icon: Users,
    schemaType: "TaxiService",
  },
  {
    name: "Hospital & Medical Appointments",
    description: "Reliable transport to hospitals, clinics, and medical appointments. Our drivers understand the importance of punctuality for medical visits. We provide comfortable, stress-free journeys when you need them most.",
    icon: Stethoscope,
    schemaType: "TaxiService",
  },
  {
    name: "Wheelchair Accessible Vehicles",
    description: "Fully accessible vehicles equipped for wheelchair users. Our wheelchair accessible taxis ensure comfortable and safe transport for passengers with mobility needs. Book in advance to guarantee availability.",
    icon: CircleUser,
    schemaType: "TaxiService",
  },
  {
    name: "Long Distance Travel",
    description: "Comfortable long-distance journeys across the UK. Whether you're traveling to London, Manchester, or anywhere else, our professional drivers ensure a smooth and comfortable journey. Fixed pricing for peace of mind.",
    icon: MapPin,
    schemaType: "TaxiService",
  },
  {
    name: "Event Transport",
    description: "Special event transportation for weddings, parties, concerts, and celebrations. Arrive in style and leave the driving to us. We can accommodate groups and provide reliable service for your special occasions.",
    icon: Heart,
    schemaType: "TaxiService",
  },
  {
    name: "Shopping & Retail",
    description: "Convenient transport to shopping centres, retail parks, and markets. Perfect for your shopping trips without the hassle of parking. Our drivers can help with shopping bags and provide a comfortable ride home.",
    icon: ShoppingBag,
    schemaType: "TaxiService",
  },
  {
    name: "Railway Station Transfers",
    description: "Reliable transfers to and from railway stations including Leicester Station. We monitor train schedules to ensure punctual pickups. Perfect for commuters and travelers connecting to train services.",
    icon: Train,
    schemaType: "TaxiService",
  },
  {
    name: "Hotel Transfers",
    description: "Professional transfers to and from hotels throughout Leicester and beyond. Whether you're checking in or out, our drivers provide reliable service with luggage assistance. Perfect for tourists and business travelers.",
    icon: Hotel,
    schemaType: "TaxiService",
  },
  {
    name: "Restaurant & Dining",
    description: "Enjoy your dining experience without worrying about driving. Reliable transport to and from restaurants, bars, and entertainment venues. Available late into the evening for your convenience.",
    icon: UtensilsCrossed,
    schemaType: "TaxiService",
  },
  {
    name: "Courier & Parcel Services",
    description: "Fast and reliable courier services for documents, parcels, and packages. Same-day delivery available throughout Leicester and surrounding areas. Professional handling of your important items.",
    icon: Package,
    schemaType: "TaxiService",
  },
]

export default function ServicesPage() {
  // Generate schema data for all services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Taxi Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aylestone Kings",
      "telephone": contactInfo.phone,
      "email": contactInfo.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": contactInfo.address.street,
        "addressLocality": contactInfo.address.city,
        "postalCode": contactInfo.address.postcode,
        "addressCountry": contactInfo.address.country
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Leicester"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Taxi Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0F0D3E] via-[#2E3C44] to-[#06A0A6]/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/taxi-bridge-background.jpg"
            alt="Aylestone Kings taxi services in Leicester"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D3E]/90 via-[#0F0D3E]/80 to-[#06A0A6]/30"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#06A0A6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#EF5B6A]/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
              <Car className="h-4 w-4 text-[#06A0A6] mr-3" />
              Our Services
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Our Taxi Services in Leicester
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10 font-light">
              Professional, reliable, and affordable taxi services for all your transportation needs. 
              Available 24/7 across Leicester and beyond.
            </p>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#06A0A6]" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#06A0A6]" />
                <span className="text-sm">24/7 Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#06A0A6]" />
                <span className="text-sm">Fixed Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-[#06A0A6]/10 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-[#06A0A6]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0F0D3E] mb-4">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={contactInfo.booking.online}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#06A0A6] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#0F0D3E] transition-colors"
                    >
                      Book Online
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="inline-flex items-center justify-center gap-2 border-2 border-[#06A0A6] text-[#06A0A6] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#06A0A6] hover:text-white transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Links Section */}
      <section className="py-16 bg-gray-50 bg-gradient-to-r from-[#06A0A6]/10 to-transparent border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
              Explore More
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn more about our fleet, pricing, and how to get in touch with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/fleet"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <Car className="h-10 w-10 text-[#06A0A6] mb-4" />
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Our Fleet</h3>
              <p className="text-gray-600 text-sm">View our range of vehicles from saloons to MPVs</p>
            </Link>
            
            <Link 
              href="/pricing"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <Plane className="h-10 w-10 text-[#06A0A6] mb-4" />
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Airport Pricing</h3>
              <p className="text-gray-600 text-sm">Fixed prices for airport transfers to all major UK airports</p>
            </Link>
            
            <Link 
              href="/contact"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="h-10 w-10 text-[#06A0A6] mb-4" />
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Get in touch for bookings, inquiries, or support</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Book Your Journey?
          </h2>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Experience professional, reliable taxi services in Leicester. Available 24/7 for all your transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={contactInfo.booking.online}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl">
                Book Online Now
                <ArrowRight className="h-5 w-5" />
              </button>
            </a>
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-block"
            >
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3">
                <Phone className="h-5 w-5" />
                Call {contactInfo.phone}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </div>
  )
}
