import React from "react";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

// Main component displaying articles/loading state
function Main({ articles, isLoading }) {
  return (
    <main className="main">
      {isLoading ? (
        <Preloader />
      ) : (
        articles.length > 0 && <NewsCardList cards={articles} />
      )}
      {/* temporary until API is done */}
      <About />
      {/* remove this later */}
    </main>
  );
}

export default Main;
