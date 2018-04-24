import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchUserLogin } from '../actions/index.actions';


import LoginForm from "../components/LoginForm"
// import './SignupForm.css';

class LoginPage extends Component {

  render() {
    return (
      <div className="loginWrapper">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Username"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({

});

export default reduxForm({
  form: 'login'
})(connect(mapStateToProps, {fetchUserLogin})(LoginPage))
