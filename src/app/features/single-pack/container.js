// -----------------------------------------------------------------------------

import {useTaverne} from 'taverne/hooks';
import React from 'react';

// -----------------------------------------------------------------------------
// common components and settings

import $Pack from '../../../components/pack';
import $RGB from '../../../components/rgb';
import Square from '../../../components/square';
import COLORS from '../../../colors';

// -----------------------------------------------------------------------------

import {TOGGLE_SQUARE_IN_SINGLE_PACK} from './reducer';

// -----------------------------------------------------------------------------

const SquareContainer = props => {
  const {color, num} = props;
  const {dispatch, pour} = useTaverne();
  const clickCount = pour(`singlePack.${num}.${color}`);

  return (
    <Square
      color={COLORS[color]}
      clickCount={clickCount}
      onClick={() =>
        dispatch({
          type: TOGGLE_SQUARE_IN_SINGLE_PACK,
          num,
          color
        })
      }
    />
  );
};

// -----------------------------------------------------------------------------

const RGBContainer = props => {
  const {num} = props;

  return (
    <$RGB>
      {['r', 'g', 'b'].map(color => (
        <SquareContainer key={color} color={color} num={num} />
      ))}
    </$RGB>
  );
};

// -----------------------------------------------------------------------------

const SinglePack = props => {
  return (
    <$Pack>
      {[0, 1, 2, 3, 4].map(num => (
        <RGBContainer key={`rgb-${num}`} num={num} />
      ))}
    </$Pack>
  );
};

// -----------------------------------------------------------------------------

export default SinglePack;
