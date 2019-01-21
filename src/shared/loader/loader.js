import React from "react";
import "./loader.css";

// displays loader on screen if isLoading flag is set true
function Loader({ isLoading }) {
  return (
    isLoading && (
      <div className="loader-container">
        <div className="loader" />
      </div>
    )
  );
}

export default Loader;
