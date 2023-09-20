import Address from "./Address"
import Contact from "./Contact"
import FollowUs from "./FollowUs"
import FooterBtn from "./FooterBtn"

import Copyright from "./Copyright/Copyright"
import BrandName from "../BrandName"
import FooterBrand from "../footerBrand"
import Legal from "./Legal"

const Footer = () => {
  return (
    <>
        <footer className="footerClass">
        <div>
          <FooterBrand />
        </div>
        <div className="footerMain ">
          <div className="footComp"><Legal/></div>
          <div className="footComp"> <Contact/></div>
          <div className="footComp"> <FollowUs/></div>
          <div className="footComp"><FooterBtn/></div>
        </div>
        <hr className="footerDivider"/>
            <Copyright/>
        </footer>
    </>
  )
}

export default Footer