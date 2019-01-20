import React, { Component } from 'react';
import { maps } from '../../../shared/services';

import './RouteMap.css';

class RouteMap extends Component {

    routeMapContainer = React.createRef();
    maps;
    gMap;

    init = async () => {
        this.maps = await this.props.maps();

        this.gMap = new this.maps.Map(this.routeMapContainer, {
            zoom: 7,
            center: { lat: 22.372081, lng: 114.107877 }
        })
    }

    componentDidMount() {
        this.init();
    }

    render() {
        return (
            <div className="routeMap-container">
                <div ref={ (el) => this.routeMapContainer = el}></div>
            </div>
        )
    }
}

RouteMap.defaultProps = {
    maps
};

export default RouteMap;