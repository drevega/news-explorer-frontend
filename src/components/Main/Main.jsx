import React from "react";
import About from "../About/About";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      {/* fill section with NewsCardList, PreLoader or not found */}
      <div className="main__results-container">
        <h2 className="main__results-title">Search Results</h2>
        {/* NewsCardList components */}
      </div>
      <About />
    </main>
  );
}

export default Main;
