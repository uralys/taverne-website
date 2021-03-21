// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

import Demo from './pages/demo-rgb';
import Doc from './pages/docs';
import Home from './pages/home';

// -----------------------------------------------------------------------------

const $View = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 30px;
  width: 100%;
`;

// -----------------------------------------------------------------------------

const Views = () => (
  <$View>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/doc" exact component={Doc} />
      <Route path="/demo" exact component={Demo} />
    </Switch>
  </$View>
);

// -----------------------------------------------------------------------------

export default Views;
