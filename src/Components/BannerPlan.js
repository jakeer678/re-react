import React, { Fragment, useContext } from "react";
import warranty from "../assets/Images/warranty.svg";
import keyboardarrowright from "../assets/Images/keyboard_arrow_right.svg";
import maintenence from "../assets/Images/maintenence.svg";
import rsa from "../assets/Images/rsa.svg";
import "../Styles/BannerPlan.css";
import { contextStore } from "../context/Contextstore";
import { useNavigate } from "react-router-dom";
import iconBox from "../assets/Images/icon box.svg";

export const BannerPlan = () => {
  const { handleShow, handleClose, openModal } = useContext(contextStore);
  const redirect = useNavigate();
  const openLoginmodal = () => {
    redirect("/auth");
    handleShow();
  };
  return (
    <Fragment>
      <section>
        <div className="banner-plans container-fluid">
          <div className="ride-sure-plans">
            <p className="plan-title">Buy your Ride Sure Plans</p>
            <div className="plan-cards">
              <div className="ride-plans">
                <img className="plan-logo" src={warranty} alt="" />
                <p className="card-title">
                  Extended Warranty
                  <img
                    className="plan-arrow_right"
                    src={keyboardarrowright}
                    alt="arrow_right"
                  />
                </p>
                <span className="plan-decs">
                  Covers most mechanical parts for a secured ownership
                  experience
                </span>
              </div>
              <div className="ride-plans">
                <img className="plan-logo" src={maintenence} alt="" />
                <p className="card-title">
                  Annual Maintenance Contract
                  <img
                    className="plan-arrow_right"
                    src={keyboardarrowright}
                    alt="arrow_right"
                  />
                </p>
                <span className="plan-decs">
                  Comprehensive service repair and packages for your motorcycle
                </span>
              </div>
              <div className="ride-plans">
                <img className="plan-logo" src={rsa} alt="" />
                <p className="card-title">
                  Retail RSA Plan
                  <img
                    className="plan-arrow_right"
                    src={keyboardarrowright}
                    alt="arrow_right"
                  />
                </p>
                <span className="plan-decs">
                  24x7 emergency support in the event of break-down or accident
                </span>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-container timeline1">
                <div className="ride-plans">
                  <p className="card-title">
                    Extended Warranty
                    <img
                      className="plan-arrow_right"
                      src={keyboardarrowright}
                      alt="arrow_right"
                    />
                  </p>
                  <span className="plan-decs">
                    Covers most mechanical parts for a secured ownership
                    experience
                  </span>
                </div>
              </div>
              <div className="timeline-container timeline2">
                <div className="ride-plans">
                  <p className="card-title">
                    Annual Maintenance Contract
                    <img
                      className="plan-arrow_right"
                      src={keyboardarrowright}
                      alt="arrow_right"
                    />
                  </p>
                  <span className="plan-decs">
                    Comprehensive service repair and packages for your
                    motorcycle
                  </span>
                </div>
              </div>
              <div className="timeline-container timeline3">
                <div className="ride-plans">
                  <p className="card-title">
                    Retail RSA Plan
                    <img
                      className="plan-arrow_right"
                      src={keyboardarrowright}
                      alt="arrow_right"
                    />
                  </p>
                  <span className="plan-decs">
                    24x7 emergency support in the event of break-down or
                    accident
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="explorebtm">
            <button onClick={openLoginmodal} className="explore-btn">
              EXPLORE RIDE SURE
              <img className="arrow_right" src={iconBox} alt="arrow_right" />
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
