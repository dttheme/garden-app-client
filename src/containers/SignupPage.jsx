import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../actions/index.actions';


// import './SignupForm.css';

class SignupPage extends Component {
  submitHandler(val) {
    const email = val.email;
    const password = val.password;
    const firstName = val.firstName;
    this.props.createUser(firstName, email, password);
  }
  render() {
    return (
      <div className="signupWrapper ml7 mr7">
        <h2 className="f2 h3 tc">
          Sign up
        </h2>
          <form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="POST">
            <label htmlFor="firstName">First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
              className="db mb4 mt2"
              required
            />
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Username"
              className="db mb4 mt2"
              required
            />
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
              className="db mb4 mt2"
              required
            />
            <button type="submit">Sign up</button>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

export default reduxForm({
  form: 'signup'
})(connect(mapStateToProps, {createUser})(SignupPage))
