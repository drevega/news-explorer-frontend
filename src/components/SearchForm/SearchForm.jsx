import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <h1 className="search-form__title">What&apos;s going in the world?</h1>
        <p className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form action="" className="search-form__form">
          <input
            className="search-form__input"
            type="text"
            placeholder="Enter topic"
            required
          />
          <button className="search-form__btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
