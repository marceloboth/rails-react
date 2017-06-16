import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createField } from '../actions/index';

class FieldsNew extends Component {
  onSubmit(values) {
    this.props.createField(values, () => {
      this.props.history.push('/');
    });
  }

  renderField(field) {
    const { meta: { touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input {...field.input} type="text" className="form-control" />
        <div className="text-help has-danger">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Nome do campo"
          name="name"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Salvar</button>
        <Link to="/" className="btn btn-danger">Cancelar</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Informe o nome do campo';
  }

  return errors;
}


// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st argumento is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'FieldsNewForm',
  validate
})(
  connect(null, { createField })(FieldsNew)
);
