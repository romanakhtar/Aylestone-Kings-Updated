import Footer from "@/components/footer"
import Image from "next/image"
import { siteData } from "@/lib/data"
import { Shield, Users, Award, Clock,Check, ArrowRight } from "lucide-react"

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">

    {/* Hero Section */}
    <section className="relative section-padding bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white overflow-hidden">
      
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#06A0A6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#EF5B6A]/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding">
          <div className="text-center fade-in">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-8 shadow-professional-lg">
              <Shield className="h-4 w-4 text-[#06A0A6] mr-3" />
              Our Company
            </div>
            
            {/* Enhanced Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              At <span className="text-[#06A0A6] drop-shadow-lg">Aylestone Kings</span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10 font-light">
            We are committed to making your journey comfortable, convenient, and stress-free,
              <span className="text-[#06A0A6] font-semibold"> backed by over 30 years of excellence </span>
               in professional transport services. 
            </p>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70">
              <div className="flex items-center gap-2 transition-smooth hover:text-white">
                <Shield className="h-5 w-5 text-[#06A0A6]" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 transition-smooth hover:text-white">
                <Clock className="h-5 w-5 text-[#06A0A6]" />
                <span className="text-sm">24/7 Service</span>
              </div>
              <div className="flex items-center gap-2 transition-smooth hover:text-white">
                <Award className="h-5 w-5 text-[#06A0A6]" />
                <span className="text-sm">Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
               Aylestone Kings started a mission
              </h2>
              <p className="text-lg text-[#2E3C44] mb-6 leading-relaxed">
                {siteData.companyPage.about.description}
              </p>
              
              {/* Key Achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 transition-smooth hover:translate-x-2">
                  <Award className="h-5 w-5 text-[#06A0A6] flex-shrink-0" />
                  <span className="text-[#2E3C44] font-medium">Serving the community</span>
                </div>
                <div className="flex items-center gap-3 transition-smooth hover:translate-x-2">
                  <Clock className="h-5 w-5 text-[#06A0A6] flex-shrink-0" />
                  <span className="text-[#2E3C44] font-medium">30+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3 transition-smooth hover:translate-x-2">
                  <Shield className="h-5 w-5 text-[#06A0A6] flex-shrink-0" />
                  <span className="text-[#2E3C44] font-medium">Safe and reliable services</span>
                </div>
                <div className="flex items-center gap-3 transition-smooth hover:translate-x-2">
                  <Users className="h-5 w-5 text-[#06A0A6] flex-shrink-0" />
                  <span className="text-[#2E3C44] font-medium">Local Partner</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-professional-xl order-2 lg:order-2 hover-lift">
              <Image 
                src="/company-history.jpg" 
                alt="Company history" 
                fill 
                className="object-cover transition-smooth hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Thousands */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-professional-xl order-2 lg:order-1 hover-lift">
              <Image
                src="/serving-many.jpg"
                alt="Taxi with bridge background"
                fill
                className="object-cover transition-smooth hover:scale-105"
              />
            </div>
            <div className="order-1 lg:order-2 fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Trusted by Thousands
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Each year, we serve over <span className="text-[#06A0A6]">{siteData.company.passengersServed}</span> passengers
              </h2>
              <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">
                {siteData.companyPage.trusted.description}
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-professional hover-lift">
                  <div className="text-3xl font-bold text-[#06A0A6] mb-2">{siteData.company.satisfactionRating}</div>
                  <div className="text-[#2E3C44] font-medium">Satisfaction Rating</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-professional hover-lift">
                  <div className="text-3xl font-bold text-[#06A0A6] mb-2">{siteData.company.yearsExperience}</div>
                  <div className="text-[#2E3C44] font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
              Aligned in Our Values
            </h2>
            <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto leading-relaxed">
              We're deeply ingrained in our community, supporting local charities and organisations to make a positive impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 slide-up">
              <h3 className="text-3xl font-bold text-[#0F0D3E] mb-6">Inclusivity and Accessibility</h3>
              <p className="text-lg text-[#2E3C44] mb-6 leading-relaxed">
                Aylestone Kings is more than just a transportation service; we're deeply ingrained in our community. 
                We proudly support local charities and collaborate with local charities and organisations 
                to make a positive impact.
              </p>
              <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">
                Our commitment to diversity and inclusion extends to our community engagement, with a focus on creating 
                positive impact for all.
              </p>
              
              {/* Community Initiatives */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 transition-smooth hover:translate-x-2">
                  <Check className="h-5 w-5 text-[#06A0A6] flex-shrink-0" />
                  <span className="text-[#2E3C44]">Local Charity Partnerships</span>
                </div>
                <div className="flex items-center gap-3 transition-smooth hover:translate-x-2">
                  <Check className="h-5 w-5 text-[#06A0A6] flex-shrink-0" />
                  <span className="text-[#2E3C44]">Community Outreach Programmes</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-professional-xl order-2 lg:order-2 hover-lift">
              <Image src="/community-support.png" alt="Community support" fill className="object-cover transition-smooth hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-professional-xl order-2 lg:order-1 hover-lift">
              <Image src="/innovation-tech.png" alt="Innovation and technology" fill className="object-cover transition-smooth hover:scale-105" />
            </div>
            <div className="order-1 lg:order-2 scale-in">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Innovation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Local Spirit. <span className="text-[#06A0A6]">Global Tech.</span>
              </h2>
              <h3 className="text-2xl font-semibold text-[#2E3C44] mb-6">
                Innovating Urban Mobility Together
              </h3>
              <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">
                At Aylestone Kings, we champion both local spirit and global tech innovation. Join us as we continue 
                to shape the future of urban mobility, ensuring that innovation meets reliability in every journey.
              </p>
              <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">
                Experience the difference with Aylestone Kings, where providing exceptional service is not just a goal 
                - it's our commitment.
              </p>
              
              {/* CTA Button */}
              <a href="/contact" className="inline-block">
                <button className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-2 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
                  Contact Us
                  <ArrowRight className="h-5 w-5 transition-smooth group-hover:translate-x-1" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}