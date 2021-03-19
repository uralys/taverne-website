export default `
import createLaTaverne from 'taverne';
import {Taverne} from 'taverne/hooks';

import singleSquare from './features/single-square/reducer';
import singlePack from './features/single-pack/reducer';


const {dispatch, store} = createLaTaverne({
    singleSquare,
    singlePack,
  }
);

render(
  <Taverne dispatch={dispatch} store={store}>
    <App id={id} />
  </Taverne>,
  container
);
`;
