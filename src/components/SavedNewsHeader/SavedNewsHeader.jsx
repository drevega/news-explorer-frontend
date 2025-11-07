import React from "react";
import Navigation from "../Navigation/Navigation";
import "./SavedNewsHeader.css";

// SavedNewsHeader component displaying title and navigation
function SavedNewsHeader({ userName, articleCount, isLoggedIn }) {
  return (
    <header className="saved-header">
      <div className="saved-header__nav">
        <p className="saved-header__logo">NewsExplorer</p>
        {/* pass props to Navigation later to handle logged-in state */}
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
      <div className="saved-header__summary">
        <h1 className="saved-header__title">Saved Articles</h1>
        <p className="saved-header__subtitle">
          {userName}, you have {articleCount} saved articles
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
