import React from 'react';

const RouteInfoItem = ({ label, value }) => (
    <div className="route-info-item">
        <div className="route-info-item-label">{label}: </div>
        <div className="route-info-item-value"> {value}</div>
    </div>
);

const RouteInfo = ({totalDistance, totalTime}) => (
    <div className="route-info">
        <RouteInfoItem label="Total distance" value={totalDistance} />
        <RouteInfoItem label="Total time" value={totalTime} />
    </div>
);

export default RouteInfo;