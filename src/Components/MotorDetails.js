import React, { useContext } from "react";
import chevron from "../assets/Images/chevron_left.svg";
import info from "../assets/Images/info.svg";
import "../Styles/ChasisNumber.css";
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
              <h5 className="modal-title modalheader">Enter Motorcycle Details</h5>
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
                  aria-describedby="reg-no"
                  placeholder="Enter Vehicle Registration Number"
                />
                <div className="break" style={{ margin: "4" }}>
                  <span>Or</span>
                </div>
                <label htmlFor="chassis-no">Enter your Chassis Number</label>
                <input
                  type="text"
                  className="form-control motorcycle-details"
                  id="chassis-no"
                  aria-describedby="Chassis"
                  placeholder="Enter Chassis Number"
                />
                <small className="redirect-links">
                  Where to find Chasis Number?
                </small>
              </div>
            </form>
            <button
              id="confirm-vehicle"
              type="submit"
              className="btn btn-block disableOtp"
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
