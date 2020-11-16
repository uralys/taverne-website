import React, {createContext, useContext} from 'react';

// -----------------------------------------------------------------------------

const DispatcherContext = createContext();

// -----------------------------------------------------------------------------

function useDispatcher() {
  const context = useContext(DispatcherContext);

  if (!context) {
    throw new Error(`[hookstores] useDispatcher must be used within a DispatcherProvider`);
  }

  return context;
}

// -----------------------------------------------------------------------------

function DispatcherProvider(props) {
  const listeners = [];

  const addActionsListener = (listener) => listeners.push(listener);

  const dispatch = (action) => {
    console.log('📡 [hookstores] dispatching', action);
    listeners.forEach((listener) => {
      listener.onDispatch(action);
    });
  };

  const value = {addActionsListener, dispatch};

  console.log('☢️ [hookstores] creating a DispatcherProvider');
  return <DispatcherContext.Provider value={value} {...props} />;
}

// -----------------------------------------------------------------------------

export {DispatcherProvider, useDispatcher};

// -----------------------------------------------------------------------------
