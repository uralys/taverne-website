import React, {createContext, useContext} from 'react';
import {useDispatcher} from './dispatcher-context';

// -----------------------------------------------------------------------------

const StoresContext = createContext();

// -----------------------------------------------------------------------------

function useStores() {
  const context = useContext(StoresContext);

  if (!context) {
    throw new Error(`useStores must be used within a StoresProvider`);
  }

  return context;
}

// -----------------------------------------------------------------------------

function StoresProvider(props) {
  const {addActionsListener} = useDispatcher();
  const stores = [];

  // -----------------------------------------------------------------------------

  const createStore = (factory, id) => {
    const store = factory(id);
    addActionsListener(store);
    stores.push(store);
  };

  // -----------------------------------------------------------------------------

  const withStore = options => {
    console.log('☢️ using a store', options);
    const {id, prop} = options;
    const store = stores.find(s => s.id === id);

    return Component => props => {
      const _props = {
        ...props,
        [prop]: store
      };
      return <Component {..._props} />;
    };
  };

  // -----------------------------------------------------------------------------

  console.log('☢️ creating a StoresProvider');
  return <StoresContext.Provider value={{createStore, withStore}} {...props} />;
}

// -----------------------------------------------------------------------------

export {StoresProvider, useStores};

// -----------------------------------------------------------------------------
