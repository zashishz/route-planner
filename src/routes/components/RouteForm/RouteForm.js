import React, { Component } from 'react';
import { maps } from '../../../shared/services/maps';

import './RouteForm.css';
class RouteForm extends Component {

    state = {
        btnDisabled: true
    }

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

    btnStateHandler = () => {
        if(this.startInput.value.length && this.dropInput.value.length) {
            this.setState({btnDisabled: false})
        } else {
            this.setState({btnDisabled: true})
        }
    }

    disableButton = () => {
        this.setState({btnDisabled: true});
        this.props.resetValues();
    }

    render() {
        return (
            <div className="route-form">
                <form className="form-input">
                    <label>Starting Location</label>
                    <div className="form-input-controls">
                        <input type="text" ref={el => (this.startInput = el)} onChange={this.btnStateHandler}/>
                        <button type="reset" onClick={this.disableButton}>X</button>
                    </div>
                </form>
                <form className="form-input">
                    <label>Drop-off point</label>
                    <div className="form-input-controls">
                        <input type="text" ref={el => (this.dropInput = el)} onChange={this.btnStateHandler} />
                        <button type="reset" onClick={this.disableButton}>X</button>
                    </div>
                </form>
                <div className="get-route-btn">
                    <button onClick={this.getRoute} disabled={this.state.btnDisabled}>Get Route</button>
                </div>
            </div>
        )
    }
}

RouteForm.defaultProps = {
    maps
}

export default RouteForm;