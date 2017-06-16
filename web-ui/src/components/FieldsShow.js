import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchField, deleteField } from '../actions/index';
import { Link } from 'react-router-dom';

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
      <div>
        <Link to="/">Back</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
            Excluir
        </button>
        <h3>{field.name}</h3>
      </div>
    );
  }
}

function mapStateToProps({ fields }, ownProps) {
  return { field: fields[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchField, deleteField })(FieldsShow);
