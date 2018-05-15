import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchUserLogin } from '../actions/index.actions';

export class LoginPage extends Component {
  submitHandler(val) {
    const username = val.username;
    const password = val.password;
    this.props.fetchUserLogin(username, password)
  }
  render() {
    return (
      <div className="dark-gray bg-dark-green w-100 w-80-m w-60-ns mt7-m mt6-ns ml7-ns ml5-m ba-ns bw3-ns b--green pl6-ns pl4-m pl4 pb4">
        <h2 className="f2 tracked">
          Login
        </h2>
        <form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="POST">
          <label
            htmlFor="email"
            className="tracked"
            >
            Email
          </label>
          <Field
            name="username"
            component="input"
            type="email"
            placeholder="sprout@email.com"
            className="db mb4 mt2 w-100 w-70-m w-50-ns pa2"
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
          />
          <button
            type="submit"
            className="w-100 w-70-m w-50-ns f4 link dim ba bw2 ph3 pv2 mt3 mb2 dib near-black"
            >
            Login
          </button>
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
