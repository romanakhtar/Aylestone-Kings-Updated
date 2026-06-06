import Script from "next/script"

const GA4_ID = "G-EN43EPXGHR"
const ADS_ID = "AW-997662518"
const GTM_ID = "GTM-NB673LK3"

/**
 * Third-party analytics and ads — all deferred with strategy="lazyOnload"
 * so nothing blocks first paint or hydration.
 */
export default function ThirdPartyScripts() {
  return (
    <>
      {/* Single gtag.js request for Google Ads + GA4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ADS_ID}', { page_path: window.location.pathname });
          gtag('config', '${GA4_ID}');
        `}
      </Script>

      {/* Google Tag Manager (gtm.js is injected with async=true by the bootstrap snippet) */}
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
    </>
  )
}
