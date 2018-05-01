import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
// import logo from './img/logo.svg';


const Main = props => (
  <div>
    <div>
      <Header isLoggedIn={props.user.isLoggedIn} firstName={props.user.firstName} />
    </div>
      {props.children}
  </div>
)

const mapStateToProps = state => ({
  appState: state.appState,
  user: state.user,
});

export default connect(mapStateToProps)(Main);
