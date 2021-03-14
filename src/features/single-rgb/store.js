// -----------------------------------------------------------------------------

const TOGGLE_SINGLE_RGB_SQUARE = 'TOGGLE_SINGLE_RGB_SQUARE';

// -----------------------------------------------------------------------------

const initialState = {r: 0, g: 0, b: 0};

// -----------------------------------------------------------------------------

const toggleSquare = {
  on: TOGGLE_SINGLE_RGB_SQUARE,
  reduce: (state, payload) => {
    const {color} = payload;
    state[color]++;
  }
};

// -----------------------------------------------------------------------------

const reactions = [toggleSquare];

// -----------------------------------------------------------------------------

export default {initialState, reactions};
export {TOGGLE_SINGLE_RGB_SQUARE};
