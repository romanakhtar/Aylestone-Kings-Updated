import { siteData } from "@/lib/data"
import { Clock, Shield, Users, Car } from "lucide-react"

interface CompanyStatsProps {
  className?: string
}

export function CompanyStats({ className = "" }: CompanyStatsProps) {
  return (
    <section className={`py-16 bg-white border-b border-[#E4E4E4] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="flex items-center justify-center mb-3">
              <Clock className="h-8 w-8 text-[#06A0A6]" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-[#06A0A6] mb-2">
              {siteData.company.yearsExperience}
            </div>
            <div className="text-[#2E3C44]">Years Experience</div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-3">
              <Shield className="h-8 w-8 text-[#06A0A6]" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-[#06A0A6] mb-2">
              {siteData.company.serviceAvailability}
            </div>
            <div className="text-[#2E3C44]">Service Available</div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-[#06A0A6]" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-[#06A0A6] mb-2">
              {siteData.company.happyCustomers}
            </div>
            <div className="text-[#2E3C44]">Happy Customers</div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-3">
              <Car className="h-8 w-8 text-[#06A0A6]" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-[#06A0A6] mb-2">Multiple</div>
            <div className="text-[#2E3C44]">Professional Drivers</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStats
