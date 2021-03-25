// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router';
import styled from 'styled-components';

import Navigation from './navigation';
import GettingStarted from './getting-started';
import ReactIntegration from './react';

// -----------------------------------------------------------------------------

const root = '/documentation';
const gettingStarted = '/getting-started';
const reactIntegration = '/react';

// -----------------------------------------------------------------------------

const $View = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;

// -----------------------------------------------------------------------------

const Documentation = props => {
  const {path} = props.match;
  return (
    <$View>
      <Navigation />
      <Switch>
        <Route
          path={`${path}${gettingStarted}`}
          exact
          component={GettingStarted}
        />
        <Route
          path={`${path}${reactIntegration}`}
          exact
          component={ReactIntegration}
        />
      </Switch>
    </$View>
  );
};

// -----------------------------------------------------------------------------

export default Documentation;

export const DOC_PATHS = {
  gettingStarted: `${root}${gettingStarted}`,
  reactIntegration: `${root}${reactIntegration}`
};
