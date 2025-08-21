export interface NewsArticle {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  slug?: string
}

export interface HeroNews {
  title: string
  excerpt: string
  image: string
  readMoreLink: string
}

export const heroNews: HeroNews = {
  title: "Just one step away from another Wembley final",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you're going to St. James' Park or to Newcastle to watch their semi-final second leg against Arsenal, pre-book now with Aylestone Kings at the NEW 10% discount on your journey. 🏆",
  image: "/news-hero-wembley.jpg",
  readMoreLink: "#",
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Aylestone Kings providing safe and reliable taxi services to the people.",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you're going to St. James' Park or to Newcastle to watch their semi-final second leg against Arsenal, pre-book now with Aylestone Kings at the NEW 10% discount on your journey.",
    image: "/news-hero-wembley.jpg",
    date: "Feb 15, 2024",
    category: "Sports",
    slug: "wembley-final",
  },
  {
    id: 2,
    title: "Big David is returning to Newcastle! 😊",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Going to the Utilita Arena Newcastle to see him live Wednesday? Pre-book your journey with Aylestone Kings and save 10%.",
    image: "/news-david.jpg",
    date: "Feb 12, 2024",
    category: "Entertainment",
    slug: "david-newcastle",
  },
  {
    id: 3,
    title: "Thinking ahead to book your Valentine's plans?",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At Aylestone Kings, if you pre-book your other half to breathtaking views of our city, as well as their fabulous dining and cocktails.",
    image: "/news-valentine.jpg",
    date: "Feb 10, 2024",
    category: "Special Offers",
    slug: "valentine-plans",
  },
  {
    id: 4,
    title: "Calling all pop-punk lovers! 🎸",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you're going to see Neck Deep at the Newcastle University, you can book your journey to the city centre with Aylestone Kings and save 10%.",
    image: "/news-concert.jpg",
    date: "Jan 25, 2024",
    category: "Entertainment",
    slug: "neck-deep-concert",
  },
  {
    id: 5,
    title: "Will Sunderland extend their unbeaten run at the Stadium of Light?",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you're heading to watch Sunderland at the stadium, you can book your journey with Aylestone Kings and save 10%.",
    image: "/news-sunderland.jpg",
    date: "Jan 20, 2024",
    category: "Sports",
    slug: "sunderland-unbeaten",
  },
  {
    id: 6,
    title: "Going to see Sunderland take on Leeds at the Stadium of Light this Friday",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Use the code 'SAFC10' to save 10% when booking your journey to the city centre this week.",
    image: "/news-leeds.jpg",
    date: "Jan 15, 2024",
    category: "Sports",
    slug: "sunderland-leeds",
  },
]

export const newsCategories = ["All", "Sports", "Entertainment", "Special Offers", "Company News", "Community"]

export const newsPageContent = {
  ctaSection: {
    title: "Let's start with a conversation about how we can help you!",
    buttonText: "Get in Touch",
    buttonLink: "#",
  },
  loadMoreText: "Load More",
}
