import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Team</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals who make Aylestone Kings the trusted choice for transportation in the
              Midlands.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of expertise in transportation and customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-500">JD</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
              <p className="text-blue-600 font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-500">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-blue-600 font-medium mb-3">Operations Director</p>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-500">MB</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Brown</h3>
              <p className="text-blue-600 font-medium mb-3">Technology Director</p>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
              </p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
