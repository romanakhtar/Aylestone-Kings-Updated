import JsonLd from "@/components/seo/JsonLd"

const SITE = "https://aylestone-taxis.co.uk"
const BLOG_ID = `${SITE}/blog#blog`
const LOGO = `${SITE}/Aylestone-Taxi-Logo.png`

type BlogEntry = {
  id: string
  title: string
  excerpt: string
  date: string
  image?: string
  author: string
}

type Props = {
  name: string
  description: string
  blogs: BlogEntry[]
}

/**
 * Blog hub + breadcrumbs + summary BlogPosting refs for /blog (helps discovery of all posts).
 */
export default function BlogListingJsonLd({ name, description, blogs }: Props) {
  const published = (d: string) =>
    d.length === 10 ? `${d}T12:00:00+01:00` : d

  const blogPost = blogs.map((b) => {
    const url = `${SITE}/blog/${b.id}`
    const entry: Record<string, unknown> = {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: b.title,
      url,
      description: b.excerpt.replace(/\s+/g, " ").trim(),
      datePublished: published(b.date),
      dateModified: published(b.date),
      author: { "@type": "Person", name: b.author },
    }
    if (b.image) {
      entry.image = [`${SITE}${b.image.startsWith("/") ? "" : "/"}${b.image}`]
    }
    return entry
  })

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": BLOG_ID,
        name,
        description: description.replace(/\s+/g, " ").trim(),
        url: `${SITE}/blog`,
        inLanguage: "en-GB",
        publisher: {
          "@type": "Organization",
          name: "Aylestone Kings",
          logo: { "@type": "ImageObject", url: LOGO },
        },
        blogPost,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: name, item: `${SITE}/blog` },
        ],
      },
    ],
  }

  return <JsonLd data={graph} />
}
