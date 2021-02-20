// -----------------------------------------------------------------------------

import {useHookstores} from 'hookstores';
import React from 'react';

// -----------------------------------------------------------------------------
// common components and settings

import $RGB from '../../../../components/rgb';
import Square from '../../../../components/square';
import COLORS from '../../colors';

// -----------------------------------------------------------------------------

import {TOGGLE_SINGLE_RGB_SQUARE} from './store-description';

// -----------------------------------------------------------------------------

const propsMapping = color => ({
  clickCount: color
});

// -----------------------------------------------------------------------------

const SquareContainer = props => {
  const {color} = props;
  const {dispatch, useSingleRGBStore} = useHookstores();
  const {clickCount} = useSingleRGBStore(propsMapping(color));

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
