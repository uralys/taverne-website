import React from 'react';
import ConnectionsContainer from './features/connections/container';
// import {createStores} from './master';
// import createGlobalContext from './global-context';

import createConnectionStore from './features/connections/store';
import {useStores} from './stores-context';

const App = props => {
  const {id: appId} = props;
  console.log(`✨ rendering App ${appId}`);
  const {createStore, withStore} = useStores();

  createStore(createConnectionStore, 'connections-store-1');
  createStore(createConnectionStore, 'connections-store-2');

  const Connections1 = withStore({
    id: 'connections-store-1',
    prop: 'connectionsStore'
  })(ConnectionsContainer);

  const Connections2 = withStore({
    id: 'connections-store-2',
    prop: 'connectionsStore'
  })(ConnectionsContainer);

  return (
    <div>
      <h1>{appId}</h1>
      <Connections1 />
      <Connections1 />
      <Connections2 />
    </div>
  );
};

export default App;
