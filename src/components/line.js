import React from 'react';
import styled from 'styled-components';
import RGB from './rgb';

const $Line = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Line = props => {
  return (
    <$Line>
      <RGB />
      <RGB />
      <RGB />
      <RGB />
      <RGB />
    </$Line>
  );
};

export default Line;
