import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './redux/store/configure-store';

import Home from './containers/HomePage'
import Header from './containers/Header';
import SignUp from './containers/SignupPage';
import Login from './containers/LoginPage';
import Dashboard from './containers/DashboardPage';
import Garden from './containers/GardenPage';
import Plant from './containers/PlantPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/garden" component={Garden} />
          <Route exact path="/plant/:id" component={Plant} />
        </Switch>
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
