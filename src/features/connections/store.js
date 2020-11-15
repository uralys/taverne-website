import {
  ADD_CONNECTION,
  LOAD_CONNECTIONS,
  SET_CONNECTION_COLOR,
  SELECT_CONNECTION
} from '../../actions';
import generateConfig from '../../generate-config';

// -----------------------------------------------------------------------------

const initialState = {};

const handledActions = [
  ADD_CONNECTION,
  LOAD_CONNECTIONS,
  SET_CONNECTION_COLOR,
  SELECT_CONNECTION
];

// -----------------------------------------------------------------------------

const createReducer = (getState, subscriptions) => action => {
  if (!handledActions.includes(action.type)) {
    console.log(`   connection store doesn't handle ${action.type}`);
    return;
  }

  let newState;
  const state = getState();
  console.log('reducing', action, state);

  switch (action.type) {
    case LOAD_CONNECTIONS: {
      const connections = generateConfig().connections.reduce(
        (acc, _connection) => {
          const {devices, ...content} = _connection;
          return {
            ...acc,
            [_connection.id]: content
          };
        },
        {}
      );

      newState = {...state, connections};
      break;
    }
    case ADD_CONNECTION: {
      const {connection} = action;
      newState = {
        ...state,
        connections: {
          ...state.connections,
          [connection.id]: {...connection}
        }
      };
      break;
    }
    case SET_CONNECTION_COLOR: {
      const {connectionId, color} = action;
      const currentConnection = state.connections[connectionId];

      newState = {
        ...state,
        connections: {
          ...state.connections,
          [connectionId]: {
            ...currentConnection,
            color
          }
        }
      };
      break;
    }
    case SELECT_CONNECTION: {
      const {connectionId} = action;
      const currentConnection = state.connections[connectionId];

      console.log({state, connectionId, currentConnection});
      newState = {
        ...state,
        connections: {
          ...state.connections,
          [connectionId]: {
            ...currentConnection,
            selected: !currentConnection.selected
          }
        }
      };
      break;
    }
    default:
      newState = {...state};
  }

  subscriptions.forEach(subscription => {
    subscription(newState, action);
  });

  return newState;
};

// -----------------------------------------------------------------------------

const createConnectionStore = (id = 'default') => {
  console.log('🏗️  creating Connections store', id);
  const subscriptions = [];
  let state = initialState;

  const reduceAction = createReducer(() => state, subscriptions);

  const store = {
    id: `connections-store-${id}`,
    onDispatch: action => {
      if (action.scope && action.scope !== store.id) {
        console.log(`${store.id} out of scope`);
        return;
      }
      console.log(`${store.id} dealing with ondispatch`, action, state);
      state = reduceAction(action);
    },
    subscribe: subscription => subscriptions.push(subscription)
  };

  return store;
};

// -----------------------------------------------------------------------------

export default createConnectionStore;
