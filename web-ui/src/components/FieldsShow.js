import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchField, deleteField } from '../actions/index';
import { Link } from 'react-router-dom';
import './FieldsShow.css';

class FieldsShow extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchField(id);
  }

  onDeleteClick() {
    this.props.deleteField(this.props.match.params.id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { field } = this.props;
    if (!field) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container-fluid">
        <div className="card card-field">
          <img alt="campo" src={`http://localhost:3000/${field.image.url}`} width="400" className="card-img-top" />
          <div className="card-block">
            <h4 className="card-title">{field.name}</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-primary">Back</Link>
            <button
              className="btn btn-danger pull-xs-right"
              onClick={this.onDeleteClick.bind(this)}>
              Excluir
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ fields }, ownProps) {
  return { field: fields[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchField, deleteField })(FieldsShow);
