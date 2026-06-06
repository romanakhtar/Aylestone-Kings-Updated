"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "@/lib/icons"
import { siteData } from "@/lib/data"

export default function HomeReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const reviews = siteData.homepage.customerReviews.reviews
  const totalSlides = reviews.length

  useEffect(() => {
    if (!isAutoPlaying) return

    const isMobile = window.innerWidth <= 768
    const intervalTime = isMobile ? 8000 : 5000

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-[#E4E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F0D3E] mb-6">{siteData.homepage.customerReviews.title}</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` } as React.CSSProperties}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-cyan-500/20 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-cyan-500/30 transform transition-transform duration-300 hover:scale-105">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#06A0A6] to-[#0F0D3E] rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                      </div>

                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-[#06A0A6] text-[#06A0A6]" />
                        ))}
                      </div>

                      <p className="text-[#0F0D3E] text-base md:text-lg mb-6 leading-relaxed italic text-center font-medium">
                        &ldquo;{review.text}&rdquo;
                      </p>

                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#06A0A6]/20 to-[#0F0D3E]/20 rounded-full flex items-center justify-center mb-3">
                          <span className="text-[#06A0A6] font-bold text-lg">
                            {review.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <h4 className="font-bold text-[#0F0D3E] text-base">{review.author}</h4>
                        <p className="text-xs text-[#0F0D3E] bg-[#06A0A6]/20 px-3 py-1 rounded-full">{review.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110 z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-[#0F0D3E]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-[transform,opacity] duration-200 hover:scale-110 z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-[#0F0D3E]" />
          </button>

          <div className="flex justify-center mt-8 gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full origin-center transition-transform duration-200 ${
                  index === currentSlide ? "bg-[#06A0A6] scale-x-[2.67]" : "bg-gray-300 scale-x-100 hover:opacity-80"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                isAutoPlaying ? "bg-[#06A0A6] text-white" : "bg-gray-200 text-gray-700 hover:opacity-90"
              }`}
            >
              {isAutoPlaying ? "Pause" : "Play"} Auto-scroll
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
