import connectionsStore from './features/connections/store';

// -----------------------------------------------------------------------------

console.log('🧑‍🚀 preparing Master');
const master = {
  listeners: [],
  stores: []
};

// -----------------------------------------------------------------------------

const addActionsListener = listener => master.listeners.push(listener);

// -----------------------------------------------------------------------------

const createStore = factory => {
  const store = factory.create();
  addActionsListener(store);
  master.stores.push(store);
};

const createStores = addActionsListener => {
  console.log('creating stores');
  createStore(connectionsStore);
};

// -----------------------------------------------------------------------------

const dispatch = action => {
  console.log('dispatching', action);
  master.listeners.forEach(listener => {
    listener.onDispatch(action);
  });
};

// -----------------------------------------------------------------------------

export {addActionsListener, dispatch, createStores};
