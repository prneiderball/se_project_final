import React from "react";
import "./Results.css";

function Results() {
  return (
    <section className="results">
      <h2 className="results__title">Search Results</h2>
      {/* NewsCard components will be rendered here */}
      <div className="results__grid"></div>
    </section>
  );
}

export default Results;
