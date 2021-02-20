// -----------------------------------------------------------------------------

const TOGGLE_SINGLE_RGB_SQUARE = 'TOGGLE_SINGLE_RGB_SQUARE';

// -----------------------------------------------------------------------------

const toggleSquare = {
  on: TOGGLE_SINGLE_RGB_SQUARE,
  reduce: (state, payload) => {
    const {color} = payload;
    state[color]++;
  }
};

// -----------------------------------------------------------------------------

const description = {
  initialState: {r: 0, g: 0, b: 0},
  middlewares: [toggleSquare]
};

// -----------------------------------------------------------------------------

export default description;
export {TOGGLE_SINGLE_RGB_SQUARE};
