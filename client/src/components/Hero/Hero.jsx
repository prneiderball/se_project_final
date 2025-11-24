import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">What's going on in the world?</h1>
        <p className="hero__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <div className="hero__search">
          <input
            type="text"
            className="hero__search-input"
            placeholder="Enter topic"
          ></input>
          <button className="hero__search-button">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;