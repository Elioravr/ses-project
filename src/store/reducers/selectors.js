import {startCase} from 'lodash'

export const getSteps = store => store.steps
export const getCurrentStepIndex = store => store.currentStepIndex
export const getCurrentStep = store => getSteps(store)[getCurrentStepIndex(store)]
export const getLastStepValue = store => store.lastStepValue

export const getCurrentStepOptions = (store) => {
  const lastStepValue = getLastStepValue(store)
  let options = getCurrentStep(store).options

  if (lastStepValue) {
    options = options[lastStepValue]
  }

  return options
}

export const getCurrentStepButtons = (store) => {
  const lastStepValue = getLastStepValue(store)
  let buttons = getCurrentStep(store).buttons

  if (lastStepValue) {
    buttons = buttons[lastStepValue] || []
  }

  return buttons
}

export const getCurrentStepTitle = store => {
  const currentStep = getCurrentStep(store)
  let title = currentStep.labels.mainTitle

  if (currentStep.getTitleFromLastValue) {
    title = startCase(getLastStepValue(store))
  }

  return title
}
