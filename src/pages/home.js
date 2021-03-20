import React from 'react';

import Markdown from '../components/markdown';
import Hero from '../components/hero';
import sampleMd from '../resources/sample.md';
import pitchMd from '../resources/pitch.md';
import styled from 'styled-components';

const $Home = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <$Home>
      <Hero />
      <Markdown markdown={sampleMd} />
      <Markdown markdown={pitchMd} />
    </$Home>
  );
};

export default Home;
