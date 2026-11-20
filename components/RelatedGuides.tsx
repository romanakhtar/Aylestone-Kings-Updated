import Link from "next/link"
import { blogPosts } from "@/lib/blogPosts"

type ExtraLink = { href: string; title: string }

/**
 * "Related guides" links from a service page to its supporting blog posts.
 * Added Nov 2026: several useful guides were only linked from the blog index, so they
 * received little internal link value. Slugs are checked at build time — an unknown
 * slug throws, so a broken guide link can never ship.
 */
export default function RelatedGuides({
  slugs,
  extra = [],
  heading = "Related guides",
}: {
  slugs: string[]
  extra?: ExtraLink[]
  heading?: string
}) {
  const links: ExtraLink[] = slugs.map((slug) => {
    const post = blogPosts.find((p) => p.id === slug)
    if (!post) throw new Error(`RelatedGuides: unknown blog slug "${slug}"`)
    return { href: `/blog/${slug}`, title: post.title }
  })
  const all = [...links, ...extra]
  if (all.length === 0) return null

  return (
    <section className="py-12 bg-white border-t border-gray-100" aria-labelledby="related-guides-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="related-guides-heading" className="text-2xl font-bold text-[#0F0D3E] mb-4">
          {heading}
        </h2>
        <ul className="space-y-2">
          {all.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-[#06A0A6] underline underline-offset-2 hover:text-[#0F0D3E]">
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
