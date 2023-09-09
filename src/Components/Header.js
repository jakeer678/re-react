import React from "react";
import logo from "../assets/Images/logo.svg";
import menu from "../assets/Images/menu.svg";
import vector from "../assets/Images/Vector.svg";
import social from "../assets/Images/search-icon.svg";
import arrowback from "../assets/Images/arrow_back.svg";
import arrowdown from "../assets/Images/keyboard_arrow_down.svg";
import "../Styles/Header.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="menu-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={menu} alt="" />
        </button>
        <div>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <div className="container text-center nav-icons">
            <div className="row align-items-center justify-content-center">
              <div className="col">
                <img src={vector} alt="vector" />
              </div>
              <div className="col">
                <img src={arrowback} alt="arrowback" />
              </div>
              <div className="col">
                <img src={social} alt="social" />
              </div>
              <div className="col">
                <p>IND</p>
              </div>
              <div className="col">
                <img src={arrowdown} alt="social" />
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </nav>
  );
};

export default Header;
