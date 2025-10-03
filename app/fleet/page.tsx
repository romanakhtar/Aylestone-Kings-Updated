 
import Image from "next/image"
import { Check, ArrowRight, Users, Car, Shield, Star, Clock } from "lucide-react"
import { contactInfo } from "@/lib/data"

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-white">

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                Our Fleet
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Premium comfort, every ride, every time
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                Our fleet sets a new standard with top-tier vehicles that blend luxury with cutting-edge features. 
                From spacious MPVs to executive saloons, every vehicle is meticulously maintained and equipped with 
                the latest technology for your comfort and safety.
              </p>

              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/premium-comfort.jpg" 
                  alt="Premium luxury car" 
                  fill 
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Licensing Section */}
        <section className="py-16 bg-gray-50 bg-gradient-to-r from-[#06A0A6]/10 to-transparent border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted & Licensed Service
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your safety and trust are our top priorities. We maintain the highest standards of licensing and security.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Leicester City Council License */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Leicester City Council</h3>
                <p className="text-gray-600 text-sm">Fully licensed and regulated by Leicester City Council</p>
              </div>

              {/* Wolverhampton City Council License */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wolverhampton City Council</h3>
                <p className="text-gray-600 text-sm">Licensed and regulated by Wolverhampton City Council</p>
              </div>

              {/* DBS Checked Drivers */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">DBS Checked Drivers</h3>
                <p className="text-gray-600 text-sm">All drivers are DBS checked for your safety and security</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Diverse fleet for every need
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Aylestone Kings, we offer a comprehensive range of vehicles to meet all your transportation needs. 
                Whether you're travelling solo or with a group, our fleet guarantees comfort, reliability, and style.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Estate Vehicle */}
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-20 h-18 md:w-24 md:h-22 rounded-xl overflow-hidden mb-3 md:mb-4 mx-auto">
                  <Image 
                    src="/Estate vehicle.png" 
                    alt="Estate Vehicle" 
                    width={96}
                    height={88}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Saloon Car</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                    Perfect for those who need extra space for luggage or equipment. Our saloon vehicles combine 
                    practicality with comfort, making them ideal for airport transfers and shopping trips.
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Spacious luggage area</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Comfortable seating for 4</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Perfect for airport runs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Executive */}
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-20 h-18 md:w-24 md:h-22 rounded-xl overflow-hidden mb-3 md:mb-4 mx-auto">
                  <Image 
                    src="/Executive.jpg" 
                    alt="Executive Car" 
                    width={96}
                    height={88}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Executive</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                    The ultimate in luxury and sophistication. Perfect for business meetings, corporate events, 
                    and when you want to make a lasting impression with premium travel.
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Premium leather interiors</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Advanced climate control</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Professional chauffeur service</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6 Seater */}
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-20 h-18 md:w-24 md:h-22 rounded-xl overflow-hidden mb-3 md:mb-4 mx-auto">
                  <Image 
                    src="/6 seater.jpg" 
                    alt="6 Seater Car" 
                    width={96}
                    height={88}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">6 Seater</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                    Our 6-seater vehicles are perfect for medium-sized groups, ensuring everyone travels comfortably 
                    with plenty of space for both passengers and luggage.
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Medium group capacity</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Comfortable seating</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Versatile for various trips</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8 Seater */}
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-20 h-18 md:w-24 md:h-22 rounded-xl overflow-hidden mb-3 md:mb-4 mx-auto">
                  <Image 
                    src="/8 seater.jpg" 
                    alt="8 Seater Car" 
                    width={96}
                    height={88}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">8 Seater</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                    Our largest vehicles offer the ultimate comfort for large groups, making them perfect for 
                    corporate events, family gatherings, or group outings.
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Maximum capacity</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Corporate event ready</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Luxury group travel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MPV Section */}
        <section className="py-20 bg-gray-50 bg-gradient-to-r from-[#06A0A6]/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                  MPV Vehicles
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Versatile and spacious travel solutions
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  Our MPV fleet is designed to be versatile and perfect for all passengers. Whether you're heading 
                  to the airport, a business meeting, or a family outing, our MPVs ensure a smooth and enjoyable ride.
                </p>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Spacious Interiors</h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        Plenty of room for passengers and luggage, ensuring everyone travels in comfort.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Car className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Comfortable Seating</h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        Ergonomically designed seats with premium materials for maximum comfort during your journey.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Advanced Safety Features</h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        Equipped with the latest safety technology to ensure your peace of mind throughout the journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative order-1 md:order-2 mb-8 md:mb-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-2xl"></div>
                <Image 
                  src="/verstile-spacious.jpg" 
                  alt="MPV vehicle" 
                  width={600}
                  height={400}
                  className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Executive Cars Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative order-1 md:order-2 mb-8 md:mb-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-2xl"></div>
                <Image 
                  src="/business-leisure.jpg" 
                  alt="Executive car" 
                  width={600}
                  height={400}
                  className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                  Executive Service
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Business and leisure, perfectly balanced
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  Our executive cars provide luxury on wheels. Perfect for airport transfers, corporate events, 
                  or important client meetings. Our commitment to luxury and meeting our clients' expectations 
                  is reflected in every aspect of our executive service.
                </p>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Luxury Interiors</h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        Premium materials and finishes for a first-class experience that exceeds expectations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Car className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Advanced Technology</h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        Cutting-edge infotainment and connectivity options to keep you connected and entertained.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Privacy and Comfort</h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        Tinted windows and plush seating for a private and comfortable journey every time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Trust Section */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Aylestone Kings?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Beyond our premium fleet, we offer the peace of mind that comes with fully licensed and regulated service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Licensed Service */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed Service</h3>
                <p className="text-gray-600 text-sm">Fully licensed by Leicester & Wolverhampton City Councils</p>
              </div>

              {/* DBS Checked */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">DBS Checked</h3>
                <p className="text-gray-600 text-sm">All drivers are DBS checked for your safety</p>
              </div>

              {/* 24/7 Service */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Service</h3>
                <p className="text-gray-600 text-sm">Round-the-clock availability for your convenience</p>
              </div>

              {/* Professional Drivers */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-600 text-sm">Experienced and courteous drivers</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl text-[#E4E4E4] md:text-5xl font-bold mb-6">
              Ready to experience our premium fleet?
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Book your ride today and discover the difference that quality vehicles and professional service make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-4 py-2 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                  Book Now
                  <ArrowRight className="h-3 w-3 sm:h-5 sm:w-5" />
                </button>
              </a>
              <a href="/pricing" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-white text-white px-4 py-2 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-all duration-200 text-sm sm:text-base">
                  View Airport Pricing
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}
