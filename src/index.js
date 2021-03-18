import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import createLaTaverne from 'taverne';
import {Taverne} from 'taverne/hooks';
import {devtools} from 'taverne/middlewares';
import {createGlobalStyle} from 'styled-components';

// -----------------------------------------------------------------------------

// import App from './app';
import singleSquare from './features/single-square/reducer';
import singleRGB from './features/single-rgb/reducer';
import singlePack from './features/single-pack/reducer';
import multiPacks from './features/multi-packs/reducer';
import Routes from './routes';

// -----------------------------------------------------------------------------

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  #root pre  {
    font-size: calc(7px + 1vmin);
  }
`;

// -----------------------------------------------------------------------------

const createApp = ({id, multiLayout}) => {
  console.log('👨‍🚀 creating demo using La Taverne');
  const container = document.getElementById(id);

  const {dispatch, store} = createLaTaverne(
    {
      singlePack,
      singleRGB,
      singleSquare,
      multiPacks
    },
    [devtools]
  );

  render(
    <Taverne dispatch={dispatch} store={store}>
      <Router>
        <GlobalStyle />
        <Routes />
        {/* <App id={id} multiLayout={multiLayout} /> */}
      </Router>
    </Taverne>,
    container
  );
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createApp = createApp;
}
