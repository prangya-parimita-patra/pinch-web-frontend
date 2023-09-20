import { useState } from "react";
import Faqs from "./FAQ";

const FaqAccordian = () => {
  const [clicked, setClicked] = useState(false);
  const openHide = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <>
      {Faqs.map((value, index) => {
        return (
          <>
            <div className="faqQuestion faq" onClick={() => openHide(index)} key={index}>
              <div className="faqTitle text-lg">{value.title}</div>
              <span className="faqTitle clickIcon">{clicked === index ? "-" : "+"}</span>
            </div>
            <div className={clicked === index ? "faqAnswer faq" : 'hide'}>
              <div className="faqText ">{
                  index ===0 ? (
                    <p>Get Early Access to the App. <span onClick={scrollToTop} style={{cursor: "pointer"}}>Click here</span> (hyperliked) to join the waitlist.</p>
                  ) : (
                      <p>{value.text}</p>
                  )
                } </div>
            </div>
          </>
        );
    })}
    </>
  );
};

export default FaqAccordian;
