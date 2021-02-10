// -----------------------------------------------------------------------------

const singleRGBStore = 'singleRGBStore';
const TOGGLE_SINGLE_RGB_SQUARE = 'TOGGLE_SINGLE_RGB_SQUARE';

// -----------------------------------------------------------------------------

const computeAction = async (currentState, action) => {
  let newState;

  switch (action.type) {
    case TOGGLE_SINGLE_RGB_SQUARE: {
      const {color} = action;
      newState = {...currentState, [color]: currentState[color] + 1};
      break;
    }
    default:
      newState = {...currentState};
  }

  return newState;
};

// -----------------------------------------------------------------------------

const description = {
  initialState: {r: 0, g: 0, b: 0},
  handledActions: [TOGGLE_SINGLE_RGB_SQUARE],
  computeAction
};

// -----------------------------------------------------------------------------

export default description;
export {singleRGBStore, TOGGLE_SINGLE_RGB_SQUARE};
