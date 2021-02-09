import React from 'react';
import styled from 'styled-components';
import GithubCorner from '../../components/github-corner';
import SingleSquare from './features/single-square/container';
import RGB from '../../components/rgb';
import Line from '../../components/line';

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
      <h2>Hookstores demo</h2>
      <p>{`a Square`}</p>
      <SingleSquare />

      <p>{`an RGB`}</p>
      <RGB />
      <p>{`a Line`}</p>
      <Line />
      <p>{`an array of Lines`}</p>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </$App>
  );
};

export default App;
