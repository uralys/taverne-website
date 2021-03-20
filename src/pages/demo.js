import React from 'react';
import styled from 'styled-components';
import App from '../app';
import Markdown from '../components/markdown';
import scopesMd from '../resources/demo-texts/4-scopes.md';
import {device} from '../style/breakpoints';

const $Demo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const $BothApps = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Demo = () => (
  <$Demo>
    <App />
    <Markdown markdown={scopesMd} />
    <$BothApps>
      <App hideCode />
      <App hideCode />
    </$BothApps>
  </$Demo>
);

export default Demo;
