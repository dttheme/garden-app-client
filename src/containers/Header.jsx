import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import appConfig from '../config/appConfig';

class Header extends Component {
  render() {
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
                  <Link to="/garden" className="washed-green no-underline underline-hover hover-light-yellow pr4">{this.props.firstName}'s Garden</Link>
                </li>
                <li className="dib f5 fw9 tracked">
                  <a onClick={this.props.logoutUser} className="ba0 washed-green no-underline underline-hover hover-light-yellow pr4">Logout</a>
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
