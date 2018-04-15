import React, { Component } from "react";

import GardenEntry from './GardenEntry'
// import './Dashboard.css';

class GardenPage extends Component {
  render() {
    return (
      <div className="GardenPage">
        <h2>Garden</h2>
        <p>This is where the plant entries will go</p>
        <GardenEntry />
      </div>
    );
  }
}

export default GardenPage;
