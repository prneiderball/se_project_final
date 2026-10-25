import React from "react";
import "./NotFound.css";
import notFoundIcon from "../../assets/not-found.svg";

const NotFound = () => {
  return (
    <div className="notfound">
      <img src={notFoundIcon} alt="Nothing found" className="notfound__icon" />
      <h3 className="notfound__title">Nothing found</h3>
      <p className="notfound__subtitle">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
};

export default NotFound;
