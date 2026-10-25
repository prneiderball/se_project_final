import React from "react";
import "./Hero.css";
import SearchForm from "../SearchForm/SearchForm";

function Hero({ searchError,onSearch }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">What's going on in the world?</h1>
        <p className="hero__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm searchError={searchError} onSearch={onSearch} />
      </div>
    </section>
  );
}

export default Hero;