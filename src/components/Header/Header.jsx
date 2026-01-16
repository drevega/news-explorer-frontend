import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

// Header component with search form and navigation
function Header({
  onSearchSubmit,
  onSignInClick,
  isLoggedIn,
  onLogout,
  isMobileMenuOpen,
  onMenuClick,
  onMenuClose,
  isModalOpen,
}) {
  return (
    <header className={`header ${isMobileMenuOpen ? "header__menu-open" : ""}`}>
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={onMenuClose}>
          NewsExplorer
        </Link>
        <Navigation
          onSignInClick={onSignInClick}
          isLoggedIn={isLoggedIn}
          onLogout={onLogout}
          isMobileMenuOpen={isMobileMenuOpen}
          onMenuClick={onMenuClick}
          isModalOpen={isModalOpen}
        />
      </div>
      {/*  Hide search form when mobile menu is open */}
      <SearchForm onSearchSubmit={onSearchSubmit} />
    </header>
  );
}

export default Header;
