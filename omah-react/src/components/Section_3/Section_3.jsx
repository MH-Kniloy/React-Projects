import React from 'react'
import unsplashK from '../../assets/unsplash_k.jpg'
import unsplashU from '../../assets/unsplash_u.jpg'

const Section_3 = () => {
  return (
    <div>
      <section id="section-3">
        <div className="container">
          <div className="section-3-wrapper">
            <div className="section-3-image">
              <p>Pilihan konsumen</p>
              <h4>Residen Favorit</h4>
              <img src = {unsplashK} alt="house" />
              <img
                className="position"
                src={unsplashU}
                alt="stairs"
              />
            </div>
            <div className="section-3-content">
              <h3>Bangunan yang dirancang oleh Aristektur Handal</h3>
              <p>
                Tanpa diragukan, properti yang disediakan dalam webiste kami
                merupakan hasil kerjasama secara profesional dengan para
                Arsitektur ternama dan Developer yang terpercaya.
              </p>
              <div className="section-3-btn">
                <div className="btn-1">
                  <i className="fa-solid fa-phone"></i>
                  <a href="#">Hubungi Kami</a>
                </div>
                <div className="btn-2">
                  <a href="#">Explore lebih banyak</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section_3