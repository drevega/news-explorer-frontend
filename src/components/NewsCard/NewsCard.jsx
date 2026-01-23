import React, { useState } from "react";
import "./NewsCard.css";

// NewsCard component displaying individual news article details
// Receive 'props' as an argument and destructure it to get the 'card' object
function NewsCard({ card, isSavedNewsPage, isLoggedIn, onSignInClick }) {
  const [isSaved, setIsSaved] = useState(false); // State to track if this specific card is saved

  const handleSaveClick = () => {
    if (isLoggedIn) {
      // Toggle the save state (Turn blue / Turn off)
      setIsSaved((prev) => !prev);
      // logic for saving the article (implement later)
      if (!isSaved) {
        console.log("Article saved:", card.title);
      } else {
        console.log("Article unsaved:", card.title);
      }
    } else {
      // User it NOT logged in -> Open the sign-in modal
      onSignInClick();
    }
  };

  return (
    <li className="news-card">
      <img src={card.image} alt={card.title} className="news-card__image" />
      {/* conditionally render elements for the Saved News Page */}
      {isSavedNewsPage ? (
        <>
          <p className="news-card__keyword">{card.keyword}</p>
          <button
            className="news-card__button news-card__button_delete"
            type="button"
          ></button>
          <div className="news-card__tooltip">Remove from saved</div>
        </>
      ) : (
        <>
          <button
            className={`news-card__button news-card__button_save ${
              isSaved ? "news-card__button_active" : ""
            }`}
            type="button"
            onClick={handleSaveClick}
          ></button>
          {/* only show "Sign in to save" tooltip if NOT logged in */}
          {!isLoggedIn && (
            <div className="news-card__tooltip">Sign in to save articles</div>
          )}
        </>
      )}

      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="news-card__link"
      >
        <div className="news-card__content">
          <p className="news-card__date">{card.date}</p>
          <h3 className="news-card__title">{card.title}</h3>
          <p className="news-card__text">{card.text}</p>
          <p className="news-card__source">{card.source.name}</p>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
