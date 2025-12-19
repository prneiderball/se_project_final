import React from "react";
import "./NewsCard.css";

function NewsCard({ article, isLoggedIn, isSaved }) {
  const { title, description, publishedAt, urlToImage, source } = article;

  return (
    <div className="news-card">
      <button
        className={`news-card__bookmark ${
          !isLoggedIn ? "news-card__bookmark_inactive" : ""
        }`}
        type="button"
      >
        {!isLoggedIn && (
          <span className="news-card__tooltip">Sign in to save articles</span>
        )}
      </button>

      <img className="news-card__image" src={urlToImage} alt={title} />
      <p className="news-card__date">
        {new Date(publishedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <h3 className="news-card__title">{title}</h3>
      <p className="news-card__text">{description}</p>
      <p className="news-card__source">{source.name}</p>
    </div>
  );
}

export default NewsCard;
