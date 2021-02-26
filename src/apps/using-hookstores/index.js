import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import {createStores, Hookstores} from 'hookstores';
import {devtools} from 'hookstores/dist/esm/middlewares';

// -----------------------------------------------------------------------------

import App from './app';
import singleSquareStore from './features/single-square/store';
import singleRGBStore from './features/single-rgb/store';
import singlePackStore from './features/single-pack/store';
import multiPacksStore from './features/multi-packs/store';

// -----------------------------------------------------------------------------

const createApp = ({id}) => {
  console.log('👨‍🚀 creating demo using Hookstores');
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
    <Hookstores dispatch={dispatch} stores={stores}>
      <App id={id} />
    </Hookstores>,
    container
  );
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createApp = createApp;
}

export default createApp;
