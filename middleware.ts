import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host")

  if (!hostHeader) {
    return NextResponse.next()
  }

  const hostWithoutPort = hostHeader.split(":")[0].toLowerCase()

  if (!hostWithoutPort.startsWith("www.")) {
    return NextResponse.next()
  }

  const apexHostname = hostWithoutPort.replace(/^www\./, "")
  const redirectUrl = request.nextUrl.clone()

  redirectUrl.hostname = apexHostname

  // Respect original protocol when behind a proxy/CDN.
  const forwardedProto = request.headers.get("x-forwarded-proto")
  if (forwardedProto) {
    redirectUrl.protocol = `${forwardedProto.split(",")[0].trim()}:`
  }

  return NextResponse.redirect(redirectUrl, 301)
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}
