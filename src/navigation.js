// -----------------------------------------------------------------------------

import React from 'react';
import {useHistory} from 'react-router';

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
    <>
      <p onClick={openDocs}>docs</p>
      <p onClick={openDemo}>demo</p>
      <p onClick={openMulti}>multi</p>
    </>
  );
};

// -----------------------------------------------------------------------------

export default Navigation;
