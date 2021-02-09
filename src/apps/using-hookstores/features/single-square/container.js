import React from 'react';
import {dispatch, useStore} from 'hookstores';
import Square from '../../../../components/square';

import {TOGGLE_SINGLE_SQUARE} from './store-description';

// -----------------------------------------------------------------------------

const propsMapping = {
  selected: 'selected'
};

const toggle = () => {
  dispatch({
    type: TOGGLE_SINGLE_SQUARE
  });
};

// -----------------------------------------------------------------------------

const SingleSquare = props => {
  const {selected} = useStore('singleSquareStore', propsMapping);
  console.log('rendered single square', selected);

  return <Square color="#75AF3B" selected={selected} onClick={toggle} />;
};

// -----------------------------------------------------------------------------

export default SingleSquare;
