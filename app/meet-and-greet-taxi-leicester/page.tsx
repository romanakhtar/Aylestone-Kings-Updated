import { Calendar, Luggage, MapPin, Phone, Shield, Users } from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "Meet and Greet Taxi Leicester | Airport Meet & Greet at EMA & BHX | Aylestone Kings",
  description:
    "Book a meet and greet taxi Leicester for East Midlands Airport (EMA) and Birmingham Airport (BHX). Your driver meets you in arrivals with a name board, helps with luggage and escorts you to your taxi. Pre-booking required.",
  keywords:
    "meet and greet taxi Leicester, meet & greet taxi Leicester, airport meet and greet Leicester, East Midlands Airport meet and greet taxi, EMA meet and greet taxi, Birmingham Airport meet and greet taxi, BHX meet and greet taxi, taxi with name board Leicester",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/meet-and-greet-taxi-leicester",
  },
  openGraph: {
    title:
      "Meet and Greet Taxi Leicester | Airport Meet & Greet at EMA & BHX | Aylestone Kings",
    description:
      "Pre-book a meet and greet taxi Leicester for EMA and BHX. Your driver meets you in arrivals with a name sign, assists with luggage and walks you to your taxi.",
    url: "https://aylestone-taxis.co.uk/meet-and-greet-taxi-leicester",
  },
}

export default function MeetAndGreetTaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Meet and Greet Taxi Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Meet and Greet Taxi Leicester – EMA & BHX
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Need a <strong>meet and greet taxi Leicester</strong> for East
                Midlands Airport (EMA) or Birmingham Airport (BHX)? With our
                <strong> airport meet and greet service</strong>, your driver
                meets you inside the terminal with a name sign, assists with
                luggage and walks you straight to your taxi.{" "}
                <strong>Pre-booking is required</strong> so we can monitor your
                flight and be ready when you land.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={contactInfo.booking.online}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <Calendar className="h-6 w-6" />
                    Pre-Book Meet &amp; Greet Taxi
                  </button>
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-all duration-200 text-lg flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6" />
                    Call {contactInfo.phone} to Book
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What Meet & Greet Means */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                What Does Meet &amp; Greet Taxi Mean?
              </h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="space-y-6 text-[#2E3C44] text-lg leading-relaxed">
                <p>
                  A <strong>meet and greet taxi</strong> is different from a
                  standard airport pickup. Instead of you trying to find your
                  taxi in a busy car park, your driver comes into the terminal
                  and waits in the arrivals area with a{" "}
                  <strong>clear name sign</strong>.
                </p>
                <p>
                  When you exit arrivals, the driver will{" "}
                  <strong>greet you by name</strong>, help with your{" "}
                  <strong>luggage</strong> and escort you to the vehicle. This is
                  ideal if you are travelling with children, have several
                  suitcases or simply prefer a smoother, more personal arrival.
                </p>
                <p>
                  Our <strong>meet and greet taxi Leicester</strong> service is
                  available 24/7 for flights arriving at{" "}
                  <strong>East Midlands Airport (EMA)</strong>,{" "}
                  <strong>Birmingham Airport (BHX)</strong> and other major UK
                  airports when pre-booked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works at EMA & BHX */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                How Meet &amp; Greet Works at EMA &amp; BHX
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                A simple, step-by-step <strong>airport meet and greet taxi</strong> service
                from Leicester.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* EMA */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                  <h3 className="text-2xl font-bold text-[#0F0D3E]">
                    East Midlands Airport (EMA) Meet &amp; Greet
                  </h3>
                </div>
                <ul className="list-disc list-inside space-y-3 text-[#2E3C44] text-lg">
                  <li>
                    We <strong>pre-book</strong> your journey with flight number
                    and landing time so we can track your flight into EMA.
                  </li>
                  <li>
                    On arrival, your driver waits inside the{" "}
                    <strong>arrivals hall</strong> with a{" "}
                    <strong>name sign</strong> showing your name or company.
                  </li>
                  <li>
                    The driver greets you, <strong>helps with luggage</strong>{" "}
                    and walks with you to the car park where the taxi is parked.
                  </li>
                  <li>
                    We allow reasonable waiting time to cover baggage reclaim and
                    passport control, and we adjust for <strong>flight delays</strong>.
                  </li>
                </ul>
              </div>

              {/* BHX */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                  <h3 className="text-2xl font-bold text-[#0F0D3E]">
                    Birmingham Airport (BHX) Meet &amp; Greet
                  </h3>
                </div>
                <ul className="list-disc list-inside space-y-3 text-[#2E3C44] text-lg">
                  <li>
                    For <strong>BHX meet and greet</strong>, we again take your
                    flight details in advance and monitor your landing time.
                  </li>
                  <li>
                    Your driver will be inside the <strong>BHX arrivals area</strong>{" "}
                    with a <strong>name board</strong>, ready to meet you after
                    you clear customs.
                  </li>
                  <li>
                    The driver will <strong>assist with suitcases and hand luggage</strong>{" "}
                    and guide you to the designated car park where your taxi is
                    waiting.
                  </li>
                  <li>
                    Any reasonable waiting time for immigration and baggage is
                    factored in, and we respond to <strong>delayed flights</strong> where
                    possible.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Luggage Assistance & Who It's For */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Luggage Assistance &amp; Passenger Support
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Designed for travellers who want extra help at the airport.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Luggage className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Help with Suitcases &amp; Bags
                </h3>
                <p className="text-[#2E3C44] text-lg">
                  With our <strong>meet and greet taxi Leicester</strong>, the
                  driver does more than just drive. They will{" "}
                  <strong>help lift and load your luggage</strong> from the
                  arrivals hall to the vehicle and again at your drop-off
                  address, ideal if you have heavy cases, children or mobility
                  concerns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Perfect for Families, Guests &amp; Business Travellers
                </h3>
                <p className="text-[#2E3C44] text-lg">
                  Meet and greet is ideal for{" "}
                  <strong>families with children</strong>,{" "}
                  <strong>elderly passengers</strong>,{" "}
                  <strong>VIP or corporate guests</strong> and anyone who wants a
                  smooth, <strong>stress-free airport pickup</strong>. Your guest
                  will see a clear <strong>name sign</strong> and be looked after
                  from the moment they exit arrivals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Booking Required */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Pre-Booking is Required for Meet &amp; Greet
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                To arrange a proper <strong>meet and greet taxi Leicester</strong>, we must{" "}
                <strong>pre-book your journey</strong> with full flight details.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="space-y-4 text-[#2E3C44] text-lg leading-relaxed">
                <p>
                  Meet and greet involves airport parking, walking into the
                  terminal and waiting inside the arrivals area. Because of this,
                  <strong> we can only offer the service when it is pre-booked</strong>{" "}
                  with:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Passenger name (for the name sign)</li>
                  <li>Airport and terminal (EMA, BHX or other)</li>
                  <li>Flight number and scheduled landing time</li>
                  <li>Mobile contact number</li>
                  <li>Destination address in Leicester or beyond</li>
                </ul>
                <p>
                  Once booked, we{" "}
                  <strong>monitor your flight for delays</strong> and adjust
                  driver arrival where possible. If your plans change, simply{" "}
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="text-[#06A0A6] font-semibold hover:underline"
                  >
                    call {contactInfo.phone}
                  </a>{" "}
                  to update us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Aylestone Kings for Meet & Greet */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Choose Our Meet and Greet Taxi Leicester?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Licensed, Professional Drivers
                </h3>
                <p className="text-[#2E3C44] text-lg">
                  All drivers are <strong>fully licensed</strong> and{" "}
                  <strong>DBS-checked</strong>, providing a safe, professional
                  meet and greet experience at EMA, BHX and other UK airports.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  EMA, BHX &amp; Beyond
                </h3>
                <p className="text-[#2E3C44] text-lg">
                  We regularly provide <strong>meet and greet</strong> at{" "}
                  <strong>East Midlands Airport</strong> and{" "}
                  <strong>Birmingham Airport</strong>, and can arrange the same
                  service at other airports on request when pre-booked.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Simple Booking &amp; Clear Communication
                </h3>
                <p className="text-[#2E3C44] text-lg">
                  Book online or{" "}
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="text-[#06A0A6] font-semibold hover:underline"
                  >
                    call {contactInfo.phone}
                  </a>{" "}
                  to set up your <strong>meet and greet taxi Leicester</strong>.
                  We confirm all details so you know exactly where your driver
                  will be waiting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                  What does meet and greet taxi mean?
                </h3>
                <p className="text-[#2E3C44] text-lg">
                  It means your taxi driver <strong>meets you inside the airport</strong>,
                  holding a <strong>name sign</strong>, helps with your{" "}
                  <strong>luggage</strong> and walks you to your vehicle instead
                  of you trying to find the car outside.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                  How does meet and greet work at EMA and BHX?
                </h3>
                <p className="text-[#2E3C44] text-lg">
                  We <strong>pre-book</strong> your journey with flight details,
                  track your landing, then your driver waits in{" "}
                  <strong>EMA or BHX arrivals</strong> with a name board. After
                  greeting you, they assist with luggage and escort you to your
                  taxi in the car park.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                  Is pre-booking required for meet and greet?
                </h3>
                <p className="text-[#2E3C44] text-lg">
                  Yes. <strong>Pre-booking is required</strong> so we can arrange
                  parking, monitor your flight and ensure your driver is in the
                  terminal with a name sign when you arrive.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                  Will the driver help with my bags?
                </h3>
                <p className="text-[#2E3C44] text-lg">
                  Yes. Our <strong>meet and greet taxi Leicester</strong> service
                  includes <strong>luggage assistance</strong> from arrivals to
                  the vehicle and again at your home, hotel or business address.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Book Your Meet and Greet Taxi Leicester
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Make your arrival at <strong>EMA</strong> or <strong>BHX</strong>{" "}
              smooth and stress-free. <strong>Pre-book your meet and greet taxi Leicester</strong>{" "}
              today – your driver will be waiting with a name sign and ready to
              help with your luggage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Pre-Book Meet &amp; Greet Online
                  <Calendar className="h-5 w-5" />
                </button>
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#06A0A6] transition-all duration-200 flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  Call {contactInfo.phone}
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

