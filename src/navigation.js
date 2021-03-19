// -----------------------------------------------------------------------------

import React from 'react';
import {useHistory} from 'react-router';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

const $Navigation = styled.div`
  flex: 0 0 240px;
  height: calc(100vh - 50px);
  position: sticky;
  overflow-y: auto;
  top: 50px;
`;

// -----------------------------------------------------------------------------

const Navigation = () => {
  const history = useHistory();

  const openDocs = () => {
    history.push('/docs');
  };

  const openDemo = () => {
    history.push('/demo');
  };

  const openMulti = () => {
    history.push('/multi');
  };

  return (
    <$Navigation>
      <p onClick={openDocs}>docs</p>
      <p onClick={openDemo}>demo</p>
      <p onClick={openMulti}>multi</p>
    </$Navigation>
  );
};

// -----------------------------------------------------------------------------

export default Navigation;
