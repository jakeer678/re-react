import React, { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contextStore } from "../context/Contextstore";
import Modal from "react-bootstrap/Modal";
import "../Styles/EnterOtp.css";
const EnterOtp = () => {
  const [inputNumber, setInputNumber] = useState("+91");
  const { show, handleShow, handleClose } = useContext(contextStore);
  const redirect = useNavigate();

  const enterotpverify = () => {
    redirect("/otpVerify");
  };

  return (
    <Fragment>
      <section>
        <Modal show={show} animation={false} onHide={handleClose}>
          <div className="modal-header">
            <h5 className="modal-title modalTitle">Login or Signup</h5>
            <span onClick={handleClose} className="closebtnchasis">
              &times;
            </span>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="inputPhone">Please enter your phone no.</label>
                <input
                  type="tel"
                  value={inputNumber}
                  className="form-control"
                  id="inputPhone"
                  placeholder="Enter Phone"
                  maxLength="14"
                  onChange={(e) => e.target.value}
                />
                <small className="form-text text-muted phoneHelp">
                  6-digit OTP will be sent to this phone number
                </small>
              </div>
              <button
                id="sendOtp"
                type="submit"
                className="btn btn-block disableOtp"
                onClick={enterotpverify}
              >
                VERIFY
              </button>
              <small className="form-text text-muted phoneHelp">
                By continuing, you agree to our
                <span className="redirect-links">Terms and Conditions</span>
                and
                <span className="redirect-links">Privacy Policy</span>
              </small>
            </form>
          </div>
        </Modal>
      </section>
    </Fragment>
  );
};

export default EnterOtp;
