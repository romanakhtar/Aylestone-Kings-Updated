'use client'

import { useState, useEffect, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Shield, FileText, Car, CreditCard, CheckCircle2, DollarSign, Clock, Users, Award, MapPin, Phone, Mail, HelpCircle, TrendingUp, Star, Briefcase } from 'lucide-react'
import type { Metadata } from 'next'

// Note: Metadata will be handled via layout or parent
export default function JoinDriverPage() {
  const [ownsVehicle, setOwnsVehicle] = useState(false)
  const [rtwStatus, setRtwStatus] = useState('')
  const [hasMounted, setHasMounted] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Show/hide conditional fields based on RTW status
  const showShareCode = rtwStatus === 'Share code'
  const showVisaFields = rtwStatus === 'BRP/visa'
  const showEUFields = rtwStatus === 'EU settled/pre-settled'
  const requiresRTWUpload = rtwStatus !== 'UK passport' && rtwStatus !== ''

  // Validation helpers
  const validateMobile = (value: string) => /^(\+44|0)7\d{9}$/.test(value.trim())
  const validateNI = (value: string) => /^[A-CEGHJ-PR-TW-Z]{2}\d{6}[A-D]$/i.test(value.trim())
  const validatePostcode = (value: string) => /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s?\d[A-Za-z]{2}$/.test(value.trim().toUpperCase())
  const validateDL = (value: string) => /^[A-Z9]{5}\d{6}[A-Z]{2}\d{2}$/i.test(value.trim())
  const validateVRM = (value: string) => /^[A-Z]{2}\d{2}\s?[A-Z]{3}$/i.test(value.trim())
  const validateSortCode = (value: string) => /^\d{2}-?\d{2}-?\d{2}$/.test(value.trim())
  const validateAccountNumber = (value: string) => /^\d{8}$/.test(value.trim())
  const validateShareCode = (value: string) => /^[A-Z0-9]{9}$/i.test(value.trim())

  const validateFile = (file: File | null) => {
    if (!file) return false
    const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
    const validExtension = /\.(pdf|jpe?g|png)$/i.test(file.name)
    const validSize = file.size <= 10 * 1024 * 1024 // 10MB
    return (validTypes.includes(file.type) || validExtension) && validSize
  }

  const dateOnOrAfterToday = (dateStr: string) => {
    if (!dateStr) return false
    const d = new Date(dateStr)
    d.setHours(0, 0, 0, 0)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return d.getTime() >= today.getTime()
  }

  const age21 = (dateStr: string) => {
    if (!dateStr) return false
    const dob = new Date(dateStr)
    const now = new Date()
    const years = now.getFullYear() - dob.getFullYear()
    const months = now.getMonth() - dob.getMonth()
    const days = now.getDate() - dob.getDate()
    return years > 21 || (years === 21 && (months > 0 || (months === 0 && days >= 0)))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormErrors({})

    const formData = new FormData(e.currentTarget)
    const errors: Record<string, string> = {}

    // Personal Information Validation
    const fullName = formData.get('full_name') as string
    if (!fullName || fullName.trim().split(' ').length < 2) {
      errors.full_name = 'Enter your full name (first & last).'
    }

    const dob = formData.get('dob') as string
    if (!dob || !age21(dob)) {
      errors.dob = 'Enter a valid date of birth (must be 21+).'
    }

    const mobile = formData.get('mobile') as string
    if (!mobile || !validateMobile(mobile)) {
      errors.mobile = 'Enter a valid UK mobile (07… or +44).'
    }

    const email = formData.get('email') as string
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Enter a valid email.'
    }

    const niNumber = formData.get('ni_number') as string
    if (!niNumber || !validateNI(niNumber)) {
      errors.ni_number = 'Enter a valid NI number (e.g., QQ123456C).'
    }

    const address = formData.get('address_line1') as string
    if (!address || address.trim().length < 3) {
      errors.address_line1 = 'Enter your address.'
    }

    const city = formData.get('city') as string
    if (!city || city.trim().length < 1) {
      errors.city = 'Enter your city.'
    }

    const postcode = formData.get('postcode') as string
    if (!postcode || !validatePostcode(postcode)) {
      errors.postcode = 'Enter a valid UK postcode.'
    }

    const proofAddress = formData.get('proof_address') as File
    if (!proofAddress || !validateFile(proofAddress)) {
      errors.proof_address = 'Upload a PDF/JPG/PNG (≤10 MB).'
    }

    // Licence & Compliance Validation
    const dlNumber = formData.get('driving_licence_number') as string
    if (!dlNumber || !validateDL(dlNumber)) {
      errors.driving_licence_number = 'Enter a valid UK licence number.'
    }

    const dlIssueDate = formData.get('dl_issue_date') as string
    if (!dlIssueDate) {
      errors.dl_issue_date = 'Enter issue date.'
    }

    const dlExpiryDate = formData.get('dl_expiry_date') as string
    if (!dlExpiryDate || !dateOnOrAfterToday(dlExpiryDate)) {
      errors.dl_expiry_date = 'Enter a valid expiry (today or later).'
    }

    const licensingCouncil = formData.get('licensing_council') as string
    if (!licensingCouncil) {
      errors.licensing_council = 'Choose a council.'
    }

    const badgeNumber = formData.get('badge_number') as string
    if (!badgeNumber || badgeNumber.trim().length < 2) {
      errors.badge_number = 'Enter badge/licence number.'
    }

    const badgeExpiryDate = formData.get('badge_expiry_date') as string
    if (!badgeExpiryDate || !dateOnOrAfterToday(badgeExpiryDate)) {
      errors.badge_expiry_date = 'Enter a valid expiry (today or later).'
    }

    const dbsNumber = formData.get('dbs_number') as string
    if (!dbsNumber || dbsNumber.trim().length < 4) {
      errors.dbs_number = 'Enter DBS certificate number.'
    }

    const dbsIssueDate = formData.get('dbs_issue_date') as string
    if (!dbsIssueDate) {
      errors.dbs_issue_date = 'Enter DBS issue date.'
    }

    const dbsUpdateService = formData.get('dbs_update_service') as string
    if (!dbsUpdateService) {
      errors.dbs_update_service = 'Select Yes/No.'
    }

    if (!rtwStatus) {
      errors.rtw_status = 'Select one.'
    }

    if (showShareCode) {
      const shareCode = formData.get('rtw_share_code') as string
      if (!shareCode || !validateShareCode(shareCode)) {
        errors.rtw_share_code = 'Enter a 9‑character share code.'
      }
    }

    if (showVisaFields) {
      const visaType = formData.get('visa_type') as string
      if (!visaType || visaType.trim().length < 1) {
        errors.visa_type = 'Enter visa type.'
      }
      const visaExpiry = formData.get('visa_expiry_date') as string
      if (!visaExpiry) {
        errors.visa_expiry_date = 'Enter visa expiry.'
      }
    }

    const dlFront = formData.get('upload_driving_licence_front') as File
    if (!dlFront || !validateFile(dlFront)) {
      errors.upload_driving_licence_front = 'Upload licence front (≤10 MB).'
    }

    const dlBack = formData.get('upload_driving_licence_back') as File
    if (!dlBack || !validateFile(dlBack)) {
      errors.upload_driving_licence_back = 'Upload licence back (≤10 MB).'
    }

    const badgeUpload = formData.get('upload_badge_licence') as File
    if (!badgeUpload || !validateFile(badgeUpload)) {
      errors.upload_badge_licence = 'Upload badge/licence (≤10 MB).'
    }

    const dbsUpload = formData.get('upload_dbs') as File
    if (!dbsUpload || !validateFile(dbsUpload)) {
      errors.upload_dbs = 'Upload DBS (≤10 MB).'
    }

    if (requiresRTWUpload) {
      const rtwUpload = formData.get('upload_rtw_proof') as File
      if (!rtwUpload || !validateFile(rtwUpload)) {
        errors.upload_rtw_proof = 'Upload required for non‑UK passport options.'
      }
    }

    // Vehicle Validation (if owns vehicle)
    if (ownsVehicle) {
      const vrm = formData.get('vrm') as string
      if (!vrm || !validateVRM(vrm)) {
        errors.vrm = 'Enter UK VRM (e.g., AB12 CDE).'
      }

      const make = formData.get('make') as string
      if (!make || make.trim().length < 1) {
        errors.make = 'Enter make.'
      }

      const model = formData.get('model') as string
      if (!model || model.trim().length < 1) {
        errors.model = 'Enter model.'
      }

      const year = formData.get('year') as string
      const yearNum = parseInt(year, 10)
      if (!year || isNaN(yearNum) || yearNum < 2008 || yearNum > 2099) {
        errors.year = 'Enter year (2008+).'
      }

      const colour = formData.get('colour') as string
      if (!colour || colour.trim().length < 1) {
        errors.colour = 'Enter colour.'
      }

      const plateExpiry = formData.get('plate_expiry_date') as string
      if (!plateExpiry || !dateOnOrAfterToday(plateExpiry)) {
        errors.plate_expiry_date = 'Enter valid date (≥ today).'
      }

      const insuranceExpiry = formData.get('insurance_expiry_date') as string
      if (!insuranceExpiry || !dateOnOrAfterToday(insuranceExpiry)) {
        errors.insurance_expiry_date = 'Enter valid date (≥ today).'
      }

      const motExpiry = formData.get('mot_expiry_date') as string
      if (!motExpiry || !dateOnOrAfterToday(motExpiry)) {
        errors.mot_expiry_date = 'Enter valid date (≥ today).'
      }

      const insuranceUpload = formData.get('upload_insurance_certificate') as File
      if (!insuranceUpload || !validateFile(insuranceUpload)) {
        errors.upload_insurance_certificate = 'Upload insurance (≤10 MB).'
      }

      const motUpload = formData.get('upload_mot') as File
      if (!motUpload || !validateFile(motUpload)) {
        errors.upload_mot = 'Upload MOT (≤10 MB).'
      }

      const plateUpload = formData.get('upload_plate') as File
      if (!plateUpload || !validateFile(plateUpload)) {
        errors.upload_plate = 'Upload plate photo (≤10 MB).'
      }
    }

    // Payment & Work Validation
    const accountHolder = formData.get('account_holder') as string
    if (!accountHolder || accountHolder.trim().length < 2) {
      errors.account_holder = 'Enter account holder name.'
    }

    const sortCode = formData.get('sort_code') as string
    if (!sortCode || !validateSortCode(sortCode)) {
      errors.sort_code = 'Enter sort code (NN-NN-NN).'
    }

    const accountNumber = formData.get('account_number') as string
    if (!accountNumber || !validateAccountNumber(accountNumber)) {
      errors.account_number = 'Enter 8‑digit account number.'
    }

    const workType = formData.get('work_type') as string
    if (!workType) {
      errors.work_type = 'Select work type.'
    }

    const preferredShifts = formData.get('preferred_shifts') as string
    if (!preferredShifts) {
      errors.preferred_shifts = 'Select a shift.'
    }

    const vehicleOption = formData.get('vehicle_option') as string
    if (!vehicleOption) {
      errors.vehicle_option = 'Select a vehicle option.'
    }

    // Declarations
    const declAccuracy = formData.get('decl_accuracy') as string
    const declVerification = formData.get('decl_verification') as string
    const declGDPR = formData.get('decl_gdpr') as string
    if (!declAccuracy || !declVerification || !declGDPR) {
      errors.declarations = 'Please tick all three declarations.'
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setIsSubmitting(false)
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0]
      const element = document.getElementById(firstErrorField)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        element.focus()
      }
      return
    }

    // Form is valid - submit to Formspree (same endpoint as contact form)
    try {
      const response = await fetch('https://formspree.io/f/myzdazng', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })
      if (response.ok) {
        alert('Application submitted successfully! We will review your application and get back to you soon.')
        e.currentTarget.reset()
        setOwnsVehicle(false)
        setRtwStatus('')
      } else {
        const data = await response.json().catch(() => ({}))
        console.error('Formspree error:', data)
        alert('There was an error submitting your application. Please try again.')
      }
    } catch (err) {
      console.error('Submission failed:', err)
      alert('Network error while submitting. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Prevent hydration mismatch by not rendering conditional content until mounted
  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#0F0D3E] via-[#2E3C44] to-[#06A0A6]/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D3E]/90 via-[#0F0D3E]/80 to-[#06A0A6]/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
                <Shield className="h-4 w-4 text-[#06A0A6] mr-3" />
                Join Our Team
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Join as a <span className="text-[#06A0A6] drop-shadow-lg">Driver</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Become part of Leicester&apos;s trusted taxi service. We&apos;re looking for professional, 
                licensed drivers to join our team. Apply today and start your journey with Aylestone Kings.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
              <p className="text-center text-slate-600">Loading form...</p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F0D3E] via-[#1a1f3a] to-[#0F0D3E] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D3E]/95 via-[#0F0D3E]/90 to-[#06A0A6]/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-semibold uppercase tracking-wider mb-8 shadow-xl">
              <Shield className="h-3.5 w-3.5 text-[#06A0A6] mr-2.5" />
              Career Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Join as a <span className="text-[#06A0A6]">Driver</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light mb-10">
              Become part of Leicester&apos;s most trusted taxi service. We&apos;re looking for professional, 
              licensed drivers to join our established team. Apply today and start your journey with Aylestone Kings.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-[#06A0A6] hover:bg-[#05858a] text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="#driver-application-form">Fill the form</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0D3E] mb-5 tracking-tight">
              Why Join Aylestone Kings?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Join Leicester&apos;s most trusted taxi service and become part of a team that&apos;s been serving the community for over 30 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-[#06A0A6]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Competitive Earnings</h3>
              <p className="text-slate-600 leading-relaxed">
                Earn competitive rates with flexible payment options. Keep more of what you earn with our transparent commission structure.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-[#06A0A6]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Flexible Schedule</h3>
              <p className="text-slate-600 leading-relaxed">
                Choose your own hours with full-time or part-time options. Work day shifts, night shifts, or both - the choice is yours.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-[#06A0A6]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Supportive Team</h3>
              <p className="text-slate-600 leading-relaxed">
                Join a friendly, professional team with ongoing support and training. We&apos;re here to help you succeed.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-[#06A0A6]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Established Reputation</h3>
              <p className="text-slate-600 leading-relaxed">
                Work with a company that&apos;s been trusted by Leicester residents since 1995. Benefit from our established customer base.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-[#06A0A6]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Local Knowledge</h3>
              <p className="text-slate-600 leading-relaxed">
                Serve your local community with routes you know best. Work in Leicester and surrounding areas with familiar territory.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-[#06A0A6]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0D3E] mb-3">Growth Opportunities</h3>
              <p className="text-slate-600 leading-relaxed">
                Build your career with opportunities for advancement. We value our drivers and invest in their professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0D3E] mb-5 tracking-tight">
              Driver Requirements
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              To join our team, you&apos;ll need to meet the following requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-7 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">Age & Experience</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Must be 21 years or older with a valid UK driving licence held for at least 2 years.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">Private Hire Licence</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Valid private hire driver&apos;s badge from Leicester City Council, Wolverhampton City Council, or Oadby & Wigston.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">DBS Check</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Enhanced DBS certificate (preferably on the Update Service) to ensure passenger safety and security.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">Right to Work</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Valid right to work in the UK (UK passport, BRP/visa, EU settled status, or share code).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">Clean Driving Record</h3>
                  <p className="text-slate-600 leading-relaxed">
                    No serious motoring convictions. Maximum 6 penalty points on your licence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">Professional Attitude</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Excellent customer service skills, reliability, and a professional appearance at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0D3E] mb-5 tracking-tight">
              What We Offer
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              As part of the Aylestone Kings team, you&apos;ll receive:
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-5">
              <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2 text-lg">Regular Work & Bookings</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Steady stream of bookings through our established customer base and online booking platform. Work as much or as little as you want.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2 text-lg">24/7 Support</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Round-the-clock support from our operations team. Help is always available when you need it, day or night.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2 text-lg">Own or Company Vehicle</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Use your own licensed vehicle or inquire about company vehicle options. We support both arrangements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2 text-lg">Insurance & Licensing Support</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Guidance and support with insurance requirements and licensing renewals. We help you stay compliant.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2 text-lg">Training & Development</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ongoing training opportunities to improve your skills. Learn about customer service, navigation, and best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2 text-lg">Fair Commission Structure</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Transparent and fair commission rates. Weekly payments directly to your bank account with no hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0D3E] mb-5 tracking-tight">
              Application Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Getting started is simple. Follow these steps to join our team:
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-bold text-[#0F0D3E] mb-3 text-xl">Complete Application Form</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Fill out the application form below with all required information. Make sure all documents are ready for upload.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-bold text-[#0F0D3E] mb-3 text-xl">Document Review</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our team will review your application and verify all submitted documents. This typically takes 2-3 business days.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-bold text-[#0F0D3E] mb-3 text-xl">Interview & Assessment</h3>
                  <p className="text-slate-600 leading-relaxed">
                    If your application is successful, we&apos;ll invite you for an interview and brief assessment to discuss the role.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  4
                </div>
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-bold text-[#0F0D3E] mb-3 text-xl">Onboarding & Training</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Once accepted, you&apos;ll complete onboarding and training to familiarize yourself with our systems and procedures.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  5
                </div>
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-bold text-[#0F0D3E] mb-3 text-xl">Start Driving</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Begin taking bookings and start earning! Our team will be available to support you as you get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0D3E] mb-5 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Common questions about joining Aylestone Kings
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-gradient-to-r from-slate-50 to-white p-7 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">Do I need my own vehicle?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    No, you can use your own licensed vehicle or inquire about company vehicle options. Both arrangements are supported.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-white p-7 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">What are the working hours?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You choose your own hours! We offer full-time and part-time positions with flexible day, night, or both shift options.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-white p-7 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">How much can I earn?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Earnings vary based on hours worked and bookings. We offer competitive rates with a fair commission structure. Weekly payments are made directly to your bank account.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-white p-7 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">What documents do I need?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You&apos;ll need: valid UK driving licence, private hire badge, DBS certificate, proof of address, right to work documentation, and if using your own vehicle - insurance, MOT, and vehicle licence documents.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-white p-7 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">How long does the application process take?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Typically 1-2 weeks from application submission to starting work, depending on document verification and interview scheduling.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-white p-7 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">What areas do you cover?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We primarily serve Leicester and surrounding areas including Aylestone, Leicestershire, and the wider Midlands region.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-white p-7 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-xl flex items-center justify-center shadow-sm">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F0D3E] mb-2.5 text-lg">Is there training provided?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Yes! We provide comprehensive onboarding and ongoing training to help you succeed, including customer service, navigation, and company procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-slate-200/80 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F0D3E] mb-5 tracking-tight">
              Have Questions?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto font-light">
              If you have any questions about joining our team or the application process, don&apos;t hesitate to get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:01162338888"
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                <span>0116 233 8888</span>
              </a>
              <a
                href="mailto:info@aylestone-taxis.co.uk"
                className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-[#06A0A6] text-[#06A0A6] rounded-xl font-semibold hover:bg-[#06A0A6] hover:text-white transition-all duration-300 hover:shadow-lg"
              >
                <Mail className="h-5 w-5" />
                <span>info@aylestone-taxis.co.uk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="driver-application-form" className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <input type="hidden" name="formType" value="driverSignupForm" />
            {/* Personal Information */}
            <div className="p-6 md:p-8 border-b border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-5 w-5 text-[#06A0A6]" />
                <h2 className="text-2xl font-bold text-[#0F0D3E]">Personal Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="full_name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    className={formErrors.full_name ? 'border-red-500' : ''}
                  />
                  {formErrors.full_name && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.full_name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="dob" className="block text-sm font-semibold text-slate-700 mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="dob"
                    name="dob"
                    type="date"
                    required
                    className={formErrors.dob ? 'border-red-500' : ''}
                  />
                  {formErrors.dob && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.dob}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-semibold text-slate-700 mb-2">
                    Mobile <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="07xxxxxxxxx"
                    required
                    className={formErrors.mobile ? 'border-red-500' : ''}
                  />
                  {formErrors.mobile && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.mobile}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={formErrors.email ? 'border-red-500' : ''}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="ni_number" className="block text-sm font-semibold text-slate-700 mb-2">
                    National Insurance Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="ni_number"
                    name="ni_number"
                    type="text"
                    placeholder="QQ123456C"
                    required
                    className={formErrors.ni_number ? 'border-red-500' : ''}
                  />
                  {formErrors.ni_number && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.ni_number}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address_line1" className="block text-sm font-semibold text-slate-700 mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="address_line1"
                    name="address_line1"
                    type="text"
                    required
                    className={formErrors.address_line1 ? 'border-red-500' : ''}
                  />
                  {formErrors.address_line1 && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.address_line1}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-slate-700 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    className={formErrors.city ? 'border-red-500' : ''}
                  />
                  {formErrors.city && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.city}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="postcode" className="block text-sm font-semibold text-slate-700 mb-2">
                    Postcode <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="postcode"
                    name="postcode"
                    type="text"
                    placeholder="LE2 7XX"
                    required
                    className={formErrors.postcode ? 'border-red-500' : ''}
                  />
                  {formErrors.postcode && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.postcode}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="proof_address" className="block text-sm font-semibold text-slate-700 mb-2">
                    Upload Proof of Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="proof_address"
                    name="proof_address"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className={formErrors.proof_address ? 'border-red-500' : ''}
                  />
                  <p className="mt-1 text-xs text-slate-500">Utility bill / bank statement / council letter (≤ 10 MB)</p>
                  {formErrors.proof_address && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.proof_address}</p>
                  )}
                </div>
              </div>

              <div className="mt-6 p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
                <p className="text-sm text-cyan-900">
                  Keep your Driving Licence, DBS and Badge ready for upload below.
                </p>
              </div>
            </div>

            {/* Licence & Compliance */}
            <div className="p-6 md:p-8 border-b border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-5 w-5 text-[#06A0A6]" />
                <h2 className="text-2xl font-bold text-[#0F0D3E]">Licence & Compliance</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="driving_licence_number" className="block text-sm font-semibold text-slate-700 mb-2">
                    Driving Licence Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="driving_licence_number"
                    name="driving_licence_number"
                    type="text"
                    required
                    className={formErrors.driving_licence_number ? 'border-red-500' : ''}
                  />
                  {formErrors.driving_licence_number && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.driving_licence_number}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="dl_issue_date" className="block text-sm font-semibold text-slate-700 mb-2">
                    Licence Issue Date <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="dl_issue_date"
                    name="dl_issue_date"
                    type="date"
                    required
                    className={formErrors.dl_issue_date ? 'border-red-500' : ''}
                  />
                  {formErrors.dl_issue_date && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.dl_issue_date}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="dl_expiry_date" className="block text-sm font-semibold text-slate-700 mb-2">
                    Licence Expiry <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="dl_expiry_date"
                    name="dl_expiry_date"
                    type="date"
                    required
                    className={formErrors.dl_expiry_date ? 'border-red-500' : ''}
                  />
                  {formErrors.dl_expiry_date && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.dl_expiry_date}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="licensing_council" className="block text-sm font-semibold text-slate-700 mb-2">
                    Licensing Council <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="licensing_council"
                    name="licensing_council"
                    required
                    className={`w-full h-9 rounded-md border bg-transparent px-3 py-1 text-sm ${
                      formErrors.licensing_council ? 'border-red-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select</option>
                    <option>Leicester</option>
                    <option>Wolverhampton</option>
                    <option>Oadby & Wigston</option>
                    <option>Other</option>
                  </select>
                  {formErrors.licensing_council && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.licensing_council}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="badge_number" className="block text-sm font-semibold text-slate-700 mb-2">
                    Badge / Licence Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="badge_number"
                    name="badge_number"
                    type="text"
                    required
                    className={formErrors.badge_number ? 'border-red-500' : ''}
                  />
                  {formErrors.badge_number && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.badge_number}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="badge_expiry_date" className="block text-sm font-semibold text-slate-700 mb-2">
                    Badge Expiry <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="badge_expiry_date"
                    name="badge_expiry_date"
                    type="date"
                    required
                    className={formErrors.badge_expiry_date ? 'border-red-500' : ''}
                  />
                  {formErrors.badge_expiry_date && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.badge_expiry_date}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="dbs_number" className="block text-sm font-semibold text-slate-700 mb-2">
                    DBS Certificate Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="dbs_number"
                    name="dbs_number"
                    type="text"
                    required
                    className={formErrors.dbs_number ? 'border-red-500' : ''}
                  />
                  {formErrors.dbs_number && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.dbs_number}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="dbs_issue_date" className="block text-sm font-semibold text-slate-700 mb-2">
                    DBS Issue Date <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="dbs_issue_date"
                    name="dbs_issue_date"
                    type="date"
                    required
                    className={formErrors.dbs_issue_date ? 'border-red-500' : ''}
                  />
                  {formErrors.dbs_issue_date && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.dbs_issue_date}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="dbs_update_service" className="block text-sm font-semibold text-slate-700 mb-2">
                    On DBS Update Service? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="dbs_update_service"
                    name="dbs_update_service"
                    required
                    className={`w-full h-9 rounded-md border bg-transparent px-3 py-1 text-sm ${
                      formErrors.dbs_update_service ? 'border-red-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  {formErrors.dbs_update_service && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.dbs_update_service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="rtw_status" className="block text-sm font-semibold text-slate-700 mb-2">
                    Right to Work Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="rtw_status"
                    name="right_to_work_status"
                    required
                    value={rtwStatus}
                    onChange={(e) => setRtwStatus(e.target.value)}
                    className={`w-full h-9 rounded-md border bg-transparent px-3 py-1 text-sm ${
                      formErrors.rtw_status ? 'border-red-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select</option>
                    <option>UK passport</option>
                    <option>BRP/visa</option>
                    <option>EU settled/pre-settled</option>
                    <option>Share code</option>
                  </select>
                  {formErrors.rtw_status && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.rtw_status}</p>
                  )}
                </div>

                {showShareCode && (
                  <div>
                    <label htmlFor="rtw_share_code" className="block text-sm font-semibold text-slate-700 mb-2">
                      Share Code <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="rtw_share_code"
                      name="rtw_share_code"
                      type="text"
                      placeholder="ABCDEF123"
                      required
                      className={formErrors.rtw_share_code ? 'border-red-500' : ''}
                    />
                    {formErrors.rtw_share_code && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.rtw_share_code}</p>
                    )}
                  </div>
                )}

                {showVisaFields && (
                  <>
                    <div>
                      <label htmlFor="visa_type" className="block text-sm font-semibold text-slate-700 mb-2">
                        Visa Type <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="visa_type"
                        name="visa_type"
                        type="text"
                        placeholder="Skilled Worker, etc."
                        required
                        className={formErrors.visa_type ? 'border-red-500' : ''}
                      />
                      {formErrors.visa_type && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.visa_type}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="visa_expiry_date" className="block text-sm font-semibold text-slate-700 mb-2">
                        Visa Expiry <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="visa_expiry_date"
                        name="visa_expiry_date"
                        type="date"
                        required
                        className={formErrors.visa_expiry_date ? 'border-red-500' : ''}
                      />
                      {formErrors.visa_expiry_date && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.visa_expiry_date}</p>
                      )}
                    </div>
                  </>
                )}

                <div className="md:col-span-2">
                  <label htmlFor="upload_driving_licence_front" className="block text-sm font-semibold text-slate-700 mb-2">
                    Upload Driving Licence (Front) <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="upload_driving_licence_front"
                    name="upload_driving_licence_front"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className={formErrors.upload_driving_licence_front ? 'border-red-500' : ''}
                  />
                  {formErrors.upload_driving_licence_front && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.upload_driving_licence_front}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="upload_driving_licence_back" className="block text-sm font-semibold text-slate-700 mb-2">
                    Upload Driving Licence (Back) <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="upload_driving_licence_back"
                    name="upload_driving_licence_back"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className={formErrors.upload_driving_licence_back ? 'border-red-500' : ''}
                  />
                  {formErrors.upload_driving_licence_back && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.upload_driving_licence_back}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="upload_badge_licence" className="block text-sm font-semibold text-slate-700 mb-2">
                    Upload Private Hire Badge <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="upload_badge_licence"
                    name="upload_badge_licence"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className={formErrors.upload_badge_licence ? 'border-red-500' : ''}
                  />
                  {formErrors.upload_badge_licence && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.upload_badge_licence}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="upload_dbs" className="block text-sm font-semibold text-slate-700 mb-2">
                    Upload DBS Certificate <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="upload_dbs"
                    name="upload_dbs"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className={formErrors.upload_dbs ? 'border-red-500' : ''}
                  />
                  {formErrors.upload_dbs && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.upload_dbs}</p>
                  )}
                </div>

                {requiresRTWUpload && (
                  <div className="md:col-span-2">
                    <label htmlFor="upload_rtw_proof" className="block text-sm font-semibold text-slate-700 mb-2">
                      Upload Right to Work Proof <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="upload_rtw_proof"
                      name="upload_rtw_proof"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      className={formErrors.upload_rtw_proof ? 'border-red-500' : ''}
                    />
                    <p className="mt-1 text-xs text-slate-500">Passport photo page, BRP, or share‑code PDF</p>
                    {formErrors.upload_rtw_proof && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.upload_rtw_proof}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Vehicle Section */}
            <div className="p-6 md:p-8 border-b border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <Car className="h-5 w-5 text-[#06A0A6]" />
                <h2 className="text-2xl font-bold text-[#0F0D3E]">Vehicle Information</h2>
              </div>
              
              <div className="mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id="owns_vehicle"
                    checked={ownsVehicle}
                    onChange={(e) => setOwnsVehicle(e.target.checked)}
                    className="w-4 h-4 text-[#06A0A6] rounded border-slate-300 focus:ring-[#06A0A6]"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    I will use my own licensed vehicle
                  </span>
                </label>
              </div>

              {ownsVehicle && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="vrm" className="block text-sm font-semibold text-slate-700 mb-2">
                      Vehicle Registration (VRM) <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="vrm"
                      name="vrm"
                      type="text"
                      placeholder="AB12 CDE"
                      required={ownsVehicle}
                      className={formErrors.vrm ? 'border-red-500' : ''}
                    />
                    {formErrors.vrm && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.vrm}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="make" className="block text-sm font-semibold text-slate-700 mb-2">
                      Make <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="make"
                      name="make"
                      type="text"
                      required={ownsVehicle}
                      className={formErrors.make ? 'border-red-500' : ''}
                    />
                    {formErrors.make && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.make}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="model" className="block text-sm font-semibold text-slate-700 mb-2">
                      Model <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="model"
                      name="model"
                      type="text"
                      required={ownsVehicle}
                      className={formErrors.model ? 'border-red-500' : ''}
                    />
                    {formErrors.model && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.model}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="year" className="block text-sm font-semibold text-slate-700 mb-2">
                      Year of Registration <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="year"
                      name="year"
                      type="number"
                      min="2008"
                      max="2099"
                      required={ownsVehicle}
                      className={formErrors.year ? 'border-red-500' : ''}
                    />
                    {formErrors.year && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.year}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="colour" className="block text-sm font-semibold text-slate-700 mb-2">
                      Colour <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="colour"
                      name="colour"
                      type="text"
                      required={ownsVehicle}
                      className={formErrors.colour ? 'border-red-500' : ''}
                    />
                    {formErrors.colour && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.colour}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="plate_expiry_date" className="block text-sm font-semibold text-slate-700 mb-2">
                      Plate Expiry <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="plate_expiry_date"
                      name="plate_expiry_date"
                      type="date"
                      required={ownsVehicle}
                      className={formErrors.plate_expiry_date ? 'border-red-500' : ''}
                    />
                    {formErrors.plate_expiry_date && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.plate_expiry_date}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="insurance_expiry_date" className="block text-sm font-semibold text-slate-700 mb-2">
                      Insurance Expiry <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="insurance_expiry_date"
                      name="insurance_expiry_date"
                      type="date"
                      required={ownsVehicle}
                      className={formErrors.insurance_expiry_date ? 'border-red-500' : ''}
                    />
                    {formErrors.insurance_expiry_date && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.insurance_expiry_date}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mot_expiry_date" className="block text-sm font-semibold text-slate-700 mb-2">
                      MOT Expiry <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="mot_expiry_date"
                      name="mot_expiry_date"
                      type="date"
                      required={ownsVehicle}
                      className={formErrors.mot_expiry_date ? 'border-red-500' : ''}
                    />
                    {formErrors.mot_expiry_date && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.mot_expiry_date}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="upload_insurance_certificate" className="block text-sm font-semibold text-slate-700 mb-2">
                      Upload Insurance Certificate <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="upload_insurance_certificate"
                      name="upload_insurance_certificate"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required={ownsVehicle}
                      className={formErrors.upload_insurance_certificate ? 'border-red-500' : ''}
                    />
                    {formErrors.upload_insurance_certificate && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.upload_insurance_certificate}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="upload_mot" className="block text-sm font-semibold text-slate-700 mb-2">
                      Upload MOT Certificate <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="upload_mot"
                      name="upload_mot"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required={ownsVehicle}
                      className={formErrors.upload_mot ? 'border-red-500' : ''}
                    />
                    {formErrors.upload_mot && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.upload_mot}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="upload_plate" className="block text-sm font-semibold text-slate-700 mb-2">
                      Upload Plate Photo <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="upload_plate"
                      name="upload_plate"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required={ownsVehicle}
                      className={formErrors.upload_plate ? 'border-red-500' : ''}
                    />
                    {formErrors.upload_plate && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.upload_plate}</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Payment & Work Preferences */}
            <div className="p-6 md:p-8 border-b border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-5 w-5 text-[#06A0A6]" />
                <h2 className="text-2xl font-bold text-[#0F0D3E]">Payment & Work Preferences</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="account_holder" className="block text-sm font-semibold text-slate-700 mb-2">
                    Account Holder Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="account_holder"
                    name="account_holder"
                    type="text"
                    required
                    className={formErrors.account_holder ? 'border-red-500' : ''}
                  />
                  {formErrors.account_holder && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.account_holder}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="sort_code" className="block text-sm font-semibold text-slate-700 mb-2">
                    Sort Code <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="sort_code"
                    name="sort_code"
                    type="text"
                    placeholder="20-00-00"
                    required
                    className={formErrors.sort_code ? 'border-red-500' : ''}
                  />
                  {formErrors.sort_code && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.sort_code}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="account_number" className="block text-sm font-semibold text-slate-700 mb-2">
                    Account Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="account_number"
                    name="account_number"
                    type="text"
                    placeholder="12345678"
                    required
                    className={formErrors.account_number ? 'border-red-500' : ''}
                  />
                  {formErrors.account_number && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.account_number}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="work_type" className="block text-sm font-semibold text-slate-700 mb-2">
                    Work Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="work_type"
                    name="work_type"
                    required
                    className={`w-full h-9 rounded-md border bg-transparent px-3 py-1 text-sm ${
                      formErrors.work_type ? 'border-red-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select</option>
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                  </select>
                  {formErrors.work_type && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.work_type}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferred_shifts" className="block text-sm font-semibold text-slate-700 mb-2">
                    Preferred Shift <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="preferred_shifts"
                    name="preferred_shifts"
                    required
                    className={`w-full h-9 rounded-md border bg-transparent px-3 py-1 text-sm ${
                      formErrors.preferred_shifts ? 'border-red-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select</option>
                    <option>Day</option>
                    <option>Night</option>
                    <option>Both</option>
                  </select>
                  {formErrors.preferred_shifts && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.preferred_shifts}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="vehicle_option" className="block text-sm font-semibold text-slate-700 mb-2">
                    Vehicle Option <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="vehicle_option"
                    name="vehicle_option"
                    required
                    className={`w-full h-9 rounded-md border bg-transparent px-3 py-1 text-sm ${
                      formErrors.vehicle_option ? 'border-red-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select</option>
                    <option>Own car</option>
                    <option>Company car</option>
                  </select>
                  {formErrors.vehicle_option && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.vehicle_option}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Declarations */}
            <div className="p-6 md:p-8 border-b border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="h-5 w-5 text-[#06A0A6]" />
                <h2 className="text-2xl font-bold text-[#0F0D3E]">Declarations</h2>
              </div>
              
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="decl_accuracy"
                    name="decl_accuracy"
                    required
                    className="mt-1 w-4 h-4 text-[#06A0A6] rounded border-slate-300 focus:ring-[#06A0A6]"
                  />
                  <span className="text-sm text-slate-700">
                    I confirm all details and documents are true and valid.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="decl_verification"
                    name="decl_verification"
                    required
                    className="mt-1 w-4 h-4 text-[#06A0A6] rounded border-slate-300 focus:ring-[#06A0A6]"
                  />
                  <span className="text-sm text-slate-700">
                    I authorise Aylestone Taxis to verify my driving licence, DBS and right‑to‑work.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="decl_gdpr"
                    name="decl_gdpr"
                    required
                    className="mt-1 w-4 h-4 text-[#06A0A6] rounded border-slate-300 focus:ring-[#06A0A6]"
                  />
                  <span className="text-sm text-slate-700">
                    I consent to my data being processed for driver onboarding (GDPR).
                  </span>
                </label>

                {formErrors.declarations && (
                  <p className="text-sm text-red-500">{formErrors.declarations}</p>
                )}
              </div>
            </div>

            {/* Submit Section */}
            <div className="p-6 md:p-8 bg-slate-50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-600">
                  Accepted files: PDF, JPG, PNG (max 10 MB each)
                </p>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] hover:from-[#0F0D3E] hover:to-[#06A0A6] text-white px-8 py-6 text-base font-semibold"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Application'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

