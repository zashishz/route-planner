import React from "react";

import "./VoyageInput.css";

const VoyageInput = ({ label, refNode, onChange, onClick }) => (
  <div className="form-input">
    <label>{label}</label>
    <div className="form-input-controls">
      <input
        placeholder={label}
        type="text"
        ref={refNode}
        onChange={onChange}
      />
      <button onClick={onClick}>X</button>
    </div>
  </div>
);

export default VoyageInput;
