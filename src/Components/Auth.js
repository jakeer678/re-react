import React, { useContext, useState } from "react";
import google from "../assets/Images/Google.svg";
import facebook from "../assets/Images/Facebook.svg";
import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/ChasisNumber.css";
import "../Styles/Auth.css";
import Modal from "react-bootstrap/Modal";
import { contextStore } from "../context/Contextstore";
const Auth = () => {
  const [inputNumber, setInputValue] = useState("+91");
  const { show, handleShow, handleClose } = useContext(contextStore);
  const redirect = useNavigate();
  const sendOtpAuth = () => {
    redirect("/verifyNumber");
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <section>
        <div>
          <Modal
            show={show}
            animation={false}
            className="modelcontent"
            onHide={handleClose}
          >
            <div className="modal-header">
              <h5 className="modal-title modalheader">Login or Signup</h5>
              <span onClick={handleClose} className="closebtnchasis">
                &times;
              </span>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="inputPhone">
                    Please enter your phone no.
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Enter Phone"
                    maxLength="14"
                    value={inputNumber}
                    onChange={handleInputChange}
                  />
                  <small className="form-text text-muted phoneHelp">
                    6-digit OTP will be sent to this phone number
                  </small>
                </div>
                <button
                  id="sendOtp"
                  type="submit"
                  className="btn btn-block disableOtp"
                  onClick={sendOtpAuth}
                >
                  SEND OTP
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
        </div>
      </section>
    </>
  );
};

export default Auth;
