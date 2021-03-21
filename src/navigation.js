// -----------------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';
import Markdown from './components/markdown';

import {device} from './style/breakpoints';
import toc from './resources/toc.md';

// -----------------------------------------------------------------------------

const $Navigation = styled.div`
  flex: 0 0 0px;
  height: calc(100vh - 50px);
  position: sticky;
  overflow-y: auto;
  top: 50px;

  @media ${device.laptopL} {
    flex: 0 0 240px;
  }
`;

// -----------------------------------------------------------------------------

const Navigation = () => {
  return (
    <$Navigation>
      <Markdown markdown={toc} />
    </$Navigation>
  );
};

// -----------------------------------------------------------------------------

export default Navigation;
