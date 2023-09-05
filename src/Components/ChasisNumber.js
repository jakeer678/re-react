import React from "react";
import chevron from "../assets/Images/chevron_left.svg";
import chasis from "../assets/Images/view-chessis.svg";
import close from "../assets/Images/close.svg";

import "../Styles/ChasisNumber.css";
const ChasisNumber = () => {
  return (
    <>
      <section>
        {/* --  Chassis Number section trigger button  */}
        <br />
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
          data-bs-whatever="@mdo"
        >
          Chassis Number
        </button>
        {/* 
       Chassis Number section Modal */}
        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <img src={chevron} alt="back-btn" className="back-btn" />
                <h5
                  className="modal-title view-chassis-header-title"
                  id="modalTitle"
                >
                  Chassis Number
                </h5>
                <button
                  type="button"
                  class="btn btn-secondary closebtn"
                  data-bs-dismiss="modal"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="chessis-body-title">
                  Where to find Chassis Number?
                </p>
                <p className="sub-body-title">
                  You can find the Chassis number written on the vehicle
                  registration certificate.
                </p>
                <p className="chesis-view-zoomed">MALPC8131LLM109314</p>
                <canvas id="arrowCanvas"></canvas>
                <img
                  src={chasis}
                  alt="view-chessis-img"
                  className="view-chessis-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChasisNumber;
