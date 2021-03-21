import React from 'react';

import gettingStarted from '../../resources/getting-started.md';
import Markdown from '../../components/markdown';

const Doc = () => {
  return <Markdown markdown={gettingStarted} />;
};

export default Doc;
