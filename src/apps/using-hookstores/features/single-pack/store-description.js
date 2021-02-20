// -----------------------------------------------------------------------------

const TOGGLE_SQUARE_IN_SINGLE_PACK = 'TOGGLE_SQUARE_IN_SINGLE_PACK';

// -----------------------------------------------------------------------------

const toggleSquare = {
  on: TOGGLE_SQUARE_IN_SINGLE_PACK,
  reduce: (state, payload) => {
    const {num, color} = payload;
    state[num][color]++;
  }
};

// -----------------------------------------------------------------------------

const initialState = [0, 1, 2, 3, 4, 5].reduce(
  (acc, num) => ({...acc, [num]: {r: 0, g: 0, b: 0}}),
  {}
);

// -----------------------------------------------------------------------------

const description = {
  initialState,
  middlewares: [toggleSquare]
};

// -----------------------------------------------------------------------------

export default description;
export {TOGGLE_SQUARE_IN_SINGLE_PACK};
