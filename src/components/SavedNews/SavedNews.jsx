import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

// Function to process keywords and create the summary sentence
const getKeywordSummary = (articles) => {
  if (!articles || articles.length === 0) return "";

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

  if (totalKeywords === 0) return "";

  if (totalKeywords === 1) {
    return (
      <>
        By keyword:
        <strong className="saved-header__keyword-highlight">
          {sortedKeywords[0]}
        </strong>
      </>
    );
  } else if (totalKeywords === 2) {
    return (
      <>
        By keywords:
        <strong className="saved-header__keyword-highlight">
          {sortedKeywords[0]}
        </strong>
        and
        <strong className="saved-header__keyword-highlight">
          {sortedKeywords[1]}
        </strong>
      </>
    );
  } else {
    return (
      <>
        By keywords:
        <strong className="saved-header__keyword-highlight">
          {sortedKeywords[0]}
        </strong>
        ,
        <strong className="saved-header__keyword-highlight">
          {sortedKeywords[1]}
        </strong>
        , and
        <strong className="saved-header__keyword-highlight">
          {totalKeywords - 2} others
        </strong>
      </>
    );
  }
};

// SavedNews component with placeholder and text
function SavedNews({
  articles,
  isLoggedIn,
  onLogout,
  onMenuClick,
  onMenuClose,
  isMobileMenuOpen,
  onDeleteArticle,
  currentUser,
}) {
  return (
    <div className="saved-news">
      <SavedNewsHeader
        userName={currentUser ? currentUser.name : "User"}
        articleCount={articles.length}
        isLoggedIn={isLoggedIn}
        keywordSummary={getKeywordSummary(articles)}
        onLogout={onLogout}
        onMenuClose={onMenuClose}
        onMenuClick={onMenuClick}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <div className="saved-news__content">
        <NewsCardList
          cards={articles}
          isSavedNewsPage={true}
          onDeleteArticle={onDeleteArticle}
          savedArticles={articles}
        />
      </div>
    </div>
  );
}

export default SavedNews;
