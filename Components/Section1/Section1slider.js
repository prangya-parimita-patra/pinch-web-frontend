
import Slider from "react-slick";
import Section2Data from "./SectionOneData";
import BusinessManIllus from "./BusinessManIllus";
import Head from "next/head";

const Section1slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "sliderSectionOne OneSlide",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
    <Head>
  <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
</Head>
      <div className="completeSlider1">
        <BusinessManIllus />
        <div className="slider1">
          <div>
            <Slider {...settings}>
              {Section2Data.map((value, index) => {
                return (
                  <div className="sliderInner" key={"key-after-spread"}>
                    <div className="sliderTitle text-lg">{value.title}</div>
                    <div className="sliderData text-md">{value.text}</div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1slider;
