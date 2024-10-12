import React from 'react'
import footerlogo from '../../assets/logoyellow.png'

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-logo">
              <img src={footerlogo}alt="footer-logo" />
              <p>© Copyright Finsweet 2022</p>
              <h6>(480) 555-0103</h6>
              <h5>4517 Washington Ave.</h5>
              <h4>finsweet@example.com</h4>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#"></a>Quicklinks
                </li>
                <li>
                  <a href="#">ABOUT US</a>
                </li>
                <li>
                  <a href="#">SERMONS</a>
                </li>
                <li>
                  <a href="#">EVENTS</a>
                </li>
                <li>
                  <a href="#">BLOG</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <p>Connect</p>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get Latest Updates and News</h3>
              <div className="footer-input">
                <input type="text" placeholder="Yourmail@gmail.com" />
                <a href="#">SUBSCRIBE</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer