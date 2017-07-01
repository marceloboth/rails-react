import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { fetchFields } from '../actions/index';
import './FieldsIndex.css';

class FieldsIndex extends Component {
  componentWillMount() {
    this.props.fetchFields();
  }

  renderFields() {
    return _.map(this.props.fields, field => {
      return(
        <div className="card card-field" key={field.id}>
          <img alt="campo" src={`http://localhost:3000/${field.image.url}`} width="250" height="175" className="card-img-top" />
          <div className="card-block">
            <h4 className="card-title">{field.name}</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to={`fields/${field.id}`} className="btn btn-primary">Visualizar</Link>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <br/>
        <div className="row">
          <div className="input-group">
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Encontre um campo" />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Buscar</button>
            </span>
          </div>
        </div>
        <br/>
        <div className="row">
          <Link to="/fields/new" className="btn btn-primary btn-sm">Adicionar um campo</Link>
        </div>
        <br/>
        <div className="row">
          {this.renderFields()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { fields: state.fields };
}

export default connect(mapStateToProps, { fetchFields })(FieldsIndex);
