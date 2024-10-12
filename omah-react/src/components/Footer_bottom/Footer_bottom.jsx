import React from 'react'
import footerLogo from '../../assets/footerLogo.png'

const Footer_bottom = () => {
  return (
    <div>
      <section id="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <div className="logo">
              <img src={footerLogo} alt="logo" />
            </div>
            <div className="social">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-tumblr"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer_bottom