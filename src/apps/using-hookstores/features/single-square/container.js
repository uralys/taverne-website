// -----------------------------------------------------------------------------

import React from 'react';

// -----------------------------------------------------------------------------
// common components and settings

import {useHookstores} from 'hookstores';
import Square from '../../../../components/square';
import COLORS from '../../colors';

// -----------------------------------------------------------------------------

import {singleSquareStore, TOGGLE_SINGLE_SQUARE} from './store-description';

// -----------------------------------------------------------------------------

const GREEN = COLORS.g;

// -----------------------------------------------------------------------------

const propsMapping = {
  clickCount: 'clickCount'
};

// -----------------------------------------------------------------------------

const SingleSquare = props => {
  const {dispatch, useStore} = useHookstores();
  const {clickCount} = useStore(singleSquareStore, propsMapping);

  const toggle = () => {
    dispatch({
      type: TOGGLE_SINGLE_SQUARE
    });
  };

  return <Square color={GREEN} clickCount={clickCount} onClick={toggle} />;
};

// -----------------------------------------------------------------------------

export default SingleSquare;
