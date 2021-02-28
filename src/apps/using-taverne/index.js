import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import createStores from 'taverne';
import {Taverne} from 'taverne/hooks';
import {devtools} from 'taverne/middlewares';

// -----------------------------------------------------------------------------

import App from './app';
import singleSquareStore from './features/single-square/store';
import singleRGBStore from './features/single-rgb/store';
import singlePackStore from './features/single-pack/store';
import multiPacksStore from './features/multi-packs/store';

// -----------------------------------------------------------------------------

const createApp = ({id}) => {
  console.log('👨‍🚀 creating demo using La Taverne');
  const container = document.getElementById(id);

  const {dispatch, stores} = createStores(
    {
      singlePackStore,
      singleRGBStore,
      singleSquareStore,
      multiPacksStore
    },
    [devtools]
  );

  render(
    <Taverne dispatch={dispatch} stores={stores}>
      <App id={id} />
    </Taverne>,
    container
  );
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createApp = createApp;
}

export default createApp;
