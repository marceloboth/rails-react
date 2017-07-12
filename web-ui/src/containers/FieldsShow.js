import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchField, deleteField } from '../actions/index';
import { Link } from 'react-router-dom';
import './FieldsShow.css';
import FieldCard from '../components/FieldCard';
import { Button, CardFooterItem } from 're-bulma';

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
      <FieldCard field={field}>
        <CardFooterItem>
          <Link to="/">Voltar</Link>
        </CardFooterItem>
        <CardFooterItem>
          <Button buttonStyle="isInverted" color="isDanger" onClick={this.onDeleteClick.bind(this)}>Excluir</Button>
        </CardFooterItem>
      </FieldCard>
    );
  }
}

function mapStateToProps({ fields }, ownProps) {
  return { field: fields[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchField, deleteField })(FieldsShow);
