import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

import FieldsNew from './components/FieldsNew';
import FieldsShow from './components/FieldsShow';
import FieldsIndex from './components/FieldsIndex';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/fields/new" component={FieldsNew} />
          <Route exact path="/fields/:id" component={FieldsShow} />
          <Route exact path="/" component={FieldsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
