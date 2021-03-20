import React from 'react';

import explanations from '../resources/explanations.md';
import Markdown from '../components/markdown';

const Home = () => {
  return (
    <>
      <p>hero</p>
      <Markdown markdown={explanations} />;
    </>
  );
};

export default Home;
