import section3Data from "./section3Data";

const SectionThreeDesgin = () => {
  return (
    <div style={{background: "blue"}}>
      <div className="sectionThree">
        <div className="section3_1">
          <div className="sectionOuter"> </div>
          <div className="sectionCircle">
            <div className="borderSection">
              <div className="sectionCircleBorder"></div>
            </div>
            <div className="title3">
              Why<span className="pinchName"> pinch</span>
            </div>
          </div>
        </div>
        {section3Data.map((value, index) => {
          return (
            <div key={index}>
              {/* <hr className={value.lineClassName}></hr> */}

              <div className={value.cardClassName}>
                <div className="sectionThreeCards">
                  <div className={value.numclassName}>
                    <p>{value.numDisplay}</p>
                  </div>
                  <div className="CardInner">
                    <div className="cardsTitle">{value.title}</div>
                    <div className="cardText">{value.text}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionThreeDesgin;
