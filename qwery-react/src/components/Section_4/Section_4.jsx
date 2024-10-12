import React from "react";
import culture from "../../assets/culture.jpg";

const Section_4 = () => {
  return (
    <div>
      <section id="section-4">
        <div className="container">
          <div className="section-4-wrapper">
            <div className="text-part-culture">
              <h5>INDONESIAN CULTURE</h5>
              <h2>Our culture here is very friendly to people</h2>
              <h6>
                known for his politeness, manners and gentleness. This becomes a
                characteristic when they mingle with other tribes and become
                basic traits that are passed down by their ancestors.
              </h6>
              <a href="#">read more</a>
            </div>
            <div className="image-part-culture">
              <img src={culture} alt="culture-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section_4;
