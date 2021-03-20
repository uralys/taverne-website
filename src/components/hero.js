import React from 'react';
import styled from 'styled-components';
import {primary} from '../style/colors';

const $Hero = styled.div`
  width: 100%;
  height: 340px;
  background-color: ${primary};
`;

const Hero = () => {
  return <$Hero></$Hero>;
};

export default Hero;
