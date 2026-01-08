"use client";

 
import { Button } from "@/components/ui/button";
import {
 MapPin,
 Phone,
 Mail,
 Clock,
 MessageCircle,
 Globe,
 Shield,
 Users,
} from "lucide-react";
import { contactInfo } from "@/lib/data";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Note: Metadata cannot be exported from client components
// This page's metadata should be handled in a layout or parent component
export default function ContactPage() {
 const [state, handleSubmit] = useForm("myzdazng");
 const hasTracked = useRef(false);

 // Track successful form submission (only once)
 useEffect(() => {
   if (state.succeeded && !hasTracked.current && typeof window !== 'undefined' && window.dataLayer) {
     hasTracked.current = true;
     window.dataLayer.push({
       event: 'lead_contact_form_submit',
       lead_type: 'contact_form'
     })
   }
 }, [state.succeeded]);

 if (state.succeeded) {
 return (
 <div className="min-h-screen bg-white">
 <section className="relative py-20">
 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center">
 <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
 Thank You!
 </h1>
 <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed mb-8">
 Your message has been sent successfully. We'll get back to you
 within 24 hours.
 </p>
 <Button
 onClick={() => window.location.reload()}
 className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-3"
 >
 Send Another Message
 </Button>
 </div>
 </div>
 </section>
 
 </div>
 );
 }
 return (
 <div className="min-h-screen bg-white">
 {/* Hero Section */}
 <section className="relative py-32 bg-gradient-to-br from-[#0F0D3E] via-[#2E3C44] to-[#06A0A6]/20 overflow-hidden">
 <div className="absolute inset-0 z-0">
 <Image
   src="/taxi-bridge-background.jpg"
   alt="Aylestone Kings contact page background - Leicester taxi service contact information"
   fill
   sizes="100vw"
   className="object-cover opacity-20"
   priority
 />
 <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D3E]/90 via-[#0F0D3E]/80 to-[#06A0A6]/30"></div>
 </div>
 
 {/* Decorative Elements */}
 <div className="absolute top-0 left-0 w-32 h-32 bg-[#06A0A6]/20 rounded-full blur-3xl"></div>
 <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#EF5B6A]/20 rounded-full blur-3xl"></div>
 
 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center">
 <div className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-semibold uppercase tracking-wider mb-8 shadow-xl">
   <MessageCircle className="h-3.5 w-3.5 text-[#06A0A6] mr-2.5" />
   Get In Touch
 </div>
 <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
   Contact Us
 </h1>
 <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light mb-4">
   Get in touch with Aylestone Kings for all your transportation needs
 </p>
 <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
   Available 24/7 to serve you with reliable and professional taxi services
 </p>
 </div>
 </div>
 </section>

 {/* Prominent Contact Information Section */}
 <section className="py-16 bg-gradient-to-br from-[#06A0A6]/5 via-white to-[#0F0D3E]/5">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-[#0F0D3E] mb-4">
 Contact Information
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Reach out to us through any of these channels. We're available 24/7 to assist you.
 </p>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
 {/* Phone Card */}
 <a
 href={`tel:${contactInfo.phone}`}
 className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#06A0A6] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
 onClick={(e) => {
   if (typeof window !== 'undefined' && window.dataLayer) {
     window.dataLayer.push({
       event: 'lead_call_click',
       lead_type: 'call'
     })
   }
 }}
 >
 <div className="w-16 h-16 bg-[#06A0A6]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#06A0A6]/20 transition-colors">
   <Phone className="h-8 w-8 text-[#06A0A6] group-hover:scale-110 transition-transform" />
 </div>
 <h3 className="text-lg font-bold text-[#0F0D3E] mb-2 text-center">
   Phone
 </h3>
 <p className="text-xl font-semibold text-[#06A0A6] text-center mb-1 group-hover:text-[#0F0D3E] transition-colors">
   {contactInfo.phone}
 </p>
 <p className="text-sm text-gray-500 text-center">
   Available 24/7
 </p>
 </a>

 {/* WhatsApp Card */}
 <a
 href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
 target="_blank"
 rel="noopener noreferrer"
 className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#06A0A6] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
 >
 <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
   <MessageCircle className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform" />
 </div>
 <h3 className="text-lg font-bold text-[#0F0D3E] mb-2 text-center">
   WhatsApp
 </h3>
 <p className="text-xl font-semibold text-green-600 text-center mb-1 group-hover:text-green-700 transition-colors">
   {contactInfo.whatsapp}
 </p>
 <p className="text-sm text-gray-500 text-center">
   Quick response
 </p>
 </a>

 {/* Email Card */}
 <a
 href={`mailto:${contactInfo.email}`}
 className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#06A0A6] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
 >
 <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
   <Mail className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
 </div>
 <h3 className="text-lg font-bold text-[#0F0D3E] mb-2 text-center">
   Email
 </h3>
 <p className="text-base font-semibold text-blue-600 text-center mb-1 group-hover:text-blue-700 transition-colors break-words">
   {contactInfo.email}
 </p>
 <p className="text-sm text-gray-500 text-center">
   Response within 24h
 </p>
 </a>

 {/* Address Card */}
 <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100">
 <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
   <MapPin className="h-8 w-8 text-purple-600" />
 </div>
 <h3 className="text-lg font-bold text-[#0F0D3E] mb-2 text-center">
   Address
 </h3>
 <p className="text-sm text-gray-700 text-center leading-relaxed">
   {contactInfo.address.street}
   <br />
   {contactInfo.address.city}, {contactInfo.address.postcode}
   <br />
   {contactInfo.address.country}
 </p>
 </div>
 </div>

 {/* Online Booking Card - Full Width */}
 <div className="bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] p-8 rounded-2xl shadow-xl text-center">
 <div className="flex items-center justify-center mb-4">
   <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
     <Globe className="h-8 w-8 text-white" />
   </div>
 </div>
 <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">Book Online Instantly</h3>
 <p className="text-lg mb-4 text-white font-medium leading-relaxed drop-shadow-md">
   Reserve your ride in seconds with our online booking system
 </p>
 <a
   href={contactInfo.booking.online}
   target="_blank"
   rel="noopener noreferrer"
   className="inline-block bg-white text-[#06A0A6] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
 >
   Book Now →
 </a>
 </div>
 </div>
 </section>

 {/* Contact Form Section */}
 <section className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 {/* Contact Form */}
 <div>
 <h2 className="text-3xl font-bold text-gray-900 mb-8">
 Send us a Message
 </h2>
<form onSubmit={handleSubmit} className="space-y-6">
<input type="hidden" name="formType" value="contactForm" />
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label
 htmlFor="firstName"
 className="block text-sm font-medium text-gray-700 mb-2"
 >
 First Name
 </label>
 <input
 type="text"
 id="firstName"
 name="firstName"
 required
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
 placeholder="Your first name"
 />
 <ValidationError
 prefix="First Name"
 field="firstName"
 errors={state.errors}
 className="text-red-500 text-sm mt-1"
 />
 </div>
 <div>
 <label
 htmlFor="lastName"
 className="block text-sm font-medium text-gray-700 mb-2"
 >
 Last Name
 </label>
 <input
 type="text"
 id="lastName"
 name="lastName"
 required
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
 placeholder="Your last name"
 />
 <ValidationError
 prefix="Last Name"
 field="lastName"
 errors={state.errors}
 className="text-red-500 text-sm mt-1"
 />
 </div>
 </div>
 <div>
 <label
 htmlFor="email"
 className="block text-sm font-medium text-gray-700 mb-2"
 >
 Email Address
 </label>
 <input
 type="email"
 id="email"
 name="email"
 required
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
 placeholder="your.email@example.com"
 />
 <ValidationError
 prefix="Email"
 field="email"
 errors={state.errors}
 className="text-red-500 text-sm mt-1"
 />
 </div>
 <div>
 <label
 htmlFor="phone"
 className="block text-sm font-medium text-gray-700 mb-2"
 >
 Phone Number
 </label>
 <input
 type="tel"
 id="phone"
 name="phone"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
 placeholder="Your phone number"
 />
 <ValidationError
 prefix="Phone"
 field="phone"
 errors={state.errors}
 className="text-red-500 text-sm mt-1"
 />
 </div>
 <div>
 <label
 htmlFor="subject"
 className="block text-sm font-medium text-gray-700 mb-2"
 >
 Subject
 </label>
 <input
 type="text"
 id="subject"
 name="subject"
 required
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
 placeholder="What is this regarding?"
 />
 <ValidationError
 prefix="Subject"
 field="subject"
 errors={state.errors}
 className="text-red-500 text-sm mt-1"
 />
 </div>
 <div>
 <label
 htmlFor="message"
 className="block text-sm font-medium text-gray-700 mb-2"
 >
 Message
 </label>
 <textarea
 id="message"
 name="message"
 rows={6}
 required
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
 placeholder="Tell us how we can help you..."
 ></textarea>
 <ValidationError
 prefix="Message"
 field="message"
 errors={state.errors}
 className="text-red-500 text-sm mt-1"
 />
 </div>
 <Button
 type="submit"
 disabled={state.submitting}
 className="w-full bg-[#06A0A6] hover:bg-[#0F0D3E] text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed"
 >
 {state.submitting ? "Sending Message..." : "Send Message"}
 </Button>
 {state.errors && (
 <div className="text-red-500 text-sm text-center">
 There was an error sending your message. Please try again.
 </div>
 )}
 </form>
 </div>
 {/* Additional Contact Details */}
 <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
 <h2 className="text-2xl font-bold text-[#0F0D3E] mb-6">
 Business Hours & Additional Info
 </h2>
 <div className="space-y-6">
 <div className="flex items-start space-x-4">
 <div className="bg-[#06A0A6]/10 p-3 rounded-lg flex-shrink-0">
 <Clock className="h-6 w-6 text-[#06A0A6]" />
 </div>
 <div>
 <h3 className="text-lg font-semibold text-[#0F0D3E] mb-2">
 Business Hours
 </h3>
 <div className="text-gray-700 space-y-1">
 <p className="font-medium">Monday - Sunday: 24/7</p>
 <p className="text-sm text-gray-600">
 Customer service available around the clock for your convenience
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Additional Trust Section */}
 <section className="py-16 bg-gray-50 bg-gradient-to-r from-[#06A0A6]/10 to-transparent border-y border-gray-100">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Trust & Security
 </h2>
 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
 Your safety and trust are our top priorities. We maintain the
 highest standards of licensing and security.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {/* Leicester City Council */}
 <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <Shield className="h-8 w-8 text-blue-600" />
 </div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">
 Leicester Licensed
 </h3>
 <p className="text-gray-600 text-sm">
 Fully licensed by Leicester City Council
 </p>
 </div>

 {/* Wolverhampton City Council */}
 <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <Shield className="h-8 w-8 text-green-600" />
 </div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">
 Wolverhampton Licensed
 </h3>
 <p className="text-gray-600 text-sm">
 Licensed by Wolverhampton City Council
 </p>
 </div>

 {/* DBS Checked */}
 <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
 <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <Users className="h-8 w-8 text-purple-600" />
 </div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">
 DBS Checked
 </h3>
 <p className="text-gray-600 text-sm">
 All drivers are DBS checked for your safety
 </p>
 </div>

 {/* 24/7 Service */}
 <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <Clock className="h-8 w-8 text-orange-600" />
 </div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">
 24/7 Service
 </h3>
 <p className="text-gray-600 text-sm">
 Round-the-clock availability for your convenience
 </p>
 </div>
 </div>
 </div>
 </section>

       
 </div>
 );
}
