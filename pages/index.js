import HeroMain from "../Components/Hero/HeroMain";
import Head from "next/head";
import SectionOne from "../Components/Section1/SectionOne";
import SectionTwo from "../Components/Section2/SectionTwo";
import SectionThree from "../Components/Section3/SectionThree";
import SectionFour from "../Components/Section4/SectionFour";
import SectionFive from "../Components/Section5/SectionFive";
import SectionSix from "../Components/Section6/SectionSix";
import SectionSeven from "../Components/Section7/SectionSeven";
import backgroundImage from "../public/bg.png";
import Image from "next/image";
import BrandName from "../Common/BrandName";
import Footer from "../Common/Footer/Footer";
import Why from "../Components/Why/Why";
import PinchPlay from "../Components/PinchPlay/PinchPlay";
import Script from 'next/script'
// import BrandName from "../Common/BrandName";
// import Footer from "../Common/Footer/Footer";

// const styles = {
//   container: {
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       width: '100vw',
//       height: '100vh'
//   }
// };



const index = () => {
  return (
    <>
      <Head>
        <title>Build your wealth While you spend - Pinchapp</title>
        <meta name="description" content="Pinch is an effortless way to start your investment journey. The app helps you to invest effortlessly in Mutual Fund and stocks through simple, paperless processes." />
      </Head>
        <div className="container">
        <Script async
          src="https://www.googletagmanager.com/gtag/js?id=G-PNMJSRM1Z2"
        />
        <Script id="google-analytics">
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
        </div>
        <div className="main-bg">
        <BrandName/>
          <div className="main_body"> 
            <HeroMain />
            <SectionOne />
            <SectionTwo />
            <Why/>
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <PinchPlay/>
            {/* <SectionSix/> */}
            <SectionSeven />
            <Footer/>
          </div>
        </div>
        
       {/* <div className="background-img">
        <Image
          src={backgroundImage}
          width={2880}
          height={13428}
          alt="Background_image"
          placeholder="blur"
        /> </div> */}
    </>
  );
};

export default index;
