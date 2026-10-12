import { SITE_ORIGIN } from "@/lib/seo/canonical"

/**
 * Default social sharing image.
 *
 * Next.js merges metadata *shallowly*, so a page that declares its own
 * `openGraph` object replaces the root layout's entirely — including its
 * `images`. Any page defining `openGraph` therefore has to supply the image
 * itself, which is what this constant is for.
 *
 * Without it, a link shared on WhatsApp, Facebook or Slack renders as a bare
 * text link with no preview.
 */
export const OG_IMAGE = {
  url: `${SITE_ORIGIN}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "Aylestone Taxis — Leicester taxis and airport transfers, fixed fares, 24/7",
} as const

/** Same image as a bare URL, for the `twitter.images` field. */
export const OG_IMAGE_URL = OG_IMAGE.url
