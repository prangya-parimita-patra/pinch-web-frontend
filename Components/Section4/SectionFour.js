import Title4 from "./Title4";
import TrustReasons from "./TrustReasons";
import Backed from "./Backed";

const SectionFour = () => {
  return (
    <section className="section4 ">
      <div className="section4_2">
        <Title4 />
        <hr className="titleDivide" />
      </div>
      <div className="subsection4_1">
        <TrustReasons /> 
        <Backed />
      </div>
    </section>
  );
};

export default SectionFour;
