import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="header">
          <h1>Garden App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/garden">Garden</Link>
              </li>
            </ul>
          </nav>

        </div>
    );
  }
}

export default Header;
