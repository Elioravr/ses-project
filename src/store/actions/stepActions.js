import {nextSteps} from 'steps';

export const moveToNextStep = (lastStepResult, {sectionName, mainTitle, continueWithLastValueSteps} = {}) => {
  const lastValueNextSteps = continueWithLastValueSteps ? nextSteps[lastStepResult.value.toLowerCase()] : []

  return {
    type: "MOVE_TO_NEXT_STEP",
    payload: {lastStepResult, sectionName, mainTitle, nextSteps: lastValueNextSteps}
  }
}

export const moveStepBack = ({continueWithLastValueSteps}) => {
  return {
    type: "MOVE_STEP_BACK",
    payload: {
      shouldRemoveNextSteps: continueWithLastValueSteps
    }
  }
}
