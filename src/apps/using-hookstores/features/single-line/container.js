// -----------------------------------------------------------------------------

import {useHookstores} from 'hookstores';
import React from 'react';
// import {dispatch, useStore} from 'hookstores';

// -----------------------------------------------------------------------------
// common components and settings

import $Line from '../../../../components/line';
import $RGB from '../../../../components/rgb';
import Square from '../../../../components/square';
import COLORS from '../../colors';

// -----------------------------------------------------------------------------

import {singleLineStore, TOGGLE_SINGLE_LINE_SQUARE} from './store-description';

// -----------------------------------------------------------------------------

const propsMapper = num => color => ({
  clickCount: `${num}.${color}`
});

// -----------------------------------------------------------------------------

const SquareContainer = props => {
  const {color, num, propsMapping} = props;
  const {dispatch, useStore} = useHookstores();
  const {clickCount} = useStore(singleLineStore, propsMapping(color));

  return (
    <Square
      color={COLORS[color]}
      clickCount={clickCount}
      onClick={() =>
        dispatch({
          type: TOGGLE_SINGLE_LINE_SQUARE,
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
        <SquareContainer
          key={color}
          color={color}
          num={num}
          propsMapping={propsMapper(num)}
        />
      ))}
    </$RGB>
  );
};

// -----------------------------------------------------------------------------

const SingleLine = props => {
  return (
    <$Line>
      {[0, 1, 2, 3, 4].map(num => (
        <RGBContainer key={`rgb-${num}`} num={num} />
      ))}
    </$Line>
  );
};

// -----------------------------------------------------------------------------

export default SingleLine;
