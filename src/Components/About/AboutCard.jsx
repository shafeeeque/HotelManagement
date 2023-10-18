import React from "react";
import "./About.css";

const AboutCard = () => {
  return (
    <>
      <div className="aboutCard mtop flex_space">
        <div className="row row1">
          <h4>About Us</h4>
          <h1>
            We <span>Provide Solution</span> to grow your Bussiness
          </h1>
          <p>
            Emphasize your ability to customize solutions that align with the
            unique needs and goals of each client.
          </p>
          <p>
            Communicate how your solutions can boost growth without causing a
            significant financial burden.
          </p>
          <button className="secondary-btn">
            Explore More
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <div className="row image">
          <img src="/images/about-img-1.jpg" alt="" />
          {/* <div className='control-btn'>
                        <button className='prev'>
                        <i className='fas fa-play'></i>
                        </button>                      
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutCard;
