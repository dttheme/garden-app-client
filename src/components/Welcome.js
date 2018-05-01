import React from "react";
import mainHeaderImg from "../images/sprouts.jpg";
const welcomeStyle = {
  background:`url(${mainHeaderImg}) no-repeat right`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
}

export default function WelcomeMessage() {
  return (
    <div
      style={welcomeStyle}
      className="vh-75"
      >
      <div className="w-90 w-60-ns ml7-ns ml5-m pl6-ns pl4-m pl4 pt4 pb4" >
      <h2
        className=""
        >
        Welcome
      </h2>
      <p>Please render!</p>
      </div>
    </div>
  )
}
