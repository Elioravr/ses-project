import {nextSteps} from 'steps';

export const moveToNextStep = (lastStepValue, {continueWithLastValueSteps} = {}) => {
  const lastValueNextSteps = continueWithLastValueSteps ? nextSteps[lastStepValue.toLowerCase()] : []

  return {
    type: "MOVE_TO_NEXT_STEP",
    payload: {lastStepValue, nextSteps: lastValueNextSteps}
  }
}
