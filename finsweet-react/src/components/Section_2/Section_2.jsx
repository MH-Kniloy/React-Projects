import React from 'react'
import icon from '../../assets/icon.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'

const Section_2 = () => {
  return (
    <div>
      <section id="section-2">
        <div className="container">
          <div className="section-2-wrapper">
            <div className="section-2-text">
              <p>sub-headline</p>
              <h2>a church that's relevant</h2>
            </div>
            <div className="content-box-wrapper">
              <div className="section-2-content-box">
                <div className="circle">
                  <img src={icon} alt="praying-icon" />
                </div>
                <h3>About us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="section-2-content-box">
                <div className="circle">
                  <img src={icon1}alt="praying-icon" />
                </div>
                <h3>Get involved</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="section-2-content-box">
                <div className="circle">
                  <img src={icon2}alt="praying-icon" />
                </div>
                <h3>Giving back</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section_2