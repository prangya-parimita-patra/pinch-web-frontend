import {useState} from 'react'
const FooterBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
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
    <div className="footerBtn">
      <button className="btn bg-primary footerBtn" onClick={scrollToTop}>Join Waitlist</button>
    </div>
  );
};

export default FooterBtn;
