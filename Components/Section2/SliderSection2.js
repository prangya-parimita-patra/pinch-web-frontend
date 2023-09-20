import Slider from "react-slick";
import Head from "next/head";
import Slider2Data from "./Slider2Data";
import Image from "next/image";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";

const SliderSection2 = () => {
  const settings = {
    dots: true,
    fade: true,
    // infinite: true,
    // speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    default: 1,
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div>
        <Slider {...settings} prevArrow={<PrevBtn />} nextArrow={<NextBtn />}>
          {Slider2Data.map((value, index) => {
            return (
              <>
                <div className="frames" key={index}>
                  <div className="framesData">
                    <div className="frameNumber text-2xl">{value.frameNumber}</div>
                    <div className="frameText text-md">{value.frameText}</div>
                    <small>(Swipe to know more)</small>
                  </div>
                  <div className="frameImage">
                    <Image src={value.imageUrl} priority alt='Regulated by SEBI' className="frameImageData" layout="responsive"/>
                  </div>
                  <div className="backgroundShape"></div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default SliderSection2;
