import React from 'react';
import { Route } from 'react-router-dom';

import FieldsNew   from './components/FieldsNew';

export default (
  <Route>
    <Route exact path="/" component={FieldsIndex} />
    <Route path="fields" component={FieldsIndex} />
    <Route path="fields/new" component={FieldsNew} />
  </Route>
);
