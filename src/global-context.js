import React from 'react';

// -----------------------------------------------------------------------------

const listeners = [];

// -----------------------------------------------------------------------------

const addActionsListener = listener => listeners.push(listener);

const dispatch = action => {
  console.log('dispatching', action);
  listeners.forEach(listener => {
    listener.onDispatch(action);
  });
};

// -----------------------------------------------------------------------------

const GlobalContext = React.createContext({addActionsListener, dispatch});

// -----------------------------------------------------------------------------

export default GlobalContext;
