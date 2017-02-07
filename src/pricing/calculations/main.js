import { calculateRoof } from './roof'

export const mainCalculator = function(stepValues) {
  const whatValue = stepValues.what.result.value
  switch (whatValue) {
    case 'roof':
      return calculateRoof(stepValues)
    default:
      return {}
  }
}
