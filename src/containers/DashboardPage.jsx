import React, { Component } from "react";
import { connect } from 'react-redux';

import NewPlantForm from "../components/NewPlantForm";

// import './Dashboard.css';

export class DashboardPage extends Component {
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
