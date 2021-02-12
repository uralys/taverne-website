// -----------------------------------------------------------------------------

const multiPacksStore = 'multiPacksStore';
const TOGGLE_SQUARE_IN_MULTI_PACKS = 'TOGGLE_SQUARE_IN_MULTI_PACKS';

// -----------------------------------------------------------------------------

const computeAction = async (currentState, action) => {
  let newState;

  switch (action.type) {
    case TOGGLE_SQUARE_IN_MULTI_PACKS: {
      const {packNum, rgbNum, color} = action;
      newState = {
        ...currentState,
        [packNum]: {
          ...currentState[packNum],
          [rgbNum]: {
            ...currentState[packNum][rgbNum],
            [color]: currentState[packNum][rgbNum][color] + 1
          }
        }
      };
      break;
    }
    default:
      newState = {...currentState};
  }

  return newState;
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
  handledActions: [TOGGLE_SQUARE_IN_MULTI_PACKS],
  computeAction
};

// -----------------------------------------------------------------------------

export default description;
export {multiPacksStore, TOGGLE_SQUARE_IN_MULTI_PACKS};
