import type { Metadata } from "next"
import { OG_IMAGE } from "@/lib/seo/openGraph"

/**
 * Final pass for every page's metadata.
 *
 * Next.js merges metadata *shallowly*: a page that omits `twitter` (or only
 * sets part of `openGraph`) silently inherits the root layout's homepage text,
 * so shared links and cards showed the homepage title on other pages.
 *
 * This derives the social tags from the page's own `title`, `description` and
 * canonical URL so they can never drift apart:
 *   og:title / twitter:title             <- title
 *   og:description / twitter:description <- description
 *   og:url                               <- alternates.canonical
 * Page-specific OG fields (images, type "article", publishedTime, …) are kept.
 *
 * It also drops `keywords`: Google ignores the meta keywords tag, and a visible
 * list of target phrases only advertises the SEO strategy to competitors.
 */
export function finalizeMetadata(meta: Metadata): Metadata {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { keywords: _keywords, ...rest } = meta

  const title = resolveTitle(meta.title)
  const description = meta.description ?? undefined
  const canonical = meta.alternates?.canonical
  const url = typeof canonical === "string" ? canonical : canonical instanceof URL ? canonical.toString() : undefined

  const og = (meta.openGraph ?? {}) as NonNullable<Metadata["openGraph"]>
  const ogImages = og.images ?? [OG_IMAGE]

  return {
    ...rest,
    openGraph: {
      siteName: "Aylestone Taxis",
      locale: "en_GB",
      type: "website",
      ...og,
      images: ogImages,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(url ? { url } : {}),
    } as Metadata["openGraph"],
    twitter: {
      card: "summary_large_image",
      images: imageUrls(ogImages),
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
    },
  }
}

function resolveTitle(title: Metadata["title"]): string | undefined {
  if (!title) return undefined
  if (typeof title === "string") return title
  if ("absolute" in title && title.absolute) return title.absolute
  if ("default" in title && title.default) return title.default
  return undefined
}

function imageUrls(images: unknown): string[] {
  const list = Array.isArray(images) ? images : [images]
  return list
    .map((img) => (typeof img === "string" ? img : img instanceof URL ? img.toString() : (img as { url?: string | URL })?.url?.toString()))
    .filter((u): u is string => Boolean(u))
}
