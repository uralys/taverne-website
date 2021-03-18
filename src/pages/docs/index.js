import React from 'react';
import styled from 'styled-components';

import explanations from '../../../docs/explanations.md';

const $Markup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: calc(12px + 1vmin);
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  max-width: 620px;

  pre {
    font-size: calc(7px + 1vmin);
  }
`;

const Doc = () => (
  <pre>
    <$Markup dangerouslySetInnerHTML={{__html: explanations.html}}></$Markup>
  </pre>
);

export default Doc;
