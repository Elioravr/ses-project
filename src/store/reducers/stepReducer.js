import {steps} from 'steps'

const initialState = {
  steps: steps,
  currentStepIndex: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_TO_NEXT_STEP": {
      const {lastStepValue, nextSteps} = action.payload

      return {
        ...state,
        currentStepIndex: state.currentStepIndex + 1,
        lastStepValue,
        steps: [...state.steps, ...nextSteps]
      }
    }

    default: {
      return state;
    }
  }
}
