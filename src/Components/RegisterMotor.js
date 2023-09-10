import React, { useContext, useState } from "react";
import meteor50 from "../assets/Images/METEOR350.svg";
import himalayan from "../assets/Images/HIMALAYAN.svg";
import classic from "../assets/Images/CLASSIC350.svg";
import anotherModel from "../assets/Images/anotherModel.svg";
import close from "../assets/Images/close.svg";
import { useNavigate } from "react-router-dom";
import { contextStore } from "../context/Contextstore";
import Modal from "react-bootstrap/Modal";
import "../Styles/RegisterMotor.css";
const RegisterMotor = () => {
  const [selectedColor, setSelectedColor] = useState({
    red: false,
    blue: false,
    green: false,
    other: false,
  });
  const redirect = useNavigate();
  const { show, handleShow, handleClose } = useContext(contextStore);

  const registerMotor = () => {
    redirect("/motorDetails");
  };

  const handleColorChange = (color) => {
    setSelectedColor({
      red: color === "red",
      blue: color === "blue",
      green: color === "green",
      other: color === "other",
    });
  };
  
  const containerStyle = (color) => ({
    backgroundColor: selectedColor[color] ? 'var(--secondary-gold-gold-800, #403B29)' : '#373737',
  });

  return (
    <>
      <section>
        <Modal
          show={show}
          animation={false}
          onHide={handleClose}
          id="registerModal"
        >
          <div className="modal-header">
            <h5 className="modal-titles">Registered Motorcycle</h5>
            <div onClick={handleClose} className="closebtnchasisreg">
              &times;
            </div>
          </div>
          <p className="regd-title">
            Select the motorcycle to view personalized plans
          </p>
          <div className="modal-body">
            <div id="regd-motor-wrapper">
              <div className="regd-motorcycles" style={containerStyle("red")}>
                <input
                  type="radio"
                  id="red"
                  name="color"
                  value="red"
                  onChange={() => handleColorChange("red")}
                  checked={selectedColor.red}
                />
                <label htmlFor="red">
                  METEOR 350
                  <p className="motor-num">TN 22 DM 7518</p>
                </label>
                <img src={meteor50} alt="meteor-bike" className="meteor-bike" />
              </div>

              <div className="regd-motorcycles" style={containerStyle("blue")}>
                <input
                  type="radio"
                  id="blue"
                  name="color"
                  value="blue"
                  onChange={() => handleColorChange("blue")}
                  checked={selectedColor.blue}
                />
                <label htmlFor="blue">
                  HIMALAYAN
                  <p className="motor-num">TN 22 DM 7518</p>
                </label>
                <img src={himalayan} alt="himalayan-bike" className="himalayan-bike" />
              </div>

              <div className="regd-motorcycles" style={containerStyle("green")}>
                <input
                  type="radio"
                  id="green"
                  name="color"
                  value="green"
                  onChange={() => handleColorChange("green")}
                  checked={selectedColor.green}
                />
                <label htmlFor="green">
                  CLASSIC 350
                  <p className="motor-num">TN 22 DM 7518</p>
                </label>
                <img src={classic} alt="CLASSIC350" className="classic350-bike" />
              </div>
              <div className="break">
                <span>Or</span>
              </div>
              <div className="regd-motorcycles" style={containerStyle("other")}>
                <input
                  type="radio"
                  id="other"
                  name="color"
                  value="other"
                  onChange={() => handleColorChange("other")}
                  checked={selectedColor.other}
                />
                <label htmlFor="other">
                  View Plans for Another <br />
                  Motorcycle
                </label>
                <img src={anotherModel} alt="other-bike" className="other-bike" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="verifybtn"
            onClick={registerMotor}
          >
            CONTINUE
          </button>
        </Modal>
      </section>
    </>
  );
};

export default RegisterMotor;