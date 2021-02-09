import React from 'react';
import styled from 'styled-components';
import UsingHookstores from './apps/using-hookstores';
import GithubCorner from './components/github-corner';

// -----------------------------------------------------------------------------

const $App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #282c34;
  color: #ededed;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  position: relative;
  overflow: hidden;
`;

// -----------------------------------------------------------------------------

const App = props => {
  const {id: appId} = props;
  console.log(`☢️ creating App ${appId}`);

  return (
    <$App>
      <GithubCorner />
      <UsingHookstores />
    </$App>
  );
};

export default App;
