import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";
// hard-coded data and 'keyword' property for testing
import { articles as sampleArticles } from "../../utils/constants";

// add keywords to sample data for this page
const savedArticles = sampleArticles.map((article, index) => ({
  ...article,
  keyword: index % 2 === 0 ? "Nature" : "Parks",
}));

// SavedNews component with placeholder and text
function SavedNews({ isLoggedIn }) {
  return (
    <div className="saved-news">
      <SavedNewsHeader
        userName="Elise"
        articleCount={savedArticles.length}
        isLoggedIn={isLoggedIn}
      />
      <div className="saved-news__content">
        <NewsCardList cards={savedArticles} isSavedNewsPage={true} />
      </div>
    </div>
  );
}

export default SavedNews;
