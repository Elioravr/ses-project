import {omit} from 'lodash';
import {steps} from 'steps'
import {getSummaryValues} from './reducerHelper'

const initialState = {
  steps: steps,
  stepValues: {},
  currentStepIndex: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_TO_NEXT_STEP": {
      const {stepValues} = state
      const {lastStepResult, sectionName, mainTitle, nextSteps} = action.payload
      const currentStepIndex = state.currentStepIndex + 1
      const steps = [...state.steps, ...nextSteps]
      const updatedStepValues = {
        ...stepValues,
        [sectionName]: {
          mainTitle,
          result: lastStepResult
        }
      }

      const summaryValues = getSummaryValues(steps, currentStepIndex, updatedStepValues)
      if (summaryValues) {
        updatedStepValues.summary = {result: summaryValues}
      }

      return {
        ...state,
        currentStepIndex,
        lastStepResult,
        stepValues: updatedStepValues,
        steps,
        summaryValues
      }
    }

    case "MOVE_STEP_BACK": {
      const {stepValues, currentStepIndex, steps} = state
      const lastSectionName = steps[currentStepIndex - 1].sectionName
      const stepValuesWithoutLastStep = omit(stepValues, lastSectionName)
      const newSteps = [...steps]

      if (action.payload.shouldRemoveNextSteps) {
        newSteps.splice(currentStepIndex, steps.length)
      }

      return {
        ...state,
        currentStepIndex: state.currentStepIndex - 1,
        stepValues: stepValuesWithoutLastStep,
        steps: newSteps
      }
    }

    default: {
      return state;
    }
  }
}
