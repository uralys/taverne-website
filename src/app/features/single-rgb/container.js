// -----------------------------------------------------------------------------

import {useTaverne} from 'taverne/hooks';
import React from 'react';

// -----------------------------------------------------------------------------
// common components and settings

import $RGB from '../../../components/rgb';
import Square from '../../../components/square';
import COLORS from '../../../style/colors';

// -----------------------------------------------------------------------------

import {TOGGLE_SINGLE_RGB_SQUARE} from './reducer';

// -----------------------------------------------------------------------------

const SquareContainer = props => {
  const {color} = props;
  const {dispatch, pour} = useTaverne();
  const clickCount = pour(`singleRGB.${color}`);

  return (
    <Square
      color={COLORS[color]}
      clickCount={clickCount}
      onClick={() =>
        dispatch({
          type: TOGGLE_SINGLE_RGB_SQUARE,
          color
        })
      }
    />
  );
};

// -----------------------------------------------------------------------------

const SingleRGB = props => (
  <$RGB>
    <SquareContainer color="r" />
    <SquareContainer color="g" />
    <SquareContainer color="b" />
  </$RGB>
);

// -----------------------------------------------------------------------------

export default SingleRGB;
