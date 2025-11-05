import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, ArrowRight, BookOpen } from "lucide-react"
import { siteData, contactInfo } from "@/lib/data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return siteData.blogPage.blogs.map((blog) => ({
    slug: blog.id,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = siteData.blogPage.blogs.find((b) => b.id === params.slug)
  
  if (!blog) {
    return {
      title: "Blog Post Not Found - Aylestone Kings",
    }
  }

  return {
    title: `${blog.title} - Aylestone Kings Blog`,
    description: blog.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = siteData.blogPage.blogs.find((b) => b.id === params.slug)

  if (!blog) {
    notFound()
  }

  const currentIndex = siteData.blogPage.blogs.findIndex((b) => b.id === params.slug)
  const nextBlog = currentIndex < siteData.blogPage.blogs.length - 1 
    ? siteData.blogPage.blogs[currentIndex + 1] 
    : null
  const prevBlog = currentIndex > 0 
    ? siteData.blogPage.blogs[currentIndex - 1] 
    : null

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#0F0D3E] via-[#2E3C44] to-[#06A0A6]/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D3E]/90 via-[#0F0D3E]/80 to-[#06A0A6]/30"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>

          <div className="text-center">
            {/* Category Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <BookOpen className="h-4 w-4 text-[#06A0A6] mr-2" />
              {blog.category}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm mb-8">
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
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="relative h-96 mb-12 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none">
            <div 
              className="blog-content text-[#2E3C44] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
              }}
            />
          </article>
        </div>
      </section>

      {/* Navigation Between Posts */}
      <section className="py-12 bg-[#E4E4E4] border-y border-[#E4E4E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Post */}
            {prevBlog ? (
              <Link
                href={`/blog/${prevBlog.id}`}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-[#E4E4E4]"
              >
                <div className="flex items-center gap-2 text-[#06A0A6] text-sm font-semibold mb-3">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
                  <span>Previous Post</span>
                </div>
                <h3 className="text-lg font-bold text-[#0F0D3E] group-hover:text-[#06A0A6] transition-colors duration-200">
                  {prevBlog.title}
                </h3>
              </Link>
            ) : (
              <div className="bg-white p-6 rounded-xl shadow-md border border-[#E4E4E4] opacity-50">
                <div className="flex items-center gap-2 text-[#2E3C44] text-sm font-semibold mb-3">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous Post</span>
                </div>
                <p className="text-[#2E3C44]">No previous posts</p>
              </div>
            )}

            {/* Next Post */}
            {nextBlog ? (
              <Link
                href={`/blog/${nextBlog.id}`}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-[#E4E4E4] text-right md:text-left"
              >
                <div className="flex items-center justify-end md:justify-start gap-2 text-[#06A0A6] text-sm font-semibold mb-3">
                  <span>Next Post</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
                <h3 className="text-lg font-bold text-[#0F0D3E] group-hover:text-[#06A0A6] transition-colors duration-200">
                  {nextBlog.title}
                </h3>
              </Link>
            ) : (
              <div className="bg-white p-6 rounded-xl shadow-md border border-[#E4E4E4] opacity-50 text-right md:text-left">
                <div className="flex items-center justify-end md:justify-start gap-2 text-[#2E3C44] text-sm font-semibold mb-3">
                  <span>Next Post</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
                <p className="text-[#2E3C44]">No more posts</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0F0D3E] to-[#2E3C44] rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Aylestone Kings?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your ride today and experience the reliable, professional taxi service that Leicester locals trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={contactInfo.booking.online}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-[#06A0A6] hover:bg-[#0F0D3E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl">
                  Book Online Now
                  <ArrowRight className="h-5 w-5" />
                </button>
              </a>
              <a href={`tel:${contactInfo.phone}`} className="inline-block">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white hover:text-[#06A0A6]">
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

