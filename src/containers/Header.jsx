import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// TODO: Unstick Header

class Header extends Component {
  render() {
    return (
      <div>
        <div className="dark-gray bg-dark-green fl fixed z-9999 w-100 h-auto pt3 pb3 pl4 pr4 bb bw3 b--green">
          <h1
            className="dark-gray f2 f1-ns fw9 pa0 ma0 dib tracked"
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
                  <a onClick={this.props.logoutUser} className="ba0 washed-green no-underline underline-hover hover-light-yellow pr4 pointer">Logout</a>
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
