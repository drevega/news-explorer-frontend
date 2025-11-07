import React from "react";
import NewsCard from "../NewsCard/NewsCard"; // need this to render each card
import "./NewsCardList.css";

// NewsCardList component to display a list of news cards
// Component expects a prop called cards which is an array of card data objects
function NewsCardList({ cards }) {
  return (
    <div className="news-card-list">
      <h2 className="news-card-list__title">Search Results</h2>

      <ul className="news-card-list__grid">
        {/* We map over the 'cards' array. For each 'card' item, we create a NewsCard component. */}
        {cards.map((card, index) => (
          <NewsCard
            key={index} // React needs a unique key for each item in a list
            card={card} // Pass the individual card data to the NewsCard component
          />
        ))}
      </ul>

      <button className="news-card-list__show-more-btn" type="button">
        Show more
      </button>
    </div>
  );
}

export default NewsCardList;
