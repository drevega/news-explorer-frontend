import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

// Header component with search form and navigation
function Header({ onSearchSubmit, onSignInClick, isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          NewsExplorer
        </Link>
        <Navigation onSignInClick={onSignInClick} isLoggedIn={isLoggedIn} />
      </div>
      <SearchForm onSearchSubmit={onSearchSubmit} />
    </header>
  );
}

export default Header;
