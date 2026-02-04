import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./SavedNewsHeader.css";

// SavedNewsHeader component displaying title and navigation
function SavedNewsHeader({
  userName,
  articleCount,
  isLoggedIn,
  keywordSummary,
  onLogout,
  onMenuClick,
  onMenuClose,
  isMobileMenuOpen,
}) {
  return (
    <header
      className={`saved-header ${isMobileMenuOpen ? "saved-header_menu-open" : ""}`}
    >
      <div className="saved-header__nav">
        <Link to="/" className="saved-header__logo" onClick={onMenuClose}>
          NewsExplorer
        </Link>
        {/* pass props to Navigation later to handle logged-in state */}
        <Navigation
          isLoggedIn={isLoggedIn}
          onLogout={onLogout}
          onMenuClick={onMenuClick}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
      <div className="saved-header__text-content">
        <p className="saved-header__title">Saved Articles</p>
        <h1 className="saved-header__summary-text">
          {userName}, you have {articleCount} saved articles
        </h1>
        {/* Keyword section is conditionally rendered if articles exist */}
        {articleCount > 0 && (
          <p className="saved-header__keywords"> {keywordSummary} </p>
        )}
        {/* add changes - to update as many as saved  */}
      </div>
    </header>
  );
}

export default SavedNewsHeader;
