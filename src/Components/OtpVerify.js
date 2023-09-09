import React, { useContext, useState } from "react";
import chevron from "../assets/Images/chevron_left.svg";
import chasis from "../assets/Images/view-chessis.svg";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "../Styles/Otpverify.css";
import { contextStore } from "../context/Contextstore";
const OtpVerify = () => {
  const { show, handleShow, handleClose } = useContext(contextStore);

  const redirect = useNavigate();
  const otpVerified = () => {
    redirect("/registerMotor");
  };
  return (
    <>
      <section>
        <Modal show={show} animation={false} onHide={handleClose}>
          <div className="modal-header">
            <div className="chasisheader">
              <img src={chevron} alt="back-btn" className="back-btn" />
              <h5 className="modal-title modalheader">OTP Verification</h5>
            </div>

            <span onClick={handleClose} className="closebtnchasis">
              &times;
            </span>
          </div>
          <div className="modal-body">
            <label htmlFor="">Enter OTP</label>
            <form id="myForm" method="get" className="digit-group">
              <div className="row justify-content-center">
                <div className="col-2">
                  <input type="text" className="form-control otp-input" />
                </div>
                <div className="col-2">
                  <input type="text" className="form-control otp-input" />
                </div>
                <div className="col-2">
                  <input type="text" className="form-control otp-input" />
                </div>
                <div className="col-2">
                  <input type="text" className="form-control otp-input" />
                </div>
                <div className="col-2">
                  <input type="text" className="form-control otp-input" />
                </div>
                <div className="col-2">
                  <input type="text" className="form-control otp-input" />
                </div>
              </div>
            </form>
            <div className="form-text text-muted resendOtp">Resend OTP</div>
            <button
              id="verifyOtp"
              type="submit"
              className="btn btn-block disableOtp "
              onClick={otpVerified}
            >
              Verify
            </button>
          </div>
        </Modal>
      </section>
    </>
  );
};

export default OtpVerify;
