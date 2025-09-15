import Footer from "@/components/footer"
import Image from "next/image"
import { contactInfo, siteData } from "@/lib/data"
import { ArrowRight } from "lucide-react"
export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Travel With Us in Comfort & Style
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Whether you're heading to the airport, across town, or planning a special journey, we ensure a safe, reliable, and comfortable ride—every time. Travel with friendly local drivers, clean vehicles, and fair prices. Your journey starts here.
            </p>
          </div>
        </div>
      </section>

      {/* Train station */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Train Station
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
              Need a Ride from Leicester Train Station
              </h2>
              <p className="text-lg text-[#2E3C44] mb-6 leading-relaxed">
                Arriving at Leicester Station? Book your taxi with us for a smooth, stress-free transfer. Whether you're heading home, to a hotel, or a business meeting, our drivers will be waiting to greet you on time. Enjoy clean cars, courteous service, and fixed pricing with no hidden charges. Pre-book now and travel with peace of mind.
              </p>  
              <div className="mt-12">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-2 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
                Book Your Ride Now
                <ArrowRight className="h-5 w-5" />
                </button>
                </a>
              </div>                     
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-professional-xl order-2 lg:order-2 hover-lift">
              <Image 
                src="/leicester-train-station.jpg" 
                alt="Leicester Train Station" 
                fill 
                className="object-cover transition-smooth hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Students */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-professional-xl order-2 lg:order-1 hover-lift">
              <Image
                src="/de-montfort-university.jpg"
                alt="Taxi with bridge background"
                fill
                className="object-cover transition-smooth hover:scale-105"
              />
            </div>
            <div className="order-1 lg:order-2 fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                De Montfort University
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Reliable Taxi Services for Students in Leicester
              </h2>
              <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">
                Affordable, dependable taxi services for students and staff at De Montfort University. Travel across Leicester with trusted, friendly drivers.
                We offer safe, affordable, and student-friendly taxi services across Leicester. Our local drivers know all the major campuses and accommodation areas. Enjoy discounted rates, secure travel, and 24/7 availability—because your time and safety matter.
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
              <div className="mt-12">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-2 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
                Book Now
                <ArrowRight className="h-5 w-5" />
                </button>
                </a>
              </div> 
            </div>
          </div>
        </div>
      </section>


       {/* Shopping */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Shopping
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Shopping Made Easy
              </h2>
              <p className="text-lg text-[#2E3C44] mb-6 leading-relaxed">
              Shopping made easy. Book a taxi to Fosse Park for stress-free trips to Food Central, Next, and major outlets.Book a taxi to Fosse Park for stress-free trips to Food Central, Next, and all your favourite high street outlets. Whether you're planning a quick visit or a full day out, our reliable taxi service ensures you arrive comfortably and on time. No parking hassles, no delays—just a smooth ride from your doorstep to one of Leicester’s top shopping destinations. Perfect for families, solo shoppers, or group outings.
              </p>  
              <div className="mt-12">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-2 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
                Book Now
                <ArrowRight className="h-5 w-5" />
                </button>
                </a>
              </div> 
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-professional-xl order-2 lg:order-2 hover-lift">
              <Image 
                src="/fosse-park.jpg" 
                alt="Leicester Train Station" 
                fill 
                className="object-cover transition-smooth hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Match-Days */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-professional-xl order-2 lg:order-1 hover-lift">
              <Image
                src="/king-power-stadium.jpg"
                alt="Taxi with bridge background"
                fill
                className="object-cover transition-smooth hover:scale-105"
              />
            </div>
            <div className="order-1 lg:order-2 fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                King Power Stadium
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
              Travel to King Power Stadium
              </h2>
              <p className="text-lg text-[#2E3C44] mb-8 leading-relaxed">
                Leicester City matchday or attending an event? Travel to King Power Stadium quickly and comfortably with our professional taxi service, avoiding the hassle of parking and traffic stress. Whether you're a lifelong Foxes fan or visiting for a concert or special event, we’ll get you there on time with no fuss. Pre-book your ride and enjoy a smooth, reliable journey right to the stadium gates.
              </p>
              <div className="mt-12">
                <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-2 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
                Book Your Ride Now
                <ArrowRight className="h-5 w-5" />
                </button>
                </a>
              </div> 
            </div>
          </div>
        </div>
      </section>

   {/* Airports */}
   <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Airport
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Airport Travel
              </h2>
              <p className="text-lg text-[#2E3C44] mb-6 leading-relaxed">
               We offer reliable airport transfers from Leicester to all major UK airports, ensuring you arrive relaxed, on time, and ready for your flight. Whether it’s a family holiday or a business trip, our professional drivers provide a smooth, stress-free start to your journey. Pre-book today for peace of mind and punctual service.
              </p>   
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href={contactInfo.booking.online} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-2 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
                  Book Now
                  <ArrowRight className="h-3 w-3 sm:h-5 sm:w-5" />
                </button>
              </a>
              <a href="/pricing" className="w-full sm:w-auto">
                <button className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-2 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
                  View Pricing
                </button>
              </a>
            </div>                   
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-professional-xl order-2 lg:order-2 hover-lift">
              <Image 
                src="/airport-passage.jpg" 
                alt="Leicester Train Station" 
                fill 
                className="object-cover transition-smooth hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team is united by shared values and a commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                 At Aylestone Kings, our mission is to deliver safe, reliable, and affordable transport services to our local community. Since 1995, we’ve been committed to making every journey smooth and stress-free.
                 We aim to set the standard for local taxi services by combining experienced drivers, a well-maintained fleet, and exceptional customer care. Our goal is simple: to get you where you need to be, comfortably and on time — every time.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to become Leicester’s most trusted and forward-thinking taxi service — recognised for our commitment to reliability, customer satisfaction, and continuous improvement.  
                We strive to grow alongside our community by embracing technology, enhancing accessibility, and reducing our environmental impact. We see a future where every journey with Aylestone Kings represents quality, care, and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
