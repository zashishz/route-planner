import React, { Component } from "react";
import { VoyageMap, VoyageForm, VoyageInfo } from "./components";
import { Loader } from "../shared/Loader";
import { fetchDirections } from "./services";

import "./Voyages.css";
/**
 * Acts as a root component
 */
class Voyages extends Component {
  state = {
    isLoading: false,
    directionsApiResponse: null
  };

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
    });
  };

  // Makes backend call and updates accordingy
  getVoyages = async (from, to) => {
    this.toggleLoader(true);

    // perform network call
    const response = await fetchDirections(from, to).catch(e => {
      this.displayErrorMessage("Internal server error");
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
  };

  render() {
    const { isLoading, directionsApiResponse } = this.state;
    return (
      <div className="container">
        <Loader isLoading={isLoading} />
        <div className="route-details">
          <VoyageForm
            getVoyages={this.getVoyages}
            resetValues={this.resetValues}
          >
            {directionsApiResponse && (
              <VoyageInfo
                totalDistance={directionsApiResponse.total_distance}
                totalTime={directionsApiResponse.total_time}
              />
            )}
          </VoyageForm>
        </div>
        <div className="route-map">
          <VoyageMap directions={directionsApiResponse} />
        </div>
      </div>
    );
  }
}

export default Voyages;
