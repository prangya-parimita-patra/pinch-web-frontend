import section3Data from "../Section3/section3Data";

const WhyReasons = () => {
  return (
    <>

        <div className="whycardGroup">
    {section3Data.map((value,index)=>{
        return(
            <>
                <div key={index} className="whycard">
                <div className="whycardNum">{value.numDisplay}</div>
                    <div className="whycardTitle">{value.title}</div>
                    <div className="whycardText">{value.text}</div>
                </div>
            </>
        )
    })}
        </div>
    </>
  )
}

export default WhyReasons