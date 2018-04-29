import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchUserLogin } from '../actions/index.actions';

// import './SignupForm.css';

class LoginPage extends Component {
  submitHandler(val) {
    const username = val.username;
    const password = val.password;
    this.props.fetchUserLogin(username, password)
  }
  render() {
    return (
      <div className="ml7 mr7 ba bw2 pa3">
        <h2 className="f2 h3 tc">
          Login
        </h2>
        <form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="POST">
          <label htmlFor="email">Email</label>
          <Field
            name="username"
            component="input"
            type="email"
            placeholder="Username"
            className="db mb4 mt2"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
            className="db mb4 mt2"
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
