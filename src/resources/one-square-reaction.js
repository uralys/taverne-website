export default `/* src/features/single-square/reducer.js */
const reaction = {
  on: TOGGLE_SINGLE_SQUARE,
  reduce: (state, payload) => {
    state.clickCount++;
  }
};

/* src/features/single-square/container.js */
import {useTaverne} from 'taverne/hooks';

const {pour} = useTaverne();
const clickCount = pour('singleSquare.clickCount');
`;
