import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <div className="container">
          <div className="navbar-wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav-items">
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">ABOUT US</a>
                </li>
                <li>
                  <a href="#">SERMON</a>
                </li>
                <li>
                  <a href="#">BLOG</a>
                </li>
              </ul>
            </div>
            <div className="nav-btn">
              <a href="#">CONTACT US</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar