import React from 'react'
import logo from '../../assets/logo.png'

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
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Properties</a>
                </li>
                <li>
                  <a href="#">Contact </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar