import React, { Component } from 'react';
import { connect } from 'react-redux';
import WelcomeMessage from '../components/Welcome'
import mainHeaderImg from "../images/sprouts.jpg";

const welcomeStyle = {
  background:`url(${mainHeaderImg}) no-repeat`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  height: "100%"
}

class Home extends Component {
  render() {
    return (
      <div className="vh-100" style={welcomeStyle}>
        <WelcomeMessage />
      </div>
    );
  }
}

// const mapStateToProps = (state)
//
// const AppContainer = connect(
//   mapStateToProps,
// )

export default Home;
