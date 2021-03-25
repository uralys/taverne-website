// -----------------------------------------------------------------------------

import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

import {device} from './style/breakpoints';
import {PATHS} from './views';

// -----------------------------------------------------------------------------

import gettingStartedTOC from '../tocs/getting-started.toc.md';
import reactTOC from '../tocs/react.toc.md';
import Markdown from './components/markdown';

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

const topics = [
  {
    name: 'Getting started',
    path: PATHS.gettingStarted,
    toc: gettingStartedTOC
  },
  {
    name: 'React hooks',
    path: PATHS.reactIntegration,
    toc: reactTOC
  }
];

// -----------------------------------------------------------------------------

const Navigation = () => {
  return (
    <$Navigation>
      {topics.map(({name, path, toc}) => (
        <>
          <NavLink exact to={path}>
            {name}
          </NavLink>
          <Markdown markdown={toc} />
        </>
      ))}
    </$Navigation>
  );
};

// -----------------------------------------------------------------------------

export default Navigation;
