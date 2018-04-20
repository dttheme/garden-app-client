import React, { Component } from "react";

import Plant from '../components/Plant'
// import './Dashboard.css';

class GardenPage extends Component {
  render() {
    return (
      <div className="GardenPage">
        <h2>Garden</h2>
        <Plant />
      </div>
    );
  }
}

export default GardenPage;
