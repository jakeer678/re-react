import React from "react";
import logo from "../assets/Images/logo.svg";
import menu from "../assets/Images/menu.svg";
import vector from "../assets/Images/Vector.svg";
import social from "../assets/Images/search-icon.svg";
import arrowback from "../assets/Images/arrow_back.svg";
import Navbar from "react-bootstrap/Navbar";
import india from "../assets/Images/india.png";
import arrowdown from "../assets/Images/keyboard_arrow_down.svg";
import "../Styles/Header.css";
const Header = () => {
  const logoStyle = {
    fill: "red",
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="nav-header">
        <div className=" menu-logo">
          <div>
            <button className=" menu-btn" type="button">
              <img src={menu} alt="" className="menumimg" />
            </button>
          </div>
          <div>
            <img src={logo} alt="logo" className="logoimg" style={logoStyle} />
          </div>
        </div>

        <div className="nav-header-icons">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Motorcycles
                  <span>
                    <img src={arrowdown} alt="arrowdown" />
                  </span>
                </a>
                <ul className="dropdown-menu"></ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop The Look
                  <span>
                    <img src={arrowdown} alt="arrowdown" />
                  </span>
                </a>
                <ul className="dropdown-menu"></ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                  <span>
                    <img src={arrowdown} alt="arrowdown" />
                  </span>
                </a>
                <ul className="dropdown-menu"></ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  iRide
                  <span>
                    <img src={arrowdown} alt="arrowdown" />
                  </span>
                </a>
                <ul className="dropdown-menu"></ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Moto Life
                  <span>
                    <img src={arrowdown} alt="arrowdown" />
                  </span>
                </a>
                <ul className="dropdown-menu"></ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                  <span>
                    <img src={arrowdown} alt="arrowdown" />
                  </span>
                </a>
                <ul className="dropdown-menu"></ul>
              </li>
            </ul>
          </div>

          <div className="nav-icons">
            <div className="icons">
              <img src={vector} alt="vector" />
            </div>
            <div className="icons">
              <img src={arrowback} alt="arrowback" />
            </div>
            <div className="icons">
              <img src={social} alt="social" />
            </div>
            <div className="indiaimg">
              <img src={india} alt="social" />
            </div>
            <div className="india-text">
              <span>IND</span>
            </div>
            <div className="india-text-en">
              <span>EN</span>
            </div>
            <div className="iconssocial">
              <img src={arrowdown} alt="social" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
