import React from "react";
import "./Footer.css";

import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {currentYear} NewsExplorer, Powered by News API
      </p>
      <nav className="footer__nav">
        <Link to="/" className="footer__link">
          Home
        </Link>
        <a
          href="https://tripleten.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          TripleTen
        </a>
        <div className="footer__social-links">
          <a
            href="https://github.com/drevega/news-explorer-frontend.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/drevega/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
