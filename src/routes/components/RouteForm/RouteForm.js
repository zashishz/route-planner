import React, { Component } from "react";
import { maps } from "../../../shared/services/maps";
import { RouteInput } from "../RouteInput";

import "./RouteForm.css";

/**
 * Responsible for rendering Route form
 */
class RouteForm extends Component {
  state = {
    btnDisabled: true,
    submitBtnLabel: "Submit"
  };

  // saves reference of start location input field to trigger map events
  startInput = React.createRef();

  // saves reference of drop location input field to trigger map events
  dropInput = React.createRef();

  // setup google Autocomplete on input fields as to add locations
  setupAutoComplete = async () => {
    const maps = await this.props.maps();
    this.setupStartInputAutoComplete = new maps.places.Autocomplete(
      this.startInput
    );
    this.setupDropInputAutoComplete = new maps.places.Autocomplete(
      this.dropInput
    );
  };

  // on form submit ask lng, lat from backend
  getRoute = () => {
    const from = this.setupStartInputAutoComplete.getPlace();
    const to = this.setupDropInputAutoComplete.getPlace();
    this.props.getRoutes(from, to);
    this.setState({ submitBtnLabel: "Re-Submit" });
  };

  componentDidMount() {
    this.setupAutoComplete();
  }

  // checks for btn state enable/disbale based on input fields
  btnStateHandler = () => {
    if (this.startInput.value.length && this.dropInput.value.length) {
      this.setState({ btnDisabled: false });
    } else {
      this.setState({ btnDisabled: true });
    }
  };

  disableButton = () => {
    this.setState({ btnDisabled: true });
    this.props.resetValues();
  };

  // handle reset for input fields
  clearField = fieldName => {
    if (fieldName === "start") {
      this.startInput.value = "";
    } else if (fieldName === "drop") {
      this.dropInput.value = "";
    } else {
      this.startInput.value = "";
      this.dropInput.value = "";
    }
    this.disableButton();
  };

  render() {
    const { btnDisabled, submitBtnLabel } = this.state;
    return (
      <div className="route-form">
        <RouteInput
          label={"Starting Location"}
          refNode={el => (this.startInput = el)}
          onChange={this.btnStateHandler}
          onClick={() => this.clearField("start")}
        />
        <RouteInput
          label={"Drop-off point"}
          refNode={el => (this.dropInput = el)}
          onChange={this.btnStateHandler}
          onClick={() => this.clearField("drop")}
        />
        <div className="info-container">{this.props.children}</div>
        <div className="get-route-btn">
          <button
            className="submit-btn"
            onClick={this.getRoute}
            disabled={btnDisabled}
          >
            {submitBtnLabel}
          </button>
          <button
            className="reset-btn"
            type="reset"
            onClick={() => this.clearField()}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

// bind map instance to this component
RouteForm.defaultProps = {
  maps
};

export default RouteForm;
