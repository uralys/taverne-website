import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import {createStores} from 'hookstores';

// -----------------------------------------------------------------------------

import App from './app';
import singleSquareStore from './features/single-square/store-description';

// -----------------------------------------------------------------------------

const createApp = (options = {}) => {
  console.log('👨‍🚀 creating Demo', options);
  const id = options.container;

  if (!id) {
    console.error('[Demo] Requires a container.');
  }

  /* first thing befor to create the React App is to create the stores */
  createStores({singleSquareStore});

  /* Now we can use the hooks everywhere, let's mount the React App 🚀 */
  const container = document.getElementById(id);
  render(<App id={id} />, container);
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createApp = createApp;
}

export default createApp;
