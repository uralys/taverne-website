console.log('creating Connections store');

const initialState = {};

// -----------------------------------------------------------------------------

const ACTIONS = {
  ADD_CONNECTION: 'addConnection',
  SET_COLOR: 'setColor'
};

// -----------------------------------------------------------------------------

const subscriptions = [];
let state = initialState;

// -----------------------------------------------------------------------------

const dispatch = action => {
  switch (action.type) {
    case ACTIONS.ADD_CONNECTION: {
      const {connection} = action;
      state = {
        ...state,
        [connection.id]: {...connection}
      };
      break;
    }
    case ACTIONS.SET_COLOR: {
      const {connectionId, color} = action;
      const currentConnection = state[connectionId];
      state = {
        ...state,
        [connectionId]: {
          ...currentConnection,
          color
        }
      };
      break;
    }
    default:
  }

  subscriptions.forEach(subscription => {
    subscription(state, action);
  });
};

// -----------------------------------------------------------------------------

const subscribe = subscription => subscriptions.push(subscription);

// -----------------------------------------------------------------------------

export default {dispatch, subscribe};
