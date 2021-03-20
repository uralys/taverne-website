import React from 'react';
import styled from 'styled-components';

import Prism from '../components/prism';
import SingleSquare from './features/single-square/container';
import SingleRGB from './features/single-rgb/container';
import SinglePack from './features/single-pack/container';
import MultiPacks from './features/multi-packs/container';

// -----------------------------------------------------------------------------

import Markdown from '../components/markdown';

import introMd from '../resources/demo-texts/0-intro.md';
import squareMd from '../resources/demo-texts/1-square.md';
import instanciate from '../resources/instanciate';

// -----------------------------------------------------------------------------

const $App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

// -----------------------------------------------------------------------------

const App = props => {
  const {hideCode} = props;
  console.log(`☢️ creating App | hideCode: ${hideCode}`);

  return (
    <$App>
      {!hideCode && <Markdown markdown={introMd} />}

      <SingleSquare />

      {!hideCode && <Markdown markdown={squareMd} />}

      <h2>{`one RGB`}</h2>
      <SingleRGB />

      <h2>{`one Pack`}</h2>
      <SinglePack />

      <h2>{`an array of Packs`}</h2>
      <MultiPacks />
    </$App>
  );
};

export default App;
