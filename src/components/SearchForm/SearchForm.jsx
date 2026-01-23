import React, { useState } from "react";
import "./SearchForm.css";

// SearchForm component with input and submit form
function SearchForm({ onSearchSubmit }) {
  // State to hold the input value
  const [keyword, setKeyword] = useState("");
  // State for placeholder text
  const [placeholder, setPlaceholder] = useState("Enter topic");

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value); // Update state with input value
    if (placeholder !== "Enter topic") {
      setPlaceholder("Enter topic"); // Reset placeholder on input change
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (!keyword.trim()) {
      setPlaceholder("Please enter a keyword");
      return;
    }
    // If valid, send to App.js and reset input
    onSearchSubmit(keyword.trim());
  };

  return (
    <div className="search-form">
      <div className="search__container">
        <h1 className="search__title">What&apos;s going on in the world?</h1>
        <p className="search__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__input"
            type="text"
            placeholder={placeholder}
            // required // removed to allow custom validity messages
            value={keyword}
            onChange={handleKeywordChange}
          />
          <button className="search__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
