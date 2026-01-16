import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./Navigation.css";
import logoutIcon from "../../assets/logout-icon.png";
import closeIcon from "../../assets/close-icon.svg";
import menuIconDark from "../../assets/menu-icon-dark.svg";
import menuIconLight from "../../assets/menu-icon-light.svg";

// Navigation component with links and sign-in button
function Navigation({
  isLoggedIn,
  onSignInClick,
  onLogout,
  onMenuClick,
  isMobileMenuOpen,
  isModalOpen,
}) {
  // Get current route location
  const location = useLocation();
  // Define classes based on current path
  const isSavedNewsPage = location.pathname === "/saved-news";
  const isHomePage = location.pathname === "/";
  // Base theme class: 'light' theme (white text, transparent header) for Home. 'dark' theme (black text, white header) for Saved News
  const themeClass = isSavedNewsPage
    ? "nav__link_theme_dark"
    : "nav__link_theme_light";

  // Determine the active border class based on current page
  const activeBorderClass = isSavedNewsPage
    ? "nav__link_active_dark"
    : "nav__link_active_light";

  // Logout button theme (Black border/text on saved page)
  const logoutButtonClass = isSavedNewsPage
    ? "nav__button_logout_dark"
    : "nav__button_logout";

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      onMenuClick();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <nav
      className={`nav ${isMobileMenuOpen ? "nav_menu-open" : ""} ${
        isModalOpen ? "nav_modal-open" : ""
      }`}
    >
      {/* Menu button visible only on Mobile via CSS */}
      <button
        type="button"
        className="nav__menu"
        onClick={onMenuClick}
        aria-label="Menu"
        aria-expanded={isMobileMenuOpen}
      >
        <img
          src={
            isMobileMenuOpen
              ? closeIcon
              : isSavedNewsPage
                ? menuIconDark
                : menuIconLight
          }
          alt=""
          className="nav__menu-icon"
        />
      </button>
      <ul className={`nav__links ${isMobileMenuOpen ? "nav__links_open" : ""}`}>
        <li className="nav__item">
          <Link
            to="/"
            className={`nav__link ${themeClass} ${
              isHomePage ? activeBorderClass : ""
            }`}
            onClick={isMobileMenuOpen ? onMenuClick : undefined}
          >
            Home
          </Link>
        </li>
        {/* Conditionally render links based on isLoggedIn */}
        {isLoggedIn ? (
          <>
            <li className="nav__item">
              <Link
                to="/saved-news"
                className={`nav__link ${themeClass} ${
                  isSavedNewsPage ? activeBorderClass : ""
                }`}
                onClick={isMobileMenuOpen ? onMenuClick : undefined}
              >
                Saved articles
              </Link>
            </li>

            <li className="nav__item">
              <button
                type="button"
                className={logoutButtonClass}
                onClick={() => {
                  onLogout();
                  if (isMobileMenuOpen) onMenuClick();
                }}
              >
                Elise
                <img
                  src={logoutIcon}
                  alt="Logout"
                  className="nav__logout-icon"
                />
              </button>
            </li>
          </>
        ) : (
          <li className="nav__item">
            <button
              onClick={() => {
                onSignInClick();
                if (isMobileMenuOpen) onMenuClick(); // Close menu on click
              }}
              type="button"
              className="nav__button"
            >
              Sign in
            </button>
          </li>
        )}
      </ul>
      {isMobileMenuOpen && (
        <div
          className="nav__overlay"
          onClick={onMenuClick}
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
}

export default Navigation;
