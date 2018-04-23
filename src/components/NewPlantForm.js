import React from 'react';

import { Field, reduxForm, SubmissionError, focus } from 'redux-form';

export class NewPlantForm extends React.Component {
  // const { handleSubmit } = props;
  onSubmit(values) {
    return fetch('/garden', {
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
          Form submitted successfully!
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
      <button type="submit">Submit</button>
    </form>
  );
}
}

export default reduxForm({
  form: "newPlant",
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus("contact", Object.keys(errors)[0]))
  }
})(NewPlantForm);
