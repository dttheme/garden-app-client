import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './containers/MainContainer'
import PrivateRoute from './components/PrivateRoute';
import GlobalLoader from './containers/GlobalLoader';

import './App.css';
import Home from './containers/HomePage'
import SignUp from './containers/SignupPage';
import Login from './containers/LoginPage';
import Dashboard from './containers/DashboardPage';
import Garden from './containers/GardenPage';
import Plant from './containers/PlantPage';

class App extends Component {
  render() {
    return (
      <div className="App bg-dark-green min-vh-100">
        <Switch>
          <GlobalLoader>
            <Main>
              <Route exact path="/" component={ Home } />
              <Route exact path="/signup" component={ SignUp } />
              <Route exact path="/login" component={ Login } />
              <PrivateRoute exact path="/dashboard" component={ Dashboard } />
              <PrivateRoute exact path="/garden" component={ Garden } />
              <PrivateRoute exact path="/plant/:id" component={ Plant } />
            </Main>
          </GlobalLoader>
        </Switch>
      </div>
    );
  }
}

export default App;
