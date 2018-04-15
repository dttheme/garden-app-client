import React from 'react';

import { Field, reduxForm } from 'redux-form';

let SignupForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">What kind of plant?</label>
      <Field
        name="plantName"
        component="input"
        type="text"
        placeholder="Plant Name"
      />
    <label htmlFor="plantDate">When was it planted?</label>
      <Field
        name="plantDate"
        component="input"
        type="text"
        placeholder="Date Planted"
      />
    <label htmlFor="numberPlanted">How many were planted?</label>
        <Field
          name="numberPlanted"
          component="input"
          type="number"
          value={1}
          min={1}
          max={100}
        />
    <label htmlFor="plantLocation">Where is it planted?</label>
      <Field
        name="plantLocation"
        component="input"
        type="text"
        placeholder="Plant Location"
      />
    <label htmlFor="waterFrequency">How often should you water?</label>
        <label>
          <Field
            name="waterFrequency"
            component="input"
            type="radio"
            value="Once a day"
          /> {' '} Once a day
        </label>
        <label>
          <Field
            name="waterFrequency"
            component="input"
            type="radio"
            value="Once a week"
          /> {' '} Once a week
        </label>
        <label>
          <Field
            name="waterFrequency"
            component="input"
            type="radio"
            value="Once a month"
          /> {' '} Once a month
        </label>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default reduxForm({
  form: "signup",
})(SignupForm);
