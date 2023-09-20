import illustrationHero from "../../public/illustrationHero.png";
import Image from "next/image";

const HeroIllustration = () => {
  return (
    <>
      <div className="illustrationHero_Section">
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
