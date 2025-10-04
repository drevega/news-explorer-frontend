import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__item">
          <Link to="/" className="nav__link nav__link_active">
            Home
          </Link>
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
