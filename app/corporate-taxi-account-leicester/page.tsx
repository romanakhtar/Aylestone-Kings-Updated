import { FileText, Phone } from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "Corporate Taxi Accounts Leicester | Business Taxi Accounts & Centralised Billing | Aylestone Kings",
  description:
    "Corporate taxi accounts Leicester with simple booking and centralised billing. Aylestone Taxis provides reliable business taxi accounts for staff transport, client pickups and airport transfers with a single monthly invoice.",
  keywords:
    "corporate taxi accounts Leicester, corporate taxi account Leicester, business taxi account Leicester, taxi account Leicester, corporate taxi Leicester, centralised taxi billing Leicester, executive taxi Leicester, Meridian Business Park taxi account",
  alternates: {
    canonical: "https://aylestone-taxis.co.uk/corporate-taxi-account-leicester",
  },
  openGraph: {
    title:
      "Corporate Taxi Accounts Leicester | Business Taxi Accounts & Centralised Billing",
    description:
      "Corporate taxi accounts in Leicester with simple booking, centralised billing and a single monthly invoice. Ideal for staff transport, client pickups and airport transfers across Leicester including Meridian Business Park.",
    url: "https://aylestone-taxis.co.uk/corporate-taxi-account-leicester",
  },
}

const faqSchemaCorporateTaxiAccount = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I open a corporate taxi account in Leicester?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "To open a corporate taxi account in Leicester, contact Aylestone Taxis by email and we will register your business. Once your account is approved, your staff can begin booking taxis under your company account.",
      },
    },
    {
      "@type": "Question",
      name: "How does billing work for corporate taxi accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "All journeys booked under your corporate taxi account are recorded and added to a single monthly invoice. This makes it easier for your accounts team to manage taxi costs and reconcile business travel.",
      },
    },
    {
      "@type": "Question",
      name: "Who can use a corporate taxi account?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Corporate taxi accounts are ideal for offices, hotels, healthcare providers, schools and other businesses across Leicester that regularly need staff or client transport and prefer centralised monthly billing.",
      },
    },
  ],
}

export default function CorporateTaxiAccountLeicesterPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                Corporate Taxi Accounts Leicester
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight">
                Corporate Taxi Accounts Leicester
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-12 leading-relaxed">
                Aylestone Taxis provides reliable <strong>corporate taxi accounts in Leicester</strong> for
                businesses that require simple booking and centralised billing. Businesses across Leicester
                use our service for staff transport, client pickups and airport transfers with the convenience
                of a single monthly invoice.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={`mailto:${contactInfo.email}`} className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                    <FileText className="h-6 w-6" />
                    Email to Apply for an Account
                  </button>
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto border-2 border-[#06A0A6] text-[#06A0A6] px-8 py-4 rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-all duration-200 text-lg flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6" />
                    Call {contactInfo.phone} to Discuss
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How Corporate Taxi Accounts Work */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                How Corporate Taxi Accounts Work
              </h2>
              
            </div>

            <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left">
              <div className="space-y-4 text-[#2E3C44] text-lg">
                <p>
                  If your business regularly books taxis in Leicester, you can open a corporate account with us.
                </p>
                <p>
                  Once the account is set up, your staff can book taxis by phone or through our passenger app and
                  the journeys will be charged to your company account.
                </p>
                <p>
                  Instead of paying drivers individually, all journeys are added to a single monthly invoice, making
                  it easier for your accounts team to manage.
                </p>
                <p>
                  To open a corporate taxi account, contact us by email and we will set it up for you.
                </p>
                <p className="font-semibold">
                  📧 <a href={`mailto:${contactInfo.email}`} className="text-[#06A0A6] hover:underline">
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Businesses Choose Aylestone Taxis */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Why Businesses Choose Aylestone Taxis
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Businesses across Leicester choose Aylestone Taxis for straightforward corporate taxi accounts and
                dependable service.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left">
              <ul className="list-disc list-inside space-y-2 text-[#2E3C44] text-lg">
                <li>Reliable drivers across Leicester</li>
                <li>Easy booking by phone or app</li>
                <li>Monthly invoicing for businesses</li>
                <li>Professional service for staff and clients</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Corporate Taxi Services for Leicester Businesses */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">
                Corporate Taxi Services for Leicester Businesses
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto leading-relaxed">
                Aylestone Taxis provides corporate taxi services across Leicester including Meridian Business Park,
                Fosse Park, Leicester city centre and surrounding areas.
              </p>
            </div>
            <div className="max-w-4xl mx-auto text-[#2E3C44] text-lg leading-relaxed">
              <p>
                Our corporate accounts are ideal for businesses that regularly require staff transport, client pickups,
                or airport transfers.
              </p>
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
                  How do I open a corporate taxi account in Leicester?
                </h3>
                <p className="text-[#2E3C44] text-lg">
                  Contact Aylestone Taxis by email and we will register your business. Once approved, your staff can
                  begin booking taxis under your company account.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                  How does billing work for corporate taxi accounts?
                </h3>
                <p className="text-[#2E3C44] text-lg">
                  All journeys booked under your business account are recorded and added to a single monthly invoice.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">
                  Who can use a corporate taxi account?
                </h3>
                <p className="text-[#2E3C44] text-lg">
                  Corporate taxi accounts are ideal for offices, hotels, healthcare providers, schools and businesses
                  across Leicester.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-[#E4E4E4] mb-6">
              Businesses searching for a reliable corporate taxi in Leicester often choose Aylestone Taxis for
              dependable staff and client transport.
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Apply for Your Corporate Taxi Account Leicester
            </h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Ready to simplify your <strong>business taxi travel</strong>? Open a{" "}
              <strong>corporate taxi account Leicester</strong> today for centralised billing,
              executive vehicles and a dedicated account manager.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href={`mailto:${contactInfo.email}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-[#06A0A6] px-8 py-4 rounded-lg font-semibold hover:bg-[#E4E4E4] transition-colors duration-200 flex items-center justify-center gap-3">
                  Email {contactInfo.email}
                  <FileText className="h-5 w-5" />
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchemaCorporateTaxiAccount),
        }}
      />
    </div>
  )
}

