import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { removeArticle } from "../../utils/api";
import "./SavedNews.css";

function SavedNews({ savedArticles, setSavedArticles }) {
  function handleDelete(article) {
    removeArticle(article._id).then(() => {
      setSavedArticles((prev) => prev.filter((a) => a._id !== article._id));
    });
  }

  return (
    <section className="saved-news">
      <div className="saved-news__header">
        <p className="saved-news__subtitle">Saved articles</p>
        <h2 className="saved-news__title">
          Elise, you have {savedArticles.length} saved articles
        </h2>
        <p className="saved-news__keywords">
          By keywords: Nature, Yellowstone, and 2 others
        </p>
      </div>
      <div className="saved-news__grid">
        {savedArticles.map((article) => (
          <NewsCard
            key={article._id}
            article={article}
            isSaved={true}
            isLoggedIn={true}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default SavedNews;