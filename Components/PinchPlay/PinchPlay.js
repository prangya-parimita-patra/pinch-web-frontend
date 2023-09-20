import Image from "next/image";
import Young from "../../public/young.png";
import PinchPlayLogo from '../../public/pinchPlay.png'
const PinchPlay = () => {
  return (
    <section className="PinchPlay">
      <div className="PinchPlay_1">
          <div className="PinchplayTitle">
              <Image src={PinchPlayLogo} alt="PinchPlay Title"/>
          </div>
         <div className="PinchPlayLines">
         <div className="PinchPlaySubTitle">Play to Learn</div>
          <div className="PinchPlayTagLine">Enhance your financial IQ with our fun, finance-related games and quizzes.</div>
         </div>
      </div>
      <div className="YoungIllus">
        <Image src={Young} alt="PinchPlay" priority />
      </div>
    </section>
  );
};

export default PinchPlay;
