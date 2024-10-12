import React from "react";
import footerLogo from "../../assets/footerlogo.png";
const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-left">
              <img src={footerLogo} alt="footer-logo" />
              <h2>Let's go on vacation, Make your day</h2>
              <a href="#">Terms & Conditions</a>
              <div className="icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-btn">
                <h6>Ready to explore?</h6>
                <a href="#">Get Started</a>
              </div>
              <div className="footer-menu">
                <div className="services">
                  <ul>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">Email Marketing</a>
                    </li>
                    <li>
                      <a href="#">Campaigns</a>
                    </li>
                    <li>
                      <a href="#">Branding</a>
                    </li>
                    <li>
                      <a href="#">Offline</a>
                    </li>
                  </ul>
                </div>
                <div className="about">
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Our Story</a>
                    </li>
                    <li>
                      <a href="#">Benefits</a>
                    </li>
                    <li>
                      <a href="#">Term</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                  </ul>
                </div>
                <div className="help">
                  <ul>
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#">FAQ'S</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright &#169 2023 QWERy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
