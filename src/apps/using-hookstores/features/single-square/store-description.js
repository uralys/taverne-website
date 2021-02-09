// -----------------------------------------------------------------------------

const TOGGLE_SINGLE_SQUARE = 'TOGGLE_SINGLE_SQUARE';

// -----------------------------------------------------------------------------

const computeAction = async (currentState, action) => {
  let newState;

  switch (action.type) {
    case TOGGLE_SINGLE_SQUARE: {
      newState = {selected: !currentState.selected};
      break;
    }
    default:
      newState = {...currentState};
  }

  return newState;
};

// -----------------------------------------------------------------------------

const description = {
  initialState: {selected: false},
  handledActions: [TOGGLE_SINGLE_SQUARE],
  computeAction
};

// -----------------------------------------------------------------------------

export default description;
export {TOGGLE_SINGLE_SQUARE};
