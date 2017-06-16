import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { fetchFields } from '../actions/index';

class FieldsIndex extends Component {
  componentWillMount() {
    this.props.fetchFields();
  }

  renderFields() {
    return this.props.fields.map((field) => {
      return(
        <li className="list-group-item" key={field.id}>
          <Link to={`fields/${field.id}`}>
            <span className="pull-xs-right">{field.name}</span>
            <strong>{field.name}</strong>
          </Link>
        </li>
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
        <ul className="list-group">
          {this.renderFields()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { fields: state.fields.all };
}

export default connect(mapStateToProps, { fetchFields })(FieldsIndex);
