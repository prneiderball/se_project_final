import React from "react";
import "./NewsCard.css";

function NewsCard() {
  return (
    <div className="news-card">
      <div className="news-card__image">Image will render here</div>

      <p className="news-card__date">Month day, year</p>
      <h3 className="news-card__title">Title renders here</h3>
      <p className="news-card__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga fugiat,
        culpa est ipsa ullam at sequi, ratione aperiam ad iusto aliquid neque
        alias nihil placeat magnam molestiae voluptate cumque temporibus!
      </p>
      <p className="news-card__source">Source Name</p>
    </div>
  );
}

export default NewsCard;
