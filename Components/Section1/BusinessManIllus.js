import React from "react";
import BusinessMan from "../../public/businessMan.png";
import Image from 'next/image'

const BusinessManIllus = () => {
  return (
    <>
      
      <div className="businessManIllusDiv">
        <Image src={BusinessMan} className="businessManIllus" priority width={275} height={275} alt='Regulated by SEBI'/>
      </div>
    </>
  );
};

export default BusinessManIllus;
