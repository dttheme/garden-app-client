import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.svg';

// import './Header.css';

class Header extends Component {
  render() {
    //TODO: Find out why isLoggedIn returns false even when there is a token
    // {this.props.isLoggedIn ?
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/dashboard">Dashboard</Link>
    //         </li>
    //         <li>
    //           <Link to="/garden">Garden</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     :
    // }
    // <img src={logo} className="br-100 pa1 ba b--black-10 h3 w3" />

    return (
        <div className="pt3 pb3 ml4 mr4">
          <h1  className="f3 f1-ns fw9 moon-grey pa0 ma0 dib">Sprout Bud</h1>
          <nav className="fr">
            <ul>
              <li className="dib f5">
                <Link to="/" className="washed-green no-underline underline-hover hover-light-yellow pr4">Home</Link>
              </li>
              <li className="dib f5">
                <Link to="/signup" className="washed-green no-underline underline-hover hover-light-yellow pr4">Sign Up</Link>
              </li>
              <li className="dib f5">
                <Link to="/login" className="washed-green no-underline underline-hover hover-light-yellow pr4">Login</Link>
              </li>
              <li className="dib f5">
                <Link to="/dashboard" className="washed-green no-underline underline-hover hover-light-yellow pr4">Dashboard</Link>
              </li>
              <li className="dib f5">
                <Link to="/garden" className="washed-green no-underline underline-hover hover-light-yellow pr4">Garden</Link>
              </li>
            </ul>
          </nav>
        </div>
    );
  }
}

export default Header;
