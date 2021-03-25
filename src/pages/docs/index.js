// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router';
import styled from 'styled-components';
import Navigation from '../../navigation';
import {device} from '../../style/breakpoints';

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
