// -----------------------------------------------------------------------------

import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

import TOC from './components/toc';
import {device} from './style/breakpoints';
import {PATHS} from './views';

// -----------------------------------------------------------------------------

import gettingStartedMd from './pages/docs/getting-started/getting-started.md';
import reactMd from './pages/docs/react/react.md';

// -----------------------------------------------------------------------------

const $Navigation = styled.div`
  flex: 0 0 0px;
  height: calc(100vh - 50px);
  position: sticky;
  overflow-y: auto;
  top: 50px;

  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex: 0 0 240px;
  }
`;

// -----------------------------------------------------------------------------

const Navigation = () => {
  return (
    <$Navigation>
      <NavLink exact to={PATHS.gettingStarted}>
        Getting started
      </NavLink>
      <TOC markdown={gettingStartedMd} />
      <NavLink exact to={PATHS.reactIntegration}>
        React hooks
      </NavLink>
      <TOC markdown={reactMd} />
    </$Navigation>
  );
};

// -----------------------------------------------------------------------------

export default Navigation;
