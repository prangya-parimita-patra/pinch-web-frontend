import HeroBaseInput from './HeroBaseInput';

const HeroText = () => {
  return (
    <>
      <div className="heroText_Section">
        <div className="heroTextMain">
          <h1 className="heroText_one text-xl">Build your <span>Wealth,</span></h1>
        </div>
        <div>
          <h1 className="heroText_two text-xl">While you <span>Spend</span></h1>
        </div>
        <HeroBaseInput />
      </div>
    </>
  );
};

export default HeroText;
