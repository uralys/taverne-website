// -----------------------------------------------------------------------------

const singleSquareStore = 'singleSquareStore';
const TOGGLE_SINGLE_SQUARE = 'TOGGLE_SINGLE_SQUARE';

// -----------------------------------------------------------------------------

const computeAction = async (currentState, action) => {
  let newState;

  switch (action.type) {
    case TOGGLE_SINGLE_SQUARE: {
      newState = {clickCount: currentState.clickCount + 1};
      break;
    }
    default:
      newState = {...currentState};
  }

  return newState;
};

// -----------------------------------------------------------------------------

const description = {
  initialState: {clickCount: 0},
  handledActions: [TOGGLE_SINGLE_SQUARE],
  computeAction
};

// -----------------------------------------------------------------------------

export default description;
export {singleSquareStore, TOGGLE_SINGLE_SQUARE};
