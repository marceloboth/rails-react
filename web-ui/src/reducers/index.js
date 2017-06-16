import { combineReducers } from 'redux';
import { reducer as api } from 'redux-json-api';
import FieldsReducer from './fields';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  api,
  fields: FieldsReducer,
  form: formReducer
});

export default rootReducer;
