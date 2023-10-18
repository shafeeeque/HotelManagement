import React from "react";
import Navbar from "../../commen/Navbar/Navbar";
import AboutCard from "./AboutCard";
import HeadTitle from "../../commen/HeadTitle/HeadTitle";

const About = () => {
  return (
    <>
      <Navbar />
      <HeadTitle/>      
      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>

      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              Our <span>Features</span>
            </h1>
            <p>
              {" "}
              Describe any innovative methods or technologies you use to drive
              business growth.
            </p>
            <p>
              Communicate how your solutions can boost growth without causing a
              significant financial burden
            </p>
            <button className="secondary-btn">
              Explore More
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div className="row image">
          <img src="/images/feature-img-1.jpg" alt="" />
          {/* <div className='control-btn'>
                        <button className='prev'>
                        <i className='fas fa-play'></i>
                        </button>                      
                    </div> */}
        </div>
        </div>
      </section>
    </>
  );
};

export default About;
