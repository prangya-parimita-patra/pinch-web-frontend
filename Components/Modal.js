import BrandLogo from "../public/pinchLogo.png";
import Image from "next/image";
import Head from "next/head";
import BrandName from "../Common/BrandName";

const Modal = ({ setshowModal, showModal, setLoading }) => {
  const hideModal = () => {
    setshowModal((prev) => !prev);  
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {showModal ? (
        <>
          <div className="modal ">
            <i
              className="fas fa-times cursor-pointer modal-close"
              onClick={hideModal}
            ></i>
            <div className="modal-window">
            {/* <i
              className="fas fa-times cursor-pointer modal-close-cl"
              onClick={() => {
                  console.log("clicked");
                  hideModal
              }}
            ></i> */}
              <div className="modal-inner">
                <div className="modal-logo">
                  <div></div>
                  <BrandName />
                  {/* <Image
                    src={BrandLogo}
                    placeholder="blur"
                    alt="BrandName"
                    layout="responsive"
                  /> */}
                </div>
                <div className="modal-Welcome">Welcome</div>
                <div className="modal-Thanks">Thanks for Joining</div>
                <div className="modal-subText">
                  we will get back to you once waiting list is filled.
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
