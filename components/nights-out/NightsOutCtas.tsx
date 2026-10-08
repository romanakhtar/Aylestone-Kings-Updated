"use client"

import { Globe, MessageCircle, Phone } from "lucide-react"
import { contactInfo } from "@/lib/data"
import { onBookNowClick, onPhoneClick, onWhatsAppClick } from "@/lib/analytics"

/**
 * Book / phone / WhatsApp buttons for the city centre nights out pages.
 *
 * Client component purely so the existing GA4 handlers in lib/analytics can be
 * attached — the pages themselves stay server-rendered.
 */
export default function NightsOutCtas({
  whatsappMessage = "Hi! I need a taxi in Leicester city centre",
  className = "",
}: {
  whatsappMessage?: string
  className?: string
}) {
  const phoneHref = `tel:${contactInfo.phone.replace(/\s/g, "")}`
  const whatsappHref = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`.trim()}>
      <a href={contactInfo.booking.online} onClick={onBookNowClick} className="w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
          <Globe className="h-6 w-6" aria-hidden />
          Book Online
        </button>
      </a>

      <a href={phoneHref} onClick={onPhoneClick} className="w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-[#0F0D3E] hover:bg-[#06A0A6] text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
          <Phone className="h-6 w-6" aria-hidden />
          Call {contactInfo.phone}
        </button>
      </a>

      <a
        href={whatsappHref}
        onClick={onWhatsAppClick}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
          <MessageCircle className="h-6 w-6" aria-hidden />
          WhatsApp Us
        </button>
      </a>
    </div>
  )
}
