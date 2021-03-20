import React, {useEffect} from 'react';
import styled from 'styled-components';
import PrismJS from 'prismjs';
import marked from 'marked';
import {device} from '../style/breakpoints';

const $Markup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  padding: 30px;
  box-sizing: border-box;
  width: 100%;

  @media ${device.tablet} {
    font-size: 18px;
  }

  p code,
  li code {
    background-color: #b2bfc2;
    padding: 5px;
    border-radius: 5px;
  }

  pre {
    max-width: 100%;
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
