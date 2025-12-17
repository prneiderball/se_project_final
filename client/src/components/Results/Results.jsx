import React from "react";
import "./Results.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

function Results({ articles, isLoading}) {
  return (
    <section className="results">
      <h2 className="results__title">Search Results</h2>
      <Preloader />
      <div className="results__grid">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className="results__actions">
        <button className="results__show-more">Show more</button>
      </div>
    </section>
  );
}

export default Results;
