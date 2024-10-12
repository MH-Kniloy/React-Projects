import React from 'react'
import image8 from '../../assets/image8.png'

const Footer = () => {
  return (
    <div>
      <section id="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-left">
              <h6>Hubungi Kami</h6>
              <div className="number-box-wrapper">
                <div className="number-box">
                  <i className="fa-solid fa-phone"></i>
                  <h6>Call</h6>
                  <p>+6281232936733</p>
                  <a href="#">Call Now</a>
                </div>

                <div className="number-box">
                  <i className="fa-solid fa-phone"></i>
                  <h6>Call</h6>
                  <p>+6281232936733</p>
                  <a href="#">Call Now</a>
                </div>
              </div>
            </div>
            <div className="footer-right">
              <h5>Penghargaan</h5>
              <img src={image8} alt="footer-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer