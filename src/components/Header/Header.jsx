import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>
        <Navigation />
      </div>
      <SearchForm />
    </header>
  );
}

export default Header;
