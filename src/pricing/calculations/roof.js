import {tiles, slope, overHang} from '../content/roof/categories'
import {parseDimensions} from './utils'

export const getParams = ({whichValue, slopeValue, overHangValue, dimensions}) => {
  return  {
    tiles: tiles[whichValue.result.value],
    slope: slope[slopeValue.result.value],
    overHang: overHang[overHangValue.result.value],
    dimensions: parseDimensions(dimensions.result)
  }
}

export const calculate = (stepValues) => {
  const params = getParams({
    whichValue: stepValues.which,
    slopeValue: stepValues.slope,
    overHangValue: stepValues.overHang,
    dimensions: stepValues.dimensions,
  })
  const {dimensions} = params
  const finalPrice = params.tiles * params.slope * params.overHang * dimensions.floors * (dimensions.homeSquareFoot + dimensions.garageSquareFoot)
  return {value: finalPrice, price: finalPrice}
}
