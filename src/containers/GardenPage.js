import React, { Component } from "react";

import GardenEntry from '../components/GardenEntry'
// import './Dashboard.css';

class GardenPage extends Component {
  render() {
    return (
      <div className="GardenPage">
        <h2>Garden</h2>
        <GardenEntry />
      </div>
    );
  }
}

export default GardenPage;
