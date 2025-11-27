import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Enter topic"
      ></input>
      <button className="search__button">Search</button>
    </div>
  );
}

export default SearchForm;
