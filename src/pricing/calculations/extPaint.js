import { floorsDiscount } from '../content/extPaint/categories'
import { overHangRatio } from '../content/extPaint/categories'
import { overHang } from '../content/extPaint/categories'
import { windowPrice } from '../content/extPaint/categories'

const parseDimensions = ({floors, homeSquareFoot, garageSquareFoot}) => {
  return {
    floors: parseInt(floors.result.value, 10),
    homeSquareFoot: parseInt(homeSquareFoot.result.value, 10),
    garageSquareFoot: parseInt(garageSquareFoot.result.value || '0', 10)
  }
}

export const getParams = function({overHangValue, dimensions, windows}) {
  return  {
    windows: parseInt(windows.result.value || '0', 10),
    overHang: overHang[overHangValue.result.value],
    dimensions: parseDimensions(dimensions.result)
  }
}

export const calculate = function(stepValues) {
  const params = getParams({
    windows: stepValues.windows.result.windows,
    overHangValue: stepValues['over-hang'],
    dimensions: stepValues.dimensions,
  })
  const {dimensions} = params
  const surfaceSize = (dimensions.homeSquareFoot * dimensions.floors)
  const discountedSurfaceSize = surfaceSize - (surfaceSize * floorsDiscount[dimensions.floors])
  const surfaceWithGarage = discountedSurfaceSize + dimensions.garageSquareFoot
  const overHangedPrice = params.overHang !== 'noOverHang' ? surfaceWithGarage * overHangRatio : surfaceWithGarage
  const windowPriced = (params.windows * windowPrice) + overHangedPrice
  return {value: windowPriced}
}
