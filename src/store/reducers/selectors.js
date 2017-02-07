import {startCase} from 'lodash'

export const getSteps = store => store.steps
export const getCurrentStepIndex = store => store.currentStepIndex
export const getIsStepsFinished = store => getSteps(store).length === getCurrentStepIndex(store)
export const getCurrentStep = store => getSteps(store)[getCurrentStepIndex(store)]
export const getStepValues = store => store.stepValues
export const getLastStepResult = store => {
  const lastIndex = getCurrentStepIndex(store) - 1
  const lastStep = getSteps(store)[lastIndex]
  return getStepValues(store)[lastStep.sectionName].result
}

export const getCurrentStepOptions = (store) => {
  const lastStepResult = getLastStepResult(store)
  let options = getCurrentStep(store).options

  if (lastStepResult) {
    options = options[lastStepResult.value]
  }

  return options
}

export const getCurrentStepButtons = (store) => {
  // TODO: Understand with Shlomi if we
  // need this functionality anymore.

  // const lastStepResult = getLastStepResult(store)
  let buttons = getCurrentStep(store).buttons

  // if (lastStepResult) {
  //   buttons = buttons[lastStepResult] || []
  // }

  return buttons
}

export const getCurrentStepTitle = store => {
  const currentStep = getCurrentStep(store)
  let title = currentStep.labels.mainTitle

  if (currentStep.getTitleFromLastValue) {
    title = startCase(getLastStepResult(store).text)
  }

  return title
}

// export const getWelcomeValue = store => {
//   return store.stepValues.welcome.result
// }
//
// export const getWhatValue = store => {
//   return store.stepValues.what.result
// }
//
// export const getSummaryParameters = store => {
//   const welcomeValue = getWelcomeValue(store)
//   const whatValue = getWhatValue(store)
//   const stepValues = getStepValues(store)
//   switch (whatValue) {
//     case 'roof':
//       return {
//         which: stepValues.which,
//         slope: stepValues.slope,
//         'over-hang': stepValues['over-hang'],
//         dimensions: stepValues.dimensions
//       }
//       break
//     default:
//       break
//   }
// }
//
// export const getRoofParameters = store => {
//
// }
