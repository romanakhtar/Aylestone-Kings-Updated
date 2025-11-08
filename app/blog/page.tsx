import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react"
import { siteData, contactInfo } from "@/lib/data"

export const metadata = {
  title: "Blog | Leicester Taxi Service | Aylestone Taxis",
  description: "Read the latest blog posts from Aylestone Kings. Travel tips, Leicester taxi guides, airport transfer advice, and transportation insights for Leicester and Leicestershire residents.",
}

export default function BlogPage() {
  const blogs = siteData.blogPage.blogs

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0F0D3E] via-[#2E3C44] to-[#06A0A6]/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/taxi-bridge-background.jpg"
            alt="Aylestone Kings blog background - Leicester taxi service blog featuring travel tips and transportation guides"
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
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
              <BookOpen className="h-4 w-4 text-[#06A0A6] mr-3" />
              {siteData.blogPage.title}
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Aylestone Kings <span className="text-[#06A0A6] drop-shadow-lg">Blog</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10 font-light">
              {siteData.blogPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl shadow-lg border border-[#E4E4E4] overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Blog Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={`${blog.title} - Aylestone Kings Leicester taxi service blog post about ${blog.category.toLowerCase()}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#06A0A6] text-white text-sm font-semibold rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  {/* Date and Author */}
                  <div className="flex items-center gap-4 text-sm text-[#2E3C44] mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#06A0A6]" />
                      <span>{new Date(blog.date).toLocaleDateString('en-GB', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-[#06A0A6]" />
                      <span>{blog.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-[#0F0D3E] mb-4 group-hover:text-[#06A0A6] transition-colors duration-200">
                    {blog.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[#2E3C44] mb-6 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 text-[#06A0A6] font-semibold hover:text-[#0F0D3E] transition-colors duration-200 group/link"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0F0D3E] to-[#2E3C44] rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Book Your Ride?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the reliable, professional taxi service that Leicester locals trust. Book your ride today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                  Book Online Now
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
              <a href={`tel:${contactInfo.phone}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white hover:text-[#06A0A6]">
                  Call {contactInfo.phone}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

