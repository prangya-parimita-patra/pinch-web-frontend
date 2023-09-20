import Image from "next/image";
import refer from "./refer";
import Title6 from "./Title6";
const SectionSix = () => {
  return (
    <>
      <section className="sectionSix">
        <div className="subsection6_1">
          <Title6 />
          <hr className="titleDivide" />


          {refer.map((value, index) => {
              return (

            <div className="refer" key={index}>
              <div className="referData">
                <div className="referText text-md">
                  {value.text}
                </div>
                <div className="referCard">
                  <Image
                    src={value.icon}
                    placeholder="blur"
                    width={50}
                    height={50}
                    alt=""
                  />
                  <div className="referCardData text-md">
                    {value.title}
                  </div>
                </div>
              </div>
            </div>
              )
          })}
        </div>
      </section>
    </>
  );
};

export default SectionSix;
