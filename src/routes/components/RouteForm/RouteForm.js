import React, { Component } from 'react';
import { maps } from '../../../shared/services/maps';

import './RouteForm.css';
class RouteForm extends Component {

    startInput = React.createRef();
    dropInput = React.createRef();

    setupAutoComplete = async () => {
        const maps = await this.props.maps();
        this.setupStartInputAutoComplete = new maps.places.Autocomplete(this.startInput);
        this.setupDropInputAutoComplete = new maps.places.Autocomplete(this.dropInput);
    }

    getRoute = () => {
        const from = this.setupStartInputAutoComplete.getPlace();
        const to = this.setupDropInputAutoComplete.getPlace();
        this.props.getRoutes(from, to);
    }

    componentDidMount() {
        this.setupAutoComplete();
    }

    render() {
        return (
            <div className="route-form">
                <div className="form-input">
                    <label>Starting Location</label>
                    <input type="text" ref={el => (this.startInput = el)} />
                </div>
                <div className="form-input">
                    <label>Drop-off point</label>
                    <input type="text" ref={el => (this.dropInput = el)} />
                </div>
                <div className="get-route-btn">
                    <button onClick={this.getRoute}>Get Route</button>
                </div>
            </div>
        )
    }
}

RouteForm.defaultProps = {
    maps
}

export default RouteForm;