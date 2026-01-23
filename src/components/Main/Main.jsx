import React from "react";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import "./Main.css";

// Main component displaying articles/loading state
function Main({
  articles,
  isLoading,
  isLoggedIn,
  onSignInClick,
  isNotFound,
  isServerError,
}) {
  return (
    <main className="main">
      {/* Logic Flow */}
      {isLoading && <Preloader />}
      {/*  Show server errror is true */}
      {isServerError && (
        <div className="nothing-found">
          <p className="nothing-found__text">
            Sorry, something went wrong during the request. Please try again.
          </p>
        </div>
      )}
      {/*  Show NewsCardList if no error, not loading, and has articles */}
      {!isLoading && !isServerError && articles.length > 0 && (
        <NewsCardList
          cards={articles}
          isLoggedIn={isLoggedIn}
          onSignInClick={onSignInClick}
        />
      )}

      {/*  Show NothingFound if no error, not loading, and empty list */}
      {!isLoading && !isServerError && isNotFound && <NothingFound />}
      <About />
    </main>
  );
}

export default Main;
