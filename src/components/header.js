// -----------------------------------------------------------------------------

import React, {useEffect, useState} from 'react';
import {NavLink, Redirect, useHistory, useLocation} from 'react-router-dom';
import styled, {css} from 'styled-components';
import {DOC_PATHS} from '../pages/docs';
import {device} from '../style/breakpoints';
import {primary} from '../style/colors';

import {PATHS} from '../views';

// -----------------------------------------------------------------------------

const $HeaderWrapper = styled.nav`
  position: sticky;
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

const $Header = styled.div`
  max-width: 1300px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  position: relative;
  text-align: left;
  align-items: center;

  @media ${device.tablet} {
    font-size: 30px;
  }
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

const $NavLink = styled(NavLink)`
  &&& {
    ${props =>
      props.active &&
      css`
        background-color: ${primary};
        color: #fff;
        border-radius: 5px;
        padding: 6px 10px;
      `}
  }
`;

// -----------------------------------------------------------------------------

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [docActive, setDocActive] = useState(false);

  useEffect(() => {
    const onDoc = location.pathname.indexOf('/documentation/') !== -1;
    setDocActive(onDoc);
  }, [location]);

  const openIntro = () => {
    if (history.location.pathname !== PATHS.intro) {
      history.push(PATHS.intro);
    }
  };

  return (
    <$HeaderWrapper>
      <$Header>
        <$Title onClick={openIntro}>
          <img src="/logo.png" />
          <span>La Taverne</span>
        </$Title>
        <$Links>
          <NavLink exact to={PATHS.intro}>
            Intro
          </NavLink>
          <NavLink exact to={PATHS.demo}>
            Demo
          </NavLink>
          <$NavLink to={DOC_PATHS.gettingStarted} active={+docActive}>
            Documentation
          </$NavLink>
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
