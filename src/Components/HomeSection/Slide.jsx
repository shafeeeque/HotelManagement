import React, { useState } from "react";
import Data from "./Data";
import "./Home.css"


const Slide = (slides) => {
  // console.log(slides);
 
  const [current, setCurrent] = useState(0);
  const Length = slides.slides?.length;
  // console.log(Length);

  const nextSlide = () => {
    setCurrent(current === Length - 1 ? 0 : current + 1);
    
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? Length - 1 : current - 1);
  };

  // if (Array.isArray(slides) || slides.Length <= 0) {
  //   return prevSlide;
  // }
  
  return (
    <>
      <section className="slider">
        <div className="control-btn">
          <button className="prev" onClick={prevSlide}>
            <i className="fas fa-caret-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>
      
      {Data.map((slide,index) => {

        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {/* { console.log("hey",current ,index, Length)} */}
            {index === current && <img src={slide.images} alt="Home Image" />}
          </div>
        );
      })}
      </section>



      <section className="slide-form">
        <div className="container">
          <h2>Enjoy Your Holidays</h2>
          <span>Search and Book Hotel</span>


          <form action="">
            <input type="text" placeholder="Search City" name=" " id=" " />
            <div className="flex_space">
              <input type="date" placeholder="Check In"/>
              <input type="date" placeholder="Check Out"/>
            </div>

            <div className="flex_space">
              <input type="number" placeholder="adult"/>
              <input type="number" placeholder="Childern"/>
            </div>

            <input type="number" placeholder="Rooms" />
            <input type="submit" value='Search' className="submit"/>
          </form>
        </div>

      </section>
    </>
    
  );


};

export default Slide;
