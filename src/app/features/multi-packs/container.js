// -----------------------------------------------------------------------------

import {useTaverne} from 'taverne/hooks';
import React from 'react';

// -----------------------------------------------------------------------------
// common components and settings

import $Pack from '../../../components/pack';
import $RGB from '../../../components/rgb';
import Square from '../../../components/square';
import COLORS from '../../../style/colors';

// -----------------------------------------------------------------------------

import {TOGGLE_SQUARE_IN_MULTI_PACKS} from './reducer';

// -----------------------------------------------------------------------------

const SquareContainer = props => {
  const {color, packNum, rgbNum} = props;
  const {dispatch, pour} = useTaverne();
  const clickCount = pour(`multiPacks.${packNum}.${rgbNum}.${color}`);

  return (
    <Square
      color={COLORS[color]}
      clickCount={clickCount}
      onClick={() =>
        dispatch({
          type: TOGGLE_SQUARE_IN_MULTI_PACKS,
          packNum,
          rgbNum,
          color
        })
      }
    />
  );
};

// -----------------------------------------------------------------------------

const RGBContainer = props => {
  const {rgbNum, packNum} = props;

  return (
    <$RGB>
      {['r', 'g', 'b'].map(color => (
        <SquareContainer
          key={color}
          color={color}
          rgbNum={rgbNum}
          packNum={packNum}
        />
      ))}
    </$RGB>
  );
};

// -----------------------------------------------------------------------------

const PackContainer = ({packNum}) => {
  return (
    <$Pack>
      {[0, 1, 2, 3, 4].map(rgbNum => (
        <RGBContainer key={`rgb-${rgbNum}`} rgbNum={rgbNum} packNum={packNum} />
      ))}
    </$Pack>
  );
};

// -----------------------------------------------------------------------------

const MultiPacks = props => {
  return (
    <>
      {[0, 1, 2, 3, 4].map(packNum => (
        <PackContainer key={`pack-${packNum}`} packNum={packNum} />
      ))}
    </>
  );
};

// -----------------------------------------------------------------------------

export default MultiPacks;
