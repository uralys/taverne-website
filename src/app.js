import React from 'react';
import ConnectionsContainer from './features/connections/container';
// import {createStores} from './master';
// import createGlobalContext from './global-context';

import {useDispatcher} from './dispatcher-context';
import createConnectionStore from './features/connections/store';

const App = () => {
  console.log('✨ rendering App');
  const {addActionsListener} = useDispatcher();

  const connectionsStore = createConnectionStore(1);
  addActionsListener(connectionsStore);

  const connectionsStore2 = createConnectionStore(2);
  addActionsListener(connectionsStore2);

  return (
    <div>
      <ConnectionsContainer connectionsStore={connectionsStore} />
      <ConnectionsContainer connectionsStore={connectionsStore} />
      <ConnectionsContainer connectionsStore={connectionsStore2} />
    </div>
  );
};

export default App;
