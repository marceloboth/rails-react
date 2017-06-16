import { FETCH_FIELDS } from '../actions/index';

const INITIAL_STATE = { all: [], field: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  //case FETCH_FIELD:
  //  return { ...state, post: action.payload.data};
  case FETCH_FIELDS:
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}
