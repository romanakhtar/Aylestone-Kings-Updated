import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, MessageCircle, Rocket, ShoppingBag, Theater, Crown, Church, Music, ShoppingCart, Calendar, Star } from "lucide-react"
import Logo from "@/components/logo"
import FooterSeasonalBanners from "@/components/footer-seasonal-banners"
import { companyInfo, contactInfo, socialLinks, footerData, copyrightInfo } from "@/lib/data"

// Icon mapping function
function getIconComponent(iconName: string) {
  const iconMap: { [key: string]: any } = {
    Rocket,
    ShoppingBag,
    Theater,
    Crown,
    Church,
    Music,
    ShoppingCart,
    Calendar
  }
  return iconMap[iconName] || MapPin
}

// Area section component - compact and professional
function AreaSection({ 
  title, 
  items, 
  gridCols = "grid-cols-1"
}: { 
  title: string
  items: { name: string; href: string }[]
  gridCols?: string
}) {
  return (
    <div className="flex flex-col">
      <h4 className="font-semibold text-[#0F0D3E] text-base mb-3 tracking-tight border-b border-gray-200 pb-2">{title}</h4>
      <ul className={`grid ${gridCols} gap-y-1.5`}>
        {items.map((item: { name: string; href: string }) => (
          <li key={item.name} className="min-w-0">
            <Link 
              href={item.href} 
              className="text-[#2E3C44] hover:text-[#06A0A6] text-xs sm:text-sm leading-relaxed block py-0.5"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  
  return (
    <footer className="bg-gray-100 text-gray-800">
      <FooterSeasonalBanners />
      {/* Areas We Cover (Top Band) */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8 items-start">
            {/* Popular Destinations */}
            <AreaSection
              title="Popular Destinations"
              items={(footerData as any).destinationLinks?.slice()?.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name)) || []}
            />

            {/* Leicester Areas */}
            {footerData.areaGroups?.slice(0,1).map((group) => {
              const sortedItems = [...group.items]
                .sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))
              return (
                <AreaSection
                  key={group.title}
                  title={group.title}
                  items={sortedItems}
                />
              )
            })}

            {/* Airport Transfers and Popular Services - Combined in one column */}
            <div className="flex flex-col gap-6">
              <AreaSection
                title="Airport Transfers"
                items={footerData.airportLinks || []}
              />
              <AreaSection
                title="Popular Services"
                items={[
                  { name: "Airport Transfers", href: "/airport-transfers-leicester" },
                  { name: "Airport Taxi Leicester", href: "/airport-taxi-leicester" },
                  { name: "Local Taxi Service", href: "/local-taxi-leicester" },
                  { name: "Long-Distance & Corporate", href: "/long-distance-taxi-leicester" },
                  { name: "Corporate Taxi Account Leicester", href: "/corporate-taxi-account-leicester" },
                  { name: "Taxi Leicester", href: "/taxi-leicester" },
                  { name: "Taxi Near Me Leicester", href: "/taxi-near-me-leicester" },
                  { name: "Leicester Airport Taxi", href: "/leicester-airport-taxi" },
                  { name: "Leicester to EMA Taxi", href: "/leicester-to-east-midlands-airport-taxi" },
                  { name: "Cheap Taxi Leicester", href: "/cheap-taxi-leicester" },
                  { name: "24 Hour Taxi Leicester", href: "/24-hour-taxi-leicester" },
                  { name: "Leicester Taxi Company", href: "/leicester-taxi-company" }
                ]}
              />
            </div>

            {/* Surrounding Towns */}
            {footerData.areaGroups?.slice(2,3).map((group) => {
              const sortedItems = [...group.items]
                .sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))
              return (
                <AreaSection
                  key={group.title}
                  title={group.title}
                  items={sortedItems}
                />
              )
            })}

            {/* Supermarkets */}
            <AreaSection
              title="Supermarkets"
              items={(footerData as any).destinationLinks?.filter((link: { name: string; href: string }) => 
                (link.name.includes("Taxi to") && (
                  link.name.includes("Asda") || 
                  link.name.includes("Sainsburys") || 
                  link.name.includes("Tesco") || 
                  link.name.includes("Aldi") || 
                  link.name.includes("Lidl") || 
                  link.name.includes("Morrisons") || 
                  link.name.includes("Iceland") || 
                  link.name.includes("Farmfoods") || 
                  link.name.includes("M&S") || 
                  link.name.includes("Waitrose")
                )) || link.name.includes("Supermarket Taxi Leicester")
              ) || []}
            />

            {/* Wider Leicester Districts */}
            {footerData.areaGroups?.slice(1,2).map((group) => {
              const sortedItems = [...group.items]
                .sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))
              return (
                <AreaSection
                  key={group.title}
                  title={group.title}
                  items={sortedItems}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Priority Areas Section */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Featured Destinations</h3>
            <p className="text-gray-600 text-lg">Popular locations we serve across Leicester</p>
          </div>
          
          <div className="space-y-8">
            {/* Op Priority Areas */}
            <div>
              <div className="flex items-center mb-6">
                <Star className="h-6 w-6 text-yellow-500 mr-3" />
                <h4 className="text-xl font-bold text-gray-800">Top Destinations</h4>
             </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(footerData as any).priorityAreas?.opPriority?.map((area: any) => {
                  const IconComponent = getIconComponent(area.icon)
                  return (
                    <Link key={area.name} href={area.href} className="group">
                      <div className="bg-gradient-to-br from-[#06A0A6]/5 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#06A0A6]/30 transition-[transform,opacity] duration-300 hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-[#06A0A6]/10 rounded-lg flex items-center justify-center group-hover:bg-[#06A0A6]/20">
                              <IconComponent className="h-6 w-6 text-[#06A0A6]" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-[#06A0A6]">
                              {area.name}
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {area.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Medium Priority Areas */}
            <div>
              <div className="flex items-center mb-6">
                <div className="h-6 w-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800">Popular Attractions</h4>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(footerData as any).priorityAreas?.mediumPriority?.map((area: any) => {
                  const IconComponent = getIconComponent(area.icon)
                  return (
                    <Link key={area.name} href={area.href} className="group">
                      <div className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-[transform,opacity] duration-300 hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200">
                              <IconComponent className="h-6 w-6 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-blue-600">
                              {area.name}
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {area.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Optional Priority Areas */}
            <div>
              <div className="flex items-center mb-6">
                <div className="h-6 w-6 bg-gray-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800">Additional Locations</h4>
             </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(footerData as any).priorityAreas?.optionalPriority?.map((area: any) => {
                  const IconComponent = getIconComponent(area.icon)
                  return (
                    <Link key={area.name} href={area.href} className="group">
                      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-[transform,opacity] duration-300 hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200">
                              <IconComponent className="h-6 w-6 text-gray-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-gray-600">
                              {area.name}
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {area.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="border-t border-gray-200 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.15fr] lg:gap-16">
            {/* Brand */}
            <div>
              <Logo showText={true} className="mb-5" />
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                {companyInfo.description}
              </p>
              <p className="mt-5 text-xs text-gray-500 leading-relaxed">
                Licensed by Leicester City Council &middot; DBS-checked drivers &middot; Established {companyInfo.founded}
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aylestone Taxis on Facebook"
                  className="w-9 h-9 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center hover:border-[#06A0A6] hover:bg-[#06A0A6] hover:text-white transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aylestone Taxis on Instagram"
                  className="w-9 h-9 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center hover:border-[#06A0A6] hover:bg-[#06A0A6] hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <nav aria-label="Quick links">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 mb-5">Quick Links</h3>
              <ul className="space-y-2.5">
                {footerData.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-[#06A0A6] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 mb-5">Get in Touch</h3>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#06A0A6] mt-0.5 flex-shrink-0" aria-hidden />
                  <address className="not-italic text-gray-600 leading-relaxed">
                    {contactInfo.address.street}
                    <br />
                    {contactInfo.address.city}, {contactInfo.address.postcode}
                  </address>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#06A0A6] flex-shrink-0" aria-hidden />
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className="text-gray-600 hover:text-[#06A0A6] transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-[#06A0A6] flex-shrink-0" aria-hidden />
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#06A0A6] transition-colors"
                  >
                    {contactInfo.whatsapp}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#06A0A6] flex-shrink-0" aria-hidden />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 hover:text-[#06A0A6] transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
              <p className="mt-5 text-xs text-gray-500">Booking line open 24 hours, 7 days a week.</p>
              <Link href="/contact" className="inline-block mt-5">
                <Button className="bg-[#0F0D3E] hover:bg-[#06A0A6] text-white rounded-lg font-semibold px-6 transition-smooth focus-ring">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services" className="mt-12 border-t border-gray-200 pt-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 mb-5">Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-2.5">
              {footerData.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-600 hover:text-[#06A0A6] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="text-gray-600 text-xs sm:text-sm space-y-1 max-w-xl">
              <p>
                Aylestone Taxis acts as a booking and dispatch service introducing passengers to licensed independent drivers who provide the transport service.
              </p>
              <p>Aylestone Taxis is a trading name of Aylestone Taxis.</p>
              <p>
                <span className="font-semibold">Operator:</span> Aylestone Taxis<br />
                753A Aylestone Road, Leicester LE2 8TG
              </p>
              <p className="pt-2">
                {copyrightInfo.text}
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              {footerData.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}