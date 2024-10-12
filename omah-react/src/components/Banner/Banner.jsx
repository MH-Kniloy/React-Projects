import React from 'react'
import heroImg from '../../assets/unsplash_c.png'

const Banner = () => {
  return (
    <div>
      <section id="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-content">
              <h1>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
              <p>
                Menyediakan hunian bagi keluarga anda dengan varian pilihan dan
                lokasi yang strategis di kota anda dengan cara yang lebih mudah.
              </p>
              <div className="search-wrapper">
                <div className="search-input">
                  <i className="fa-solid fa-location-dot"></i>
                  <input
                    type="text"
                    placeholder="Search location, properties, residental group"
                  />
                </div>
                <div className="search-btn">
                  <a href="#">Search</a>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImg} alt="house-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner