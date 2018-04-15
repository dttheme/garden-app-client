import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onsubmit={handleSubmit}>
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
};

export default reduxForm({
  form: "login",
})(LoginForm);
