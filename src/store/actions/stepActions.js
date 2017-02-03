import {nextSteps} from 'steps';

export const moveToNextStep = (lastStepValue, {sectionName, mainTitle, continueWithLastValueSteps} = {}) => {
  const lastValueNextSteps = continueWithLastValueSteps ? nextSteps[lastStepValue.toLowerCase()] : []

  return {
    type: "MOVE_TO_NEXT_STEP",
    payload: {lastStepValue, sectionName, mainTitle, nextSteps: lastValueNextSteps}
  }
}
