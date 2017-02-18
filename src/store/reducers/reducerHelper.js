import {mainCalculator} from '../../pricing/calculations/main'

const NUMBER_OF_BASE_STEPS = 2
export const getSummaryValues = function(steps, currentStepIndex, updatedStepValues) {
  let summaryValues
  if (steps.length > NUMBER_OF_BASE_STEPS && currentStepIndex === steps.length - 1) {
    summaryValues = mainCalculator(updatedStepValues)
  }
  return summaryValues
}
