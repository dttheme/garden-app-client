import React, { Component } from 'react';

import { connect } from 'react-redux';

import WelcomeMessage from '../components/Welcome'


class Home extends Component {
  render() {
    return (
      <div className="Home">
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
