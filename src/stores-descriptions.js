// -----------------------------------------------------------------------------

import createConnectionStore, {
  name as connectionsStoreName
} from './features/connections/store';

// -----------------------------------------------------------------------------

const storeDescriptions = {
  connectionsStore1: {
    id: 'connections-1',
    prop: connectionsStoreName,
    factory: createConnectionStore
  },
  connectionsStore2: {
    id: 'connections-2',
    prop: connectionsStoreName,
    factory: createConnectionStore
  }
};

// -----------------------------------------------------------------------------

export default storeDescriptions;
