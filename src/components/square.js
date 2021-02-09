import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';

const $Square = styled.div`
  border-radius: 5px;
  margin: 0 2px;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  max-width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 18px;
    font-weight: bold;
  }

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

const Square = props => {
  const [nbRenders, setNbRenders] = useState(0);
  const {selected} = props;

  useEffect(() => {
    setNbRenders(nbRenders + 1);
  }, [selected]);

  return (
    <$Square {...props}>
      <p>{nbRenders}</p>
    </$Square>
  );
};

export default Square;
