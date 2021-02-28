// -----------------------------------------------------------------------------

import React from 'react';

// -----------------------------------------------------------------------------
// common components and settings

import {useTaverne} from 'taverne/hooks';
import Square from '../../../../components/square';
import COLORS from '../../colors';

// -----------------------------------------------------------------------------

import {TOGGLE_SINGLE_SQUARE} from './store';

// -----------------------------------------------------------------------------

const GREEN = COLORS.g;

// -----------------------------------------------------------------------------

const propsMapping = {
  clickCount: 'clickCount'
};

// -----------------------------------------------------------------------------

const SingleSquare = props => {
  const {dispatch, useSingleSquareStore} = useTaverne();
  const {clickCount} = useSingleSquareStore(propsMapping);

  const toggle = () => {
    dispatch({
      type: TOGGLE_SINGLE_SQUARE
    });
  };

  return <Square color={GREEN} clickCount={clickCount} onClick={toggle} />;
};

// -----------------------------------------------------------------------------

export default SingleSquare;
