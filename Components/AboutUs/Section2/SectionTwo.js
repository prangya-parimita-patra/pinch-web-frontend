import partOne from "../../../public/part-one.png";
import partTwo from "../../../public/part-two.png";
import partThree from "../../../public/part-three.png";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <>
        <div className="title-about">
        OUR MISSION
        </div>
        <div className="part-about">
          <div className="text-part">
            <h2>Penny Investments</h2>
            <p>Whenever user spends digitally we invest the spare change in digital gold.</p>
          </div>
          <div className="image-part">
            <Image
              src={partOne}
              alt="illustrationHero"
              priority
              layout="responsive"
            />
          </div>
        </div>
        <div className="part-about">
          <div className="image-part">
            <Image
              src={partTwo}
              alt="illustrationHero"
              priority
              layout="responsive"
            />
          </div>
          <div className="text-part">
            <h2>Automated Investmnets Journey</h2>
            <p>User just needs go setup autopay and leave everything On us .</p>
          </div>
        </div>
        <div className="part-about">
          <div className="text-part">
            <h2>Pinch Play </h2>
            <p>User can now learn about finance over Pinch app through gamified experiences and earn rewards.</p>
          </div>
          <div className="image-part">
            <Image
              src={partThree}
              alt="illustrationHero"
              priority
              layout="responsive"
            />
          </div>
        </div>
    </>
  )
}

export default SectionTwo