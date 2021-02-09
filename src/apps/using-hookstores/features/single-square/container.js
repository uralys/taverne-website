import React from 'react';
import {useStore} from 'hookstores';
import Square from '../../../../components/square';

// -----------------------------------------------------------------------------

const propsMapping = {
  selected: 'selected'
};

// -----------------------------------------------------------------------------

const SingleSquare = props => {
  const {selected} = useStore('singleSquareStore', propsMapping);
  console.log('rendered single square', selected);
  return <Square color="#75AF3B" selected={selected} />;
};

// -----------------------------------------------------------------------------

export default SingleSquare;
