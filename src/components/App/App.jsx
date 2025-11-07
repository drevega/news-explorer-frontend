import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import { articles as sampleArticles } from "../../utils/constants";
import "./App.css";

// Main App component
function App() {
  // State variables for articles and loading status
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  // Placeholder for user authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // Search handler
  const handleSearchSubmit = (keyword) => {
    console.log("Searching for:", keyword); // Debugging line
    setIsLoading(true); // Start loading
    setArticles([]); // Clear previous articles

    // Simulate an API call with a delay
    setTimeout(() => {
      setArticles(sampleArticles); // Replace with actual API call in the future
      setIsLoading(false); // End loading
    }, 1500); // Simulated delay of 1.5 seconds
  };

  const handleOpenSignInModal = () => {
    setActiveModal("signin");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* pass sign-in click handler down */}
              <Header
                onSignInClick={handleOpenSignInModal}
                isLoggedIn={isLoggedIn}
              />
              <Main articles={articles} isLoading={isLoading} />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <>
              {/* create diff Header for this page later  */}
              <SavedNews isLoggedIn={isLoggedIn} />
            </>
          }
        />
      </Routes>
      <Footer />
      <Modal isOpen={activeModal === "signin"} onClose={handleCloseModal}>
        <Login />
      </Modal>
    </div>
  );
}

export default App;
