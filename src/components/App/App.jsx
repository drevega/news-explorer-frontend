import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { searchNews } from "../../utils/api";

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
  // Loading state for search
  const [isLoading, setIsLoading] = useState(false);
  // Not Found error
  const [isNotFound, setIsNotFound] = useState(false);
  // activeModal can be "signin", "signup", "success, or "logout"
  const [activeModal, setActiveModal] = useState("");
  // Placeholder for user authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change to true to simulate Logged-in
  // Variable to track if menu is open/closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for server errors
  const [isServerError, setIsServerError] = useState(false);

  const navigate = useNavigate();

  // SEARCH HANDLERS

  // Handle successful login
  const handleLogin = () => {
    setIsLoading(true);
    handleCloseModal();
  };

  // Logout Handler
  const handleLogout = () => {
    console.log("Logged out"); // Debugging line
    setIsLoggedIn(false); // log user out
    setIsMobileMenuOpen(false); // close mobile menu if open
    setActiveModal("logout"); // open the "succesfully logged out" modal
    navigate("/"); // Redirect to home immediatelly
  };

  const handleSearchSubmit = (keyword) => {
    console.log("Searching for:", keyword); // Debugging line
    setIsLoading(true); // Start loading
    setArticles([]); // Clear previous articles
    setIsNotFound(false); // Reset not found state on new search
    setIsServerError(false); // Reset server error state on new search

    searchNews(keyword)
      .then((res) => {
        // NewsAPI returns the array inside a property called "articles"
        const newsArticles = res.articles || [];

        if (newsArticles.length === 0) {
          // setArticles([]);
          setIsNotFound(true);
          return;
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
            keyword: keyword, // Store the search keyword with the article
          }));

          // Remove articles that don't have images
          const cleanArticles = formattedArticles.filter(
            (article) => article.image && article.title && article.text
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
              />
              <Main
                articles={articles}
                isLoading={isLoading}
                isLoggedIn={isLoggedIn}
                onSignInClick={handleOpenSignInModal}
                isNotFound={isNotFound}
                isServerError={isServerError}
              />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              onMenuClose={closeMobileMenu}
              onMenuClick={handleMobileMenuClick}
              isMobileMenuOpen={isMobileMenuOpen}
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
