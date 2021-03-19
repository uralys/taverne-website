import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import {useHistory, BrowserRouter as Router} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

// -----------------------------------------------------------------------------

import GithubCorner from './components/github-corner';
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

const Menu = () => {
  const history = useHistory();

  const openDocs = () => {
    history.push('/docs');
  };

  const openDemo = () => {
    history.push('/demo');
  };

  const openMulti = () => {
    history.push('/multi');
  };

  return (
    <>
      <p onClick={openDocs}>docs</p>
      <p onClick={openDemo}>demo</p>
      <p onClick={openMulti}>multi</p>
    </>
  );
};

// -----------------------------------------------------------------------------

const createSite = ({id}) => {
  const container = document.getElementById(id);

  render(
    <Router>
      <GithubCorner />
      <GlobalStyle />
      <Menu />
      <Routes />
    </Router>,
    container
  );
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createSite = createSite;
}
