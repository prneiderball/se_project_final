import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ savedArticles, setSavedArticles }) {
  function handleDelete(articleToDelete) {
    setSavedArticles((prev) =>
      prev.filter((article) => article !== articleToDelete)
    );
  }

  return (
    <section className="saved-news">
  <div className="saved-news__header">
    <p className="saved-news__subtitle">Saved articles</p>
    <h2 className="saved-news__title">
      Elise, you have 5 saved articles
    </h2>
    <p className="saved-news__keywords">
      By keywords: Nature, Yellowstone, and 2 others
    </p>
  </div>

  <div className="saved-news__grid">
    {/* NewsCard components */}
  </div>
</section>


  );
}

export default SavedNews;
