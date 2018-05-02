import React, { Component } from 'react';
import { connect } from 'react-redux';
import WelcomeMessage from '../components/Welcome'
import mainHeaderImg from "../images/sprouts.jpg";


class Home extends Component {
  render() {
    return (
      <div
        className="mt7"
        >
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
