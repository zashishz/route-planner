import React, { Component } from 'react';
import { RouteMap, RouteForm, RouteInfo } from './components';
import { Loader } from '../shared/loader';
import { fetchDirections } from './services';

import './Routes.css';

class Routes extends Component {

    state = {
        isLoading: false,
        directionsApiResponse: null
    }

    toggleLoader = isLoading => {
        this.setState(() => ({
            isLoading
        }));
    };

    displayErrorMessage = msg => {
        this.toggleLoader(false);
        this.setState(() => ({
            directionsApiResponse: null
        }));
        alert(msg);
    };

    resetValues = () => {
        this.setState({
            isLoading: false,
            directionsApiResponse: null
        })
    }

    getRoutes = async (from, to) => {
        this.toggleLoader(true);
        const response = await fetchDirections(from, to).catch(e => {
            this.displayErrorMessage('Internal server error');
        });

        this.toggleLoader(false);

        if (response && response.error) {
            this.displayErrorMessage(response.error);
            return;
        }

        if (response && response.path) {
            this.setState(() => ({
                directionsApiResponse: response
            }));
        }
    }

    render() {
        let { isLoading, directionsApiResponse } = this.state;
        return (
            <div className="container">
                <Loader isLoading={isLoading} />
                <div className="route-details">
                    <RouteForm getRoutes={this.getRoutes} resetValues={this.resetValues} />
                    {directionsApiResponse && <RouteInfo
                        totalDistance={directionsApiResponse.total_distance}
                        totalTime={directionsApiResponse.total_time}
                    />}
                </div>
                <div className="route-map">
                    <RouteMap directions={directionsApiResponse} />
                </div>
            </div>
        );
    }
}

export default Routes;
