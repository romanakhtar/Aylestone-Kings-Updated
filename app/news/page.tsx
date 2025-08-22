"use client"

import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { heroNews, newsArticles, newsPageContent } from "@/lib/news-data"
import { useState } from "react"
import Logo from "@/components/logo"

export default function NewsPage() {
  const [showAllArticles, setShowAllArticles] = useState(false)
  
  // Initially show 3 articles, then 9 when expanded
  const displayedArticles = showAllArticles ? newsArticles : newsArticles.slice(0, 3)
  const hasMoreArticles = newsArticles.length > 3

  const handleToggleArticles = () => {
    setShowAllArticles(!showAllArticles)
  }

  return (
    <div className="min-h-screen bg-white">

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                {/* Logo */}
               
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{heroNews.title}</h1>
                <p className="text-gray-600 mb-8">{heroNews.excerpt}</p>
                <Link
                  href={heroNews.readMoreLink}
                  className="inline-flex items-center px-6 py-3 bg-[#06A0A6] text-white font-medium rounded-lg hover:bg-[#0F0D3E] transition-colors"
                >
                  Read More
                </Link>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src={heroNews.image || "/placeholder.svg"} alt={heroNews.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {displayedArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <Link href="#" className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {hasMoreArticles && (
              <div className="text-center">
                <button
                  onClick={handleToggleArticles}
                  className="inline-flex items-center px-6 py-3 bg-[#06A0A6] text-white font-medium rounded-lg hover:bg-[#0F0D3E] transition-colors"
                >
                  {showAllArticles ? "Show Less" : "Load More"}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#06A0A6] to-[#0F0D3E] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{newsPageContent.ctaSection.title}</h2>
            <Link
              href={newsPageContent.ctaSection.buttonLink}
              className="inline-flex items-center px-6 py-3 bg-white text-[#06A0A6] font-medium rounded-lg hover:bg-[#E4E4E4] transition-colors"
            >
              {newsPageContent.ctaSection.buttonText}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
