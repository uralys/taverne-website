// -----------------------------------------------------------------------------

import React from 'react';
import {dispatch, useStore} from 'hookstores';

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

const toggler = num => color => () => {
  dispatch({
    type: TOGGLE_SINGLE_LINE_SQUARE,
    num,
    color
  });
};

// -----------------------------------------------------------------------------

const SquareContainer = props => {
  const {color, toggle, propsMapping} = props;
  const {clickCount} = useStore(singleLineStore, propsMapping(color));

  return (
    <Square
      color={COLORS[color]}
      clickCount={clickCount}
      onClick={toggle(color)}
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
          toggle={toggler(num)}
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
