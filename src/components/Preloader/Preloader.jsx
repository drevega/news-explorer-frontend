import React from "react";
import "./Preloader.css";

// Preloader component with animation and text
function Preloader() {
  return (
    <div className="preloader">
      <div className="circle-preloader"></div>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
