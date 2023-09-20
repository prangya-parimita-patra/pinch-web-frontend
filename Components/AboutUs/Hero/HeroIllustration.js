import illustrationHero from "../../../public/about-hero.png";
import Image from "next/image";

const HeroIllustration = () => {
  return (
    <>
      <div className="illustrationHero_Section_About">
        <Image
          src={illustrationHero}
          alt="illustrationHero"
          priority
          layout="responsive"
        />
      </div>
    </>
  );
};

export default HeroIllustration;
