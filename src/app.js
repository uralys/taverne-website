import React from 'react';
import storeDescriptions from './stores-descriptions';
import ConnectionsContainer from './features/connections/container';
import {useStores} from './lib/hookstores/stores-context';

// -----------------------------------------------------------------------------

const App = props => {
  const {id: appId} = props;
  const {createStores, withStore} = useStores();

  console.log(`☢️ creating App ${appId}`);
  createStores(storeDescriptions);

  const {connectionsStore1, connectionsStore2} = storeDescriptions;

  const Connections1 = withStore(connectionsStore1)(ConnectionsContainer);
  const Connections2 = withStore(connectionsStore2)(ConnectionsContainer);

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
