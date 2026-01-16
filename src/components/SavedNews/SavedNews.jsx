import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";
// hard-coded data and 'keyword' property for testing
import { articles as sampleArticles } from "../../utils/constants";

// Function to process keywords and create the summary sentence
const getKeywordSummary = (articles) => {
  if (articles.length === 0) return "";

  const keywords = articles.map((article) => article.keyword);
  // Count occurences of each keyword
  const keywordCounts = keywords.reduce((acc, keyword) => {
    acc[keyword] = (acc[keyword] || 0) + 1;
    return acc;
  }, {});

  // Sort keywords by frequency (descending)
  const sortedKeywords = Object.keys(keywordCounts).sort(
    (a, b) => keywordCounts[b] - keywordCounts[a],
  );

  const totalKeywords = sortedKeywords.length;

  if (totalKeywords === 0) {
    return "";
  } else if (totalKeywords === 1) {
    return (
      <>
        By keyword:{" "}
        <strong className="saved-header__keyword-highlight">
          {sortedKeywords[0]}
        </strong>
      </>
    );
  } else if (totalKeywords === 2) {
    return (
      <>
        By keywords:{" "}
        <strong className="saved-header__keyword-highlight">
          {sortedKeywords[0]}
        </strong>{" "}
        and{" "}
        <strong className="saved-header__keyword-highlight">
          {sortedKeywords[1]}
        </strong>
      </>
    );
  } else {
    const othersCount = totalKeywords - 2;
    return (
      <>
        By keywords:{" "}
        <strong className="saved-header__keyword-highlight">
          {sortedKeywords[0]}
        </strong>
        ,{" "}
        <strong className="saved-header__keyword-highlight">
          {sortedKeywords[1]}
        </strong>
        , and{" "}
        <strong className="saved-header__keyword-highlight">
          {othersCount} others
        </strong>
      </>
    );
  }
};

// add keywords to sample data for this page
const savedArticles = sampleArticles.map((article, index) => ({
  ...article,
  keyword: index % 2 === 0 ? "Nature" : index % 3 === 0 ? "Coding" : "Parks",
}));

// SavedNews component with placeholder and text
function SavedNews({
  isLoggedIn,
  onLogout,
  onMenuClick,
  onMenuClose,
  isMobileMenuOpen,
}) {
  const keywordSummaryContent = getKeywordSummary(savedArticles);

  return (
    <div className="saved-news">
      <SavedNewsHeader
        userName="Elise" // Replace with actual user name later
        articleCount={savedArticles.length}
        isLoggedIn={isLoggedIn}
        keywordSummary={keywordSummaryContent} // Pass the generated summary
        onLogout={onLogout}
        onMenuClose={onMenuClose}
        onMenuClick={onMenuClick}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <div className="saved-news__content">
        <NewsCardList cards={savedArticles} isSavedNewsPage={true} />
      </div>
    </div>
  );
}

export default SavedNews;
