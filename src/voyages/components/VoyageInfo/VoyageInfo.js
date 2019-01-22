import React from "react";
import "./VoyageInfo.css";

// custom component to render lable and value
const VoyageInfoItem = ({ label, value }) => (
  <div className="route-info-item">
    <div className="route-info-item-label">{label}: </div>
    <div className="route-info-item-value"> {value}:</div>
  </div>
);

// custom component to render Route info with RouteInfoItem Component
const VoyageInfo = ({ totalDistance, totalTime }) => (
  <div className="route-info">
    <VoyageInfoItem label="Total distance" value={totalDistance} />
    <VoyageInfoItem label="Total time" value={totalTime} />
  </div>
);

export default VoyageInfo;
