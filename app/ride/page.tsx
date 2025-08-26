import Footer from "@/components/footer"
import Image from "next/image"
import { Calendar, MapPin, CreditCard, Clock, MessageCircle, Headphones } from "lucide-react"
import Logo from "@/components/logo"
import AppDownloadButtons from "@/components/AppDownloadButtons"

export default function RidePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
               
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Delivering a safe, reliable, and convenient travel experience.
                </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you're commuting to work, heading to the airport, or enjoying a night out, our services are
                tailored to meet all your transportation needs with ease and comfort. Enjoy the convenience of cashless
                payments and a seamless experience every time you choose Aylestone Kings for your journey.
              </p>
              <AppDownloadButtons />
            </div>
            <div className="relative">
              <Image
                src="/Professional-in-car.jpg"
                alt="Professional in car"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Passenger App Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Passenger App Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the Ultimate in Convenience and Comfort with the Aylestone Kings Passenger App.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Easy Booking */}
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Booking</h3>
              <p className="text-gray-600">
                Book a ride in just a few taps. Whether you need a ride immediately or want to schedule a ride for
                later, our app makes it simple and quick.
              </p>
            </div>

            {/* Real-Time Tracking */}
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Track your driver in real time from the moment they are assigned to your ride until they arrive at your
                pick-up location. Stay informed and never miss a ride.
              </p>
            </div>

            {/* Multiple Payment Options */}
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Payment Options</h3>
              <p className="text-gray-600">
                Choose from a variety of payment options, including credit/debit cards, mobile wallets, and cash. Enjoy
                secure, hassle-free transactions directly through the app.
              </p>
            </div>

            {/* Ride History */}
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ride History</h3>
              <p className="text-gray-600">
                Access your ride history anytime. Review past trips, download receipts, and keep track of your travel
                expenses with ease.
              </p>
            </div>

            {/* In-App Communication */}
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">In-App Communication</h3>
              <p className="text-gray-600">
                Communicate directly with your driver through the app for any special instructions or updates, ensuring
                a smooth and personalized ride experience.
              </p>
            </div>

            {/* Customer Support */}
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Support</h3>
              <p className="text-gray-600">
                Access 24/7 customer support directly through the app. Our dedicated team is always ready to assist you
                with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Passenger App Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Book rides easily, track real-time, pay cashless with Aylestone Kings.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Aylestone Kings Passenger App is the ultimate travel companion for a seamless and reliable transportation
              experience. Our app is designed to provide you with convenience, comfort, reliability and safety at your
              fingertips.
            </p>
            <AppDownloadButtons />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instant Booking */}
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <Image
                  src="/app-screen-booking.png"
                  alt="Instant Booking Screen"
                  width={250}
                  height={500}
                  className="mx-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Booking</h3>
              <p className="text-gray-600">
                Book a taxi instantly by entering your pickup and destination. Our app will find the nearest available
                driver for you.
              </p>
            </div>

            {/* Real-Time Tracking */}
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <Image
                  src="/1.png"
                  alt="Real-Time Tracking Screen"
                  width={250}
                  height={500}
                  className="mx-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Track your driver's location in real-time and see their estimated arrival time at your pick-up location.
              </p>
            </div>

            {/* Booking History */}
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <Image
                  src="/app-screen-history.png"
                  alt="Booking History Screen"
                  width={250}
                  height={500}
                  className="mx-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Booking History</h3>
              <p className="text-gray-600">Keep track of your booking history for accurate cost and journey records.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
