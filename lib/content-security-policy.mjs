/**
 * manifest-src for Content-Security-Policy.
 *
 * Lists both the wildcard and the explicit iCabbi assets host. Some browsers
 * do not treat *.assets.passenger.icabbi.com as matching
 * aylestonekings.assets.passenger.icabbi.com reliably.
 */
export const manifestSrc =
  "manifest-src 'self' *.assets.passenger.icabbi.com https://aylestonekings.assets.passenger.icabbi.com"

/**
 * Full Content-Security-Policy (extend here when adding other directives).
 */
export const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://elfsightcdn.com https://*.googletagmanager.com https://static.elfsight.com https://apps.elfsight.com https://www.googleadservices.com https://googleads.g.doubleclick.net",
  "script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://elfsightcdn.com https://*.googletagmanager.com https://static.elfsight.com https://apps.elfsight.com https://www.googleadservices.com https://googleads.g.doubleclick.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://elfsightcdn.com https://static.elfsight.com https://apps.elfsight.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' https://fonts.gstatic.com data: https://elfsightcdn.com",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.googletagmanager.com https://*.passenger.icabbi.com https://*.icabbi.com https://elfsightcdn.com https://formspree.io https://www.google.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://stats.g.doubleclick.net https://*.elfsight.com https://core.service.elfsight.com https://apps.elfsight.com https://static.elfsight.com",
  "frame-src 'self' https://www.googletagmanager.com https://*.elfsight.com https://www.google.com",
  manifestSrc,
  "worker-src 'self' blob:",
].join("; ")
