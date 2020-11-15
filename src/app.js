import React from 'react';
import ConnectionsContainer from './features/connections/container';
// import {createStores} from './master';
// import createGlobalContext from './global-context';

import {useDispatcher} from './dispatcher-context';
import createConnectionStore from './features/connections/store';

const App = props => {
  const {id} = props;
  console.log(`✨ rendering App ${id}`);
  const {addActionsListener} = useDispatcher();

  const connectionsStore = createConnectionStore(1);
  addActionsListener(connectionsStore);

  const withConnectionsStore = Component => props => (
    <Component {...props} connectionsStore={connectionsStore} />
  );

  const connectionsStore2 = createConnectionStore(2);
  addActionsListener(connectionsStore2);

  const withConnectionsStore2 = Component => props => (
    <Component {...props} connectionsStore={connectionsStore2} />
  );

  const Connnections1 = withConnectionsStore(ConnectionsContainer);
  const Connnections2 = withConnectionsStore2(ConnectionsContainer);

  return (
    <div>
      <h1>{id}</h1>
      <Connnections1 />
      <Connnections1 />
      <Connnections2 />
    </div>
  );
};

export default App;
