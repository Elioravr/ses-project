import { calculate as calculateRoof } from './roof'
import { calculate as calculateExtPaint } from './extPaint'

export const mainCalculator = function(stepValues) {
  const whatValue = stepValues.what.result.value
  switch (whatValue) {
    case 'roof':
      return calculateRoof(stepValues)
    case 'exterior-paint':
      return calculateExtPaint(stepValues)
    default:
      return {}
  }
}
