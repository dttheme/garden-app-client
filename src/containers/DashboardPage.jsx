import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPlant } from '../actions/index.actions';


// import './Dashboard.css';

export class DashboardPage extends Component {
  submitHandler(val) {
    const plantName = val.plantName;
    const plantDate = val.plantDate;
    const numberPlanted = val.numberPlanted;
    const plantLocation = val.plantLocation;
    const waterFrequency = val.waterFrequency;
    this.props.createPlant(plantName, plantDate, numberPlanted, plantLocation, waterFrequency)
  }
  render() {
    return (
      <div className="DashboardPage">
        <h2>Dashboard</h2>
        <form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="POST">
          <label htmlFor="firstName">What kind of plant?</label>
          <Field
            name="plantName"
            component="input"
            type="text"
            placeholder="Plant Name"
            />
          <label htmlFor="plantDate">When was it planted?</label>
          <Field
            name="plantDate"
            component="input"
            type="text"
            placeholder="Date Planted"
            />
          <label htmlFor="numberPlanted">How many were planted?</label>
          <Field
            name="numberPlanted"
            component="input"
            type="number"
            value={1}
            min={1}
            max={100}
            />
          <label htmlFor="plantLocation">Where is it planted?</label>
          <Field
            name="plantLocation"
            component="input"
            type="text"
            placeholder="Plant Location"
            />
          <label htmlFor="waterFrequency">How often should you water?</label>
          <label>
            <Field
              name="waterFrequency"
              component="input"
              type="radio"
              value="Once a day"
              /> {' '} Once a day
            </label>
            <label>
              <Field
                name="waterFrequency"
                component="input"
                type="radio"
                value="Once a week"
                /> {' '} Once a week
              </label>
              <label>
                <Field
                  name="waterFrequency"
                  component="input"
                  type="radio"
                  value="Once a month"
                  /> {' '} Once a month
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          );
        }
      }

      const mapStateToProps = (state) => ({

      });

export default reduxForm({
  form: "newPlant",
})(connect(mapStateToProps, {createPlant})(DashboardPage));
