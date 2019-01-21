import React, { Component } from 'react';
import { RouteMap, RouteForm, RouteInfo } from './components';
import { Loader } from '../shared/loader';
import { fetchDirections } from './services';

import './Routes.css';
/**
 * Acts as a root component
 */
class Routes extends Component {

    state = {
        isLoading: false,
        directionsApiResponse: null
    }

    // Responsible for show/hide of loader
    toggleLoader = isLoading => {
        this.setState(() => ({
            isLoading
        }));
    };

    // propmpts user with error notification
    displayErrorMessage = msg => {
        this.toggleLoader(false);
        this.setState(() => ({
            directionsApiResponse: null
        }));
        alert(msg);
    };

    // Helps in resetting Application to Initial state
    resetValues = () => {
        this.setState({
            isLoading: false,
            directionsApiResponse: null
        })
    }

    // Makes backend call and updates accordingy
    getRoutes = async (from, to) => {
        this.toggleLoader(true);

        // perform network call
        const response = await fetchDirections(from, to).catch(e => {
            this.displayErrorMessage('Internal server error');
        });

        this.toggleLoader(false);

        if (response && response.error) {
            this.displayErrorMessage(response.error);
            return;
        }

        // if response is success update state accordingly
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
