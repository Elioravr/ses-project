import { tiles } from '../content/roof/tiles'
import { slope } from '../content/roof/slope'
import { overHang } from '../content/roof/overHang'

function parseDimensions(dimensions) {
  return {
    floors: parseInt(dimensions.floors.result.value, 10),
    homeSquareFoot: parseInt(dimensions.homeSquareFoot.result.value, 10),
    garageSquareFoot: parseInt(dimensions.garageSquareFoot.result.value || '1', 10)
  }
}

export const getRoofParams = function(stepValues) {
  return  {
    tiles: tiles[stepValues.which.result.value],
    slope: slope[stepValues.slope.result.value],
    overHang: overHang[stepValues['over-hang'].result.value],
    dimensions: parseDimensions(stepValues.dimensions.result)
  }
}

export const calculateRoof = function(stepValues) {
  const params = getRoofParams(stepValues)
  const {dimensions} = params
  return {value: params.tiles * params.slope * params.overHang * dimensions.floors * dimensions.homeSquareFoot *  dimensions.garageSquareFoot}
}
