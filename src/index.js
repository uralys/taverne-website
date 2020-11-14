import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import setup from './setup';
import App from './app';

// -----------------------------------------------------------------------------

setup();

// -----------------------------------------------------------------------------

const createApp = (options = {}) => {
  console.log('👨‍🚀 creating App', options);
  if (!options.container) {
    console.error('[App] Requires a container.');
  }

  const container = document.getElementById(options.container);
  render(<App />, container);
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createApp = createApp;
}

export default createApp;
