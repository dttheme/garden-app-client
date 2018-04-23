import React, { Component } from 'react';

import SignupForm from "../components/SignupForm"
// import './SignupForm.css';

class SignupPage extends Component {
  render() {
    return (
      <div className="signupWrapper">
        <h2>Sign up</h2>
        <SignupForm />
      </div>

    );
  }
}

export default SignupPage;
