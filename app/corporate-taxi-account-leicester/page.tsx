import {
  FileText,
  Phone,
  Stethoscope,
  Truck,
  ShoppingBag,
  GraduationCap,
  Scale,
  Landmark,
  ClipboardList,
  Smartphone,
  Receipt,
  Headphones,
  Quote,
} from "lucide-react"
import { contactInfo } from "@/lib/data"
import type { Metadata } from "next"
import FAQSchema from "@/components/seo/FAQSchema"
import CorporateAccountEnquiryForm from "@/components/CorporateAccountEnquiryForm"
import JsonLd from "@/components/seo/JsonLd"
import { getCorporateServiceGraphJsonLd } from "@/lib/seo/siteJsonLd"

const CORPORATE_CANONICAL = "https://aylestone-taxis.co.uk/corporate-taxi-account-leicester"

export const metadata: Metadata = {
  title: "Corporate Taxi Accounts Leicester | Business Travel",
  description:
    "Corporate taxi accounts in Leicester: monthly invoicing, staff and client travel, airport runs, and dedicated account support. We serve healthcare, logistics, retail, education, legal, and finance sectors. Enquire at " +
    contactInfo.email +
    " or call " +
    contactInfo.phone +
    ".",
  keywords:
    "corporate taxi accounts Leicester, business taxi account Leicester, staff transport Leicester, corporate travel Leicester, taxi account Leicester, invoiced taxi Leicester, B2B taxi Leicester, Meridian Business Park taxi account, executive taxi Leicester",
  alternates: {
    canonical: CORPORATE_CANONICAL,
  },
  openGraph: {
    title: "Corporate Taxi Accounts Leicester | Business Travel",
    description:
      "Business taxi accounts with monthly invoicing, staff booking, and account management. Serving Leicester and the wider East Midlands. Enquire today.",
    url: CORPORATE_CANONICAL,
  },
}

const INDUSTRIES = [
  {
    name: "Healthcare",
    description: "Clinics, care homes, and NHS-linked journeys with punctual, professional drivers.",
    icon: Stethoscope,
  },
  {
    name: "Logistics & distribution",
    description: "Shift changes, depot links, and time-critical staff movements across Leicester.",
    icon: Truck,
  },
  {
    name: "Retail & hospitality",
    description: "Late finishes, regional visits, and reliable cover for busy trading periods.",
    icon: ShoppingBag,
  },
  {
    name: "Education",
    description: "Schools, colleges, and training providers needing safe, repeatable transport.",
    icon: GraduationCap,
  },
  {
    name: "Legal & professional services",
    description: "Discreet client collections and court or meeting travel with fixed agreed fares.",
    icon: Scale,
  },
  {
    name: "Finance & insurance",
    description: "Corporate travel for audits, site visits, and inter-office runs on one invoice.",
    icon: Landmark,
  },
] as const

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Account setup",
    body: "We register your company, agree payment terms, and set up your booking references.",
    icon: ClipboardList,
  },
  {
    step: "2",
    title: "Staff booking",
    body: "Authorised colleagues book by phone or app; journeys post to your account automatically.",
    icon: Smartphone,
  },
  {
    step: "3",
    title: "Monthly invoice",
    body: "One consolidated statement with journey detail for finance — no driver receipts to chase.",
    icon: Receipt,
  },
  {
    step: "4",
    title: "Account management",
    body: "A single point of contact for rate queries, new users, and operational changes.",
    icon: Headphones,
  },
] as const

export default function CorporateTaxiAccountLeicesterPage() {
  const faqs = [
    {
      question: "How do I open a corporate taxi account in Leicester?",
      answer:
        "Email " +
        contactInfo.email +
        " or use the enquiry form on this page. We confirm your details, issue account references, and your team can start booking under the account once approved.",
    },
    {
      question: "How does billing work for corporate taxi accounts?",
      answer:
        "All journeys booked under your business account are recorded and added to a single monthly invoice with line-by-line journey detail for your accounts team.",
    },
    {
      question: "Who can use a corporate taxi account?",
      answer:
        "Corporate taxi accounts suit any Leicester organisation with regular staff travel, client transport, or airport runs — including healthcare, logistics, retail, education, legal, and finance sectors.",
    },
    {
      question: "Can we book airport and long-distance work on account?",
      answer:
        "Yes. Many account customers use us for East Midlands and Birmingham airport runs as well as UK-wide long-distance journeys with agreed fixed fares.",
    },
  ]

  const corporateGraphLd = getCorporateServiceGraphJsonLd({
    serviceUrl: CORPORATE_CANONICAL,
    serviceName: "Corporate taxi accounts Leicester",
    serviceDescription:
      "Business taxi accounts for Leicester organisations: monthly invoicing, staff and client travel, " +
      "airport transfers on account where agreed, and dedicated account support. Enquire via " +
      contactInfo.email +
      ".",
  })

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={corporateGraphLd} />
      <FAQSchema faqs={faqs} />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-[#06A0A6]/10 via-white to-[#0F0D3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#06A0A6]/20 text-[#0F0D3E] rounded-full text-sm font-medium mb-6">
                B2B taxi accounts · Leicester &amp; East Midlands
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F0D3E] mb-6 leading-tight max-w-5xl mx-auto">
                Corporate taxi accounts in Leicester for business travel &amp; staff transport
              </h1>
              <p className="text-xl text-[#2E3C44] max-w-4xl mx-auto mb-8 leading-relaxed">
                Aylestone Kings (via Aylestone Taxis) provides <strong>corporate taxi accounts</strong> with centralised
                billing, predictable pricing on agreed routes, and reliable drivers for staff movements, client visits,
                and airport transfers across Leicester and beyond.
              </p>
              <p className="text-lg text-[#2E3C44] max-w-2xl mx-auto mb-10">
                <span className="font-semibold text-[#0F0D3E]">Email </span>
                <a href={`mailto:${contactInfo.email}`} className="font-semibold text-[#06A0A6] hover:underline">
                  {contactInfo.email}
                </a>
                <span className="font-semibold text-[#0F0D3E]"> or call </span>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="font-semibold text-[#06A0A6] hover:underline">
                  {contactInfo.phone}
                </a>
                <span className="text-[#2E3C44]"> to discuss volumes and invoicing.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#corporate-enquiry" className="w-full sm:w-auto">
                  <span className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#06A0A6] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-[transform,opacity] duration-200 hover:bg-[#0F0D3E] hover:shadow-xl">
                    <FileText className="h-6 w-6" aria-hidden />
                    Enquire for an account
                  </span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="w-full sm:w-auto">
                  <span className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-[#06A0A6] px-8 py-4 text-lg font-semibold text-[#06A0A6] transition-[transform,opacity] duration-200 hover:bg-[#06A0A6] hover:text-white">
                    Email {contactInfo.email}
                  </span>
                </a>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="w-full sm:w-auto">
                  <span className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-[#0F0D3E] px-8 py-4 text-lg font-semibold text-[#0F0D3E] transition-[transform,opacity] duration-200 hover:bg-[#0F0D3E] hover:text-white">
                    <Phone className="h-6 w-6" aria-hidden />
                    Call {contactInfo.phone}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-white" aria-labelledby="industries-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 id="industries-heading" className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-4">
                Industries we serve
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Leicester businesses trust us for compliant, repeatable transport. Typical account sectors include:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INDUSTRIES.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-[transform,opacity] hover:shadow-xl"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#06A0A6]/15">
                      <Icon className="h-6 w-6 text-[#06A0A6]" aria-hidden />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">{item.name}</h3>
                    <p className="text-[#2E3C44] leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-[#E4E4E4]" aria-labelledby="how-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 id="how-heading" className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-4">
                How a corporate taxi account works
              </h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                From first enquiry to monthly reconciliation — a straightforward four-step process.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HOW_IT_WORKS.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.step} className="relative rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
                    <div className="absolute -top-3 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#06A0A6] text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <div className="mt-6 mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#06A0A6]/10">
                      <Icon className="h-6 w-6 text-[#06A0A6]" aria-hidden />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F0D3E] mb-2">{item.title}</h3>
                    <p className="text-[#2E3C44] text-sm leading-relaxed">{item.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Case study / testimonial */}
        <section className="py-20 bg-white" aria-labelledby="case-study-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="case-study-heading" className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-8 text-center">
              Account customers in practice
            </h2>
            <figure className="rounded-2xl border-l-4 border-[#06A0A6] bg-gradient-to-br from-[#06A0A6]/5 to-white p-8 shadow-lg">
              <Quote className="h-10 w-10 text-[#06A0A6]/40 mb-4" aria-hidden />
              <blockquote className="text-lg md:text-xl text-[#2E3C44] leading-relaxed">
                We manage transport for a Leicester-based logistics firm with{" "}
                <strong className="text-[#0F0D3E]">40+ monthly bookings</strong> — shift handovers, depot-to-depot runs,
                and ad-hoc courier support. Their operations team books centrally; accounts receive one itemised invoice
                each month.
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-[#0F0D3E]">
                Representative B2B account pattern · Leicester logistics sector
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Why choose */}
        <section className="py-20 bg-[#E4E4E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-4">Why Leicester businesses use us</h2>
              <p className="text-xl text-[#2E3C44] max-w-3xl mx-auto">
                Licensed drivers, transparent agreed rates on regular routes, and support when your diary changes.
              </p>
            </div>
            <div className="max-w-3xl mx-auto rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
              <ul className="space-y-3 text-[#2E3C44] text-lg list-disc list-inside">
                <li>One monthly invoice instead of hundreds of driver receipts</li>
                <li>Phone and app booking for authorised staff</li>
                <li>Airport and UK-wide long-distance on account where agreed</li>
                <li>Coverage for Leicester city centre, Fosse Park, Meridian Business Park, and surrounds</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enquiry form */}
        <section id="corporate-enquiry" className="scroll-mt-28 py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">Corporate account enquiry</h2>
                <p className="text-lg text-[#2E3C44] mb-6 leading-relaxed">
                  Tell us about your organisation and typical travel patterns. We respond within one business day with
                  next steps and tariff guidance.
                </p>
                <div className="rounded-xl border border-[#06A0A6]/30 bg-[#06A0A6]/5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#0F0D3E] mb-2">Direct email</p>
                  <a
                    href={`mailto:${contactInfo.email}?subject=Corporate%20taxi%20account%20enquiry`}
                    className="text-xl font-semibold text-[#06A0A6] break-all hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                  <p className="mt-4 text-sm text-[#2E3C44]">
                    Prefer the phone?{" "}
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="font-semibold text-[#06A0A6] hover:underline">
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-xl">
                <CorporateAccountEnquiryForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-[#E4E4E4]" aria-labelledby="faq-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-10 text-center">
              Frequently asked questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl bg-white p-6 shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-[#0F0D3E] mb-2">{faq.question}</h3>
                  <p className="text-[#2E3C44] text-lg leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Open a corporate taxi account in Leicester</h2>
            <p className="text-xl text-[#E4E4E4] mb-8">
              Send a brief overview of your travel needs — we will confirm rates, credit terms, and how your team should
              reference bookings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#corporate-enquiry" className="w-full sm:w-auto">
                <span className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-[#06A0A6] hover:bg-[#E4E4E4]">
                  <FileText className="h-5 w-5" aria-hidden />
                  Enquiry form
                </span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="w-full sm:w-auto">
                <span className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-[transform,opacity] hover:bg-white hover:text-[#06A0A6]">
                  Email {contactInfo.email}
                </span>
              </a>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="w-full sm:w-auto">
                <span className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-[transform,opacity] hover:bg-white hover:text-[#06A0A6]">
                  <Phone className="h-5 w-5" aria-hidden />
                  {contactInfo.phone}
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
