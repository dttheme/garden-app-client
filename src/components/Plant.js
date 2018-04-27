import React, { Component } from "react";

// import './Dashboard.css';

export default function Plant(props) {
  return (
    <div className="plantWrapper">
      <h3>{props.plantName}</h3>
      {props.numberPlanted}
      <p>Date Planted: {props.plantDate}</p>
      <p>Location: {props.plantLocation}</p>
      <p>You should water: {props.waterFrequency}</p>
  </div>
);
}

Plant.defaultProps = {
  plantName: "",
  plantDate: "00/00/00",
  numberPlanted: null,
  plantLocation: "",
  waterFrequency: ""
}
