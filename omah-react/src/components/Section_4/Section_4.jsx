import React from 'react'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.png'
import image7 from '../../assets/image7.jpg'

const Section_4 = () => {
  return (
    <div>
      <section id="section-4">
        <div className="container">
          <div className="section-4-wrapper">
            <p>Pilihan Auditor</p>
            <h3>Residen Berbagai Kota</h3>
            <div className="image-box-wrapper">
              <div className="section-4-image-box">
                <img src={image5} alt="house" />
                <h5>Magnolia Surabaya</h5>
                <p>
                  Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec.
                  Jatiuwung, Kota Tangerang, Banten 15136
                </p>
              </div>

              <div className="section-4-image-box">
                <img src={image6} alt="house" />
                <h5>Pinang Residences</h5>
                <p>
                  Jl. Deplu Raya No.16 RT.5, RW.003 Bintaro, Pesanggrahan,
                  Jakarta Selatan 12330
                </p>
              </div>

              <div className="section-4-image-box">
                <img src={image7} alt="house" />
                <h5>South Grove</h5>
                <p>
                  1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta
                  Selatan, Daerah Khusus Ibukota Jakarta 12440
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section_4