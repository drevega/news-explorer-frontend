import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";
import LogoutModal from "../LogoutModal/LogoutModal";
import { articles as sampleArticles } from "../../utils/constants";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change to true to simulate Logged-in

  // Variable to track if menu is open/closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    // Simulate an API call with a delay
    setTimeout(() => {
      // LOGIC STARTS HERE
      // For Testing: change this to [] to see "Nothing Found" component
      const results = sampleArticles; // sampleArticles Or [] to test empty state
      if (results.length === 0) {
        setIsNotFound(true);
      } else {
        setArticles(results);
        // setArticles(sampleArticles); // Replace with actual API call in the future
      }
      setIsLoading(false); // End loading
      // LOGIC ENDS HERE
    }, 1500); // Simulated delay of 1.5 seconds
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
