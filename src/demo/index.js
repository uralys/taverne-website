import React from 'react';
import createLaTaverne from 'taverne';
import {Taverne} from 'taverne/hooks';
import {devtools} from 'taverne/middlewares';

// -----------------------------------------------------------------------------

import singleSquare from './features/single-square/reducer';
import singleRGB from './features/single-rgb/reducer';
import singlePack from './features/single-pack/reducer';
import multiPacks from './features/multi-packs/reducer';
import App from './app';

// -----------------------------------------------------------------------------

const Demo = ({resources}) => {
  const {dispatch, store} = createLaTaverne(
    {
      singlePack,
      singleRGB,
      singleSquare,
      multiPacks
    },
    [devtools]
  );

  return (
    <Taverne dispatch={dispatch} store={store}>
      <App resources={resources} />
    </Taverne>
  );
};

export default Demo;
