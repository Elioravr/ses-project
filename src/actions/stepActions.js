export const moveToNextStep = (lastStepValue) => {
  return {
    type: "MOVE_TO_NEXT_STEP",
    payload: lastStepValue
  }
}
