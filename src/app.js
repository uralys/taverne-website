import React from 'react';
import storeDescriptions from './stores-descriptions';
import ConnectionsContainer from './features/connections/container';
import Square from './components/square';
import styled from 'styled-components';
// import {createStores} from './lib/hookstores/stores-context';

// -----------------------------------------------------------------------------

const $App = styled.div`
  text-align: center;
  background-color: #282c34;
  color: #ededed;
  min-height: 100vh;
  justify-content: flex-start;
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
      <h2>Demo hookstores</h2>
      <Square color={'#7FFF00'} selected />
      <Square color={'#CE3B1E'} />
      <Square color={'#4C7FB5'} />
    </$App>
  );
};

export default App;
