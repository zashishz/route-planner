import React from "react";
import "./Loader.css";

// displays loader on screen if isLoading flag is set true
function Loader({ isLoading }) {
  return (
    isLoading && (
      <div className="loader-container">
        <div className="lds-ripple">
          <div />
          <div />
        </div>
      </div>
    )
  );
}

export default Loader;
