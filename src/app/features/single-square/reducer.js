// -----------------------------------------------------------------------------

const TOGGLE_SINGLE_SQUARE = 'TOGGLE_SINGLE_SQUARE';

// -----------------------------------------------------------------------------

const initialState = {clickCount: 0};

// -----------------------------------------------------------------------------

const toggleSquare = {
  on: TOGGLE_SINGLE_SQUARE,
  reduce: (state, payload) => {
    state.clickCount++;
  }
};

// -----------------------------------------------------------------------------

const reactions = [toggleSquare];

// -----------------------------------------------------------------------------

export default {initialState, reactions};
export {TOGGLE_SINGLE_SQUARE};
