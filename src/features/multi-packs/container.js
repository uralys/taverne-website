// -----------------------------------------------------------------------------

import {useTaverne} from 'taverne/hooks';
import React from 'react';

// -----------------------------------------------------------------------------
// common components and settings

import $Pack from '../../components/pack';
import $RGB from '../../components/rgb';
import Square from '../../components/square';
import COLORS from '../../colors';

// -----------------------------------------------------------------------------

import {TOGGLE_SQUARE_IN_MULTI_PACKS} from './store';

// -----------------------------------------------------------------------------

const propsMapper = (packNum, rgbNum) => color => ({
  clickCount: `${packNum}.${rgbNum}.${color}`
});

// -----------------------------------------------------------------------------

const SquareContainer = props => {
  const {color, packNum, rgbNum, propsMapping} = props;
  const {dispatch, useMultiPacksStore} = useTaverne();
  const {clickCount} = useMultiPacksStore(propsMapping(color));

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
          propsMapping={propsMapper(packNum, rgbNum)}
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
