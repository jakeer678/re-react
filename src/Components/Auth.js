import React, { Fragment, useContext, useState } from "react";
import google from "../assets/Images/Google.svg";
import facebook from "../assets/Images/Facebook.svg";
import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/Auth.css";
import Modal from "react-bootstrap/Modal";
import { contextStore } from "../context/Contextstore";

const Auth = () => {
  const [inputNumber, setInputValue] = useState("");
  const { show, handleShow, handleClose } = useContext(contextStore);
  const redirect = useNavigate();
  const sendOtpAuth = () => {
    redirect("/verifyNumber");
  };

  const handleInputChange = (event) => {
    const inputText = event.target.value.replace(/[^0-9+]/g, "");
    setInputValue(inputText);
  };

  return (
    <Fragment>
      <section>
        <div>
          <Modal show={show} animation={false} onHide={handleClose}>
            <div className="modal-header">
              <h3 className="modal-title modalheader">Login or Signup</h3>
              <span onClick={handleClose} className="closebtnchasis">
                &times;
              </span>
            </div>
            <div className="modal-body-auth">
              <form>
                <label htmlFor="inputPhone">Please enter your phone no.</label>
                <div className="input-group">
                <input
                 
                  className="form-control motorcycle-details motor-reg-no"
                  id="chassis-no"
                  type="tel"
                  value={inputNumber}
                  onChange={handleInputChange}
                  inputMode="tel"
                  pattern="[0-9]*"
                  maxLength="14"
                  placeholder="Enter Phone Number"
                />
                
                </div>
                <span className="phoneHelpauth">
                  6-digit OTP will be sent to this phone number
                </span>

                <button type="submit" className="authbtn" onClick={sendOtpAuth}>
                  SEND OTP
                </button>
                <p className="phoneHelpcont">
                  By continuing, you agree to our
                  <span className="redirect-links">Terms and Conditions</span>
                  and
                  <span className="redirect-links">Privacy Policy</span>
                </p>
              </form>
            </div>
          </Modal>
        </div>
      </section>
    </Fragment>
  );
};

export default Auth;
