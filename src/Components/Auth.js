import React from "react";
import google from "../assets/Images/Google.svg";
import facebook from "../assets/Images/Facebook.svg";
import "../Styles/ChasisNumber.css";

const Auth = () => {
  return (
    <>
      {/* Login & Signup Section  */}
      <section>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
          data-bs-whatever="@mdo"
        >
          Login & Signup
        </button>

        {/* <!-- Login & Signup Modal --> */}
        <div
          className="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabe"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitle">
                  Login or Signup
                </h5>
                <button
                  type="button"
                  className="btn btn-secondary closebtn"
                  data-bs-dismiss="modal"
                >
                  <span aria-hidden="false">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="inputPhone">Please enter your phone no.</label>
                    <input
                      type="tel"
                      value="+91 "
                      className="form-control"
                      id="inputPhone"
                      aria-describedby="phoneHelp"
                      placeholder="Enter Phone"
                      maxlength="14"
                      onkeyup="checkMobNum()"
                    />
                    <small id="phoneHelp" class="form-text text-muted">
                      6-digit OTP will be sent to this phone number
                    </small>
                  </div>
                  <button
                    id="sendOtp"
                    type="submit"
                    className="btn btn-block disableOtp"
                  >
                    Send OTP
                  </button>
                  <small id="phoneHelp" className="form-text text-muted">
                    By continuing, you agree to our
                    <span className="redirect-links">
                      Terms and Conditions
                    </span>{" "}
                    and
                    <span className="redirect-links">Privacy Policy</span>
                  </small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
