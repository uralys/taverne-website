import {
  ADD_CONNECTION,
  LOAD_CONNECTIONS,
  SET_CONNECTION_COLOR,
  SELECT_CONNECTION
} from '../../actions';

// -----------------------------------------------------------------------------

const initialState = {};
const subscriptions = [];

const handledActions = [
  ADD_CONNECTION,
  LOAD_CONNECTIONS,
  SET_CONNECTION_COLOR,
  SELECT_CONNECTION
];

let state = initialState;

// -----------------------------------------------------------------------------

const onDispatch = action => {
  if (!handledActions.includes(action.type)) {
    console.log(`   connection store doesn't handle ${action.type}`);
    return;
  }

  switch (action.type) {
    case LOAD_CONNECTIONS: {
      const connections = CONFIG.connections.reduce((acc, _connection) => {
        const {devices, ...content} = _connection;
        return {
          ...acc,
          [_connection.id]: content
        };
      }, {});

      state = {...state, connections};
      break;
    }
    case ADD_CONNECTION: {
      const {connection} = action;
      state = {
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

      state = {
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
      state = {
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
      return state;
  }

  subscriptions.forEach(subscription => {
    subscription(state, action);
  });
};

// -----------------------------------------------------------------------------

const create = () => {
  console.log('  creating Connections store');

  const store = {
    name: 'connections-store',
    onDispatch
  };

  return store;
};

// -----------------------------------------------------------------------------

const subscribe = subscription => subscriptions.push(subscription);

// -----------------------------------------------------------------------------

export default {create, subscribe};
