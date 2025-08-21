import { Check } from "lucide-react"
import { siteData } from "@/lib/data"

interface CompanyLicensesProps {
  className?: string
}

export function CompanyLicenses({ className = "" }: CompanyLicensesProps) {
  return (
    <div className={`space-y-4 mb-8 ${className}`}>
      {siteData.company.licenses.map((license, index) => (
        <div key={index} className="flex items-center gap-3">
          <Check className="h-5 w-5 text-[#06A0A6]" />
          <span className="text-[#2E3C44]">{license}</span>
        </div>
      ))}
    </div>
  )
}

export default CompanyLicenses
