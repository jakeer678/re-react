import React, { useContext } from "react";
import "../Styles/Banner.css";
import strip from "../assets/Images/Strip.svg";
import iconBox from "../assets/Images/icon box.svg";
import bannerVideo from "../assets/Images/banner-video.svg";
import { contextStore } from "../context/Contextstore";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { handleShow, handleClose,openModal } = useContext(contextStore);
  const redirect = useNavigate();
    const openLoginmodal = () => {
      redirect('/auth')
      handleShow()
    }
  return (
    <>
      <section>
        <div className="banner-main container-fluid">
          <div id="banner">
            <div className="banner-content">
              <div className="banner-strip">
                <img className="" src={strip} alt="" />
              </div>
              <div className="banner-wrapper">
                <p className="banner-title">Ride Sure</p>
                <p className="banner-desc">
                  Get hassle-free ownership experience with
                  <span className="desc-imp">Ride Sure</span>. Choose your
                  package based on your riding style and usage.
                </p>
                <button onClick={openLoginmodal} className="explore-btn">
                  EXPLORE RIDE SURE
                  <img
                    className="arrow_right"
                    src={iconBox}
                    alt="arrow_right"
                  />
                </button>
              </div>
            </div>

            <div className="banner-img">
              <img
                className="arrow_right"
                src={bannerVideo}
                alt="arrow_right"
              />
            </div>
          </div>
        </div>
        <button></button>
      </section>
    </>
  );
};

export default Banner;
