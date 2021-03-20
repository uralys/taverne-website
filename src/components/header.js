// -----------------------------------------------------------------------------

import React from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {device} from '../style/breakpoints';
import {primary} from '../style/colors';

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
  background-color: #ededed;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
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

const $Title = styled.div`
  color: ${primary};
  font-size: 19px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 48px;
    margin-right: 10px;
  }

  @media ${device.tablet} {
    font-size: 30px;
  }
`;

const $Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;

  @media ${device.tablet} {
    font-size: 17px;
  }

  a {
    color: ${primary};
    font-weight: 500;
    text-decoration: none;
    padding: 0 10px;

    &:hover {
      color: #444;
    }

    &.active {
      background-color: ${primary};
      color: #fff;
      border-radius: 5px;
      padding: 6px 10px;
    }
  }
`;

// -----------------------------------------------------------------------------

const Header = () => {
  const history = useHistory();

  const openHome = () => {
    history.push('/');
  };

  return (
    <$HeaderWrapper>
      <$Header>
        <$Title onClick={openHome}>
          <img src="./logo.png" />
          <span>La Taverne</span>
        </$Title>
        <$Links>
          <NavLink exact to="/">
            Getting started
          </NavLink>
          <NavLink exact to="doc">
            Documentation
          </NavLink>
          <NavLink exact to="demo">
            Demo
          </NavLink>
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
