import React from "react";
import Section1slider from "./Section1slider";
import Title1 from "./Title1";
import SectionOneText from "./SectionOneText";

const SectionOne = () => {
  return (
    <section className="SectionOne">
      <div className="Section1_1">
        <Title1 />
        <SectionOneText />
      </div>
      <Section1slider />
    </section>
  );
};

export default SectionOne;
