"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, ArrowRight, MessageCircle, Rocket, ShoppingBag, Theater, Crown, Church, Music, ShoppingCart, Calendar, Star, ChevronDown, ChevronUp } from "lucide-react"
import Logo from "@/components/logo"
import { companyInfo, contactInfo, socialLinks, footerData, copyrightInfo } from "@/lib/data"
import { useState } from "react"

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

// Collapsible section component
function CollapsibleSection({ 
  title, 
  items, 
  initialCount = 8,
  gridCols = "grid-cols-2 sm:grid-cols-2"
}: { 
  title: string
  items: { name: string; href: string }[]
  initialCount?: number
  gridCols?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const displayItems = isExpanded ? items : items.slice(0, initialCount)
  const hasMore = items.length > initialCount

  return (
    <div className="flex flex-col">
      <h4 className="font-bold text-gray-800 text-lg md:text-xl mb-4 tracking-tight">{title}</h4>
      <ul className={`grid ${gridCols} gap-x-3 gap-y-2`}>
        {displayItems.map((item: { name: string; href: string }) => (
          <li key={item.name} className="min-w-0">
            <Link href={item.href} className="text-gray-600 hover:underline underline-offset-2 text-sm md:text-base transition-smooth flex items-start group py-1">
              <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-smooth flex-shrink-0 mt-0.5" />
              <span className="leading-5 break-words">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-[#06A0A6] hover:text-[#0F0D3E] text-sm font-medium flex items-center gap-1 transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Show More ({items.length - initialCount} more) <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      )}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 ">
      {/* Areas We Cover (Top Band) */}
      <div className="border-t border-gray-200 bg-gray-50 bg-gradient-to-r from-[#06A0A6]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Leicester Areas */}
            {footerData.areaGroups?.slice(0,3).map((group) => {
              const sortedItems = [...group.items]
                .sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))
              return (
                <CollapsibleSection
                  key={group.title}
                  title={group.title}
                  items={sortedItems}
                  initialCount={6}
                />
              )
            })}

            {/* Popular Destinations */}
            <CollapsibleSection
              title="Popular Destinations"
              items={(footerData as any).destinationLinks?.slice()?.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name)) || []}
              initialCount={6}
            />

            {/* Popular Services - SEO Pages */}
            <CollapsibleSection
              title="Popular Services"
              items={[
                { name: "Taxi Leicester", href: "/taxi-leicester" },
                { name: "Taxi Near Me Leicester", href: "/taxi-near-me-leicester" },
                { name: "Leicester Airport Taxi", href: "/leicester-airport-taxi" },
                { name: "Leicester to EMA Taxi", href: "/leicester-to-east-midlands-airport-taxi" },
                { name: "Cheap Taxi Leicester", href: "/cheap-taxi-leicester" },
                { name: "Leicester Taxi Company", href: "/leicester-taxi-company" }
              ]}
              initialCount={6}
              gridCols="grid-cols-2 sm:grid-cols-1"
            />

            {/* Airport Transfers */}
            <CollapsibleSection
              title="Airport Transfers"
              items={footerData.airportLinks || []}
              initialCount={6}
              gridCols="grid-cols-2 sm:grid-cols-1"
            />

            {/* Supermarkets */}
            <CollapsibleSection
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
              initialCount={6}
              gridCols="grid-cols-2 sm:grid-cols-1"
            />
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
                      <div className="bg-gradient-to-br from-[#06A0A6]/5 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#06A0A6]/30 transition-all duration-300 hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-[#06A0A6]/10 rounded-lg flex items-center justify-center group-hover:bg-[#06A0A6]/20 transition-colors">
                              <IconComponent className="h-6 w-6 text-[#06A0A6]" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-[#06A0A6] transition-colors">
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
                      <div className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                              <IconComponent className="h-6 w-6 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-blue-600 transition-colors">
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
                      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                              <IconComponent className="h-6 w-6 text-gray-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-gray-600 transition-colors">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo showText={true} className="mb-6" />
            <p className="text-gray-800 text-sm mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              <Link href={socialLinks.facebook} className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-800 hover:bg-[#06A0A6] hover:text-white transition-smooth hover:scale-110 shadow-professional hover:shadow-professional-lg">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href={socialLinks.instagram} className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#06A0A6] hover:text-white transition-smooth hover:scale-110 shadow-professional hover:shadow-professional-lg">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#06A0A6] text-sm transition-smooth flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-smooth" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerData.services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-600 hover:text-[#06A0A6] text-sm transition-smooth flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-smooth" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          


          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#06A0A6] mt-0.5 flex-shrink-0" />
                <div>
                  <p>{contactInfo.address.street}</p>
                  <p>{contactInfo.address.city}, {contactInfo.address.postcode}</p>
                  <p>{contactInfo.address.country}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#06A0A6]" />
                <p>{contactInfo.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-[#06A0A6]" />
                <p>{contactInfo.whatsapp}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#06A0A6]" />
                <p>{contactInfo.email}</p>
              </div>
            </div>            
            <div className="mt-6">
              <Link href="/contact">
                <Button className="w-full bg-[#0F0D3E] hover:bg-[#06A0A6] text-white rounded-lg font-semibold transition-smooth shadow-professional hover:shadow-professional-lg hover:scale-105 focus-ring">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              {copyrightInfo.text}
            </div>
            <div className="flex space-x-6 text-sm">
              {footerData.legal.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
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