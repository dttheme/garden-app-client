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
      <div className="signupWrapper w-90 w-60-ns mt5 ml7-ns ml5-m ba-ns bw2-ns pl6-ns pl4-m pl4 pb4">
        <h2 className="f2 tracked">
          Sign up
        </h2>
          <form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="POST">
            <label
              htmlFor="firstName"
              className="tracked"
              >
              First Name
            </label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="Bud"
              className="db mb4 mt2 w-100 w-70-m w-50-ns pa2"
              required
            />
            <label
              htmlFor="email"
              className="tracked"
              >
              Email
            </label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="sprout@email.com"
              className="db mb4 mt2 w-100 w-70-m w-50-ns pa2"
              required
            />
            <label
              htmlFor="password"
              className="tracked"
              >
              Password
            </label>
            <Field
              name="password"
              component="input"
              type="password"
              className="db mb4 mt2 w-100 w-70-m w-50-ns pa2"
              required
            />
            <button
              type="submit"
              className="w-100 w-70-m w-50-ns f4 link dim ba bw2 ph3 pv2 mt3 mb2 dib near-black"
              >
              Sign up
            </button>
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
