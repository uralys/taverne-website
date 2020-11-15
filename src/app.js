import React from 'react';
import ConnectionsContainer from './features/connections/container';
// import {createStores} from './master';
// import createGlobalContext from './global-context';

import {useDispatcher} from './dispatcher-context';
import createConnectionStore from './features/connections/store';

const App = () => {
  console.log('✨ rendering App');
  const {addActionsListener} = useDispatcher();

  const connectionsStore = createConnectionStore();
  addActionsListener(connectionsStore);

  return (
    <div>
      <ConnectionsContainer connectionsStore={connectionsStore} />
    </div>
  );
};

export default App;
