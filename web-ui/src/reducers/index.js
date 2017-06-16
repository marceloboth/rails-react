import { combineReducers } from 'redux';
import FieldsReducer from './fields';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  fields: FieldsReducer,
  form: formReducer
});

export default rootReducer;
