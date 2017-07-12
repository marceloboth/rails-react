import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFields } from '../actions/index';
import './FieldsIndex.css';
import SearchFields from './SearchFields';
import { Link } from 'react-router-dom';
import FieldCard from '../components/FieldCard';
import { Button, Container, Columns, Column, Notification, CardFooterItem } from 're-bulma';

class FieldsIndex extends Component {
  componentWillMount() {
    this.props.fetchFields();
  }

  renderFields() {
    return _.map(this.props.fields, field => {
      return(
        <Column size="is3">
          <FieldCard field={field} key={field.id}>
            <CardFooterItem>
              <Link to={`/fields/${field.id}`}>Visualizar</Link>
            </CardFooterItem>
          </FieldCard>
        </Column>
      );
    });
  }

  render() {
    return (
      <Container isFluid={false}>
        <Columns>
          <Column>
            <SearchFields />
          </Column>
        </Columns>

        <Columns>
          <Column>
            <Notification>
              Adicione mais um campo de jogo <Button color="isSuccess"><Link to="/fields/new" className="disable-cursor">Aqui</Link></Button>
            </Notification>
          </Column>
        </Columns>
        <Columns>
          {this.renderFields()}
        </Columns>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { fields: state.fields };
}

export default connect(mapStateToProps, { fetchFields })(FieldsIndex);
