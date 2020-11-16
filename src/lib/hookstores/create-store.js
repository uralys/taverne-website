// -----------------------------------------------------------------------------

const createStore = (id = 'default', initialState, createReducer) => {
  console.log('☢️ [hookstores] creating store', id);
  const subscriptions = [];
  let state = initialState;

  const reduceAction = createReducer(() => state, subscriptions);

  const store = {
    id,
    onDispatch: action => {
      if (action.scope && action.scope !== store.id) {
        console.log(`🏪 [hookstores] ${store.id} out of scope`);
        return;
      }
      console.log(`🏪 [hookstores] ${store.id} reduceAction`, action.type);
      state = reduceAction(action);
    },
    subscribe: subscription => subscriptions.push(subscription)
  };

  return store;
};

// -----------------------------------------------------------------------------

export default createStore;
