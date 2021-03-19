import React from 'react';
import styled from 'styled-components';

import explanations from '../../resources/explanations.md';

const $Markup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: calc(12px + 1vmin);
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  max-width: 620px;
`;

const Doc = () => (
  <>
    {/* <img src="https://raw.githubusercontent.com/uralys/taverne/master/docs/taverne.png"></img> */}
    <$Markup dangerouslySetInnerHTML={{__html: explanations.html}}></$Markup>
  </>
);

export default Doc;
