// -----------------------------------------------------------------------------

const TOGGLE_SQUARE_IN_MULTI_PACKS = 'TOGGLE_SQUARE_IN_MULTI_PACKS';

// -----------------------------------------------------------------------------

const toggleSquare = {
  on: TOGGLE_SQUARE_IN_MULTI_PACKS,
  reduce: (state, payload) => {
    const {packNum, rgbNum, color} = payload;
    state[packNum][rgbNum][color]++;
  }
};

// -----------------------------------------------------------------------------

const createPack = () =>
  [0, 1, 2, 3, 4, 5].reduce(
    (acc, rgbNum) => ({...acc, [rgbNum]: {r: 0, g: 0, b: 0}}),
    {}
  );

const initialState = [0, 1, 2, 3, 4, 5].reduce(
  (acc, packNum) => ({...acc, [packNum]: createPack()}),
  {}
);

// -----------------------------------------------------------------------------

const description = {
  initialState,
  middlewares: [toggleSquare]
};

// -----------------------------------------------------------------------------

export default description;
export {TOGGLE_SQUARE_IN_MULTI_PACKS};
