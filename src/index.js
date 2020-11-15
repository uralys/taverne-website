import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import App from './app';
import {DispatcherProvider} from './dispatcher-context';
// import App from './tuto/app-test';

// -----------------------------------------------------------------------------

const createApp = (options = {}) => {
  console.log('👨‍🚀 creating App', options);
  const id = options.container;

  if (!id) {
    console.error('[App] Requires a container.');
  }

  const container = document.getElementById(id);
  render(
    <DispatcherProvider>
      <App id={id} />
    </DispatcherProvider>,
    container
  );
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createApp = createApp;
}

export default createApp;
