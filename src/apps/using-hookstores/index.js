import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import {createStores} from 'hookstores';

// -----------------------------------------------------------------------------

import App from './app';
import singleSquareStore from './features/single-square/store-description';
import singleRGBStore from './features/single-rgb/store-description';

// -----------------------------------------------------------------------------

const createApp = ({id}) => {
  console.log('👨‍🚀 creating demo using Hookstores');

  /* First thing before to render the React App: create the stores! */
  createStores({singleSquareStore, singleRGBStore});

  /* Now, we can use these hooks/stores everywhere, let's mount the React App 🚀 */
  const container = document.getElementById(id);
  render(<App id={id} />, container);
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createApp = createApp;
}

export default createApp;
