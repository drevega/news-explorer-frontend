import React from "react";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import "./Main.css";

// Main component displaying articles/loading state
function Main({ articles, isLoading, isLoggedIn, onSignInClick, isNotFound }) {
  return (
    <main className="main">
      {/* Logic Flow */}
      {isLoading && <Preloader />}
      {/*  Show articles if we have them */}
      {!isLoading && articles.length > 0 && (
        <NewsCardList
          cards={articles}
          isLoggedIn={isLoggedIn}
          onSignInClick={onSignInClick}
        />
      )}

      {/*  Show NothingFound if flag is true */}
      {!isLoading && isNotFound && <NothingFound />}
      {/* temporary until API is done */}
      <About />
      {/* remove this later */}
    </main>
  );
}

export default Main;
