// -----------------------------------------------------------------------------

import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import styled from 'styled-components';

import Navigation from './navigation';
import gettingStartedMd from './getting-started.md';
import reactIntegrationMd from './react.md';
import {device} from '../../style/breakpoints';
import Markdown from '../../components/markdown';

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

const $DocView = styled.div`
  width: 100%;

  @media ${device.tablet} {
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
  }
`;

// -----------------------------------------------------------------------------

const Documentation = props => {
  const {path} = props.match;
  return (
    <$View>
      <Navigation />
      <$DocView>
        <Switch>
          <Route
            path={`${path}${gettingStarted}`}
            exact
            component={() => <Markdown markdown={gettingStartedMd} />}
          />
          <Route
            path={`${path}${reactIntegration}`}
            exact
            component={() => <Markdown markdown={reactIntegrationMd} />}
          />
          <Route exact path={path}>
            <Redirect to={`${path}${gettingStarted}`} />
          </Route>
        </Switch>
      </$DocView>
    </$View>
  );
};

// -----------------------------------------------------------------------------

export default Documentation;

export const DOC_PATHS = {
  gettingStarted: `${root}${gettingStarted}`,
  reactIntegration: `${root}${reactIntegration}`
};
