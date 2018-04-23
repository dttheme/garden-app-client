import React from 'react';

import { Field, reduxForm, SubmissionError, focus } from 'redux-form';

export class LoginForm extends React.Component {
  // const { handleSubmit } = props;
  onSubmit(values) {
    return fetch('/users', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if (!res.ok) {
        if (res.headers.has("content-type") &&
            res.headers
              .get("content-type")
              .startsWith("application/json")
            ) {
              return res.json().then(err => Promise.reject(err));
            }
            return Promise.reject({
              code: res.status,
              message: res.statusText
            });
      }
      return;
    })
    .then(() => console.log("Submitted with values", values))
    .catch(err => {
      const {reason, message, location} = err;
      if (reason == 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
      return Promise.reject(
        new SubmissionError({
          _error: "Error submitting form"
        })
      );
    });
  }
  render() {
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message messageSuccess">
          You have signed up successfully!
        </div>
      );
    }
    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message messageError">
          {this.props.error}
        </div>
      );
    }
  return (
    <form
      onSubmit={this.props.handleSubmit(values =>
        this.onSubmit(values)
      )}>
    {successMessage}
    {errorMessage}
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
  );
}
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus("contact", Object.keys(errors)[0]))
  }
})(LoginForm);
