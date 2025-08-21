"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import Logo from "@/components/logo"
import { contactInfo, navigationItems } from "@/lib/data"

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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
    window.open(contactInfo.booking.online, "_blank")
  }

  const handleCallToBook = () => {
    window.open(`tel:${contactInfo.booking.phone}`, "_self")
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navigationItems.main.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <button className="text-slate-700 hover:text-[#06A0A6] font-medium flex items-center transition-all duration-300 relative group">
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${isMoreOpen ? "rotate-180" : ""}`}
                    />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  <div
                    className={`absolute top-full left-0 pt-3 transition-all duration-300 ${isMoreOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                  >
                    <div className="w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden">
                      {navigationItems.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-6 py-4 text-slate-700 hover:bg-gradient-to-r hover:from-[#06A0A6]/5 hover:to-[#0F0D3E]/5 hover:text-[#06A0A6] border-b border-slate-200/30 transition-all duration-200"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.name} href={item.href} className="text-slate-700 hover:text-[#06A0A6] font-medium transition-all duration-300 relative group">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleCallToBook}
              variant="outline"
              className="border-slate-300 text-slate-700 hover:border-[#06A0A6] hover:text-[#06A0A6] hover:bg-[#06A0A6]/5 px-6 py-2.5 rounded-xl font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call to Book
            </Button>
            <Button
              onClick={handleBookOnline}
              className="bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] hover:from-[#0F0D3E] hover:to-[#06A0A6] text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Book Online
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-slate-700 hover:text-[#06A0A6] hover:bg-slate-100 transition-all duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigationItems.main.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name} className="space-y-2">
                    <button
                      onClick={() => setIsMoreOpen(!isMoreOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-slate-700 hover:text-[#06A0A6] hover:bg-slate-50 font-medium rounded-xl transition-all duration-200"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMoreOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMoreOpen && (
                      <div className="pl-6 space-y-2">
                        {navigationItems.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-slate-700 hover:text-[#06A0A6] hover:bg-slate-50 rounded-xl transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-slate-700 hover:text-[#06A0A6] hover:bg-slate-50 font-medium rounded-xl transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="px-4 pt-4 space-y-3">
                <Button
                  onClick={() => {
                    handleCallToBook()
                    setIsMenuOpen(false)
                  }}
                  variant="outline"
                  className="w-full border-slate-300 text-slate-700 hover:border-[#06A0A6] hover:text-[#06A0A6] hover:bg-[#06A0A6]/5 rounded-xl font-medium transition-all duration-200 shadow-sm"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call to Book
                </Button>
                <Button
                  onClick={() => {
                    handleBookOnline()
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] hover:from-[#0F0D3E] hover:to-[#06A0A6] text-white rounded-xl font-medium transition-all duration-200 shadow-md"
                >
                  Book Online
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Export both named and default to satisfy all import patterns
export { Navigation }
export default Navigation
