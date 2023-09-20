import BrandLogo from "../public/pinchLogo.png";
import Image from "next/image";
import Link from 'next/link';
import Address from "./Footer/Address";

const FooterBrand = () => {
  return (
    <>
      <div className="footerBrand">
        {/* <Image src={BrandLogo} alt="Pinch Logo" priority  width="34"/> */}
        <Link href='/'>
        <h1>Pinch</h1>
      </Link>
      </div>
      <Address/>
    </>
  );
};

export default FooterBrand;
