import Footer from "@/components/footer"
import Image from "next/image"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The journey of Aylestone Kings - from humble beginnings to becoming the Midlands' trusted transportation
              service.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It All Started</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/about-hero-image.jpg"
                alt="Aylestone Kings founding story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                              <div className="bg-[#06A0A6] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                2009
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Beginning</h3>
                <p className="text-gray-700">
                  Aylestone Kings was founded by Colin and Audrey Shanks, starting with a vision to provide reliable transportation services in the North East region.
                </p>
              </div>
              </div>
              <div className="flex items-start space-x-4">
                              <div className="bg-[#06A0A6] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                2014
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expansion</h3>
                <p className="text-gray-700">
                  After 5 years of successful operation, Aylestone Kings expanded its fleet and services to cover more areas in the North East region.
                </p>
              </div>
              </div>
              <div className="flex items-start space-x-4">
                              <div className="bg-[#06A0A6] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                2019
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Innovation</h3>
                <p className="text-gray-700">
                  Aylestone Kings embraced technology by launching its mobile app and implementing digital booking systems for enhanced customer experience.
                </p>
              </div>
              </div>
              <div className="flex items-start space-x-4">
                              <div className="bg-[#0F0D3E] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                2024
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Leading the Future</h3>
                <p className="text-gray-700">
                  Today, Aylestone Kings continues to lead the transportation industry with innovative solutions, maintaining the highest standards of service and customer satisfaction.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
