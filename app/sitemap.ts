import { MetadataRoute } from 'next'
import { siteData, footerData } from '@/lib/data'

const baseUrl = 'https://www.aylestone-taxis.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0]

  // Helper function to create URL entry
  const createUrl = (
    path: string,
    priority: number,
    changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly',
    lastmod: string = currentDate
  ): MetadataRoute.Sitemap[0] => ({
    url: `${baseUrl}${path}`,
    lastModified: lastmod,
    changeFrequency: changefreq,
    priority,
  })

  const urls: MetadataRoute.Sitemap = []

  // Homepage - Highest priority
  urls.push(createUrl('/', 1.0, 'weekly'))

  // Main Navigation Pages
  urls.push(createUrl('/about', 0.8, 'monthly'))
  urls.push(createUrl('/services', 0.8, 'monthly'))
  urls.push(createUrl('/pricing', 0.8, 'monthly'))
  urls.push(createUrl('/contact', 0.8, 'monthly'))
  urls.push(createUrl('/drivers', 0.7, 'monthly'))
  urls.push(createUrl('/travel', 0.7, 'monthly'))
  urls.push(createUrl('/blog', 0.6, 'weekly'))
  urls.push(createUrl('/company', 0.7, 'monthly'))
  urls.push(createUrl('/fleet', 0.7, 'monthly'))

  // SEO Target Pages - High priority
  urls.push(createUrl('/taxi-leicester', 0.9, 'weekly'))
  urls.push(createUrl('/taxi-near-me-leicester', 0.9, 'weekly'))
  urls.push(createUrl('/leicester-airport-taxi', 0.9, 'weekly'))
  urls.push(createUrl('/leicester-to-east-midlands-airport-taxi', 0.9, 'weekly'))
  urls.push(createUrl('/leicester-taxi-company', 0.9, 'weekly'))
  urls.push(createUrl('/cheap-taxi-leicester', 0.9, 'weekly'))
  urls.push(createUrl('/airport-transfers-leicester', 0.9, 'weekly'))
  urls.push(createUrl('/local-taxi-leicester', 0.9, 'weekly'))
  urls.push(createUrl('/long-distance-taxi-leicester', 0.9, 'weekly'))

  // Airport Pricing Pages
  const airports = [
    'East-Midlands',
    'Birmingham',
    'Heathrow',
    'Gatwick',
    'Luton',
    'Stansted',
    'Manchester'
  ]
  airports.forEach(airport => {
    urls.push(createUrl(`/pricing/airports/${airport}`, 0.8, 'monthly'))
  })

  // Blog Posts - Dynamic
  siteData.blogPage.blogs.forEach(blog => {
    urls.push(createUrl(`/blog/${blog.id}`, 0.6, 'monthly', blog.date))
  })

  // Area Pages - Dynamic from footer data
  // Get all areas from areaGroups
  if (footerData.areaGroups) {
    footerData.areaGroups.forEach(group => {
      if (group.items) {
        group.items.forEach(area => {
          // Extract slug from href (e.g., /taxis-in-aylestone -> aylestone)
          const slug = area.href.replace('/taxis-in-', '').replace('/taxis-in/', '')
          if (slug) {
            urls.push(createUrl(`/taxis-in/${slug}`, 0.7, 'monthly'))
          }
        })
      }
    })
  }

  // Destination Links (hospitals, universities, stations, etc.)
  if ((footerData as any).destinationLinks) {
    (footerData as any).destinationLinks.forEach((destination: { href: string }) => {
      const slug = destination.href.replace('/taxis-in-', '').replace('/taxis-in/', '')
      if (slug) {
        urls.push(createUrl(`/taxis-in/${slug}`, 0.7, 'monthly'))
      }
    })
  }

  // Priority Areas (attractions, landmarks)
  const priorityAreas = (footerData as any).priorityAreas || {}
  if (priorityAreas.opPriority) {
    priorityAreas.opPriority.forEach((area: { href: string }) => {
      const slug = area.href.replace('/taxis-in-', '').replace('/taxis-in/', '')
      if (slug) {
        urls.push(createUrl(`/taxis-in/${slug}`, 0.75, 'monthly'))
      }
    })
  }
  if (priorityAreas.mediumPriority) {
    priorityAreas.mediumPriority.forEach((area: { href: string }) => {
      const slug = area.href.replace('/taxis-in-', '').replace('/taxis-in/', '')
      if (slug) {
        urls.push(createUrl(`/taxis-in/${slug}`, 0.7, 'monthly'))
      }
    })
  }
  if (priorityAreas.optionalPriority) {
    priorityAreas.optionalPriority.forEach((area: { href: string }) => {
      const slug = area.href.replace('/taxis-in-', '').replace('/taxis-in/', '')
      if (slug) {
        urls.push(createUrl(`/taxis-in/${slug}`, 0.65, 'monthly'))
      }
    })
  }

  // Remove duplicates (in case same area appears in multiple groups)
  const uniqueUrls = urls.filter((url, index, self) =>
    index === self.findIndex((u) => u.url === url.url)
  )

  return uniqueUrls
}

