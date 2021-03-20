// -----------------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';

import {device} from './style/breakpoints';

// -----------------------------------------------------------------------------

const $Navigation = styled.div`
  flex: 0 0 0px;
  height: calc(100vh - 50px);
  position: sticky;
  overflow-y: auto;
  top: 50px;

  @media ${device.tablet} {
    flex: 0 0 240px;
  }
`;

// -----------------------------------------------------------------------------

const Navigation = () => {
  return (
    <$Navigation>
      {/* <p onClick={openDocs}>docs</p> */}
      {/* <p onClick={openDemo}>demo</p> */}
    </$Navigation>
  );
};

// -----------------------------------------------------------------------------

export default Navigation;
