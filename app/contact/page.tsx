"use client";

import Footer from "@/components/footer";
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
export default function ContactPage() {
 const [state, handleSubmit] = useForm("xgvlbekp");

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
 <Footer />
 </div>
 );
 }
 return (
 <div className="min-h-screen bg-white">
 {/* Hero Section */}
 <section className="relative py-20 ">
 {/* Background Image */}
 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center">
 <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
 Contact Us
 </h1>
 <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
 Get in touch with Aylestone Kings for all your transportation
 needs 24/7.
 </p>
 </div>
 </div>
 </section>
 {/* Contact Information */}
 <section className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 {/* Contact Form */}
 <div>
 <h2 className="text-3xl font-bold text-gray-900 mb-8">
 Send us a Message
 </h2>
 <form onSubmit={handleSubmit} className="space-y-6">
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
 {/* Contact Details */}
 <div>
 <h2 className="text-3xl font-bold text-gray-900 mb-8">
 Get in Touch
 </h2>
 <div className="space-y-8">
 <div className="flex items-start space-x-4">
 <div className="bg-blue-50 p-3 rounded-lg">
 <MapPin className="h-6 w-6 text-blue-600" />
 </div>
 <div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">
 Address
 </h3>
 <p className="text-gray-600">
 {contactInfo.address.street}
 <br />
 {contactInfo.address.city}, {contactInfo.address.postcode}
 <br />
 {contactInfo.address.country}
 </p>
 </div>
 </div>

 <div className="flex items-start space-x-4">
 <div className="bg-blue-50 p-3 rounded-lg">
 <Phone className="h-6 w-6 text-blue-600" />
 </div>
 <div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">
 Phone
 </h3>
 <p className="text-gray-600">{contactInfo.phone}</p>
 <p className="text-sm text-gray-500">Available 24/7</p>
 </div>
 </div>

 <div className="flex items-start space-x-4">
 <div className="bg-blue-50 p-3 rounded-lg">
 <MessageCircle className="h-6 w-6 text-blue-600" />
 </div>
 <div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">
 WhatsApp
 </h3>
 <p className="text-gray-600">{contactInfo.whatsapp}</p>
 <p className="text-sm text-gray-500">
 Quick response via WhatsApp
 </p>
 </div>
 </div>

 <div className="flex items-start space-x-4">
 <div className="bg-blue-50 p-3 rounded-lg">
 <Mail className="h-6 w-6 text-blue-600" />
 </div>
 <div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">
 Email
 </h3>
 <p className="text-gray-600">{contactInfo.email}</p>
 <p className="text-sm text-gray-500">
 We'll respond within 24 hours
 </p>
 </div>
 </div>

 <div className="flex items-start space-x-4">
 <div className="bg-blue-50 p-3 rounded-lg">
 <Globe className="h-6 w-6 text-blue-600" />
 </div>
 <div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">
 Book Online
 </h3>
 <a
 href={contactInfo.booking.online}
 target="_blank"
 rel="noopener noreferrer"
 className="text-blue-600 hover:text-blue-800 underline"
 >
 {contactInfo.booking.online}
 </a>
 <p className="text-sm text-gray-500">
 Instant online booking available
 </p>
 </div>
 </div>

 <div className="flex items-start space-x-4">
 <div className="bg-blue-50 p-3 rounded-lg">
 <Clock className="h-6 w-6 text-blue-600" />
 </div>
 <div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">
 Business Hours
 </h3>
 <div className="text-gray-600 space-y-1">
 <p>Monday - Sunday: 24/7</p>
 <p className="text-sm text-gray-500">
 Customer service available around the clock
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
 <section className="py-16 bg-gray-50 border-y border-gray-100">
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

 <Footer />
 </div>
 );
}
