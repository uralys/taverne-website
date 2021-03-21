// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

import Demo from './pages/demo-rgb';
import Doc from './pages/docs';
import Home from './pages/home';
import {device} from './style/breakpoints';

// -----------------------------------------------------------------------------

const $View = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 5px;
  box-sizing: border-box;

  @media ${device.tablet} {
    padding: 80px 30px;
  }
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
