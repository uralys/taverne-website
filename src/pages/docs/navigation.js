// -----------------------------------------------------------------------------

import React from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import styled, {css} from 'styled-components';

// -----------------------------------------------------------------------------

import {device} from '../../style/breakpoints';
import {primary} from '../../style/colors';
import Markdown from '../../components/markdown';

// -----------------------------------------------------------------------------

import {DOC_PATHS} from '.';
import gettingStartedTOC from '../../../tocs/getting-started.toc.md';
import reactTOC from '../../../tocs/react.toc.md';

// -----------------------------------------------------------------------------

const $Navigation = styled.div`
  flex: 0 0 0px;
  height: calc(100vh - 50px);
  position: sticky;
  overflow-y: auto;
  top: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px 0px;

  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex: 0 0 240px;
    padding-top: 80px;
    padding-right: 10px;
    box-sizing: border-box;
  }

  a {
    color: rgb(26, 26, 26);
    font-weight: 200;
    font-style: normal;

    span {
      margin-top: 15px;
      display: block;
      padding-left: 6px;
    }

    &.active {
      span {
        border-left: 2px solid ${primary};
      }

      font-weight: 500;
      color: ${primary};
    }
  }
`;

const $Topic = styled.div`
  ul,
  li {
    list-style: none;
    margin: 0;
    font-size: 15px;
  }

  ul {
    padding-left: 20px;
    padding-bottom: 20px;
  }
`;

const $TOC = styled.div`
  height: 0;
  overflow: hidden;

  ${props =>
    props.show &&
    css`
      height: auto;
    `}
`;

// -----------------------------------------------------------------------------

const Navigation = props => {
  const {pathname} = useLocation();

  const topics = [
    {
      name: 'Getting started',
      path: DOC_PATHS.gettingStarted,
      toc: gettingStartedTOC
    },
    {
      name: 'React hooks',
      path: DOC_PATHS.reactIntegration,
      toc: reactTOC
    }
  ];

  return (
    <$Navigation>
      {topics.map(({name, path, toc}) => (
        <$Topic key={path}>
          <NavLink exact to={path}>
            <span>{name}</span>
          </NavLink>
          <$TOC show={pathname === path}>
            <Markdown markdown={toc} />
          </$TOC>
        </$Topic>
      ))}
    </$Navigation>
  );
};

// -----------------------------------------------------------------------------

export default Navigation;
