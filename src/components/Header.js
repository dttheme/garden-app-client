import React, { Component } from 'react';
// import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Garden App</h1>
        <nav>
          <ul>
            <li>
              Home
            </li>
            <li>
              Sign Up
            </li>
            <li>
              Login
            </li>
            <li>
              Dashboard
            </li>
            <li>
              My Garden
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
