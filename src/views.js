// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

import Demo from './pages/demo';
import DemoMultiScope from './pages/demo-multi-scope';
import Doc from './pages/docs';

// -----------------------------------------------------------------------------

const $ViewWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 100%;
  min-width: 0;
  position: relative;
  margin: 0 24px;
  padding: 40px 0;
`;

// -----------------------------------------------------------------------------

const Views = () => (
  <$ViewWrapper>
    <Switch>
      <Route path="/" exact component={Doc} />
      <Route path="/docs" exact component={Doc} />
      <Route path="/demo" component={Demo} />
      <Route path="/multi" component={DemoMultiScope} />
    </Switch>
  </$ViewWrapper>
);

// -----------------------------------------------------------------------------

export default Views;
