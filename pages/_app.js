import "../styles/globals.css";
import "../styles/responsive.css";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import Script from 'next/script'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (`https://www.pinchapp.in` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  const canonicalUrl2 = (`https://www.pinchapp.in/privacy-policies` + (router.asPath === "/privacy-policies" ? "": router.asPath)).split("?")[0];
  const canonicalUrl3 = (`https://www.pinchapp.in` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  const canonicalUrl4 = (`https://www.pinchapp.in/terms-of-us` + (router.asPath === "/terms-of-us" ? "": router.asPath)).split("?")[0];

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PNMJSRM1Z2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PNMJSRM1Z2');
        `}
      </Script>
      <Script id="org-schema" type="application/ld+json">
        {`
          "@context": "https:\/\/schema.org\/",
          "@type": "Organization",
          "name": "Pinch",
          "alternateName": "App",
          "url": "https://www.pinchapp.in/",
          "logo": "https://www.pinchapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpinchLogo.0f176272.png&w=1920&q=75",
          "sameAs": [
            "https://www.facebook.com/Pinchapp.in/",
            "https://www.instagram.com/pinchapp.in/",
            "https://www.linkedin.com/company/pinchapp-in/"
          ]`
        }
      </Script>
      <Script id="personal-schema" type="application/ld+json">
        {`
          "@context": "https:\/\/schema.org\/",
          "@type": "Person",
          "name": "Pinch",
          "url": "https://www.pinchapp.in/",
          "image": "https://www.pinchapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpinchLogo.0f176272.png&w=1920&q=75",
          "sameAs": [
            "https://www.facebook.com/Pinchapp.in/",
            "https://www.instagram.com/pinchapp.in/",
            "https://www.linkedin.com/company/pinchapp-in/"
          ],
          "jobTitle": "Build wealth while you spend",
          "worksFor": {
            "@type": "Organization",
            "name": "Pinch App"
          } 
        </script>`}
      </Script>
      <Script id="breadcrumb" type="application/ld+json">
        {`
          "@context": "https:\/\/schema.org\/", 
          "@type": "BreadcrumbList", 
          "itemListElement": [{
            "@type": "ListItem", 
            "position": 1, 
            "name": "home",
            "item": "https://www.pinchapp.in"  
          },{
            "@type": "ListItem", 
            "position": 2, 
            "name": "terms of us",
            "item": "https://www.pinchapp.in/terms-of-us"  
          },{
            "@type": "ListItem", 
            "position": 3, 
            "name": "privacy policies",
            "item": "https://www.pinchapp.in/privacy-policies"  
          }]`
        }
      </Script>
      <Script id="sitelinks">{`
        "@context": "https:\/\/schema.org\/",
        "@type": "WebSite",
        "name": "pinchapp",
        "url": "https://www.pinchapp.in/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "{search_term_string}",
          "query-input": "required name=search_term_string"
        }
      `}</Script>
    <DefaultSeo canonical={canonicalUrl}/>
    <DefaultSeo canonical={canonicalUrl2}/>
    <DefaultSeo canonical={canonicalUrl3}/>
    {/* <Layout> */}

        <Component {...pageProps} />
    {/* </Layout> */}
    </>
  );
}

export default MyApp;
