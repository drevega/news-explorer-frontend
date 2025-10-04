import React from "react";
import "./NewsCard.css";

// receive 'props' as an argument and destructure it to get the 'card' object
function NewsCard({ card }) {
  return (
    <li className="news-card">
      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="news-card__link"
      >
        <img src={card.image} alt="{card.title}" className="news-card__image" />
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
