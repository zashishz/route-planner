import React from "react";
import "./loader.css";

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
