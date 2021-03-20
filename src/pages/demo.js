import React from 'react';
import styled from 'styled-components';
import App from '../app';
import Markdown from '../components/markdown';
import intermediateMd from '../resources/intermediate.md';

const $Demo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const $BothApps = styled.div`
  display: flex;
  flex-direction: row;
`;

const Demo = () => (
  <$Demo>
    <App />
    <Markdown markdown={intermediateMd} />
    <$BothApps>
      <App hideCode />
      <App hideCode />
    </$BothApps>
  </$Demo>
);

export default Demo;
