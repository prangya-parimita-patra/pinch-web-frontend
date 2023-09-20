import Gold from "../../public/gold.png";
import Image from "next/image";
import Arrow from "../../public/Arrow.png";
import className from "classnames";
import { useState } from "react";
import flipCard from "./flipcard";
import React, { useEffect, ReactElement } from 'react';
const OfferingCards = () => {
  var [isFlipped, setIsFlipped] = useState([]);
  if(isFlipped.length < flipCard.length)
  {
    flipCard.map(card=>{
      var obje = {
        value: false
      }
      isFlipped.push(obje)
    })
  }
  return (
    <>
      <div className="offeringGroup">
        {flipCard.map((obj, index) => {
          return(
            <div className={`offeringCard${isFlipped[index].value?'Rotated':''}`} key={index}>
              <div className="flipInner">
              <div className="front">
                <div className="offeringTitle text-lg">{obj.title}</div>
                <div className="offeringSubTitle text-md">{obj.subtitle}</div>
                <div className="offering_image">

                <Image src={obj.link} alt="Gold Image" layout="responsive"/>
                </div>
                <div className="flipCardData">
                  <p className="offeringLink "  onClick={()=>{
                      isFlipped[index].value = !isFlipped[index].value
                      setIsFlipped([...isFlipped])
                  }}>
                    Know more
                  </p>
                </div>
              </div>

              <div className="back" onClick={()=>{
                      isFlipped[index].value = !isFlipped[index].value
                      setIsFlipped([...isFlipped])
                  }}>
                <div className="offeringTitleBack offeringTitle">
                  {obj.title}
                </div>
                <div className="offeringSubTitleBack offeringSubTitle ">
                  {obj.text}
                </div>
                <div className="cardStatus">
                  <p className="status ">{obj.status}</p>
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OfferingCards;
