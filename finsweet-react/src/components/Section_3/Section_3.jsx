import React from 'react'
import beardedMan from '../../assets/a-bearded-man-praying.jpg'
import readingBook from '../../assets/man-and-woman-reading-book-while-sitting-on-pews.jpg'
import peopleSitting from '../../assets/people-sitting-on-brown-pews.jpg'

const Section_3 = () => {
  return (
    <div>
      <section id="section-3">
        <div className="container">
          <div className="section-3-wrapper">
            <div className="section-3-text">
              <h6>SUB-HEADLINE</h6>
              <h2>love and compassion</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <a href="#">READ MORE</a>
            </div>
            <div className="section-3-image">
              <img src={beardedMan}alt="" />
              <img
                src={readingBook}
                alt=""
              />
              <img
                src={peopleSitting}
                alt=""
              />
            </div>
            <div className="section-3-bottom">
              <h6>our mission & vision</h6>
              <h2>celebrate WITH US</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#">Read More</a>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section_3