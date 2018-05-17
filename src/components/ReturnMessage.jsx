import React from "react";


export default function ReturnMessage(props) {
  return (
    <div>
      <div className="dark-gray bg-dark-green w-100 w-80-m w-60-ns mt7-m mt6-ns ml7-ns ml5-m mb3 pl6-ns pl4-m pl4 pt4 pb4 ba-ns bw3-ns b--green" >
      <h2
        className=""
        >
          Welcome back, {props.user.firstName}!
      </h2>
      <p>You're garden is looking wonderful!</p>

      </div>
    </div>
  )
}
