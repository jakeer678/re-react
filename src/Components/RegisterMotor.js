import React, { useContext, useState } from "react";
import "../Styles/ChasisNumber.css";
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
  const [selectedColor, setSelectedColor] = useState("");
  const redirect = useNavigate();
  const { show, handleShow, handleClose } = useContext(contextStore);

  const registerMotor = () => {
    redirect("/motorDetails");
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
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
            <h5 className="modal-title modalTitle">Registered Motorcycle</h5>

            <span onClick={handleClose} className="closebtnchasis">
              &times;
            </span>
          </div>
          <p className="regd-title">
            Select the motorcycle to view personalised plans
          </p>
          <div className="modal-body">
            <div id="regd-motor-wrapper">
              <div className="regd-motorcycles">
                <input
                  type="radio"
                  id="red"
                  name="color"
                  value="red"
                  onChange={handleColorChange}
                  checked={selectedColor === "red"}
                />
                <label htmlFor="red">
                  METEOR 350
                  <p className="motor-num">TN 22 DM 7518</p>
                </label>
                <img src={meteor50} alt="meteor-bike" className="meteor-bike" />
              </div>

              <div className="regd-motorcycles">
                <input type="radio" name="option" />
                <label htmlFor="option2">
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
                <input type="radio" name="option" />
                <label htmlFor="option3">
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
                <input type="radio" name="option" />
                <label htmlFor="option4">
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
            type="submit"
            className="btn btn-block mt-4 regd-motorcycle-submit"
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
