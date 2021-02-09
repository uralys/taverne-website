import React from 'react';
import {dispatch, useStore} from 'hookstores';
import RGB from '../../../../components/rgb';

import {singleRGBStore, TOGGLE_SINGLE_RGB_SQUARE} from './store-description';

// -----------------------------------------------------------------------------

const propsMapping = {
  r: 'r',
  g: 'g',
  b: 'b'
};

const toggle = color => () => {
  dispatch({
    type: TOGGLE_SINGLE_RGB_SQUARE,
    color
  });
};

// -----------------------------------------------------------------------------

const SingleRGB = props => {
  const {r, g, b} = useStore(singleRGBStore, propsMapping);
  console.log('rendered single rgb', {r, g, b});

  // onRClick = {toggleR};

  return <RGB r={r} g={g} b={b} toggle={toggle} />;
};

// -----------------------------------------------------------------------------

export default SingleRGB;
