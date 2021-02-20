import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import {Hookstores} from 'hookstores';

// -----------------------------------------------------------------------------

import App from './app';
import singleSquareStore from './features/single-square/store';
import singleRGBStore from './features/single-rgb/store';
import singlePackStore from './features/single-pack/store';
import multiPacksStore from './features/multi-packs/store';

// -----------------------------------------------------------------------------

const stores = {
  singlePackStore,
  singleRGBStore,
  singleSquareStore,
  multiPacksStore
};

// -----------------------------------------------------------------------------

const createApp = ({id}) => {
  console.log('👨‍🚀 creating demo using Hookstores');
  const container = document.getElementById(id);

  render(
    <Hookstores stores={stores} debug>
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
