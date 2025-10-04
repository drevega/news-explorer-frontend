import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <>
              {/* create diff Header for this page later  */}
              <Header />
              <SavedNews />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
