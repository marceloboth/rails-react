import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { searchFields } from '../actions/index';
import './SearchFields.css';
import { Input, Button, Group } from 're-bulma';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onSubmitForm(event) {
    event.preventDefault();
    this.props.searchFields(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return(
      <form onSubmit={this.onSubmitForm}>
        <Group>
          <Input
            placeholder="Encontre um campo"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
            isExpanded />
            <Button color="isPrimary">Pesquisar</Button>
        </Group>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchFields }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
