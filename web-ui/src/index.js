import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';
import promise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';
import FieldsIndex from './components/FieldsIndex';
import { setEndpointHost, setEndpointPath } from 'redux-json-api';

const createStoreWithMiddleware = applyMiddleware(
  promise,
  thunk
)(createStore);

createStoreWithMiddleware.dispatch(setEndpointHost('http://localhost:8080'));
createStoreWithMiddleware.dispatch(setEndpointPath('/api/v1'))

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route path="/" component={FieldsIndex} />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
