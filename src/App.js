import React, { Component } from "react";
import Voyages from "./voyages/Voyages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 
        render Root Component
      */}
        <Voyages />
      </div>
    );
  }
}

export default App;
