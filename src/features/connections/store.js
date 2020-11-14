import {
  ADD_CONNECTION,
  SET_CONNECTION_COLOR,
  SELECT_CONNECTION
} from '../../actions';

console.log('creating Connections store');

// -----------------------------------------------------------------------------

const initialState = {};
const handledActions = [
  ADD_CONNECTION,
  SET_CONNECTION_COLOR,
  SELECT_CONNECTION
];

// -----------------------------------------------------------------------------

const subscriptions = [];
let state = initialState;

// -----------------------------------------------------------------------------

const onDispatch = action => {
  if (handledActions.includes(action.type)) {
    console.log(`   connection store doesnt handle ${action.type}`);
    return;
  }

  switch (action.type) {
    case ADD_CONNECTION: {
      const {connection} = action;
      state = {
        ...state,
        [connection.id]: {...connection}
      };
      break;
    }
    case SET_CONNECTION_COLOR: {
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

export default {subscribe};
