import {steps} from 'steps'

const initialState = {
  steps: steps,
  stepValues: {},
  currentStepIndex: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_TO_NEXT_STEP": {
      const {stepValues} = state
      const {lastStepValue, sectionName, mainTitle, nextSteps} = action.payload
      const updatedStepValues = {
        ...stepValues,
        [sectionName]: {
          mainTitle,
          value: lastStepValue
        }
      }

      return {
        ...state,
        currentStepIndex: state.currentStepIndex + 1,
        lastStepValue,
        stepValues: updatedStepValues,
        steps: [...state.steps, ...nextSteps]
      }
    }

    case "MOVE_STEP_BACK": {
      return {
        ...state,
        currentStepIndex: state.currentStepIndex - 1
      }
    }

    default: {
      return state;
    }
  }
}
