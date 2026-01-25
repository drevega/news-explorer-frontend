import React, { useState, useEffect } from "react";
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
  // State to track how many articles to show
  const [visibleCount, setVisibleCount] = useState(3);
  // Reset count to 3 whenever the articles array changes (new search)
  useEffect(() => {
    setVisibleCount(3);
  }, [articles]);
  // Handler for "Show More" button
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  // Render Main content based on loading, error, and articles state
  return (
    <main className="main">
      {/* Logic Flow */}
      {isLoading && <Preloader />}
      {/*  Show server errror is true */}
      {isServerError && (
        <div className="nothing-found">
          <p className="nothing-found__text">
            Sorry, something went wrong during the request. Please try again
            later.
          </p>
        </div>
      )}
      {/* Nothing Found message */}
      {!isLoading && !isServerError && isNotFound && <NothingFound />}

      {/*  Article List section */}
      {!isLoading && !isServerError && articles.length > 0 && (
        <>
          <NewsCardList
            cards={articles.slice(0, visibleCount)}
            isLoggedIn={isLoggedIn}
            onSignInClick={onSignInClick}
          />

          {/* Show button only if there are more articles to show */}
          {visibleCount < articles.length && (
            <button
              className="news-card-list__show-more-button"
              type="button"
              onClick={handleShowMore}
            >
              Show more
            </button>
          )}
        </>
      )}

      <About />
    </main>
  );
}

export default Main;
