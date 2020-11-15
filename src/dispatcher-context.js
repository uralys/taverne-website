import React, {createContext, useContext} from 'react';

const DispatcherContext = createContext();

function useDispatcher() {
  const context = useContext(DispatcherContext);

  if (!context) {
    throw new Error(`useDispatcher must be used within a DispatcherProvider`);
  }

  return context;
}

function DispatcherProvider(props) {
  const listeners = [];

  const addActionsListener = listener => listeners.push(listener);

  const dispatch = action => {
    console.log('📡  dispatching', action);
    listeners.forEach(listener => {
      listener.onDispatch(action);
    });
  };

  // const value = useMemo(() => [addActionsListener, dispatch]);
  const value = {addActionsListener, dispatch};

  console.log('🏗️ creating a DispatcherProvider');
  return <DispatcherContext.Provider value={value} {...props} />;
}

// -----------------------------------------------------------------------------

export {DispatcherProvider, useDispatcher};

// -----------------------------------------------------------------------------

// const createGlobalContext = () => {
//   const listeners = [];

//   const addActionsListener = listener => listeners.push(listener);

//   const dispatch = action => {
//     console.log('dispatching', action);
//     listeners.forEach(listener => {
//       listener.onDispatch(action);
//     });
//   };

//   // const context = React.createContext({addActionsListener, dispatch});
//   const context = {addActionsListener, dispatch};
//   return context;
// };

// // -----------------------------------------------------------------------------

// export default createGlobalContext;
