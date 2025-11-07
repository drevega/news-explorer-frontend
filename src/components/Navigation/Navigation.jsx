import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout-icon.png";

// Navigation component with links and sign-in button
function Navigation({ isLoggedIn, onSignInClick }) {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__item">
          <Link to="/" className="nav__link nav__link_active">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link nav__link_active">Home</Link>
          
          <button onClick={onSignInClick} type="button" className="nav__btn">
            Sign in
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
