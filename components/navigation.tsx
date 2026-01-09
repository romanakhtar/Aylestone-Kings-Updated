"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import Logo from "@/components/logo"
import { contactInfo, navigationItems } from "@/lib/data"
import { useNavbarScroll } from "@/hooks/use-navbar-scroll"

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { isVisible } = useNavbarScroll({ threshold: 10 })
  const pathname = usePathname()

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setIsMoreOpen(true)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsMoreOpen(false)
    }, 150)
  }

  const handleBookOnline = () => {
    // Track booking click event
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'lead_booking_click',
        lead_type: 'booking',
        platform: 'icabbi'
      })
    }
    window.open(contactInfo.booking.online, "_blank")
  }

  const handleCallToBook = () => {
    // Track call click event
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'lead_call_click',
        lead_type: 'call'
      })
    }
    window.open(`tel:${contactInfo.booking.phone}`, "_self")
  }

  return (
    <header 
      className={`fixed top-5 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-professional transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="pt-1 transition-smooth hover:scale-105">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.main.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <button className="text-slate-700 hover:text-[#06A0A6] font-medium flex items-center transition-smooth relative group py-2">
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-3.5 w-3.5 transition-smooth ${isMoreOpen ? "rotate-180" : ""}`}
                    />
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] transition-smooth group-hover:w-full"></span>
                  </button>
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-300 ease-out ${
                      isMoreOpen 
                        ? "opacity-100 visible translate-y-0 scale-100" 
                        : "opacity-0 invisible -translate-y-2 scale-95"
                    }`}
                  >
                    <div className="w-56 bg-white/98 backdrop-blur-xl rounded-xl shadow-professional-lg border border-slate-200/60 overflow-hidden">
                      {navigationItems.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-5 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-[#06A0A6]/5 hover:to-[#0F0D3E]/5 hover:text-[#06A0A6] border-b border-slate-200/40 transition-smooth text-sm"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.name} href={item.href} className={`font-medium transition-smooth relative group py-2 ${
                  pathname === item.href 
                    ? 'text-[#06A0A6]' 
                    : 'text-slate-700 hover:text-[#06A0A6]'
                }`}>
                  {item.name}
                  <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] transition-smooth ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button
              onClick={handleCallToBook}
              variant="outline"
              className="border-slate-300 text-slate-700 hover:border-[#06A0A6] hover:text-[#06A0A6] hover:bg-[#06A0A6]/5 px-5 py-2 rounded-lg font-medium transition-smooth shadow-professional hover:shadow-professional-lg text-sm focus-ring"
            >
              <Phone className="h-3.5 w-3.5 mr-2" />
              Call to Book
            </Button>
            <Button
              onClick={handleBookOnline}
              className="bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] hover:from-[#0F0D3E] hover:to-[#06A0A6] text-white px-5 py-2 rounded-lg font-medium transition-smooth shadow-professional hover:shadow-professional-lg transform hover:scale-105 text-sm focus-ring"
            >
              Book Online
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:text-[#06A0A6] hover:bg-slate-100 transition-smooth focus-ring"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="text-sm font-medium">{isMenuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="border-t border-slate-200/60 bg-white/98 backdrop-blur-xl">
            <div className="px-4 pt-3 pb-5 space-y-1">
              {navigationItems.main.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() => setIsMoreOpen(!isMoreOpen)}
                      className="flex items-center justify-between w-full px-4 py-2.5 text-slate-700 hover:text-[#06A0A6] hover:bg-slate-50 font-medium rounded-lg transition-smooth text-sm focus-ring"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-smooth ${isMoreOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`transition-all duration-300 ease-out overflow-hidden ${
                      isMoreOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pl-6 space-y-1">
                        {navigationItems.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={`block px-4 py-2.5 rounded-lg transition-smooth text-sm ${
                              pathname === dropdownItem.href
                                ? 'text-[#06A0A6] bg-[#06A0A6]/5'
                                : 'text-slate-700 hover:text-[#06A0A6] hover:bg-slate-50'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-2.5 font-medium rounded-lg transition-smooth text-sm ${
                      pathname === item.href
                        ? 'text-[#06A0A6] bg-[#06A0A6]/5'
                        : 'text-slate-700 hover:text-[#06A0A6] hover:bg-slate-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="px-4 pt-3 space-y-2">
                <Button
                  onClick={() => {
                    handleCallToBook()
                    setIsMenuOpen(false)
                  }}
                  variant="outline"
                  className="w-full border-slate-300 text-slate-700 hover:border-[#06A0A6] hover:text-[#06A0A6] hover:bg-[#06A0A6]/5 rounded-lg font-medium transition-smooth shadow-professional text-sm py-2 focus-ring"
                >
                  <Phone className="h-3.5 w-3.5 mr-2" />
                  Call to Book
                </Button>
                <Button
                  onClick={() => {
                    handleBookOnline()
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] hover:from-[#0F0D3E] hover:to-[#06A0A6] text-white rounded-lg font-medium transition-smooth shadow-professional text-sm py-2 focus-ring"
                >
                  Book Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
// Export both named and default to satisfy all import patterns
export { Navigation }
export default Navigation