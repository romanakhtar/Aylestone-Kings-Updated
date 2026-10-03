/** Canonical site origin (must match metadata / sitemap). No trailing slash. */
export const SITE_ORIGIN = "https://aylestone-taxis.co.uk"

/**
 * Absolute self-referencing URL: origin + path, with no trailing slash.
 * Homepage (`/` or empty) is `https://aylestone-taxis.co.uk`.
 */
export function buildCanonical(path: string): string {
  const trimmed = path.trim()
  if (!trimmed || trimmed === "/") {
    return SITE_ORIGIN
  }

  const pathname = (trimmed.startsWith("/") ? trimmed : `/${trimmed}`).replace(/\/+$/, "")
  return `${SITE_ORIGIN}${pathname}`
}
