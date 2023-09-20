import HeroBaseInput from './HeroBaseInput';

const HeroText = () => {
  return (
    <>
      <div className="heroText_Section_About">
        <h2 className="heroText_one text-xl"><span>Who are we ?</span></h2>

        <div className="heroTextMain_About">
          <h1 className="heroText_one text-xl">“A <span>micro investment application</span> that helps you <span>save and invest automatically</span> along with your spends”</h1>
        </div>
        <HeroBaseInput />
        <h2>“ We make your investment journey easy and hassle free through micro and automated investments as with us you can invest as low as ₹1 “</h2>
      </div>
    </>
  );
};

export default HeroText;
