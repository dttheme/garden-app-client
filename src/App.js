import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './redux/store/configure-store';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import Home from './containers/HomePage'
import Header from './containers/Header';
import SignUp from './containers/SignupPage';
import Login from './containers/LoginPage';
import Dashboard from './containers/DashboardPage';
import Garden from './containers/GardenPage';
import Plant from './containers/PlantPage';


//TODO global message component
class App extends Component {
  render() {
    return (
      <div className="App bg-dark-green min-vh-100">
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/signup" component={ SignUp } />
          <Route exact path="/login" component={ Login } />
          <PrivateRoute exact path="/dashboard" component={ Dashboard } />
          <PrivateRoute exact path="/garden" component={ Garden } />
          <PrivateRoute exact path="/plant/:id" component={ Plant } />
        </Switch>
      </div>
    );
  }
}

export default App;
