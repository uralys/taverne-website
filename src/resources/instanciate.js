export default `

import React from 'react';
import {render} from 'react-dom';
import createLaTaverne from 'taverne';
import {Taverne} from 'taverne/hooks';

import singleSquare from './features/single-square/reducer';

const {dispatch, store} = createLaTaverne({singleSquare});

render(
  <Taverne dispatch={dispatch} store={store}>
    <App/>
  </Taverne>,
  container
);
`;
