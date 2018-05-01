import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Alert from '../components/Alert'
import { userLogout } from '../actions/index.actions'
// import logo from './img/logo.svg';


const Main = props => (
  <div>
    <div>
      <Header logoutUser={props.logout} isLoggedIn={props.user.isLoggedIn} firstName={props.user.firstName} />
        {props.appState.message &&
      <div className="error">
          <Alert
              isError={props.appState.message.isError}
              message={props.appState.message.message}
              isSelfClosing={!props.appState.message.isError}
          />
      </div>
  }
    </div>
      {props.children}
  </div>
)

const mapStateToProps = state => ({
  appState: state.appState,
  user: state.user,
});

const matchDispatchToProps = dispatch => ({
  logout: userLogout.bind(null, dispatch)
})

export default connect(mapStateToProps, matchDispatchToProps)(Main);
