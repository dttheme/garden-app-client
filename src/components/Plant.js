import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default function Plant(props) {
  return (
    <div className="plantWrapper">
      <h3>
        {!props.isNotLinking ? <Link to={`/plant/${props.plant._id}`}>{props.plant.plantName}</Link> : props.plant.plantName}
      </h3>
      {props.plant.numberPlanted}
      <p>Date Planted: {props.plant.plantDate}</p>
      <p>Location: {props.plant.plantLocation}</p>
      <p>You should water: {props.plant.waterFrequency}</p>
      {props.deleteHandler && <button onClick={()=>props.deleteHandler(props.plant._id)}>x</button>}
      <hr></hr>
  </div>
);
}

Plant.defaultProps = {
  plantName: "",
  plantDate: "00/00/00",
  numberPlanted: null,
  plantLocation: "",
  waterFrequency: "",
  deleteHandler: null,
  isNotLinking: false
}
