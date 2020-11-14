import React, {useContext} from 'react';
import ConnectionsContainer from './features/connections/container';
import connectionsStore from './features/connections/store';
import GlobalContext from './global-context';

const createStores = addActionsListener => {
  console.log('creating stores');

  const stores = {
    connections: connectionsStore.create()
    // devices: devicesStore.create()
  };

  addActionsListener(stores.connections);

  return stores;
};

const App = () => {
  console.log('✨ rendering App');
  const {addActionsListener} = useContext(GlobalContext);

  createStores(addActionsListener);

  return (
    <div>
      <ConnectionsContainer />
    </div>
  );
};

export default App;
