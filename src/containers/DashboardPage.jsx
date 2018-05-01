import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createPlant } from "../actions/index.actions";


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
      <div className="w-90 w-60-ns mt5 ml7-ns ml5-m ba-ns bw2-ns pl6-ns pl4-m pl4 pb4">
        <h2 className="f2 tracked">
          Dashboard
        </h2>
        <form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="POST">
          <label
            htmlFor="firstName"
            className="tracked"
            >
            What kind of plant?
          </label>
          <Field
            name="plantName"
            component="input"
            type="text"
            placeholder="Tomato"
            required
            className="db mb4 mt2 w-100 w-70-m w-50-ns pa2"
            />
          <label
            htmlFor="plantDate"
            className="tracked"
            >
            When was it planted?
          </label>
          <Field
            name="plantDate"
            component="input"
            type="text"
            placeholder="Late February"
            required
            className="db mb4 mt2 w-100 w-70-m w-50-ns pa2"
            />
          <label
            htmlFor="numberPlanted"
            className="tracked"
            >
            How many were planted?
          </label>
          <Field
            name="numberPlanted"
            component="input"
            type="number"
            value={1}
            min={1}
            max={100}
            className="db mb4 mt2 w-100 w-70-m w-50-ns pa2"
            />
          <label
            htmlFor="plantLocation"
            className="tracked"
            >
            Where is it planted?</label>
          <Field
            name="plantLocation"
            component="input"
            type="text"
            placeholder="Front porch"
            required
            className="db mb4 mt2 w-100 w-70-m w-50-ns pa2"
            />
          <label
            htmlFor="waterFrequency"
            className="tracked"
            >
            How often should you water?
          </label>
          <label className="db">
            <Field
              name="waterFrequency"
              component="input"
              type="radio"
              value="Once a day"
              /> {' '} Once a day
            </label>
            <label className="db">
              <Field
                name="waterFrequency"
                component="input"
                type="radio"
                value="Once a week"
                /> {' '} Once a week
              </label>
              <label className="db">
                <Field
                  name="waterFrequency"
                  component="input"
                  type="radio"
                  value="Once a month"
                  /> {' '} Once a month
                </label>
                <button
                  type="submit"
                  className="w-100 w-70-m w-50-ns f4 link dim ba bw2 ph3 pv2 mt3 mb2 dib near-black">
                  Submit
                </button>
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
