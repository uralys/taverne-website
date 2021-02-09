import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import AppWithHookstores from './apps/with-hookstores/app';

// -----------------------------------------------------------------------------

const createApp = (options = {}) => {
  console.log('👨‍🚀 creating Demo', options);
  const id = options.container;

  if (!id) {
    console.error('[Demo] Requires a container.');
  }

  const container = document.getElementById(id);
  render(<AppWithHookstores id={id} />, container);
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createApp = createApp;
}

export default createApp;
