import React from "react";
import "../Styles/ChasisNumber.css";
import meteor50 from "../assets/Images/METEOR350.svg";
import himalayan from "../assets/Images/HIMALAYAN.svg";
import classic from "../assets/Images/CLASSIC350.svg";
import anotherModel from "../assets/Images/anotherModel.svg";
import close from "../assets/Images/close.svg";
const RegisterMotor = () => {
  return (
    <>
      <section>
        {/* <!--  Registered Motorcycle section trigger button --> */}
        <br />
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@getbootstrap"
        >
          Registered Motorcycle
        </button>

        {/* 
      <!--  Registered Motorcycle section Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className="regd-motor-header">
                  <h5 className="modal-title" id="modalTitle">
                    Registered Motorcycle
                  </h5>
                  <p className="regd-title">
                    Select the motorcycle to view personalised plans
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary closebtn closebtnsmotors"
                  data-bs-dismiss="modal"
                >
                  <span aria-hidden="true" className="">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div id="regd-motor-wrapper">
                  <div className="regd-motorcycles">
                    <input
                      type="radio"
                      name="option"
                      id="option1"
                      value="meteor350"
                      className=""
                    />
                    <label for="option1">
                      METEOR 350
                      <p className="motor-num">TN 22 DM 7518</p>
                    </label>
                    <img src={meteor50} alt="meteor-bike" class="meteor-bike" />
                  </div>

                  <div className="regd-motorcycles">
                    <input
                      type="radio"
                      name="option"
                      id="option2"
                      value="HIMALAYAN"
                      className=""
                    />
                    <label for="option2">
                      HIMALAYAN
                      <p className="motor-num">TN 22 DM 7518</p>
                    </label>
                    <img
                      src={himalayan}
                      alt="himalayan-bike"
                      className="himalayan-bike"
                    />
                  </div>

                  <div className="regd-motorcycles">
                    <input
                      type="radio"
                      name="option"
                      id="option3"
                      value="CLASSIC350"
                      className=""
                    />
                    <label for="option3">
                      CLASSIC 350
                      <p className="motor-num">TN 22 DM 7518</p>
                    </label>
                    <img
                      src={classic}
                      alt="CLASSIC350"
                      className="classic350-bike"
                    />
                  </div>
                  <div className="break">
                    <span>Or</span>
                  </div>
                  <div className="regd-motorcycles">
                    <input
                      type="radio"
                      name="option"
                      id="option4"
                      value="ANOTHER MOTORCYCLE"
                      className=""
                    />
                    <label for="option4">
                      View Plans for Another <br />
                      Motorcycle
                    </label>
                    <img
                      src={anotherModel}
                      alt="other-bike"
                      className="other-bike"
                    />
                  </div>
                </div>
              </div>
              <button
                id="regd-motorcycle-submit"
                type="submit"
                className="btn btn-block mt-4"
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterMotor;
