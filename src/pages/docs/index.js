import React from 'react';

import explanations from '../../resources/explanations.md';
import Markdown from '../../components/markdown';

const Doc = () => {
  return <Markdown markdown={explanations} />;
};

export default Doc;
