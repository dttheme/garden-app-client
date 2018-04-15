import React, { Component } from "react";

import NewPlantForm from "./NewPlantForm";

// import './Dashboard.css';

class DashboardPage extends Component {
  render() {
    return (
      <div className="DashboardPage">
        <h2>Dashboard</h2>
        <NewPlantForm />
      </div>
    );
  }
}

export default DashboardPage;
