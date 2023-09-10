import React, { useContext, useState } from "react";
import google from "../assets/Images/Google.svg";
import facebook from "../assets/Images/Facebook.svg";
import "../Styles/ChasisNumber.css";
import "../Styles/Auth.css";
import "../Styles/VerifyNumber.css";
import { useNavigate } from "react-router-dom";
import { contextStore } from "../context/Contextstore";
import Modal from "react-bootstrap/Modal";
const VerifyNumber = () => {
  const [inputNumber, setInputValue] = useState("+91");
  const redirect = useNavigate();
  const { show, handleShow, handleClose } = useContext(contextStore);

  const verifyNumber = () => {
    redirect("/enterOtp");
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
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
                <input
                  type="tel"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Enter Phone"
                  maxLength="14"
                  value={inputNumber}
                  onChange={handleInputChange}
                />
                <span className="phoneHelpauth">
                  6-digit OTP will be sent to this phone number
                </span>

                <button
                  type="submit"
                  className="verifybtn"
                  onClick={verifyNumber}
                >
                  VERIFY
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
    </>
  );
};

export default VerifyNumber;
