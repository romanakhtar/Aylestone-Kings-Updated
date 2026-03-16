import {
  Check,
  MapPin,
  Shield,
  Phone,
  Calendar,
  Users,
} from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "School Run Taxi Leicester | DBS Checked Drivers | Regular School Transport | Aylestone Kings",
  description:
    "School run taxi Leicester with enhanced DBS-checked drivers and the option for a consistent same driver. Regular school transport covering Aylestone, Wigston, Knighton and Clarendon Park. Set up daily or weekly school run bookings today.",
  keywords:
    "school run taxi Leicester, school taxi Leicester, school transport Leicester, school run taxis Leicester, DBS checked school taxi Leicester, regular school run taxi Leicester, school run taxi Aylestone, school run taxi Wigston, school run taxi Knighton, school run taxi Clarendon Park",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/school-run-taxi-leicester",
  },
  openGraph: {
    title:
      "School Run Taxi Leicester | DBS Checked Drivers & Regular School Transport",
    description:
      "Safe, reliable school run taxi Leicester service with enhanced DBS-checked drivers and an option for the same regular driver. Covering Aylestone, Wigston, Knighton and Clarendon Park.",
    url: "https://aylestone-taxis.co.uk/school-run-taxi-leicester",
  },
}

const faqSchemaSchoolRunTaxi = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are your school run taxi drivers DBS-checked?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. All Aylestone Kings school run taxi drivers are fully licensed and enhanced DBS-checked. We only use vetted, professional drivers for school transport in Leicester.",
      },
    },
    {
      "@type": "Question",
      name: "Can my child have the same driver for every school run?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes – where possible we offer a consistent same-driver option for regular school runs. When you set up a daily or weekly school run taxi Leicester booking, we aim to allocate the same trusted driver so your child sees a familiar face every journey.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas do you cover for school run taxis in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Our school run taxi Leicester service covers Aylestone, Wigston, Knighton, Clarendon Park and surrounding Leicester areas. If you are unsure whether we cover your area, call 0116 233 8888 and we will confirm.",
      },
    },
    {
      "@type": "Question",
      name: "How do I set up a regular school run taxi booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "To set up a regular school run taxi Leicester booking, call 0116 233 8888 to discuss your schedule and requirements. We will arrange daily or weekly pick-ups, agree collection and drop-off points, and allocate a regular driver where possible. You can also start your booking online and our team will follow up.",
      },
    },
  ],
}

export default function SchoolRunTaxiLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                School Run Taxi Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                School Run Taxi Leicester – Safe, Reliable School Transport
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Looking for a reliable{" "}
                <strong>school run taxi Leicester</strong>? Aylestone Kings
                provides safe, professional school transport with{" "}
                <strong>enhanced DBS-checked drivers</strong> and the option for
                a <strong>consistent same driver</strong> for regular school
                runs. We cover Aylestone, Wigston, Knighton and Clarendon Park
                with punctual, child-friendly school taxis.
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
                    Set Up School Run Online
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

        {/* Why Parents Choose Our School Run Taxi Leicester Service */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Choose Our School Run Taxi Leicester Service?
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                A specialist <strong>school run taxi Leicester</strong> service
                designed for busy parents and safe, stress-free school
                transport.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Enhanced DBS-Checked Drivers
                </h3>
                <p className="text-[#2E3C44]">
                  Every <strong>school run taxi Leicester</strong> driver is{" "}
                  <strong>enhanced DBS-checked</strong>, licensed and vetted.
                  You get peace of mind knowing your child is travelling with a
                  trusted professional driver.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Consistent Same-Driver Option
                </h3>
                <p className="text-[#2E3C44]">
                  Wherever possible we provide a{" "}
                  <strong>consistent same driver</strong> for regular school
                  runs, so your child sees a familiar face and you know exactly
                  who is picking them up each day.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Punctual, Reliable School Transport
                </h3>
                <p className="text-[#2E3C44]">
                  We know how important punctuality is for school runs. Our{" "}
                  <strong>school run taxi Leicester</strong> service is focused
                  on on-time morning pick-ups and afternoon collections so your
                  child is never left waiting.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Local Areas We Cover
                </h3>
                <p className="text-[#2E3C44]">
                  Our school run taxis cover{" "}
                  <strong>Aylestone, Wigston, Knighton and Clarendon Park</strong>{" "}
                  plus surrounding Leicester areas. We can collect from home,
                  childminders or after-school clubs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Child-Friendly Vehicles
                </h3>
                <p className="text-[#2E3C44]">
                  Clean, well-maintained vehicles suitable for school transport.
                  We can accommodate booster seats where required – just tell us
                  what your child needs when you set up your booking.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#06A0A6]/20 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[#06A0A6]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">
                  Flexible Daily or Weekly Plans
                </h3>
                <p className="text-[#2E3C44]">
                  Choose daily, weekly or part-week{" "}
                  <strong>school run taxi</strong> bookings that match your
                  schedule. We can cover mornings, afternoons or both.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Set Up a Regular School Run Taxi Booking */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                How to Set Up a Regular School Run Taxi Leicester Booking
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Setting up a regular <strong>school run taxi Leicester</strong>{" "}
                booking is simple – follow these steps and we will handle the
                rest.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      1. Call Us to Discuss Your School Run
                    </h3>
                    <p className="text-[#2E3C44]">
                      Call <strong>{contactInfo.phone}</strong> to talk through
                      your school run requirements – days of the week, pick-up
                      times, addresses and school details. We&apos;ll answer any
                      questions about DBS checks, same-driver options and
                      pricing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      2. Choose Daily or Weekly Regular Bookings
                    </h3>
                    <p className="text-[#2E3C44]">
                      Decide whether you need a{" "}
                      <strong>regular school run taxi</strong> every day, a few
                      days a week or just mornings/afternoons. We&apos;ll set up
                      a recurring booking in our system so your school runs are
                      automatically scheduled.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      3. We Assign a Regular, DBS-Checked Driver
                    </h3>
                    <p className="text-[#2E3C44]">
                      We allocate an{" "}
                      <strong>enhanced DBS-checked driver</strong> for your
                      child&apos;s school run and, where possible, keep the same
                      driver for every journey. You&apos;ll know who is picking
                      up your child each day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-[#06A0A6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                      4. Relax – We Handle the School Run
                    </h3>
                    <p className="text-[#2E3C44]">
                      Once your <strong>school run taxi Leicester</strong>{" "}
                      booking is set up, we take care of the rest – punctual
                      pick-ups, safe journeys and clear communication if
                      anything changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Book Your School Run Taxi Leicester Today
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Safe, reliable <strong>school run taxi Leicester</strong> service
              with enhanced DBS-checked drivers and an option for the same
              regular driver. Call{" "}
              <strong>{contactInfo.phone}</strong> now or set up your booking
              online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Set Up School Run Online
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaSchoolRunTaxi) }}
      />
    </div>
  )
}

