import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, ArrowRight, MessageCircle } from "lucide-react"
import Logo from "@/components/logo"
import { companyInfo, contactInfo, socialLinks, footerData, copyrightInfo } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo showText={true} className="mb-6" />
            <p className="text-gray-800 text-sm mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              <Link href={socialLinks.facebook} className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-400 hover:text-gray-900 transition-all duration-200">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href={socialLinks.instagram} className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-400 hover:text-gray-800 transition-all duration-200">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href={socialLinks.twitter} className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-400 hover:text-gray-800 transition-all duration-200">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200 flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
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
                  <Link href={service.href} className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200 flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
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
              <Button className="w-full bg-[#0F0D3E] hover:bg-[#048A90] text-white rounded-lg font-semibold transition-all duration-200">
                Contact Us
              </Button>
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
