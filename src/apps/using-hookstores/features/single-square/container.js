import React from 'react';
import {dispatch, useStore} from 'hookstores';
import Square from '../../../../components/square';

// -----------------------------------------------------------------------------

import {singleSquareStore, TOGGLE_SINGLE_SQUARE} from './store-description';

// -----------------------------------------------------------------------------

const propsMapping = {
  clickCount: 'clickCount'
};

const toggle = () => {
  dispatch({
    type: TOGGLE_SINGLE_SQUARE
  });
};

// -----------------------------------------------------------------------------

const SingleSquare = props => {
  const {clickCount} = useStore(singleSquareStore, propsMapping);
  return <Square color="#75AF3B" clickCount={clickCount} onClick={toggle} />;
};

// -----------------------------------------------------------------------------

export default SingleSquare;
