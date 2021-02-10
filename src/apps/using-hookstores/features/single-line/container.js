import React from 'react';
import {dispatch} from 'hookstores';

import {singleLineStore, TOGGLE_SINGLE_LINE_SQUARE} from './store-description';
import SingleSquare from '../single-square/container';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

const $Line = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const $RGB = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

// -----------------------------------------------------------------------------

const toggle = (num, color) => () => {
  dispatch({
    type: TOGGLE_SINGLE_LINE_SQUARE,
    num,
    color
  });
};

// -----------------------------------------------------------------------------

const SingleLine = props => {
  return (
    <$Line>
      <$RGB>
        <SingleSquare
          color="#CE3B1E"
          store={singleLineStore}
          toggle={toggle(0, 'r')}
          propsMapping={{
            clickCount: '0.r'
          }}
        />
        <SingleSquare
          color="#75AF3B"
          store={singleLineStore}
          toggle={toggle(0, 'g')}
          propsMapping={{
            clickCount: '0.g'
          }}
        />
        <SingleSquare
          color="#4C7FB5"
          store={singleLineStore}
          toggle={toggle(0, 'b')}
          propsMapping={{
            clickCount: '0.b'
          }}
        />
      </$RGB>

      <SingleSquare
        color="#f0f"
        store={singleLineStore}
        toggle={toggle(0, 'b')}
        propsMapping={{
          clickCount: '0.b'
        }}
      />
    </$Line>
  );
};

// -----------------------------------------------------------------------------

export default SingleLine;
