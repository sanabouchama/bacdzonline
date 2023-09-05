import React from "react";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={colorChange ? "navbar-newContainer" : "navbar-container"}>
      <div className="items-container">
        <ul>
          <li>
            {" "}
            <NavLink to="./sign In" className="button" activeclassname="active">
              <span className="dep-text-navbar"> المساعدة</span>
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="./sign Up" className="button" activeclassname="active">
              <span className="dep-text-navbar">التسجيل</span>
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="./sign " className="button" activeclassname="active">
              <span className="dep-text-navbar">الدخول</span>
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="./sign cc" className="button" activeclassname="active">
              <span className="dep-text-navbar">الرئيسية</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="logo-container">
        <img src={logo}></img>
      </div>
    </div>
  );
}
export default Navbar;
