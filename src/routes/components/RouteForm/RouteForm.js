import React, { Component } from 'react';
import './RouteForm.css';
class RouteForm extends Component {

    startInput = React.createRef();
    dropInput = React.createRef();

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

export default RouteForm;