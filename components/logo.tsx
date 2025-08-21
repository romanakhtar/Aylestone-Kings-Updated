import Link from "next/link"
import Image from "next/image"
import { companyInfo } from "@/lib/data"

interface LogoProps {
  className?: string
  showText?: boolean
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      {/* Logo Image */}
      <div className="relative w-11 h-11 mr-3 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 overflow-hidden">
        <Image
          src="/Aylestone-Taxi-Logo.png"
          alt={`${companyInfo.name} Logo`}
          width={44}
          height={44}
          className="rounded-2xl object-cover"
        />
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#0F0D3E] to-[#06A0A6] bg-clip-text text-transparent group-hover:from-[#06A0A6] group-hover:to-[#0F0D3E] transition-all duration-300">
            {companyInfo.name}
          </span>
          <span className="text-xs text-slate-500 font-medium tracking-wide">{companyInfo.tagline}</span>
        </div>
      )}
    </Link>
  )
}
