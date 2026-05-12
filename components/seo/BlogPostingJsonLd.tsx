import JsonLd from "@/components/seo/JsonLd"

const SITE = "https://aylestone-taxis.co.uk"
const LOGO = `${SITE}/Aylestone-Taxi-Logo.png`

type Props = {
  headline: string
  description: string
  url: string
  datePublished: string
  imageUrl?: string
  authorName: string
  publisherName?: string
}

/**
 * Article + breadcrumb structured data for blog posts (Search rich result eligibility).
 */
export default function BlogPostingJsonLd({
  headline,
  description,
  url,
  datePublished,
  imageUrl,
  authorName,
  publisherName = "Aylestone Kings",
}: Props) {
  const published =
    datePublished.length === 10 ? `${datePublished}T12:00:00+01:00` : datePublished

  const blogPosting: Record<string, unknown> = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline,
    url,
    inLanguage: "en-GB",
    description: description.replace(/\s+/g, " ").trim(),
    datePublished: published,
    dateModified: published,
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE}/blog#blog`,
      name: "Aylestone Kings Blog",
      url: `${SITE}/blog`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: LOGO,
      },
    },
  }

  if (imageUrl) {
    blogPosting.image = [imageUrl]
  }

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      blogPosting,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: headline,
            item: url,
          },
        ],
      },
    ],
  }

  return <JsonLd data={graph} />
}
