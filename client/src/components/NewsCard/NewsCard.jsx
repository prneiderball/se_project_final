import React from "react";
import "./NewsCard.css";

function NewsCard({ article, isLoggedIn, isSaved, onDelete }) {
  const { title, description, publishedAt, urlToImage, source } = article;

  return (
    <div className="news-card">
      <button
        className={`news-card__bookmark ${
          !isLoggedIn
            ? "news-card__bookmark_inactive"
            : isSaved
            ? "news-card__bookmark_active"
            : ""
        }`}
        type="button"
        onClick={() => {
          if (isSaved && onDelete) {
            onDelete(article);
          }
        }}
      >
        {!isLoggedIn && !isSaved && (
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
