import {startCase} from 'lodash'

export const getSteps = store => store.steps
export const getCurrentStepIndex = store => store.currentStepIndex
export const getCurrentStep = store => getSteps(store)[getCurrentStepIndex(store)]
export const getLastStepValue = store => {
  const lastIndex = getCurrentStepIndex(store) - 1
  const lastStep = getSteps(store)[lastIndex]
  return store.stepValues[lastStep.sectionName].value
}

export const getCurrentStepOptions = (store) => {
  const lastStepValue = getLastStepValue(store)
  let options = getCurrentStep(store).options

  if (lastStepValue) {
    options = options[lastStepValue]
  }

  return options
}

export const getCurrentStepButtons = (store) => {
  // TODO: Understand with Shlomi if we
  // need this functionality anymore.

  // const lastStepValue = getLastStepValue(store)
  let buttons = getCurrentStep(store).buttons

  // if (lastStepValue) {
  //   buttons = buttons[lastStepValue] || []
  // }

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
