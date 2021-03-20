// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

import Demo from './pages/demo';
import Doc from './pages/docs';
import Home from './pages/home';
import {device} from './style/breakpoints';

// -----------------------------------------------------------------------------

const $ViewWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 100%;
  min-width: 0;
  position: relative;
  margin: 0;
  padding: 70px 0;

  @media ${device.tablet} {
    margin: 0 24px;
  }
`;

// -----------------------------------------------------------------------------

const Views = () => (
  <$ViewWrapper>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/doc" exact component={Doc} />
      <Route path="/demo" exact component={Demo} />
    </Switch>
  </$ViewWrapper>
);

// -----------------------------------------------------------------------------

export default Views;
