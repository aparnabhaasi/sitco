import React, { useState } from "react";
import Data from "./Data";
import { useEffect } from "react";
import "./Slide.css";

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const isMobile = window.innerWidth <= 768; // Define your mobile breakpoint

  // Automatic sliding configuration
  const autoSlideInterval = 4000; // Interval in milliseconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

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

        {Data.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && (
                <div className="slide-content">
                  {isMobile ? (
                    <img src={slide.mobileImage} alt="Mobile Image" />
                  ) : (
                    <img src={slide.image} alt="Desktop Image" />
                  )}
                  <h1>{slide.title}</h1> {/* Add the <h1> tag */}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Home;
