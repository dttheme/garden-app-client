import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import appConfig from '../config/appConfig';


// TODO: Why are navigation links not changing when logged out?
// TODO: Should I create action/reducer for logging out?
class Header extends Component {
  render() {
    function logoutUser() {
      sessionStorage.removeItem(appConfig.TOKEN_CONTENT_KEY);
    }
    return (
      <div>
        <div className="pt3 pb3 ml4 mr4">
          <h1
            className="f3 f1-ns fw9 moon-grey pa0 ma0 dib tracked"
            >
            Sprout Bud
          </h1>
          {this.props.isLoggedIn ?
            <nav className="fr">
              <ul>
                <li className="dib f5 fw9 tracked">
                  <Link to="/" className="washed-green no-underline underline-hover hover-light-yellow pr4">Home</Link>
                </li>
                <li className="dib f5 fw9 tracked">
                  <Link to="/dashboard" className="washed-green no-underline underline-hover hover-light-yellow pr4">Dashboard</Link>
                </li>
                <li className="dib f5 fw9 tracked">
                  <Link to="/garden" className="washed-green no-underline underline-hover hover-light-yellow pr4">Garden</Link>
                </li>
                <li className="dib f5 fw9 tracked">
                  <button onClick={logoutUser} className="ba0 washed-green no-underline underline-hover hover-light-yellow pr4">Logout</button>
                </li>
              </ul>
            </nav>
            :
            <nav className="fr">
              <ul>
                <li className="dib f5 fw9 tracked">
                  <Link to="/" className="washed-green no-underline underline-hover hover-light-yellow pr4">Home</Link>
                </li>
                <li className="dib f5 fw9 tracked">
                  <Link to="/signup" className="washed-green no-underline underline-hover hover-light-yellow pr4">Sign Up</Link>
                </li>
                <li className="dib f5 fw9 tracked">
                  <Link to="/login" className="washed-green no-underline underline-hover hover-light-yellow pr4">Login</Link>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    )
  }
}

export default Header;
