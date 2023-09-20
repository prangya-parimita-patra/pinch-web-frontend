import { useState } from "react";
import Modal from "../Modal";
import axios from "axios";

const HeroBaseInput = () => {
  const [showModal, setshowModal] = useState(false);
  const [isdisabled, setIsDisabled] = useState(false);
  const [mobNumber, setMobNumber] = useState();
  const [iserror, setIsError] = useState("");
  const [loading, setLoading] = useState(false);

  const numberDetect = (e) => {
    if (e.target.value.length === 10 || e.target.value.length === 0) {
      setIsError(" ");
    }
  };

  const onSubmit = () => {
    if (mobNumber.length < 10 || mobNumber.length > 10) {
      setIsError("Enter 10 digit Number");
    } else if (mobNumber.length === 10) {
      setLoading(true);
      setMobNumber(mobNumber.toString());
      var mobNum = parseInt("91" + mobNumber);
      axios
        .post(`https://web-backend.pinchapp.in/register`, {
          phoneNum: mobNum,
        })
        .then((response) => {
          if(response.status === 200){
            setshowModal((prev) => !prev);
            setLoading(false);
            setMobNumber("");
            setIsDisabled(true);
          }
          else if(response.status === 210){
            setLoading(false);
            setIsError(`${response.data.message}`);
          }
          else if(response.status === 250){
            setLoading(false);
            setIsError(`${response.data.message}`);
          }
          else{
            setLoading(false);
            setIsError("Something Wrong !");
          }
        })
        // .catch((error) => {
        //   setLoading(false);
        //   console.log(error)
        //   setIsError("Error Occured!");
        // });
    }
  };
  return (
    <>
      <div className="heroBaseInput_Section">
        <div className="heroBaseInput_form">
          <input
            type="number"
            placeholder="Enter Whatsapp Number"
            className="whatsApp_data form-control border-primary text-primary"
            value={mobNumber}
            onInput={numberDetect}
            onChange={(e) => setMobNumber(e.target.value)}
          />
          <input
            type="button"
            className="countMe btn"
            value={loading ? "Loading....." : "Count Me in!"}
            onClick={onSubmit}
            disabled={loading}
          />
          {/* <button className="countMe btn " onClick={onSubmit}>
            Count me in
          </button>{" "} */}
          <br />
        </div>
        <p className="ErrorMsg">{iserror ? iserror : "  "}</p>
        <div className="heroBaseInput_note">
          <p
            className="note "
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            To avail our services register your whatsapp number, we will get
            back to you.
          </p>
        </div>
        <Modal showModal={showModal} setshowModal={setshowModal} />
      </div>
    </>
  );
};

export default HeroBaseInput;
