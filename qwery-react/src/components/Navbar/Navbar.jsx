import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav-items">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Information</a>
                </li>
                <li>
                  <a href="#">Culture</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
