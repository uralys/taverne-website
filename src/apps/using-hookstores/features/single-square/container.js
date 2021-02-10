// -----------------------------------------------------------------------------

import React from 'react';
import {dispatch, useStore} from 'hookstores';

// -----------------------------------------------------------------------------
// common components and settings

import Square from '../../../../components/square';
import COLORS from '../../colors';

// -----------------------------------------------------------------------------

import {singleSquareStore, TOGGLE_SINGLE_SQUARE} from './store-description';

// -----------------------------------------------------------------------------

const GREEN = COLORS.g;

// -----------------------------------------------------------------------------

const propsMapping = {
  clickCount: 'clickCount'
};

const toggle = () => {
  dispatch({
    type: TOGGLE_SINGLE_SQUARE
  });
};

// -----------------------------------------------------------------------------

const SingleSquare = props => {
  const {clickCount} = useStore(singleSquareStore, propsMapping);
  return <Square color={GREEN} clickCount={clickCount} onClick={toggle} />;
};

// -----------------------------------------------------------------------------

export default SingleSquare;
