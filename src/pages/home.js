import React from 'react';

import Markdown from '../components/markdown';
import Hero from '../components/hero';
import sampleMd from '../resources/sample.md';
import pitchMd from '../resources/pitch.md';

const Home = () => {
  return (
    <>
      <Hero />
      <Markdown markdown={sampleMd} />
      <Markdown markdown={pitchMd} />
    </>
  );
};

export default Home;
