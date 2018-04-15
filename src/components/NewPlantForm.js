import React from 'react';

import { Field, reduxForm } from 'redux-form';

let SignupForm = props => {
  const { handleSubmit } = props;
  return (
    <form onsubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <Field
        name="firstName"
        component="input"
        type="text"
        placeholder="First Name"
      />
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
      <button type="submit">Sign up</button>
    </form>
  );
};

export default reduxForm({
  form: "signup",
})(SignupForm);
