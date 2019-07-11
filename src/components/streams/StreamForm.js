import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div>
          <p className="text-danger">{error}</p>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const inputClass = `form-control ${
      meta.error && meta.touched ? "is-invalid" : ""
    }`;
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className={inputClass} {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title!";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description!";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
