import React from 'react';
import styled, {css} from 'styled-components';

const $Square = styled.div`
  border-radius: 5px;
  margin: 0 2px;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  max-width: 50px;
  height: 50px;

  ${props =>
    css`
      background-color: ${props.color};
    `}

  ${props =>
    props.selected &&
    css`
      border: 2px solid white;
    `}

  transition: background-color 0.5s, border 0.2s;
`;

const Square = props => <$Square {...props} />;

export default Square;
