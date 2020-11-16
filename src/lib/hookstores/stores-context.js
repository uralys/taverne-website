import React, {createContext, useContext} from 'react';
import {useDispatcher} from './dispatcher-context';

// -----------------------------------------------------------------------------

const StoresContext = createContext();

// -----------------------------------------------------------------------------

function useStores() {
  const context = useContext(StoresContext);

  if (!context) {
    throw new Error(`[hookstores] useStores must be used within a StoresProvider`);
  }

  return context;
}

// -----------------------------------------------------------------------------

function StoresProvider(props) {
  console.log('☢️ [hookstores] creating a StoresProvider');

  // ----------------------------------------

  const {addActionsListener} = useDispatcher();
  const stores = [];

  // ----------------------------------------

  const createStores = (storeDescriptions) => {
    console.log(`☢️ [hookstores] creating stores from descriptions`, storeDescriptions);

    Object.keys(storeDescriptions).forEach((key) => {
      const {id, factory} = storeDescriptions[key];
      const store = factory(id);
      console.log(`☢️ [hookstores] registering ${id}`);
      addActionsListener(store);
      stores.push(store);
    });
  };

  // ----------------------------------------

  const withStore = (storeDescription) => {
    console.log('☢️ [hookstores] using a store', storeDescription);
    const {id, prop} = storeDescription;
    const store = stores.find((s) => s.id === id);
    console.log(prop);

    if (!store) {
      throw new Error(`❌ [hookstores] store ${id} was not registered`);
    }

    return (Component) => (props) => {
      const _props = {
        ...props,
        [prop]: store,
      };
      return <Component {..._props} />;
    };
  };

  // ----------------------------------------

  return <StoresContext.Provider value={{createStores, withStore}} {...props} />;
}

// -----------------------------------------------------------------------------

export {StoresProvider, useStores};

// -----------------------------------------------------------------------------
