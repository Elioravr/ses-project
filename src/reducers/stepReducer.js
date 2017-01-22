import {steps} from '../steps'

const initialState = {
  steps: steps,
  currentStepIndex: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_TO_NEXT_STEP": {
      return {
        ...state,
        currentStepIndex: state.currentStepIndex + 1,
        lastStepValue: action.payload
      }
    }

    default: {
      return state;
    }
  }
}
