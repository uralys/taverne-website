// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

import Intro from './pages/intro';
import Demo from './pages/demo-rgb';
import GettingStarted from './pages/docs/getting-started';
import ReactIntegration from './pages/docs/react';
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

const intro = '/';
const gettingStarted = '/getting-started';
const reactIntegration = '/react';
const demo = '/demo';

// -----------------------------------------------------------------------------

const Views = () => (
  <$View>
    <Switch>
      <Route path={intro} exact component={Intro} />
      <Route path={gettingStarted} exact component={GettingStarted} />
      <Route path={reactIntegration} exact component={ReactIntegration} />
      <Route path={demo} exact component={Demo} />
    </Switch>
  </$View>
);

// -----------------------------------------------------------------------------

export default Views;

export const PATHS = {
  intro,
  gettingStarted,
  reactIntegration,
  demo
};
