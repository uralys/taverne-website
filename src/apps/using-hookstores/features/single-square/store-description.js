// -----------------------------------------------------------------------------

const TOGGLE_SINGLE_SQUARE = 'TOGGLE_SINGLE_SQUARE';

// -----------------------------------------------------------------------------

const toggleSquare = {
  on: TOGGLE_SINGLE_SQUARE,
  reduce: (state, payload) => {
    state.clickCount++;
  }
};

// -----------------------------------------------------------------------------

const description = {
  initialState: {clickCount: 0},
  middlewares: [toggleSquare]
};

// -----------------------------------------------------------------------------

export default description;
export {TOGGLE_SINGLE_SQUARE};
