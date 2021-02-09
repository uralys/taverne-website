import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import App from './app';

// -----------------------------------------------------------------------------

const createApp = (options = {}) => {
  console.log('👨‍🚀 creating Demo', options);
  const id = options.container;

  if (!id) {
    console.error('[Demo] Requires a container.');
  }

  const container = document.getElementById(id);
  render(<App id={id} />, container);
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createApp = createApp;
}

export default createApp;
