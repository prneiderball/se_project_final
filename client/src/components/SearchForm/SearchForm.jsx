import React, {useState} from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(keyword);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder="Enter topic"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
      <button className="search__button" type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
