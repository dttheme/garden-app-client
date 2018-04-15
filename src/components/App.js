import React, { Component } from 'react';

import { connect } from 'react-redux';

import WelcomeMessage from './Welcome'
import Header from './Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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

export default App;
