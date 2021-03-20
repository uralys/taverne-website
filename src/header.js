// -----------------------------------------------------------------------------

import React from 'react';
import {Link} from 'react-router-dom';
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
  max-width: 1100px;
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
  align-items: center;

  a {
    color: rgb(231, 230, 228);
    text-decoration: none;
    padding: 0 10px;

    &:hover {
      color: #fff;
    }
  }
`;

// -----------------------------------------------------------------------------

const Header = () => {
  return (
    <$HeaderWrapper>
      <$Header>
        <$Title>La Taverne</$Title>
        <$Links>
          <Link to="docs">Docs</Link>
          <Link to="demo">Demo</Link>
          <a href="https://github.com/uralys/taverne" target="__blank">
            Github
          </a>
        </$Links>
      </$Header>
    </$HeaderWrapper>
  );
};

// -----------------------------------------------------------------------------

export default Header;
