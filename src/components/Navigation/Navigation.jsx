import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__item">
          {/* rpl <a> w "link" later */}
          <a href="/" className="nav__link nav__link_active">
            Home
          </a>
        </li>
        <li className="nav__item">
          <button type="button" className="nav__btn">
            Sign In
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
