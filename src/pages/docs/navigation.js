// -----------------------------------------------------------------------------

import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

import {device} from '../../style/breakpoints';
import Markdown from '../../components/markdown';

// -----------------------------------------------------------------------------

import {DOC_PATHS} from '.';
import gettingStartedTOC from '../../../tocs/getting-started.toc.md';
import reactTOC from '../../../tocs/react.toc.md';

// -----------------------------------------------------------------------------

const $Navigation = styled.div`
  flex: 0 0 0px;
  height: calc(100vh - 50px);
  position: sticky;
  overflow-y: auto;
  top: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px 0px;

  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex: 0 0 240px;
  }
`;

const $TOC = styled.div`
  height: 0;
  overflow: hidden;
`;

// -----------------------------------------------------------------------------

const Navigation = () => {
  const topics = [
    {
      name: 'Getting started',
      path: DOC_PATHS.gettingStarted,
      toc: gettingStartedTOC
    },
    {
      name: 'React hooks',
      path: DOC_PATHS.reactIntegration,
      toc: reactTOC
    }
  ];

  return (
    <$Navigation>
      {topics.map(({name, path, toc}) => (
        <div key={path}>
          <NavLink exact to={path}>
            {name}
          </NavLink>
          <$TOC>
            <Markdown markdown={toc} />
          </$TOC>
        </div>
      ))}
    </$Navigation>
  );
};

// -----------------------------------------------------------------------------

export default Navigation;
