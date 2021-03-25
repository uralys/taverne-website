// -----------------------------------------------------------------------------

import React from 'react';

// -----------------------------------------------------------------------------
// common components and settings

import {useTaverne} from 'taverne/hooks';
import Square from '../../components/square';
import COLORS from '../../../style/colors';

// -----------------------------------------------------------------------------

import {TOGGLE_SINGLE_SQUARE} from './reducer';

// -----------------------------------------------------------------------------

const GREEN = COLORS.g;

// -----------------------------------------------------------------------------

const SingleSquare = props => {
  const {dispatch, pour} = useTaverne();
  const clickCount = pour('singleSquare.clickCount');

  const toggle = () => {
    dispatch({
      type: TOGGLE_SINGLE_SQUARE
    });
  };

  return <Square color={GREEN} clickCount={clickCount} onClick={toggle} />;
};

// -----------------------------------------------------------------------------

export default SingleSquare;
