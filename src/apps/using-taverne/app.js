import React from 'react';
import styled from 'styled-components';

import GithubCorner from '../../components/github-corner';
import SingleSquare from './features/single-square/container';
import SingleRGB from './features/single-rgb/container';
import SinglePack from './features/single-pack/container';
import MultiPacks from './features/multi-packs/container';

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
      <h2>La Taverne demo</h2>
      <GithubCorner />

      <p>{`one Square`}</p>
      <SingleSquare />

      <p>{`one RGB`}</p>
      <SingleRGB />

      <p>{`one Pack`}</p>
      <SinglePack />

      <p>{`a [Pack] array`}</p>
      <MultiPacks />
    </$App>
  );
};

export default App;
