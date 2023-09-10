import React, { useContext, useState, useRef, useEffect } from "react";
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

  const [resendTimer, setResendTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Create refs for each input field
  const inputRefs = Array(6)
    .fill()
    .map((_, index) => useRef(null));

  const handleInput = (event, index) => {
    // Start the timer when clicking on an input field
    if (!isTimerRunning) {
      setResendTimer(30);
      setIsTimerRunning(true);
    }

    // Check if the input is a number
    if (/^[0-9]$/.test(event.target.value)) {
      // Move to the next input field if available
      if (index < 5 && event.target.value !== "") {
        inputRefs[index + 1].current.focus();
      }
    } else {
      // Clear the input if it's not a number
      event.target.value = "";
    }
  };

  const handleBackspace = (event, index) => {
    // Move to the previous input field if available
    if (index > 0 && event.key === "Backspace" && event.target.value === "") {
      inputRefs[index - 1].current.focus();
    }
  };

  useEffect(() => {
    let countdown;
    if (resendTimer > 0 && isTimerRunning) {
      countdown = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [resendTimer, isTimerRunning]);

  const handleResendOtp = () => {
    // Add logic here to resend OTP
    setResendTimer(30); // Reset the timer to 30 seconds
    setIsTimerRunning(true);
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
                {inputRefs.map((ref, index) => (
                  <div className="col-2" key={index}>
                    <input
                      type="text"
                      className="form-control otp-input"
                      maxLength="1"
                      ref={ref}
                      onChange={(e) => handleInput(e, index)}
                      onKeyDown={(e) => handleBackspace(e, index)}
                    />
                  </div>
                ))}
              </div>
            </form>
            {resendTimer > 0 && (
              <div className="form-text text-muted resendOtp">
                Resend OTP in {resendTimer}s
              </div>
            )}
            {resendTimer === 0 && (
              <div
                id="resendOtp"
                type="button"
                className="form-text text-muted resendOtp"
                onClick={handleResendOtp}
              >
                Resend OTP
              </div>
            )}
            <button type="submit" className="verifybtns" onClick={otpVerified}>
              Verify
            </button>
          </div>
        </Modal>
      </section>
    </>
  );
};

export default OtpVerify;
