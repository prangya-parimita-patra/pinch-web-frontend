import Instagram from "../../public/Instagram.png";
import LinkedIn from "../../public/LinkedIn.png";
import Twitter from "../../public/Twitter.png";
import Facebook from "../../public/Facebook.png";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <div className="socialMedia footData">
      <ul className="socialMedia-links">
        <li>
          <a href=" https://www.linkedin.com/company/pinchapp-in" target="_blank">
            <Image src={LinkedIn} alt="LinkedIn" priority className="icons-SocialMedia" layout="responsive" />
          </a>
        </li><li>
          <a href=" https://www.instagram.com/pinchapp.in/" target="_blank">
            <Image src={Instagram} alt="Instagram" className="icons-SocialMedia" layout="responsive"/>
          </a>
        </li><li>
          <a href=" https://www.facebook.com/Pinchapp.in/" target="_blank">
            <Image src={Facebook} alt="Facebook" priority className="icons-SocialMedia" layout="responsive"/>
          </a>
        </li><li>
          <a href="#" target="_blank">
            <Image src={Twitter} alt="Twitter" priority className="icons-SocialMedia" layout="responsive"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
