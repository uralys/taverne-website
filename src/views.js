// -----------------------------------------------------------------------------

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

import Intro from './pages/intro';
import Demo from './pages/demo-rgb';
import Documentation from './pages/docs';
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
const documentation = '/documentation';
const demo = '/demo';

// -----------------------------------------------------------------------------

const Views = () => (
  <$View>
    <Switch>
      <Route path={intro} exact component={Intro} />
      <Route path={documentation} component={Documentation} />
      <Route path={demo} exact component={Demo} />
    </Switch>
  </$View>
);

// -----------------------------------------------------------------------------

export default Views;

export const PATHS = {
  intro,
  documentation,
  demo
};
