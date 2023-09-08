import React, { useContext } from "react";
import chevron from "../assets/Images/chevron_left.svg";
import chasis from "../assets/Images/view-chessis.svg";
import close from "../assets/Images/close.svg";
import "../Styles/ChasisNumber.css";
import { contextStore } from "../context/Contextstore";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
const ChasisNumber = () => {
  const { show, handleShow, handleClose } = useContext(contextStore);

  return (
    <>
      <section>
        <Modal show={show} animation={false} onHide={handleClose}>
          <div className="modal-header">
            <div className="chasisheader">
              <img src={chevron} alt="back-btn" className="back-btn" />
              <h5 className="modal-title modalheader">Chassis Number</h5>
            </div>

            <span onClick={handleClose} className="closebtnchasis">&times;</span>
          </div>

          <div className="modal-body">
            <p className="chessis-body-title">Where to find Chassis Number?</p>
            <p className="sub-body-title">
              You can find the Chassis number written on the vehicle
              registration certificate.
            </p>
            <p className="chesis-view-zoomed">MALPC8131LLM109314</p>
            <img
              src={chasis}
              alt="view-chessis-img"
              className="view-chessis-img"
            />
          </div>
        </Modal>
      </section>
    </>
  );
};

export default ChasisNumber;
