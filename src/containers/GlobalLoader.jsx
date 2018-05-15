import React from 'react';
import { connect } from 'react-redux';
import hasToken from '../helpers/token'
import { fetchUserInfo } from "../actions/index.actions";

// TODO: Figure out why isLoggedIn does not have user information
// TODO: Center "Loading" on page
// TODO: Add loading icon

class GlobalLoader extends React.Component {
  componentDidMount() {
    if (hasToken() && !this.props.user.isLoggedIn) {
      console.log('fetching user info');
      console.log(this.props.user);
      this.props.fetchUserInfo();
    }
}
  render() {
    return (
      <div>
        {this.props.appState.isFetchingUserInfo ?
        <div className="center">
        <h2 className="mt0">
          Loading...
        </h2>
      </div>
      :
      <div>
            {this.props.children}
      </div>
    }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  appState: {
    isFetchingUserInfo: state.appState.isFetchingUserInfo,
  },
});

export default connect(mapStateToProps, { fetchUserInfo })(GlobalLoader);
