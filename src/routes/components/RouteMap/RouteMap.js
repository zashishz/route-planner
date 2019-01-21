import React, { Component } from 'react';
import { maps } from '../../../shared/services';

import './RouteMap.css';

class RouteMap extends Component {

    // saves reference of map container to trigger map events
    routeMapContainer = React.createRef();

    // saves reference to google map instance
    maps;

    // rendered map reference
    gMap;

    // initilize map with Map options and element
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

    componentDidUpdate() {
        const { directions } = this.props;
        if (directions) {
            this.renderDirections(directions);
        }
    }

    // interpolate array to google lat, lng
    interpolatePositions = path => {
        return path.map(([lat, lng]) => new this.maps.LatLng(lat, lng));
    };

    // responsible for drawing route based on path provided.
    renderDirections = ({ path }) => {
        const directionsService = new this.maps.DirectionsService();
        const directionsRenderer = new this.maps.DirectionsRenderer();

        directionsRenderer.setMap(this.gMap);

        const positions = this.interpolatePositions(path);
        const waypoints = positions
            .slice(1, positions.length - 1)
            .map(location => ({ location, stopover: false }));

        // frame request format for googla maps
        const req = {
            origin: positions[0],
            destination: positions[positions.length - 1],
            optimizeWaypoints: true,
            travelMode: this.maps.TravelMode.DRIVING,
            waypoints
        };

        // get the route from directionService and then plot with the help of directionsRenderer
        directionsService.route(req, (res, flag) => {
            if (flag === this.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(res);
            } else {
                alert('Direction response Error!');
            }
        });
    }

    render() {
        return (
            <div className="routeMap-container">
                <div ref={ (el) => this.routeMapContainer = el}></div>
            </div>
        )
    }
}

// bind map instance to this component
RouteMap.defaultProps = {
    maps
};

export default RouteMap;