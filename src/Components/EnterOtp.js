import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  Fragment,
} from "react";
import chevron from "../assets/Images/chevron_left.svg";
import chasis from "../assets/Images/view-chessis.svg";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { contextStore } from "../context/Contextstore";
import "../Styles/EnterOtp.css";

const EnterOtp = () => {
  const { show, handleShow, handleClose } = useContext(contextStore);

  const redirect = useNavigate();
  const otpVerified = () => {
    redirect("/otpVerify");
  };

  const [resendTimer, setResendTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const inputRefs = Array(6)
    .fill()
    .map((_, index) => useRef(null));

  const handleInput = (event, index) => {
    if (!isTimerRunning) {
      setResendTimer(30);
      setIsTimerRunning(true);
    }

    if (/^[0-9]$/.test(event.target.value)) {
      if (index < 5 && event.target.value !== "") {
        inputRefs[index + 1].current.focus();
      }
    } else {
      event.target.value = "";
    }
  };

  const handleBackspace = (event, index) => {
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
  const style = {
    color: "white",
  };

  return (
    <Fragment>
      <section>
        <Modal show={show} animation={false} onHide={handleClose}>
          <div className="modal-header">
            <div className="chasisheader">
              <img src={chevron} alt="back-btn" className="back-btn" />
              <h3 className="modal-title modalheader">OTP Verification</h3>
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
                      inputMode="numeric"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="none"
                      style={{ style }}
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
                onClick={() => {
                  setResendTimer(30);
                  setIsTimerRunning(true);
                }}
              >
                Resend OTP
              </div>
            )}
            <button
              id="verifyOtp"
              type="submit"
              className="btn btn-block disableOtp"
              onClick={otpVerified}
            >
              Verify
            </button>
          </div>
        </Modal>
      </section>
    </Fragment>
  );
};

export default EnterOtp;
