import React from 'react';
import styled from 'styled-components';

import GithubCorner from './components/github-corner';
import Prism from './components/prism';
import SingleSquare from './features/single-square/container';
import SingleRGB from './features/single-rgb/container';
import SinglePack from './features/single-pack/container';
import MultiPacks from './features/multi-packs/container';

// -----------------------------------------------------------------------------

import explanations from '../docs/explanations.md';
import instanciate from '../resources/instanciate';
import oneSquareReaction from '../resources/one-square-reaction';

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

  ${props =>
    props.multiLayout &&
    `
    padding-top: 150px;
    `}
`;

const $Markup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: calc(12px + 1vmin);
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  max-width: 820px;
`;

// -----------------------------------------------------------------------------

const App = props => {
  const {id: appId, multiLayout} = props;
  console.log(`☢️ creating App ${appId}, multiLayout: ${multiLayout}`);
  const showCode = !multiLayout;

  return (
    <$App multiLayout={multiLayout}>
      {!multiLayout && <h2>La Taverne demo</h2>}

      <$Markup dangerouslySetInnerHTML={{__html: explanations.html}}></$Markup>

      <GithubCorner />
      {showCode && <p>{`Instanciate La Taverne`}</p>}
      {showCode && <Prism code={instanciate} />}

      <p>{`one Square`}</p>
      <SingleSquare />
      {showCode && <Prism code={oneSquareReaction} />}

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
