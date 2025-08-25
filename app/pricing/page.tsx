import Footer from "@/components/footer"
import { Calendar, MapPin, CreditCard, Clock, MessageCircle, Headphones, Check, Star, Shield, Zap, Users, Car } from "lucide-react"
import Logo from "@/components/logo"
import AppDownloadButtons from "@/components/AppDownloadButtons"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent & Affordable Pricing
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Experience premium taxi services without the premium price tag. Our competitive rates ensure quality transportation 
              that fits your budget, with no hidden fees or surprises.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Pricing?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">No hidden charges or booking fees</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Fixed rates for airport transfers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Competitive city center rates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Corporate account discounts available</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Instant price quotes before booking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Transparent fare calculation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">No surge pricing during peak hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Loyalty rewards program</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
           
            </div>
          </div>
        </div>
      </section>


      {/* Pricing Table Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pricing Comparison Table
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare our different service options and pricing structures
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Destination</th>
                  <th className="px-6 py-4 text-left font-semibold">1-4 seater (prices from)</th>
                  <th className="px-6 py-4 text-left font-semibold">6/8 seater (prices from)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">East Midlands</td>
                  <td className="px-6 py-4 text-gray-700">£40</td>
                  <td className="px-6 py-4 text-gray-700">£60</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Birmingham</td>
                  <td className="px-6 py-4 text-gray-700">£55</td>
                  <td className="px-6 py-4 text-gray-700">£80</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Manchester</td>
                  <td className="px-6 py-4 text-gray-700">£150</td>
                  <td className="px-6 py-4 text-gray-700">£200</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Luton</td>
                  <td className="px-6 py-4 text-gray-700">£120</td>
                  <td className="px-6 py-4 text-gray-700">£160</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Heathrow</td>
                  <td className="px-6 py-4 text-gray-700">£150</td>
                  <td className="px-6 py-4 text-gray-700">£200</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Gatwick</td>
                  <td className="px-6 py-4 text-gray-700">£200</td>
                  <td className="px-6 py-4 text-gray-700">£275</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Stansted</td>
                  <td className="px-6 py-4 text-gray-700">£150</td>
                  <td className="px-6 py-4 text-gray-700">£200</td>
                </tr>
              </tbody>
            </table>
            
            {/* Pricing Note */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 italic">
                Prices shown are starting rates. Additional pickup locations will affect final price. Car park charges are not included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Vehicle Fleet
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect vehicle size for your journey and luggage requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Saloon */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <Car className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Saloon</h3>
                <p className="text-gray-600">Perfect for small groups and business travel</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Accommodates 4 passengers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Space for 2 suitcases</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Comfortable seating</span>
                </div>
               
              </div>
            </div>

            {/* Minibus 8 Seater */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <div className="text-center mb-6">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Minibus 8 Seater</h3>
                <p className="text-gray-600">Ideal for large groups and family travel</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Accommodates 8 adults</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Space for 8 suitcases</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Spacious interior</span>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How are the prices calculated for different destinations?
              </h3>
              <p className="text-gray-600">
                Our prices are based on distance, vehicle type, and any additional services. The rates shown are starting prices, and final costs may vary based on specific pickup locations and route requirements.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's the difference between 1-4 seater and 6/8 seater pricing?
              </h3>
              <p className="text-gray-600">
                The 1-4 seater option uses our standard saloon vehicles, while 6/8 seater uses our minibus service. Larger vehicles have higher base costs due to increased capacity and fuel consumption, but offer better value for groups.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are there any hidden fees or additional charges?
              </h3>
              <p className="text-gray-600">
                No hidden fees! All our prices are transparent. However, car park charges at airports and additional pickup locations may affect the final price. We'll always provide a clear breakdown before booking.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I get a quote for a custom route or multiple stops?
              </h3>
              <p className="text-gray-600">
                Absolutely! We offer custom pricing for special routes, multiple stops, and unique requirements. Contact us directly or use our app for a personalized quote based on your specific needs.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer discounts for regular customers or corporate accounts?
              </h3>
              <p className="text-gray-600">
                Yes! We offer loyalty discounts for regular customers and special rates for corporate accounts with volume bookings. Contact our business team to discuss corporate pricing options.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept cash, all major credit/debit cards, and digital payments through our app. Corporate accounts can be set up with monthly invoicing for convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affordability Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Making Quality Travel Affordable
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe everyone deserves reliable, comfortable transportation without breaking the bank
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">What you see is what you pay - transparent pricing always</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Quotes</h3>
              <p className="text-gray-600">Get accurate pricing before you book, no surprises</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Price Protection</h3>
              <p className="text-gray-600">Locked-in rates that won't change after booking</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Group Discounts</h3>
              <p className="text-gray-600">Save more when traveling with family or colleagues</p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Affordable Luxury?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Download our app today and enjoy transparent pricing, instant quotes, and premium service at competitive rates.
          </p>
          <AppDownloadButtons />
        </div>
      </section>

      <Footer />
    </div>
  )
}
