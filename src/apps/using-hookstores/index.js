import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import {Hookstores} from 'hookstores';

// -----------------------------------------------------------------------------

import App from './app';
import singleSquareStore from './features/single-square/store-description';
import singleRGBStore from './features/single-rgb/store-description';
import singlePackStore from './features/single-pack/store-description';
import multiPacksStore from './features/multi-packs/store-description';

// -----------------------------------------------------------------------------

const descriptions = {
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
    <Hookstores descriptions={descriptions}>
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
