import React from "react";

const RouteInput = ({ label, refNode, onChange, onClick }) => (
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

export default RouteInput;
