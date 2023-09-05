import React from "react";
import chevron from "../assets/Images/chevron_left.svg";
import chasis from "../assets/Images/view-chessis.svg";
import "../Styles/ChasisNumber.css";

const OtpVerify = () => {
  return (
    <>
      <section>
        {/* <!-- OTP Button trigger modal --> */}
        <br />
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal3"
          data-bs-whatever="@mdo"
        >
          Otp Verify
        </button>

        {/* <!-- OTP verification Modal --> */}
        <div
          className="modal fade"
          id="exampleModal3"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <img src={chevron} alt="back-btn" />
                <h5 className="modal-title otpverify" id="modalTitle otpverify">
                  OTP Verification
                </h5>
                <button
                  type="button"
                  className="btn btn-secondary closebtn"
                  data-bs-dismiss="modal"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <label for="">Enter OTP</label>
                <form
                  id="myForm"
                  method="get"
                  className="digit-group"
                  data-group-name="digits"
                  data-autosubmit="false"
                  autocomplete="off"
                >
                  <input
                    type="text"
                    id="digit-1"
                    name="digit-1"
                    data-next="digit-2"
                  />
                  <input
                    type="text"
                    id="digit-2"
                    name="digit-2"
                    data-next="digit-3"
                    data-previous="digit-1"
                  />
                  <input
                    type="text"
                    id="digit-3"
                    name="digit-3"
                    data-next="digit-4"
                    data-previous="digit-2"
                  />
                  <input
                    type="text"
                    id="digit-4"
                    name="digit-4"
                    data-next="digit-5"
                    data-previous="digit-3"
                  />
                  <input
                    type="text"
                    id="digit-5"
                    name="digit-5"
                    data-next="digit-6"
                    data-previous="digit-4"
                  />
                  <input
                    type="text"
                    id="digit-6"
                    name="digit-6"
                    data-next="digit-7"
                    data-previous="digit-5"
                  />
                </form>
                <small id="resendOtp" className="form-text text-muted">
                  Resend OTP
                </small>
                <button
                  id="verifyOtp"
                  type="submit"
                  className="btn btn-block disableOtp"
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtpVerify;
