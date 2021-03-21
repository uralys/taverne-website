import React from 'react';
import styled from 'styled-components';
import App from '../app';
import Markdown from '../components/markdown';
import scopesMd from '../resources/demo-rgb/4-scopes.md';
import {device} from '../style/breakpoints';

const $BothApps = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const DemoRGB = () => (
  <>
    <App />
    <Markdown markdown={scopesMd} />
    <$BothApps>
      <App hideCode />
      <App hideCode />
    </$BothApps>
  </>
);

export default DemoRGB;
