import Footer from "@/components/footer"
import Image from "next/image"
import { Shield, Clock, Users, Award, MapPin, Phone, Check, ArrowRight, MessageCircle, Mail, Globe } from "lucide-react"
import { contactInfo, siteData } from "@/lib/data"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0F0D3E] via-[#2E3C44] to-[#06A0A6]/20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/taxi-bridge-background.jpg"
            alt="Professional taxi service background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D3E]/90 via-[#0F0D3E]/80 to-[#06A0A6]/30"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#06A0A6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#EF5B6A]/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
              <Shield className="h-4 w-4 text-[#06A0A6] mr-3 animate-pulse" />
              About Aylestone Kings
            </div>
            
            {/* Enhanced Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              About <span className="text-[#06A0A6] drop-shadow-lg">Aylestone Kings</span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10 font-light">
              Moving the <span className="text-[#06A0A6] font-semibold">North East</span> forward with reliable,
              professional taxi services since {siteData.company.founded}. We're committed to providing safe, efficient, and
              convenient transportation solutions for our community.
            </p>
            
            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/our-story" className="inline-block">
                <button className="bg-white hover:bg-[#E4E4E4] text-[#06A0A6] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105">
                  Our Story
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
              <a href="/our-team" className="inline-block">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[#06A0A6] backdrop-blur-sm">
                  Meet Our Team
                </button>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#06A0A6]" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#06A0A6]" />
                <span className="text-sm">24/7 Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#06A0A6]" />
                <span className="text-sm">30+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Our History
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                A legacy of excellence since {siteData.company.founded}
              </h2>
              <p className="text-lg text-[#2E3C44] mb-6 leading-relaxed">
                Aylestone Kings began with a simple Austin Morris marked by a distinctive blue line. 
                What started as a small family business has grown into one of the most trusted transportation companies in North East England.
              </p>
              <p className="text-lg text-[#2E3C44] mb-6 leading-relaxed">
                Over the decades, we've maintained our commitment to exceptional service while embracing modern technology and expanding our fleet. 
                Today, we operate 365 days a year, serving thousands of satisfied customers across the region.
              </p>
              <p className="text-lg text-[#2E3C44] leading-relaxed">
                Our success is built on the foundation of reliability, safety, and customer satisfaction - values that have guided us for over 30 years.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06A0A6]/10 to-[#2E3C44]/10 rounded-2xl"></div>
              <Image
                src="/company-history.jpg"
                alt="Aylestone Kings History"
                width={600}
                height={400}
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#E4E4E4] border-y border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#06A0A6] mb-2">30+</div>
              <div className="text-[#2E3C44]">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#06A0A6] mb-2">24/7</div>
              <div className="text-[#2E3C44]">Service Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#06A0A6] mb-2">1000+</div>
              <div className="text-[#2E3C44]">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#06A0A6] mb-2">50+</div>
              <div className="text-[#2E3C44]">Professional Drivers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
              Core values that drive our success
            </h2>
            <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment to excellence in transportation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Safety */}
            <div className="text-center group">
              <div className="bg-[#06A0A6]/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#06A0A6]/30 transition-colors duration-200">
                <Shield className="h-10 w-10 text-[#06A0A6]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-4">Safety First</h3>
              <p className="text-[#2E3C44] leading-relaxed">
                Your safety is our top priority. We maintain rigorous standards for vehicle maintenance, driver training, and operational procedures.
              </p>
            </div>

            {/* Reliability */}
            <div className="text-center group">
              <div className="bg-[#2E3C44]/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2E3C44]/30 transition-colors duration-200">
                <Clock className="h-10 w-10 text-[#2E3C44]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-4">Reliability</h3>
              <p className="text-[#2E3C44] leading-relaxed">
                We understand the importance of being on time. Our commitment to punctuality and dependability sets us apart from the competition.
              </p>
            </div>
            {/* Customer Service */}
            <div className="text-center group">
              <div className="bg-[#E4E4E4] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E4E4E4] transition-colors duration-200">
                <Users className="h-10 w-10 text-[#0F0D3E]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-4">Customer Service</h3>
              <p className="text-[#2E3C44] leading-relaxed">
                Exceptional customer service is at the heart of our business. We go above and beyond to ensure every journey is comfortable and enjoyable.
              </p>
            </div>
            {/* Excellence */}
            <div className="text-center group">
              <div className="bg-[#EF5B6A]/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#EF5B6A]/30 transition-colors duration-200">
                <Award className="h-10 w-10 text-[#EF5B6A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-4">Excellence</h3>
              <p className="text-[#2E3C44] leading-relaxed">
                We strive for excellence in every aspect of our service, from vehicle cleanliness to driver professionalism and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Mission */}
      <section className="py-20 bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E3C44] mb-6">
              Moving forward together
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-[#2E3C44] leading-relaxed mb-8 italic">
                "To provide the highest quality transportation services while maintaining the highest standards of safety, 
                reliability, and customer satisfaction. We are committed to being the trusted choice for transportation in North East England."
              </p>
              <p className="text-lg text-[#2E3C44] leading-relaxed">
                Our mission drives every decision we make, from the vehicles we choose to the drivers we hire. 
                We believe that exceptional transportation should be accessible to everyone, and we work tirelessly 
                to make that vision a reality for our community.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why choose Aylestone Kings?
              </h2>
            <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
              Discover what makes us the preferred choice for transportation in North East England.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#0F0D3E] mb-2">Licensed & Insured</h3>
                  <p className="text-[#2E3C44]">All our drivers are fully licensed and insured for your peace of mind.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="h-6 w-6 text-[#06A0A6] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#0F0D3E] mb-2">Modern Fleet</h3>
                  <p className="text-[#2E3C44]">Our vehicles are regularly maintained and equipped with the latest technology.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="h-6 w-6 text-[#06A0A6] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#0F0D3E] mb-2">Professional Drivers</h3>
                  <p className="text-[#2E3C44]">Experienced, courteous drivers who know the area like the back of their hand.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Check className="h-6 w-6 text-[#06A0A6] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#0F0D3E] mb-2">24/7 Availability</h3>
                  <p className="text-[#2E3C44]">Round-the-clock service for your convenience, whenever you need us.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="h-6 w-6 text-[#06A0A6] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#0F0D3E] mb-2">Competitive Pricing</h3>
                  <p className="text-[#2E3C44]">Fair, transparent pricing with no hidden fees or surprises.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="h-6 w-6 text-[#06A0A6] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#0F0D3E] mb-2">Local Expertise</h3>
                  <p className="text-[#2E3C44]">Deep knowledge of local routes and traffic patterns for efficient journeys.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E3C44] mb-6">
              Ready to experience the difference?
            </h2>
            <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
              Contact us today for all your transportation needs. Our team is ready to assist you with any questions or bookings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#E4E4E4]">
              <h3 className="text-2xl font-bold text-[#0F0D3E] mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#06A0A6]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F0D3E] mb-1">Address</p>
                    <p className="text-[#2E3C44]">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}, {contactInfo.address.postcode}<br />
                      {contactInfo.address.country}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#06A0A6]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F0D3E] mb-1">Phone</p>
                    <p className="text-[#2E3C44]">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-[#06A0A6]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F0D3E] mb-1">WhatsApp</p>
                    <p className="text-[#2E3C44]">{contactInfo.whatsapp}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#06A0A6]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F0D3E] mb-1">Email</p>
                    <p className="text-[#2E3C44]">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-[#06A0A6]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F0D3E] mb-1">Book Online</p>
                    <a 
                      href={contactInfo.booking.online} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#06A0A6] hover:text-[#0F0D3E] underline"
                    >
                      {contactInfo.booking.online}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#E4E4E4]">
              <h3 className="text-2xl font-bold text-[#0F0D3E] mb-6">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-[#E4E4E4]">
                  <span className="text-[#2E3C44]">Monday - Friday</span>
                  <span className="text-[#0F0D3E] font-semibold">24/7</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#E4E4E4]">
                  <span className="text-[#2E3C44]">Saturday</span>
                  <span className="text-[#0F0D3E] font-semibold">24/7</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#E4E4E4]">
                  <span className="text-[#2E3C44]">Sunday</span>
                  <span className="text-[#0F0D3E] font-semibold">24/7</span>
                </div>
              </div>
              <p className="text-sm text-[#2E3C44] mt-6">
                Available 24/7 for your convenience. No matter when you need us, we're here to help.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
                Book Your Ride Now
                <ArrowRight className="h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
