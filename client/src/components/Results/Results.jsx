import React, { useState } from "react";
import "./Results.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

function Results({ articles, isLoading, error, hasSearched, isLoggedIn }) {
  const [visibleCount, setVisibleCount] = useState(3);

  function handleShowMore() {
    setVisibleCount((prevCount) => prevCount + 3);
  }

  if (!hasSearched) {
    return null;
  }

  if (isLoading) {
    return (
      <section className="results">
        <Preloader />
      </section>
    );
  }

  if (error) {
    return (
      <section className="results">
        <p className="results__error">
          Sorry, something went wrong during the request. Please try again
          later.
        </p>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section className="results">
        <NotFound />
      </section>
    );
  }

  return (
    <section className="results">
      <h2 className="results__title">Search results</h2>

      <div className="results__grid">
        {articles.slice(0, visibleCount).map((article, index) => (
          <NewsCard key={index} article={article} isLoggedIn={isLoggedIn} />
        ))}
      </div>

      <div className="results__actions">
        <button className="results__show-more" onClick={handleShowMore}>
          Show more
        </button>
      </div>
    </section>
  );
}

export default Results;
