import { tiles } from '../content/roof/categories'
import { slope } from '../content/roof/categories'
import { overHang } from '../content/roof/categories'

const parseDimensions = ({floors, homeSquareFoot, garageSquareFoot}) => {
  return {
    floors: parseInt(floors.result.value, 10),
    homeSquareFoot: parseInt(homeSquareFoot.result.value, 10),
    garageSquareFoot: parseInt(garageSquareFoot.result.value || '0', 10)
  }
}

export const getRoofParams = function({whichValue, slopeValue, overHangValue, dimensions}) {
  return  {
    tiles: tiles[whichValue.result.value],
    slope: slope[slopeValue.result.value],
    overHang: overHang[overHangValue.result.value],
    dimensions: parseDimensions(dimensions.result)
  }
}

export const calculateRoof = function(stepValues) {
  const params = getRoofParams({
    whichValue: stepValues.which,
    slopeValue: stepValues.slope,
    overHangValue: stepValues['over-hang'],
    dimensions: stepValues.dimensions,
  })
  const {dimensions} = params
  return {value: params.tiles * params.slope * params.overHang * dimensions.floors * (dimensions.homeSquareFoot + dimensions.garageSquareFoot)}
}
