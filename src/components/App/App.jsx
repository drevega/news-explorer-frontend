import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { searchNews } from "../../utils/api";
import {
  getSavedArticles,
  saveArticle,
  deleteArticle,
} from "../../utils/MainApi";
import * as auth from "../../utils/auth"; // Auth simulation

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";
import LogoutModal from "../LogoutModal/LogoutModal";
import "./App.css";

// Main App component
function App() {
  // State variables for articles and loading status
  const [articles, setArticles] = useState([]); // Start empty
  // Saved articles state
  const [savedArticles, setSavedArticles] = useState([]);
  // Loading state for search
  const [isLoading, setIsLoading] = useState(false);
  // Not Found error
  const [isNotFound, setIsNotFound] = useState(false);
  // State for server errors
  const [isServerError, setIsServerError] = useState(false);
  // Current user state
  const [currentUser, setCurrentUser] = useState(null);
  // Placeholder for user authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change to true to simulate Logged-in
  // activeModal can be "signin", "signup", "success, or "logout"
  const [activeModal, setActiveModal] = useState("");
  // Variable to track if menu is open/closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Check token on Refresh
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      // If token exists, simulate fethching user data
      auth
        .checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res.data); // Set user date from response
          // Load saved articles only if logged in
          return getSavedArticles();
        })
        .then((articles) => {
          setSavedArticles(articles);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  // SEARCH HANDLERS
  // Handle successful login
  const handleLogin = (email, password) => {
    setIsLoading(true);

    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          // Mock setting user data after login
          setCurrentUser({ name: "Elise", email: email, _id: "1234567890" });
          handleCloseModal();

          // Also fetch their saved articles immediately
          getSavedArticles().then(setSavedArticles);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false); // Turn off preloader
      });
  };

  // Logout Handler
  const handleLogout = () => {
    setIsLoggedIn(false); // log user out
    setCurrentUser(null); // Clear current user date
    setSavedArticles([]); // Clear saved articles
    localStorage.removeItem("jwt"); // Remove token from localStorage
    setIsMobileMenuOpen(false); // close mobile menu if open
    setActiveModal("logout"); // open the "succesfully logged out" modal
    navigate("/"); // Redirect to home immediatelly
  };

  // Save / Delete article handlers
  const handleSaveArticle = (article) => {
    saveArticle(article)
      .then((savedArticle) => {
        setSavedArticles((prev) => [savedArticle, ...prev]);
      })
      .catch((err) => console.error(err));
  };

  // Delete article handler
  const handleDeleteArticle = (articleId) => {
    deleteArticle(articleId)
      .then(() => {
        setSavedArticles((prev) =>
          prev.filter((item) => item._id !== articleId),
        );
      })
      .catch((err) => console.error(err));
  };

  // Search submmit handler
  const handleSearchSubmit = (keyword) => {
    setIsLoading(true); // Start loading
    setArticles([]); // Clear previous articles
    setIsNotFound(false); // Reset not found state on new search
    setIsServerError(false); // Reset server error state on new search

    searchNews(keyword)
      .then((res) => {
        // NewsAPI returns the array inside a property called "articles"
        const newsArticles = res.articles || [];
        if (newsArticles.length === 0) {
          setIsNotFound(true);
        } else {
          // Translation logic starts here
          const formattedArticles = newsArticles.map((article) => ({
            // Map 'urlToImage' to 'image' for NewsCard component
            image: article.urlToImage,
            // Map 'publishedAt' to 'date' and format it
            date: new Date(article.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }),
            // Map other fields
            title: article.title,
            text: article.description,
            source: article.source,
            link: article.url,
            keyword: keyword,
          }));

          // Remove articles that don't have images
          const cleanArticles = formattedArticles.filter(
            (article) => article.image && article.title && article.text,
          );
          setArticles(cleanArticles);
          // Translation logic ends here
        }
      })
      .catch((err) => {
        console.error(err);
        setIsServerError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Modal Handlers
  const handleOpenSignInModal = () => {
    setActiveModal("signin");
  };

  const handleOpenSignUpModal = () => {
    setActiveModal("signup");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleRegisterSuccess = () => {
    setActiveModal("success");
  };

  // Mobile Menu handlers
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                onSearchSubmit={handleSearchSubmit}
                onSignInClick={handleOpenSignInModal}
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
                onMenuClose={closeMobileMenu}
                isMobileMenuOpen={isMobileMenuOpen}
                onMenuClick={handleMobileMenuClick}
                isModalOpen={activeModal !== ""}
                currentUser={currentUser}
              />
              <Main
                articles={articles}
                isLoading={isLoading}
                isLoggedIn={isLoggedIn}
                onSignInClick={handleOpenSignInModal}
                isNotFound={isNotFound}
                isServerError={isServerError}
                onSaveArticle={handleSaveArticle}
                onDeleteArticle={handleDeleteArticle}
                savedArticles={savedArticles}
              />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews
              articles={savedArticles}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              onDeleteArticle={handleDeleteArticle}
              onMenuClose={closeMobileMenu}
              onMenuClick={handleMobileMenuClick}
              isMobileMenuOpen={isMobileMenuOpen}
              currentUser={currentUser}
            />
          }
        />
      </Routes>
      <Footer />
      <LoginModal
        isOpen={activeModal === "signin"}
        onClose={handleCloseModal}
        onSwitch={handleOpenSignUpModal}
        onLogin={handleLogin}
      />

      <RegisterModal
        isOpen={activeModal === "signup"}
        onClose={handleCloseModal}
        onSwitch={handleOpenSignInModal}
        onRegister={handleRegisterSuccess}
      />

      <RegisterSuccessModal
        isOpen={activeModal === "success"}
        onClose={handleCloseModal}
        onSwitch={handleOpenSignInModal}
      />

      <LogoutModal
        isOpen={activeModal === "logout"}
        onClose={handleCloseModal}
        onSwitch={() => {
          handleCloseModal();
          handleOpenSignInModal();
        }}
      />
    </div>
  );
}

export default App;
