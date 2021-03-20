import React from 'react';
import styled from 'styled-components';

import SingleSquare from './features/single-square/container';
import SingleRGB from './features/single-rgb/container';
import SinglePack from './features/single-pack/container';
import MultiPacks from './features/multi-packs/container';

// -----------------------------------------------------------------------------

import Markdown from '../components/markdown';

import introMd from '../resources/demo-texts/0-intro.md';
import squareDetailsAndRGBMd from '../resources/demo-texts/1-details-and-rgb.md';
import packMd from '../resources/demo-texts/2-pack.md';
import packsMd from '../resources/demo-texts/3-array-of-packs.md';

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
  const {hideCode} = props;

  return (
    <$App>
      {!hideCode && <Markdown markdown={introMd} />}
      <SingleSquare />
      {!hideCode && <Markdown markdown={squareDetailsAndRGBMd} />}
      <SingleRGB />
      {!hideCode && <Markdown markdown={packMd} />}
      <SinglePack />
      {!hideCode && <Markdown markdown={packsMd} />}
      <MultiPacks />
    </$App>
  );
};

export default App;
