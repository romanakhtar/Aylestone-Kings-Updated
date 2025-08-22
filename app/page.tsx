import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Check, ArrowRight, Star, MapPin, Clock, Shield, Users, Phone, Mail } from "lucide-react"
import { siteData, contactInfo } from "@/lib/data"
import AppDownloadButtons from "@/components/AppDownloadButtons"
import AnimatedHero from "@/components/AnimatedHero"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Contact Information Bar */}
      <div className="sticky top-0 z-40 bg-[#06A0A6] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-8">
            <div className="flex items-center space-x-8 text-sm font-medium">
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-white/80 transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{contactInfo.phone}</span>
                <span className="sm:hidden">Call Us</span>
              </a>
              
              <a 
                href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=Hi! I need a taxi from Aylestone Kings`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white/80 transition-colors duration-200"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="hidden sm:inline">{contactInfo.whatsapp}</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
              
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 hover:text-white/80 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">{contactInfo.email}</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <AnimatedHero />

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#06A0A6] mb-2">{siteData.company.yearsExperience}</div>
              <div className="text-[#2E3C44]">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#06A0A6] mb-2">{siteData.company.serviceAvailability}</div>
              <div className="text-[#2E3C44]">Service Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#06A0A6] mb-2">{siteData.company.happyCustomers}</div>
              <div className="text-[#2E3C44]">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#06A0A6] mb-2">Multiple</div>
              <div className="text-[#2E3C44]">Professional Drivers</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                {siteData.homepage.safeTravel.title}
              </h2>
              <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">
                {siteData.homepage.safeTravel.description}
              </p>
              <div className="space-y-4 mb-8">
                {siteData.company.licenses.map((license, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6]" />
                    <span className="text-[#2E3C44]">{license}</span>
                  </div>
                ))}
              </div>
              <a href="/about" className="inline-block">
                <button className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-3">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06A0A6]/10 to-[#2E3C44]/10 rounded-2xl"></div>
              <Image
                src={siteData.images.companyHistory}
                alt="Company History"
                width={600}
                height={400}
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
              {siteData.homepage.serviceCategories.title}
            </h2>
            <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
              {siteData.homepage.serviceCategories.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* For Passengers */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E4E4E4] hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#06A0A6]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#06A0A6]/30 transition-colors">
                <MapPin className="h-8 w-8 text-[#06A0A6]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F0D3E] mb-4">{siteData.homepage.serviceCategories.passengers.title}</h3>
              <p className="text-[#2E3C44] mb-6">
                {siteData.homepage.serviceCategories.passengers.description}
              </p>
              <div className="space-y-3 mb-6">
                {siteData.homepage.serviceCategories.passengers.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#06A0A6]" />
                    <span className="text-[#2E3C44]">{feature}</span>
                  </div>
                ))}
              </div>
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                <button className="w-full bg-[#06A0A6] hover:bg-[#0F0D3E] text-white py-3 rounded-lg font-medium transition-colors">
                  Book a Ride
                </button>
              </a>
            </div>

            {/* For Business */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E4E4E4] hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#2E3C44]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2E3C44]/30 transition-colors">
                <Shield className="h-8 w-8 text-[#2E3C44]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F0D3E] mb-4">For Business</h3>
              <p className="text-[#2E3C44] mb-6">
                Corporate transportation solutions with dedicated account management and detailed reporting.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6]" />
                  <span className="text-[#2E3C44]">Centralized user management</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6]" />
                  <span className="text-[#2E3C44]">Comprehensive booking history</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6]" />
                  <span className="text-[#2E3C44]">Customizable reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6]" />
                  <span className="text-[#2E3C44]">Dedicated account manager</span>
                </div>
              </div>
              <a href="/company" className="inline-block w-full">
                <button className="w-full bg-[#2E3C44] hover:bg-[#0F0D3E] text-white py-3 rounded-lg font-medium transition-colors">
                  Business Solutions
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Passenger App Section */}
      <section id="app-download" className="py-20 bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - App Screenshots */}
              
              <div className="relative ml-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#06A0A6]/20 to-[#2E3C44]/20 rounded-2xl blur-xl"></div>
                <Image
                  src="/app-screen-tracking.jpg"
                  alt="App Screenshot 2"
                  width={300}
                  height={600}
                  className="relative z-10 rounded-2xl shadow-2xl"
                />
              </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Passenger App
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Book a taxi in under 10 seconds
              </h2>
              <p className="text-xl text-[#2E3C44] mb-8 leading-relaxed">
                Experience exclusive priority service from Aylestone's leading taxi firm. Our app makes it incredibly easy to book rides quickly, 
                track your driver in real-time, and arrive at your destination comfortably and on time.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#06A0A6]" />
                  <span className="text-[#2E3C44] font-medium">Quick booking</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#06A0A6]" />
                  <span className="text-[#2E3C44] font-medium">Real-time tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-[#06A0A6]" />
                  <span className="text-[#2E3C44] font-medium">Safe & secure</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#06A0A6]" />
                  <span className="text-[#2E3C44] font-medium">Professional drivers</span>
                </div>
              </div>

              <AppDownloadButtons />
            </div>
          </div>
        </div>
      </section>





      {/* Executive Fleet Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/black-car.jpg)',
            backgroundPosition: 'right center',
          }}
        />
        {/* Gradient Mask - Fades from transparent on right to solid on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06A0A6] via-[#06A0A6]/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Premium Service
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Experience luxury transportation
              </h2>
              <p className="text-xl text-[#E4E4E4] mb-8 leading-relaxed">
                Our executive fleet features premium vehicles with professional drivers, perfect for business travel, 
                special occasions, and discerning clients who demand the very best.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6]" />
                  <span className="text-[#E4E4E4]">Luxury vehicles</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6]" />
                  <span className="text-[#E4E4E6]">Professional chauffeurs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#06A0A6]" />
                  <span className="text-[#E4E4E4]">Complimentary amenities</span>
                </div>
              </div>
              <a href="/fleet" className="inline-block">
                <button className="bg-[#06A0A6] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-3 hover:bg-[#0F0D3E] shadow-lg">
                  View Executive Fleet
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Green Policy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
              Sustainability
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
              Driving a <span className="text-[#06A0A6]">greener future</span>
            </h2>
            <p className="text-xl text-[#2E3C44] mb-8">
              We're committed to reducing our environmental impact and promoting sustainable transportation 
              through our fleet of eco-friendly vehicles and green initiatives.
            </p>
            
            {/* Green Car Image */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06A0A6]/20 to-[#2E3C44]/20 rounded-2xl blur-xl"></div>
              <Image
                src="/eco-friendly-taxi-side.png"
                alt="Eco-Friendly Car"
                width={600}
                height={300}
                className="relative z-10 rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Carousel */}
      <section className="py-20 bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
              What our customers say
            </h2>
            <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued customers have to say about their experience with Aylestone Kings.
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
              {/* Review 1 */}
              <div className="min-w-[400px] md:min-w-[500px] bg-white p-8 rounded-2xl shadow-lg border border-[#E4E4E4] snap-start">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#EF5B6A] text-[#EF5B6A]" />
                  ))}
                </div>
                <p className="text-[#2E3C44] mb-6 leading-relaxed italic">
                  "Excellent service. Charming driver Bilal who was very very helpful. Spotless car with water if needed. 
                  Good idea. Texted ahead to tell us he was on his way, good idea for budgeting our time."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#06A0A6] font-semibold text-lg">ST</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F0D3E]">Stafford Thomas</h4>
                    <p className="text-sm text-[#2E3C44]">Regular Customer</p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="min-w-[400px] md:min-w-[500px] bg-white p-8 rounded-2xl shadow-lg border border-gray-100 snap-start">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Very pleased with the service provided. I was collected on time by a very kind and polite young man 
                  and will certainly use the company again."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-lg">ET</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Esme Tingate</h4>
                    <p className="text-sm text-gray-600">Business Client</p>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="min-w-[400px] md:min-w-[500px] bg-white p-8 rounded-2xl shadow-lg border border-gray-100 snap-start">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Excellent experience. Driver very careful, I arrived at the airport on time with chilled water and great chat both ways."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-lg">DW</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Duncan Whatmore</h4>
                    <p className="text-sm text-gray-600">Airport Transfer</p>
                  </div>
                </div>
              </div>

              {/* Review 4 */}
              <div className="min-w-[400px] md:min-w-[500px] bg-white p-8 rounded-2xl shadow-lg border border-gray-100 snap-start">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Absolutely outstanding service! The executive car was immaculate and the driver was incredibly professional. 
                  Made my business trip to the airport stress-free and comfortable. Highly recommend!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold text-lg">SM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Mitchell</h4>
                    <p className="text-sm text-gray-600">Business Executive</p>
                  </div>
                </div>
              </div>

              {/* Review 5 */}
              <div className="min-w-[400px] md:min-w-[500px] bg-white p-8 rounded-2xl shadow-lg border border-gray-100 snap-start">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Perfect for our family trip! The 8-seater was spacious and clean. Driver was punctual and friendly. 
                  Kids loved the comfortable ride. Will definitely use again for family outings."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-semibold text-lg">DJ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">David Johnson</h4>
                    <p className="text-sm text-gray-600">Family Traveler</p>
                  </div>
                </div>
              </div>

              {/* Review 6 */}
              <div className="min-w-[400px] md:min-w-[500px] bg-white p-8 rounded-2xl shadow-lg border border-gray-100 snap-start">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Corporate event transportation was flawless. The fleet of executive cars impressed our clients. 
                  Professional drivers and immaculate vehicles. Aylestone Kings exceeded all expectations."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold text-lg">RW</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Robert Wilson</h4>
                    <p className="text-sm text-gray-600">Event Manager</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {[...Array(6)].map((_, i) => (
                <button
                  key={i}
                  className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#06A0A6] transition-colors duration-200"
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                ← Scroll to see more reviews →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to experience the difference?
          </h2>
          <p className="text-xl text-[#E4E4E4] mb-8">
            Let's start with a conversation about how we can help you with your transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button className="bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center gap-3">
                Get in touch
                <ArrowRight className="h-5 w-5" />
              </button>
            </a>
            <a href="#app-download" className="inline-block">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-all duration-200">
                Download our app
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
