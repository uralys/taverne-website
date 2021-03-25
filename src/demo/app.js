import React from 'react';
import styled from 'styled-components';

import SingleSquare from './features/single-square/container';
import SingleRGB from './features/single-rgb/container';
import SinglePack from './features/single-pack/container';
import MultiPacks from './features/multi-packs/container';

// -----------------------------------------------------------------------------

import Markdown from '../components/markdown';

// -----------------------------------------------------------------------------

const $App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

// -----------------------------------------------------------------------------

const App = props => {
  const {resources} = props;

  return (
    <$App>
      {resources && <Markdown markdown={resources.introMd} />}
      <SingleSquare />
      {resources && <Markdown markdown={resources.squareDetailsAndRGBMd} />}
      <SingleRGB />
      {resources && <Markdown markdown={resources.packMd} />}
      <SinglePack />
      {resources && <Markdown markdown={resources.packsMd} />}
      <MultiPacks />
    </$App>
  );
};

export default App;
