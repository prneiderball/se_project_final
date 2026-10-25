import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch, searchError }) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(keyword);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search__field">
        <input
          type="text"
          className={`search__input ${
            searchError ? "search__input_error" : ""
          }`}
          placeholder="Enter topic"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <span className="search__error">{searchError}</span>
      </div>
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
