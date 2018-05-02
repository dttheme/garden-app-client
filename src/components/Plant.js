import React, { Component } from "react";
import { Link } from 'react-router-dom';
var FontAwesome = require('react-fontawesome');


export default function Plant(props) {
  return (
    <div className="">
      <h3
        className="f4 fw9 tracked"
        >
        {!props.isNotLinking ? <Link className="washed-green no-underline underline-hover hover-light-yellow" to={`/plant/${props.plant._id}`}>{props.plant.plantName}</Link> : props.plant.plantName} ({props.plant.numberPlanted})
      </h3>
      <p>
        <FontAwesome
          className="fa fa-calendar-alt"
        />
        {props.plant.plantDate}</p>
      <p>Location: {props.plant.plantLocation}</p>
      <p>You should water: {props.plant.waterFrequency}</p>
      {props.deleteHandler && <button onClick={()=>props.deleteHandler(props.plant._id)}>x</button>}
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
