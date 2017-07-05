import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createField } from '../actions/index';

class FieldsNew extends Component {
  onSubmit(values) {
    const promise = new Promise((resolve, reject) => {
      const file = values.image[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        if(!!reader.result) {
          resolve(reader.result)
        } else {
          reject(Error("Failed to convert to base 64"))
        }
      }
    });

    promise.then(result => {
      values.image = result;

      this.props.createField(values, () => {
        this.props.history.push('/');
      });
    }, err => {
      console.log('Erro', err);
    })
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

  renderDropzoneField(field) {
    const files = field.input.value;

    return(
      <div>
        <Dropzone
          name={field.name}
          onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
          multiple={false}>
          <div>Arraste uma imagem para cá</div>
        </Dropzone>
        {field.meta.touched && field.meta.error &&
          <span className="error">{field.meta.error}</span>}
        {files && Array.isArray(files) && (
          <ul>
            { files.map((file, i) => <li key={i}><img alt={file.name} src={file.preview} /><p>{file.name}</p></li>) }
          </ul>
        )}
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container-fluid">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Nome do campo" name="name" component={this.renderField} />
          <Field label="Endereço" name="address" component={this.renderField} />
          <Field label="Descrição" name="description" component={this.renderField} />
          <Field label="Foto do campo" name="image" component={this.renderDropzoneField} />


          <br/>
          <button type="submit" className="btn btn-primary">Salvar</button>
          <Link to="/" className="btn btn-danger">Cancelar</Link>
        </form>
      </div>
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
