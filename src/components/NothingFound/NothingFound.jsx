import React from "react";
import "./NothingFound.css";
import notFoundIcon from "../../assets/not-found-icon.svg";

function NothingFound() {
  return (
    <div className="nothing-found">
      <img src={notFoundIcon} alt="Not Found" className="nothing-found__icon" />
      <h2 className="nothing-found__title">Nothing found</h2>
      <p className="nothing-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NothingFound;
