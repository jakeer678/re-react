import React, { Fragment, useContext } from "react";
import chevron from "../assets/Images/chevron_left.svg";
import chasis from "../assets/Images/view-chessis.svg";
import chasisnum from "../assets/Images/chasisnum.png";
import close from "../assets/Images/close.svg";
import Frame from "../assets/Images/Frame.svg";
import "../Styles/ChasisNumber.css";
import { contextStore } from "../context/Contextstore";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
const ChasisNumber = () => {
  const { show, handleShow, handleClose } = useContext(contextStore);

  return (
    <Fragment>
      <section>
        <Modal show={show} animation={false} onHide={handleClose}>
          <div className="modal-header">
            <div className="chasisheader">
              <img src={chevron} alt="back-btn" className="back-btn" />
              <h4 className="modal-title modalheader">Chassis Number</h4>
            </div>

            <span onClick={handleClose} className="closebtnchasis">
              &times;
            </span>
          </div>

          <div className="modal-body">
            <p className="chessis-body-title">Where to find Chassis Number?</p>
            <p className="sub-body-title">
              You can find the Chassis number written on the vehicle
              registration certificate.
            </p>
            <div className="sub-body-title-bottom-border"></div>
            <p className="chesis-view-zoomed">MALPC8131LLM109314</p>
            <div className="veritcalarrow"></div>
            <img
              src={chasisnum}
              alt="view-chessis-img"
              className="view-chessis-img"
            />
            <div className="vertcalLine">
              <div className="veritcalarrow-bottom"></div>
              <div className="vertical-line-mark">
                <img
                  src={Frame}
                  alt="view-chessis-img"
                  className="view-chessis-img"
                />
              </div>
            </div>
          </div>
          <div className="view-chessis-img-chasis"></div>
        </Modal>
      </section>
    </Fragment>
  );
};

export default ChasisNumber;
