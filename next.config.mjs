/** @type {import('next').NextConfig} */
import { contentSecurityPolicy } from "./lib/content-security-policy.mjs"

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Production optimizations
  productionBrowserSourceMaps: false, // Disable source maps in production for smaller bundles
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Optimize bundle
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    // Enable CSS optimization
    optimizeCss: true,
  },
  
  // Turbopack configuration (Next.js 16 default)
  turbopack: {},
  
  // Webpack optimizations for production builds (only used in production, not dev)
  ...(process.env.NODE_ENV === 'production' && {
    webpack: (config, { dev, isServer }) => {
      // Production optimizations only
      if (!dev && !isServer) {
        config.optimization = {
          ...config.optimization,
          minimize: true,
          moduleIds: 'deterministic',
          chunkIds: 'deterministic',
          // Split chunks for better caching
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              default: false,
              vendors: false,
              // Vendor chunk
              vendor: {
                name: 'vendor',
                chunks: 'all',
                test: /node_modules/,
                priority: 20,
              },
              // Common chunk
              common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                priority: 10,
                reuseExistingChunk: true,
                enforce: true,
              },
            },
          },
        };
      }
      return config;
    },
  }),

  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/_next/image',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
        ],
      },
      {
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|avif|svg|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*\\.(js|css|woff|woff2|ttf|otf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // Redirects for old sitelinks
  async redirects() {
    return [
      // www → canonical non-www (http/https www → https://aylestone-taxis.co.uk)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.aylestone-taxis.co.uk' }],
        destination: 'https://aylestone-taxis.co.uk/:path*',
        statusCode: 301,
      },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/faqs.html', destination: '/pricing', permanent: true },
      { source: '/corporate.html', destination: '/company', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      // Clean up airport pages for better SERP URLs
      { source: '/pricing/airports/Birmingham', destination: '/taxi-to-birmingham-airport', permanent: true },
      // Legacy venue and service pages (hyphenated path → dedicated landing page)
      { source: '/taxis-in-morningside-arena', destination: '/match-day-taxi-leicester', permanent: true },
      { source: '/taxis-in-de-montfort-hall', destination: '/prom-taxi-leicester', permanent: true },
      { source: '/taxis-in-de-montfort-university', destination: '/student-taxi-leicester', permanent: true },
      { source: '/taxis-in-university-of-leicester', destination: '/student-taxi-leicester', permanent: true },
      { source: '/taxis-in-welford-road-stadium', destination: '/match-day-taxi-leicester', permanent: true },
      { source: '/taxis-in-king-power-stadium', destination: '/match-day-taxi-leicester', permanent: true },
      { source: '/taxis-in-leicester-racecourse', destination: '/match-day-taxi-leicester', permanent: true },
      { source: '/taxis-in-leicester-railway-station', destination: '/local-taxi-leicester', permanent: true },
      { source: '/taxis-in-st-margarets-bus-station', destination: '/local-taxi-leicester', permanent: true },
      { source: '/taxis-in-highcross-leicester', destination: '/local-taxi-leicester', permanent: true },
      { source: '/taxis-in-leicester-market', destination: '/local-taxi-leicester', permanent: true },
      { source: '/taxis-in-leicester-college', destination: '/student-taxi-leicester', permanent: true },
      { source: '/taxis-in-new-walk-museum', destination: '/local-taxi-leicester', permanent: true },
      { source: '/taxis-in-national-space-centre', destination: '/local-taxi-leicester', permanent: true },
      { source: '/taxis-in-curve-theatre', destination: '/local-taxi-leicester', permanent: true },
      { source: '/taxis-in-haymarket-shopping-centre', destination: '/local-taxi-leicester', permanent: true },
      { source: '/taxis-in-athena-city-rooms', destination: '/prom-taxi-leicester', permanent: true },
      { source: '/taxis-in-meridian-business-park', destination: '/corporate-taxi-account-leicester', permanent: true },
      { source: '/taxis-in-king-richard-iii-visitor-centre', destination: '/local-taxi-leicester', permanent: true },
      { source: '/taxis-in-jewry-wall-museum', destination: '/local-taxi-leicester', permanent: true },
      // Legacy hospital pages (hyphenated path → area page)
      { source: '/taxis-in-glenfield-hospital', destination: '/taxis-in/glenfield', permanent: true },
      { source: '/taxis-in-leicester-general-hospital', destination: '/taxis-in/highfields', permanent: true },
      { source: '/taxis-in-leicester-royal-infirmary', destination: '/taxis-in/highfields', permanent: true },
      { source: '/taxis-in-spire-leicester-hospital', destination: '/taxis-in/highfields', permanent: true },
      { source: '/taxis-in-nuffield-health-leicester-hospital', destination: '/taxis-in/highfields', permanent: true },
      // Legacy area URLs (hyphenated path → nested path)
      { source: '/taxis-in-fosse-park', destination: '/taxis-in/fosse-park', permanent: true },
      { source: '/taxis-in-asda-fosse-park', destination: '/taxis-in/fosse-park', permanent: true },
      { source: '/taxis-in-thurmaston', destination: '/taxis-in/thurmaston', permanent: true },
      { source: '/taxis-in-coalville', destination: '/taxis-in/coalville', permanent: true },
      { source: '/taxis-in-evington', destination: '/taxis-in/evington', permanent: true },
      { source: '/taxis-in-stoneygate', destination: '/taxis-in/stoneygate', permanent: true },
      { source: '/taxis-in-narborough-station', destination: '/taxis-in/narborough', permanent: true },
      { source: '/taxis-in-south-wigston-station', destination: '/taxis-in/south-wigston', permanent: true },
      { source: '/taxis-in-hinckley', destination: '/taxis-in/hinckley', permanent: true },
      { source: '/taxis-in-lutterworth', destination: '/taxis-in/lutterworth', permanent: true },
      { source: '/taxis-in-belgrave', destination: '/taxis-in/belgrave', permanent: true },
      { source: '/taxis-in-south-wigston', destination: '/taxis-in/south-wigston', permanent: true },
      { source: '/taxis-in-braunstone', destination: '/taxis-in/braunstone', permanent: true },
      { source: '/taxis-in-hamilton', destination: '/taxis-in/hamilton', permanent: true },
      { source: '/taxis-in-whetstone', destination: '/taxis-in/whetstone', permanent: true },
      { source: '/taxis-in-syston', destination: '/taxis-in/syston', permanent: true },
      { source: '/taxis-in-oadby', destination: '/taxis-in/oadby', permanent: true },
      { source: '/taxis-in-wigston-fields', destination: '/taxis-in/wigston', permanent: true },
      { source: '/taxis-in-eyres-monsell', destination: '/taxis-in/eyres-monsell', permanent: true },
      { source: '/taxis-in-birstall', destination: '/taxis-in/birstall', permanent: true },
      { source: '/taxis-in-groby', destination: '/taxis-in/groby', permanent: true },
      { source: '/taxis-in-countesthorpe', destination: '/taxis-in/countesthorpe', permanent: true },
      { source: '/taxis-in-glen-parva', destination: '/taxis-in/glen-parva', permanent: true },
      { source: '/taxis-in-broughton-astley', destination: '/taxis-in/broughton-astley', permanent: true },
      { source: '/taxis-in-aylestone', destination: '/taxis-in/aylestone', permanent: true },
      { source: '/taxis-in-cosby', destination: '/taxis-in/cosby', permanent: true },
      { source: '/taxis-in-highfields', destination: '/taxis-in/highfields', permanent: true },
      { source: '/taxis-in-leicester-city-centre', destination: '/taxis-in/leicester-city-centre', permanent: true },
      { source: '/taxis-in-westcotes', destination: '/taxis-in/leicester-city-centre', permanent: true },
      { source: '/taxis-in-thurnby-lodge', destination: '/taxis-in/hamilton', permanent: true },
      { source: '/taxis-in-braunstone-town', destination: '/taxis-in/braunstone', permanent: true },
      { source: '/taxis-in-rushey-mead', destination: '/taxis-in/syston', permanent: true },
      { source: '/taxis-in-market-harborough', destination: '/taxis-in/market-harborough', permanent: true },
      { source: '/taxis-in-grove-park', destination: '/taxis-in/beaumont-leys', permanent: true },
      { source: '/taxis-in-humberstone', destination: '/taxis-in/belgrave', permanent: true },
      { source: '/taxis-in-kibworth', destination: '/taxis-in/market-harborough', permanent: true },
      { source: '/taxis-in-enderby', destination: '/taxis-in/enderby', permanent: true },
      { source: '/taxis-in-clarendon-park', destination: '/taxis-in/clarendon-park', permanent: true },
      { source: '/taxis-in-melton-mowbray', destination: '/taxis-in/melton-mowbray', permanent: true },
      { source: '/taxis-in-wigston', destination: '/taxis-in/wigston', permanent: true },
      // Thin location pages with no valid destination (mosques, supermarkets, etc.)
      { source: '/taxis-in-masjid-umar', destination: '/', permanent: true },
      { source: '/taxis-in-jame-mosque-leicester', destination: '/', permanent: true },
      { source: '/taxis-in-shree-hindu-temple-leicester', destination: '/', permanent: true },
      { source: '/taxis-in-guru-nanak-gurdwara-leicester', destination: '/', permanent: true },
      { source: '/taxis-in-leicester-cathedral', destination: '/', permanent: true },
      { source: '/taxis-in-aldi-aylestone-road', destination: '/', permanent: true },
      { source: '/taxis-in-lidl-beaumont-leys', destination: '/', permanent: true },
      { source: '/taxis-in-farmfoods-st-matthews', destination: '/', permanent: true },
      { source: '/taxis-in-tesco-narborough-road', destination: '/', permanent: true },
      { source: '/taxis-in-morrisons-freemens-common', destination: '/', permanent: true },
      { source: '/taxis-in-waitrose-oadby', destination: '/', permanent: true },
      { source: '/taxis-in-sainsburys-grove-triangle', destination: '/', permanent: true },
      { source: '/taxis-in-iceland-city-centre', destination: '/', permanent: true },
      { source: '/taxis-in-m-and-s-foodhall-city-centre', destination: '/', permanent: true },
      // Consolidate remaining legacy area URL format (prevents canonical conflicts)
      { source: '/taxis-in-:slug', destination: '/taxis-in/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
