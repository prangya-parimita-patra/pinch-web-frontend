import BrandLogo from "../public/Pinch Logo.svg";
import Image from "next/image";
import Link from 'next/link';
const BrandName = () => {
  return (
    <>
    <Link href='/'>
      <div className="brandName">
      <Image src={BrandLogo} alt="Pinch Logo" priority  layout="responsive" />
        {/* <h1>Pinch</h1> */}
      </div>
      </Link>
    </>
  );
};

export default BrandName;
