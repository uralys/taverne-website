import React, {useLayoutEffect} from 'react';
import Square from '../../../../components/square';

import {useStore} from 'hookstores';

// -----------------------------------------------------------------------------

const propsMapping = {
  selected: 'selected'
};

// -----------------------------------------------------------------------------

const SingleSquare = props => {
  // const {selected} = useStore('singleSquareStore', propsMapping);

  useLayoutEffect(() => {
    console.log(`☢️ on mounted single-square container`);
    // createStores({singleSquareStore});
  }, []);

  // return <Square color="#75AF3B" selected={selected} />;
  return <Square color="#75AF3B" />;
};

// -----------------------------------------------------------------------------

export default SingleSquare;
