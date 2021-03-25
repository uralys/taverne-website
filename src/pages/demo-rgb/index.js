import React from 'react';
import styled from 'styled-components';
import Demo from '../../demo';
import Markdown from '../../components/markdown';
import {device} from '../../style/breakpoints';

import introMd from './0-intro.md';
import squareDetailsAndRGBMd from './1-details-and-rgb.md';
import packMd from './2-pack.md';
import scopesMd from './4-scopes.md';
import packsMd from './3-array-of-packs.md';

const resources = {
  introMd,
  squareDetailsAndRGBMd,
  packMd,
  packsMd
};

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
    <Demo resources={resources} />
    <Markdown markdown={scopesMd} />
    <$BothApps>
      <Demo />
      <Demo />
    </$BothApps>
  </>
);

export default DemoRGB;
