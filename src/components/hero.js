import React from 'react';
import styled from 'styled-components';
import {primary} from '../style/colors';

const $Hero = styled.div`
  width: 100%;
  height: 340px;
  background-color: ${primary};
  color: #ededed;
`;

const Hero = () => {
  return (
    <$Hero>
      <h1>La Taverne</h1>
    </$Hero>
  );
};

export default Hero;
