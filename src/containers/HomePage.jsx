import React, { Component } from 'react';
import { connect } from 'react-redux';
import WelcomeMessage from '../components/Welcome';
import ReturnMessage from '../components/ReturnMessage';
import mainHeaderImg from "../images/sprouts.jpg";


export class HomePage extends Component {
  render() {
    return (
      <div>
        {!this.props.user.isLoggedIn ?
          <div className="center">
            <WelcomeMessage />
          </div>
          :
            <div className="mt7">
              <ReturnMessage user={this.props.user} />
            </div>
          }
        </div>
      )
    }
  }


  const mapStateToProps = state => ({
    user: state.user,
    appState: {
      isFetchingGarden: state.appState.isFetchingUserInfo,
    },
  })

  export default connect(mapStateToProps)(HomePage);
