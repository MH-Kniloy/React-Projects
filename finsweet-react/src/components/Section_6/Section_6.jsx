import React from 'react'
import quote from '../../assets/quoteicon.png'

const Section_6 = () => {
  return (
    <div>
      <section id="section-6">
        <div className="container">
          <div className="section-6-wrapper">
            <div className="section-6-text">
              <h2>We want to serve the world around us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
              <a href="#">VISIT</a>
            </div>
            <div className="section-6-quote">
              <img src={quote}alt="quote-icon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section_6