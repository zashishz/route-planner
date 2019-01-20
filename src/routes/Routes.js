import React from 'react'
import { RouteMap, RouteForm, RouteInfo } from './components';

import './Routes.css';

const Routes = () => (
    <div className="container">
        <div className="route-details">
            <RouteForm />
            <RouteInfo />
        </div>
        <RouteMap />
    </div>
);

export default Routes;
