import React from 'react';
import storeDescriptions from './stores-descriptions';
import ConnectionsContainer from './features/connections/container';
import Square from './components/square';
import styled from 'styled-components';
import RGB from './components/rgb';
import Line from './components/line';
// import {createStores} from './lib/hookstores/stores-context';

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

// createStores(storeDescriptions);

// -----------------------------------------------------------------------------

const App = props => {
  const {id: appId} = props;
  console.log(`☢️ creating App ${appId}`);

  return (
    <$App>
      <h2>Hookstores demo</h2>
      <p>{`That's a Square`}</p>
      <Square color="#75AF3B" />
      <p>{`That's an RGB`}</p>
      <RGB />
      <p>{`That's a Line`}</p>
      <Line />
      <p>{`That's an array of Lines`}</p>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </$App>
  );
};

export default App;
