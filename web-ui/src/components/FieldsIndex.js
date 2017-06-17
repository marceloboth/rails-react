import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { fetchFields } from '../actions/index';

class FieldsIndex extends Component {
  componentWillMount() {
    this.props.fetchFields();
  }

  renderFields() {
    return _.map(this.props.fields, field => {
      return(
        <div className="card card-field">
          <img alt="campo" src={`http://localhost:3000/${field.image.url}`} width="400" className="card-img-top" />
          <div className="card-block">
            <h4 className="card-title">{field.name}</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-primary">Back</Link>
          </div>
          <li className="list-group-item" key={field.id}>
            <Link to={`fields/${field.id}`}>
              <span className="pull-xs-right">{field.name}</span>
              <strong>{field.createdAt}</strong>
            </Link>
          </li>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/fields/new" className="btn btn-primary">Adicionar um campo</Link>
        </div>
        <h3>Campos</h3>
        {this.renderFields()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { fields: state.fields };
}

export default connect(mapStateToProps, { fetchFields })(FieldsIndex);
