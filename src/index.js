import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

// -----------------------------------------------------------------------------

import Routes from './routes';

// -----------------------------------------------------------------------------

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #282c34;
    color: #ededed;
  }

  #root pre  {
    font-size: calc(7px + 1vmin);
  }
`;

// -----------------------------------------------------------------------------

const createSite = ({id}) => {
  const container = document.getElementById(id);

  render(
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>,
    container
  );
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createSite = createSite;
}
