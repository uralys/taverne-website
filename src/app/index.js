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

const _App = props => {
  const {multiLayout = false} = props;

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
      <App multiLayout={multiLayout} />
    </Taverne>
  );
};

export default _App;
