const initialState = {};

// -----------------------------------------------------------------------------

const ACTIONS = {
  ADD_DEVICE: 'addDevice',
  SET_COLOR: 'setColor'
};

// -----------------------------------------------------------------------------
// const addConnection = connection => {
//   state
// }

// const listeners;

// -----------------------------------------------------------------------------

const listeners = [];
let state = initialState;

// -----------------------------------------------------------------------------

const dispatch = action => {
  switch (action.type) {
    case ACTIONS.ADD_DEVICE: {
      const {device} = action;
      state = {
        ...state,
        [device.id]: {...device}
      };
      break;
    }
    case ACTIONS.SET_COLOR: {
      const {deviceId, color} = action;
      const currentDevice = state[deviceId];
      state = {
        ...state,
        [deviceId]: {
          ...currentDevice,
          color
        }
      };
      break;
    }
    default:
  }

  listeners.forEach(listener => {
    listener.onDispatch(state, action);
  });
};

// -----------------------------------------------------------------------------

const addListener = listener => listeners.push(listener);

// -----------------------------------------------------------------------------

export {dispatch, addListener};
