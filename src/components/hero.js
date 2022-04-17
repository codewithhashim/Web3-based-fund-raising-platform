// function header component
import "./assets/css/home/hero.css";
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <section className="hero-title">
          <h1 className="hero-heading">
            <span className="hero-heading-span">Let's Find</span>
            <span className="hero-heading-span-1">yours dream... </span>
          </h1>
          <p className="hero-sub-heading">
            Your own home is just a click away in Dubai
            {
              // eslint-disable-next-line
            }
           
            <span role="img" aria-labelledby=" jsx-a11y/accessible-emoji">💙</span>
          </p>
        </section>
      </div>
    </section>
  );
}

export default Hero;
