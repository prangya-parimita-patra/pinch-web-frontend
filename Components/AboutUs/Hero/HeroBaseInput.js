import { useState } from "react";
import Modal from "../../Modal";
import axios from "axios";

const HeroBaseInput = () => {

  return (
    <>
      <div className="heroBaseInput_Section">
        <div className="heroBaseInput_form">
          <input
            type="button"
            className="countMe btn"
            value="Join Waitlist"
          />
          <br />
        </div>
        {/* <div className="heroBaseInput_note">
          <p
            className="note "
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            To avail our services register your whatsapp number, we will get
            back to you.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default HeroBaseInput;
