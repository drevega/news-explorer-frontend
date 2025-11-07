import React from "react";
import "./NewsCard.css";

// NewsCard component displaying individual news article details
// Receive 'props' as an argument and destructure it to get the 'card' object
function NewsCard({ card, isSavedNewsPage }) {
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
            className="news-card__button news-card__button_save"
            type="button"
          ></button>
          <div className="news-card__tooltip">Sign in to save articles</div>
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
          <p className="news-card__source">{card.source}</p>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
