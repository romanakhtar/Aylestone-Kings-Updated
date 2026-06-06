"use client"

import { useForm, ValidationError } from "@formspree/react"
import { useEffect, useRef } from "react"
import { Building2, Send } from "lucide-react"

export default function CorporateAccountEnquiryForm() {
  const [state, handleSubmit] = useForm("myzdazng")
  const hasTracked = useRef(false)

  useEffect(() => {
    if (
      state.succeeded &&
      !hasTracked.current &&
      typeof window !== "undefined" &&
      window.dataLayer
    ) {
      hasTracked.current = true
      window.dataLayer.push({
        event: "lead_corporate_account_enquiry",
        lead_type: "corporate_account_form",
      })
    }
  }, [state.succeeded])

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-[#06A0A6]/30 bg-[#06A0A6]/5 p-8 text-center">
        <Building2 className="mx-auto mb-4 h-12 w-12 text-[#06A0A6]" aria-hidden />
        <h3 className="text-2xl font-bold text-[#0F0D3E] mb-2">Thank you</h3>
        <p className="text-[#2E3C44] max-w-lg mx-auto">
          Your corporate account enquiry has been sent. Our team will reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-6 rounded-lg bg-[#06A0A6] px-6 py-3 font-semibold text-white hover:bg-[#0F0D3E]"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <input type="hidden" name="formType" value="corporateAccountEnquiry" />
      <input type="hidden" name="_subject" value="Corporate taxi account enquiry — Aylestone Kings" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="corp-company" className="mb-2 block text-sm font-medium text-[#0F0D3E]">
            Company name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="corp-company"
            name="companyName"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#06A0A6] focus:ring-2 focus:ring-[#06A0A6]/30"
            placeholder="Your organisation"
          />
          <ValidationError prefix="Company" field="companyName" errors={state.errors} className="mt-1 text-sm text-red-600" />
        </div>
        <div>
          <label htmlFor="corp-contact" className="mb-2 block text-sm font-medium text-[#0F0D3E]">
            Your name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="corp-contact"
            name="contactName"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#06A0A6] focus:ring-2 focus:ring-[#06A0A6]/30"
            placeholder="Full name"
          />
          <ValidationError prefix="Name" field="contactName" errors={state.errors} className="mt-1 text-sm text-red-600" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="corp-email" className="mb-2 block text-sm font-medium text-[#0F0D3E]">
            Work email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="corp-email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#06A0A6] focus:ring-2 focus:ring-[#06A0A6]/30"
            placeholder="you@company.co.uk"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
        </div>
        <div>
          <label htmlFor="corp-phone" className="mb-2 block text-sm font-medium text-[#0F0D3E]">
            Phone
          </label>
          <input
            type="tel"
            id="corp-phone"
            name="phone"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#06A0A6] focus:ring-2 focus:ring-[#06A0A6]/30"
            placeholder="Best number to reach you"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-1 text-sm text-red-600" />
        </div>
      </div>
      <div>
        <label htmlFor="corp-industry" className="mb-2 block text-sm font-medium text-[#0F0D3E]">
          Industry / sector
        </label>
        <input
          type="text"
          id="corp-industry"
          name="industry"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#06A0A6] focus:ring-2 focus:ring-[#06A0A6]/30"
          placeholder="e.g. healthcare, logistics, retail"
        />
      </div>
      <div>
        <label htmlFor="corp-volume" className="mb-2 block text-sm font-medium text-[#0F0D3E]">
          Approximate monthly bookings (optional)
        </label>
        <input
          type="text"
          id="corp-volume"
          name="monthlyVolume"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#06A0A6] focus:ring-2 focus:ring-[#06A0A6]/30"
          placeholder="e.g. 10–50 journeys per month"
        />
      </div>
      <div>
        <label htmlFor="corp-message" className="mb-2 block text-sm font-medium text-[#0F0D3E]">
          What you need <span className="text-red-600">*</span>
        </label>
        <textarea
          id="corp-message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#06A0A6] focus:ring-2 focus:ring-[#06A0A6]/30"
          placeholder="Staff shuttles, client visits, airport runs, invoicing requirements, etc."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#06A0A6] px-8 py-4 font-semibold text-white shadow-lg transition-[transform,opacity] hover:bg-[#0F0D3E] disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-5 w-5" aria-hidden />
        {state.submitting ? "Sending…" : "Submit enquiry"}
      </button>
    </form>
  )
}
