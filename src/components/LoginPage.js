import React, { Component } from 'react';

import LoginForm from "./LoginForm"
// import './SignupForm.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="loginWrapper">
        <h2>Login</h2>
        <LoginForm />
      </div>

    );
  }
}

export default LoginPage;
