import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';

// -----------------------------------------------------------------------------

import Navigation from './navigation';
import Views from './views';
import Header from './components/header';
import {primary} from './style/colors';
import ScrollToTop from './components/scroll-to-top';

// -----------------------------------------------------------------------------

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #ededed;
    font-size: 17px;
    font-family: Poppins;
  }

  a {
    color: ${primary};
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: #444;
    }
  }
`;

const $MainWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

// -----------------------------------------------------------------------------

const createSite = ({id}) => {
  const container = document.getElementById(id);

  render(
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <$MainWrapper>
        {/* <Navigation /> */}
        <Views />
      </$MainWrapper>
    </Router>,
    container
  );
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createSite = createSite;
}
