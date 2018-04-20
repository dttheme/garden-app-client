import React, { Component } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import { history } from './redux/store/configure-store';

import Home from './containers/HomePage'
import Header from './containers/Header';
import SignUp from './containers/SignupPage';
import Login from './containers/LoginPage';
import Dashboard from './containers/DashboardPage';
import Garden from './containers/GardenPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/garden" component={Garden} />
          </div>
        </ConnectedRouter>
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
