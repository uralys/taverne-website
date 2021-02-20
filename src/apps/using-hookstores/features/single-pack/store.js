// -----------------------------------------------------------------------------

const TOGGLE_SQUARE_IN_SINGLE_PACK = 'TOGGLE_SQUARE_IN_SINGLE_PACK';

// -----------------------------------------------------------------------------

const initialState = {
  0: {r: 0, g: 0, b: 0},
  1: {r: 0, g: 0, b: 0},
  2: {r: 0, g: 0, b: 0},
  3: {r: 0, g: 0, b: 0},
  4: {r: 0, g: 0, b: 0}
};

// -----------------------------------------------------------------------------

const toggleSquare = {
  on: TOGGLE_SQUARE_IN_SINGLE_PACK,
  reduce: (state, payload) => {
    const {num, color} = payload;
    state[num][color]++;
  }
};

// -----------------------------------------------------------------------------

const reactions = [toggleSquare];

// -----------------------------------------------------------------------------

export default {initialState, reactions};
export {TOGGLE_SQUARE_IN_SINGLE_PACK};
