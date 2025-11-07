import React, { useState } from "react";
import "./SearchForm.css";

// SearchForm component with input and submit form
function SearchForm({ onSearchSubmit }) {
  // State to hold the input value
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value); // Update state with input value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(keyword);
  };

  return (
    <div className="search-form">
      <div className="search__container">
        <h1 className="search__title">What&apos;s going in the world?</h1>
        <p className="search__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__input"
            type="text"
            placeholder="Enter topic"
            required
            value={keyword}
            onChange={handleKeywordChange}
          />
          <button className="search__btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
