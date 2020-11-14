import React from 'react';

// -----------------------------------------------------------------------------

const listeners = [];

// -----------------------------------------------------------------------------

const listenToActions = listener => listeners.push(listener);

const dispatch = action => {
  console.log('dispatching', action);
  listeners.forEach(listener => {
    listener.onDispatch(action);
  });
};

// -----------------------------------------------------------------------------

const GlobalContext = React.createContext({listenToActions, dispatch});

// -----------------------------------------------------------------------------

export default GlobalContext;
