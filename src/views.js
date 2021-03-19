// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router-dom';

// -----------------------------------------------------------------------------

import Demo from './pages/demo';
import DemoMultiScope from './pages/demo-multi-scope';
import Doc from './pages/docs';

// -----------------------------------------------------------------------------

const Views = () => (
  <Switch>
    <Route path="/" exact component={Doc} />
    <Route path="/docs" exact component={Doc} />
    <Route path="/demo" component={Demo} />
    <Route path="/multi" component={DemoMultiScope} />
  </Switch>
);

// -----------------------------------------------------------------------------

export default Views;
