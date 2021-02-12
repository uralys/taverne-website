// -----------------------------------------------------------------------------

const singlePackStore = 'singlePackStore';
const TOGGLE_SQUARE_IN_SINGLE_PACK = 'TOGGLE_SQUARE_IN_SINGLE_PACK';

// -----------------------------------------------------------------------------

const computeAction = async (currentState, action) => {
  let newState;

  switch (action.type) {
    case TOGGLE_SQUARE_IN_SINGLE_PACK: {
      const {num, color} = action;
      newState = {
        ...currentState,
        [num]: {
          ...currentState[num],
          [color]: currentState[num][color] + 1
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

const initialState = [0, 1, 2, 3, 4, 5].reduce(
  (acc, num) => ({...acc, [num]: {r: 0, g: 0, b: 0}}),
  {}
);

// -----------------------------------------------------------------------------

const description = {
  initialState,
  handledActions: [TOGGLE_SQUARE_IN_SINGLE_PACK],
  computeAction
};

// -----------------------------------------------------------------------------

export default description;
export {singlePackStore, TOGGLE_SQUARE_IN_SINGLE_PACK};
