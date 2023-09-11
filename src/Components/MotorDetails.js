import React, { useContext } from "react";
import chevron from "../assets/Images/chevron_left.svg";
import info from "../assets/Images/info.svg";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { contextStore } from "../context/Contextstore";
import "../Styles/MotorDetails.css";
const MotorDetails = () => {
  const redirect = useNavigate();
  const { show, handleShow, handleClose } = useContext(contextStore);
  const motorDetails = () => {
    redirect("/chasisNumber");
  };
  return (
    <>
      <section>
        <Modal show={show} animation={false} onHide={handleClose}>
          <div className="modal-header">
            <h2 className="modal-title modalheader">
              Enter Motorcycle Details
            </h2>
            <span onClick={handleClose} className="closebtnchasis">
              &times;
            </span>
          </div>
          <div className="modal-body">
            <form>
              <div className="vehicle-details-form">
                <label htmlFor="motor-reg-no">
                  Enter your Vehicle Registration Number
                </label>
                <input
                  type="text"
                  className="form-control motorcycle-details motor-reg-no"
                  id="chassis-no"
                  placeholder="Enter Vehicle Register Number"
                />
                <div className="break" style={{ margin: "4" }}>
                  <span>Or</span>
                </div>
                <label htmlFor="chassis-no">Enter your Chassis Number</label>
                <input
                  type="text"
                  className="form-control motorcycle-details motor-reg-no"
                  id="chassis-no"
                  placeholder="Enter Chassis Number"
                />
                <span className="redirect-links">
                  Where to find Chasis Number?
                </span>
              </div>
            </form>
            <button
              type="submit"
              className="motorDeatailbtn"
              onClick={motorDetails}
            >
              Verify &nbsp;and &nbsp;Continue
            </button>
          </div>
        </Modal>
      </section>
    </>
  );
};

export default MotorDetails;
