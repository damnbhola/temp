import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { config } from "react-spring";
// import Btn from "../common/Btn";

const Carousel3D = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});
const ANIMATION_CONFIG = config.slow;

const Slider = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const slides = [
      {
        key: 1,
        content: <img src="/images/1.png" alt={1} />,
        onClick: () => setGoToSlide(1),
      },
      {
        key: 2,
        content: <img src="/images/2.png" alt={2} />,
        onClick: () => setGoToSlide(2),
      },
      {
        key: 3,
        content: <img src="/images/3.png" alt={3} />,
        onClick: () => setGoToSlide(3),
      },
      {
        key: 4,
        content: <img src="/images/4.png" alt={4} />,
        onClick: () => setGoToSlide(5),
      },
      {
        key: 5,
        content: <img src="/images/5.png" alt={5} />,
        onClick: () => setGoToSlide(6),
      },
    ];
    setSlides(slides);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGoToSlide(goToSlide + 1);
    }, 3500);
    return () => clearTimeout(timer);
  }, [goToSlide]);

  return (
    <section className="slider-section">
      <div className="banner-slider">
        <div className="wrapper">
          <div className="container">
            <Carousel3D
              slides={slides}
              goToSlide={goToSlide}
              goToSlideDelay={7000}
              animationConfig={ANIMATION_CONFIG}
              style="cursor:pointer"
            />

            <img src="/images/Frame.png" alt="" className="frame" />

            <div className="dots">
              {slides.map((slider, i) => (
                <span
                  key={i}
                  className={i === goToSlide ? "selcted" : ""}
                  onClick={() => setGoToSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="banner-home-desc">
        <p className="Go-Paperless">GO PAPERLESS!</p>
        <p className="banner-description">
          The mobile app that scans, stores and organizes all your receipts.
        </p>
        <div className="banner-download-btn">{/* <Btn url="#" logo /> */}</div>
      </div>
    </section>
  );
};

export default Slider;
