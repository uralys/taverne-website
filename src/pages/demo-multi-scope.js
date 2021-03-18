import React from 'react';
import styled from 'styled-components';
import App from '../app';

const $BothApps = styled.div`
  display: flex;
  flex-direction: row;
`;

const DemoMultiScope = () => (
  <$BothApps>
    <App multiLayout />
    <App multiLayout />
  </$BothApps>
);

export default DemoMultiScope;
