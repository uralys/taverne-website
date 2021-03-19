// -----------------------------------------------------------------------------

import React from 'react';
import {useHistory} from 'react-router';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

const $HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #571d91;
  color: rgb(231, 230, 228);
`;

const $Header = styled.header`
  max-width: 1200px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  position: relative;
  text-align: left;
  align-items: center;
`;

const $Title = styled.p`
  font-size: 30px;
  margin: 0;
  padding: 0;
`;

const $Links = styled.div`
  display: flex;
  flex-direction: row;

  p {
    padding: 0 20px;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
`;

// -----------------------------------------------------------------------------

const Header = () => {
  const history = useHistory();

  const openDocs = () => {
    history.push('/docs');
  };

  const openDemo = () => {
    history.push('/demo');
  };

  const openMulti = () => {
    history.push('/multi');
  };

  return (
    <$HeaderWrapper>
      <$Header>
        <$Title>La Taverne</$Title>
        <$Links>
          <p onClick={openDocs}>docs</p>
          <p onClick={openDemo}>demo</p>
          <p onClick={openMulti}>multi</p>
        </$Links>
      </$Header>
    </$HeaderWrapper>
  );
};

// -----------------------------------------------------------------------------

export default Header;
