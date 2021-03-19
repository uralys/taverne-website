import React, {useEffect} from 'react';
import styled from 'styled-components';
import PrismJS from 'prismjs';
import marked from 'marked';
import {device} from '../style/breakpoints';

const $Markup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 30px;
  box-sizing: border-box;
  width: 100%;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const Markdown = ({markdown}) => {
  const getMarkdownText = () => ({__html: marked(markdown)});

  useEffect(() => {
    PrismJS.highlightAll();
  }, []);

  return <$Markup dangerouslySetInnerHTML={getMarkdownText()}></$Markup>;
};

export default Markdown;
