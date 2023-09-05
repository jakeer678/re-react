import React from "react";
import chevron from "../assets/Images/chevron_left.svg";
import info from "../assets/Images/info.svg";
import "../Styles/ChasisNumber.css";

const MotorDetails = () => {
  return (
    <>
      <section>
        {/* <!-- motorcycle details trigger button --> */}
        <br />
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal4"
          data-bs-whatever="@mdo"
        >
          Enter Motorcycle Details
        </button>

        {/* <!-- motorcycle details Modal --> */}
        <div
          className="modal fade"
          id="exampleModal4"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitle">
                  Enter Motorcycle Details
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
                <div className="toaster">
                  <img src={info} alt="info-img" />
                  <p className="reg-fail-toast">
                    No Motorcycle registered on +91 9865788757. Provide any of
                    the below details to continue
                  </p>
                </div>
                <form>
                  <div className="vehicle-details-form">
                    <label for="motor-reg-no">
                      Enter your Vehicle Registration Number
                    </label>
                    <input
                      type="text"
                      className="form-control motorcycle-details"
                      id="motor-reg-no"
                      aria-describedby="reg-no"
                      placeholder="Enter Vehicle Registration Number"
                    />
                    <div className="break" style={{ margin: "4" }}>
                      <span>Or</span>
                    </div>
                    <label for="chassis-no">Enter your Chassis Number</label>
                    <input
                      type="text"
                      className="form-control motorcycle-details"
                      id="chassis-no"
                      aria-describedby="Chassis"
                      placeholder="Enter Chassis Number"
                    />
                    <small
                      className="redirect-links"
                      // style={{"font-weight": 600 "color": #fd5050 "font-size": 12px}}
                    >
                      Where to find Chasis Number?
                    </small>
                  </div>
                </form>
                <button
                  id="confirm-vehicle"
                  type="submit"
                  className="btn btn-block disableOtp"
                >
                  Verify &nbsp;and &nbsp;Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MotorDetails;
