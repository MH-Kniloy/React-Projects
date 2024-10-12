import React from 'react'
import angelCostume from "../../assets/a-man-and-woman-wearing-angel-costumes.jpg";

const Section_5 = () => {
  return (
    <div>
      <section id="section-5">
        <div className="container">
          <div className="section-5-wrapper">
            <div className="section-5-text">
              <p>Upcoming SERMONS</p>
              <h2>join us and become part of something great</h2>
            </div>
            <div className="section-5-content-wrapper">
              <div className="section-5-content-box">
                <div className="date">
                  <p>
                    20 <span>JULY</span>
                  </p>
                </div>
                <h6>Upcoming Event</h6>
                <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </h5>
                <div className="time">
                  <i className="fa-regular fa-clock"></i>
                  <p>Friday 23:39 IST Saturday 11:20 ISD</p>
                </div>
                <div className="location">
                  <i className="fa-sharp fa-solid fa-location-pin"></i>
                  <p>No 233 Main St. New York, United States</p>
                </div>
                <a href="#">REGISTER</a>
              </div>
              <div className="section-5-content-image">
                <img
                  src={angelCostume}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="sermon">
            <a href="#">View all Sermons</a>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section_5