import _ from 'lodash';
import { FETCH_FIELDS, FETCH_FIELD, DELETE_FIELD } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
  case DELETE_FIELD:
    return _.omit(state, action.payload)
  case FETCH_FIELD:
    return { ...state, [action.payload.id]: action.payload };
  case FETCH_FIELDS:
    return _.mapKeys(action.payload, 'id');
  default:
    return state;
  }
}
