import React from 'react';
import './RouteInfo.css';

// custom component to render lable and value
const RouteInfoItem = ({ label, value }) => (
    <div className="route-info-item">
        <div className="route-info-item-label">{label}: </div>
        <div className="route-info-item-value"> {value}:</div>
    </div>
);

// custom component to render Route info with RouteInfoItem Component
const RouteInfo = ({totalDistance, totalTime}) => (
    <div className="route-info">
        <RouteInfoItem label="Total distance" value={totalDistance} />
        <RouteInfoItem label="Total time" value={totalTime} />
    </div>
);

export default RouteInfo;